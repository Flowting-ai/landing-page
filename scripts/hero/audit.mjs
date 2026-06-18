// Hero audit — overflow + console errors at 1440/1024/768/390 (reduced-motion = poster path).
// Usage: node scripts/hero/audit.mjs   (dev server must be on :4321, or set SHOT_BASE)
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require(path.join(os.homedir(), ".shot-harness", "node_modules", "playwright"));
const base = process.env.SHOT_BASE || "http://localhost:4321";

const browser = await chromium.launch();
for (const w of [1440, 1024, 768, 390]) {
  const errors = [];
  const page = await browser.newPage({
    viewport: { width: w, height: w < 700 ? 844 : 1000 },
    reducedMotion: "reduce",
  });
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text().slice(0, 140)); });
  page.on("pageerror", (e) => errors.push("PAGEERR: " + e.message.slice(0, 140)));
  await page.goto(base + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  const o = await page.evaluate(() => ({
    sw: document.documentElement.scrollWidth,
    cw: document.documentElement.clientWidth,
  }));
  console.log(
    `w=${w} overflow=${o.sw > o.cw + 1 ? `YES(${o.sw}>${o.cw})` : "no"} ` +
      `consoleErrors=${errors.length}${errors.length ? " :: " + errors.slice(0, 2).join(" | ") : ""}`,
  );
  await page.close();
}
await browser.close();
