import { ReactNode } from "react";

export interface RosterRow {
  id: string;
  node: ReactNode;
  /** the elevated "live one" — lifts + sits above the dashed-focus boundary */
  focused?: boolean;
  /** horizontal offset (%) for the alternating-rows feel (Figma #14) */
  offset?: number;
}

/**
 * Stacked identity rows (Figma #12 personas, #14 team). Rows are KDS atoms
 * (Avatar + Badge + text). One row can be `focused` — it lifts above the others
 * with a stronger shadow, the Figma "this is the live one" treatment. Optional
 * per-row `offset` gives the alternating-rows rhythm. Pure layout — no motion.
 */
export default function Roster({
  rows,
  className = "",
}: {
  rows: RosterRow[];
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2.5 ${className}`}>
      {rows.map((r) => (
        <div
          key={r.id}
          className="relative"
          style={{
            marginLeft: r.offset ? `${Math.max(0, r.offset)}%` : undefined,
            marginRight: r.offset ? `${Math.max(0, -r.offset)}%` : undefined,
            zIndex: r.focused ? 2 : 1,
          }}
        >
          <div
            className="rounded-[var(--r-lg)] border bg-surface px-3.5 py-3"
            style={{
              borderColor: r.focused ? "var(--line-strong)" : "var(--line)",
              boxShadow: r.focused ? "var(--shadow-lg)" : "var(--shadow-sm)",
            }}
          >
            {r.node}
          </div>
        </div>
      ))}
    </div>
  );
}
