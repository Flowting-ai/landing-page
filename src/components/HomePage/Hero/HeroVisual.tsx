"use client";

/**
 * The hero focal visual: ONE clean Slack thread — a person delegates a task,
 * Souvenir's agent picks it up and runs a workflow. Two messages, generous
 * whitespace, soft depth. This is the antidote to the old dense UI-card collage.
 */
export default function HeroVisual() {
  return (
    <div
      className="relative w-full rounded-[var(--r-2xl)] bg-surface border border-line p-2.5"
      style={{ boxShadow: "var(--shadow-lg)" }}
    >
      {/* window chrome */}
      <div className="flex items-center gap-1.5 px-3 pt-2 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="ml-3 text-[var(--text-micro)] text-ink-subtle font-sans">
          #growth-team
        </span>
      </div>

      <div className="rounded-[var(--r-xl)] bg-bg-subtle border border-line p-5 sm:p-7 flex flex-col gap-6">
        {/* user message */}
        <div className="flex gap-3">
          <div className="h-9 w-9 shrink-0 rounded-full bg-surface-warm border border-line flex items-center justify-center text-[var(--text-small)] font-sans font-medium text-ink-muted">
            CL
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-2">
              <span className="font-sans font-semibold text-[var(--text-small)] text-ink">
                Chai
              </span>
              <span className="font-sans text-[var(--text-micro)] text-ink-subtle">
                9:41 AM
              </span>
            </div>
            <p className="font-sans text-[var(--text-body)] text-ink-secondary leading-relaxed">
              <span className="text-accent font-medium">@Souvenir</span> pull last
              week&apos;s signups by source and post the summary here.
            </p>
          </div>
        </div>

        {/* agent message */}
        <div className="flex gap-3">
          <div className="h-9 w-9 shrink-0 rounded-[10px] bg-ink flex items-center justify-center font-display text-[15px] text-white">
            S
          </div>
          <div className="flex flex-col gap-2 min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="font-sans font-semibold text-[var(--text-small)] text-ink">
                Souvenir
              </span>
              <span className="rounded-[var(--r-sm)] bg-accent-soft px-1.5 py-0.5 font-sans text-[11px] font-medium text-accent">
                agent
              </span>
            </div>

            <p className="font-sans text-[var(--text-body)] text-ink-secondary leading-relaxed">
              On it — ran your <span className="text-ink font-medium">Weekly Signups</span> workflow.
            </p>

            {/* one tidy result card */}
            <div className="mt-1 rounded-[var(--r-md)] border border-line bg-surface p-4 max-w-sm">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[var(--text-micro)] text-ink-muted">
                  New signups · last 7 days
                </span>
                <span className="font-sans text-[var(--text-micro)] font-medium text-highlight">
                  +18%
                </span>
              </div>
              <div className="mt-3 flex items-end gap-1.5 h-16">
                {[40, 55, 48, 70, 62, 88, 100].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-t-[4px] bg-accent/80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
