import type { Metadata } from "next";
import Link from "next/link";
import GuideShell from "@/components/GuidePage/GuideShell";
import ProseDoc from "@/components/GuidePage/ProseDoc";

export const metadata: Metadata = {
  title: "What is Souvenir? — Learning Guide | Souvenir",
  description:
    "Souvenir is one shared workspace where your team and its AI work as one — chat, a team of AI agents, automation, and Slack, all on one shared context.",
  alternates: { canonical: "/guide/getting-started/what-is-souvenir" },
};

const PARTS = [
  { title: "Chatspace", body: "One chat with every frontier model, auto-routed to the best one for each task — with memory that doesn’t reset between sessions." },
  { title: "AI Agents", body: "A team of role-tuned specialists, not a single chatbot. Each agent has a job, knows your context, and hands work to the others." },
  { title: "Brain & Automation", body: "Hand off a goal and the Brain runs the multi-step work across your stack — on a schedule or a trigger, without babysitting." },
  { title: "Slack", body: "Run all of it from where your team already works. Mention @Souvenir in any channel, assign a goal, get the result back in the thread." },
];

export default function Page() {
  return (
    <GuideShell>
      <ProseDoc
        slug="getting-started/what-is-souvenir"
        eyebrow="Getting Started"
        title={<>What is <em className="font-display italic text-ink-muted">Souvenir</em>?</>}
        lede="Souvenir is one shared workspace where your team and its AI work as one. It connects your apps and data into a single shared context, then runs your multi-step work in the background — managed from Slack."
      >
        {/* Why use Souvenir */}
        <section>
          <h2 id="why" data-toc data-toc-label="Why use Souvenir" className="guide-h2">Why use Souvenir?</h2>
          <div className="guide-body mt-3 font-sans text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-ink-secondary">
            <p>Most teams’ AI is stuck in single-player mode. One person, one chat, one model, no shared memory — everyone runs their own tools in their own tabs, and the team becomes the manual bridge between all of them. Prompts vanish when a chat closes, context lives in someone’s head, and none of it talks to your actual apps.</p>
            <p>Souvenir replaces that with one operational layer. Every tool, conversation, and decision lives in one place; a team of AI agents reads the same context, runs the work, and hands it off to each other — automatically.</p>
          </div>
        </section>

        {/* How Souvenir works */}
        <section>
          <h2 id="how-it-works" data-toc data-toc-label="How Souvenir works" className="guide-h2">How Souvenir works</h2>
          <p className="guide-body mt-3 font-sans text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-ink-secondary">
            Souvenir has four parts that share one context. You can use them on their own or together.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {PARTS.map((p) => (
              <div key={p.title} className="rounded-[var(--r-xl)] border border-line bg-surface p-5" style={{ boxShadow: "var(--shadow-sm)" }}>
                <h3 className="guide-h3">{p.title}</h3>
                <p className="mt-2 font-sans text-[length:var(--text-small)] leading-[var(--text-small--line-height)] text-ink-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What you can do */}
        <section>
          <h2 id="what-you-can-do" data-toc data-toc-label="What you can do" className="guide-h2">What you can do with Souvenir</h2>
          <ul className="guide-body mt-3 flex flex-col gap-2 font-sans text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-ink-secondary">
            <li>Research and synthesize across your apps in one chat, with the right model picked for you.</li>
            <li>Build a specialist agent once — your tone, rules, and connected data — and reuse it forever.</li>
            <li>Automate recurring multi-step work: morning briefings, utilization reports, catalog updates.</li>
            <li>Keep your best work with Pins and Highlights, and share context across your whole team.</li>
            <li>Run and manage all of it from Slack.</li>
          </ul>
        </section>

        {/* Next */}
        <section>
          <h2 id="next" data-toc data-toc-label="Where to next" className="guide-h2">Where to go next</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/guide/getting-started/how-its-organized" className="group rounded-[var(--r-xl)] border border-line bg-surface p-5 transition-shadow hover:shadow-[var(--shadow-md)]" style={{ boxShadow: "var(--shadow-sm)" }}>
              <span className="guide-h3">How Souvenir is organized</span>
              <p className="mt-1.5 font-sans text-[length:var(--text-small)] text-ink-muted">See how the parts fit together, and the words you’ll see across the product.</p>
            </Link>
            <Link href="/guide/getting-started/two-ways-to-onboard" className="group rounded-[var(--r-xl)] border border-line bg-surface p-5 transition-shadow hover:shadow-[var(--shadow-md)]" style={{ boxShadow: "var(--shadow-sm)" }}>
              <span className="guide-h3">Two ways to onboard</span>
              <p className="mt-1.5 font-sans text-[length:var(--text-small)] text-ink-muted">Whether you’re setting up for yourself or rolling Souvenir out to a team.</p>
            </Link>
          </div>
        </section>
      </ProseDoc>
    </GuideShell>
  );
}
