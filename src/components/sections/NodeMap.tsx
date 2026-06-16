import { CSSProperties, ReactNode } from "react";

export interface MapNode {
  id: string;
  /** position as % of the map box (0–100) */
  x: number;
  y: number;
  node: ReactNode;
}
export interface MapEdge {
  from: string;
  to: string;
}

/**
 * Composed node-map: absolutely-positioned KDS nodes + an inline SVG edge layer
 * (pointer-events:none, behind the nodes) drawn in a fixed 0–100 viewBox so the
 * whole map scales with its container — no runtime measurement. Edges are soft
 * cubic curves; stroke is ink-neutral (`--line-strong`). Below `md` it reflows to
 * a vertical stack (edges dropped). See docs/solutions/design-patterns/concept-visuals.md.
 */
export default function NodeMap({
  nodes,
  edges = [],
  aspect = "16 / 10",
  className = "",
}: {
  nodes: MapNode[];
  edges?: MapEdge[];
  aspect?: string;
  className?: string;
}) {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const boxStyle: CSSProperties = { aspectRatio: aspect };

  return (
    <>
      {/* desktop / tablet — the positioned map */}
      <div className={`relative hidden md:block ${className}`} style={boxStyle}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden className="absolute inset-0 h-full w-full" style={{ pointerEvents: "none" }}>
          {edges.map((e, i) => {
            const a = byId[e.from];
            const b = byId[e.to];
            if (!a || !b) return null;
            const my = (a.y + b.y) / 2;
            // vertical-biased cubic bend (control points share x with endpoints)
            const d = `M ${a.x} ${a.y} C ${a.x} ${my}, ${b.x} ${my}, ${b.x} ${b.y}`;
            return <path key={i} d={d} fill="none" stroke="var(--line-strong)" strokeWidth={1.25} vectorEffect="non-scaling-stroke" />;
          })}
        </svg>
        {nodes.map((n) => (
          <div key={n.id} className="absolute" style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%, -50%)" }}>
            {n.node}
          </div>
        ))}
      </div>

      {/* mobile — reflow to a clean vertical stack (no edges) */}
      <div className={`flex flex-col items-center gap-3 md:hidden ${className}`}>
        {nodes.map((n) => (
          <div key={n.id}>{n.node}</div>
        ))}
      </div>
    </>
  );
}
