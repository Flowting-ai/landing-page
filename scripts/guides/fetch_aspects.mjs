/**
 * Inject each guide's true embed aspect ratio into its content JSON.
 *
 * Supademo embeds expose the recording's exact `aspect-ratio: W / H` in the embed
 * page HTML — that's the authoritative frame ratio (demos vary: 1.60 / 1.85 / 1.95 /
 * 2.09). Using it per-guide means the <SupademoEmbed> frame fits the demo exactly, so
 * no letterboxing / "bleeding". Re-run after adding or re-recording a guide.
 *
 *   node scripts/guides/fetch_aspects.mjs
 */
import fs from "node:fs";
import path from "node:path";
import https from "node:https";

const ROOT = path.resolve(import.meta.dirname, "..", "..");
const CONT = path.join(ROOT, "src", "content", "guides");

function fetchText(url) {
  return new Promise((res) => {
    https.get(url, (r) => { const c = []; r.on("data", (d) => c.push(d)); r.on("end", () => res(Buffer.concat(c).toString())); })
      .on("error", () => res(""));
  });
}

const files = fs.readdirSync(CONT).filter((f) => f.endsWith(".json"));
let ok = 0, miss = 0;
for (const f of files) {
  const p = path.join(CONT, f);
  const g = JSON.parse(fs.readFileSync(p, "utf8"));
  if (!g.supademoId) { miss++; continue; }
  const html = await fetchText(`https://app.supademo.com/embed/${g.supademoId}?embed_v=2`);
  const m = html.match(/aspect-ratio:\s*([0-9.]+)\s*\/\s*([0-9.]+)/i);
  if (!m) { console.log(`${g.slug}: no aspect-ratio found — leaving as-is`); miss++; continue; }
  g.aspect = `${m[1]} / ${m[2]}`;           // exact, CSS-ready (e.g. "3828 / 1962")
  fs.writeFileSync(p, JSON.stringify(g, null, 2) + "\n");
  console.log(`${g.slug.padEnd(28)} aspect = ${g.aspect}`);
  ok++;
}
console.log(`\ninjected aspect into ${ok} guides (${miss} skipped)`);
