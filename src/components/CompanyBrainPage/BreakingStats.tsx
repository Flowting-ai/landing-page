import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";

const STATS = [
  { value: "71", unit: "%", body: "of employees use AI tools their employer doesn't know about.", src: "Source · McKinsey State of AI 2025." },
  { value: "8", unit: "hrs", body: "lost per week not to context switching, but to disconnected digital apps.", src: "Source · Asana Anatomy of Work Index 2024." },
  { value: "2.5", unit: "×", body: "performance gap between teams using AI as infrastructure versus teams using it as a tab.", src: "Source · BCG AI at Scale 2025." },
];

export default function BreakingStats() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <SectionHeading eyebrow="Why this matters now" title="The way work happens is breaking." />
        <Reveal delay={0.12}>
          <div className="relative mt-12 grid gap-10 rounded-[var(--r-2xl)] border border-line bg-surface p-8 sm:grid-cols-3 sm:gap-8 sm:p-12" style={{ boxShadow: "var(--shadow-sm)" }}>
            <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-2xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
            {STATS.map((s) => (
              <div key={s.body} className="flex flex-col items-center text-center">
                <span className="font-display text-[clamp(3rem,2.2rem+3.4vw,4.75rem)] leading-none text-ink">
                  {s.value}<span className="text-[0.5em] text-ink-muted">{s.unit}</span>
                </span>
                <span className="mt-4 max-w-[26ch] font-sans text-[var(--text-body)] leading-relaxed text-ink-secondary">{s.body}</span>
                <span className="mt-4 font-mono text-[var(--text-micro)] text-ink-subtle">{s.src}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
