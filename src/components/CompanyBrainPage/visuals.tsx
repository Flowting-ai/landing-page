import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";
import ShowcaseFrame from "@/components/showcase/ShowcaseFrame";
import { ConnectorIcon } from "@strange-huge/icons/connectors";

const CREW = [
  { name: "Inventory Analyst", handle: "@IA", runs: "3 runs today" },
  { name: "Ad Copywriter", handle: "@AC", runs: "7 runs today" },
  { name: "CX Helper", handle: "@CX", runs: "14 runs today" },
  { name: "Email Writer", handle: "@EW", runs: "5 runs today" },
];

export function CrewVisual() {
  return (
    <ShowcaseFrame title="souvenir · the crew">
      <div className="flex flex-col gap-5 p-5 sm:p-6">
        {/* manager node */}
        <div className="flex items-center justify-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-dark-ink font-display text-[16px]" style={{ boxShadow: "var(--shadow-lg)" }}>S</span>
          <span className="h-px w-6 bg-line-strong" />
          <span className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-line bg-surface" style={{ boxShadow: "var(--shadow-sm)" }}><ConnectorIcon id="slack" size={24} /></span>
        </div>
        {/* crew */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {CREW.map((c) => (
            <div key={c.name} className="flex flex-col items-start gap-2 rounded-[var(--r-md)] border border-line bg-surface p-3" style={{ boxShadow: "var(--shadow-sm)" }}>
              <Avatar name={c.name} size="sm" color="var(--neutral-700)" />
              <div className="min-w-0">
                <span className="block truncate font-sans text-[var(--text-small)] font-medium text-ink">{c.name}</span>
                <span className="font-sans text-[var(--text-micro)] text-ink-subtle">{c.handle}</span>
              </div>
              <Badge label={c.runs} color="Neutral" />
            </div>
          ))}
        </div>
        {/* flow */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 font-sans text-[var(--text-micro)] text-ink-muted">
          <span className="font-medium text-ink">Inventory Analyst</span><span className="text-ink-subtle">→</span>
          <span>findings</span><span className="text-ink-subtle">→</span>
          <span className="font-medium text-ink">@Ad Copywriter</span><span className="text-ink-subtle">→</span>
          <span>draft</span><span className="text-ink-subtle">→</span>
          <span>approval</span><span className="text-ink-subtle">→</span>
          <span>Slack &amp; Workspace</span>
        </div>
      </div>
    </ShowcaseFrame>
  );
}

const APPS_ROW1 = ["slack", "gmail", "notion", "hubspot", "stripe", "github"];
const APPS_ROW2 = ["linear", "figma"];

export function IntegrationsGrid() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {[...APPS_ROW1, ...APPS_ROW2].map((c) => (
          <span key={c} className="flex h-14 w-14 items-center justify-center rounded-[14px] border border-line bg-surface" style={{ boxShadow: "var(--shadow-sm)" }}>
            <ConnectorIcon id={c} size={28} />
          </span>
        ))}
        <span className="flex h-14 items-center rounded-[14px] border border-line bg-surface px-5 font-display text-[18px] text-ink" style={{ boxShadow: "var(--shadow-sm)" }}>243+</span>
      </div>
    </div>
  );
}
