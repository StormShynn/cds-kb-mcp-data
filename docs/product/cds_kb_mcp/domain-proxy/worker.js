// domain-proxy/worker.js — Cloudflare Worker reverse proxy for the hosted
// cds-kb-mcp endpoint (stable public domain, independent of the rotating BTP
// trial URL). See ../mcp_btp_deployment_guide.md section A.8 and
// ./README.md for setup + the on-reset runbook.
//
// Multi-backend routing: this domain now also mounts a second MCP server
// under the /sap-docs/* prefix — mcp-sap-docs (SAPUI5/CAP/ABAP doc search;
// see ../README.md "SAP Docs lookup" section). The prefix is stripped
// before forwarding, so `/sap-docs/mcp` -> `${SAP_DOCS_BACKEND_URL}/mcp`,
// `/sap-docs/health` -> `${SAP_DOCS_BACKEND_URL}/health`, etc. Everything
// else (unprefixed) still goes to BACKEND_URL (cds-kb-mcp), unchanged.
//
// Caching policy (applied per-backend, against the path AFTER prefix
// stripping — so both backends get the same rules for their own paths):
//   - Stable JSON endpoints (GET/HEAD /health, /metrics, /.well-known/*) are
//     cached at the edge via the Cache API — they change slowly, are hit by
//     every client connect (OAuth discovery) and by the metrics scraper, and
//     caching them cuts backend load materially. The Cache API key is the
//     full original incoming URL (including the /sap-docs prefix, if any),
//     so the two backends' /health responses never collide in the edge cache.
//   - Everything else — notably /mcp (POST, and the GET/DELETE session
//     surface) — stays `no-store`. MCP responses are dynamic/session-bound;
//     a plain GET was observed getting served from Cloudflare's edge cache
//     without this (CF-Cache-Status: HIT during testing), which is wrong.
//
// BACKEND_URL / SAP_DOCS_BACKEND_URL are Worker environment variables, set
// via the Cloudflare dashboard (Worker -> Settings -> Variables and Secrets)
// or `wrangler secret put <NAME>`. BACKEND_URL is the ONLY thing that needs
// updating when the BTP trial expires (~90 days) and cds-kb-mcp redeploys
// to a new cfapps.*.hana.ondemand.com route — no code change, no redeploy
// of this Worker needed. SAP_DOCS_BACKEND_URL points at a third-party-owned
// public server (https://mcp-sap-docs.marianzeis.de as of writing — see
// ../README.md for why: this repo does not host its own copy) and is
// optional — /sap-docs/* 404s cleanly if it's unset, everything else is
// unaffected.

const SAP_DOCS_PREFIX = '/sap-docs';

const CACHE_TTL_SECONDS = {
  '/health': 10,
  '/metrics': 10,
};

const WELL_KNOWN_TTL_SECONDS = 3600; // /.well-known/* — OAuth discovery, stable

function cachePolicyFor(pathname) {
  if (pathname === '/health' || pathname === '/metrics') {
    return CACHE_TTL_SECONDS[pathname];
  }
  if (pathname.startsWith('/.well-known/')) {
    return WELL_KNOWN_TTL_SECONDS;
  }
  return 0; // not cacheable
}

// Resolves which backend a request goes to, and the path it sees once the
// routing prefix (if any) is stripped off.
function resolveRoute(pathname, env) {
  if (pathname === SAP_DOCS_PREFIX || pathname.startsWith(SAP_DOCS_PREFIX + '/')) {
    const stripped = pathname.slice(SAP_DOCS_PREFIX.length) || '/';
    return { backend: env.SAP_DOCS_BACKEND_URL, path: stripped, name: 'SAP_DOCS_BACKEND_URL' };
  }
  return { backend: env.BACKEND_URL, path: pathname, name: 'BACKEND_URL' };
}

export default {
  async fetch(request, env) {
    const incoming = new URL(request.url);
    const route = resolveRoute(incoming.pathname, env);

    if (!route.backend) {
      return new Response(`${route.name} is not configured on this Worker.`, { status: 500 });
    }

    const target = new URL(route.path + incoming.search, route.backend);
    const method = request.method;

    const cacheTtl = (method === 'GET' || method === 'HEAD') ? cachePolicyFor(route.path) : 0;

    // Cache hit path (GET/HEAD on a cacheable path only). Keyed on the
    // original incoming URL, so /health and /sap-docs/health never collide.
    if (cacheTtl > 0) {
      const cacheKey = new Request(incoming.toString());
      const cached = await caches.default.match(cacheKey);
      if (cached) {
        return cached;
      }
    }

    // Forward method/headers/body as-is; strip Host so fetch() sets the
    // correct one for the backend instead of leaking the proxy's own domain.
    const headers = new Headers(request.headers);
    headers.delete("host");

    const init = {
      method,
      headers,
      redirect: "follow",
      // Never let the default fetch cache participate — stable JSON paths
      // are cached explicitly via the Cache API below, and MCP responses
      // must never be edge-cached.
      cache: "no-store",
    };
    if (!["GET", "HEAD"].includes(method)) {
      init.body = request.body;
    }

    const resp = await fetch(target, init);

    const respHeaders = new Headers(resp.headers);
    if (cacheTtl > 0 && resp.ok && resp.status !== 304) {
      // Store a copy at the edge for cacheTtl seconds (respect upstream
      // s-maxage if it ever sets one; default to our per-path TTL).
      respHeaders.set("Cache-Control", `public, max-age=${cacheTtl}`);
      const clone = new Response(resp.body, {
        status: resp.status,
        statusText: resp.statusText,
        headers: respHeaders,
      });
      // Only cache successful GET/HEAD responses; ignore put() failures
      // (cache full / eviction race) — the origin response is still valid.
      try {
        await caches.default.put(new Request(incoming.toString()), clone.clone());
      } catch { /* best-effort edge cache */ }
      return clone;
    }

    // Everything else — pass straight through, including streaming bodies
    // (needed since the MCP endpoint responds over SSE/chunked transfer),
    // explicitly uncached.
    respHeaders.set("Cache-Control", "no-store");
    return new Response(resp.body, {
      status: resp.status,
      statusText: resp.statusText,
      headers: respHeaders,
    });
  },
};
