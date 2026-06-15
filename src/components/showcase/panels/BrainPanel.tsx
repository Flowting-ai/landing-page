"use client";

import { useEffect, useState } from "react";
import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";
import { StatCard } from "@/components/StatCard";
import { UsageBarChart } from "@/components/UsageBarChart";

const STEPS = [
  { n: "01", label: "Pull signups from Postgres + Stripe", done: true },
  { n: "02", label: "Group by source, compare to last week", done: true },
  { n: "03", label: "Post the summary to #growth-team", done: false },
];

/** Real product components: Avatar, Badge, StatCard, UsageBarChart. */
export default function BrainPanel() {
  // Mount-gate the chart so recharts measures a laid-out container (no 0-size warning).
  const [chartReady, setChartReady] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setChartReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="flex flex-col gap-5 p-6 sm:p-8 min-h-[360px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Avatar name="Souvenir" initials="S" size="md" color="var(--neutral-900)" />
          <div>
            <p className="font-sans text-[var(--text-small)] font-semibold text-ink leading-tight">Weekly Signups</p>
            <p className="font-sans text-[var(--text-micro)] text-ink-subtle">Brain · automation</p>
          </div>
        </div>
        <Badge label="Runs Mondays · 9:00 AM" color="Neutral" />
      </div>

      {/* workflow steps */}
      <div className="flex flex-col gap-2">
        {STEPS.map((s) => (
          <div
            key={s.n}
            className="flex items-center gap-3 rounded-[var(--r-md)] border border-line bg-surface px-3.5 py-3"
            style={{ boxShadow: "var(--shadow-sm)" }}
          >
            <span className={"flex h-6 w-6 items-center justify-center rounded-full font-sans text-[var(--text-micro)] font-medium " + (s.done ? "bg-ink text-dark-ink" : "border border-line-strong text-ink-subtle")}>
              {s.done ? "✓" : s.n}
            </span>
            <span className="font-sans text-[var(--text-small)] text-ink-secondary">{s.label}</span>
          </div>
        ))}
      </div>

      {/* real StatCard + real chart */}
      <div className="grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
        <StatCard label="New signups · 7d" value="1,284" delta="+18%" deltaTrend="up" />
        <div className="rounded-[16px] border border-line bg-surface p-3" style={{ boxShadow: "var(--shadow-sm)" }}>
          <div style={{ height: 96 }}>
            {chartReady && (
              <UsageBarChart
                days={["M", "T", "W", "T", "F", "S", "S"]}
                series={[{ id: "signups", label: "Signups", color: "var(--neutral-700)", data: [40, 55, 48, 70, 62, 88, 100] }]}
                mode="all"
                height={96}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
