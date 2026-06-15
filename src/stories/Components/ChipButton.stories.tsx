import type { Meta, StoryObj } from "@storybook/nextjs";
import { CancelOneIcon, ArrowDownOneIcon } from "@strange-huge/icons";
import { ChipButton } from "@/components/ChipButton";

/**
 * Vendored KDS atom — the tiny icon button inside Chip (remove / expand). Two
 * box sizes (28px standard, 16px compact). Requires an `aria-label`. Documented
 * for completeness; in marketing it appears via Chip, rarely standalone.
 */
const meta = {
  title: "Components/Atoms/ChipButton",
  component: ChipButton,
  parameters: { layout: "centered" },
  args: { "aria-label": "Remove", icon: <CancelOneIcon size={20} />, size: "28px" },
  argTypes: { size: { control: "inline-radio", options: ["28px", "16px"] } },
} satisfies Meta<typeof ChipButton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
export const Compact: Story = { args: { size: "16px", icon: <CancelOneIcon size={14} /> } };
export const SpinOnHover: Story = {
  args: { "aria-label": "Open menu", icon: <ArrowDownOneIcon size={20} />, spinOnHover: true },
};
