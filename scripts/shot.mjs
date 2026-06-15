// Repo-local screenshot step for the design-audit skill/agent.
// Full-page, reduced-motion captures at 1440 + 390 (and any extra widths you pass).
// Reuses Playwright already installed in ~/.shot-harness — no repo dependency to install.
//
// Usage:
//   1. Start the dev server:  npm run dev   (serves on http://localhost:4321)
//   2. node scripts/shot.mjs <route> [label] [extraWidth ...]
//
// Examples:
//   node scripts/shot.mjs /                 home
//   node scripts/shot.mjs /product/brain    brain   768 1024
//
// Output: /tmp/souvenir-shots/<label>-<width>.png   (paths are printed on completion)

import { createRequire } from "node:module";
import os from "node:os";
import fs from "node:fs";
import path from "node:path";

const require = createRequire(import.meta.url);
const harness = path.join(os.homedir(), ".shot-harness", "node_modules", "playwright");
let chromium;
try {
  ({ chromium } = require(harness));
} catch {
  console.error(
    `Playwright not found at ${harness}.\n` +
      `Install it there (cd ~/.shot-harness && npm i playwright) or run the harness scripts directly.`,
  );
  process.exit(1);
}

const [route = "/", label = "shot", ...extra] = process.argv.slice(2);
const base = process.env.SHOT_BASE || "http://localhost:4321";
const url = route.startsWith("http") ? route : base + route;
const widths = [1440, 390, ...extra.map(Number).filter(Boolean)];
const outDir = "/tmp/souvenir-shots";
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const written = [];
for (const width of widths) {
  const page = await browser.newPage({
    viewport: { width, height: width < 700 ? 844 : 1000 },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(width < 700 ? 1200 : 1500);
  const out = path.join(outDir, `${label}-${width}.png`);
  await page.screenshot({ path: out, fullPage: true });
  written.push(out);
  await page.close();
}
await browser.close();
console.log("DONE\n" + written.join("\n"));
