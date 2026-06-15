# Souvenir Website — STRATEGY (single source of truth)

> This is the canonical brief for the **design-refinement** phase. It merges the cloud planning
> doc (`docs/souvenir-website-plan.md`) and the earlier local `DESIGN-REFINEMENT-PLAN.md`, and
> records the decisions that are now **locked**. Companion docs: `docs/souvenir-learnings.md`
> (motion + taste + design vocabulary), `docs/KAYA-CLAUDE-RULES.md` (product DS ruleset to
> inherit), and the repo `ONBOARDING.md` / `SITE-MAP.md` / `WEBSITE-SYSTEMS.md`.
> The `souvenir-taste` skill (`.claude/skills/souvenir-taste/`) is the always-on enforcement layer.

## 0. Locked decisions (Jun 15)
- **Accent → dusty mauve.** Warm cream→espresso **monochrome is the 90% canvas**. Primary CTA
  stays the existing Kaya espresso/dark button (unchanged). **Signature accent = dusty mauve** from
  Kaya's purple ramp (`--accent: var(--purple-600)` ≈ `#674F68`; hover `purple-700`; soft
  `purple-50`) for links, eyebrows, and the one signature visual per page. **Ochre** (`yellow-600`)
  = warm highlight for stats/positive hints only. Colorblind-safe (mauve = blue-purple axis, ochre
  = yellow axis). **Delete all coral remnants** (see §4).
  ✅ **LOCKED (Chai signed off Jun 15) — mauve, with guardrails.** Used **decoratively only, never a
  status signal** (respects the colorblind rule + the product's choice to not let color carry meaning).
  Note: `src/styles/tokens/semantic.css` shows the product deliberately dropped the *saturated* brand
  purple — our mauve is the *muted* `#674F68` at signature dose on a 90% warm-neutral canvas, so it
  reads as seasoning, not identity. **Courtesy heads-up to Colin/brand recommended (non-blocking).**
  Fallback if brand objects = ochre signature (one-token swap).
- **Positioning → 50/50, one unified core story.** Equal-weight branch to "for you" / "for your
  team" (Linear model: consumer-grade brand, monetize B2B). Home stops being a lopsided router.
- **First page for the loop → Home.**
- **Marketing design-system home → Storybook (LOCKED Jun 15).** Docs-first, token-driven,
  theme-switchable. CSS-variable tokens are the single source of truth; Storybook reads from them and
  the site consumes the same tokens (no in-app `/design-system` route). Scope Storybook to the
  design-system layer (tokens, primitives, ONE example per archetype) — NOT full production pages;
  full-page verification stays on the `scripts/shot.mjs` + `design-audit` loop. Rationale: a durable,
  shareable, brand-facing reference (color + intention, type, spacing) that outlives any page and
  feeds marketing-asset/branding work; theme toggle previews the mauve→ochre one-token swap live.
  Separate instance in this repo; folding into KDS's Storybook (:6006) is a deliberate future option.

## 1. North-star philosophy (the spine)
**Souvenir is the memory your work keeps.** Make the intangible orchestration product *feel* like a
warm, tangible, kept object — with such craft that the packaging is the proof. Three pillars on
every section:
1. **Tell me what it is** — clarity over clever; lead with what it plainly is.
2. **Make me feel it** — Kaya tactility + immerse in the problem before the relief.
3. **Keep it unmistakably ours** — kill the generic SaaS rhythm; craft is the moat.

### Intention → mechanism
| Intention | Mechanism |
|---|---|
| A real, kept thing | Embossed surfaces, warm shadows, squircle, press `scale(0.97)`. Real weight. |
| Memories accrue | Content *assembles* (staggered reveals as if placed), not just fades; lean on the Pin/Pinboard keepsake motif. |
| Nostalgia is unhurried | Marketing motion slower & more deliberate than product UI; **no bounce**. |
| Make intangible tangible | ONE abstracted concept-visual per section, NOT a dense product screenshot. |
| Immerse, don't explain | Problem-first sections; feel the chaos before the calm. |
| A memory is precious | Restraint: one idea/section, generous whitespace, let Besley carry emotion. |
| Copy is a design job | Spacing = pacing; line breaks = pauses; tabular nums; no widows. |

### Permanent constraints
- **Colorblind (red-green):** meaning never by color alone — shape + label + position; accent is
  decorative/CTA, never a status signal; focus ring is ink.
- **Brand coherence:** the marketing site **extends** Kaya tokens, never forks them.
- **Evoke, don't costume:** nostalgia via warmth/tactility/pacing — no sepia, Polaroid frames, or
  retro clip-art (kitsch risk). Heavy craft (layered shadows/grain) is hero-only (LCP/perf risk).

## 2. Design system — extend Kaya, add a marketing layer
Kaya already provides the warm/tactile identity, 3-tier tokens (primitives→aliases→semantic),
shadcn 4 + Radix base, Besley + Geist, no-bounce motion, AI-readiness. The marketing layer **adds**:
display/editorial type scale above 40px (fluid `clamp` toward ~72–120px hero), section/layout
primitives, expressive (not functional) color usage, marketing motion tokens + wider budget, and a
**deliberately varied** catalogue of section archetypes. **Inherit the Kaya `CLAUDE.md` rules**
(`docs/KAYA-CLAUDE-RULES.md`): icons only from `@strange-huge/icons` via the `size` prop (never
inline SVG), shadcn-based components with `forwardRef`/`asChild`, and the in-place text-swap pattern
(note: that pattern uses a spring — the *only* sanctioned bounce, for that micro-interaction).
**Cult UI / Magic UI = recipe book, not ingredient** — learn the mechanic, rebuild in Kaya tokens.

## 3. Storytelling principles
Find the metaphor (memory/keepsake) · problem immersion over description (Antimetal) · one idea +
one focal visual per section · copy as a design job · unique > templated · craft is the packaging ·
taste over A/B theatre.

## 4. Current build — assessment & code-grounded fixes
**Strong:** 15 routes, token-driven, Kaya-extended, verbatim Figma copy logged, colorblind
discipline, restraint principle, GEO roadmap. **Storytelling gaps:** same hero→stat-trio→
feature-splits→comparison→CTA rhythm everywhere; solution-first not problem-first; literal product
visuals; Home splits focus; per-page maps lack a narrative arc.
**Code-grounded debt (verified in repo Jun 15):**
- **Coral drift** → fix together with the mauve switch. `.glow-coral-dark` is defined in
  `src/app/globals.css` AND used in **4 files**: `src/components/sections/FinalCTABand.tsx`,
  `src/components/AIAgentsPage/AgentsFinalCTA.tsx`, `src/components/HomePage/FinalCTA/FinalCTASection.tsx`
  (home-v1), `src/app/v/b/page.tsx`. Plus the globals.css line-4 comment ("brand coral accent") and
  accent vars currently `neutral-900`; and `DESIGN-FOUNDATIONS.md` still documents accent as coral
  `#E0613A` (now banner-flagged). Clean ALL of these — don't stop at FinalCTABand.
- **`.refs/` is in the repo** (Linear, ElevenLabs, Vercel, Attio, Clerk, Cursor, Raycast, Resend,
  Railway, Perplexity, Framer, Anthropic) → seed the `design-audit` skill from it.
- **`src/app/v/{a,b,c}` experiment routes** exist (outside `(site)`) → pick a direction / remove.
- **Dead pre-`(site)` component dirs** (`Common, AboutPage, FeaturesPage, GetStartedPage, variants`,
  `HomePage` once `/home-v1` retired) → delete.

## 5. References
Antimetal (problem-immersion gold standard; **don't** copy its scrolljacking) · 5 Figma nodes
(export as PNG into `.refs/` — no read-from-Figma tool) · animations.dev / Emil Kowalski (motion
bible → `docs/souvenir-learnings.md`) · `.refs/` peer set. Rule: study the mechanic, rebuild in Kaya
tokens. Annotated screenshots + written teardown, never "make it like this."

## 6. Motion — see `docs/souvenir-learnings.md` §1
Gate (purpose/frequency/speed) · easing lookup (ease-out enter/exit, ease-in-out morph, avoid
ease-in, linear only marquee) · UI <300ms / hover ~150ms / press `scale(0.97)` · one signature
moment per page, layout+type locked first · always `prefers-reduced-motion` · animate
transform/opacity only · no heavy Lottie/WebGL-by-default.

## 7. Claude Code operating model
Build here, **short scoped sessions, not one long chat** — durable context lives in repo files +
skills. Adopt **compound-engineering** (`EveryInc/compound-engineering-plugin`): `/ce-strategy` →
per page `/ce-brainstorm` → `/ce-plan` → `/ce-work` (worktree) → `/ce-code-review` → `/ce-compound`.
Skills: `souvenir-taste` (always-on; built — see `.claude/skills/`), `motion-and-easing`
(case-by-case), `design-audit` sub-agent (seed with `.refs/` + Antimetal + animations.dev). One page
per session + screenshot-verify loop. **Leva** = dev-only animation tuning, then bake values to
tokens and drop from bundle.

## 8. Phased plan
- **A — Foundation:** docs in place ✓ → install compound-engineering + `/ce-strategy` → marketing
  token layer incl. the mauve accent + delete coral → build skills → audit/clean dead dirs + `v/`.
- **B — IA + story spine:** lock positioning (done: 50/50) + Home story → settle IA (add
  Security/Trust, Changelog, Docs, "vs", real Blog, real About; decide `/about` vs `/contact`) →
  write the memory/keepsake metaphor spine every page inherits.
- **C — Per-page loop (Home first):** story arc + emotional beat per section → section briefs
  (message, hierarchy, abstracted concept-visual, motion intent, borrowed mechanic) → build from
  primitives → `design-audit` + responsive/console/CWV → one signature motion moment (tune w/ Leva)
  → `/ce-compound`.
- **D — Systems & launch:** SEO/GEO (metadata, sitemap/robots, OG, JSON-LD) → CMS (Keystatic +
  Fumadocs) → analytics (PostHog + Vercel + Cal.com) → perf (CWV green) + wire Contact form → Vercel.

## 9. Open items (remaining)
Figma reference PNGs into `.refs/` · IA additions (Security/Changelog/Docs/"vs"/Blog/About) ·
`/about` vs `/contact` · verdict on `v/{a,b,c}` · (optional) fold remaining Emil posts into a
`motion.md`.
