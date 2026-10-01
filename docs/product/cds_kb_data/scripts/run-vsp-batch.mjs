#!/usr/bin/env node
// scripts/run-vsp-batch.mjs
// One-shot, no-agent-required pipeline: pick the next N Hub-confirmed
// metadata-only CDS views, fetch their real ABAP DDL straight from the SAP
// tenant via vsp's CLI mode (tools/vsp/vsp.exe source DDLS <name> — no MCP
// server, no Claude session needed, just the same cookie session used by the
// MCP tool), apply them through the existing parse -> tag -> synthesize ->
// render pipeline, backfill Field Type/Description from the Hub catalog,
// rebuild the search index + dashboard, then commit and push.
//
// Meant to be launched by double-clicking run-vsp-batch.cmd at the repo root,
// so every step here has to be fully unattended:
//
//   - vsp CLI failures (object not found, session expired) are logged and
//     skipped per-view, not fatal — except N consecutive authentication/
//     session failures in a row, which almost always means the cookie session
//     died, so we stop early rather than burning through the whole candidate
//     list against a dead session.
//
//   - a merge conflict against origin/main is only auto-resolved when every
//     conflicted file is one of our own generated/tracking files (index,
//     changelog, dashboard, manifests), or when our freshly upgraded Full DDL
//     view is clearly superseding the other side's old metadata-only copy.
//     Anything else aborts the merge and leaves the local commit unpushed.
//
// By default ALL LOB/modules are considered.
//
// Usage:
//   node scripts/run-vsp-batch.mjs [--count 25]
//     [--no-push] [--no-commit] [--overlay]
//     [--modules FI-,CO-,MM-,SD-,LO-,PP-,QM-,PM-]
//
// Examples:
//
//   # Default: all modules / all LOBs
//   node scripts/run-vsp-batch.mjs --count 25
//
//   # Only selected modules
//   node scripts/run-vsp-batch.mjs --count 25 --modules FI-,CO-,MM-
//
//   # Explicitly all modules
//   node scripts/run-vsp-batch.mjs --count 25 --modules '*'
//
//   # Customer overlay, including Z* candidates
//   node scripts/run-vsp-batch.mjs --count 25 --overlay
//
// Requires:
//   tools/vsp/vsp.exe
//   .vsp.json
//   tools/vsp/cookies.txt
//
// Run `tools\\vsp\\vsp.exe config mcp-to-vsp` once from the repo root if
// .vsp.json is missing.

import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';

import { extractFrontmatter, scalar } from './lib/frontmatter.mjs';
import { findExistingView } from './lib/view-files.mjs';
import { readJson, writeJson } from './lib/json-file.mjs';
import { rebuildIndex } from './lib/rebuild-index.mjs';
import { looksLikeAbapDdl } from './lib/ddl-sanity.mjs';

const DATA_DIR = '.';
const VIEWS_DIR = path.join(DATA_DIR, 'views');
const VSP_EXE = path.join(DATA_DIR, 'tools', 'vsp', 'vsp.exe');
const VSP_CONFIG = path.join(DATA_DIR, '.vsp.json');
const REQUEST_FILE = path.join(DATA_DIR, 'ddl-field-enrichment-request.json');

// ---------------------------------------------------------------------------
// Default module filter
// ---------------------------------------------------------------------------
//
// null means:
//   "do not restrict by app_component — consider ALL modules / LOBs"
//
// This is intentionally the default now. The old default only covered:
//   FI-, CO-, MM-, SD-, LO-, PP-, QM-, PM-
//
// Users can still restrict the run explicitly with:
//   --modules FI-,CO-
//
// And:
//   --modules '*'
//
// is also interpreted as no LOB restriction.
//
const DEFAULT_MODULES = null;

const MAX_CONSECUTIVE_FAILURES = 5;

// Files our own automation writes on every run — safe to auto-resolve on a
// merge conflict by regenerating rather than hand-merging.
const GENERATED_FILES = new Set([
  'changelog.json',
  'dashboard.html',
  'coverage.json',
  'coverage-report.html',
  'hub-metadata-manifest.json',
  'ddl-field-enrichment-manifest.json',
  'vsp-ddl-applied-manifest.json',
  'ddl-field-enrichment-request.json',

  'index/search_index.json',
  'index/field-index.json',
  'index/version.json',
  'index/view-fields.js',
  'index/view-paths.json',
  'index/suggestions.json',
]);

