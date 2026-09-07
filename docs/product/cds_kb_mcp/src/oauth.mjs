// oauth.mjs — self-contained OAuth 2.1 authorization server for cds-kb-mcp.
//
// Provides the full authorization-code + PKCE (S256) flow so MCP clients that
// speak OAuth 2.1 (Claude Desktop / Cursor / recent VS Code builds, etc.) can
// authenticate with a real browser-free code exchange, alongside the existing
// API_KEY / JWKS modes in auth.mjs.
//
// Enable by setting CDS_KB_OAUTH_SECRET (HS256 signing key, >= 32 chars).
// Optional: CDS_KB_OAUTH_CLIENT_ID (default "cds-kb-client"),
// CDS_KB_OAUTH_TOKEN_TTL (seconds, default 3600), CDS_KB_PUBLIC_URL (issuer,
// used for the well-known documents; derived from request host when unset).
//
// Endpoints served by this module (mount in server.mjs):
//   GET  /.well-known/oauth-protected-resource   (via @modelcontextprotocol/express mcpAuthMetadataRouter)
//   GET  /.well-known/oauth-authorization-server (via mcpAuthMetadataRouter)
//   GET  /oauth/authorize                         — authorization endpoint (PKCE S256)
//   POST /oauth/token                             — token endpoint
//
// The returned `oauthVerifier` implements the SDK's OAuthTokenVerifier
// interface and is handed to requireBearerAuth() for the /mcp route.

import { SignJWT, jwtVerify } from 'jose';
import { createHash, randomBytes } from 'node:crypto';

const SECRET = (process.env.CDS_KB_OAUTH_SECRET || '').trim();
const CLIENT_ID = (process.env.CDS_KB_OAUTH_CLIENT_ID || 'cds-kb-client').trim();
const TOKEN_TTL = parseInt(process.env.CDS_KB_OAUTH_TOKEN_TTL || '3600', 10) || 3600;
const AUTH_CODE_TTL_MS = 600000; // 10 min
const SCOPES = ['cds_kb:read'];

// ── Dynamic client registry (RFC 7591) ─────────────────────────────────────
// client_id -> { clientName, redirectUris, grantTypes, responseTypes,
//                tokenEndpointAuthMethod, registeredAt }. In-memory, same
// lifetime as the auth-code store: a restart invalidates dynamically
// registered clients and they must re-register (documented; the static
// CDS_KB_OAUTH_CLIENT_ID always works).
const registeredClients = new Map();

function registerClient(body) {
  const redirectUris = Array.isArray(body.redirect_uris)
    ? body.redirect_uris.filter((u) => typeof u === 'string' && /^https?:\/\//.test(u))
    : [];
  if (redirectUris.length === 0) {
    const err = new Error('redirect_uris is required and must contain at least one http(s) URI');
    err.status = 400;
    throw err;
  }
  const clientId = `dyn_${randomBytes(12).toString('hex')}`;
  const entry = {
    clientName: String(body.client_name || 'dynamic-client'),
    redirectUris,
    grantTypes: Array.isArray(body.grant_types) ? body.grant_types : ['authorization_code'],
    responseTypes: Array.isArray(body.response_types) ? body.response_types : ['code'],
    tokenEndpointAuthMethod: String(body.token_endpoint_auth_method || 'none'),
    registeredAt: new Date().toISOString(),
  };
  registeredClients.set(clientId, entry);
  return {
    client_id: clientId,
    client_id_issued_at: Math.floor(Date.now() / 1000),
    client_name: entry.clientName,
    redirect_uris: entry.redirectUris,
    grant_types: entry.grantTypes,
    response_types: entry.responseTypes,
    token_endpoint_auth_method: entry.tokenEndpointAuthMethod,
    // Public client (PKCE) — no client_secret issued, matching the token
    // endpoint's token_endpoint_auth_methods_supported: ['none'].
    token_endpoint_auth_signing_alg: undefined,
  };
}

function isKnownClient(clientId) {
  return clientId === CLIENT_ID || registeredClients.has(clientId);
}

/**
 * POST /oauth/register — RFC 7591 dynamic client registration.
 * Accepts { client_name, redirect_uris, grant_types, response_types,
 * token_endpoint_auth_method } and returns OAuthClientInformation.
 */
export async function registerHandler(req, res) {
  if (!oauthEnabled()) return res.status(404).json({ error: 'oauth_not_enabled' });
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'invalid_client_metadata' });
    }
  }
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'invalid_client_metadata', error_description: 'JSON body required' });
  }
  try {
    const info = registerClient(body);
    return res.status(201).json(info);
  } catch (e) {
    return res.status(e.status || 400).json({ error: 'invalid_client_metadata', error_description: e.message });
  }
}

