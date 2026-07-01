# Learning Guide — Session Handoff (2026-06-30)

> ## ✅ STATUS: SUPADEMO BATCH COMPLETE
> All **16** Supademo-backed guides are generated and rendering; `npm run build` passes
> (`/guide/[slug]` is SSG — every guide prerenders into the static export); 0 overflow, clean
> console; all 200 hotlinked screenshot URLs validated 200. The MCP-pull steps below are now
> historical — keep them as the recipe for adding/refreshing a guide later.
>
> **Remaining:** (1) rotate the Supademo REST key in `.env.local`; (2) remove "Created on Supademo"
> branding in Supademo settings (Scale plan, Chai's toggle); (3) optionally trim create-agent (43
> steps); (4) commit/push `feat/learning-guide`.
>
> **To add/refresh ONE guide:** demoId↔slug map is in `src/content/guides/nav.ts`. Call
> `get_demo(workspaceId="cmqyavagj01f7xt0jp1uymnlf", demoId, include:["steps","hotspots"])`.
> Content lives in `step.hotspots[].text` (+ `step.image` CDN url; video steps → null; empty
> intro/outro dropped). Big demos overflow to a tool-results file → run
> `scripts/guides/supademo_extract.py <dumpfile> <slug> "<overview>"`; small demos return inline →
> write the JSON directly. Then `python3 scripts/guides/build_meta.py`.

> Snapshot to close + reopen the chat (a restart also loads the Supademo MCP server).
> Nothing is lost by closing: all work is in the working tree on branch `feat/learning-guide`
> (uncommitted) and persists on disk. Read this first to resume.

## ▶ Kickoff prompt — paste verbatim to resume
```
Resume the Souvenir Learning Guide work. Read docs/LEARNING-GUIDE-HANDOFF.md FIRST, then
CLAUDE.md + the souvenir-taste skill. Repo: ~/souvenir-website, branch feat/learning-guide
(uncommitted). Dev: npx next dev -p 4321.

We just added the Supademo MCP server (project config) and restarted to load it. FIRST: run /mcp,
confirm `supademo` is ✓ Connected (authenticate if needed), then verify list_demos + get_demo tools.
Then continue the Supademo pivot: pull the demo list → lock the sidebar → pull each demo's steps →
build the new Supademo-backed guide format (live demo + written walkthrough, NO per-step screenshots).
Plan is in this handoff under "THE PIVOT" + "PLAN".
```

## ⚑ THE CRITICAL RESUME STEP (do first after restart)
1. Run **`/mcp`** → confirm **`supademo`** (`https://mcp.supademo.com/mcp`) shows up.
   - If it asks to approve the project MCP server → approve.
   - If listed but not authed → **Authenticate** (browser OAuth).
   - If it does NOT appear after restart → add via the **claude.ai Connectors UI** instead
     (Add custom connector → URL `https://mcp.supademo.com/mcp` → OAuth). The CLI added it to
     project config (`.claude.json` → projects → souvenir-website → mcpServers → supademo), but
     the user's `/mcp` picker shows claude.ai-managed connectors, so the UI route may be needed.
2. Once connected, the tools `list_demos` + `get_demo` become available (load via ToolSearch).
3. Verify: `list_demos` should return the SouvenirAi workspace's demos.

## THE PIVOT (decided this session — important)
- **OUT:** the entire DoubleDBLUE/Dubble pipeline — the 13 imported JSON guides, the 105 hi-res
  screenshots, the import/verify/hires scripts. **None of it carries over** to the final product.
- **IN:** **Supademo is the single source of truth.** Each how-to guide = a **live Supademo demo
  embed** (top) + a **written walkthrough** whose text comes FROM that demo's own step annotations
  (via `get_demo`). Format modeled on ElevenLabs docs (demo at top + written numbered steps, NO
  per-step screenshots; screenshots only selectively if at all).
