import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";
import ShowcaseFrame from "@/components/showcase/ShowcaseFrame";

const PERSONAS = [
  { name: "PDF Writer", initials: "PW", tags: ["Docs", "Research"] },
  { name: "Ad Copywriter", initials: "AC", tags: ["Marketing"] },
  { name: "Inventory Analyst", initials: "IA", tags: ["Ops", "Data"] },
  { name: "CX Helper", initials: "CX", tags: ["Support"] },
  { name: "Email & SMS Writer", initials: "ES", tags: ["Marketing"] },
  { name: "Recruiter", initials: "RC", tags: ["People"] },
];

/** AI Agents hero visual: a Persona library dashboard built from real Avatar + Badge. */
export default function PersonaDashboard() {
  return (
    <ShowcaseFrame title="souvenir · personas">
      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-sans text-[var(--text-small)] font-semibold text-ink">Persona</span>
            <span className="flex gap-1">
              <Badge label="My Personas" color="Neutral" />
            </span>
          </div>
          <Badge label="+ New persona" color="Neutral" />
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {PERSONAS.map((p) => (
            <div key={p.name} className="flex flex-col gap-2 rounded-[var(--r-md)] border border-line bg-surface p-3" style={{ boxShadow: "var(--shadow-sm)" }}>
              <div className="flex items-center gap-2.5">
                <Avatar name={p.name} initials={p.initials} size="md" color="var(--neutral-700)" />
                <span className="font-sans text-[var(--text-small)] font-semibold text-ink">{p.name}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => <Badge key={t} label={t} color="Neutral" />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ShowcaseFrame>
  );
}
