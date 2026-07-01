import fs from "node:fs";
import path from "node:path";

/** Supademo-backed guide content. Each guide = a live Supademo demo + a written
 *  walkthrough (steps from the demo's hotspot annotations, screenshots hotlinked
 *  to Supademo's CDN so they stay fresh). */
export type GuideStep = {
  num: number;
  text: string;          // the hotspot instruction
  image: string | null;  // hotlinked Supademo CDN url (or null)
  hotspot?: { x: number; y: number };  // click target as % of the frame (from fetch_hotspots.mjs)
};

export type Guide = {
  slug: string;
  title: string;
  overview: string;
  supademoId: string;
  aspect?: string;   // the demo's true embed ratio, e.g. "3828 / 1962" (from fetch_aspects.mjs)
  steps: GuideStep[];
};

const DIR = path.join(process.cwd(), "src", "content", "guides");

export function getGuideSlugs(): string[] {
  if (!fs.existsSync(DIR)) return [];
  return fs.readdirSync(DIR).filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, ""));
}

export function getGuide(slug: string): Guide | null {
  const file = path.join(DIR, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf-8")) as Guide;
}

export function getAllGuides(): Guide[] {
  return getGuideSlugs().map((s) => getGuide(s)).filter((g): g is Guide => g !== null);
}
