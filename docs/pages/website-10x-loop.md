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
- [ ] **1.1 Hero** — refine to Figma `6044-25777` hero: centered, Besley ~42, foliage; tune line-wrap
      + the CTA; confirm fits ~one viewport at 1440. (Hero baseline already shipped.)
- [ ] **1.2 Problem (#9 Chaos)** — `Scatter`: floating chat bubbles ("Which AI for which job?",
      "Every employee uses AI alone") + the browser-tab strip (Zapier/Manus/Gemini/Make/Claude/Notion).
      This is the emotional low; wire the **signature assemble** here.
- [ ] **1.3 Souvenir relief (#10)** — `NodeMap`: connectors (Ads/Gmail/Quickbooks/Slack/Salesforce/
      Sheets) → "900+ Connectors" → Brain → "Agents" (Ad Copywriter / Customer Quote Drafter / Email &
      SMS Lifecycle) + automation cards (Morning Briefing, Utilization Report) + model logos.
- [ ] **1.4 Turn** — keep minimal; confirm rhythm + Besley.
- [ ] **1.5 Two ways** — true 50/50, equal CTA weight, parallel structure; `<Section>` header.
- [ ] **1.6 Slack × Brain (#11)** — `NodeMap`: Brain + Slack joined, rows (Research board / AI Agents /
      Automation Flows) with model + avatar chips and the `+` join nodes.
- [ ] **1.7 Personas (#12)** — `Roster`: Drafter/Scout/Handle cards, @handles, Private/Research badges,
      one elevated card with description + dashed-focus boundary.
- [ ] **1.8 Automations (#13)** — `Scatter`: overlapping cards (Floor Briefing / Morning Briefing /
      Utilization Report / Catalog Integrity) with schedule badges + connector icons, depth/offset.
- [ ] **1.9 Coordinated team (#14)** — `Roster`: Scout/Drafter/Ops/Analyst/Recruiter alternating
      rows with @handles + one-line roles + the "Ask Chief in Slack" note.
- [ ] **1.10 Brain proof (#15)** — the ONE `Window`/`ShowcaseFrame`: composed Brain chat (sidebar,
      thread, model selector, input) from KDS chat parts.
- [ ] **1.11 Why-us (CategoryTable)** — tighten to genuinely differentiating rows; icon+label (colorblind).
- [ ] **1.12 Resolution (CTA)** — Figma close: app-grid backdrop + the dark band, mauve `.glow-signature`,
      clear CTA(s).

### Phase 2 — Chrome
- [ ] **2.1 Nav** — optimize the floating pill: tighter height/baseline, mauve link hover, espresso CTA,
      ink focus rings, scrolled-state shadow, real mobile menu.
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
