import type { Meta, StoryObj } from "@storybook/nextjs";
import NodeMap, { type MapNode, type MapEdge } from "@/components/sections/NodeMap";
import Visual from "@/components/sections/Visual";
import { ConnectorIcon } from "@strange-huge/icons/connectors";

/** Composed node-map (SVG edges + positioned KDS nodes, %-coords, responsive,
 *  reflows to a stack on mobile). Shown inside the <Visual> diorama frame —
 *  the pattern for the #10 connectors→Brain→agents and #11 Slack visuals. */
const meta = {
  title: "Primitives/NodeMap",
  component: NodeMap,
  parameters: { layout: "padded" },
  args: { nodes: [] }, // render stories supply their own data; satisfies the required prop
  decorators: [(Story) => <div style={{ maxWidth: 760, margin: "0 auto", padding: 32 }}><Story /></div>],
} satisfies Meta<typeof NodeMap>;
export default meta;

type Story = StoryObj<typeof meta>;

const chip = (label: string) => (
  <span className="inline-flex items-center rounded-[var(--r-pill)] border border-line bg-surface px-3 py-1.5 font-sans text-[var(--text-small)] text-ink-secondary" style={{ boxShadow: "var(--shadow-sm)" }}>{label}</span>
);
const connector = (id: string) => (
  <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-line bg-surface" style={{ boxShadow: "var(--shadow-sm)" }}><ConnectorIcon id={id} size={18} /></span>
);
const brain = (
  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink font-display text-[18px] text-dark-ink" style={{ boxShadow: "var(--shadow-lg)" }}>S</span>
);

const nodes: MapNode[] = [
  { id: "slack", x: 18, y: 14, node: connector("slack") },
  { id: "gmail", x: 40, y: 8, node: connector("gmail") },
  { id: "notion", x: 62, y: 8, node: connector("notion") },
  { id: "github", x: 84, y: 14, node: connector("github") },
  { id: "hub", x: 50, y: 40, node: chip("900+ Connectors") },
  { id: "brain", x: 50, y: 62, node: brain },
  { id: "a1", x: 24, y: 88, node: chip("Ad Copywriter") },
  { id: "a2", x: 52, y: 92, node: chip("Quote Drafter") },
  { id: "a3", x: 80, y: 88, node: chip("Email & SMS") },
];
const edges: MapEdge[] = [
  { from: "slack", to: "hub" }, { from: "gmail", to: "hub" }, { from: "notion", to: "hub" }, { from: "github", to: "hub" },
  { from: "hub", to: "brain" },
  { from: "brain", to: "a1" }, { from: "brain", to: "a2" }, { from: "brain", to: "a3" },
];

export const ConnectorsToBrain: Story = {
  render: () => (
    <Visual surface="warm">
      <NodeMap nodes={nodes} edges={edges} aspect="16 / 11" />
    </Visual>
  ),
};
