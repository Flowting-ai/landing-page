import type { Metadata } from "next";
import GuideShell from "@/components/GuidePage/GuideShell";
import ProseDoc from "@/components/GuidePage/ProseDoc";

export const metadata: Metadata = {
  title: "How Souvenir is organized — Learning Guide | Souvenir",
  description:
    "How Souvenir fits together: one shared context underneath the Chatspace, AI Agents, the Brain, and Slack — plus the words you'll see across the product.",
  alternates: { canonical: "/guide/getting-started/how-its-organized" },
};

const GLOSSARY = [
  { term: "Chatspace", def: "Your unified chat. Every frontier model in one thread, auto-routed, with memory that persists." },
  { term: "Agent", def: "A role-tuned AI specialist you set up once — its instructions, model, knowledge, and tools — and reuse." },
  { term: "Brain", def: "The orchestrator. Give it a goal and it plans and runs the multi-step work across your apps." },
  { term: "Connector", def: "A link to one of your apps (Gmail, Slack, Notion, Drive, and more) that Souvenir can read from and act in." },
  { term: "Pin", def: "A saved card — a response, insight, or artifact you keep on a Pinboard, auto-tagged and searchable." },
  { term: "Highlight", def: "A selection you mark inside a chat to keep or reuse, without saving the whole response." },
  { term: "Project", def: "A shared folder of chats, pins, and context — the unit teams collaborate in." },
];

export default function Page() {
  return (
    <GuideShell>
      <ProseDoc
        slug="getting-started/how-its-organized"
        eyebrow="Getting Started"
        title={<>How Souvenir is <em className="font-display italic text-ink-muted">organized</em></>}
        lede="Souvenir is four parts over one shared context. Anything you do in one part is available to the others — that shared context is what makes the team of agents work as one."
      >
        {/* The shared context */}
        <section>
          <h2 id="shared-context" data-toc data-toc-label="One shared context" className="guide-h2">One shared context</h2>
          <div className="guide-body mt-3 font-sans text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-ink-secondary">
            <p>The spine of Souvenir is a single operational layer that every part reads from and writes to. Your connected apps, conversations, pins, and decisions all live here once — so an agent doesn’t start from a blank slate, the Brain knows what you’ve already done, and your team isn’t the manual bridge between tools.</p>
          </div>
        </section>

        {/* The four parts */}
        <section>
          <h2 id="four-parts" data-toc data-toc-label="The four parts" className="guide-h2">The four parts, and how they relate</h2>
          <div className="guide-body mt-3 font-sans text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-ink-secondary">
            <p>You start in the <strong>Chatspace</strong> — one chat, every model. When a task needs a specialist, you hand it to an <strong>Agent</strong>. When a job is multi-step or recurring, the <strong>Brain</strong> runs it across your connected apps. And you can drive all of it from <strong>Slack</strong>, where your team already works. Each part feeds the same shared context, so work flows between them instead of getting stranded in tabs.</p>
          </div>
        </section>

        {/* Glossary */}
        <section>
          <h2 id="glossary" data-toc data-toc-label="Words you'll see" className="guide-h2">Words you’ll see across the product</h2>
          <dl className="mt-5 flex flex-col divide-y divide-line overflow-hidden rounded-[var(--r-xl)] border border-line" style={{ boxShadow: "var(--shadow-sm)" }}>
            {GLOSSARY.map((g) => (
              <div key={g.term} className="grid gap-1 bg-surface px-5 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-4">
                <dt className="guide-h3">{g.term}</dt>
                <dd className="font-sans text-[length:var(--text-small)] leading-[var(--text-small--line-height)] text-ink-muted">{g.def}</dd>
              </div>
            ))}
          </dl>
        </section>
      </ProseDoc>
    </GuideShell>
  );
}
