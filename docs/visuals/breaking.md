# Breaking — visual spec

**Section:** Breaking (Home §2, Figma #9 "Chaos") — the beat right after the hero.
**Audience:** B2C + B2B. **One message:** the way work happens today is breaking — your context
is scattered across a dozen disconnected tools and you're the only thing connecting them.
**Emotional beat:** IMMERSION — feel the scatter / the endless manual stitching.

## Chosen concept (the one idea it encodes)
A diagonal **staircase of a dozen+ open tools**, each a labelled card naming a real, disconnected
piece of work ("Slack: Team project discussion", "Jira→GitHub: …"), climbing endlessly and bleeding
off the bottom + right edges. You (the cursor at the top) are clicking through all of it. The headline
names the takeaway the visual immerses you in: *you're the only thread between them.*

## Rung + KDS classification
- **Rung:** concept-card cluster / atmosphere (NOT a product-window — varies the archetype from the
  hero's ChatBoard and from Relief's NodeMap, per the spine's "vary archetypes" rule).
- **Classification:** **build** — bespoke `TabTerrain.tsx` (client component). Real logos via KDS
  `ConnectorIcon` + `LlmIcon` (only library-valid ids — see below). Tokens only.

## Composition
- `Breaking.tsx`: `Badge "Chaos"` + locked headline, then a warm panel (`--surface-warm`, emboss,
  `md:[aspect-ratio:11/8]`) containing `<TabTerrain/>`. Section is `overflow-x-clip` (clip guard).
- `TabTerrain`: 19 full-width rows, absolutely positioned, stepping up — `STEP_X 3.5%` (wide → flatter
  diagonal climbing to the top-right, per Chai's angle), `STEP_Y 5.3%` (≈ row height → clean near-flush
  **layered** stack, each row distinctly on top of the next via `--shadow-md`), `BASE_Y -2%` (bottom row
  bleeds off the bottom → no thin gap, reads endless). Rows `right:-3%` → clip at the panel's right edge
  (run *behind* it, not off-screen — contained width, NOT full-bleed). Cursor SVG at the top step.
- Mobile (`<md`): a compact reversed stack of the last 7 rows, no diagonal.
- **No connecting "thread" strings.** (Explored at length — logo-stitch thread + white-space drape
  threads — then removed at Chai's call. The staircase + copy carry the "thread" idea on their own.)

## Motion — CONTINUOUS horizontal drift (a deliberate doctrine exception — see LEARNINGS)
Each row fades in, then drifts left↔right in a slow ~7s loop; a per-row phase (`DRIFT_LAG 0.18`) makes
the drift travel **up** the stack as a gentle current. `AMP 15px` ("noticeable current": subtle=9,
active≈24). Runs **only while in viewport** (`whileInView`, `once:false` → reverts + pauses off-screen).
Animate transform/opacity only. **Reduced-motion / no-JS = the finished static frame, no drift.**

> ⚠️ This is a *continuous* ambient motion, which is strictly a second moving moment — an explicit,
> Chai-approved exception to the "hero is the page's ONE signature" rule (`motion.md`, STRATEGY,
> souvenir-taste). Kept subtle so it reads as ambient life, not a competing signature. Do NOT treat
> this as license for other sections to add perpetual motion — they default to static / one-time reveal.

## Color / accent
Warm-neutral 90% canvas; cards = `--surface` on `--surface-warm` panel; ink + ink-secondary text.
Mauve is currently **unused** here (the mauve accent rode the removed thread / a removed ChatGPT fill).
Espresso/dark not needed (no CTA in this section). No coral.

## Valid logo ids used (library-real only — others render blank)
ConnectorIcon: `slack, gmail, notion, stripe, github, linear, hubspot, figma`.
LlmIcon (`variant="color"`): `Claude, OpenAI` (ChatGPT), `Gemini`.
The card set was chosen to stay inside this set (a few realistic repeats — two GitHub, two Gmail, etc.
— which also reinforces "too many tabs"). Jira/Trello/Asana/Outlook/Discord/Spotify/Excel/Google-Docs
were dropped because they have no library logo (would render blank / need an invented id — banned).

## Copy (changed this session — flag for spine/hero-handoff coherence)
**"A dozen tools. *You're the only thread between them.*"** (was "Six tabs. Six accounts. Zero shared
memory. Your team is the manual bridge.") Rationale: the visual shows ~a dozen tools (not six), and the
"thread" line sets up the connection theme. `<em>` clause is `text-ink-muted` italic.

## Story-handoff
- **From (Hero):** the visitor left calm — they watched one ask pull real context and return a finished
  deliverable, unattended. Breaking is the deliberate hard cut by contrast into the mess that calm replaces.
- **This section leaves the visitor feeling:** the friction — a dozen disconnected tools, context
  scattered, you manually clicking through all of it, endlessly. Immersed in the problem.
- **To (next — Relief):** "One operational layer instead of the mess" — the exhale. Relief's `NodeMap`
  (connectors → Brain → agents) is the structural inverse of this scattered staircase: the scatter
  finally resolves into one coordinated hub.

## Build status
BUILT + approved at desktop (2026-06-18) in `TabTerrain.tsx` / `Breaking.tsx`. Verified: no overflow at
390/768/1024/1440; reduced-motion renders the full static frame; only pre-existing hero console errors
(Sidebar `d=undefined` + Button `useId` hydration — not from this section). Lazy/`SectionVisual` slot
exists (`src/components/sections/SectionVisual.tsx`) for any future swap to an exported asset.
