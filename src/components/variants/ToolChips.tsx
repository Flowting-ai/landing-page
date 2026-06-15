const TOOLS = ["Slack", "Notion", "GitHub", "Gmail", "Linear", "Drive"];

/** Placeholder tool chips (real logos swap in later). */
export default function ToolChips({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {TOOLS.map((t) => (
        <span
          key={t}
          className={
            "inline-flex items-center gap-1.5 rounded-[var(--r-pill)] px-2.5 py-1 font-sans text-[var(--text-micro)] font-medium " +
            (dark
              ? "border border-[var(--dark-line)] text-dark-ink-muted"
              : "border border-line bg-surface text-ink-muted")
          }
        >
          <span
            className="h-3.5 w-3.5 rounded-[4px]"
            style={{ background: dark ? "rgba(245,240,232,0.25)" : "var(--surface-warm)", border: "1px solid var(--line-strong)" }}
          />
          {t}
        </span>
      ))}
    </div>
  );
}
