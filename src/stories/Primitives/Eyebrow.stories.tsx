import type { Meta, StoryObj } from "@storybook/nextjs";
import { Eyebrow } from "@/components/Eyebrow";

/** Small muted label above headings / stat cards. KDS caption style + muted ink. */
const meta = {
  title: "Primitives/Eyebrow",
  component: Eyebrow,
  parameters: { layout: "centered" },
  args: { children: "Design system" },
} satisfies Meta<typeof Eyebrow>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
