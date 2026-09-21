// wake-worker/src/index.mjs — cds-kb-wake (Cloudflare Worker)
//
// Cron-triggered replacement for daily-wake.ps1 + the Windows Scheduled Task
// (wire-up-daily-wake.ps1): brings cds-kb-mcp back up after the BTP trial
// idles it out, without needing a machine that's logged in and online.
//
// What it does, every run (see wake()):
//   1. Discovers the UAA login endpoint from the CF API root doc (same thing
//      `cf login` does — never hardcode it, BTP landscapes can vary).
//   2. Gets an OAuth token via the Resource Owner Password Credentials grant,
//      using the public "cf" client (empty secret) — this is exactly what
//      `cf auth <user> <password>` does under the hood.
//   3. Resolves org -> space -> app GUID and checks the app's state.
//   4. POSTs the "start" action if it isn't already STARTED.
//   5. Polls the real public health endpoint (mcp.tringhia.io.vn/health,
//      not the CF API) until it answers 200, or gives up after a few tries.
//
// Endpoints:
//   (Cron Trigger)     runs wake() on schedule — see wrangler.toml [triggers]
//   GET /wake?token=…  runs wake() on demand (parity with
//                      `schtasks /Run /TN "cds-kb-mcp wake"`) — requires
//                      WAKE_TOKEN, since this worker is on the public internet
//   GET /status        no-secret-required peek: last run's outcome, no
//                      credentials or tokens ever included
//
// Nothing here ever logs the password or the bearer token. Failures are
// surfaced via console.error (visible under Workers > Logs / Cron Events in
// the Cloudflare dashboard) and kept in memory for GET /status.
//
// Deploy: see ../README.md

const HEALTH_RETRY_ATTEMPTS = 4;
const HEALTH_RETRY_DELAY_MS = 5_000;
const FETCH_TIMEOUT_MS = 15_000;

// Kept only for GET /status — reset on every isolate restart, so this is a
// convenience peek, not a durable audit log. It never holds secrets.
let lastRun = null;

function timeoutSignal(ms) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  return { signal: controller.signal, cleanup: () => clearTimeout(timer) };
}

async function fetchJson(url, init = {}) {
  const { signal, cleanup } = timeoutSignal(FETCH_TIMEOUT_MS);
  try {
    const resp = await fetch(url, { ...init, signal });
    const text = await resp.text();
    let body;
    try {
      body = text ? JSON.parse(text) : null;
    } catch {
      body = text;
    }
    if (!resp.ok) {
      throw new Error(`${init.method || 'GET'} ${url} -> HTTP ${resp.status}: ${JSON.stringify(body).slice(0, 500)}`);
    }
    return body;
  } finally {
    cleanup();
  }
}

async function discoverUaaUrl(cfApiEndpoint) {
  // CF API v3 root doc: GET / on the API endpoint returns links.uaa.href.
  // This is how `cf login` finds it too — never assume the "api." -> "uaa."
  // substitution holds for every landscape.
  const root = await fetchJson(cfApiEndpoint.replace(/\/$/, '') + '/');
  const uaaUrl = root?.links?.uaa?.href;
  if (!uaaUrl) throw new Error('Khong tim thay UAA endpoint tu CF API root doc.');
  return uaaUrl;
}

async function getAccessToken(uaaUrl, username, password) {
  // Resource Owner Password Credentials grant against the public "cf"
  // client (client_secret is intentionally empty) — same mechanism
  // `cf auth <user> <password>` uses. This will fail if the account
  // requires SSO/MFA; see README.md troubleshooting.
  const body = new URLSearchParams({
    grant_type: 'password',
    username,
    password,
    response_type: 'token',
  });
  const resp = await fetchJson(uaaUrl.replace(/\/$/, '') + '/oauth/token', {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      authorization: 'Basic ' + btoa('cf:'),
    },
    body: body.toString(),
  });
  if (!resp?.access_token) throw new Error('UAA khong tra ve access_token.');
  return resp.access_token;
}

async function cfGet(cfApiEndpoint, token, path) {
  return fetchJson(cfApiEndpoint.replace(/\/$/, '') + path, {
    headers: { authorization: `Bearer ${token}` },
  });
}

