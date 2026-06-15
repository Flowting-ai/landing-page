import { Badge } from "@/components/Badge";
import ShowcaseFrame from "@/components/showcase/ShowcaseFrame";

const COMPARE = [
  { model: "GPT-5.1", tag: "Reasoning", note: "Structured, thorough. Best for step-by-step." },
  { model: "Claude Opus 4.8", tag: "Deep", note: "Nuanced, careful. Best for long context.", win: true },
  { model: "Gemini 2.5", tag: "Fast", note: "Quick, concise. Best for first drafts." },
];

/** "Three models, one prompt" — 3-column compare. */
export function CompareVisual() {
  return (
    <ShowcaseFrame title="souvenir · compare">
      <div className="grid grid-cols-1 gap-2.5 p-5 sm:grid-cols-3 sm:p-6">
        {COMPARE.map((c) => (
          <div key={c.model} className={"flex flex-col gap-2 rounded-[var(--r-md)] border p-3 " + (c.win ? "border-line-strong bg-bg-subtle" : "border-line bg-surface")} style={{ boxShadow: "var(--shadow-sm)" }}>
            <div className="flex items-center justify-between">
              <span className="font-sans text-[var(--text-small)] font-semibold text-ink">{c.model}</span>
              {c.win && <Badge label="Winner" color="Green" />}
            </div>
            <Badge label={c.tag} color="Neutral" />
            <p className="font-sans text-[var(--text-micro)] leading-snug text-ink-muted">{c.note}</p>
          </div>
        ))}
      </div>
    </ShowcaseFrame>
  );
}

const ROUTES = [
  { name: "Souvenir Muse", desc: "Everyday tasks. Fast, balanced.", on: false },
  { name: "Advanced", desc: "Hard problems. Deep reasoning.", on: true },
];
const MODES = ["All", "Text", "Code", "Image", "Audio"];

/** "Reads your intent" — Muse / Advanced model selector. */
export function RoutingVisual() {
  return (
    <ShowcaseFrame title="souvenir · model router">
      <div className="flex flex-col gap-3 p-5 sm:p-6">
        <div className="grid grid-cols-2 gap-2.5">
          {ROUTES.map((r) => (
            <div key={r.name} className={"flex flex-col gap-1 rounded-[var(--r-md)] border p-3 " + (r.on ? "border-line-strong bg-bg-subtle" : "border-line bg-surface")} style={{ boxShadow: "var(--shadow-sm)" }}>
              <div className="flex items-center justify-between">
                <span className="font-sans text-[var(--text-small)] font-semibold text-ink">{r.name}</span>
                {r.on && <span className="h-2 w-2 rounded-full bg-ink" />}
              </div>
              <span className="font-sans text-[var(--text-micro)] text-ink-muted">{r.desc}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {MODES.map((m, i) => <Badge key={m} label={m} color="Neutral" />)}
        </div>
        <div className="rounded-[var(--r-md)] border border-line bg-surface px-3.5 py-3 font-sans text-[var(--text-small)] text-ink-muted" style={{ boxShadow: "var(--shadow-sm)" }}>
          GPT-5.1 (Codex mini) · auto-selected
        </div>
      </div>
    </ShowcaseFrame>
  );
}
