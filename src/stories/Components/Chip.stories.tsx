import type { Meta, StoryObj } from "@storybook/nextjs";
import { Chip } from "@/components/Chip";

/**
 * Vendored KDS atom. Two sizes with different jobs:
 *  - **Medium** — animated persona chip (hover swaps the left icon → × remove);
 *    used in ChatInput-style mocks. Always the Blue token set.
 *  - **Small** — compact colored tag (7 colors), always shows ×.
 * Marketing usage: persona/tool tags in the Chatspace & Slack concept-visuals.
 * Color is decorative; the label carries meaning (colorblind-safe).
 */
const meta = {
  title: "Components/Atoms/Chip",
  component: Chip,
  parameters: { layout: "centered" },
  args: { label: "Souvenir", size: "Medium" },
  argTypes: {
    size: { control: "inline-radio", options: ["Medium", "Small"] },
    color: { control: "select", options: ["Blue", "Red", "Green", "Yellow", "Purple", "Brown", "Neutral"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Chip>;
export default meta;

type Story = StoryObj<typeof meta>;

export const MediumPersona: Story = { args: { size: "Medium", label: "Product Designer", onRemove: () => {} } };

export const SmallTags: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["Blue", "Purple", "Green", "Yellow"] as const).map((c) => (
        <Chip key={c} size="Small" color={c} label={c} onRemove={() => {}} />
      ))}
    </div>
  ),
};

export const Disabled: Story = { args: { size: "Medium", label: "Add tag", disabled: true } };
