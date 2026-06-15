import { Badge } from "@/components/Badge";

function MiniFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[var(--r-lg)] border border-line bg-bg-subtle p-4" style={{ boxShadow: "var(--shadow-inner)" }}>
      {children}
    </div>
  );
}

export function ResearchMini() {
  return (
    <MiniFrame>
      <p className="font-sans text-[var(--text-small)] text-ink-secondary">
        “How did our retention change after the Q2 pricing update?”
      </p>
      <div className="mt-3 flex flex-col gap-1.5">
        {["Searching web + your Pins…", "Reading 6 sources", "Synthesizing with citations [1][2][3]"].map((s) => (
          <span key={s} className="font-sans text-[var(--text-micro)] text-ink-muted">→ {s}</span>
        ))}
      </div>
    </MiniFrame>
  );
}

export function HighlightMini() {
  return (
    <MiniFrame>
      <p className="font-sans text-[var(--text-small)] leading-relaxed text-ink-muted">
        The good answer arrives. The thread keeps going.{" "}
        <span className="rounded-[3px] bg-[var(--highlight-soft)] px-1 text-ink">Three days later you can&apos;t find it.</span>{" "}
        Save the line — it&apos;s a quotable card, tagged and searchable.
      </p>
      <div className="mt-3"><Badge label="Saved to Highlights" color="Neutral" /></div>
    </MiniFrame>
  );
}

export function AgentMini() {
  return (
    <MiniFrame>
      <p className="font-sans text-[var(--text-small)] text-ink-secondary">
        <span className="font-medium text-ink">@Legal Agent</span> review this MSA for red flags.
      </p>
      <div className="mt-3 rounded-[var(--r-md)] border border-line bg-surface p-3" style={{ boxShadow: "var(--shadow-sm)" }}>
        <span className="font-sans text-[var(--text-micro)] font-medium text-ink">Legal Agent</span>
        <p className="mt-1 font-sans text-[var(--text-micro)] text-ink-muted">Two clauses to flag: auto-renewal (§4.2) and liability cap (§9).</p>
      </div>
    </MiniFrame>
  );
}

const FOLDERS = ["Research", "Marketing", "Product specs", "Legal"];
export function FoldersMini() {
  return (
    <MiniFrame>
      <div className="flex flex-col gap-1.5">
        {FOLDERS.map((f) => (
          <div key={f} className="flex items-center justify-between rounded-[var(--r-sm)] border border-line bg-surface px-3 py-2" style={{ boxShadow: "var(--shadow-sm)" }}>
            <span className="font-sans text-[var(--text-small)] text-ink">{f}</span>
            <span className="font-sans text-[var(--text-micro)] text-ink-subtle">12 pins</span>
          </div>
        ))}
      </div>
    </MiniFrame>
  );
}