function parseArgs() {
  const args = process.argv.slice(2);

  const opts = {
    count: 25,
    push: true,
    commit: true,

    // Mặc định: tất cả phân hệ / tất cả LOB.
    // Có thể giới hạn bằng --modules FI-,CO-,...
    modules: DEFAULT_MODULES,

    overlay: false,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--count': {
        const value = Number.parseInt(args[++i], 10);

        if (!Number.isFinite(value) || value <= 0) {
          console.error('--count phải là số nguyên > 0.');
          process.exit(1);
        }

        opts.count = value;
        break;
      }

      case '--no-push':
        opts.push = false;
        break;

      case '--no-commit':
        opts.commit = false;
        opts.push = false;
        break;

      case '--overlay':
        opts.overlay = true;
        break;

      case '--modules': {
        const raw = args[++i];

        if (!raw) {
          console.error(
            '--modules cần có giá trị, ví dụ: --modules FI-,CO- hoặc --modules "*"'
          );
          process.exit(1);
        }

        if (raw === '*') {
          opts.modules = null;
        } else {
          opts.modules = raw
            .split(',')
            .map(s => s.trim())
            .filter(Boolean);

          if (opts.modules.length === 0) {
            console.error('--modules không chứa module hợp lệ.');
            process.exit(1);
          }
        }

        break;
      }

      case '--help':
      case '-h':
        console.log(`
Usage:
  node scripts/run-vsp-batch.mjs [options]

Options:
  --count N
      Số view tối đa xử lý trong batch.
      Mặc định: 25

  --modules FI-,CO-,MM-,SD-,...
      Chỉ xử lý các module có app_component bắt đầu bằng
      các prefix được chỉ định.

  --modules '*'
      Xử lý tất cả module / tất cả LOB.

  Không truyền --modules
      Mặc định cũng xử lý tất cả module / tất cả LOB.

  --overlay
      Cho phép Z* customer overlay candidates và truyền
      --overlay xuống apply_vsp_ddl.mjs.

  --no-push
      Commit local nhưng không push.

  --no-commit
      Apply + rebuild nhưng không commit và không push.

  --help, -h
      Hiển thị help.

Examples:

  # Tất cả phân hệ — DEFAULT
  node scripts/run-vsp-batch.mjs --count 25

  # Chỉ FI + CO
  node scripts/run-vsp-batch.mjs --count 25 --modules FI-,CO-

  # Tất cả phân hệ — explicit
  node scripts/run-vsp-batch.mjs --count 25 --modules "*"

  # Tất cả phân hệ + Z* overlay
  node scripts/run-vsp-batch.mjs --count 25 --overlay

  # Chỉ apply, không commit
  node scripts/run-vsp-batch.mjs --count 25 --no-commit
`.trim());

        process.exit(0);
        break;

      default:
        console.error(`Option không hợp lệ: ${args[i]}`);
        console.error('Dùng --help để xem cách sử dụng.');
        process.exit(1);
    }
  }

  return opts;
}

// No shell:true here on purpose.
//
// With shell:true, spawnSync re-joins argv and hands it to cmd.exe for
// re-parsing, so a multi-word argument (commit message, DDL string, etc.)
// gets split back apart on spaces unless manually quoted.
//
// git.exe/node.exe are real executables Windows can spawn directly off PATH,
// so plain argv passing works correctly without a shell in between.
function run(cmd, args, opts = {}) {
  const result = spawnSync(cmd, args, {
    stdio: 'inherit',
    ...opts,
  });

  return result.status === 0;
}

// maxBuffer defaults to 1MB in spawnSync, which silently truncates stdout
// once exceeded rather than erroring.
//
// index/search_index.json and index/view-fields.js can run well past that,
// so a plain `git show :2:<file>` capture can otherwise return truncated,
// invalid content.
function runCapture(cmd, args, opts = {}) {
  return spawnSync(cmd, args, {
    encoding: 'utf-8',
    maxBuffer: 200 * 1024 * 1024,
    ...opts,
  });
}

function formatModuleFilter(modulePrefixes) {
  return modulePrefixes
    ? modulePrefixes.join(', ')
    : 'tất cả LOB / tất cả phân hệ';
}

