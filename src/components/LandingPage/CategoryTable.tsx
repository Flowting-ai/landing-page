import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";

type Row = { cap: string; desc: string; s: string; c: string; p: string; group?: string };

const ROWS: Row[] = [
  { cap: "Multi-agent workforce", desc: "Role-tuned Assistants that hand off work.", s: "Native", c: "Single agent", p: "Not available" },
  { cap: "Slack-native command center", desc: "One managerial bot that coordinates the whole team in your channels.", s: "Native", c: "Bolt-on · third-party", p: "Bolt-on · third-party" },
  { cap: "Background automation", desc: "Multi-step work runs across your stack without prompts.", s: "Native", c: "Prompt-driven · you drive every step", p: "Not available" },
  { cap: "Cross-model memory", desc: "Project context persists across every model provider.", s: "Native", c: "Provider-locked · memory dies at the edge", p: "App-bound · stays inside the app", group: "Context" },
  { cap: "Cross-app context indexing", desc: "Unified memory across Gmail, Drive, Slack, your CRM.", s: "Native", c: "No external context · each session starts blank", p: "App silo · reads only its own app" },
  { cap: "Pins & shared project folders", desc: "Team-wide reusable context — built once, used everywhere.", s: "Native", c: "Personal only · no team sharing", p: "Inside one app · locked to host tool" },
  { cap: "Automatic model routing", desc: "Best model picked per task — for quality and cost.", s: "Native", c: "Single model · one provider", p: "Single model · one provider", group: "Control" },
  { cap: "Governance & audit trail", desc: "Tenant control over how the team uses AI.", s: "Native", c: "Enterprise tier · top plans only", p: "App-bound · only what one app sees" },
  { cap: "Unlimited seats", desc: "Whole team onboarded without per-user cost.", s: "Included", c: "Per-seat · $25–60/user/mo", p: "Per-seat · $10–20/user/mo" },
];

export default function CategoryTable() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <SectionHeading
          eyebrow="The category check"
          title="There is no second place."
          lead="Single-model platforms give you a chatbot. Productivity tools give you a sidebar. Souvenir is the operational layer that sits underneath both — and replaces what's missing in between."
        />
        <Reveal delay={0.12}>
          <div className="mt-12 overflow-x-auto rounded-[var(--r-2xl)] border border-line bg-surface" style={{ boxShadow: "var(--shadow-sm)" }}>
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr className="border-b border-line">
                  <th className="w-[28%] px-5 py-4 text-left font-sans text-[var(--text-micro)] font-semibold uppercase tracking-[0.1em] text-ink-subtle">Capability</th>
                  <th className="px-5 py-4 text-left font-sans text-[var(--text-micro)] font-semibold text-ink">Souvenir<span className="block font-normal text-ink-subtle">Operational layer</span></th>
                  <th className="px-5 py-4 text-left font-sans text-[var(--text-micro)] font-medium text-ink-muted">Conversational AI<span className="block font-normal text-ink-subtle">ChatGPT · Claude · Gemini</span></th>
                  <th className="px-5 py-4 text-left font-sans text-[var(--text-micro)] font-medium text-ink-muted">Productivity tools<span className="block font-normal text-ink-subtle">Notion AI · Copilot</span></th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.cap} className="border-b border-line last:border-0 align-top">
                    <td className="px-5 py-4">
                      {r.group && <span className="mb-2 block font-mono text-[var(--text-micro)] uppercase tracking-[0.1em] text-ink-subtle">{r.group}</span>}
                      <span className="font-sans text-[var(--text-small)] font-medium text-ink">{r.cap}</span>
                      <span className="mt-0.5 block font-sans text-[var(--text-micro)] text-ink-subtle">{r.desc}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1.5 font-sans text-[var(--text-small)] font-medium text-ink"><span className="flex h-4 w-4 items-center justify-center rounded-full bg-ink text-[10px] text-dark-ink">✓</span>{r.s}</span>
                    </td>
                    <td className="px-5 py-4 font-sans text-[var(--text-small)] text-ink-muted">{r.c}</td>
                    <td className="px-5 py-4 font-sans text-[var(--text-small)] text-ink-muted">{r.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
