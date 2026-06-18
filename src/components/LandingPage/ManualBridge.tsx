import { Avatar } from "@/components/Avatar";
import { ConnectorIcon } from "@strange-huge/icons/connectors";

/** Breaking (home §2, Figma #9) — "you are the manual bridge."
 *  A static, tokenized concept-visual (no motion — the hero owns the page's one
 *  signature). Eight apps ring a lone human hub and connect to NOTHING but You:
 *  every thin spoke routes through the person in the middle, and the one piece of
 *  context (the Q3 number) rests in your hand. The inverse of Relief's <NodeMap>
 *  (where the hub becomes the Brain). Pure server component — no client JS. */

const CX = 50, CY = 50;
const APPS: { id: string; x: number; y: number }[] = [
  { id: "slack",   x: 50,   y: 16   },
  { id: "linear",  x: 79,   y: 26   },
  { id: "notion",  x: 91,   y: 50   },
  { id: "stripe",  x: 79,   y: 74   },
  { id: "github",  x: 50,   y: 84   },
  { id: "figma",   x: 21,   y: 74   },
  { id: "gmail",   x: 9,    y: 50   },
  { id: "hubspot", x: 21,   y: 26   },
];

const appTile = (id: string) => (
  <span className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-line bg-surface" style={{ boxShadow: "var(--shadow-sm)" }}>
    <ConnectorIcon id={id} size={21} />
  </span>
);

const hubNode = (
  <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-surface" style={{ boxShadow: "var(--shadow-md)" }}>
    <span aria-hidden className="absolute inset-0 rounded-full" style={{ boxShadow: "0 0 0 1.5px var(--accent)" }} />
    <Avatar name="You" initials="Y" size="lg" color="var(--neutral-700)" />
  </span>
);

const chip = (
  <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-[var(--r-pill)] border border-line bg-surface px-2.5 py-1 font-sans text-[var(--text-micro)] text-ink-secondary" style={{ boxShadow: "var(--shadow-md)" }}>
    <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
    Q3 numbers
  </span>
);

export default function ManualBridge() {
  return (
    <>
      {/* desktop / tablet — the positioned constellation */}
      <div className="relative hidden md:block" style={{ aspectRatio: "16 / 10" }}>
        {/* spokes — every app routes through You; nothing connects app→app */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden className="absolute inset-0 h-full w-full" style={{ pointerEvents: "none" }}>
          {APPS.map((a) => (
            <line key={a.id} x1={a.x} y1={a.y} x2={CX} y2={CY} stroke="var(--neutral-300)" strokeWidth={1.25} vectorEffect="non-scaling-stroke" />
          ))}
        </svg>

        {APPS.map((a) => (
          <div key={a.id} className="absolute" style={{ left: `${a.x}%`, top: `${a.y}%`, transform: "translate(-50%, -50%)", zIndex: 1 }}>
            {appTile(a.id)}
          </div>
        ))}

        {/* the context, resting in your hand */}
        <div className="absolute" style={{ left: `${CX}%`, top: "36%", transform: "translate(-50%, -50%)", zIndex: 3 }}>
          {chip}
        </div>

        {/* the human hub */}
        <div className="absolute" style={{ left: `${CX}%`, top: `${CY}%`, transform: "translate(-50%, -50%)", zIndex: 2 }}>
          {hubNode}
          <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-sans text-[var(--text-micro)] font-medium text-ink-muted" style={{ top: "calc(100% + 7px)" }}>
            You
          </span>
        </div>
      </div>

      {/* mobile — static reflow: the apps funnel down through you */}
      <div className="flex flex-col items-center gap-4 md:hidden">
        <div className="flex max-w-[18rem] flex-wrap justify-center gap-2.5">
          {APPS.map((a) => (<div key={a.id}>{appTile(a.id)}</div>))}
        </div>
        <span aria-hidden className="h-6 w-px" style={{ backgroundColor: "var(--accent)" }} />
        <div className="flex flex-col items-center gap-2">
          {hubNode}
          <span className="font-sans text-[var(--text-micro)] font-medium text-ink-muted">You</span>
        </div>
        {chip}
      </div>
    </>
  );
}
