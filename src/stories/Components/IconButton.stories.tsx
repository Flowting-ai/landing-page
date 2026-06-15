import type { Meta, StoryObj } from "@storybook/nextjs";
import { PlusSignIcon, ArrowRightOneIcon } from "@strange-huge/icons";
import { IconButton } from "@/components/IconButton";

/**
 * Vendored KDS atom (~3 live imports) — shares the Button's embossed interaction.
 * 5 variants × 3 sizes (md 36 / sm 32 / xs 24). Requires an accessible name
 * (`aria-label`). Marketing usage: carousel/nav controls, "add" affordances in
 * concept-visuals, the nav menu toggle. Interaction is locked KDS — don't restyle.
 */
const meta = {
  title: "Components/Atoms/IconButton",
  component: IconButton,
  parameters: { layout: "centered" },
  args: { "aria-label": "Add", icon: <PlusSignIcon size={18} />, variant: "default", size: "md" },
  argTypes: {
    variant: { control: "select", options: ["default", "secondary", "outline", "ghost", "ghost-2"] },
    size: { control: "inline-radio", options: ["md", "sm", "xs"] },
    loading: { control: "boolean" },
  },
} satisfies Meta<typeof IconButton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      {(["default", "secondary", "outline", "ghost", "ghost-2"] as const).map((v) => (
        <IconButton key={v} {...args} variant={v} aria-label={v} icon={<ArrowRightOneIcon size={18} />} />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      {(["md", "sm", "xs"] as const).map((s) => (
        <IconButton key={s} {...args} size={s} aria-label={`size ${s}`} />
      ))}
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <IconButton {...args} aria-label="default" />
      <IconButton {...args} aria-label="disabled" disabled />
      <IconButton {...args} aria-label="loading" loading />
    </div>
  ),
};
