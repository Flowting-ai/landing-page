import type { Metadata } from "next";
import Link from "next/link";
import GuideShell from "@/components/GuidePage/GuideShell";
import { GUIDE_NAV } from "@/content/guides/nav";
import { getGuide } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Learning Guide — Built for Humans | Souvenir",
  description:
    "Step-by-step guides for getting the most out of Souvenir — the Chatspace, AI agents, and teams & admin.",
  alternates: { canonical: "/guide" },
};

export default function GuidePage() {
  return (
    <GuideShell>
      <div className="py-10 sm:py-14">
        {/* Hub header */}
        <header>
          <span className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line bg-surface px-3.5 py-1.5 font-sans text-[var(--text-micro)] font-medium text-ink-muted" style={{ boxShadow: "var(--shadow-sm)" }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
            Learning Guide
          </span>
          <h1 className="guide-title mt-5 max-w-[18ch]">
            Built for humans. <em className="font-display italic text-ink-muted">Learn it in minutes.</em>
          </h1>
          <p className="guide-lead mt-6">
            Short, visual walkthroughs for everything Souvenir does — chat and models, building and
            sharing agents, and running your teams and workspace. Pick a topic from the sidebar, or start below.
          </p>
        </header>

        {/* Grouped index of guides */}
        <div className="mt-16 flex flex-col gap-16">
          {GUIDE_NAV.map((group) => (
            <section key={group.title}>
              <h2 className="guide-h2">{group.title}</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {group.items.map((it) => {
                  const g = it.demoId ? getGuide(it.slug) : null;
                  // Prose pages (Getting Started) link via href + blurb; demo guides use their content.
                  const isProse = Boolean(it.href);
                  if (!g && !isProse) return null;
                  const desc = g?.overview ?? it.blurb ?? "";
                  return (
                    <Link
                      key={it.slug}
                      href={it.href ?? `/guide/${it.slug}`}
                      className="group flex flex-col rounded-[var(--r-xl)] border border-line bg-surface p-6 transition-shadow hover:shadow-[var(--shadow-md)]"
                      style={{ boxShadow: "var(--shadow-sm)" }}
                    >
                      <span className="guide-h3">{it.label}</span>
                      {desc && (
                        <span className="mt-2 line-clamp-2 font-sans text-[length:var(--text-small)] leading-relaxed text-ink-muted">
                          {desc}
                        </span>
                      )}
                      <span className="mt-4 font-sans text-[length:var(--text-micro)] tabular-nums text-ink-subtle">
                        {g ? `${g.steps.length} steps` : "Read guide"}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </GuideShell>
  );
}
