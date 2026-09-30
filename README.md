# cds-kb-mcp-data

Data + automation for the **SAP CDS View Knowledge Base MCP server**
([cds-kb-mcp](docs/product/cds_kb_mcp)): a dataless MCP server that gives AI
agents instant, ranked access to SAP S/4HANA CDS views via semantic search,
business taxonomy, on-demand definition retrieval, and CDS DDL
compose/generate/validate.

**Hosted, public, no install needed:** point any Streamable HTTP MCP client
at `https://mcp.tringhia.io.vn/mcp` — see
[Client Configuration](docs/product/cds_kb_mcp/README.md#client-configuration)
for copy-paste config for Claude/Cursor/VS Code/etc.

## What's in this repo

| Folder | Role |
| --- | --- |
| [`docs/product/cds_kb_data/`](docs/product/cds_kb_data) | The data: ~10,700 CDS view definitions (`views/`), generated search/field indexes (`index/`), taxonomy, and the fetch/enrich pipeline scripts behind the automation below. |
| [`docs/product/cds_kb_mcp/`](docs/product/cds_kb_mcp) | The MCP server itself — tools reference, client setup, BTP/Render deployment guides, and the Cloudflare Workers that keep the hosted endpoint on a stable domain and awake (`domain-proxy/`, `wake-worker/`). |

Full tool reference, hosted-auth options, and self-hosting instructions live
in [`docs/product/cds_kb_mcp/README.md`](docs/product/cds_kb_mcp/README.md) —
this file only covers what's specific to *this* data + automation repo.

## Automation (`.github/workflows/`)

Everything here writes to `docs/product/cds_kb_data/` on a schedule; nothing
is manual upkeep unless noted. Grouped by what they do:

- **Discover new views** (each opens/updates its own PR for human review —
  never pushes straight to main): [`daily-fetch.yml`](.github/workflows/daily-fetch.yml)
  (GitHub code search), [`hub-metadata-fetch.yml`](.github/workflows/hub-metadata-fetch.yml)
  (SAP Business Accelerator Hub catalog), [`enrich-ddl-fields.yml`](.github/workflows/enrich-ddl-fields.yml)
  (backfill field types from the Hub), [`enrich-descriptions.yml`](.github/workflows/enrich-descriptions.yml)
  (optional LLM descriptions — opt-in via API key secrets).
- **Keep generated files in sync** (regenerate-and-push straight to main,
  `[skip ci]`): [`sync-view-metadata.yml`](.github/workflows/sync-view-metadata.yml)
  (module folders + dashboard), [`check-coverage.yml`](.github/workflows/check-coverage.yml)
  (Hub coverage report, every 6h), [`build-embeddings.yml`](.github/workflows/build-embeddings.yml)
  (weekly, semantic search vectors), [`pull-usage-stats.yml`](.github/workflows/pull-usage-stats.yml)
  (search ranking boost from real query telemetry).
- **CI**: [`ci.yml`](.github/workflows/ci.yml) — data validation + MCP smoke
  tests on every PR.
- **Publish / operate**: [`deploy-pages.yml`](.github/workflows/deploy-pages.yml)
  (GitHub Pages), [`push-mcp-metrics.yml`](.github/workflows/push-mcp-metrics.yml)
  (Grafana Cloud), [`deploy-usage-worker.yml`](.github/workflows/deploy-usage-worker.yml) /
  [`deploy-wake-worker.yml`](.github/workflows/deploy-wake-worker.yml) (the
  two Cloudflare Workers, manual `workflow_dispatch`).

The direct-to-main workflows above authenticate with an admin PAT
(`HUB_COVERAGE_PAT` repo secret) — main's branch protection requires the
`data-test`/`mcp-test` checks, which the default `GITHUB_TOKEN` can't bypass.

## Maintainer-only: keeping the hosted BTP instance awake

The public endpoint runs on a SAP BTP Cloud Foundry **trial**, which idles
out under inactivity. Two independent keep-alive mechanisms exist — pick one,
they don't conflict:

1. **Cloudflare Worker cron (recommended — no machine needs to be on):**
   `docs/product/cds_kb_mcp/wake-worker/`, deployed via
   [`deploy-wake-worker.yml`](.github/workflows/deploy-wake-worker.yml). See
   [`wake-worker/README.md`](docs/product/cds_kb_mcp/wake-worker/README.md)
   for setup.
2. **Windows Scheduled Task (needs a machine logged in regularly):** from
   `docs/product/cds_kb_mcp/`:

   ```powershell
   # One-time: save the BTP credential (DPAPI-encrypted, this Windows account/machine only)
   New-Item -ItemType Directory -Force "$env:USERPROFILE\.cds-kb-mcp" | Out-Null
   Get-Credential -Message "BTP trial" |
     Export-Clixml -Path "$env:USERPROFILE\.cds-kb-mcp\btp-cred.xml"

   # Register the task (hourly by default; -EveryHours / -At to change)
   .\wire-up-daily-wake.ps1

   # Test without waiting for the schedule
   schtasks /Run /TN "cds-kb-mcp wake"
   Get-Content "$env:USERPROFILE\.cds-kb-mcp\wake.log" -Tail 10
   ```

   See [`daily-wake.ps1`](docs/product/cds_kb_mcp/daily-wake.ps1)'s header
   comment for the full detail.

## Also in this repo

- [`bench/`](bench) — search-quality benchmarks (hybrid vs. BM25-only).
- [`sync-cds-kb-data.sh`](sync-cds-kb-data.sh) / `.bat` — one-way sync from a
  separate local harness checkout into a plain data-only clone, for whoever
  maintains that split; unrelated to the automation above.
- [`SECURITY.md`](SECURITY.md) — currently the unfilled GitHub template
  placeholder, not yet a real policy.
