// Re-capture the hero poster from the LIVE window so the SSR↔live swap stays seamless.
// Run after ANY change to the live window's layout/content.
// Usage: node scripts/hero/poster.mjs   (dev server on :4321, or set SHOT_BASE)
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require(path.join(os.homedir(), ".shot-harness", "node_modules", "playwright"));
const sharp = require(path.join(process.cwd(), "node_modules", "sharp"));
const base = process.env.SHOT_BASE || "http://localhost:4321";
const out = path.join(process.cwd(), "public/hero/chatboard.png");
const outWebp = path.join(process.cwd(), "public/hero/chatboard.webp");

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 1320 },
  deviceScaleFactor: 2,
  reducedMotion: "no-preference",
});
await page.goto(base + "/", { waitUntil: "networkidle" });
const el = await page.$("[data-hero-window]");
if (!el) { console.error("NO [data-hero-window] found"); process.exit(1); }
// Poll for the END-FRAME (summary pin present = artifact landed + reply complete), then capture.
let ready = false;
for (let i = 0; i < 70; i++) {
  await page.waitForTimeout(250);
  // The summary title appears transiently in the flying pin overlay too, so
  // scope the check to the Pinboard rail — it only holds the REAL landed pin.
  ready = await page.evaluate(() => {
    const rail = document.querySelector(".kds-pinboard-rail");
    return !!rail && /Sprint priorities/.test(rail.textContent || "");
  });
  if (ready) break;
}
if (!ready) { console.error("end-frame (Sprint priorities) never appeared"); process.exit(1); }
await page.waitForTimeout(600); // settle: let the fly overlay fade out + cursor return to rest
await el.screenshot({ path: out });
console.log("poster →", out);
await page.close();
await browser.close();

// The hero <img> serves the WebP (smaller LCP payload); the PNG is kept as the
// capture source. Quality 88 is visually lossless for this flat UI screenshot.
await sharp(out).webp({ quality: 88 }).toFile(outWebp);
console.log("poster →", outWebp);
