import type { Meta, StoryObj } from "@storybook/nextjs";
import ShowcaseFrame from "@/components/showcase/ShowcaseFrame";

/** The product "window" — embossed craft (outer --shadow-lg + inner highlight) with
 *  window chrome. Reserve it for the ONE hero proof per page, not every section. */
const meta = {
  title: "Primitives/ShowcaseFrame",
  component: ShowcaseFrame,
  parameters: { layout: "padded" },
  args: { title: "souvenir.app" },
  decorators: [(Story) => <div style={{ maxWidth: 720, margin: "0 auto", padding: 32 }}><Story /></div>],
} satisfies Meta<typeof ShowcaseFrame>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: 48, textAlign: "center", fontFamily: "var(--font-body)", color: "var(--ink-muted)" }}>
        Abstracted concept-visual goes here — not a dense product screenshot.
      </div>
    ),
  },
};
