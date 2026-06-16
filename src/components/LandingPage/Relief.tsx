import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Badge } from "@/components/Badge";
import Visual from "@/components/sections/Visual";
import NodeMap, { type MapNode, type MapEdge } from "@/components/sections/NodeMap";
import { ConnectorIcon } from "@strange-huge/icons/connectors";

/** Relief (home.md §3, Figma #10): the calm after the chaos — connectors flow
 *  into the Brain, which coordinates the agents. Built with the <NodeMap>
 *  archetype. Valid ConnectorIcon ids only (others render blank). */

const CONNECTORS = ["slack", "gmail", "notion", "hubspot", "stripe", "linear"];

const connectorNode = (id: string) => (
  <span className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-line bg-surface" style={{ boxShadow: "var(--shadow-sm)" }}>
    <ConnectorIcon id={id} size={19} />
  </span>
);
const chip = (label: string) => (
  <span className="inline-flex items-center rounded-[var(--r-pill)] border border-line bg-surface px-3.5 py-2 font-sans text-[var(--text-small)] text-ink-secondary" style={{ boxShadow: "var(--shadow-sm)" }}>{label}</span>
);
const hub = (
  <span className="inline-flex items-center rounded-[var(--r-pill)] border border-line-strong bg-surface px-4 py-2 font-sans text-[var(--text-small)] font-semibold text-ink" style={{ boxShadow: "var(--shadow-md)" }}>900+ Connectors</span>
);
const brain = (
  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ink font-display text-[20px] text-dark-ink" style={{ boxShadow: "var(--shadow-lg)" }}>S</span>
);

const nodes: MapNode[] = [
  ...CONNECTORS.map((c, i) => ({ id: c, x: 10 + i * 16, y: 12, node: connectorNode(c) })),
  { id: "hub", x: 50, y: 38, node: hub },
  { id: "brain", x: 50, y: 62, node: brain },
  { id: "ag1", x: 22, y: 88, node: chip("Ad Copywriter") },
  { id: "ag2", x: 50, y: 92, node: chip("Customer Quote Drafter") },
  { id: "ag3", x: 80, y: 88, node: chip("Email & SMS Lifecycle") },
];
const edges: MapEdge[] = [
  ...CONNECTORS.map((c) => ({ from: c, to: "hub" })),
  { from: "hub", to: "brain" },
  { from: "brain", to: "ag1" }, { from: "brain", to: "ag2" }, { from: "brain", to: "ag3" },
];

export default function Relief() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <div className="flex flex-col items-start text-left">
          <Reveal><Badge label="With Souvenir" color="Green" /></Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-4 max-w-[24ch] text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] text-ink text-balance">
              One workspace. Coordinated Assistants. <em className="italic text-ink-muted">The Brain remembers everything.</em>
            </h2>
          </Reveal>
        </div>
        <div className="mt-12">
          <Visual surface="warm">
            <NodeMap nodes={nodes} edges={edges} aspect="16 / 10" />
          </Visual>
        </div>
      </Container>
    </section>
  );
}
