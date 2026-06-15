import type { Meta, StoryObj } from "@storybook/nextjs";
import { StatCard } from "@/components/StatCard";

/**
 * Vendored KDS molecule — composes Eyebrow + DeltaPill. Marketing usage: the
 * "proof" archetype (results / metrics). Numbers use Besley + tabular figures;
 * the delta trend is shown with an arrow + sign, never color alone (colorblind).
 * Hover lifts the card (warm shadow). Keep values real, not inflated.
 */
const meta = {
  title: "Components/Molecules/StatCard",
  component: StatCard,
  parameters: { layout: "centered" },
  args: { label: "Hours saved / week", value: "12.4", delta: "+18%", deltaTrend: "up", sub: "vs. last 30d" },
  argTypes: { deltaTrend: { control: "inline-radio", options: ["up", "down"] } },
  decorators: [(Story) => <div style={{ width: 240 }}><Story /></div>],
} satisfies Meta<typeof StatCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoDelta: Story = { args: { value: "40+", label: "Tools connected", delta: undefined, sub: "on day one" } };

export const Trio: Story = {
  decorators: [(Story) => <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 200px)", gap: 16 }}><Story /></div>],
  render: () => (
    <>
      <StatCard label="Hours saved / week" value="12.4" delta="+18%" deltaTrend="up" sub="per teammate" />
      <StatCard label="Answers reused" value="3,210" delta="+42%" deltaTrend="up" sub="vs. last 30d" />
      <StatCard label="Time to first value" value="1 day" delta="−60%" deltaTrend="down" sub="vs. legacy setup" />
    </>
  ),
};
