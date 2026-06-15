import type { Meta, StoryObj } from "@storybook/nextjs";
import { Badge } from "@/components/Badge";

/**
 * Vendored KDS atom — the most-used in the marketing build (~22 live imports).
 * Small embossed tag with 7 color variants. Marketing usage: feature labels,
 * "New" / plan tags, category chips on cards. Color is decorative — the label
 * text always carries the meaning (colorblind-safe), so never a bare color dot.
 */
const meta = {
  title: "Components/Atoms/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  args: { label: "New", color: "Blue" },
  argTypes: {
    color: { control: "select", options: ["Blue", "Red", "Green", "Yellow", "Purple", "Brown", "Neutral"] },
  },
} satisfies Meta<typeof Badge>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
      {(["Blue", "Red", "Green", "Yellow", "Purple", "Brown", "Neutral"] as const).map((c) => (
        <Badge key={c} color={c} label={c} />
      ))}
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center", fontFamily: "var(--font-title)", fontSize: "var(--text-h3)", color: "var(--ink)" }}>
      Company Brain <Badge color="Purple" label="Beta" />
    </div>
  ),
};
