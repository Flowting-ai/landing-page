import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";
import Roster, { type RosterRow } from "@/components/sections/Roster";

/** #12 personas: persona cards with @handle + Private/Research badges; the middle
 *  one elevated with a description (the "live one"). Composed from KDS atoms. */

function PersonaRow({ name, handle, desc }: { name: string; handle: string; desc?: string }) {
  return (
    <div className="flex items-start gap-3">
      <Avatar name={name} size="md" color="var(--neutral-600)" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-display text-[var(--text-h3)] leading-none text-ink">{name}</span>
          <span className="font-mono text-[var(--text-micro)] text-ink-subtle">{handle}</span>
        </div>
        <div className="mt-1.5 flex items-center gap-1.5">
          <Badge label="Private" color="Neutral" />
          <Badge label="Research" color="Blue" />
        </div>
        {desc && <p className="mt-2 font-sans text-[var(--text-small)] text-ink-muted">{desc}</p>}
      </div>
    </div>
  );
}

const rows: RosterRow[] = [
  { id: "drafter", node: <PersonaRow name="Drafter" handle="@gimmey00" /> },
  {
    id: "scout",
    focused: true,
    node: <PersonaRow name="Scout" handle="@scout" desc="Pulls market data, competitor moves, and internal docs into a clean, decision-ready brief. No more 14 tabs and a half-read PDF." />,
  },
  { id: "handle", node: <PersonaRow name="Handle" handle="@handle" /> },
];

export default function PersonaRoster() {
  return <Roster rows={rows} />;
}
