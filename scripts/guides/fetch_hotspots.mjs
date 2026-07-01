/**
 * Inject each step's click-hotspot coordinates into the guide content JSON.
 *
 * Supademo records, per hotspot, the click target as `mouseXCooridnate` /
 * `mouseYCooridnate` (percent of the frame). The raw step screenshots we hotlink
 * don't bake in the ping marker, so the written walkthrough has no "click here"
 * cue. This pulls the coords from the demo's embed HTML (authoritative, one fetch
 * per demo) and stores `hotspot: { x, y }` on each step, matched by image filename.
 * The walkthrough then overlays a marker at that point.
 *
 *   node scripts/guides/fetch_hotspots.mjs
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

/** filename (without extension) -> { x, y } for the first real (non-zero) hotspot tied to that image. */
function coordMap(html) {
  const h = html.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
  const re = /"mouseXCooridnate":"([0-9.]+)","mouseYCooridnate":"([0-9.]+)"/g;
  const map = {};
  let m;
  while ((m = re.exec(h))) {
    const x = +m[1], y = +m[2];
    if (x === 0 && y === 0) continue;
    const back = h.slice(Math.max(0, m.index - 2500), m.index);
    const imgs = [...back.matchAll(/media\.supademo\.com\/[^"]+?\/([A-Za-z0-9_-]+)\.jpg/g)];
    if (!imgs.length) continue;
    const key = imgs[imgs.length - 1][1];
    if (!(key in map)) map[key] = { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
  }
  return map;
}

const files = fs.readdirSync(CONT).filter((f) => f.endsWith(".json"));
for (const f of files) {
  const p = path.join(CONT, f);
  const g = JSON.parse(fs.readFileSync(p, "utf8"));
  if (!g.supademoId) continue;
  const html = await fetchText(`https://app.supademo.com/embed/${g.supademoId}?embed_v=2`);
  const map = coordMap(html);
  let hit = 0;
  for (const s of g.steps) {
    const key = s.image && s.image.match(/\/([A-Za-z0-9_-]+)\.jpg$/)?.[1];
    if (key && map[key]) { s.hotspot = map[key]; hit++; }
    else if ("hotspot" in s) delete s.hotspot;
  }
  fs.writeFileSync(p, JSON.stringify(g, null, 2) + "\n");
  console.log(`${g.slug.padEnd(28)} ${hit}/${g.steps.length} steps got a hotspot`);
}
