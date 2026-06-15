import type { Meta, StoryObj } from "@storybook/nextjs";
import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/kaya/Button";

/**
 * Vendored KDS molecule (Radix Tooltip) — slides 4px toward the trigger on open.
 * Marketing usage: clarifying an icon control or a stat's definition. Keep the
 * content terse; never hide essential info behind hover (mobile has no hover).
 */
const meta = {
  title: "Components/Molecules/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  args: { content: "Book a 20-min demo", side: "top", children: <Button variant="secondary">Hover me</Button> },
  argTypes: { side: { control: "inline-radio", options: ["top", "right", "bottom", "left"] } },
} satisfies Meta<typeof Tooltip>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Tooltip {...args} />,
};