async function selectCandidates(
  count,
  modulePrefixes,
  { allowZ = false } = {},
) {
  const coverage = await readJson(
    path.join(DATA_DIR, 'coverage.json'),
    null,
  );

  if (!coverage) {
    throw new Error(
      'coverage.json not found — run `node scripts/check-coverage.mjs` first',
    );
  }

  if (!Array.isArray(coverage.rows)) {
    throw new Error('coverage.json không có trường rows hợp lệ.');
  }

  const picked = [];

  for (const row of coverage.rows) {
    if (picked.length >= count) break;

    if (row.status !== 'metadata-only') continue;

    if (!row.name) continue;

    if (row.name.startsWith('_DCO_')) continue;

    // Public Hub batch skips Z* (customer namespace).
    // Overlay mode keeps them.
    if (!allowZ && row.name.startsWith('Z')) continue;

    const file = await findExistingView(
      VIEWS_DIR,
      row.name.toUpperCase(),
    );

    if (!file) continue;

    const fm = extractFrontmatter(
      await fs.readFile(file, 'utf-8'),
    );

    // Already upgraded since coverage.json was generated.
    if (scalar(fm, 'source_available') === 'true') {
      continue;
    }

    const appComponent = scalar(fm, 'app_component') || '';

    // modulePrefixes === null means:
    // --modules '*'
    // OR the new default behavior.
    //
    // Therefore ALL app_component values are accepted.
    if (
      modulePrefixes &&
      !modulePrefixes.some(prefix =>
        appComponent.startsWith(prefix),
      )
    ) {
      continue;
    }

    picked.push(row.name.toUpperCase());
  }

  return picked;
}

async function fetchBatch(names, systemName) {
  const tmpDir = path.join(
    os.tmpdir(),
    `vsp-batch-${process.pid}`,
  );

  await fs.mkdir(tmpDir, { recursive: true });

  let fetched = 0;
  let consecutiveSessionFailures = 0;

  const skipped = [];

  for (const name of names) {
    const result = runCapture(
      VSP_EXE,
      ['-s', systemName, 'source', 'DDLS', name],
    );

    const ddl = result.stdout?.trim();

    // vsp.exe can exit 0 with a "successful" HTTP response that is actually
    // a SAML SSO login redirect page because the session cookie expired.
    //
    // Exit code + non-empty stdout alone is NOT enough to consider the fetch
    // successful.
    const looksLikeLoginPage =
      result.status === 0 &&
      ddl &&
      !looksLikeAbapDdl(ddl);

    if (
      result.status === 0 &&
      ddl &&
      looksLikeAbapDdl(ddl)
    ) {
      await fs.writeFile(
        path.join(tmpDir, `${name}.ddl`),
        ddl,
        'utf-8',
      );

      fetched++;
      consecutiveSessionFailures = 0;

      console.log(
        `   OK   ${name} (${ddl.length} chars)`,
      );
    } else {
      const stderrLine =
        (
          result.stderr ||
          ''
        )
          .split('\n')
          .find(line => line.includes('Error:'))
          ?.trim() || 'unknown error';

      // A real ADT ResourceNotFound/404 means the Hub catalog listed a view
      // that simply isn't deployed in this tenant/release.
      //
      // That is expected and common.
      //
      // Only:
      //   - login-page-like response
      //   - explicit 401
      //   - explicit 403
      //   - unauthorized
      //   - forbidden
      //
      // count toward the consecutive-session-failure threshold.
      const isAuthFailure =
        looksLikeLoginPage ||
        /\b(401|403)\b|unauthorized|forbidden/i.test(
          stderrLine,
        );

      const reason = looksLikeLoginPage
        ? 'response không giống ABAP DDL — có thể là login page/SAML redirect, session cookie có thể đã hết hạn'
        : stderrLine;

      skipped.push({
        name,
        reason,
      });

      console.log(
        `   SKIP ${name} — ${reason}`,
      );

      if (isAuthFailure) {
        consecutiveSessionFailures++;

        if (
          consecutiveSessionFailures >=
          MAX_CONSECUTIVE_FAILURES
        ) {
          console.log(
            `\n${consecutiveSessionFailures} lỗi liên tiếp kiểu session/login — cookie có thể đã hết hạn.`,
          );

          console.log(
            'Export cookie mới từ browser (đăng nhập lại SAP tenant) rồi ghi vào tools/vsp/cookies.txt.',
          );

          break;
        }
      }
    }
  }

  return {
    tmpDir,
    fetched,
    skipped,
  };
}

