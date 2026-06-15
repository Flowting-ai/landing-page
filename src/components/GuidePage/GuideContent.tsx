import Container from "@/components/ui/Container";
import { Badge } from "@/components/Badge";

type Section = { id: string; title: string; body: string; chips?: string[]; tutorial?: boolean };
type Group = { group: string; sections: Section[] };

const GUIDE: Group[] = [
  {
    group: "Chatspace",
    sections: [
      { id: "chat-board", title: "The Chatspace", body: "The Chatspace is the front door to your workspace. Ask a question, run deep research, draft anything — powered by an advanced routing algorithm that taps more than the top industry-leading LLMs, all behind one simple text bar. It isn't just a passive text box: the Chatspace handles the heavy lifting in the background — choosing the best model for your task, pulling in your context, and getting ready to act — so you can focus on getting things done.", chips: ["Advanced routing", "Deep research", "Top LLMs", "Write & build", "Live web search"], tutorial: true },
      { id: "smart-model-switching", title: "Smart model switching", body: "You never have to guess which AI model is best for your task. The Muse / Advanced selector on the right of the composer automatically picks the ideal engine behind the scenes, balancing quality against cost. A quick question routes to a fast, lightweight model; a complex analysis routes to a powerful one. Leave it on Muse to let Souvenir auto-route — or switch to Advanced to pick a specific model yourself." },
      { id: "pins", title: "Pins", body: "Don't lose brilliant outputs in an endlessly scrolling chat. When the Chatspace produces something great — a draft, a rule, a finding — pin it to save the whole response. Once a Pin exists, every other part of Souvenir can read it for context." },
      { id: "highlight", title: "Highlight", body: "Save just the line that matters. Highlight any passage in any answer and it becomes a quotable, searchable card — tagged and ready to resurface in a future conversation." },
      { id: "compare-models", title: "Compare Models", body: "Run the same prompt across multiple frontier models side by side, see the outputs in one view, and ship the answer that's actually best — no toggling between apps." },
      { id: "projects", title: "Projects", body: "Group related chats, Pins, and files into a Project so context travels together. Every Assistant working in a Project reads its shared memory automatically." },
      { id: "agents-in-chat", title: "AI Agents in Chat", body: "Type @ to pull a specialist Assistant into the conversation. It reads what came before, does its part, and hands the result back in-thread." },
    ],
  },
  {
    group: "AI Agents",
    sections: [
      { id: "create-agent", title: "Create your first Agent", body: "Start from a template or a blank slate. Give the Assistant a role in plain English, and Souvenir routes it to the model that fits." },
      { id: "template", title: "Templates", body: "Pre-built Assistants for Sales, Legal, Research, Content, and Marketing — fork one and tune it to your workflow." },
      { id: "knowledge", title: "Knowledge", body: "Feed an Assistant the context it should remember: upload files, link Drive folders, or point it at the Pins it should consume." },
      { id: "connectors-tools", title: "Connectors & Tools", body: "Pick the apps an Assistant can reach — read and write, through approval gates or not — across 250+ connectors." },
      { id: "sharing-agents", title: "Sharing Agents", body: "Publish an Assistant to your team's library. See usage, credit spend, and active users across every Assistant." },
    ],
  },
  {
    group: "Automation",
    sections: [
      { id: "brain", title: "Brain", body: "Describe an outcome in plain English. The Brain decomposes the goal, builds a plan you approve, and orchestrates the right Assistants and connectors to deliver it." },
      { id: "schedule-triggers", title: "Schedule & Triggers", body: "Run a workflow once on demand, on a recurring schedule, or on an event — then results land where you want them." },
      { id: "souvenir-in-slack", title: "Souvenir in Slack", body: "Build, trigger, and approve automations from any Slack channel by @-mentioning Souvenir — no dashboard required." },
    ],
  },
  {
    group: "Slack",
    sections: [
      { id: "slack-for-agents", title: "Slack for Agents", body: "Delegate tasks to specialist Assistants from inside Slack and get drafts back to approve in-thread." },
      { id: "slack-for-brain", title: "Slack for Brain", body: "Kick off and schedule Brain automations conversationally, with approval gates before anything writes." },
      { id: "slack-as-manager", title: "Slack as a Manager", body: "One managerial bot coordinates the whole workforce across your channels — the front door to everything Souvenir does." },
    ],
  },
  {
    group: "Use cases & guides",
    sections: [
      { id: "content-creator", title: "Content / Creator", body: "Draft in your voice, repurpose across channels, and keep your brand memory in one place." },
      { id: "freelance-agency", title: "Freelance / Agency", body: "Run client work end-to-end — research, drafts, invoices, and recurring deliverables on autopilot." },
      { id: "research", title: "Research", body: "Run multi-source research with citations and synthesize structured answers you can reuse." },
      { id: "data-analytics", title: "Data / Analytics", body: "Pull data across your stack, compare periods, and post summaries where your team works." },
      { id: "faq", title: "FAQ", body: "Common questions about credits, models, sharing, and security — answered." },
    ],
  },
];

export default function GuideContent() {
  return (
    <section className="pb-[var(--section-y)]">
      <Container>
        {/* audience tabs (visual) */}
        <div className="mb-8 inline-flex items-center gap-1 rounded-[var(--r-pill)] border border-line bg-surface p-1" style={{ boxShadow: "var(--shadow-sm)" }}>
          {["Individuals", "Teams"].map((t, i) => (
            <span key={t} className={"rounded-[var(--r-pill)] px-4 py-1.5 font-sans text-[var(--text-small)] font-medium " + (i === 0 ? "bg-ink text-dark-ink" : "text-ink-muted")}>{t}</span>
          ))}
        </div>
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          {/* sticky TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28 flex flex-col gap-6">
              {GUIDE.map((g) => (
                <div key={g.group}>
                  <p className="font-mono text-[var(--text-micro)] uppercase tracking-[0.1em] text-ink-subtle">{g.group}</p>
                  <ul className="mt-2.5 flex flex-col gap-1.5">
                    {g.sections.map((s) => (
                      <li key={s.id}><a href={`#${s.id}`} className="font-sans text-[var(--text-small)] text-ink-muted transition-colors hover:text-ink">{s.title}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>
          {/* content */}
          <div className="min-w-0 flex flex-col gap-12">
            {GUIDE.flatMap((g) => g.sections).map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28 border-t border-line pt-8 first:border-0 first:pt-0">
                <h2 className="font-display text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] text-ink">{s.title}</h2>
                <p className="mt-4 max-w-[68ch] font-sans text-[var(--text-body)] leading-relaxed text-ink-muted">{s.body}</p>
                {s.chips && (
                  <div className="mt-4 flex flex-wrap gap-2">{s.chips.map((c) => <Badge key={c} label={c} color="Neutral" />)}</div>
                )}
                {s.tutorial && (
                  <div className="mt-6">
                    <p className="font-sans text-[var(--text-small)] font-medium text-ink">Watch the tutorial</p>
                    <p className="font-sans text-[var(--text-small)] text-ink-muted">A quick walkthrough, start to finish.</p>
                    <div className="relative mt-3 flex aspect-video max-w-2xl items-center justify-center overflow-hidden rounded-[var(--r-xl)] bg-dark-bg" style={{ boxShadow: "var(--shadow-lg)" }}>
                      <div className="dotgrid-dark pointer-events-none absolute inset-0 opacity-40" />
                      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-dark-ink text-dark-bg">▶</span>
                      <span className="absolute right-3 top-3"><Badge label="Coming soon" color="Neutral" /></span>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
