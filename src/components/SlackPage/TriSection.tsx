import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";

export type TriCard = { kicker: string; title: string; body: string; mono?: boolean };

export default function TriSection({
  eyebrow,
  title,
  lead,
  cards,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  cards: TriCard[];
}) {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="relative h-full rounded-[var(--r-xl)] border border-line bg-surface p-6" style={{ boxShadow: "var(--shadow-sm)" }}>
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
                <span className="font-mono text-[var(--text-micro)] uppercase tracking-[0.1em] text-ink-subtle">{c.kicker}</span>
                <h3 className={(c.mono ? "font-mono text-[length:var(--text-h3)]" : "font-display text-[length:var(--text-h3)]") + " mt-2 text-ink"}>{c.title}</h3>
                <p className="mt-2 font-sans text-[var(--text-body)] leading-relaxed text-ink-muted">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
