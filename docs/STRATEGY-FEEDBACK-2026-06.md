# Website Strategy Feedback — June 2026 (raw, preserved)

> Chai's feedback + a cold-B2B-traffic audit, captured verbatim for the strategic discussion.
> Status: DISCUSSION ONLY — no building until the 50/50-vs-business-first decision is made
> (see docs/SESSION-HANDOFF.md). This is the source material.

## Chai's 5 points (in his words, lightly tidied)
1. **Hero image conveys nothing.** No testimonials / security-compliance certs. A first-time user sees
   basic things and gets nothing. Show an actual agent UI — how the agent works, how you use it in the
   Brain. Likely **two short screen-recorded video clips** of the product working.
2. **Home talks to business AND customers at once.** Landing page should talk **business only**; make a
   **separate page for customers**. Lead with the value proposition / what the product does.
3. **New users can't tell what the product is.** Make it dead simple — "this product is about X, I use it
   to solve Y." Add an **analogy** ("Spotify for ___ / Spotify for agents") to anchor the mental model.
4. **Play on the agent story.** "Create an agent in 30 seconds, deploy it anywhere, it works like a
   coworker." Merge agent teams; the **agent manager (Brain)** handles the teams. Outcome framing
   businesses relate to: reduce time, increase efficiency, save cost.
5. **Storytelling / brand language.** Human equivalents, pop-culture references, the brand voice. Is there
   a transformation story for the business buyer (10k→2x, 100k→2x)? Make it gimmicky — sell the dream.

## Audit: Optimizing for Cold B2B Ad Traffic (key points preserved)

**TL;DR — the biggest problem is INCOHERENCE, not the hero.** Souvenir runs two site generations at once:
a strong modern agent-led home + B2B/B2C/product pages, bolted onto an older "every AI model, one
workspace" Features/Pricing/About/Contact set that uses banned aggregator language and **displays banned
model logos (DeepSeek, Qwen, Grok, Meta) on the pricing page.** A cold B2B buyer who clicks an ad and
explores hits a weaker, off-message product within two clicks. Highest-impact move: a **dedicated B2B ad
landing page** (bypass the fork + homepage) — message-matched headline, problem stats above the fold,
security/governance trust strip, 30s product demo, one "Book a Demo" CTA. Landing pages convert ~4–5×
better than homepages for paid traffic (Lovable 2026; median LP ~6.6% vs 2–3%); yet 44% of B2B still send
paid traffic to a generic homepage (Involve.me 2026). Cheapest lever before scaling ad spend.

**What's live now (confirmed):**
- Home H1 "The workspace that knows your context and runs the work." Subhead "…for individuals and teams."
  CTA single "Book a Demo" → raw Google Calendar link. OG title "Souvenir — Your company's AI brain, in Slack."
- The locked headline "One Centralized Brain. A Coordinated Team of Agents." is NOT on the site.
- The fork ("Pick your path / Two ways") is well-built (B2C → /individuals, B2B → /solutions/company-brain).
- /solutions/company-brain is genuinely good: cited stats (McKinsey 71% shadow AI; Asana 8hrs/wk lost; BCG
  2.5× perf gap), Slack-manager explanation, governance language (admin/audit/approval gates).
- Pricing/Features/About/Contact are OLDER generation, off-brief: "Your models can change…", "One workspace.
  Every AI model.", "memory layer… we compete on continuity." Banned models + aggregator framing live.

**Critical defects for a cold B2B visitor:** banned language/models live (brand-governance + trust red
flag, esp. Chinese models vs the data-governance story); zero trust signals above the fold anywhere cold
traffic lands; pricing contradicts the locked credits-only model (differentiates by feature, hides credits,
no team/seat tier, every CTA → contact form); demo = bare Google Cal link (no qualify, no "what to expect",
no social proof); placeholders (#discord), inconsistent connector counts (250/900/243), footer Contact→/about,
public "an AI helped write this site" line; two navbars / two contradictory messages.

**Benchmarks (2026):** 5-second test governs (what / who-for / next step); best B2B H1 <~8 words / 44 chars,
outcome-led. Single-CTA pages convert 13.5% vs 10.5% for 5+ (Unbounce, 18,639 pages). Speed = conversion:
53% mobile abandon >3s; 1s load ~3.05% vs 0.6% at 5s (Portent); Google "good" LCP <2.5s, only ~67% of sites
hit it (CrUX Jun 2025). Credit pricing only works if 1 credit maps to 1 recognizable unit of value.
Data-leak wedge is real + expensive: IBM 2025 shadow AI = 20% of breaches, +$670k each; Cisco 2025 46% had
GenAI internal leaks.

**Audit recommendations, ranked:**
- *Quick wins:* (1) purge banned models (DeepSeek/Qwen/Grok/Meta) + "every AI model/aggregator" language →
  approved stack (OpenAI, Anthropic, Google Gemini, Mistral). (2) Fix placeholders + inconsistencies
  (#discord, connector counts, footer Contact, drop "AI helped write this site" on B2B pages). (3) De-risk
  demo CTA: 3-field qualify (work email, company, team size) + "what to expect"; keep single CTA. (4) Trust
  strip above fold (even pre-SOC2): "never train on your data", "audit-logged & permission-aware", "OAuth, no
  middleware". (5) Align hero to positioning (ship the locked headline + B2B outcome subhead + named buyer).
- *Bigger bets:* (6) Dedicated B2B ad page (no nav/fork, single CTA, message-matched, stats up, Slack demo,
  trust strip, 30s video, short form) — one per campaign intent. (7) Unify legacy pages onto one generation.
  (8) Rebuild pricing to locked credits model + demo-led Teams tier + credit→value explanation. (9) Real
  social proof when first paying teams exist (3–5 logos + 1 quantified quote). (10) Security/governance page
  + SOC 2 (or "in progress") + "we don't train on your data" + DPA.

**Caveats:** home content below "Pillar 04" couldn't be fully captured (large inline SVGs truncate
extraction); couldn't measure live CWV (inferred from heavy inline-SVG HTML — verify with PageSpeed);
pricing analysis is live-page vs brief (may just be stale); benchmark figures are 2026 industry
medians/case-studies, not Souvenir's own analytics (Mixpanel = source of truth for real rates).

## My (Claude's) strategic read — given to Chai, awaiting his response
See docs/SESSION-HANDOFF.md "OPEN DISCUSSION" for the 4 flags: (1) coherence is the real fire + cheapest;
(2) "Spotify" is the wrong analogy (= old banned aggregator story); (3) hero loop shows feel, feedback wants
proof-it-works → likely both; (4) trust signals must stay honest. Gating decision: keep 50/50 home vs
business-first reversal — my proposed reconciliation = lighter business-led fork for organic + dedicated
stripped B2B page for paid.
