# Session Handoff — 2026-06-24

> Snapshot to close this chat and resume cleanly in a new one. Nothing is lost by closing:
> all changes live in the working tree / on disk (which persists across chats). This file
> records WHAT is done, WHAT is uncommitted, and the OPEN strategic discussion.

---

## ▶ Kickoff prompt — paste this verbatim to start the next chat

```
Resume the Souvenir marketing website. Read docs/SESSION-HANDOFF.md FIRST, then CLAUDE.md +
docs/STRATEGY.md + docs/LEARNINGS.md + the souvenir-taste skill. Repo: ~/souvenir-website,
branch feat/home-landing-pass, deploys via Flowting-ai/landing-page → Vercel (www.getsouvenir.com).

State: hero loop + navbar are DONE and verified (see handoff). There are 4 uncommitted files in the
working tree (nav morph fix, username, learnings) — NOT yet committed. Dev server: `npx next dev -p 4321`.

I want to CONTINUE THE STRATEGIC DISCUSSION about the website (do not start building). The open
decision that gates everything else: do we KEEP the locked 50/50 home positioning, or REVERSE to a
business-first home with consumer on its own page? Pick up from the "Open discussion" section of the
handoff. The cold-B2B-traffic audit + my 5 feedback points are captured there in full.
```

---

## Working-tree state (UNCOMMITTED — on branch `feat/home-landing-pass`)

4 modified files, not committed (intentional — waiting on decision to commit/PR):

| File | What changed |
|---|---|
| `src/components/LandingPage/HeroProductWindow.tsx` | (1) Sidebar footer overrides via `sidebarProps`: `userName: "Power User"`, `userEmail: "Certified power user"`, `avatarSrc: "/hero/avatar.svg"`. (2) Added `textAlign: "left"` on the scaled product-window div so the Pinboard pin titles stop inheriting the hero's `text-center`. |
| `src/app/globals.css` | Nav flush→pill **morph smoothness fix**: `.site-nav__pill` now `margin-inline:auto` (centered both states) + transition 420/360ms; `.is-flush` `max-width: 100%` (was `none` — `none` can't interpolate, so the width SNAPPED). This is the ONLY nav change kept; the centered layout is otherwise the ORIGINAL (I reverted a bad left-align experiment — see LEARNINGS 2026-06-20). |
| `docs/LEARNINGS.md` | New entry 2026-06-20: don't change locked nav design intent; verify EVERY nav state; a morph must interpolate. |
| `.claude/skills/souvenir-taste/SKILL.md` | Promoted the nav rule into the Motion section (centered = locked; verify every state; no `max-width:none` morph). |

**Gitignored local assets (persist on disk, NOT in git):**
`public/hero/avatar.svg` (the warm gradient orb), `public/hero/chatboard.png` + `.webp` (re-captured
poster matching the live window — username "Power User"). If you ever `git stash`/switch branches,
these stay on disk (ignored), so they survive — but they will NOT travel in a PR. If the avatar/poster
must ship, un-ignore them or commit with `-f`.

## ✅ Done & verified this session (desktop + responsive screenshot-checked)
1. **Sidebar footer** — "U" monogram + `uttkarsh@cca.edu` → warm gradient orb (`avatar.svg`) +
   name **"Power User"** / sublabel **"Certified power user"**. Poster re-synced.
2. **Pinboard pin titles left-aligned** — were inheriting the hero's `text-center`.
3. **Navbar** — reverted my bad left-align change back to the **locked centered design**; fixed the
   flush⇄pill **morph** (was snapping). Verified 0 overflow at 375→1440, hamburger <1024, centered
   menu ≥1024, mega-menu full-bleed, morph smooth BOTH directions (sampled width 1280→1261→1150→1120).

## Known pre-existing (NOT from this session — leave alone)
- CTA Button `useId` hydration console warning (intermittent, dev-only). Documented in HERO_LOOP_HANDOFF.
- Hero **responsive crop** still deferred to the end-of-page responsive pass (see HERO_LOOP_HANDOFF.md).

---

## 🔭 OPEN DISCUSSION — website strategy (NO building until decided)

Chai shared major feedback + a cold-B2B-traffic audit. We were mid-discussion. **Chai chose "just talk
it through" — do not start implementing.** Full context preserved in `docs/STRATEGY-FEEDBACK-2026-06.md`.

### The one decision that gates everything
**KEEP the locked 50/50 home (Jun 15: one home, equal "for you" / "for your team", Linear model) — or
REVERSE to business-first home + consumer on its own page?** Chai's latest instinct = business-first.
My proposed reconciliation (have both): home stays a *lighter, business-led* fork for ORGANIC traffic;
PAID B2B ads bypass home → a dedicated stripped landing page (no nav, no fork, one CTA). This honors the
audit (fork is fine for organic, bad for paid) AND the locked decision. **Chai to decide direction.**

### My key strategic flags (already given to Chai, awaiting response)
1. **Coherence is the real fire, cheapest fix.** Two site generations live at once; legacy
   Pricing/Features still say "every AI model" and render **banned model logos (DeepSeek/Qwen/Grok/Meta)**
   — a B2B-trust red flag. Purge first; pure downside-protection.
2. **"Spotify for agents" is the WRONG analogy** — Spotify = catalog/streaming = the old banned
   aggregator story. The analogy must encode the NEW story (coordinated agent team + Brain manager).
   Better: "a coworker you hire in 30s" / "mission control for AI workers". Picking the analogy = picking
   the positioning.
3. **Hero video** — the scripted ChatBoard loop already "shows the product" (craft/feel). The feedback
   asks for *proof it works* (real screen-recordings, 30s demo). Different jobs — likely want BOTH.
4. **Trust signals must stay honest** — no testimonials/logos/SOC 2 yet. Use what's true: "never train
   on your data", "audit-logged & permission-aware", "OAuth, no middleware". Never fake SOC 2/logos.

### Audit's ranked recommendations (for reference)
Quick wins: purge banned models/language · fix placeholders (#discord, connector counts 250/900/243,
footer Contact→/about, drop "AI helped write this site") · de-risk demo CTA (3-field qualify, replace raw
Google Cal link) · trust strip above fold · align hero to positioning. Bigger bets: dedicated B2B ad page
· unify legacy pages onto one generation · rebuild pricing to locked credits model + Teams tier · real
social proof when first teams land · security/governance page + SOC-2-in-progress.

---

## Environment / how to run
- Dev: `npx next dev -p 4321` (NO port flag in `dev` script → defaults 3000; always pass `-p 4321`).
- Shot scripts: `node scripts/hero/{audit,live,poster}.mjs` (borrow ~/.shot-harness Playwright).
  Re-run `poster.mjs` after ANY live-hero-window change.
- If a CSS/build error persists after a fix: kill dev, `rm -rf .next`, restart (Turbopack caches hard).
- Figma MCP is DOWN (404) — pricing slider (node 4676-16615) stays blocked; build token-correct KDS
  version meanwhile (see HOME-COMPLETION-PLAN.md Phase 2).
- Companion docs: HERO_LOOP_HANDOFF.md, HOME-COMPLETION-PLAN.md, STRATEGY.md, LEARNINGS.md.
```
