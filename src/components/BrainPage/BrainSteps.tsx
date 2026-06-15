import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";

const STEPS = [
  {
    n: "01",
    kicker: "Create",
    title: "Spawn a Brain from a message",
    body: "Describe the job in a channel. Souvenir builds the plan, shows the steps, awaits your approval — all without leaving Slack.",
    card: ['"Brain: weekly competitor scan, post to #market"', "Plan built · 3 steps · schedule 4 PM", "Save & schedule? [Approve]"],
  },
  {
    n: "02",
    kicker: "Run",
    title: "Trigger any Brain on demand",
    body: "Need it now, not Friday? Type /brain run in any channel. Pick from your library. Brain executes immediately.",
    card: ["/brain run · weekly competitor scan", "Running on demand → 3 steps", "Results in ~2 min"],
  },
  {
    n: "03",
    kicker: "Receive",
    title: "Results land where you work",
    body: "Whether scheduled or on-demand, Brain posts back to Slack with the output, a summary, and one-tap approval buttons for anything that needs a sign-off.",
    card: ["Done · competitor scan complete", "Summary + 3 sources attached", "Approve send to #market? [Yes]"],
  },
];

export default function BrainSteps() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <SectionHeading
          eyebrow="Brain × Slack"
          title="Build it in Slack. Run it from Slack. Get results back in Slack."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative flex h-full flex-col rounded-[var(--r-xl)] border border-line bg-surface p-6" style={{ boxShadow: "var(--shadow-sm)" }}>
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
                <span className="font-mono text-[var(--text-micro)] text-ink-subtle">{s.n} · {s.kicker}</span>
                <h3 className="font-display mt-2 text-[length:var(--text-h3)] text-ink">{s.title}</h3>
                <p className="mt-2 font-sans text-[var(--text-body)] leading-relaxed text-ink-muted">{s.body}</p>
                <div className="mt-6 flex flex-col gap-1.5 rounded-[var(--r-lg)] bg-dark-bg p-4">
                  {s.card.map((line, j) => (
                    <span key={j} className={"font-sans text-[var(--text-micro)] " + (j === 0 ? "text-dark-ink" : "text-dark-ink-muted")}>{line}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-8 text-center font-sans text-[var(--text-small)] text-ink-subtle">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-ink align-middle" />
            The Slack Manager directs · Brain orchestrates · Assistants execute.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
