# Souvenir Website — 10x Loop Plan (the master "next to do")

The single backlog for taking the marketing site from "good structure" to "unmistakably
crafted." Built for an autonomous `/loop`: **each iteration = the next unchecked item →
build → screenshot-verify → commit → check it off → stop.**

Read first every iteration: `docs/pages/home.md` (arc), `docs/DESIGN.md`, the `souvenir-taste`
skill, and this file. Figma is the visual anchor: file `VhtVr4Hhje26XKwc0E5uNP`, full Home
`6044-25777` (resolve each section's child node with `get_metadata` before building it).

## What "10x" means here
Every section says plainly what it is, makes you *feel* it, and could not be lifted onto
any other site. The craft lives in: (1) high-fidelity **composed** visuals (not screenshots),
(2) one signature motion + a considered micro layer, (3) ruthless consistency from the Kaya DS,
(4) editorial typography + rhythm, (5) it's fast, responsive, accessible, and found (SEO/GEO).

## Global rules (apply to EVERY item — non-negotiable)
- **Besley headings (`.font-display`), Geist body.** If a heading renders sans, fix the font chain first.
- **Kaya DS elements ONLY** — compose from `<Section>`, `<Visual>` (Phase 0), `SectionHeading`,
  `Badge`, `Avatar`, `Chip`, `StatCard`, `DeltaPill`, `IconButton`, `kaya/Button`, `ShowcaseFrame`,
  `FinalCTABand`, `MessageBubble`, and `*/visuals.tsx`. New element → flag, don't fork. Icons only
  from `@strange-huge/icons`.
- **Visuals are composed DOM/SVG, never images** (except true assets: persona illustrations, app
  logos not in the icon set, the Brain mark — pull via Figma `download_assets`, optimize into
  `public/`). Crisp, responsive, themeable, animatable.
- **Composition grammar:** every section through `<Section>` (numbered mauve eyebrow → Besley
  headline → one tight lead → one visual); rhythm from `--section-y*`; tokens only, no magic numbers.
- **Accent discipline:** mauve = links/eyebrows/one signature visual; ochre = stats only; CTA = espresso.
  Colorblind: meaning never by color alone (icon + label). No coral.
- **Motion:** ONE signature moment (the §2 assemble). Else micro only, all reduced-motion safe.
- **Responsive = reflow, not scale:** verify 390/768/1024/1440, no overflow, no console errors.
- **Per item:** screenshot-verify, then `git commit` (`feat(home): …`), then check the box. Don't push.

## The visual-craft method (how to build #9–15 really well)
Per visual: **(a)** `get_design_context` the Figma node → exact layout/spacing/assets; **(b)**
download only true assets; **(c)** build from one of 4 archetypes; **(d)** wrap in `<Visual>`;
**(e)** define mobile reflow. The 4 archetypes:
- **NodeMap** — absolute KDS nodes + inline SVG connector paths (`stroke: var(--line-strong)`). For
  #10 connectors→Brain→agents, #11 Slack tree.
- **Scatter** — absolute KDS cards, emboss/shadow tokens, slight rotate/offset, z-layered. For #9
  chaos bubbles+tabs, #13 floating automations. (This is what the §2 signature assembles.)
- **Roster** — Avatar+Badge+text rows, one elevated with the dashed-focus motif. For #12 personas, #14 team.
- **Window** — the one `ShowcaseFrame` product proof, real KDS chat parts. For #15 Brain chat.

---

## NEXT TO DO (ordered queue)

### Phase 0 — Visual foundations (build once, every section inherits)
- [x] **0.1** Quick research scan: hand-coded SVG beats a graph lib for static marketing diagrams;
      SVG-over-nodes layer (pointer-events:none) in a fixed viewBox %-coord space → responsive, no
      runtime measurement; reflow (stack) on mobile. Written to `docs/solutions/design-patterns/concept-visuals.md`.
- [x] **0.2** `<Visual>` diorama frame built (`components/sections/Visual.tsx`) — warm/panel/bare
      surface, emboss, optional dashed-focus boundary, aspect-ratio. Storybook story added.
- [x] **0.3** `<NodeMap nodes edges>` built (`components/sections/NodeMap.tsx`) — absolute KDS nodes +
      inline SVG cubic-bezier edges in a fixed viewBox, mobile reflow to stack. Storybook story verified
      (connectors→900+→Brain→agents renders cleanly on the <Visual> panel).
- [x] **0.4** `<Scatter>` built (`components/sections/Scatter.tsx`) — z-layered offset cards,
      centering/rotation separated from the GSAP layer, `assemble` prop = the signature scatter→settle,
      mobile reflow to stack. Storybook story verified (overlapping automation cards land cleanly).

### Phase 1 — Sections, built to the Figma (the spine)
For each: resolve the Figma child node, set header via `<Section>`, build the visual via an archetype,
anchor copy to Figma, responsive reflow, screenshot-verify, commit.
- [x] **1.1 Hero** — centered, Besley ~42, foliage, single CTA, responsive. Shipped.
- [x] **1.2 Problem (#9 Chaos)** — `Scatter` of chat bubbles + browser-tab pile on the `<Visual>`
      diorama, signature assemble wired. Matches Figma #9. (Tab favicons = neutral placeholders;
      real app logos deferred to an asset-pull.)
- [x] **1.3 Souvenir relief (#10)** — `Relief.tsx`: "With Souvenir" badge + Besley headline + `NodeMap`
      (6 connectors → 900+ Connectors → Brain → Ad Copywriter / Customer Quote Drafter / Email & SMS
      Lifecycle). Inserted after Problem. (Side automation cards + model logos deferred as a refinement.)
- [x] **1.4 Turn** — built (`Turn.tsx`), minimal centered pivot line, Besley, correct rhythm. Confirmed.
- [x] **1.5 Two ways** — both paths now use the same espresso CTA (true 50/50 equal billing);
      parallel card structure retained. (Header kept centered via SectionHeading — fits the symmetric fork.)
- [x] **1.6 Slack × Brain (#11)** — `SlackBrainMap.tsx`: Brain+Slack header joined via `+` nodes down
      to Research board / AI Agents (+12) / Automation Flows rows with model dots + avatar stacks.
      Wired as the visual for the "Your knowledge, deeply understood" FeatureSplit (replaced SlackWorkforceMap).
- [x] **1.7 Personas (#12)** — built `<Roster>` primitive + `PersonaRoster.tsx`: Drafter/Scout/Handle
      cards (@handles, Private/Research badges), Scout elevated with description (the "live one").
      Wired into Pillar 01 ("A team of Assistants"). (Avatar initials placeholder for persona illustrations.)
- [x] **1.8 Automations (#13)** — `AutomationScatter.tsx`: overlapping pile (Floor / Morning /
      Utilization / Catalog) with ochre schedule + warm trigger badges, z-ordered so titles stay
      legible. Wired into Pillar 02 ("Background automation"). (Connector icons on cards deferred.)
- [x] **1.9 Coordinated team (#14)** — `TeamRoster.tsx`: alternating Scout/Drafter/Ops/Analyst/Recruiter
      rows (role · @handle) via `<Roster>` offset, + the "Ask Chief in Slack" coordination note.
      Wired into Pillar 03 ("full AI department"). Removed the now-dead ROSTER const + Avatar import.
- [x] **1.10 Brain proof (#15)** — `BrainProof.tsx`: the one `ShowcaseFrame` product window — nav rail
      (Brain active) + thread (MessageBubble user/assistant, "Memory on" badge) + model-selector input,
      from real KDS chat parts (ClientOnly). Inserted after Pillars, before Why-us.
- [x] **1.11 Why-us (CategoryTable)** — cut 9→6 differentiating rows; competitor cells now dash-marker
      + label (icon+label, colorblind-safe), Souvenir ✓+label.
- [x] **1.12 Resolution (CTA)** — added an opt-in `appGrid` to FinalCTABand (Home only; shared component
      safe): faded full-bleed app-icon grid backdrop, radial-masked to dissolve toward centre, dark band,
      mauve `.glow-signature`, dual CTA. Matches Figma #16 close.

### PASS 1 — Layout-system hygiene (one predictable rhythm; token-expressed, low-risk)
> ⛔ **This loop run stops after Phase 3.2.** Do PASS 1 + finish Phase 1–3, then halt — do NOT
> start Phase 4/5/6. **Rejections (hard):** no brown→navy gradient CTA / no navy anywhere (keep the
> Kaya espresso button); do NOT cap the hero at 40px (marketing display tier lives above 40); zero
> inline hex or arbitrary px Tailwind (`text-[32px]`, `#6b4b30`) — everything through Kaya/marketing tokens.
- [x] **P1.0 Hero decouple + top** — hero in its own container, top padding tokenized (`--section-y-sm`),
      decoupled from the decorative foliage; nav flush to top; hero 42px, no clip, no dead gap. Done.
- [x] **P1.1 Type scale as tokens** — section titles now consistently `--text-h2` (was: Breaking/
      Relief/BrainProof on the bigger `--text-display`; aligned to match SectionHeading/FeatureSplit/
      Pillars/CategoryTable). Hero = hero tier; pillar/path titles = h3; body = body. Italic spans are
      same-size tonal shifts (already correct). All token-driven, no inline px.
- [x] **P1.2 One spacing system** — audited: already satisfied. Every section uses `--section-y`
      (hero uses the larger -sm/-lg tiers); child spacing is all Tailwind's 4px scale; **zero** arbitrary
      `[..px]` or hand-tuned 18/26/34px values. No code change — verified clean, not manufactured churn.
- [x] **P1.3 Before/after pair** — Chaos (Breaking) and With-Souvenir (Relief) now mirror: identical
      header grammar (Badge → mt-4 h2 max-w-[24ch] → text-balance), same `<Visual surface="warm">`
      diorama, and aligned 16/10 aspect (was 16/9 vs 16/10). Kept as sequential beats (problem→turn→
      relief arc) rather than forced side-by-side — the conservative call Chai approved.
- [x] **P1.4 Matched Two-ways cards** — already satisfied by construction: both cards are
      `flex h-full flex-col` in a 2-col grid (equal heights), CTA in `flex-1 flex items-end` (baseline-
      aligned at the bottom), parallel structure, equal espresso CTAs. Verified, no churn.
- [x] **P1.5 Templatize Pillars** — already satisfied: all 4 render via one `PILLARS.map` structure
      (label → h3 → body → PillarVisual), `flex h-full flex-col`, uniform rhythm. Verified, no churn.
- [ ] **P1 done when:** type from tokens (hero = display tier); one spacing scale, scroll reads as even
      chapters; espresso CTA intact, zero inline hex/px, no navy; no overflow 390/768/1024/1440, no console errors.

### Phase 2 — Chrome
- [x] **2.1 Nav** — scrolled-state polish: pill firms up past the top (bg 0.7→0.85 + shadow-sm→md,
      300ms transition); mauve link hover + open-state on MegaMenu triggers and Pricing/About (verified
      rgb(103,79,104)=#674F68). Espresso CTA + ink focus + mobile sheet already in place; clipping +
      24px offset done earlier.
- [ ] **2.2 Footer** — editorial footer matching the system (columns, wordmark, the spine line).

### Phase 3 — Motion & micro (the "feel")
- [ ] **3.1** Tune the §2 signature assemble (scatter distance/stagger/duration) live; bake values to
      motion tokens; drop any tuning rig.
- [ ] **3.2** Micro layer: link/eyebrow hover, card hover-lift, CTA press, focus rings, section seams,
      reveal cadence — consistent + reduced-motion safe across all sections.

### Phase 4 — Responsive hardening
- [ ] **4.1** Per-section reflow pass at 390/768/1024 (visuals reflow, not scale); fix overflow.
- [ ] **4.2** Real device check: `dvh`, safe-area, tap targets ≥44px, no horizontal scroll anywhere.

### Phase 5 — Systems & launch
- [ ] **5.1 SEO/GEO** — per-page `metadata`, OG/Twitter images, `sitemap.ts`, `robots.ts`, JSON-LD.
- [ ] **5.2 Performance** — CWV green: image sizes/`aspect-ratio`, font preload, lazy-load below-fold
      visuals, no layout shift; Lighthouse pass.
- [ ] **5.3 Accessibility** — heading order, alt text, `aria-label`s, keyboard nav, contrast (AA),
      `prefers-reduced-motion` everywhere.
- [ ] **5.4 Analytics + forms** — wire the contact/demo CTA, confirm GA, add events.

### Phase 6 — Audit & polish
- [ ] **6.1** Run the `design-audit` skill against the live Home; fix every regression.
- [ ] **6.2** Cross-page consistency sweep (other routes inherit the new nav/footer/tokens).
- [ ] **6.3** `/ce-compound` — write the Home build learnings back to the repo.

---

## Loop invocation
`/loop Do the next unchecked item in docs/pages/website-10x-loop.md per its global rules and the
visual-craft method; read the relevant Figma node first; screenshot-verify; commit; check the box;
then stop.`  — Self-paced. Stop when the queue is clear or a section regresses.

> Supersedes `docs/pages/home-refine-loop.md` (its items are folded in above).