- The 3 **Getting Started prose pages stay** (they're concept docs, not Supademo-based).

## What's BUILT and reusable (the chassis — keep all of it)
On `feat/learning-guide`, working at `/guide` and `/guide/<slug>`:
- **Docs shell** (`src/components/GuidePage/GuideShell.tsx`): full-width layout (not the narrow
  marketing Container), grouped left sidebar, sticky; mobile drawer; right "On this page" rail (xl+).
- **KDS search** (`GuideSearch.tsx` → wraps the REAL vendored `src/components/GlobalSearchModal/`
  from may-day, adapted to guide/step types). ⌘K, grouped Guides/Steps, filter tabs, highlight.
- **On-this-page scrollspy** (`GuideOnThisPage.tsx`) — reads `[data-toc]` elements.
- **Copy page** (`CopyPageButton.tsx`) — copies guide as Markdown.
- **Screenshot zoom/lightbox** (`GuideScreenshot.tsx`) — hover + click-to-enlarge.
- **Was-this-helpful** (`GuideHelpful.tsx`) — GA event.
- **Prose doc layout** (`ProseDoc.tsx`) — for the Getting Started pages.
- **Supademo embed** (`SupademoEmbed.tsx`) — responsive iframe; falls back to "coming soon" until
  a demoId is set. Embed URL format used: `https://app.supademo.com/embed/<id>?embed_v=2` (CONFIRM
  the exact `embed_v` against a real Share→Embed snippet before templating all).
- **Type system** (globals.css `.guide-title` / `.guide-h2` / `.guide-h3` / `.guide-body` +
  `--text-h4` token): page title = the ONE Besley moment; all sub-headings = uniform sans, hierarchy
  by size. Refined prev/next switchers. Responsive verified 390/768/1024/1440, 0 overflow.
- **3 Getting Started prose pages** (built, keep): `/guide/getting-started/{what-is-souvenir,
  how-its-organized,two-ways-to-onboard}` (in `src/app/(site)/guide/getting-started/`).
- **"Learning Guide" rename** done (MegaMenu + SiteFooter + page title; route stays `/guide`).

## What will be REPLACED (the old content layer)
- `src/content/guides/*.json` (13 imported guides) + `public/guides/<slug>/*` (105 screenshots) +
  `scripts/guides/{import_guides.py,build_meta.py,hires_safe.mjs,verify_hashed.py}` + the
  `/guide/[slug]/` dynamic route + `LearningGuide.tsx` (current step+screenshot template) +
  `src/lib/guides.ts` + `src/content/guides/nav.ts`.
- These stay in the tree until the Supademo version is built (don't delete blind — reuse the nav
  shape, the slug routing, and `LearningGuide.tsx` as a starting point for the new template).

## PLAN (after MCP connects)
1. `list_demos` → get the SouvenirAi demo set (ids, titles, folders). Lock the sidebar groups to it.
2. `get_demo` per demo → pull steps + annotation text + embed id.
3. New content model per guide: `{ slug, title, overview, supademoId, steps:[{title, body}], keyImages? }`.
4. New template: live Supademo demo (top) → overview (+ optional callouts) → written numbered steps
   (text only) → prev/next/helpful/search (reuse chassis).
5. Build proof on ONE demo → user approves → batch the rest → wire nav → verify → commit/PR.

## DECISIONS locked
- Standardize on **"Agents"** (not Assistants) in copy.
- Docs run **full-width** (ElevenLabs pattern); **marketing/landing stays centered** (untouched).
- Step titles **sans**; page title **Besley**.
- **Supademo = source of truth**; drop DoubleDBLUE content.
- Recommended (pending final confirm): fully demo + written steps (no per-step screenshots);
  selective key screenshots optional.

## OPEN questions for the user
- A: fully demo+text, or keep a couple selective screenshots per guide? (rec: fully demo+text)
- B: callout boxes (beta/note/tip)? — needs content.
- Written steps verbatim from Supademo, or rewritten to our voice? (rec: start from Supademo, tidy.)

## Gotchas / env
- **Supademo REST API key** is in `~/souvenir-website/.env.local` (gitignored). It is VALID
  (workspace "SouvenirAi") but only reaches Zapier-sample REST endpoints — NOT demo content. The
  content path is the **MCP server (OAuth)**, not this key. **Rotate this key in Supademo** (it was
  pasted in chat). Safe to delete from .env.local once rotated.
- Supademo MCP rejects the REST key ("Invalid token format") — must use OAuth via /mcp.
- Dev server: `npx next dev -p 4321` (no port flag defaults to 3000). Shot harness: ~/.shot-harness.
- Branch `feat/learning-guide` is off origin/main; PR #2 (home Figma refinement) already merged.
- Companion handoffs: docs/SESSION-HANDOFF.md (older), docs/COPY-FIGMA-2026-06.md, HERO_LOOP_HANDOFF.md.
```
