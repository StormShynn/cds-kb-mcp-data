# cds-kb-mcp

A **dataless** MCP server that gives AI agents instant, ranked access to SAP
S/4HANA CDS views via semantic search, business taxonomy, on-demand definition
retrieval, and CDS DDL compose/generate/validate. Built on the **MCP SDK v2**
(spec `2026-07-28`, stateless Streamable HTTP + stdio). In this harness it sits
beside [`../cds_kb_data`](../cds_kb_data) and auto-uses that tree when present.

> **TL;DR (end users):** Prefer the hosted server — no install. Point a Streamable
> HTTP client at `/mcp`. See [Client Configuration](#client-configuration).
>
> **TL;DR (this monorepo):** `cd docs/product/cds_kb_mcp && npm start` — resolves
> sibling `../cds_kb_data` automatically. Use `npm run start:remote` only when you
> intentionally want the GitHub data remote.

**Benchmark vs. raw file access:** ~830× faster, ~94× cheaper in tokens, better top-3 relevance — full numbers in [BENCHMARK.md](./BENCHMARK.md).

---

## Table of Contents

- [What you get](#what-you-get)
- [Harness monorepo (local)](#harness-monorepo-local)
- [Prerequisites](#prerequisites)
- [Client Configuration](#client-configuration) — hosted MCP for end users
- [Tools Reference](#tools-reference) — includes optional SAP ADT `sap_*` slice
- [Resources & Prompts](#resources--prompts)
- [Hosted auth](#hosted-auth) — API key, JWKS, **OAuth 2.1**
- [Usage ranking](#usage-ranking)
- [Operations](#operations) — `/health`, `/metrics`, rate limits
- [Architecture](#architecture)

---

## What you get

Coverage numbers below track `../cds_kb_data/index/version.json` (rebuild when
the data index changes).

|                     |                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Coverage**        | ~10,600 CDS views (see `version.json` `viewCount`)                                                         |
| **Enrichment**      | Semantic description + synonyms where present (`enrichedCount` in `version.json`)                          |
| **Taxonomy**        | Lines of Business → Business Objects → keyword map (EN + VI)                                               |
| **Search ranking**  | Field-boosted MiniSearch (`name×3`, `semanticDescription×2.5`, `synonyms×2`) + **hybrid RRF** (BM25 top-N ⊕ embedding cosine top-N via Reciprocal Rank Fusion when `index/embeddings.json` is present) + **usageCount** popularity boost (populated when the usage pipeline is wired up, see below) |
| **Module aliasing** | Filter by `"Finance"` / `"Procurement"` / `"Sales"` instead of `FI` / `MM` / `SD`                          |
| **Tools**           | 14 KB tools + optional `sap_*` ADT slice — every tool declares an `outputSchema` and returns JSON `structuredContent` |
| **Resources**       | `cds://view/{name}`, `cds://taxonomy`, `cds://stats` — attachable straight into agent context              |
| **Prompts**         | `explain_view`, `compose_query`, `validate_ddl` — one-call packaged workflows                              |
| **Auth**            | API key, remote JWKS, and full **OAuth 2.1 + PKCE** authorization server (+ **RFC 7591 dynamic client registration**) |
| **Bundle**          | Single `.cjs` file (unminified), Node ≥ 20 — local hybrid search stays optional (`@huggingface/transformers` is an external, lazily-imported dependency) |
| **Data isolation**  | Server ships **no view data**. Harness sibling `cds_kb_data`, or GitHub remote / local `--data`.           |

---

## Harness monorepo (local)

```text
docs/product/
  cds_kb_data/     # views + index (source of truth for local/dev)
  cds_kb_mcp/      # this server
```

```bash
cd docs/product/cds_kb_mcp
npm install
npm start                 # auto: ../cds_kb_data if index exists
npm run start:local       # explicit --data ../cds_kb_data
npm run start:remote      # GitHub remote (needs token if private)
npm test                  # smoke tools against sibling data
npm run test:rrf          # Reciprocal Rank Fusion unit tests (no index)
npm run test:eval         # golden search/compose/library eval (local index)
npm run test:sap          # mocked SAP ADT export slice (no live SAP)
```

Cursor / Claude **stdio** against the sibling data tree:

```json
{
  "mcpServers": {
    "cds-kb": {
      "command": "node",
      "args": [
        "D:/path/to/harness/docs/product/cds_kb_mcp/src/server.mjs",
        "--data",
        "D:/path/to/harness/docs/product/cds_kb_data"
      ]
    }
  }
}
```

Omit `--data` in this repo: the server still finds `../cds_kb_data` via sibling
auto-detect. Hosted deploys set `CDS_KB_REMOTE` (see `render.yaml`) so they never
accidentally depend on a missing local tree.

Open both folders in one VS Code/Cursor window via `cds-kb.code-workspace`.

---

## Prerequisites

Before configuring your client, ensure your local machine meets the following requirements:

1. **Node.js**: Only needed for Option 1/2 (the `supergateway` bridge) or local stdio. Option 0 (direct Streamable HTTP) needs nothing installed — the client talks to the URL itself. Minimum version **Node.js v20** or above — verify with `node -v`. (This server itself requires Node ≥ 20; the MCP SDK v2 requires it.)
2. **Network Connectivity**:
   - Outbound HTTPS access to the hosted server: `https://mcp.tringhia.io.vn` (stable domain — a Cloudflare Worker reverse proxy in front of the actual SAP BTP Cloud Foundry trial instance, public, no auth. The BTP trial URL behind it rotates every ~90 days when the trial is reclaimed; the Worker's `BACKEND_URL` variable gets updated to point at the new one, so this domain itself never changes — see [mcp_btp_deployment_guide.md](./mcp_btp_deployment_guide.md) A.8)
   - Option 1/2 only: access to `registry.npmjs.org` to fetch `supergateway`. If your machine is behind a corporate firewall/VPN/proxy that blocks npm registry downloads, either use Option 0 instead, or use the global installation method (**Option 2** below).
3. **Compatible IDE**: An IDE supporting MCP (e.g. Cursor, Claude Desktop, VS Code, Gemini IDE, Claude Code).

---

## Client Configuration

Because the MCP server is hosted remotely, **most end users do not need to clone this repository or install any local dependencies**. For harness/local wiring, see [Harness monorepo (local)](#harness-monorepo-local) above.

The server exposes **Streamable HTTP** on a single **`/mcp`** endpoint (the current MCP transport spec — stateless per request). The legacy SSE transport was removed with the SDK v2 upgrade; clients that only speak local stdio bridge `/mcp` with `supergateway` as shown below.

One hosted endpoint is available for either transport:

```text
https://mcp.tringhia.io.vn
```

It's public — no API key, no OAuth — so anyone (community use) can point a client at it directly. This is a stable domain: a Cloudflare Worker sits in front of the actual server, which runs on a SAP BTP Cloud Foundry trial. Trial subaccounts get reclaimed after ~90 days, so the *underlying* BTP URL changes periodically — but that's an internal detail now. When it happens, the Worker's `BACKEND_URL` variable is updated to point at the new BTP route per [mcp_btp_deployment_guide.md](./mcp_btp_deployment_guide.md) A.8, and `mcp.tringhia.io.vn` itself never needs to change — no client config below ever needs updating for that reason.

> **Hosting your own copy:** SAP BTP Cloud Foundry has a free tier (no card
> needed for Trial) and the repo ships a ready-to-push `manifest.yml` — see
> [mcp_btp_deployment_guide.md](./mcp_btp_deployment_guide.md), Part A. The
> data source (`CDS_KB_REMOTE`) points at this monorepo's own public GitHub
> repo, so no GitHub PAT is needed.

### Option 0: Direct Streamable HTTP (Recommended if your client supports it)

No extra package, no bridge process — just a URL:

```json
{
  "mcpServers": {
    "cds-kb": {
      "type": "http",
      "url": "https://mcp.tringhia.io.vn/mcp"
    }
  }
}
```

The exact config key for a remote HTTP server (`"type": "http"` vs `"transport"` vs a dedicated `claude mcp add --transport http` CLI flag) varies by client — check your client's own MCP docs if the block above isn't accepted verbatim. If your client has no remote-HTTP option at all, use Option 1 or 2 below instead.

### Option 1: Lock Version with npx (Recommended & Easiest, for stdio-only clients)

`supergateway` v3 connects to a remote **Streamable HTTP** endpoint via `--streamableHttp` and exposes it locally over stdio. Add this block to your `mcpServers` configuration file (e.g., `claude_desktop_config.json` or `mcp_config.json`):

```json
{
  "mcpServers": {
    "cds-kb": {
      "command": "npx",
      "args": [
        "-y",
        "supergateway@3.4.3",
        "--streamableHttp",
        "https://mcp.tringhia.io.vn/mcp"
      ]
    }
  }
}
```

### Option 2: Global Installation (Offline & Network-Resilient)

Best for enterprise environments behind corporate firewalls, VPNs, or proxy servers where running `npx` dynamically on every IDE startup might fail or time out.

1. Install `supergateway` globally on your machine once:

   ```bash
   npm install -g supergateway@3.4.3
   ```

2. Update your IDE's `mcpServers` configuration to call the globally installed binary directly (no `npx`):

   ```json
   {
     "mcpServers": {
       "cds-kb": {
         "command": "supergateway",
         "args": [
           "--streamableHttp",
           "https://mcp.tringhia.io.vn/mcp"
         ]
       }
     }
   }
   ```

   *(Note for Windows users: If your IDE cannot locate the global command, use `supergateway.cmd` as the command, or specify the absolute path to your global `npm` prefix).*

   Need a custom header (e.g. API key)? Pass `--header "Authorization: Bearer <KEY>"` — see `supergateway --help`.

Once configured, restart your IDE. The tools will immediately be available for your agent to use.

---

## Tools Reference

The server exposes **fourteen KB tools** plus an **optional SAP ADT read-only slice** (`sap_*`). Every tool declares an **`outputSchema`** (JSON Schema) and returns both human-readable `content` **and** machine-parseable **`structuredContent`** — so programmatic/agentic integrations can parse results without regex. The flow: search → pick a view → **compose → generate → validate** CDS DDL without leaving MCP.

### Trying tools without an MCP client (Swagger UI / REST)

Every tool above is also reachable as plain REST — same handler, same result, no MCP client needed:

- **`GET /api-docs`** — Swagger UI, "Try it out" against the live server.
- **`GET /openapi.json`** — the OpenAPI 3.1 spec (generated from the same zod `inputSchema`/`outputSchema` each tool already declares — nothing hand-maintained separately).
- **`POST /api/tools/<name>`** — call one tool directly, e.g. `POST /api/tools/get_views_by_field` with body `{"name": "MATNR"}`. Response body is the tool's `structuredContent` (the same JSON `search_cds`/`get_views_by_field`/etc. return over MCP); `404` for an unknown tool name, `400` for invalid arguments.

This is a convenience bridge for demos, curl, and clients that don't speak MCP — the canonical interface is still MCP Streamable HTTP at `POST /mcp` above, and both paths run the exact same tool code.

### 1. `search_cds`

Find CDS views by business meaning, name, tag, or classic SAP keyword (`VBAK`, `BSEG`, etc.). Returns a ranked shortlist.

**Vietnamese is fully supported.** Search is accent-insensitive — `đơn mua hàng`, `don mua hang` and `đơn mua hang` all find the same purchase-order views, thanks to the data repo merging Vietnamese synonyms (`viKeywords` + `viModuleKeywords` from `taxonomy.json`) into every view. Short lowercase queries match exactly instead of prefix/fuzzy-colliding with English terms, so `bán hàng` finds sales views, not bank views.

| Parameter | Type     | Required | Description                                                                            |
| --------- | -------- | -------- | -------------------------------------------------------------------------------------- |
| `query`   | string   | ✓        | Natural language or keyword (e.g. `"overdue customer invoices"`)                       |
| `module`  | string   | optional | Module filter — code (`FI`, `SD`, `MM`) or natural name (`"Finance"`, `"Procurement"`) |
| `lob`     | string   | optional | Line-of-business filter (partial match)                                                |
| `bo`      | string   | optional | Business object filter (partial match, e.g. `"salesorder"`)                            |
| `limit`   | int 1-50 | optional | Max results (default 10)                                                               |

Returns: ranked list with `name`, `score`, `module`, short description, `devExtStatus`, `atcState`, `atcSuccessor`, and path. Ranking blends BM25 (MiniSearch) + cosine similarity when `index/embeddings.json` is present + `usageCount` popularity boost when `index/usage-stats.json` is present. Embeddings are now built **for free** by the weekly `build-embeddings` workflow using a local ONNX model (transformers.js) — see [Hybrid (vector) search](#hybrid-vector-search). The `usageCount` popularity boost still needs the usage pipeline wired up (see [Usage ranking](#usage-ranking)).

> **Three independent release signals — do not conflate them.** A view
> showing up here at all just means it's in the general SAP Hub catalog
> (`release_state`).
>
> - `devExtStatus` (`released` / `not_released` / `null` = unknown) is SAP's
>   *separate* `ReleaseStateDeveloperExtensibility` signal — the only one that
>   answers "can I `association to`/`select from` this in a custom S/4HANA
>   Cloud ABAP Developer Extensibility CDS view".
> - `atcState` (`released` / `deprecated` / `notToBeReleased` / `null` =
>   unknown) is a **third**, independent signal from SAP's own ABAP Cloud
>   released-objects list (the same dataset ATC/Clean Core checks use).
>   `atcSuccessor`, when set, names the concrete replacement object SAP
>   recommends instead.
>
> `compose_query`/`generate_cds_view` warn automatically on any of: `devExtStatus`
> `not_released`, unknown `devExtStatus`, or `atcState` `deprecated`/`notToBeReleased`
> (with the successor, if SAP names one). See
> [`hook/quy-trinh-check-cds-released-developer-extensibility.md`](../cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md)
> for the full explanation and mitigation options. `devExtStatus`/`atcState` are
> also optional filter params on `search_cds` / `suggest_base_views`.

```text
1. **I_CAOPENITEMLIST**  [FI-FIO-AR-2CL]  (score 14.2)
   List of open items across customer and vendor accounts.
   path: views/FI/I_CAOPENITEMLIST.md
2. **I_PARKEDOPLACCTGDOCRBLSITEM**  ...
```

### 2. `get_cds_view`

Fetch one view's definition by exact name. Default: full markdown (metadata + fields + associations + source). Use `sections` to slim down the response.

| Parameter  | Type     | Required | Description                                                                 |
| ---------- | -------- | -------- | --------------------------------------------------------------------------- |
| `name`     | string   | ✓        | Exact view name (case-insensitive), e.g. `I_SalesDocument`                  |
| `sections` | string[] | optional | Subset of `["metadata", "fields", "associations", "source"]`. Default: all. |

Typical pattern: `search_cds` → pick a hit → `get_cds_view(name, sections=["metadata", "fields"])` to confirm the field list without pulling 5-10 KB of DDL source.

### 3. `get_views_by_tag`

Deterministic listing by tag. Use when `search_cds` is too fuzzy.

| Parameter | Type      | Required | Description                                        |
| --------- | --------- | -------- | -------------------------------------------------- |
| `tag`     | string    | ✓        | Exact tag, e.g. `"bo:salesorder"`, `"lob:finance"` |
| `limit`   | int 1-200 | optional | Default 50                                         |

Discover valid tags with `get_taxonomy` first.

### 4. `get_taxonomy`

Returns the semantic map: 12 Lines of Business → 829 Business Objects, each with keywords and synonyms. Useful for the agent to orient itself before issuing a search, or to discover valid tags for `get_views_by_tag`.

No parameters.

### 5. `get_views_by_field`

Exact lookup by field name, raw DDIC column, or table/CDS view name (not fuzzy
search). Prefer this when you already have a concrete name from ABAP/DDL.
Each match includes `devExtStatus`/`atcState`/`atcSuccessor` (see `search_cds` above).

| Parameter | Type      | Required | Description |
|---|---|---|---|
| `name` | string | ✓ | e.g. `CompanyCode`, `VWERK`, `I_JournalEntryItem` |
| `limit` | int 1-100 | optional | Max results per category (default 30) |

### 6. `get_view_dependencies`

Views that are built FROM or associate to a given view/table (uses `table-index.json`). Each entry includes `devExtStatus`/`atcState`/`atcSuccessor` — useful to spot that an association target is a released alternative (or has a SAP-named successor) even when the view you started from isn't.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | ✓ | View or table name |
| `limit` | int | optional | Max results |

### 7. `kb_info`

Report the active data source, server version, view count, enrichment %, private overlay count, DDL/metadata completeness, and index build timestamp.

```text
source: local:D:\...\docs\product\cds_kb_data
server: cds-kb-mcp 2.4.0
views: 10619
enriched: 3267 (30.8%)
privateOverlay: 1
withDdl: ...
metadataOnly: ...
withAccessControl: ...
modules: ...
builtAt: 2026-08-11T...
```

### 8. `suggest_base_views`

Recommend concrete (non-abstract, non-unverified) CDS views to use as the `FROM` base when writing a new view. Same ranking knobs as `search_cds`, with hard filters for abstract/unverified.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | string | ✓ | Business intent / keywords |
| `module` / `lob` / `bo` | string | optional | Same facet filters as `search_cds` |
| `limit` | int 1-20 | optional | Default 5 |

### 9. `compose_query`

Build OpenSQL + a CDS `define view entity` skeleton from the Query Builder JSON shape (`views[]`, `select`, `where`, `groupBy`, `having`, `orderBy`, `viewName`). Warns in `warnings[]` when a referenced view is SAP-confirmed `not_released` for Developer Extensibility, has no such signal in this KB, or is `deprecated`/`notToBeReleased` per SAP's ATC list (names the successor when SAP does) — see the release-signals note under `search_cds` above.

### 10. `generate_cds_view`

Generate annotated DDL (`@AccessControl`, `@EndUserText.label` + compose body) from `baseView` or `views[]`. Pass `select`/`where` yourself — it does not invent field lists from Hub metadata alone. Same Developer Extensibility `warnings[]` as `compose_query`.

### 11. `validate_cds_ddl`

Parse DDL with `@abaplint/core` CDSParser. Returns soft diagnostics (`ok` / `parsed` / `name` / counts) — never crashes the MCP process. No SAP connection.

### 12. `propose_query_library_entry`

Build a JSON snippet + markdown PR body for `docs/product/cds_kb_data/index/query-library.json`
(override with `CDS_KB_PROPOSE_PATH`). With `GITHUB_TOKEN` + `CDS_KB_PROPOSE_REPO=owner/name`,
opens a **draft** PR on `propose/query-*` (never merges). On API failure, still returns the local snippet.

The Query Builder page also has **Propose to shared library** (opens a GitHub Issue via
`.github/ISSUE_TEMPLATE/query-library-proposal.yml`) and **Export local saves** for bundle proposals —
no GitHub token required in the browser.

Offline seeding: in `cds_kb_data`, run `npm run seed-query-proposals` to write
`index/query-proposals.json` from usage-stats + a starter catalog; optional `--promote N`
appends into `query-library.json`, then `npm run sync-query-library-embed` rebuilds
`query-library-index.json` and refreshes the featured `DATA.L` bootstrap (Query Builder
fetches the full library at runtime).

Anonymous query-**shape** telemetry (opt-in): set `CDS_KB_SHAPE_TELEMETRY=1` on MCP (and keep
`CDS_KB_USAGE_ENDPOINT` pointing at `/ping`); the collector also accepts browser opt-in pings on
`/ping-shapes`. Pull with `npm run pull-query-shapes` in the data tree.

### 13. `view_changelog`

List recently added/updated CDS views from the data repo's `changelog.json` (every daily fetch / hub metadata refresh records its changes there). Use it to answer "what's new in the KB" without re-searching everything.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `action` | enum | optional | `added` or `updated` — only entries with that action |
| `source` | string | optional | Only entries from a source, e.g. `hub-catalog` or `vsp` (partial match) |
| `since` | string | optional | ISO timestamp cutoff, e.g. `2026-08-01` |
| `limit` | int 1-200 | optional | Default 20 |

### 14. `search_query_library`

Search the shared saved-query list (`index/query-library.json`) by title, id, description, target CDS view name, or generated view name — curated **recipes** (full shapes, including joins) and thin **variants** (`recipeId` + clause overrides). Variants are resolved onto their recipe before return. The Query Builder embeds only `featured` entries and fetches the full file at runtime. **Library-first:** call this before inventing a shape with `search_cds` / `suggest_base_views`; on a hit, take `views[]`/`select`/`where` into `compose_query` / `generate_cds_view`. On a miss, fall back to open search.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | string | ✓ | Search text — title words, CDS view name, or business intent |
| `limit` | int 1-50 | optional | Default 10 |

To add an entry: Query Builder **Propose** / MCP `propose_query_library_entry` → review Issue or draft PR → merge → `npm run sync-query-library-embed` (do not run the stale generator). Prefer a new **recipe** for join patterns; prefer a **variant** when only `where`/`orderBy`/select tweaks an existing recipe. Offline: `npm run seed-query-proposals` writes `index/query-proposals.json` for curation.

### Optional: SAP ADT read-only slice (`sap_*`)

Optional **DEV-only** ADT tools for learning custom **Z\*/Y\*** repository objects (CDS `data_definition` / DDLS first). When `SAP_ADT_*` env is **unset**, tools still appear but every call returns a consistent envelope with `configured: false` — the server stays **dataless** toward SAP.

**Locked policy:** HTTPS + TLS verify mandatory; system alias **DEV** only (never PRD); no table/business row reads; skip SAP standard; snapshot **skip-if-exists** (no overwrite); never auto-merge into the public KB or `overlays/private` markdown views.

| Tool | Role |
|------|------|
| `sap_connection_test` | Probe ADT discovery |
| `sap_list_packages` | List Z\*/Y\* packages |
| `sap_list_objects` | List DDLS objects in a package |
| `sap_get_object` | Fetch one custom object source |
| `sap_get_dependencies` | Best-effort static DDL names (standard → external) |
| `sap_plan_export` | Dry-run plan only |
| `sap_export_snapshot` | Local write under output root (source + metadata + manifest) |
| `sap_diff_snapshot` | Compare two local snapshot manifests/hashes |

**Env (secrets never in files/logs):**

| Variable | Required | Notes |
|----------|----------|-------|
| `SAP_ADT_BASE_URL` | ✓ when enabling | `https://host:port` only |
| `SAP_ADT_USERNAME` | ✓ | Technical read-only user |
| `SAP_ADT_PASSWORD` | ✓ | Secret manager / env only |
| `SAP_ADT_CLIENT` | ✓ | SAP client |
| `SAP_ADT_SYSTEM_ALIAS` | optional | Must be `DEV` (default) |
| `SAP_ADT_OUTPUT_ROOT` | required for snapshot writes | Explicit allowlisted local root; use `cds_kb_data/.sap_export` if desired (gitignored) |

Sample operator YAML (no secrets): [`config/sap-export.config.example.yaml`](./config/sap-export.config.example.yaml).

**Promotion path:** review files under the configured snapshot root → manually create private overlay markdown and/or use `compose_query` / `generate_cds_view` / propose — **never** auto-merge. Do not treat export dumps as KB view markdown.

**ADT compatibility:** endpoints vary by release/SICF. Documented paths include `/sap/bc/adt/discovery`, repository `informationsystem/search`, and `/sap/bc/adt/ddic/ddl/sources/{name}/source/main`. Probe per landscape; failures surface as structured errors (no SQL/table fallback).

Tests: `npm run test:sap` (mocked; no live SAP).

---

## Resources & Prompts

Beyond tools, the server exposes MCP **resources** and **prompts** — the two other
primitives of the 2026 MCP spec. Agents can *attach* resources directly into their
context (saving tokens vs. tool round-trips) and load canned prompts in one call.

### Resources

| URI | Description |
| --- | --- |
| `cds://view/{name}` | Full markdown definition of one CDS view by name (dynamic template) |
| `cds://taxonomy` | The full LOB → Business Object → keyword taxonomy (EN + VI) |
| `cds://stats` | Live KB stats: view count, enrichment %, index build time, auth mode |
| `cds://query-library` | The shared saved-query list (`index/query-library.json`) as JSON |

Example client usage (pseudo-config):

```json
{
  "mcpServers": { "cds-kb": { "type": "http", "url": "https://.../mcp" } },
  "resources": [
    { "uri": "cds://view/I_GLACCOUNT", "mimeType": "text/markdown" },
    { "uri": "cds://taxonomy", "mimeType": "application/json" }
  ]
}
```

### Prompts

| Name | Arguments | Purpose |
| --- | --- | --- |
| `explain_view` | `name` (required) | Fetch a view and explain it in plain language: what it represents, key fields, associations, when to use it |
| `compose_query` | `intent` (required) | Library-first: `search_query_library` → (miss) `suggest_base_views`/`search_cds` → `compose_query` → generate/validate |
| `validate_ddl` | `ddl` (required) | Validate a pasted DDL snippet with `validate_cds_ddl` and explain the diagnostics |

---

## Hosted auth

Hosted `/mcp` is **open (no auth)** unless the deploy sets one of the auth modes below. Local stdio needs no API key.

| Mode | Env | Client |
| --- | --- | --- |
| OAuth 2.1 + PKCE | `CDS_KB_OAUTH_SECRET` (≥ 32 chars, HS256 signing key; optional `CDS_KB_OAUTH_CLIENT_ID` default `cds-kb-client`, `CDS_KB_OAUTH_TOKEN_TTL`, `CDS_KB_PUBLIC_URL`) | Client runs the standard authorization-code + PKCE flow against `/oauth/authorize` + `/oauth/token`; server publishes AS metadata at `/.well-known/oauth-authorization-server` and Protected Resource Metadata at `/.well-known/oauth-protected-resource` — modern MCP clients (Claude Desktop, Cursor, VS Code) auto-discover and run this flow |
| API key | `API_KEY` | `Authorization: Bearer <API_KEY>` or `?api_key=<API_KEY>` |
| JWKS / JWT | `CDS_KB_JWKS_URL` (+ optional `CDS_KB_JWT_ISSUER`, `CDS_KB_JWT_AUDIENCE`) | `Authorization: Bearer <JWT>` verified via remote JWKS (`jose`) |
| Combined | any of the above | A valid OAuth token, JWT, or API key all pass |

OAuth notes:

- To enable, set `CDS_KB_OAUTH_SECRET` to a secret of at least 32 characters
  (HS256 signing key). The server itself acts as the authorization server:
  `/oauth/authorize` (validates the request, enforces PKCE S256, and redirects
  back with a one-time code) and `/oauth/token` (code + verifier → JWT) are
  served in-process. **`/oauth/token` must be reachable at a public HTTPS URL**
  for real clients; the issuer/redirect is derived from `X-Forwarded-Proto`/`Host`
  or `CDS_KB_PUBLIC_URL`. Access tokens are HS256-signed JWTs pinned to that
  issuer — no external IdP needed. Want a real login/consent screen or an
  external IdP instead? Put an API Management / Approuter + XSUAA gateway in
  front of the app on SAP BTP — see `mcp_btp_deployment_guide.md`.
- Access tokens are signed JWTs (HS256) with `jose`; no external IdP needed. Want
  to delegate to an external provider instead? Put an API Management / Approuter +
  XSUAA gateway in front of the app on SAP BTP — see `mcp_btp_deployment_guide.md`.

### Dynamic client registration (RFC 7591)

When OAuth is enabled, `POST /oauth/register` accepts RFC 7591 client
metadata (`client_name`, `redirect_uris`, ...) and returns a dynamic
`client_id` (public client — PKCE, no secret), which `authorize`/`token`
then accept alongside the static `CDS_KB_OAUTH_CLIENT_ID`. The AS metadata
(`/.well-known/oauth-authorization-server`) advertises
`registration_endpoint`, so compliant MCP clients can self-register on
connect. The registry is **in-memory** (same lifetime as auth codes): a
server restart invalidates dynamic clients, which simply re-register; the
static default client always works.

### Completions (`completion/complete`)

Clients that implement the MCP completions capability get view-name
suggestions as you type: `explain_view`'s `name` prompt argument and the
`cds://view/{name}` resource-template variable both complete against the
loaded index (up to 25 matches, case-insensitive substring). The server
advertises `completions` in its capabilities only because these completable
schemas are registered.

### S3 / MinIO data source

When `CDS_KB_S3_BUCKET`, `CDS_KB_S3_ACCESS_KEY_ID`, and `CDS_KB_S3_SECRET_ACCESS_KEY` are set (and `--data` / `CDS_KB_DATA` are not), the server loads the index and views from S3-compatible storage. Optional: `CDS_KB_S3_PREFIX`, `CDS_KB_S3_REGION` (default `us-east-1`), `CDS_KB_S3_ENDPOINT`, `CDS_KB_S3_FORCE_PATH_STYLE=true` (MinIO). Cache lives under `~/.cache/cds-kb/s3-<hash>/`.

Precedence: `--data` / `CDS_KB_DATA` → S3 (when configured) → `--remote` / `CDS_KB_REMOTE` → sibling `cds_kb_data` → default GitHub remote.

---

## Usage ranking

`search_cds` / `suggest_base_views` multiply MiniSearch scores by `usageCount` (and lightly by `referencedByCount`). `usageCount` stays `0` (no-op ×1) until:

1. Hosted/local instances set `CDS_KB_USAGE_ENDPOINT` (see `worker/`), and
2. The data repo’s `pull-usage-stats` workflow writes `index/usage-stats.json`, and
3. `enrich_index.mjs` rebuilds the search index.

Missing Worker secrets → ranking still works; popularity just does not nudge results yet. To go live, deploy the collector Worker (`.github/workflows/deploy-usage-worker.yml`, manual trigger) and add the `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` secrets — see [`worker/README.md`](./worker/README.md) for the full walkthrough (Durable Object, `PULL_TOKEN`, and the two data-repo secrets the `pull-usage-stats.yml` workflow consumes). Counts live in a Durable Object (SQLite-backed, atomic, no KV free-plan write limit).

### Hybrid (vector) search

Runs for free, no API key needed. The `.github/workflows/build-embeddings.yml`
workflow (weekly + manual trigger) runs `scripts/build-embeddings.mjs`, which
embeds every view with a **local ONNX model via transformers.js**
(`all-MiniLM-L6-v2`, 384-dim) when `CDS_KB_EMBED_API_KEY` is unset — the
default. Setting `CDS_KB_EMBED_API_KEY` (optionally `CDS_KB_EMBED_URL` /
`CDS_KB_EMBED_MODEL`) switches to a remote OpenAI-compatible model instead.

The committed vectors are picked up by the next hosted index refresh
(`kb_info` then reports `embeddings: yes`). At query time the server embeds
the search text with the same local model **in-process** when
`CDS_KB_EMBED_API_KEY` is unset (`@huggingface/transformers`, lazily
imported) — so hybrid is fully keyless. With `search_mode=hybrid`, BM25
top-N and cosine top-N of that shortlist are fused with **Reciprocal Rank
Fusion** (RRF, k=60) instead of a fixed 0.6/0.4 score blend. Two caveats:

- The local model is downloaded (~90 MB, cached under `~/.cache/huggingface`)
  on first embed; until then (or if the package/model can't load) hybrid
  degrades to plain BM25 — which is already strong on its own.
- `@huggingface/transformers` is an **external** dependency of the esbuild
  bundle, so the single-file `dist/cds-kb-mcp.cjs` never contains it; a
  deployment without `node_modules` simply never enables local hybrid.

### Golden eval (search / library / compose)

Frozen intents live in `scripts/fixtures/eval-compose.json`. Run against the
sibling local index (no live SAP, no network if indexes are present):

```bash
npm run test:eval
# or: node scripts/eval-compose.mjs ../cds_kb_data
```

Exit code is non-zero on regressions. Also: `npm run test:rrf` for the RRF
unit tests (no index required).

---

## Operations

| Endpoint | Purpose |
| --- | --- |
| `GET /health` | Liveness: `{"status":"ok","views":...,"uptimeSeconds":...}` — no auth required |
| `GET /metrics` | Prometheus-text counters + latency histogram: `cds_kb_http_requests_total`, `cds_kb_mcp_request_duration_ms`, process gauges |
| `POST /mcp` (+ `GET`/`DELETE` for stateless sessions) | Streamable HTTP MCP endpoint |
| `GET /oauth/authorize`, `POST /oauth/token`, `POST /oauth/register` | OAuth 2.1 authorization server + RFC 7591 dynamic client registration (enabled via `CDS_KB_OAUTH_SECRET`) |
| `GET /.well-known/oauth-protected-resource`, `/.well-known/oauth-authorization-server` | OAuth discovery metadata |

Rate limiting: a fixed-window limiter (default 120 req/min per IP; tune with
`CDS_KB_RATE_LIMIT_MAX` / `CDS_KB_RATE_LIMIT_WINDOW_SECONDS`) protects `/mcp`,
`/oauth/authorize`, and `/oauth/token`. Responds `429` with `Retry-After`.
`/health` and the well-known metadata endpoints are never limited.

### Local dev with MCP Inspector

```bash
npx @modelcontextprotocol/inspector node src/server.mjs --data ../cds_kb_data
```

---

## Architecture

```text
┌──────────────────────────────────────────────────────────────────┐
│                         AI Client (Claude)                       │
│   search → suggest_base_views → compose_query → generate/validate│
│   resources: cds://view/… · prompts: explain_view / …            │
└──────────────────────────┬───────────────────────────────────────┘
                           │  MCP / JSON-RPC — stdio, or Streamable HTTP at /mcp
┌──────────────────────────▼───────────────────────────────────────┐
│              cds-kb-mcp 2.4.0 (MCP SDK v2, spec 2026-07-28)      │
│  tools (14, outputSchema+structuredContent) · resources · prompts│
│  rate limit → auth (API key | JWKS | OAuth 2.1+PKCE) → handlers   │
│                       │                                          │
│  ┌────────────────────▼───────────────────┐                      │
│  │   MiniSearch (BM25) + embeddings cos   │                      │
│  │   + RAP facets / usageCount boost      │                      │
│  └────────────────────┬───────────────────┘                      │
│                       │                                          │
│  ┌────────────────────▼───────────────────┐                      │
│  │   DataSource (Local | Remote)          │                      │
│  │   • sibling cds_kb_data auto-detect    │                      │
│  │   • ETag cache / SWR when remote       │                      │
│  └─────────┬───────────────────┬──────────┘                      │
└────────────┼───────────────────┼─────────────────────────────────┘
             │                   │
       ┌─────▼────┐         ┌────▼──────────────┐
       │ Local FS │         │ GitHub Contents / │
       │ cds_kb_  │         │ raw.githubusercontent │
       │ data/    │         └───────────────────┘
       │ (+ overlays/private)                   │
       └──────────┘
```
