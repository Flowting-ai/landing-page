import { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export type FeatureCard = { eyebrow: string; title: string; body: string; visual: ReactNode };

/** Two feature cards side by side, each with copy + a product visual. */
export default function FeaturePair({ cards }: { cards: [FeatureCard, FeatureCard] }) {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="relative flex h-full flex-col rounded-[var(--r-2xl)] border border-line bg-surface p-6 sm:p-8" style={{ boxShadow: "var(--shadow-sm)" }}>
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-2xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
                <span className="font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.12em] text-ink-subtle">{c.eyebrow}</span>
                <h3 className="font-display mt-2 max-w-[18ch] text-[length:var(--text-h3)] text-ink">{c.title}</h3>
                <p className="mt-2 max-w-[44ch] font-sans text-[var(--text-body)] leading-relaxed text-ink-muted">{c.body}</p>
                <div className="mt-6">{c.visual}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
