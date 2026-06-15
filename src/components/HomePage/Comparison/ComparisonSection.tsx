import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";
import { Badge } from "@/components/Badge";

type Cell = { kind: "yes"; note: string } | { kind: "partial"; tag: string; note: string } | { kind: "no"; note: string };

const ROWS: { capability: string; desc: string; souvenir: Cell; single: Cell; productivity: Cell }[] = [
  {
    capability: "Multi-agent workforce",
    desc: "Role-tuned Assistants that hand off work between each other.",
    souvenir: { kind: "yes", note: "Native" },
    single: { kind: "partial", tag: "Single agent", note: "One model, one thread." },
    productivity: { kind: "no", note: "Not available" },
  },
  {
    capability: "Slack-native command center",
    desc: "One managerial bot that coordinates the whole team in your channels.",
    souvenir: { kind: "yes", note: "Native" },
    single: { kind: "partial", tag: "Bolt-on", note: "Third-party integration." },
    productivity: { kind: "partial", tag: "Bolt-on", note: "Third-party integration." },
  },
  {
    capability: "Background automation",
    desc: "Multi-step work runs across your stack without prompts.",
    souvenir: { kind: "yes", note: "Native" },
    single: { kind: "partial", tag: "Prompt-driven", note: "You drive every step." },
    productivity: { kind: "no", note: "Not available" },
  },
  {
    capability: "Cross-model memory",
    desc: "Project context persists across every model provider.",
    souvenir: { kind: "yes", note: "Native" },
    single: { kind: "partial", tag: "Provider-locked", note: "Memory dies at the edge." },
    productivity: { kind: "partial", tag: "App-bound", note: "Stays inside the app." },
  },
  {
    capability: "Cross-app context indexing",
    desc: "Unified memory across Gmail, Drive, Slack, your CRM.",
    souvenir: { kind: "yes", note: "Native" },
    single: { kind: "no", note: "Each session starts blank." },
    productivity: { kind: "partial", tag: "App silo", note: "Reads only its own app." },
  },
  {
    capability: "Automatic model routing",
    desc: "Best model picked per task — for quality and cost.",
    souvenir: { kind: "yes", note: "Native" },
    single: { kind: "partial", tag: "Single model", note: "One provider, period." },
    productivity: { kind: "partial", tag: "Single model", note: "One provider, period." },
  },
  {
    capability: "Unlimited seats",
    desc: "Whole team onboarded without per-user lock-in.",
    souvenir: { kind: "yes", note: "Included" },
    single: { kind: "partial", tag: "Per-seat", note: "$25–60 / user / mo." },
    productivity: { kind: "partial", tag: "Per-seat", note: "$10–20 / user / mo." },
  },
];

function CellView({ cell, strong = false }: { cell: Cell; strong?: boolean }) {
  if (cell.kind === "yes") {
    return (
      <div className="flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 font-sans text-[var(--text-small)] font-semibold text-ink">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-ink text-dark-ink">
            <Check size={11} strokeWidth={3} />
          </span>
          {cell.note}
        </span>
      </div>
    );
  }
  if (cell.kind === "no") {
    return <span className="font-sans text-[var(--text-small)] text-ink-subtle">{cell.note}</span>;
  }
  return (
    <div className="flex flex-col items-start gap-1.5">
      <Badge label={cell.tag} color="Neutral" />
      <span className="font-sans text-[var(--text-small)] text-ink-subtle">{cell.note}</span>
    </div>
  );
}

export default function ComparisonSection() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <SectionHeading
          eyebrow="The category check"
          title="There is no second place."
          lead="Single-model platforms give you a chatbot. Productivity tools give you a sidebar. Souvenir is the operational layer that sits underneath both — and replaces what's missing in between."
        />

        <Reveal delay={0.1}>
          <div
            className="mt-12 overflow-hidden rounded-[var(--r-2xl)] border border-line bg-surface"
            style={{ boxShadow: "var(--shadow-md)" }}
          >
            {/* header */}
            <div className="hidden grid-cols-[1.4fr_1fr_1fr_1fr] gap-4 border-b border-line bg-surface-warm px-6 py-4 lg:grid">
              <span className="font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.1em] text-ink-muted">Capability</span>
              <span className="font-sans text-[var(--text-small)] font-semibold text-ink">Souvenir<span className="block font-sans text-[var(--text-micro)] font-normal text-ink-muted">Operational layer</span></span>
              <span className="font-sans text-[var(--text-small)] font-medium text-ink-secondary">Single-model AI<span className="block font-sans text-[var(--text-micro)] font-normal text-ink-muted">ChatGPT · Claude · Gemini</span></span>
              <span className="font-sans text-[var(--text-small)] font-medium text-ink-secondary">Productivity tools<span className="block font-sans text-[var(--text-micro)] font-normal text-ink-muted">Notion AI · Copilot</span></span>
            </div>

            {/* rows */}
            <div className="divide-y divide-line">
              {ROWS.map((r) => (
                <div key={r.capability} className="grid grid-cols-1 gap-3 px-6 py-5 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-4 lg:items-start">
                  <div>
                    <p className="font-sans text-[var(--text-small)] font-semibold text-ink">{r.capability}</p>
                    <p className="mt-0.5 font-sans text-[var(--text-micro)] leading-snug text-ink-muted">{r.desc}</p>
                  </div>
                  <div className="lg:pt-0.5"><span className="mb-1 block font-sans text-[var(--text-micro)] text-ink-subtle lg:hidden">Souvenir</span><CellView cell={r.souvenir} strong /></div>
                  <div className="lg:pt-0.5"><span className="mb-1 block font-sans text-[var(--text-micro)] text-ink-subtle lg:hidden">Single-model AI</span><CellView cell={r.single} /></div>
                  <div className="lg:pt-0.5"><span className="mb-1 block font-sans text-[var(--text-micro)] text-ink-subtle lg:hidden">Productivity tools</span><CellView cell={r.productivity} /></div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