export function oauthEnabled() {
  return SECRET.length >= 32;
}

export function describeOAuth() {
  return oauthEnabled() ? `oauth(client=${CLIENT_ID})` : 'off';
}

// ── In-memory one-time authorization codes ─────────────────────────────────
// code -> { clientId, redirectUri, codeChallenge, expiresAt }
const authCodes = new Map();

// Periodically prune expired, never-exchanged codes so the map can't grow
// without bound on a long-lived public server (codes are one-time and
// short-lived, but minted-but-never-exchanged entries would otherwise leak).
const authCodeSweep = setInterval(() => {
  const now = Date.now();
  for (const [code, entry] of authCodes) {
    if (entry.expiresAt <= now) authCodes.delete(code);
  }
}, 60_000);
authCodeSweep.unref?.();

function b64url(buf) {
  return Buffer.from(buf).toString('base64url');
}
function sha256(data) {
  return createHash('sha256').update(data).digest();
}
function pkceChallenge(verifier) {
  return b64url(sha256(verifier));
}
function randomCode() {
  return randomBytes(24).toString('hex');
}

export function issuerOf(req) {
  const explicit = (process.env.CDS_KB_PUBLIC_URL || '').trim();
  if (explicit) return explicit.replace(/\/+$/, '');
  const proto = req.headers['x-forwarded-proto'] || req.protocol || 'https';
  return `${proto}://${req.get('host')}`.replace(/\/+$/, '');
}

function signingKey() {
  return new TextEncoder().encode(SECRET);
}

/** RFC 8414 authorization-server metadata for the mcpAuthMetadataRouter. */
export function buildOAuthMetadata(req) {
  const iss = issuerOf(req);
  return {
    issuer: iss,
    authorization_endpoint: `${iss}/oauth/authorize`,
    token_endpoint: `${iss}/oauth/token`,
    response_types_supported: ['code'],
    grant_types_supported: ['authorization_code'],
    token_endpoint_auth_methods_supported: ['none'],
    code_challenge_methods_supported: ['S256'],
    registration_endpoint: `${iss}/oauth/register`,
    scopes_supported: SCOPES,
  };
}

/** GET /oauth/authorize — validates params, mints a one-time code, redirects. */
export async function authorizeHandler(req, res) {
  if (!oauthEnabled()) return res.status(404).json({ error: 'oauth_not_enabled' });

  const { response_type, client_id, redirect_uri, code_challenge, code_challenge_method, state, scope } = req.query;
  if (response_type !== 'code') {
    return res.status(400).json({ error: 'unsupported_response_type' });
  }
  if (!isKnownClient(client_id)) {
    return res.status(400).json({ error: 'unauthorized_client', error_description: `unknown client_id (expected ${CLIENT_ID} or a client_id from /oauth/register)` });
  }
  if (!redirect_uri) {
    return res.status(400).json({ error: 'invalid_request', error_description: 'redirect_uri is required' });
  }
  if (!code_challenge || (code_challenge_method && code_challenge_method !== 'S256')) {
    return res.status(400).json({ error: 'invalid_request', error_description: 'PKCE S256 code_challenge is required' });
  }

  const code = randomCode();
  authCodes.set(code, {
    clientId: client_id,
    redirectUri: String(redirect_uri),
    codeChallenge: String(code_challenge),
    expiresAt: Date.now() + AUTH_CODE_TTL_MS,
    scope: scope ? String(scope).split(' ').filter(Boolean) : SCOPES,
  });

  const u = new URL(redirect_uri);
  u.searchParams.set('code', code);
  if (state) u.searchParams.set('state', state);
  return res.redirect(u.toString());
}

