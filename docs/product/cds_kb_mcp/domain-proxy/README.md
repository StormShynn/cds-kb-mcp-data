# cds-kb-mcp domain proxy

A thin Cloudflare Worker reverse proxy that gives `cds-kb-mcp`'s hosted
endpoint a stable public domain (`https://mcp.tringhia.io.vn`), independent
of the SAP BTP Cloud Foundry trial URL behind it — which rotates every ~90
days when the trial subaccount is reclaimed and redeployed (see
[`../mcp_btp_deployment_guide.md`](../mcp_btp_deployment_guide.md), section
A.8).

Without this, every trial reset means updating README.md and every
downstream client config that hardcoded the old `cfapps.*.hana.ondemand.com`
URL. With it, only one thing changes on reset: this Worker's `BACKEND_URL`
variable.

## How it works

`worker.js` forwards every request (method, headers, body) to whatever URL
is set in the `BACKEND_URL` environment variable, and streams the response
straight back — no transformation.

**Two backends share this domain**, split by path prefix:

- Everything **without** the `/sap-docs` prefix → `BACKEND_URL` (cds-kb-mcp,
  the CDS view knowledge base — unchanged from before).
- Everything **under** `/sap-docs/*` → `SAP_DOCS_BACKEND_URL`, with the
  `/sap-docs` prefix stripped before forwarding (so `/sap-docs/mcp` hits
  `${SAP_DOCS_BACKEND_URL}/mcp`, `/sap-docs/health` hits
  `${SAP_DOCS_BACKEND_URL}/health`, etc.) — a second, unrelated MCP server
  ([mcp-sap-docs](https://github.com/marianfoo/mcp-sap-docs): SAPUI5, CAP,
  wdi5, ABAP keyword docs, SAP Community search).

  **This repo does not host that server.** `SAP_DOCS_BACKEND_URL` points at
  its author's own public instance, `https://mcp-sap-docs.marianzeis.de` —
  third-party infrastructure, not something StormShynn owns or controls.
  [Unverified] Its uptime, rate limits, and long-term availability cannot be
  guaranteed from this repo; if it ever goes offline or changes its URL,
  only this one Worker variable needs updating (same on-reset pattern as
  `BACKEND_URL` below). A fork of that project
  (`StormShynn/mcp-sap-docs`, with two extra sources — SAP Accelerator Hub
  and the Fiori App Reference Library — layered on top) also exists but its
  own previously-documented hosted endpoint
  (`sap-docs-extend-mcp.cfapps.ap21.hana.ondemand.com`) was found **dead**
  (BTP trial reclaimed — same ~90-day rotation issue `cds-kb-mcp` has) when
  checked on 2026-09-28; deploying that extended fork's own copy would need
  its own BTP trial (or Render/Fly.io) account, since the `cds-kb-mcp` BTP
  org already uses its full 4G memory quota (see `../manifest.yml`) with no
  room for a second app.

  `SAP_DOCS_BACKEND_URL` is optional — if unset, `/sap-docs/*` responds
  `500 SAP_DOCS_BACKEND_URL is not configured on this Worker.` and the
  `BACKEND_URL` route is completely unaffected.

Caching is selective:

- **Cached at the edge (Cache API):** `GET/HEAD /health` (10s), `/metrics`
  (10s), and `/.well-known/*` (1h — OAuth discovery, hit on every client
  connect). These are stable JSON documents that change slowly; caching them
  cuts BTP trial load and latency.
- **Never cached (`Cache-Control: no-store`):** everything else, notably
  `/mcp` (POST, and the GET/DELETE session surface) — MCP responses are
  dynamic/session-bound, and a plain GET was observed getting served from
  Cloudflare's edge cache without this.

```
client -> https://mcp.tringhia.io.vn/mcp -> Worker -> BACKEND_URL/mcp (the live BTP route)
```

## Setup (one-time)

1. Cloudflare dashboard -> Workers & Pages -> Create -> **Workers** ->
   **Create Worker** (plain "Hello World" template — **not** "Import an
   existing Git repository"; that path expects a build output directory
   this single-file Worker doesn't have and will fail with "Could not
   detect a directory containing static files").
2. Paste the contents of `worker.js` into the online editor, Deploy.
3. Settings -> Variables and Secrets -> add `BACKEND_URL` =
   `https://<current-btp-route>.cfapps.<region>.hana.ondemand.com` (Text,
   not Secret — it's not sensitive).
4. Settings -> Domains & Routes -> Add -> Custom Domain ->
   `mcp.tringhia.io.vn`. Cloudflare creates the DNS record automatically
   (requires the domain's nameservers to already point at Cloudflare).
5. Optional — SAP Docs lookup under `/sap-docs/*`: add `SAP_DOCS_BACKEND_URL`
   = `https://mcp-sap-docs.marianzeis.de` (Text, not Secret) next to
   `BACKEND_URL`. Skip this step and `/sap-docs/*` just 500s — the
   `BACKEND_URL` route keeps working either way.

## On every BTP trial reset

After redeploying per A.8's runbook and confirming the new route works
directly, update **only** step 3 above — the `BACKEND_URL` variable — to
the new route. Nothing else (README.md, client configs, this file) needs
to change.

## Verifying

```bash
# Same status/body as calling the BTP route directly:
curl -s https://mcp.tringhia.io.vn/mcp   # GET -> 405 {"jsonrpc":"2.0","error":...} is expected, not a failure

curl -s -X POST https://mcp.tringhia.io.vn/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","method":"initialize","params":{"protocolVersion":"2026-06-18","capabilities":{},"clientInfo":{"name":"test","version":"1.0"}},"id":1}'
# -> 200, an `initialize` result with serverInfo

curl -sI https://mcp.tringhia.io.vn/mcp | grep -i cache
# -> Cache-Control: no-store, CF-Cache-Status: BYPASS or DYNAMIC (never HIT)

# /sap-docs/* — only if SAP_DOCS_BACKEND_URL is configured (step 5 above):
curl -s https://mcp.tringhia.io.vn/sap-docs/health
# -> 200 {"status":"healthy","service":"mcp-sap-streamable",...}

curl -s -X POST https://mcp.tringhia.io.vn/sap-docs/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","method":"initialize","params":{"protocolVersion":"2026-06-18","capabilities":{},"clientInfo":{"name":"test","version":"1.0"}},"id":1}'
# -> 200, an `initialize` result with serverInfo "SAP Docs Streamable HTTP"
```

Verified end-to-end locally with `wrangler dev` against the live
`mcp-sap-docs.marianzeis.de` backend on 2026-09-28: `/sap-docs/health`
returns 200 and is edge-cacheable, `/sap-docs/mcp` correctly proxies the
`initialize` JSON-RPC/SSE exchange with `Cache-Control: no-store`, and the
unprefixed route stays untouched.
