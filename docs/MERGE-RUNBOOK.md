# Merge Runbook — nav-iso + footer-scenery → main

> Goal: merge the two isolated worktree branches into the local **`main`** branch,
> cleanly, when `main` is ready. Both branches are built, verified, and parked.
> This is a **local merge** (no remote/host involved).

## Status (ready)

| Branch | Worktree | Dev port | Builds (static export) |
|---|---|---|---|
| `nav-iso` | `~/souvenir-nav-wt` | 4322 | ✅ `next build --webpack` exit 0 |
| `footer-scenery` | `~/souvenir-footer-wt` | 4323 | ✅ `next build --webpack` exit 0 |

- Both branched off `main` (`79abbc0`). They do **not** conflict with each other except in **one file** (`src/app/globals.css`, fully mapped below).
- `next.config.ts` = `output: "export"` → static site, builds to `out/`. No server.
- Note: in the worktrees `node_modules` is a symlink, so `next build` (Turbopack) fails on the symlink — use `next build --webpack` in a worktree, or build normally once merged into the real `~/souvenir-website` checkout.

## Readiness gate (do NOT merge until true)

`main` is still at the clean baseline `79abbc0`, but the shared checkout
`~/souvenir-website` is on branch `nav-refinement-flush-pill` with **~20+
uncommitted files** — the **other chat's in-flight hero/landing work**
(`LandingHero`, `BrainProof`, `Breaking`, `ChatInput`, `PersonaRoster`, docs, …).

**Gate:** the other chat must **commit its hero work** (to a branch and/or land it
on `main`) first. Merging into 20 uncommitted files risks data loss + blind conflicts.
Confirm `git -C ~/souvenir-website status --short` is clean (or the hero work is
safely on its own branch) before starting.

## What each branch brings

**`nav-iso`** (19 commits) — nav V2: flush→pill scroll bar aligned to the page
container, wordmark→mark, Radix `Dialog` mobile drawer, full-width OpenAI-style
mega-sheet (blur behind, solid panel), KDS-token rich cards + Tabs + Badge,
interactive gold iridescent Company-Brain card, preview-on-hover, utility footer bar.
- **New dep:** `@radix-ui/react-dialog@^1` (in its `package.json` + lockfile).
- **Touches:** `src/components/site/SiteNav.tsx`, `MegaMenu.tsx`, `FeaturedBrainCard.tsx`, `src/app/globals.css`, `docs/LEARNINGS.md`, `docs/solutions/…`, `package.json`, `package-lock.json`.

**`footer-scenery`** (11 commits) — illustrated warm-scenery footer: baked-gradient
wheat-field image dissolving into the page, grain, cursor sunlight-pool + parallax
(reduced-motion safe), gold-orb + wordmark brand lockup, prominent column typography.
- **New component:** `src/components/site/FooterScene.tsx`.
- **New assets:** `public/footer/scenery.webp`, `public/footer/scenery-sm.webp`, `public/brand/gold-orb.webp`.
- **Touches:** `src/components/site/SiteFooter.tsx`, `FooterScene.tsx`, `src/app/globals.css`, `docs/LEARNINGS.md`, the assets above.

## Merge order

1. **Hero first** (other chat) — gate above.
2. **`nav-iso`** → main (bigger surface; resolve the globals.css conflict here).
3. **`footer-scenery`** → main (smaller; the same globals.css region).
4. Retire the stale `nav-refinement-flush-pill` branch.
5. Build + verify, then it's ready.

## The one known conflict: `src/app/globals.css`

Both branches edit the same two regions. **Both edits are additive — keep both.**

1. **Mega-menu region** (~line 127): `nav-iso` *replaces* the old `.kds-mega-*`
   block with the new `.site-nav*` / `.nav-backdrop` / `.nav-viewport` / `.brain-card*`
   / `.site-nav__drawer` blocks. `footer-scenery` *adds* `.footer-scene*` blocks.
   → Resolution: take **nav-iso's** nav blocks **and** append **footer-scenery's**
   `.footer-scene*` blocks. No selector overlap.

2. **`@media (prefers-reduced-motion: reduce)` block** (end of file): both edit it.
   → Resolution: keep ONE block containing the union of overrides:
   ```css
   @media (prefers-reduced-motion: reduce) {
     html { scroll-behavior: auto; }
     *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
     /* nav */
     .nav-viewport, .nav-content, .site-nav__scrim, .site-nav__drawer { animation: none !important; }
     .brain-card { transform: none !important; transition: none !important; }
     .brain-card::before { animation: none !important; }
     .brain-card__icon::after { transition: none !important; }
     .brain-card__spec { opacity: 0 !important; }
     .brain-card__sheen { opacity: 0.18 !important; }
     /* footer */
     .footer-scene__img { transform: none !important; }
     .footer-scene__sun { opacity: 0 !important; }
   }
   ```
   Drop the obsolete `.kds-mega-surface { animation: none }` line (nav removed that selector).

3. **If the other chat also added blocks to globals.css** (e.g. hero/ChatBoard styles):
   those are separate selectors — keep them too; they don't overlap with nav/footer.

`SiteFooter.tsx` / `SiteNav.tsx` / `MegaMenu.tsx` won't conflict with each other
(different files). `docs/LEARNINGS.md` may conflict (append-only) — keep both sides'
entries. `package.json` / `package-lock.json` come from nav-iso (the react-dialog dep).

## Execute (when the gate is clear)

```bash
cd ~/souvenir-website
git checkout main
git pull            # only if a remote exists later; currently no remote — skip

# 1) nav
git merge nav-iso
#   → resolve src/app/globals.css per §"known conflict" (+ LEARNINGS append-both)
git add -A && git commit         # completes the merge

# 2) footer
git merge footer-scenery
#   → resolve globals.css again: append the .footer-scene* blocks + union the
#     reduced-motion block; LEARNINGS append-both
git add -A && git commit

# 3) sync the new dep + lockfile
npm install                      # picks up @radix-ui/react-dialog

# 4) retire the stale branch (after confirming nav-iso superseded it)
git branch -D nav-refinement-flush-pill   # only once its checkout is freed
```

## Verify (post-merge, in the real checkout)

```bash
npx tsc --noEmit                 # expect 0
npm run lint                     # expect clean
npm run build                    # static export → out/, expect exit 0, ~20 routes
```
Then run the dev server and smoke-test:
- **Nav:** flush over hero → pill on scroll; Product/Solution mega-sheet (blur behind, solid panel, preview-on-hover, gold card); mobile drawer (ESC, focus trap); keyboard + ink focus ring.
- **Footer:** scenery dissolves into page; gold-orb lockup; columns; sunlight-pool on hover; legal bar.
- **Widths:** 390 / 768 / 1024 / 1440 — no overflow, no console errors.
- **Ripple check:** the nav is global — verify 2–3 routes (`/`, `/product/brain`, `/pricing`), not just home.

## Worktree cleanup (after a successful merge)

```bash
git worktree remove ~/souvenir-nav-wt
git worktree remove ~/souvenir-footer-wt
git branch -d nav-iso footer-scenery       # once merged
# stop the dev servers on :4322 / :4323
```

## Rollback

Each merge is its own commit on `main`. To undo the last merge before pushing
anywhere: `git reset --hard HEAD~1` (or `git revert -m 1 <merge-sha>` to keep history).
Nothing leaves the local machine, so rollback is risk-free.