async function findAppGuid(cfApiEndpoint, token, org, space, app) {
  const orgs = await cfGet(cfApiEndpoint, token, `/v3/organizations?names=${encodeURIComponent(org)}`);
  const orgGuid = orgs?.resources?.[0]?.guid;
  if (!orgGuid) throw new Error(`Khong tim thay org "${org}".`);

  const spaces = await cfGet(
    cfApiEndpoint,
    token,
    `/v3/spaces?names=${encodeURIComponent(space)}&organization_guids=${orgGuid}`
  );
  const spaceGuid = spaces?.resources?.[0]?.guid;
  if (!spaceGuid) throw new Error(`Khong tim thay space "${space}" trong org "${org}".`);

  const apps = await cfGet(
    cfApiEndpoint,
    token,
    `/v3/apps?names=${encodeURIComponent(app)}&space_guids=${spaceGuid}`
  );
  const appResource = apps?.resources?.[0];
  if (!appResource?.guid) throw new Error(`Khong tim thay app "${app}" trong space "${space}".`);
  return { guid: appResource.guid, state: appResource.state };
}

async function startApp(cfApiEndpoint, token, appGuid) {
  await fetchJson(cfApiEndpoint.replace(/\/$/, '') + `/v3/apps/${appGuid}/actions/start`, {
    method: 'POST',
    headers: { authorization: `Bearer ${token}` },
  });
}

async function verifyHealth(healthUrl) {
  let lastError = null;
  for (let attempt = 1; attempt <= HEALTH_RETRY_ATTEMPTS; attempt++) {
    try {
      const { signal, cleanup } = timeoutSignal(FETCH_TIMEOUT_MS);
      try {
        const resp = await fetch(healthUrl, { signal });
        const text = await resp.text();
        if (resp.ok) return { ok: true, status: resp.status, body: text.slice(0, 300), attempt };
        lastError = `HTTP ${resp.status}: ${text.slice(0, 300)}`;
      } finally {
        cleanup();
      }
    } catch (err) {
      lastError = err.message || String(err);
    }
    if (attempt < HEALTH_RETRY_ATTEMPTS) {
      await new Promise((r) => setTimeout(r, HEALTH_RETRY_DELAY_MS));
    }
  }
  return { ok: false, error: lastError, attempts: HEALTH_RETRY_ATTEMPTS };
}

async function wake(env) {
  const startedAt = new Date().toISOString();
  const result = { startedAt, ok: false, steps: {} };

  if (!env.CF_USERNAME || !env.CF_PASSWORD) {
    result.error = 'CF_USERNAME/CF_PASSWORD chua duoc cau hinh (wrangler secret put).';
    lastRun = result;
    console.error(result.error);
    return result;
  }

  try {
    const uaaUrl = await discoverUaaUrl(env.CF_API_ENDPOINT);
    const token = await getAccessToken(uaaUrl, env.CF_USERNAME, env.CF_PASSWORD);
    result.steps.login = 'ok';

    const { guid, state } = await findAppGuid(env.CF_API_ENDPOINT, token, env.CF_ORG, env.CF_SPACE, env.CF_APP);
    result.steps.appStateBefore = state;

    if (state === 'STARTED') {
      result.steps.start = 'skipped (already STARTED)';
    } else {
      await startApp(env.CF_API_ENDPOINT, token, guid);
      result.steps.start = 'requested';
    }

    const health = await verifyHealth(env.HEALTH_URL);
    result.steps.health = health;
    result.ok = health.ok;
    if (!health.ok) result.error = `Health check that bai sau khi start: ${health.error}`;
  } catch (err) {
    result.error = err.message || String(err);
    console.error('wake() that bai:', result.error);
  }

  result.finishedAt = new Date().toISOString();
  lastRun = result;
  return result;
}

function timingSafeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function requireToken(request, env) {
  if (!env.WAKE_TOKEN) return false;
  const url = new URL(request.url);
  const provided = url.searchParams.get('token') || request.headers.get('x-wake-token') || '';
  return timingSafeEqual(provided, env.WAKE_TOKEN);
}

export default {
  async scheduled(_event, env, ctx) {
    ctx.waitUntil(wake(env));
  },

  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/status') {
      return Response.json(lastRun || { message: 'Chua chay lan nao ke tu lan deploy/restart gan nhat.' });
    }

    if (url.pathname === '/wake') {
      if (!requireToken(request, env)) {
        return new Response('Unauthorized', { status: 401 });
      }
      const result = await wake(env);
      return Response.json(result, { status: result.ok ? 200 : 502 });
    }

    return new Response('cds-kb-wake: GET /wake?token=... or GET /status', { status: 404 });
  },
};
