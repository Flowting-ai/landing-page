import type { Meta, StoryObj } from "@storybook/nextjs";
import Scatter, { type ScatterItem } from "@/components/sections/Scatter";
import Visual from "@/components/sections/Visual";

/** Z-layered offset cards (the #13 automations / #9 chaos pattern). Toggle
 *  `assemble` to see the signature scatter→settle (reload to replay). Reflows to
 *  a stack on mobile. Shown inside the <Visual> diorama. */
const meta = {
  title: "Primitives/Scatter",
  component: Scatter,
  parameters: { layout: "padded" },
  args: { assemble: true, items: [] }, // render story supplies its own items
  argTypes: { assemble: { control: "boolean" } },
  decorators: [(Story) => <div style={{ maxWidth: 760, margin: "0 auto", padding: 32 }}><Story /></div>],
} satisfies Meta<typeof Scatter>;
export default meta;

type Story = StoryObj<typeof meta>;

const card = (title: string, badge: string) => (
  <div className="w-[260px] rounded-[var(--r-xl)] border border-line bg-surface p-4" style={{ boxShadow: "var(--shadow-md)" }}>
    <div className="font-display text-[length:var(--text-h3)] text-ink">{title}</div>
    <span className="mt-2 inline-flex rounded-[var(--r-pill)] border border-line bg-bg-subtle px-2.5 py-1 font-sans text-[var(--text-micro)] text-ink-muted">{badge}</span>
  </div>
);

const items: ScatterItem[] = [
  { id: "a", x: 32, y: 28, rotate: -3, z: 1, node: card("Floor Briefing", "Daily · 6am") },
  { id: "b", x: 64, y: 40, rotate: 2, z: 3, node: card("Morning Briefing", "Daily · 8am") },
  { id: "c", x: 30, y: 62, rotate: 3, z: 2, node: card("Utilization Report", "Weekly") },
  { id: "d", x: 66, y: 74, rotate: -2, z: 4, node: card("Catalog Integrity", "Trigger: new SKU") },
];

export const Automations: Story = {
  render: (args) => (
    <Visual surface="warm">
      <Scatter {...args} items={items} aspect="16 / 11" />
    </Visual>
  ),
};
