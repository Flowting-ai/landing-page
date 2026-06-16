# Home — section-by-section build scope

Per-page brief for the first loop. Lives at `docs/pages/home.md`. Claude Code reads
`docs/souvenir-website-plan.md`, `docs/souvenir-learnings.md`, and the `souvenir-taste` skill
first, then executes this. **This is a rework-in-place, not a from-scratch rebuild** — that's
what makes it winnable.

Route: `src/app/(site)/page.tsx`. Components: `src/components/LandingPage/*`,
`src/components/AIAgentsPage/FeatureSplit`, `src/components/sections/FinalCTABand`.

---

## Mission (bounded)
Rework the **Home page only** so it tells one story — *"the memory your work keeps"* —
problem-first, with abstracted visuals, the mauve signature accent, and exactly one signature
motion moment. Reuse existing components and copy wherever they hold; change order, hierarchy,
visuals, and accent, not the whole thing.

## Out of scope (do NOT touch)
- Any route other than `/` (no other pages, no nav/footer rebuild beyond what Home needs).
- Kaya **product** tokens in `src/styles/tokens/*` (only the marketing layer in `globals.css`).
- New dependencies, new fonts, WebGL/3D, heavy media/Lottie.
- Deleting or rewriting body copy without flagging it first.

## Story arc (the spine)
Hero says plainly *what it is* → the visitor **feels the problem** → a one-line **turn** ("a
new layer") → a **balanced** branch to both audiences → **proof** it has substance → a tight
**why-us** → resolution. Audience weight is **50/50 B2B/B2C**: one shared core promise, then
equal billing.

## Global rules (apply to every section)
- **Accent:** mauve (`var(--accent)`) only for links, eyebrows, and the one signature visual.
  Primary CTA stays the Kaya espresso button. Ochre (`var(--highlight)`) only for a stat.
  Dominant canvas stays cream/espresso.
- **Colorblind:** never color-only meaning. Comparison "yes/no" uses icon + label, not red/green.
- **Motion:** one signature moment for the whole page (see §below); everything else micro or
  static. Easing per `motion.md` (ease-out enter/exit, no bounce). Honor `prefers-reduced-motion`.
- **Visuals:** abstracted concept-visuals, not dense product screenshots. At most **one**
  product-ish "window" on the page, used as proof.
- **Type:** Besley display for headlines; one idea per section; generous whitespace.
- **Process:** do one section at a time, screenshot after each, compare to the matching
  `.refs/*.png`, stop if a section regresses.

---

## Sections (final order — note the reorder)

| # | Section (component) | Decision | The one message | Layout / visual | Motion | Ref mechanic |
|---|---|---|---|---|---|---|
| 1 | **Hero** (`LandingHero`) | REWORK | "All your apps, unified into one AI Brain that does the work." Say it plainly. | Editorial headline (Besley) + 1 abstracted hero visual; both CTAs. Simplify the tabbed showcase — don't lead with dense UI. | Hero load: staggered reveal (≤1 signature, see below). | Antimetal / Linear hero: bold sentence + one abstract visual. |
| 2 | **Problem** (`Breaking`) | REORDER UP (was #3) + STRENGTHEN | "The way work happens is breaking — scattered apps, lost context, manual busywork." Make it *felt*. | Show the chaos viscerally (scattered fragments) resolving toward order. This is the emotional low. | **The page's signature moment lives here** (chaos → assembly). | Antimetal problem-immersion (NOT scrolljacking). |
| 3 | **The turn** (new, tiny) | ADD (one line) | "Souvenir is a new layer between your apps and your work." | A single centered line + thin rule. The pivot from problem to product. | None. | Antimetal "a new layer of the stack." |
| 4 | **Two ways** (`TwoWays`) | REBALANCE | "One Souvenir. For you, and for your team." | 50/50 — equal visual weight, parallel structure, both CTAs equally prominent. | Micro on hover only. | Linear prismatic identity (one core, two flavors). |
| 5 | **Proof / substance** (`FeatureSplit`, SlackWorkforceMap) | KEEP, lighten visual | "Your knowledge, deeply understood — then acted on." | The **one** allowed product-ish window as proof. Abstract if it reads dense. | Reveal on scroll (micro). | ElevenLabs/Attio proof section. |
| 6 | **How it works** (`Pillars`) | KEEP, de-dupe | "A team of Assistants, not a chatbot — they hand off work and run in the background." | Distinct archetype from #5 (don't repeat the split). | Staggered reveal (micro). | Linear feature rhythm. |
| 7 | **Why us** (`CategoryTable`) | KEEP, tighten | Only the few genuinely differentiating rows. | Comparison with icon+label (colorblind-safe), not a generic matrix. | None. | Restrained comparison (Vercel/Attio). |
| 8 | **Resolution** (`FinalCTABand`) | KEEP | "One Brain. A coordinated team of agents." | Dark band, single clear CTA. | Subtle. | Standard strong close. |

(Footer = shared, unchanged.)

## The one signature moment
Section 2 (Problem): scattered fragments **assemble** into order as the section enters —
embodying "the memory your work keeps." Staggered (~40ms), ease-out, no bounce, `transform`/
`opacity` only, plays once, full static fallback under `prefers-reduced-motion`. Tune the
durations/stagger with Leva, then bake the chosen values into marketing motion tokens and
remove Leva from the bundle. No other section gets a signature animation.

## Definition of done (the "win")
- [ ] Section order is 1→8 above; `Breaking` now precedes `TwoWays`; the one-line turn exists.
- [ ] Mauve appears only as the signature accent (links/eyebrows/the one visual); no coral
      remnants anywhere; CTA still the espresso button.
- [ ] No section uses color as the sole signal; comparison uses icon + label.
- [ ] Exactly one signature motion moment (Section 2); all motion has a reduced-motion path.
- [ ] At most one product-ish window on the page; other visuals are abstracted.
- [ ] No layout overflow at 390 / 768 / 1024 / 1440; no console errors; CWV green.
- [ ] No other route, Kaya product token, or dependency was changed.
- [ ] Screenshot of final Home posted to the PR; `design-audit` run and passed.

## How to run it (compound-engineering loop, from a Home worktree)
1. `/ce-brainstorm` → confirm/adjust this arc, write any section copy gaps.
2. `/ce-plan` → implementation plan scoped to the 8 sections above.
3. `/ce-work` → build section by section, screenshot-verify each.
4. Run the `design-audit` skill against the live Home page.
5. Motion pass (Section 2 signature + micro-interactions); Leva-tune; bake to tokens.
6. `/ce-code-review` → `/ce-compound` (write Home learnings back to the repo).
