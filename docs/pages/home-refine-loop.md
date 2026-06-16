# Home refinement — loop queue

Execution plan for an autonomous `/loop`. **Each iteration: do the next unchecked
item, screenshot-verify, commit, check it off, stop.** Read `docs/pages/home.md`
(the brief), `docs/DESIGN.md`, and the `souvenir-taste` skill first.

## Global rules (apply every iteration — non-negotiable)
- **Besley headings, Geist body.** Headlines use the `.font-display` class (now
  fixed site-wide). If any heading renders sans, stop and fix the font chain first.
- **Kaya DS elements ONLY — no ad-hoc components** (this is the consistency rule).
  Compose each section from the documented set: the `<Section>` primitive
  (`components/sections/Section`), `SectionHeading`, `Badge`, `Avatar`, `Chip`,
  `StatCard`, `DeltaPill`, `IconButton`, `kaya/Button` (CTA), `ShowcaseFrame`,
  `FinalCTABand`, and the page organisms in `*/visuals.tsx`. Build a new element
  only if none fit — and flag it, don't silently fork. Icons only from
  `@strange-huge/icons` (valid ConnectorIcon ids only).
- **Composition grammar:** every section runs through `<Section>` — numbered
  eyebrow (mauve) → Besley headline → one tight lead → one abstracted visual.
  Left-aligned editorial by default; rhythm from `--section-y*` (no ad-hoc padding).
- **Accent discipline:** mauve = links/eyebrows/the one signature visual only;
  ochre = stats only; CTA = espresso `kaya/Button`. Colorblind: meaning never by
  color alone (icon + label). No coral.
- **Motion:** the ONE signature moment is the §2 assemble — do not add a second.
  Everything else is micro (hover/reveal) and reduced-motion safe.
- **Verify each:** `node scripts/shot.mjs <route> <label> 768 1024` — no overflow
  at 390/768/1024/1440, no console errors. Then commit `feat(home): <section> …`.
- **Tokens only, no magic numbers.** Don't touch vendored Kaya product tokens or
  any route but `/`.

## Queue (do top-to-bottom, one per iteration)

- [ ] **0 · Nav bar.** Optimize the floating pill nav: tighten height/padding,
      align the wordmark + links + CTAs on the baseline grid, mauve hover on links,
      espresso `kaya/Button` for "Get started", `secondary` for "Sign in", correct
      focus rings (ink), mobile menu. Sticky with a subtle scrolled-state shadow.
- [ ] **1 · Hero fit + visual.** Fix "out of screen": ensure the hero (headline +
      visual + CTAs) fits ~one viewport at 1440 — reduce `--text-hero` usage on this
      long line or tighten `--section-y-lg` / max-width so the CTAs sit above the
      fold. Decide the hero visual: keep `ChatPinVisual` vs an abstracted treatment
      (brief wants abstracted; product window reserved for §5). Tune foliage opacity.
- [ ] **2 · Problem.** Tune the signature assemble feel (scatter distance, stagger,
      duration) per Chai's live note; make the chaos more *felt* (the problem card
      is the emotional low). Keep before/after but run headers through `<Section>`.
- [ ] **3 · Turn.** Light polish only (already minimal). Confirm rhythm + rules.
- [ ] **4 · Two-ways.** Rebalance to true 50/50 — equal CTA weight (both
      `secondary`, or both equal), parallel structure. Editorial header via
      `<Section>`. Cards from KDS surfaces.
- [ ] **5 · Proof (FeatureSplit).** Lighten the visual; this is the ONE allowed
      product window (`ShowcaseFrame` + `SlackWorkforceMap`). Editorial header.
- [ ] **6 · How-it-works (Pillars).** De-dupe so it's a distinct archetype from §5.
      Numbered editorial header; pillar visuals from KDS atoms (Avatar/Badge).
- [ ] **7 · Why-us (CategoryTable).** Tighten to only genuinely differentiating
      rows; comparison uses icon + label (colorblind-safe), not red/green.
- [ ] **8 · Resolution (FinalCTABand).** Polish; confirm mauve `.glow-signature`,
      single clear CTA, dark band rhythm.
- [ ] **9 · Whole-page audit.** Run the `design-audit` skill against the live Home;
      fix regressions; final responsive + console pass; update `home.md` DoD checks.

## Loop invocation
`/loop` with: *"Do the next unchecked item in docs/pages/home-refine-loop.md per
its global rules; screenshot-verify; commit; check it off; then stop."*
Self-paced (no fixed interval). Stop when the queue is clear or a section regresses.
