import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const STATS = [
  { value: "71%", label: "of employees use AI tools their employer doesn't know about." },
  { value: "2.5×", label: "performance gap between teams using AI as infrastructure vs as a tab." },
  { value: "8 hrs", label: "per week per knowledge worker lost to context switching." },
];

export default function StatsSection() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <Reveal>
          <div
            className="relative rounded-[var(--r-2xl)] bg-surface-warm border border-line px-8 py-12 sm:px-14 sm:py-16"
            style={{ boxShadow: "var(--shadow-inner)" }}
          >
            <p className="text-center font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.14em] text-ink-subtle">
              Why this matters now
            </p>
            <h2 className="mt-4 text-center font-display text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] text-ink">
              The way work happens is breaking.
            </h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
              {STATS.map((s, i) => (
                <Reveal key={s.value} delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center">
                    <span className="font-display text-[clamp(2.75rem,2rem+3vw,4rem)] leading-none text-ink">
                      {s.value}
                    </span>
                    <span className="mt-3 max-w-[24ch] font-sans text-[var(--text-small)] leading-relaxed text-ink-muted">
                      {s.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
