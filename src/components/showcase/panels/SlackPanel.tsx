import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";
import { StatCard } from "@/components/StatCard";

/** Real product atoms (Avatar, Badge, StatCard) composed as a Slack thread. */
export default function SlackPanel() {
  return (
    <div className="flex flex-col gap-6 p-6 sm:p-8 min-h-[360px]">
      <span className="font-sans text-[var(--text-micro)] font-medium text-ink-subtle">#growth-team</span>

      {/* user message */}
      <div className="flex gap-3">
        <Avatar name="Chai" initials="CL" size="lg" color="var(--neutral-400)" />
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-2">
            <span className="font-sans font-semibold text-[var(--text-small)] text-ink">Chai</span>
            <span className="font-sans text-[var(--text-micro)] text-ink-subtle">9:41 AM</span>
          </div>
          <p className="font-sans text-[var(--text-body)] text-ink-secondary leading-relaxed">
            <span className="font-medium text-ink">@Souvenir</span> pull last week&apos;s signups by source and post the summary here.
          </p>
        </div>
      </div>

      {/* agent message */}
      <div className="flex gap-3">
        <Avatar name="Souvenir" initials="S" size="lg" color="var(--neutral-900)" />
        <div className="flex flex-col gap-2 min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="font-sans font-semibold text-[var(--text-small)] text-ink">Souvenir</span>
            <Badge label="agent" color="Neutral" />
          </div>
          <p className="font-sans text-[var(--text-body)] text-ink-secondary leading-relaxed">
            On it — ran your <span className="text-ink font-medium">Weekly Signups</span> workflow.
          </p>
          <div className="mt-1 max-w-xs">
            <StatCard label="New signups · last 7 days" value="1,284" delta="+18%" deltaTrend="up" />
          </div>
        </div>
      </div>
    </div>
  );
}
