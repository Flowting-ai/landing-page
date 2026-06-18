# Home + Pricing Completion — Autonomous Loop

> A single, self-contained execution loop to finish the Home page and the Pricing slider,
> max-ing out the Kaya Design System (KDS) + real iconography. Designed to run **without
> per-step approval** — each section has its own verify gate; the loop only stops on a hard
> failure or a blocked dependency. Authored 2026-06-18.

## Operating rules for this loop (autonomous)
- **No approval gates between sections.** Build → self-verify → next. (Chai pre-authorized.)
- **Max KDS reuse.** Prefer real components: `MessageBubble`, `Avatar`, `Chip`, `Button`,
  `Sidebar`/`Pinboard` atoms, `ConnectorIcon`, `LlmIcon`, `SectionVisual`, `NodeMap`,
  `Visual`, `Comparison`, `FeatureSplit`, `TriSection`, `FinalCTABand`. Build new only when
  none fit. Tokens only — no magic numbers, no ad-hoc hex.
- **Icons:** ONLY `@strange-huge/icons` via `size`. Valid `ConnectorIcon`: slack, gmail,
  notion, stripe, github, linear, hubspot, figma. Valid `LlmIcon` (`variant="color"`):
  Claude, OpenAI, Gemini, Anthropic, Mistral(verify). Souvenir mark = the nav brand mark
  (reuse, don't redraw). Never invent an icon id (renders blank).
- **Motion doctrine:** hero owns the one signature; Breaking has a sanctioned continuous
  drift; everything else = static or ONE quiet entrance reveal. Reduced-motion complete.
- **Per-section verify (the gate):** `node scripts/shot.mjs /` (+ section shot); no overflow
  at 390/768/1024/1440; no NEW console errors (hero's Sidebar `d=undefined` + Button `useId`
  are pre-existing — ignore); reduced-motion renders full static.
- **Wrap any MessageBubble embed in `<ClientOnly>`** (hydration). Mount-gate recharts.

## Phase 0 — Foundations (do first, once)
1. **Icon audit.** Grep `@strange-huge/icons` exports + `~/may-day` for: a Souvenir/brain
   mark, persona/agent/role icons, and `LlmIcon` valid ids (confirm Mistral). Record the
   canonical set in this file. If a needed mark is missing, use Avatar-monogram fallback and
   note it — never invent an id.
2. **Spacing/scale pass.** Confirm section rhythm tokens (`--section-y`), card radius
   (`--r-*`), shadows (`--shadow-*`). All new work uses these.

## Phase 1 — Home sections (the loop, in page order)
Run each as: read current → apply changes (KDS + icons + responsive) → verify gate → next.

| # | Section (file) | Goal / min-max | KDS + icons |
|---|---|---|---|
| 1 | **Turn** (`Turn.tsx`) — img 20 | Make the framed statement **much wider** (near content-width, not a narrow box); balance the in/out arrows; tighten type rhythm. Keep the one-idea calm. | Reuse `Container` width; tokenized border/arrows. Static. |
| 2 | **TwoWays** (`TwoWays.tsx`) — img 21 | **Less text-heavy**; add real **icons** to each side; resolve the CTA treatment (test: keep cards but lighten copy + iconography, OR drop card chrome for a cleaner 50/50). Equal visual weight L/R. | `Button` (espresso CTA), `ConnectorIcon`/role icons, check-row component; `FeatureSplit`/`TriSection` if it fits. |
| 3 | **SlackBrainMap** (`SlackBrainMap.tsx`) — img 22 | Implement the **Souvenir mark** (not bare "S"), update **persona/agent icons**, fix iconography + **spacing**. | Souvenir mark + `ConnectorIcon id="slack"`; `Avatar` for people; tokenized gaps. |
| 4 | **Pillars / PersonaRoster** (`Pillars.tsx`, `PersonaRoster.tsx`) — img 23 | Use real **`MessageBubble`** + DS components; bring **chatspace iconography**; tighten the agent roster (Scout/Drafter/Ops/Analyst/Recruiter) + the "Ask Chief in Slack" note. | `MessageBubble` (in `ClientOnly`), `Avatar`, `Chip`, `ConnectorIcon`, `LlmIcon`. |
| 5 | **Chatspace pillar** (Pillar 04) — img 24 | Replace the flat OpenAI/Anthropic/Gemini/Mistral list with the **Model Logo Playground concept**: frontier-model logos arranged around a center (gold/ink hub), one auto-routed highlight. Customize to fit the column; tasteful, ONE quiet reveal (no heavy WebGL). | `LlmIcon` (color) for each model; tokenized hub; Framer one-time reveal. |
| 6 | **BrainProof** (`BrainProof.tsx`) | Polish + responsive; ensure real product surfaces/icons, no flat placeholders. | KDS atoms; `ConnectorIcon`/`LlmIcon`. |
| 7 | **CategoryTable** (`CategoryTable.tsx`) | Polish + responsive (`overflow-x-auto` wrapper, `min-w-0`); add a "context architecture" row if it strengthens the comparison; iconography on row labels. | `Comparison`; tokenized table. |
| 8 | **FinalCTABand** (`sections/FinalCTABand.tsx`) | Verify espresso CTA + connector band uses real `ConnectorIcon` ids only; responsive. | `FinalCTABand`, `ConnectorIcon`. |
| — | Relief, Breaking, Hero | DONE — do not touch. |

## Phase 2 — Pricing page
1. **Slider (BLOCKED on Figma).** Implement the slider from Figma node `4676-16615`
   (pricing node `4676-16711`). **Dependency: reconnect the claude.ai Figma MCP** to read the
   exact spec (track/handle/labels/credits or seats mapping, tokens). Until then: build a
   tokenized KDS slider (shadcn/Radix `Slider` + `forwardRef`, ink focus ring, press
   `scale(0.97)`) wired to the credits model in `PricingPlansSection.tsx`, and refine to the
   Figma once readable. Live in `src/components/PricingPage/PricingPlans/`.
2. **Exact iconography + logos** on pricing (plan rows, connector band, model logos) — same
   `ConnectorIcon`/`LlmIcon` discipline as Home.
3. Verify gate (same as Phase 1) on `/pricing`.

## Phase 3 — Global pass + close
- Responsive sweep every touched section at 390/768/1024/1440 (no overflow).
- Icon + spacing consistency audit across Home + Pricing.
- `design-audit` skill against the philosophy (Home + Pricing).
- Update each touched section's `docs/visuals/<section>.md` handoff + one consolidated
  `LEARNINGS.md` entry.

## Dependencies / blockers
- **Figma MCP** must be reconnected for the exact pricing slider + any Figma-spec'd icons
  (node 4676-16615 / 4676-16711). Loop proceeds on everything else; slider ships a
  token-correct KDS version now, Figma-matched once reconnected.
- **Model Logo Playground** (`~/Downloads/Model Logo Playground.html`) is a bundled artifact
  (base64) — used as *visual reference* (logos orbiting a gold/ink hub), reimplemented in-repo
  with `LlmIcon` + tokens, not extracted.
