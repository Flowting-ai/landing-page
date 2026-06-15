import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";

/* ───────────────── Reassurance row ───────────────── */
const REASSURE = [
  { icon: "▭", title: "No card required", body: "Start with 1,000 free credits. Add a card only when you're ready." },
  { icon: "+", title: "Top-up anytime", body: "Need more this month? Buy a one-time top-up pack." },
  { icon: "↗", title: "Cancel anytime", body: "Monthly billing, no lock-in. Read-only access stays for 30 days." },
  { icon: "↻", title: "Credits roll over", body: "Unused credits this month? They carry into the next cycle." },
];

export function ReassuranceRow() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REASSURE.map((r, i) => (
            <Reveal key={r.title} delay={(i % 4) * 0.06}>
              <div>
                <span className="font-display text-[22px] text-ink">{r.icon}</span>
                <h3 className="font-display mt-3 text-[length:var(--text-h4,1.25rem)] text-ink">{r.title}</h3>
                <p className="mt-1.5 font-sans text-[var(--text-small)] leading-relaxed text-ink-muted">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───────────────── Top-up packs ───────────────── */
const PACKS = [
  { badge: "Quick boost", credits: "5,000 credits", price: "$10" },
  { badge: "Save 7%", credits: "15,000 credits", price: "$28" },
  { badge: "Save 10%", credits: "50,000 credits", price: "$90" },
  { badge: "Best value", credits: "200,000 credits", price: "$340" },
];

export function TopUps() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Top-up packs"
          title="Need more this month? Buy a top-up."
          lead="One-time credit packs that work on any plan. Use them when usage spikes — no need to upgrade your tier."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PACKS.map((p, i) => (
            <Reveal key={p.credits} delay={(i % 4) * 0.06}>
              <div className="relative h-full rounded-[var(--r-xl)] border border-line bg-surface p-5" style={{ boxShadow: "var(--shadow-sm)" }}>
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
                <span className="inline-flex items-center rounded-[var(--r-pill)] border border-line bg-bg-subtle px-2.5 py-1 font-mono text-[var(--text-micro)] text-ink-subtle">{p.badge}</span>
                <p className="mt-4 font-display text-[length:var(--text-h3)] text-ink">{p.credits}</p>
                <p className="mt-1 font-sans text-[var(--text-body)] text-ink-muted">{p.price}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───────────────── Pricing FAQ ───────────────── */
const FAQ = [
  { q: "How do the 1,000 free credits work?", a: "Every new workspace gets 1,000 free credits on signup — no credit card required. Use them across every Souvenir feature (chats, AI Assistants, Brain runs) to validate the product before paying. This is a one-time signup gift; paid credits, however, do roll over from month to month." },
  { q: "Do my credits roll over?", a: "Yes. If you don't use all your credits in a cycle, they carry over to the next month — so a slow month doesn't waste anything. Credits sit in your workspace until you use them. Free signup credits (1,000) are one-time and do not roll over." },
  { q: "How does the yearly discount work?", a: "Pay annually and save 25% off every plan. Credits refresh monthly within the annual commitment. Cancel at any annual renewal." },
  { q: "What are top-up packs?", a: "One-time credit packs that work on any plan — Individual or Team. Useful when usage spikes one month and you don't want to upgrade tiers. They stack on top of your monthly credits, valid for 6 months from purchase." },
  { q: "Is the Slack Manager available on Individual plans?", a: "No. The Souvenir Slack Manager — the bot that lives in your Slack or Microsoft Teams channel — is a Team plan exclusive. Upgrade to a Team workspace anytime to add it." },
  { q: "Why no per-seat pricing for teams?", a: "Per-seat pricing punishes teams for inviting members who use Souvenir occasionally. Credits scale with actual usage, not headcount. Add anyone on your team without worrying about cost." },
  { q: "Which AI models are included?", a: "OpenAI, Anthropic, Google Gemini, and Mistral — the four frontier model labs. Souvenir auto-routes to the right one per task, or you can pick manually. All models work on every plan." },
  { q: "When does Enterprise make sense?", a: "Above ~$2,000/mo in usage, or when you need SSO, DPA, a custom SLA, white-glove onboarding, or volume discounts. Enterprise customers get a dedicated success manager and monthly strategy reviews." },
];

export function PricingFAQ() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <SectionHeading eyebrow="Pricing FAQ" title="Things people ask before signing up." />
        <div className="mx-auto mt-12 max-w-3xl">
          {FAQ.map((f, i) => (
            <Reveal key={f.q} delay={(i % 4) * 0.04}>
              <div className="border-t border-line py-5">
                <h3 className="font-display text-[length:var(--text-h4,1.25rem)] text-ink">{f.q}</h3>
                <p className="mt-2 font-sans text-[var(--text-body)] leading-relaxed text-ink-muted">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
