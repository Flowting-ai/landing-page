import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";

const MODES = [
  {
    icon: "▶",
    title: "Run once",
    body: "One-off task. You hit run, Brain executes, hands you the output, done. Save it as a draft Brain for next time — or discard it.",
    tasks: [
      "Research these 12 prospects, write a one-pager each",
      "Draft the launch announcement for our new product",
      "Audit my last 30 emails, summarize what's pending",
    ],
  },
  {
    icon: "↻",
    title: "Schedule recurring",
    body: "Same task, repeated forever. Pick a schedule or an event trigger. Brain wakes up on its own, runs the chain, delivers the output where you want it.",
    tasks: [
      "Every Monday at 9am — weekly business briefing",
      "Every quarter end — investor update draft",
      "When inventory drops below 14 days — pause spend",
    ],
  },
];

export default function RunModes() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <SectionHeading
          eyebrow="Two ways to deploy"
          title="Run it once. Or run it forever."
          lead="Every Brain saves with one click — and runs the way you want. One-off jobs and recurring operational tasks live in the same library."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {MODES.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.1}>
              <div className="relative h-full rounded-[var(--r-2xl)] border border-line bg-surface p-6 sm:p-8" style={{ boxShadow: "var(--shadow-sm)" }}>
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-2xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
                <span className="flex h-10 w-10 items-center justify-center rounded-[var(--r-md)] bg-ink font-sans text-[16px] text-dark-ink">{m.icon}</span>
                <h3 className="font-display mt-4 text-[length:var(--text-h3)] text-ink">{m.title}</h3>
                <p className="mt-2 max-w-[44ch] font-sans text-[var(--text-body)] leading-relaxed text-ink-muted">{m.body}</p>
                <div className="mt-6 rounded-[var(--r-lg)] border border-line bg-bg-subtle p-4" style={{ boxShadow: "var(--shadow-inner)" }}>
                  <span className="font-mono text-[var(--text-micro)] uppercase tracking-[0.1em] text-ink-subtle">For tasks like</span>
                  <ul className="mt-2.5 flex flex-col gap-2">
                    {m.tasks.map((t) => (
                      <li key={t} className="flex items-start gap-2 font-sans text-[var(--text-small)] text-ink-secondary">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-subtle" />{t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
