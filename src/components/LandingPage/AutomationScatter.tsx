import Scatter, { type ScatterItem } from "@/components/sections/Scatter";

/** #13 automations: overlapping scheduled-job cards (the "background automation"
 *  pillar visual). Each card = a name + schedule/trigger badges. Composed from
 *  KDS surface + tokens; z-layered with slight rotation via <Scatter>. */

function Card({ title, badges }: { title: string; badges: { label: string; tone?: "warm" | "ochre" | "neutral" }[] }) {
  const toneStyle = (tone?: string) =>
    tone === "ochre"
      ? { color: "var(--highlight)", borderColor: "var(--highlight-soft)", background: "var(--highlight-soft)" }
      : tone === "warm"
        ? { color: "var(--ink-secondary)", borderColor: "var(--line)", background: "var(--surface-warm)" }
        : { color: "var(--ink-muted)", borderColor: "var(--line)", background: "var(--bg-subtle)" };
  return (
    <div className="w-[13.5rem] rounded-[var(--r-lg)] border border-line bg-surface p-3.5" style={{ boxShadow: "var(--shadow-md)" }}>
      <div className="font-display text-[var(--text-h3)] leading-tight text-ink">{title}</div>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {badges.map((b) => (
          <span key={b.label} className="inline-flex rounded-[var(--r-pill)] border px-2.5 py-1 font-sans text-[var(--text-micro)]" style={toneStyle(b.tone)}>{b.label}</span>
        ))}
      </div>
    </div>
  );
}

const items: ScatterItem[] = [
  // right-column cards sit on top so their left-edge titles aren't clipped by the left cards
  { id: "floor", x: 32, y: 16, rotate: -2.5, z: 2, node: <Card title="Floor Briefing" badges={[{ label: "Daily · 6am", tone: "ochre" }, { label: "shift priorities", tone: "warm" }]} /> },
  { id: "morning", x: 66, y: 40, rotate: 2, z: 4, node: <Card title="Morning Briefing" badges={[{ label: "Daily · 8am", tone: "ochre" }, { label: "revenue, ad spend", tone: "warm" }]} /> },
  { id: "util", x: 34, y: 64, rotate: 2.5, z: 1, node: <Card title="Utilization Report" badges={[{ label: "Weekly → billable hrs", tone: "ochre" }, { label: "margin alerts", tone: "warm" }]} /> },
  { id: "catalog", x: 67, y: 86, rotate: -2, z: 3, node: <Card title="Catalog Integrity" badges={[{ label: "Trigger: new SKU", tone: "ochre" }, { label: "ad copy", tone: "warm" }]} /> },
];

export default function AutomationScatter() {
  return <Scatter items={items} aspect="16 / 11" />;
}
