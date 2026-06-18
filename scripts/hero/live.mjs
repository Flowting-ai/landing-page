// Screenshot the LIVE hero window (motion on) — for watching the scripted loop.
// Captures the [data-hero-window] element to /tmp/souvenir-shots/hero-live-<ms>.png.
// Usage: node scripts/hero/live.mjs [delayMs ...]   (default frames across one cycle)
//   e.g. node scripts/hero/live.mjs 1500 3500 5500 7500
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";
import fs from "node:fs";

const require = createRequire(import.meta.url);
const { chromium } = require(path.join(os.homedir(), ".shot-harness", "node_modules", "playwright"));
const base = process.env.SHOT_BASE || "http://localhost:4321";
const outDir = "/tmp/souvenir-shots";
fs.mkdirSync(outDir, { recursive: true });

const delays = process.argv.slice(2).map(Number).filter(Boolean);
const points = delays.length ? delays : [1500, 3200, 4800, 6400, 8000];

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 1320 },
  deviceScaleFactor: 1.5,
  reducedMotion: "no-preference",
});
await page.goto(base + "/", { waitUntil: "networkidle" });
const el = await page.$("[data-hero-window]");
let prev = 0;
for (const t of points) {
  await page.waitForTimeout(Math.max(0, t - prev));
  prev = t;
  const f = path.join(outDir, `hero-live-${t}.png`);
  await el.screenshot({ path: f });
  console.log("captured", f);
}
await page.close();
await browser.close();
