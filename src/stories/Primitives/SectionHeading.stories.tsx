import type { Meta, StoryObj } from "@storybook/nextjs";
import SectionHeading from "@/components/sections/SectionHeading";

/** Eyebrow kicker + Besley headline + optional lead. The reusable section header —
 *  reveals its three parts in sequence (~60ms apart). Center or left aligned. */
const meta = {
  title: "Primitives/SectionHeading",
  component: SectionHeading,
  parameters: { layout: "padded" },
  argTypes: { align: { control: "inline-radio", options: ["center", "left"] } },
  args: {
    eyebrow: "How it works",
    title: "One Brain. A coordinated team of agents.",
    lead: "Souvenir brings your apps, scattered data, and daily workflows into a single operational layer.",
    align: "center",
  },
  decorators: [(Story) => <div style={{ padding: "48px 24px" }}><Story /></div>],
} satisfies Meta<typeof SectionHeading>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Centered: Story = {};
export const LeftAligned: Story = { args: { align: "left" } };
export const TitleOnly: Story = { args: { eyebrow: undefined, lead: undefined } };