/**
 * A view .md conflict where we just upgraded it to Full DDL
 * (`source_available: true`) and the other side is still the old
 * metadata-only content (`source_available: false`) isn't a real conflict.
 *
 * This can happen when the daily Hub-metadata-fetch/resync bot touches the
 * same view while this batch is running.
 *
 * Since this script only selects views that were metadata-only before the
 * run, our Full DDL version strictly supersedes the metadata-only version.
 *
 * Genuinely divergent edits — for example both sides having
 * source_available: true with different content — are NOT auto-resolved.
 */
async function isSafeViewSupersession(file) {
  const normalized = file.replace(/\\/g, '/');

  if (
    !normalized.startsWith('views/') ||
    !normalized.endsWith('.md')
  ) {
    return false;
  }

  const oursResult = runCapture(
    'git',
    ['show', `:2:${file}`],
  );

  const theirsResult = runCapture(
    'git',
    ['show', `:3:${file}`],
  );

  if (
    oursResult.status !== 0 ||
    theirsResult.status !== 0
  ) {
    return false;
  }

  const ours = oursResult.stdout;
  const theirs = theirsResult.stdout;

  return (
    /^source_available:\s*true\s*$/m.test(ours) &&
    /^source_available:\s*false\s*$/m.test(theirs)
  );
}

async function resolveMergeConflicts() {
  const result = runCapture(
    'git',
    ['diff', '--name-only', '--diff-filter=U'],
  );

  const conflicted = result.stdout
    .split('\n')
    .map(s => s.trim())
    .filter(Boolean);

  if (conflicted.length === 0) {
    return true;
  }

  const generated = [];
  const supersessions = [];
  const unsafe = [];

  for (const file of conflicted) {
    const normalized = file.replace(/\\/g, '/');

    if (GENERATED_FILES.has(normalized)) {
      generated.push(file);
    } else if (await isSafeViewSupersession(file)) {
      supersessions.push(file);
    } else {
      unsafe.push(file);
    }
  }

  // Never guess on files that aren't clearly safe.
  if (unsafe.length > 0) {
    console.log(
      `\nMerge conflict trong file không tự resolve được an toàn: ${unsafe.join(', ')}`,
    );

    console.log(
      'Đang huỷ merge — cần agent/người xử lý tay.',
    );

    run('git', ['merge', '--abort']);

    return false;
  }

  // Resolve our freshly upgraded Full DDL views in favor of ours.
  if (supersessions.length > 0) {
    console.log(
      `\n${supersessions.length} view vừa upgrade bị bot khác đụng vào bản metadata-only cũ — giữ bản Full DDL của mình:`,
    );

    console.log(supersessions.join(', '));

    for (const file of supersessions) {
      const ours = runCapture(
        'git',
        ['show', `:2:${file}`],
      );

      if (ours.status !== 0) {
        throw new Error(
          `Không đọc được ours version của conflict: ${file}`,
        );
      }

      await fs.writeFile(
        file,
        ours.stdout,
        'utf-8',
      );
    }
  }

  // Generated files are safe to regenerate/resolve.
  if (generated.length > 0) {
    console.log(
      `\nTự động resolve conflict trong ${generated.length} file generated: ${generated.join(', ')}`,
    );
  }

  for (const file of generated) {
    if (file === 'changelog.json') {
      const oursResult = runCapture(
        'git',
        ['show', ':2:changelog.json'],
      );

      const theirsResult = runCapture(
        'git',
        ['show', ':3:changelog.json'],
      );

      const ours = oursResult.stdout;
      const theirs = theirsResult.stdout;

      try {
        const oursArr = JSON.parse(ours);
        const theirsArr = JSON.parse(theirs);

        const seen = new Set();
        const merged = [];

        for (const entry of [
          ...oursArr,
          ...theirsArr,
        ]) {
          const key =
            `${entry.viewName}|` +
            `${entry.timestamp}|` +
            `${entry.action}`;

          if (seen.has(key)) {
            continue;
          }

          seen.add(key);
          merged.push(entry);
        }

        merged.sort((a, b) =>
          String(a.timestamp).localeCompare(
            String(b.timestamp),
          ),
        );

        await fs.writeFile(
          'changelog.json',
          JSON.stringify(merged, null, 2) + '\n',
          'utf-8',
        );
      } catch {
        // If changelog JSON is malformed on either side, ours is safer than
        // trying to guess how to merge arbitrary malformed data.
        await fs.writeFile(
          'changelog.json',
          ours,
          'utf-8',
        );
      }
    } else {
      const ours = runCapture(
        'git',
        ['show', `:2:${file}`],
      );

      if (ours.status !== 0) {
        throw new Error(
          `Không đọc được ours version của generated conflict: ${file}`,
        );
      }

      await fs.writeFile(
        file,
        ours.stdout,
        'utf-8',
      );
    }
  }

  return true;
}

