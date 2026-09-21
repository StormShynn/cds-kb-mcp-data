# cds-kb-wake (Cloudflare Worker)

CI/CD replacement for `daily-wake.ps1` + the Windows Scheduled Task
(`wire-up-daily-wake.ps1`) next door in `../`. Runs on Cloudflare's Cron
Triggers instead of a machine that has to be logged in and online — see
`AGENTS.md`/repo history for why that was the original approach and why it
doesn't survive a laptop being off.

## What it does

Every 2 hours (`[triggers] crons` in `wrangler.toml`):

1. Discovers the BTP trial's UAA login endpoint from the CF API root doc
   (same thing `cf login` does internally).
2. Gets an OAuth token via the Resource Owner Password Credentials grant
   against the public `cf` client — the same mechanism `cf auth <user>
   <password>` uses.
3. Resolves org → space → app GUID and checks `cds-kb-mcp`'s state.
4. Starts the app if it isn't already `STARTED`.
5. Polls the real public health endpoint
   (`https://mcp.tringhia.io.vn/health`) until it answers 200, or gives up
   after a few tries.

No password or bearer token is ever logged.

## Endpoints

| Route | Auth | Purpose |
|---|---|---|
| *(cron)* | — | scheduled `wake()` run |
| `GET /wake?token=…` | `WAKE_TOKEN` (query param or `X-Wake-Token` header) | manual trigger — parity with `schtasks /Run /TN "cds-kb-mcp wake"` |
| `GET /status` | none | last run's outcome (in-memory only, resets on isolate restart; never includes credentials) |

## Setup

### 1. Cloudflare secrets (`wrangler secret put <NAME>`, from this directory)

| Secret | Value |
|---|---|
| `CF_USERNAME` | Same BTP trial user `daily-wake.ps1` uses |
| `CF_PASSWORD` | Its password |
| `WAKE_TOKEN` | Any random string — gates `GET /wake` since this worker is public |

```
wrangler secret put CF_USERNAME
wrangler secret put CF_PASSWORD
wrangler secret put WAKE_TOKEN
```

### 2. Deploy

Manually:

```
wrangler deploy
```

Or via `.github/workflows/deploy-wake-worker.yml` (manual `workflow_dispatch`,
skips entirely — exit 0 — if `CLOUDFLARE_API_TOKEN` isn't set). That workflow
also pushes `CF_USERNAME` / `CF_PASSWORD` / `WAKE_TOKEN` from repo secrets on
every run, so rotating a repo secret and re-running the workflow is enough —
no local `wrangler secret put` needed after the first deploy.

Required repo secrets for the workflow (Settings → Secrets and variables →
Actions):

- `CLOUDFLARE_API_TOKEN` — scoped to "Workers Scripts: Edit"
- `CLOUDFLARE_ACCOUNT_ID`
- `BTP_USERNAME`, `BTP_PASSWORD` — same credential pair as above
- `CDS_KB_WAKE_TOKEN` — becomes the `WAKE_TOKEN` worker secret

### 3. Test now (no waiting for the cron)

```
curl "https://cds-kb-wake.<your-subdomain>.workers.dev/wake?token=<WAKE_TOKEN>"
curl "https://cds-kb-wake.<your-subdomain>.workers.dev/status"
```

## Troubleshooting

- **401/invalid_grant from UAA**: the password grant against the `cf`
  client only works for accounts on the default identity provider without
  enforced MFA/SSO. [Unverified] Whether this BTP trial account is affected
  cannot be confirmed from this repo — if the grant fails with something
  like `unauthorized` or `invalid_grant`, the account needs an SSO passcode
  or a service-key/client-credentials flow instead, which this worker does
  not implement.
- **Cron didn't fire**: check the Cloudflare dashboard → Workers & Pages →
  `cds-kb-wake` → Triggers → Cron Events for execution history and errors.
  Unlike GitHub Actions scheduled workflows, Cloudflare Cron Triggers are
  not auto-disabled for repo inactivity.
- **App/org/space not found**: double-check `CF_ORG` / `CF_SPACE` / `CF_APP`
  / `CF_API_ENDPOINT` in `wrangler.toml` `[vars]` match what `cf app
  cds-kb-mcp` reports locally.
