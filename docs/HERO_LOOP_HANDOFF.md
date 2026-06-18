# Hero Loop — Build State & Handoff

> Updated 2026-06-17 (end of the hero build session). The hero is **BUILT and signed off** for desktop.
> The ONLY remaining item is the **responsive crop**, deliberately **deferred** to a single
> end-of-page responsive pass (do it once, against final global breakpoints, after all sections exist).
> **Read first:** `docs/visuals/hero.md` (the spec), this file, then `HeroProductWindow.tsx`.

## Status at a glance
- ✅ Hero loop built, polished, and approved at desktop (1440). Poster + reduced-motion fallback wired.
- ⏭ Responsive crop = the only open item — see "What remains". Mobile currently shrinks-but-doesn't-break (no overflow at 390/768/1024).
- ⚠️ Do NOT reopen the hero to do the crop in isolation. It's batched into the final responsive pass.

## What the hero is
Product-led hero (Linear "product outline"): the **real vendored Souvenir ChatBoard**
(Sidebar · Chat · Pinboard) runs the page's ONE signature motion moment — a scripted, **display-only**
loop. Headline locked: **"The workspace that knows your context — and runs the work."**
Subhead (locked): "Souvenir connects your apps into one shared context, then runs your multi-step work
in the background — for individuals and teams."

## The loop (current design — ~12s, seamless, display-only)
The ask is **already sent** (we do NOT show composing/typing/send — that beat doesn't sell the product).
The story is the operator working:
1. **Already-sent user message** sits at the top (thread has 64px top padding so it clears the top bar).
2. **Souvenir generates** via `StreamingIndicator`: `thinking` (Souvenir mark spins, cycling label) →
   `choosing` ("Choosing a model…", mark spins faster) → **lands on Claude** (`streaming`/`complete`
   show the **Claude** logo via `LlmIcon id="Claude"` + label "Claude Sonnet 4.6").
3. **Reply streams** word-by-word below the indicator. The reply is the **insight itself** — it does
   NOT mention pinning ("pinned on the right" etc. is wrong; the user decides to keep it).
4. **Pin·Copy·Regenerate action row** fades in under the reply.
5. Ghost cursor glides to the **Pin icon** (lands exactly on it, base-1440 ~`{375,299}`) and shows the
   icon's **hover state** (simulated — display-only can't real-`:hover`), then clicks.
6. The pinned message **lands in the Pinboard** using the board's OWN enter motion (each pin is wrapped
   in `EnterChunk`; a newly-added pin auto-animates: opacity/y/blur, ease `[0.2,0,0,1]`). **No flying
   overlay** (the old traveling card was removed — it got "stuck" and duplicated the real pin).
7. **Hold** ~2.8s → **seamless reset**: fade ONLY the assistant turn out (opacity on the assistant
   block), swap content while invisible, fade back in as `thinking`. The whole window NEVER blanks —
   the earlier "white flick" was the full-window opacity fade revealing the white frame bg; that fade
   is gone.

The in-hero **content tells a Sprint / research-synthesis story** (chosen 2026-06-17): ask =
"Summarize this month's user interviews and draft next sprint's priorities."; reply names 3 themes +
pulls from Notion + support tickets; pins = "Sprint priorities · top 5" (lands) + "Interview themes ·
this month" (supporting). Sidebar projects = Product Discovery / Roadmap / User Research; recents =
Sprint priorities / Interview synthesis / Churn analysis / Feature specs — v2 / Persona update.

## Where the code lives
- `src/components/LandingPage/HeroProductWindow.tsx` — the window + the loop (the only file you edit for the loop).
- `src/components/LandingPage/LandingHero.tsx` — headline/subhead/CTA + `<HeroProductWindow/>`.
- Vendored Kaya DS: `src/templates/ChatBoard`, `src/components/{Sidebar,Pinboard,PinboardHeader,Pin,StreamingIndicator,ChatInput,MessageBubble,…}` (verbatim copies of `~/may-day`). **Never fork these for hero needs** — scope marketing tweaks via CSS on `[data-hero-window]` (see kds-chatboard.css).
- `src/styles/kds-chatboard.css` — ported `kds-*`/`kaya-*` support CSS **+ the hero-only chrome strip + pin-heading-gap fix + the `kds-label-shimmer` keyframe** (StreamingIndicator's shimmer references it; it isn't in the ported globals).
- Poster: `public/hero/chatboard.webp` (served by the `<img>`) + `chatboard.png` (capture source). Re-capture with `node scripts/hero/poster.mjs` after ANY live-window layout/content change.

## Architecture already in place (don't redo)
- **Approach A (progressive enhancement):** SSR / first paint / `prefers-reduced-motion` → static
  **poster** (LCP + a11y fallback, no hydration mismatch). After mount (motion allowed) → the live
  ChatBoard mounts client-only (`live` state) and the loop runs.
