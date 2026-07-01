import type { Metadata } from "next";
import Link from "next/link";
import GuideShell from "@/components/GuidePage/GuideShell";
import ProseDoc from "@/components/GuidePage/ProseDoc";

export const metadata: Metadata = {
  title: "Two ways to onboard — Learning Guide | Souvenir",
  description:
    "Two ways to start with Souvenir: set it up for yourself as a personal workspace, or roll it out to your team as a shared company brain.",
  alternates: { canonical: "/guide/getting-started/two-ways-to-onboard" },
};

type Path = { num: string; label: string; href: string };

const INDIVIDUAL: Path[] = [
  { num: "1", label: "Start in the Chatspace", href: "/guide/chatspace" },
  { num: "2", label: "Build your first agent", href: "/guide/create-agent" },
  { num: "3", label: "Save your best work with Pins", href: "/guide/pins" },
];
const TEAM: Path[] = [
  { num: "1", label: "Set up your team", href: "/guide/set-up-teams" },
  { num: "2", label: "Invite your team members", href: "/guide/invite-members" },
  { num: "3", label: "Connect your team’s tools", href: "/guide/connectors-permissions" },
  { num: "4", label: "Share agents with your team", href: "/guide/share-collaborate-agents" },
];

function PathList({ steps }: { steps: Path[] }) {
  return (
    <ol className="mt-5 flex flex-col gap-2">
      {steps.map((s) => (
        <li key={s.href}>
          <Link href={s.href} className="group flex items-center gap-3 rounded-[var(--r-md)] border border-line bg-surface px-4 py-3 transition-colors hover:bg-surface-warm" style={{ boxShadow: "var(--shadow-sm)" }}>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-bg font-sans text-[length:var(--text-small)] font-semibold tabular-nums text-ink">{s.num}</span>
            <span className="font-sans text-[length:var(--text-small)] font-medium text-ink">{s.label}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default function Page() {
  return (
    <GuideShell>
      <ProseDoc
        slug="getting-started/two-ways-to-onboard"
        eyebrow="Getting Started"
        title={<>Two ways to <em className="font-display italic text-ink-muted">onboard</em></>}
        lede="There are two ways to start with Souvenir. Set it up for yourself as a personal workspace, or roll it out to your team as a shared company brain. The building blocks are the same — teams just add shared context and governance on top."
      >
        {/* For individuals */}
        <section>
          <h2 id="individuals" data-toc data-toc-label="For individuals" className="guide-h2">For individuals</h2>
          <p className="guide-body mt-3 font-sans text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-ink-secondary">
            Your personal AI operating system — one workspace for your chat, agents, and memory. Start here:
          </p>
          <PathList steps={INDIVIDUAL} />
        </section>

        {/* For teams */}
        <section>
          <h2 id="teams" data-toc data-toc-label="For teams" className="guide-h2">For teams</h2>
          <p className="guide-body mt-3 font-sans text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-ink-secondary">
            One shared brain for your whole team — shared context, published agents, and governance. An admin sets the foundation, then the team onboards onto it:
          </p>
          <PathList steps={TEAM} />
        </section>

        {/* Which is which */}
        <section>
          <h2 id="which" data-toc data-toc-label="Which should you pick" className="guide-h2">Which should you pick?</h2>
          <div className="guide-body mt-3 font-sans text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-ink-secondary">
            <p>If it’s just you, start with the individual path — you can invite a team later and everything you’ve built comes with you. If you’re rolling Souvenir out to a group, start with the team path so shared connectors, projects, and roles are set up before people arrive.</p>
          </div>
        </section>
      </ProseDoc>
    </GuideShell>
  );
}
