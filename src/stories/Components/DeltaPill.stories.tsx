import type { Meta, StoryObj } from "@storybook/nextjs";
import { DeltaPill } from "@/components/DeltaPill";

/**
 * Vendored KDS atom — a Green/Red tag with an arrow icon (wraps Chip Small).
 * Composed inside StatCard, but reusable standalone. Marketing usage: trend
 * deltas on proof/metrics. Crucially the **arrow + sign** carry the direction,
 * not color alone (colorblind-safe). Pre-format the value string yourself.
 */
const meta = {
  title: "Components/Atoms/DeltaPill",
  component: DeltaPill,
  parameters: { layout: "centered" },
  args: { trend: "up", value: "+18%" },
  argTypes: { trend: { control: "inline-radio", options: ["up", "down"] } },
} satisfies Meta<typeof DeltaPill>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Up: Story = {};
export const Down: Story = { args: { trend: "down", value: "−0.3%" } };
export const Pair: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 10 }}>
      <DeltaPill trend="up" value="+42%" />
      <DeltaPill trend="down" value="−60%" />
    </div>
  ),
};
