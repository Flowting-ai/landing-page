import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";
import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";
import PersonaRoster from "@/components/LandingPage/PersonaRoster";
import AutomationScatter from "@/components/LandingPage/AutomationScatter";

const ROSTER = ["Scout", "Drafter", "Ops", "Analyst", "Recruiter"];

function PillarVisual({ kind }: { kind: number }) {
  if (kind === 0) {
    // #12 personas roster — the "team of Assistants" pillar
    return <PersonaRoster />;
  }
  if (kind === 1) {
    // #13 automations scatter — the "background automation" pillar
    return <AutomationScatter />;
  }
  if (kind === 2) {
    return (
      <div className="flex flex-wrap gap-2">
        {ROSTER.map((r) => (
          <span key={r} className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line bg-surface px-2.5 py-1.5 font-sans text-[var(--text-micro)] text-ink-secondary" style={{ boxShadow: "var(--shadow-sm)" }}>
            <Avatar name={r} size="xs" color="var(--neutral-700)" />{r}
          </span>
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-1.5">
      {["OpenAI", "Anthropic", "Gemini", "Mistral"].map((m, i) => (
        <div key={m} className={"flex items-center justify-between rounded-[var(--r-sm)] border px-3 py-2 " + (i === 1 ? "border-line-strong bg-bg-subtle" : "border-line bg-surface")} style={{ boxShadow: "var(--shadow-sm)" }}>
          <span className="font-sans text-[var(--text-small)] text-ink">{m}</span>
          {i === 1 && <Badge label="Auto-routed" color="Neutral" />}
        </div>
      ))}
    </div>
  );
}

const PILLARS = [
  { n: "01", title: "A team of Assistants, not a chatbot.", body: "Each Assistant has a role. They think, decide, and hand work to each other. You manage them like a team." },
  { n: "02", title: "Background automation, no babysitting.", body: "A team of AI Agents that executes complex work in the background — no constant supervision needed." },
  { n: "03", title: "Not one AI co-worker, but a full AI department.", body: "Role-tuned AI Assistants that coordinate, hand off, and share memory. Grow output without growing headcount. One Slack bot manages them." },
  { n: "04", title: "One chatspace. Every frontier model.", body: "Auto-routes prompts to the best model for quality and cost. Persistent memory across sessions. Pins, folders, and shared projects keep nothing scattered." },
];

export default function Pillars() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <SectionHeading
          eyebrow="What Souvenir is"
          title="One Workspace. Every Task. No Switch, No Ask."
          lead="From the first idea to the final ask, Souvenir runs your work — start to finish, agent to team."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={(i % 2) * 0.08}>
              <div className="relative flex h-full flex-col rounded-[var(--r-2xl)] border border-line bg-surface p-6 sm:p-8" style={{ boxShadow: "var(--shadow-sm)" }}>
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-2xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
                <span className="font-mono text-[var(--text-micro)] uppercase tracking-[0.12em] text-ink-subtle">Pillar {p.n}</span>
                <h3 className="font-display mt-2 max-w-[24ch] text-[length:var(--text-h3)] text-ink">{p.title}</h3>
                <p className="mt-2 max-w-[48ch] font-sans text-[var(--text-body)] leading-relaxed text-ink-muted">{p.body}</p>
                <div className="mt-6"><PillarVisual kind={i} /></div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