/** POST /oauth/token — exchanges the code (+ PKCE verifier) for a JWT. */
export async function tokenHandler(req, res) {
  if (!oauthEnabled()) return res.status(404).json({ error: 'oauth_not_enabled' });

  const { grant_type, code, code_verifier, redirect_uri, client_id } = req.body || {};
  if (grant_type !== 'authorization_code') {
    return res.status(400).json({ error: 'unsupported_grant_type' });
  }

  // A registered dynamic client must match the client_id minted at
  // registration; the static default client is always valid.
  if (client_id && !isKnownClient(client_id)) {
    return res.status(400).json({ error: 'unauthorized_client', error_description: 'unknown client_id' });
  }

  const entry = authCodes.get(code);
  if (!entry || entry.expiresAt < Date.now()) {
    authCodes.delete(code);
    return res.status(400).json({ error: 'invalid_grant', error_description: 'unknown or expired code' });
  }
  authCodes.delete(code); // one-time use

  if (client_id && client_id !== entry.clientId) {
    return res.status(400).json({ error: 'invalid_grant', error_description: 'client_id mismatch' });
  }
  if (redirect_uri && redirect_uri !== entry.redirectUri) {
    return res.status(400).json({ error: 'invalid_grant', error_description: 'redirect_uri mismatch' });
  }
  if (!code_verifier || pkceChallenge(code_verifier) !== entry.codeChallenge) {
    return res.status(400).json({ error: 'invalid_grant', error_description: 'PKCE verification failed' });
  }

  const iss = issuerOf(req);
  const now = Math.floor(Date.now() / 1000);
  const token = await new SignJWT({ scope: entry.scope.join(' ') })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuer(iss)
    .setSubject(entry.clientId)
    .setAudience(iss)
    .setIssuedAt(now)
    .setExpirationTime(now + TOKEN_TTL)
    .sign(signingKey());

  return res.json({
    access_token: token,
    token_type: 'Bearer',
    expires_in: TOKEN_TTL,
    scope: entry.scope.join(' '),
  });
}

/**
 * OAuthTokenVerifier implementation — verifyAccessToken(token) → AuthInfo.
 * Hand this to requireBearerAuth() (or call directly from auth.mjs).
 */
export const oauthVerifier = {
  async verifyAccessToken(token) {
    if (!oauthEnabled()) {
      throw new Error('OAuth is not enabled on this server');
    }
    // Pin issuer/audience (both set at mint time) so a token minted for one
    // deployment/issuer can't be replayed against another behind the same
    // secret. The issuer is derived from CDS_KB_PUBLIC_URL (or the request
    // host at mint time), so only tokens for this server pass.
    const expectedIss = (process.env.CDS_KB_PUBLIC_URL || '').trim().replace(/\/+$/, '');
    const { payload } = await jwtVerify(token, signingKey(), {
      algorithms: ['HS256'],
      ...(expectedIss ? { issuer: expectedIss, audience: expectedIss } : {}),
    });
    const scopes = String(payload.scope || '').split(' ').filter(Boolean);
    return {
      token,
      clientId: String(payload.sub || ''),
      scopes,
      expiresAt: payload.exp ? Number(payload.exp) : undefined,
      extra: { iss: payload.iss, aud: payload.aud },
    };
  },
};
