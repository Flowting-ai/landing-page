import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";
import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";

const ROLES = [
  { name: "Scout", handle: "@scout", role: "Research briefs" },
  { name: "Drafter", handle: "@drafter", role: "Emails, proposals, updates" },
  { name: "Ops", handle: "@ops", role: "Background automation" },
  { name: "Analyst", handle: "@analyst", role: "Data, trends, forecasts" },
  { name: "Recruiter", handle: "@recruiter", role: "Sourcing, screening, scheduling" },
];

const PILLARS = [
  {
    n: "01",
    title: "A team of Assistants, not a chatbot.",
    body: "Each Assistant has a role. They think, decide, and hand work to each other. You manage them like a team.",
  },
  {
    n: "02",
    title: "Background automation, no babysitting.",
    body: "Multi-step work runs across your stack on a schedule and on events — briefings, reports, integrity checks — without prompts.",
  },
  {
    n: "04",
    title: "One chatspace. Every frontier model.",
    body: "Auto-routes prompts to the best model for quality and cost. Persistent memory across sessions. Pins, folders, and shared projects keep nothing scattered.",
  },
];

export default function PillarsSection() {
  return (
    <section id="product" className="py-[var(--section-y)]">
      <Container>
        <SectionHeading
          eyebrow="What Souvenir is"
          title="One Workspace. Every Task. No Switch, No Ask."
          lead="From the first idea to the final ask, Souvenir runs your company's work — start to finish, agent to task."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div
                className="relative h-full rounded-[var(--r-xl)] bg-surface border border-line p-7"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
                <span className="font-mono text-[var(--text-micro)] text-ink-subtle">{p.n}</span>
                <h3 className="font-display mt-3 text-[length:var(--text-h3)] text-ink">{p.title}</h3>
                <p className="mt-2 font-sans text-[var(--text-body)] leading-relaxed text-ink-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Pillar 03 — the multi-agent workforce, full-width feature */}
        <Reveal delay={0.1}>
          <div
            className="relative mt-5 rounded-[var(--r-2xl)] bg-surface-warm border border-line p-7 sm:p-10"
            style={{ boxShadow: "var(--shadow-inner)" }}
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="font-mono text-[var(--text-micro)] text-ink-subtle">03</span>
                <h3 className="font-display mt-3 max-w-[16ch] text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] text-ink">
                  A multi-agent workforce, not a chatbot.
                </h3>
                <p className="mt-3 max-w-[48ch] font-sans text-[var(--text-body)] leading-relaxed text-ink-muted">
                  Role-tuned AI Assistants that coordinate, hand off, and share memory.
                  Grow output without growing headcount. Ask Chief in Slack — it routes
                  to the right agent, pulls from your connectors, and drops the result
                  back into the thread.
                </p>
              </div>
              <div className="flex flex-col gap-2.5">
                {ROLES.map((r) => (
                  <div
                    key={r.name}
                    className="flex items-center gap-3 rounded-[var(--r-md)] bg-surface border border-line px-4 py-3"
                    style={{ boxShadow: "var(--shadow-sm)" }}
                  >
                    <Avatar name={r.name} size="sm" color="var(--neutral-900)" />
                    <span className="font-sans text-[var(--text-small)] font-medium text-ink">{r.name}</span>
                    <span className="hidden font-sans text-[var(--text-micro)] text-ink-muted sm:inline">{r.role}</span>
                    <span className="ml-auto"><Badge label={r.handle} color="Neutral" /></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
