# Hero — visual spec

**Section:** Hero (landing, top of page)
**Audience:** B2C + B2B (individuals and teams) — the page splits later; the hero speaks to both.
**One message:** It knows your context *and* finishes the work — not a chatbot, an operator.

## Rung + KDS classification
- **Rung:** product-window.
- **Classification:** **use** the real `may-day` ChatBoard component (not a screenshot, not a re-skin). Drive it with a scripted, non-interactive loop in the hero context.
- **No new sourced code.** Internal component only; no license to surface.

## Chosen concept (the one idea it encodes)
One real business ask travels from prompt to finished deliverable on screen, unattended — context pulled, work run, artifact returned.

## Signature (page-level — see motion.md delta)
- **The hero loop is THE page signature moment.** Reassigned from Breaking (scatter→assemble), which down-shifts to a restrained entrance reveal. Rationale: the signature belongs where the thesis lands hardest and where everyone sees it; a re-running demo out-signatures a one-time scroll reveal.
- Only one heavy motion moment on the page. Hero loop is it; everything else stays cheap.

## Build order (non-negotiable — end-state first)
1. **Build the completed end-frame first** and make it the **default render** (SSR / no-JS / reduced-motion): Q3 ask shown, reply complete, chips lit, artifact card in the Pinboard.
2. This frame = LCP element + reduced-motion fallback + the empty-state guard, all at once.
3. **Only after** hydration → on-view → motion-allowed: reset to empty and play the ~8s loop.
- **Empty/start-state must NEVER be a resting or landable paint.** It exists only during the ~8s active run. (The 10:20 screenshot showed the empty frame as default — that is the exact failure mode this ordering prevents.)
- On a top-of-page hero the element is already in view at load: hold the end-frame ~0.5–0.8s after motion-allowed, then a soft reset (gentle fade/rewind, not a hard cut) into the loop — reads as "here's the result… now watch it happen," authored not glitchy.

## Composition
- Centered serif headline + two-beat subhead (locked copy). Tighten vertical rhythm: more space **above** the subhead than below it, so headline → subhead → button reads as a descending cadence.
- Wide three-panel window (sidebar · chat · Pinboard), floated.
- **No ground / no gradient floor.** Float via `--shadow-float` + `--radius-window` and generous symmetric gutters; prevent the hard cut into the next section with breathing room below, not a fade.
- The hero instance is **display-only**: `pointer-events: none` on the loop surface. Real component, on rails.

## Motion (the scripted loop — ~12s, long hold, seamless re-trigger) — CURRENT (2026-06-17)
The ask is **already sent** (no composing/typing/send beat — it doesn't sell the product). The story is
the operator working:
1. Already-sent user message at top (thread top-padding clears the top bar).
2. **Souvenir generates** (`StreamingIndicator`): `thinking` → `choosing` ("Choosing a model…") →
   **lands on Claude** (`streaming`/`complete` show the Claude logo + "Claude Sonnet 4.6").
3. **Reply streams** word-by-word — the **insight itself**; it must NOT mention pinning.
4. **Pin·Copy·Regenerate** action row fades in under the reply.
5. Ghost cursor lands exactly on the **Pin icon** + shows its **hover state**, then clicks.
6. The pinned message **lands in the Pinboard** via the board's OWN enter motion (EnterChunk: opacity/y/
   blur). **No flying overlay.**
7. Hold ~2.8s → **seamless reset**: fade ONLY the assistant turn (never the whole window — that caused a
   white flick), swap content while invisible, fade back in as `thinking`.
- **Reduced-motion:** render the end-frame poster only (same as default SSR render). No streaming/cursor.

## Loop choreography — display-only, scripted cursor
- **Interaction model: display-only** (`pointer-events: none`) + a **scripted ghost cursor** that
  *simulates* hover/click so the loop reads as "watch it happen." (Chai chose A over a genuinely-
  interactive window.)
- **Content = a Sprint / research-synthesis story (chosen 2026-06-17):** ask = "Summarize this month's
  user interviews and draft next sprint's priorities."; reply names 3 themes + pulls from Notion +
  support tickets (no "pinned" language); pins = "Sprint priorities · top 5" (lands) + "Interview themes
  · this month" (supporting); sidebar projects = Product Discovery / Roadmap / User Research; recents =
  Sprint priorities / Interview synthesis / Churn analysis / Feature specs — v2 / Persona update.
- **Build status: BUILT + approved at desktop (2026-06-17)** in `HeroProductWindow.tsx`. All corrections
  landed: pin comes FROM the message (user keeps the insight; AI never announces pinning); pin lands via
  the board's native enter motion (flying overlay removed — it got "stuck"); Souvenir→Claude model pick;
  seamless reset (no white flick); composer placeholder left-aligned; Pinboard chrome stripped in-hero
  via `[data-hero-window]` CSS; pin heading centered; cursor lands exactly on the Pin + hover state;
  radius/shadow tokenized; WebP poster. Poster re-captured. (Full continuity: HERO_LOOP_HANDOFF.md.)
- **Still open:** (a) **responsive crop — DEFERRED to the end-of-page responsive pass** (≤1024 drop the
  rail; mobile = chat column only + inline pin-landing; shrinks-but-doesn't-break today, no overflow);
  (b) in-fold sizing (LOW — payoff already in-fold); (c) CTA Button `useId` hydration (LOW, pre-existing,
  intermittent dev-only — not from the loop; left as-is, hardcoding the id risks duplicate-id collisions).

## Logged tunes (clear all 5)
1. **Tablet crop ×  loop:** at ≤1024px drop the right Pinboard rail; below that breakpoint the artifact card lands **inline in the thread** so the payoff survives the crop. Mobile = chat column only, same inline landing.
2. **Subhead contrast:** raise warm gray to ≥4.5:1 (AA) on cream.
3. **Grayed-clause:** darken the italic headline clause out of disabled-text range — emphasis, not placeholder. Contrast tune only; copy stays locked.
4. **PNG→WebP:** connector/app icons to WebP (SVG where available).
5. **Tokenize shadow/radius:** promote 14.91px corner → `--radius-window`, float shadow → `--shadow-float`; no inline magic numbers.

## Current-state fixes (from 10:20 screenshot)
- **Stray filter/sort controls leaking into the left cream margin** (outside the window) — positioning/overflow bug.
- **Composer clipped at the window's bottom edge** — window must contain its children (inner padding / overflow); composer sits inside the safe area.
- **Empty Pinboard collapses** (Export/Organize float to top over whitespace) — resolves automatically once the end-state is the default render; do not fix separately.
- **Window bleeds to viewport edges** — apply symmetric gutters + float per Composition.

## Copy
No copy change. The grayed-clause and subhead items are contrast tunes, not rewrites. Headline + subhead remain locked.

## Story-handoff
- **From (previous):** — (hero is the opener)
- **This section leaves the visitor feeling:** calm — they watched one real ask pull real context and return a finished deliverable, unattended. "It runs the work" is shown, not claimed.
- **To (next — "Chaos"):** hard cut by contrast into "Six tabs. Six accounts. Zero shared memory." — the mess that calm replaces.
