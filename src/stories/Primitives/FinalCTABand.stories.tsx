import type { Meta, StoryObj } from "@storybook/nextjs";
import FinalCTABand from "@/components/sections/FinalCTABand";

/** Dark final-CTA band with connector icons. Carries the signature mauve glow
 *  (`.glow-signature`) — the one accent moment on the page. Toggle the theme to
 *  see the glow follow mauve → ochre (it's built from `--accent`). */
const meta = {
  title: "Primitives/FinalCTABand",
  component: FinalCTABand,
  parameters: { layout: "fullscreen" },
  args: {
    title: "Your company's AI brain, in Slack.",
    body: "Connect your apps, keep your context, and put a coordinated team of agents to work.",
    primary: "Book a Demo",
    secondary: "Join Discord Community",
  },
} satisfies Meta<typeof FinalCTABand>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