- **Scale:** ChatBoard renders at a fixed **1440×900** coordinate space inside `[data-hero-window]`,
  scaled by `clientWidth/1440` (ResizeObserver). Cursor + overlays live INSIDE the scaled div, so they
  share 1440×900 UI coordinates — convenient for positioning/measuring.
- **Loop** = async `while(!cancelled)` in a `useEffect`, `sleep()` between beats, `cancelled` guard on
  unmount. transform/opacity only. Display-only: `pointer-events: none`.
- **Driven by:** `sidebarProps={{projects, recents}}` (overrides the template's lorem placeholders),
  `pinboardProps={{pins}}` (the board), `chatInputProps={{value:"", onChange:()=>{}}}` (empty composer),
  `children` = `HeroChatThread` (user msg + StreamingIndicator + streamed reply + action row).
- **Tokens:** frame uses `--radius-window` + `--shadow-float`; placeholder left-aligned via `textAlign`
  on the ChatInput root.

## ✅ DONE (this build is complete for desktop)
Vendor + kds CSS port + approach A + the full seamless loop above + chrome strip + left-aligned composer
+ centered pin heading + Claude model end-state + pin-from-message (no flying overlay) + sprint-synthesis
content + reply-says-no-"pinned" + WebP poster + all logged tunes (subhead/clause contrast, radius/shadow
tokenized). Poster re-captured. No overflow at any width.

## ⏭ What remains — RESPONSIVE CROP (deferred to the end-of-page responsive pass)
At 390px the full 1440×900 three-panel board shrinks to ~358px (illegible). Plan (from hero.md tune #1):
≤1024 drop the Pinboard rail; mobile = chat column only with a taller portrait frame; on cropped layouts
the pinned insight lands **inline in the thread** (it can't fly to an off-screen rail). Decide
crop-via-transform (lower risk) vs reflow-the-ChatBoard at session start. **Why deferred:** the crop
should inherit the page's final global breakpoint decisions and be tested against the whole mobile
scroll — do it last, once, not now. Not blocking (no overflow today).
Also still open + LOW: in-fold sizing (payoff already lands in-fold); CTA Button `useId` hydration
(pre-existing, intermittent dev-only — not from the loop; leave it, hardcoding the filter id risks
duplicate-id collisions).

## Sources & environment (machine state — NOT in this repo)
- **`~/may-day`** — the Kaya Design System repo. THE source for re-vendoring or checking any component.
  ChatBoard Storybook (`npm run storybook` → **:6006**) + prebuilt `~/may-day/storybook-static`
  (serve with `python3 -m http.server` to screenshot real stories).
- **`~/Downloads/strange-huge-icons-main`** — full icon source. LLM logos via `@strange-huge/icons/llm`
  (`LlmIcon id="Claude"` etc.; valid ids in `LLM_COLOR`). Connector logos in the main pkg.
- **`~/Downloads/front-end-ds-dev (2).zip`** — the LIVE product front-end (real screens), if you need a
  surface not in may-day. Chai's app reference screenshots (`~/Desktop/Screenshot 2026-06-16 at 11.56–57.*`)
  show the real pin/composer behaviour.
- **`~/.shot-harness`** — the Playwright install the scripts borrow (no repo dep). Required for all shots.
- **Dev server:** `npx next dev -p 4321` — the `dev` npm script has NO port flag (defaults to 3000),
  ALWAYS pass `-p 4321` (the shot scripts assume 4321). If a CSS/build error persists after a fix, it's
  Turbopack's cache: kill the server, `rm -rf .next`, restart.

## How to run / verify
- **Audit (overflow + console at 4 widths):** `node scripts/hero/audit.mjs`.
- **Live loop frames (motion on):** `node scripts/hero/live.mjs [delayMs ...]` → `/tmp/souvenir-shots/`.
  (Timing drifts vs. fixed delays; to catch a narrow beat, poll the DOM for the state then screenshot.)
- **Re-capture the poster** after ANY live-window change: `node scripts/hero/poster.mjs`
  (writes both `chatboard.png` + `chatboard.webp`; readiness check scopes to `.kds-pinboard-rail` so it
  never fires on the transient landing animation).

## Gotchas (already cost time — don't repeat)
- `bg-surface` (the frame bg) is **white**; the ChatBoard interior is cream — fading the whole window to
  opacity 0 reveals white = a flick. Fade only the changing content, never the whole window.
- Vendoring a Kaya component = code **+ its `@/components` closure + its global CSS** (LEARNINGS). Strip
  marketing chrome via `[data-hero-window]`-scoped CSS, never by editing the vendored component.
- `text-align` **inherits** — a centered hero made the vendored ChatInput placeholder center; anchor
  `textAlign` on the component root.
- `StreamingIndicator` needs the `kds-label-shimmer` keyframe (added to kds-chatboard.css).
- `*/` inside a CSS comment breaks the Tailwind build (strip comments when porting CSS).
- Turbopack caches CSS hard — if a CSS error persists after a fix, restart dev + `rm -rf .next`.
- Mauve stays reserved; tokens only; CTA = Kaya espresso Button (locked).
