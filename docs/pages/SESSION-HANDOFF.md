# Session handoff — Souvenir website build (resume here)

Saved so this work can continue in a fresh chat. Everything durable is in the repo; this file is
the map. Last updated mid-loop at **2.2 Footer**.

## Where things are
- **Repo:** `~/souvenir-website` · **branch:** `main` · **baseline:** `9a714b2`
- **36 commits ahead of baseline, NOT pushed** (Chai's standing rule: no push without "push it").
- **Working tree:** clean.
- **Dev:** `PORT=4321 npm run dev` → http://localhost:4321 · **Storybook:** `npm run storybook` → :6007
- **Screenshots:** `node scripts/shot.mjs <route> <label> [768 1024]` → `/tmp/souvenir-shots/`

## The plan / source of truth
**`docs/pages/website-10x-loop.md`** is the master queue (checkboxes = state). **23 done, 13 remaining.**
This loop run is bounded: **⛔ STOP after Phase 3.2** (do NOT start Phase 4/5/6 — those are intentionally
deferred and listed only for later).

### Done this session
- **Phase 0** visual foundations: `<Visual>`, `<NodeMap>`, `<Scatter>`, `<Roster>` primitives + research
  doc `docs/solutions/design-patterns/concept-visuals.md`.
- **Phase 1 (all 12 sections)** built to Figma: hero, Problem #9 (Scatter + signature assemble), Relief
  #10 (NodeMap), Turn, Two-ways (50/50), Slack×Brain #11, Personas #12, Automations #13, Team #14,
  Brain proof #15 (ShowcaseFrame), Why-us (tightened table), CTA close (app-grid backdrop).
- **PASS 1** layout hygiene: P1.1 h2 consistency · P1.2 spacing audit · P1.3 before/after pair ·
  P1.4 matched Two-ways · P1.5 templatized Pillars.
- **Fixes:** site-wide Besley/Geist font chain (`<html>` vars), KDS-anchored type scale, foliage backdrop
  behind the nav (page-level `HeroBackdrop` + `isolate`), nav 24px float offset, nav clipping (md→lg),
  **2.1 nav polish** (scrolled-state shadow + mauve link hover).

### Remaining in THIS run (do in order, then stop)
1. **2.2 Footer** ← *was mid-step.* Footer already exists + is token-clean (`src/components/site/SiteFooter.tsx`).
   Only pending tweak identified: brand line says *"The centralized workspace brain"* → align to the
   **spine "the memory your work keeps"** (or Chai's preferred wording). Otherwise audit-and-confirm.
2. **3.1** Tune the §2 signature scatter→assemble (distance/stagger/duration) live; bake to motion tokens.
3. **3.2** Micro layer: hovers, card-lift, CTA press, focus rings, section seams, reveal cadence — reduced-motion safe.
4. **⛔ STOP.**

### Global rules (every item) + PASS 1 rejections
Besley headings / Geist body · Kaya-DS elements only · `<Section>`/`<Visual>` grammar · mauve=links/eyebrows/
one signature visual, ochre=stats, espresso CTA, colorblind icon+label · one signature motion only ·
verify 390/768/1024/1440, build, commit each. **Rejections:** no navy / no brown→navy gradient (keep
espresso button); don't cap hero at 40px; **zero inline hex or arbitrary px** — tokens only.

## Open decisions — gated on Chai, NOT the loop (highest leverage)
1. **Figma copy anchor** — sections use placeholder/built copy; real words live in Figma node `4457-5995`
   (file `VhtVr4Hhje26XKwc0E5uNP`). Say *"pull the Figma copy"* to anchor every headline/body. Figma MCP
   is connected (`get_design_context` / `get_screenshot`).
2. **Asset pull** — visuals use neutral placeholders (Avatar initials, gray favicons) where real **app
   logos + persona illustrations** belong. Say *"pull the assets"* (Figma `download_assets` → `public/`).
3. **Push / PR** — 36 commits unpushed. Say *"push it"* (and whether you want a PR).
4. **Visual second-opinion loop** — brief ready at `docs/pages/visual-critique-brief.md` to paste into a
   web Claude chat; paste its `[P1/P2/P3]` response back and it triages into the queue.

## Other context docs (read on resume)
- `docs/pages/home.md` — the Home per-page brief (arc, rules, signature-motion spec).
- `docs/DESIGN.md` + `.claude/skills/souvenir-taste/SKILL.md` (canonical taste) + `docs/STRATEGY.md`.
- `docs/LEARNINGS.md` — running log (font bug, Tailwind-md-scan, etc.).

## How to resume (new chat or reopened)
The `/loop` is **session-scoped** — closing this chat ends it (no cron). To continue, open a new chat in
this repo and run:

```
/loop Continue docs/pages/website-10x-loop.md next unchecked items in order (2.2 Footer, 3.1 signature-motion tune, 3.2 micro layer) per global rules + PASS 1 rejections (no navy, no inline hex/px, Kaya/marketing tokens only); screenshot-verify 390/768/1024/1440; build; commit; check the box. ⛔ STOP after Phase 3.2.
```

A fresh chat auto-loads CLAUDE.md + the souvenir-taste skill; everything else it needs is the queue doc
above. Nothing is lost by closing — all state is in git + these docs.
