// SAFE hi-res swap: lock each export to ONE guide (by collective image match),
// then within that guide's own export, replace each step image with its SAME
// screenshot at higher resolution (near-zero hash distance required). Two safety
// gates: (1) export is locked to the guide, (2) per-image distance must be tiny.
import { createRequire } from "node:module";
import path from "node:path"; import fs from "node:fs";
const require = createRequire(import.meta.url);
const sharp = require(path.join(process.cwd(), "node_modules", "sharp"));

const EXPORTS = "/tmp/dubble-all";
const CONT = path.join(process.cwd(), "src", "content", "guides");
const PUB = path.join(process.cwd(), "public");
const PER_IMG_MAX = 6;   // max hash distance to accept as "same screenshot"

async function aHash(input) {
  const { data } = await sharp(input).grayscale().resize(8, 8, { fit: "fill" }).raw().toBuffer({ resolveWithObject: true });
  const avg = data.reduce((a, b) => a + b, 0) / data.length;
  let bits = 0n; for (let i = 0; i < 64; i++) bits = (bits << 1n) | (data[i] > avg ? 1n : 0n); return bits;
}
const ham = (a, b) => { let x = a ^ b, c = 0n; while (x) { c += x & 1n; x >>= 1n; } return Number(c); };
function walk(d, re) { const o = []; for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) o.push(...walk(p, re)); else if (re.test(e.name)) o.push(p); } return o; }

// 1. hash export images, grouped by export dir
const exportDirs = fs.readdirSync(EXPORTS).filter((d) => fs.statSync(path.join(EXPORTS, d)).isDirectory());
const exp = {};
for (const d of exportDirs) {
  exp[d] = [];
  for (const f of walk(path.join(EXPORTS, d), /\.(png|jpg|jpeg)$/i)) {
    try { exp[d].push({ f, h: await aHash(f), w: (await sharp(f).metadata()).width || 0 }); } catch {}
  }
}
// 2. hash current (correct) guide step images
const guides = fs.readdirSync(CONT).filter((f) => f.endsWith(".json")).map((f) => JSON.parse(fs.readFileSync(path.join(CONT, f))));
for (const g of guides) {
  g._imgs = [];
  for (const s of g.steps) {
    if (!s.image) continue;
    const p = path.join(PUB, s.image.replace(/^\//, ""));
    try { g._imgs.push({ step: s, h: await aHash(p), w: (await sharp(p).metadata()).width || 0 }); } catch {}
  }
}
// 3. score every (guide, export) pair: avg of per-step best distances
const pairs = [];
for (const g of guides) for (const d of exportDirs) {
  if (!g._imgs.length || !exp[d].length) continue;
  let sum = 0;
  for (const gi of g._imgs) { let bd = 99; for (const e of exp[d]) bd = Math.min(bd, ham(gi.h, e.h)); sum += bd; }
  pairs.push({ slug: g.slug, dir: d, score: sum / g._imgs.length });
}
// 4. greedy 1:1 lock
pairs.sort((a, b) => a.score - b.score);
const guideToExport = {}, usedExport = new Set();
for (const p of pairs) { if (guideToExport[p.slug] || usedExport.has(p.dir)) continue; guideToExport[p.slug] = { dir: p.dir, score: p.score }; usedExport.add(p.dir); }

// 5. swap within locked export
let totalUp = 0;
for (const g of guides) {
  const lock = guideToExport[g.slug];
  if (!lock) { console.log(`${g.slug}: no export locked`); continue; }
  let up = 0, weak = 0;
  for (const gi of g._imgs) {
    let best = null, bd = 99;
    for (const e of exp[lock.dir]) { const dd = ham(gi.h, e.h); if (dd < bd) { bd = dd; best = e; } }
    if (best && bd <= PER_IMG_MAX && best.w > gi.w) {
      const ext = path.extname(best.f).toLowerCase().replace(".jpeg", ".jpg");
      const dir = path.join(PUB, "guides", g.slug);
      const oldRel = gi.step.image; const oldAbs = path.join(PUB, oldRel.replace(/^\//, ""));
      const fn = `step-${gi.step.num}${ext}`;
      if (path.basename(oldAbs) !== fn) { try { fs.unlinkSync(oldAbs); } catch {} }
      fs.copyFileSync(best.f, path.join(dir, fn));
      gi.step.image = `/guides/${g.slug}/${fn}`;
      up++; totalUp++;
    } else if (bd > PER_IMG_MAX) weak++;
  }
  fs.writeFileSync(path.join(CONT, `${g.slug}.json`), JSON.stringify({ ...g, _imgs: undefined }, (k, v) => k === "_imgs" ? undefined : v, 2));
  console.log(`${g.slug.padEnd(30)} ← ${lock.dir} (fit ${lock.score.toFixed(1)})  upgraded ${up}/${g._imgs.length}${weak ? `, ${weak} no-twin` : ""}`);
}
console.log(`\nTOTAL upgraded: ${totalUp}`);
