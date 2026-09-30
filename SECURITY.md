# Security Policy

## Scope

**In scope:**

- The MCP server ([`docs/product/cds_kb_mcp/`](docs/product/cds_kb_mcp)) —
  auth (API key / JWKS / OAuth 2.1), rate limiting, the REST/Swagger bridge,
  and the tool handlers themselves.
- The Cloudflare Workers: [`domain-proxy/`](docs/product/cds_kb_mcp/domain-proxy)
  (public reverse proxy for `mcp.tringhia.io.vn`), [`wake-worker/`](docs/product/cds_kb_mcp/wake-worker)
  (calls the BTP Cloud Foundry API with a stored credential), and
  [`worker/`](docs/product/cds_kb_mcp/worker) (the usage-collector + Propose
  Issue bot, both public-facing).
- The data pipeline scripts in [`docs/product/cds_kb_data/`](docs/product/cds_kb_data)
  (`batch_add.mjs`, `enrich_*.mjs`, etc.) and the GitHub Actions automation
  in [`.github/workflows/`](.github/workflows) that runs them.

**Out of scope** (report to the relevant party instead):

- SAP's own systems this project reads from as a client (SAP Business
  Accelerator Hub, SAP Help Portal, SAP Community) — report to SAP.
- A vulnerability in a third-party npm dependency with no project-specific
  exploit path — report upstream to that package; Dependabot already tracks
  and patches these here on a weekly cadence (see [`.github/dependabot.yml`](.github/dependabot.yml)).

## Supported Versions

This isn't a versioned library with point releases — it's a continuously
deployed hosted service. Only the code currently on `main` (and whatever is
live at `mcp.tringhia.io.vn`, `docs/product/cds_kb_mcp` version tag shown in
its `package.json`) is supported. There is no backport policy for older
commits or a prior deployment.

## Data sensitivity

This is a **public** repository containing public SAP CDS view metadata,
sourced from public GitHub repositories and SAP's own public Hub catalog —
no proprietary SAP customer data or license-restricted content is
intentionally included. If you find content here that shouldn't be public —
e.g. something copied from a non-public source, or real customer/tenant
data that slipped in through an automated fetch — **report it the same way
as a code vulnerability** (below), with the same urgency; it isn't a
lesser issue just because it's data instead of code.

**Never include a real secret, credential, or API key in a report.**
Describe what's exposed and where (file path, commit, or endpoint) instead.
GitHub secret scanning + push protection are already enabled on this repo,
but a report is the faster path if you spot one first.

## Reporting a Vulnerability

Use GitHub's private vulnerability reporting, **not** a public Issue:

**[Security tab → "Report a vulnerability"](https://github.com/StormShynn/cds-kb-mcp-data/security/advisories/new)**

This opens a private draft security advisory visible only to the repo owner
until it's resolved — nothing is public until both sides agree to disclose.

What to expect:

- **Acknowledgement:** best-effort. This is a single-maintainer project, not
  a team with a formal SLA — [Unverified] a specific response time can't be
  promised, but reports are read.
- **If accepted:** a fix is committed, and — if it affects the live hosted
  endpoint (`mcp.tringhia.io.vn`) or a public Worker — deployed as soon as
  practical. You're credited in the published advisory unless you ask not
  to be.
- **If declined:** you'll get the reasoning (e.g. out of scope per above,
  working as intended, or a SAP-side issue that needs reporting to SAP
  instead).

## Automated protections already in place

- GitHub secret scanning + push protection: enabled.
- Dependabot security updates (out-of-band, not on the weekly schedule) +
  weekly version updates: enabled ([`.github/dependabot.yml`](.github/dependabot.yml)).
- `data-test` + `mcp-test` required as passing CI checks before any PR can
  merge to `main` (branch protection).