async function main() {
  const opts = parseArgs();

  // -------------------------------------------------------------------------
  // Validate VSP executable
  // -------------------------------------------------------------------------

  try {
    await fs.access(VSP_EXE);
  } catch {
    console.error(
      `Không tìm thấy ${VSP_EXE}. Chạy lại từ đúng thư mục repo.`,
    );

    process.exit(1);
  }

  // -------------------------------------------------------------------------
  // Validate VSP config
  // -------------------------------------------------------------------------

  const vspConfig = await readJson(
    VSP_CONFIG,
    null,
  );

  if (!vspConfig) {
    console.error(
      'Không tìm thấy .vsp.json. Chạy 1 lần: tools\\vsp\\vsp.exe config mcp-to-vsp (từ thư mục gốc repo, cần .mcp.json sẵn có).',
    );

    process.exit(1);
  }

  const systemName =
    vspConfig.default ||
    Object.keys(vspConfig.systems || {})[0];

  if (!systemName) {
    console.error(
      '.vsp.json không có system nào. Xem lại tools/vsp/cookies.txt và .mcp.json.',
    );

    process.exit(1);
  }

  // -------------------------------------------------------------------------
  // Select candidates
  // -------------------------------------------------------------------------

  console.log(
    `Đang chọn tối đa ${opts.count} candidate ` +
      `(module: ${formatModuleFilter(opts.modules)}` +
      `${opts.overlay ? ', overlay' : ''})...`,
  );

  const names = await selectCandidates(
    opts.count,
    opts.modules,
    {
      allowZ: opts.overlay,
    },
  );

  console.log(
    `Chọn được ${names.length} candidate: ${
      names.length > 0
        ? names.join(', ')
        : '(none)'
    }\n`,
  );

  if (names.length === 0) {
    console.log(
      'Không còn candidate nào phù hợp với filter hiện tại.',
    );

    return;
  }

  // -------------------------------------------------------------------------
  // Fetch DDL
  // -------------------------------------------------------------------------

  console.log(
    `Đang fetch DDL qua vsp CLI (system: ${systemName})...`,
  );

  const {
    tmpDir,
    fetched,
    skipped,
  } = await fetchBatch(
    names,
    systemName,
  );

  console.log(
    `\nFetch xong: ${fetched} OK, ${skipped.length} skip.`,
  );

  if (skipped.length > 0) {
    console.log('\nDanh sách skip:');

    for (const item of skipped) {
      console.log(
        `  - ${item.name}: ${item.reason}`,
      );
    }
  }

  if (fetched === 0) {
    console.log(
      'Không fetch được view nào — dừng, không chạm gì tới git.',
    );

    await fs.rm(
      tmpDir,
      {
        recursive: true,
        force: true,
      },
    );

    process.exit(1);
  }

  // -------------------------------------------------------------------------
  // Apply DDL
  // -------------------------------------------------------------------------

  console.log(
    '\nApply DDL vào knowledge base...',
  );

  const applyArgs = [
    'scripts/apply_vsp_ddl.mjs',
    '--dir',
    tmpDir,
  ];

  if (opts.overlay) {
    applyArgs.push('--overlay');
  }

  if (
    !run(
      'node',
      applyArgs,
    )
  ) {
    console.error(
      'apply_vsp_ddl.mjs lỗi — dừng lại, kiểm tra output ở trên.',
    );

    await fs.rm(
      tmpDir,
      {
        recursive: true,
        force: true,
      },
    );

    process.exit(1);
  }

  await fs.rm(
    tmpDir,
    {
      recursive: true,
      force: true,
    },
  );

  // -------------------------------------------------------------------------
  // Backfill Type / Description
  // -------------------------------------------------------------------------

  console.log(
    '\nBackfill Type/Description từ Hub catalog...',
  );

  const skippedNames = new Set(
    skipped.map(item => item.name),
  );

  const fetchedNames = names.filter(
    name => !skippedNames.has(name),
  );

  const existingRequests = await readJson(
    REQUEST_FILE,
    [],
  );

  await writeJson(
    REQUEST_FILE,
    [
      ...new Set([
        ...existingRequests,
        ...fetchedNames,
      ]),
    ],
  );

  run(
    'node',
    [
      'scripts/enrich_ddl_fields.mjs',
      '--limit',
      String(fetchedNames.length + 15),
      '--delay-ms',
      '400',
    ],
  );

  // -------------------------------------------------------------------------
  // Rebuild search index
  // -------------------------------------------------------------------------

  console.log(
    '\nRebuild search index...',
  );

  await rebuildIndex(DATA_DIR);

  // -------------------------------------------------------------------------
  // Rebuild dashboard
  // -------------------------------------------------------------------------

  console.log(
    '\nRebuild dashboard...',
  );

  run(
    'node',
    ['scripts/generate-dashboard.mjs'],
  );

  // -------------------------------------------------------------------------
  // Optional commit
  // -------------------------------------------------------------------------

  if (!opts.commit) {
    console.log(
      '\n--no-commit: dừng ở đây, tự kiểm tra rồi commit tay.',
    );

    return;
  }

  console.log('\nCommit...');

  if (
    !run(
      'git',
      ['add', '-A'],
    )
  ) {
    console.error(
      'git add thất bại — không commit.',
    );

    process.exit(1);
  }

  const commitMsg =
    `Upgrade ${fetched} Hub-confirmed views to Full DDL via vsp CLI batch\n\n` +
    fetchedNames.join(', ');

  if (
    !run(
      'git',
      ['commit', '-m', commitMsg],
    )
  ) {
    console.log(
      'Không có gì để commit (hoặc commit lỗi) — dừng.',
    );

    return;
  }

  // -------------------------------------------------------------------------
  // Optional push
  // -------------------------------------------------------------------------

  if (!opts.push) {
    console.log(
      '\n--no-push: đã commit local, tự push tay khi sẵn sàng.',
    );

    return;
  }

  // -------------------------------------------------------------------------
  // Fetch origin/main
  // -------------------------------------------------------------------------

  console.log(
    '\nFetch + merge origin/main...',
  );

  if (
    !run(
      'git',
      ['fetch', 'origin', 'main'],
    )
  ) {
    console.log(
      'git fetch origin/main thất bại — commit vẫn còn local, chưa push.',
    );

    return;
  }

  const behindResult = runCapture(
    'git',
    ['log', '--oneline', 'HEAD..origin/main'],
  );

  const behind = behindResult.stdout.trim();

  if (behind) {
    const mergeResult = spawnSync(
      'git',
      ['merge', '--no-edit', 'origin/main'],
      {
        stdio: 'inherit',
      },
    );

    const mergeOk =
      mergeResult.status === 0;

    if (!mergeOk) {
      const resolved =
        await resolveMergeConflicts();

      if (!resolved) {
        console.log(
          '\nMerge bị huỷ — commit local vẫn còn, chưa push. Cần xử lý tay.',
        );

        return;
      }

      // Mark all conflicts as resolved.
      if (
        !run(
          'git',
          ['add', '-A'],
        )
      ) {
        console.log(
          '\ngit add sau khi resolve conflict thất bại — chưa push.',
        );

        return;
      }

      // Rebuild generated state after the merge.
      console.log(
        'Rebuild lại index/dashboard sau merge...',
      );

      await rebuildIndex(DATA_DIR);

      run(
        'node',
        ['scripts/generate-dashboard.mjs'],
      );

      run(
        'git',
        ['add', '-A'],
      );

      // Complete the merge commit.
      if (
        !run(
          'git',
          ['commit', '--no-edit'],
        )
      ) {
        console.log(
          'Merge đã resolve nhưng merge commit thất bại — chưa push.',
        );

        return;
      }
    }
  }

  // -------------------------------------------------------------------------
  // Push
  // -------------------------------------------------------------------------

  console.log('\nPush...');

  if (
    run(
      'git',
      ['push', 'origin', 'main'],
    )
  ) {
    console.log(
      '\n✅ Xong! Đã push lên main.',
    );
  } else {
    console.log(
      '\n⚠️ Push thất bại — commit vẫn còn local, kiểm tra tay (`git push`).',
    );
  }
}

main().catch(err => {
  console.error(
    `Lỗi: ${err.message}`,
  );

  process.exit(1);
});
