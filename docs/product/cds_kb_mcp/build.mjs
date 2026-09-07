// build.mjs — bundle the whole server (+ deps) into ONE runnable file: dist/cds-kb-mcp.cjs
// Output needs only Node >= 18 on the target machine. No data is bundled.
import { build } from 'esbuild';
import { chmod } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outfile = 'dist/cds-kb-mcp.cjs';

await build({
  entryPoints: ['src/server.mjs'],
  bundle: true,
  platform: 'node',
  // CJS, not ESM: express's dependency tree (body-parser -> depd/debug/etc.)
  // is old-style CJS that does `require('tty')`, `require('path')`, etc.
  // with an argument esbuild can't always prove is a string literal.
  // Bundled as CJS, those are just real `require()` calls at runtime — no
  // esbuild interop shim involved, so nothing to fail. Bundled as ESM,
  // esbuild has to emit its own require() shim for anything left over from
  // CJS source, and that shim throws ("Dynamic require of ... is not
  // supported") for exactly this kind of call — confirmed against this
  // repo's previously-committed dist/cds-kb-mcp.mjs too, so this wasn't
  // caused by any particular dependency version, it's the ESM output
  // format itself that doesn't work for this dependency tree.
  format: 'cjs',
  target: 'node20',
  outfile,
  // Extra safety net even under CJS: express (via body-parser -> debug)
  // only pulls in tty/supports-color to decide whether to colorize console
  // output, which this server has no use for — stubbing it out removes the
  // dependency entirely rather than just working around how it's required.
  alias: { debug: path.join(__dirname, 'build', 'debug-stub.cjs') },
  // @huggingface/transformers ships native ONNX runtime binaries esbuild can't
  // bundle (and shouldn't — they'd bloat the single-file dist to tens of MB).
  // It's loaded lazily via dynamic import in embedQueryText only for local
  // hybrid search, so leaving it external keeps the dist small; a deployment
  // without the package installed simply never enables local hybrid (BM25
  // fallback), which is the documented degradation.
  // swagger-ui-express (via swagger-ui-dist) serves its CSS/JS/images from a
  // path computed at runtime relative to its own package folder (__dirname).
  // Bundled into this single file, that path resolves to dist/ instead of
  // node_modules/swagger-ui-dist/ — every asset request 404s internally and
  // falls through to the catch-all HTML handler, so the browser gets HTML
  // where it expected JS ("Unexpected token '<'", blank Swagger UI page).
  // External keeps its real require() — resolved from node_modules at
  // runtime, same fix shape as transformers above, different root cause.
  external: ['@huggingface/transformers', 'swagger-ui-express'],
  // esbuild preserves the shebang already present in src/server.mjs — don't add another.
});

await chmod(outfile, 0o755);
console.log(`Built ${outfile}`);
