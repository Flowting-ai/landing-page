import type { Meta, StoryObj } from "@storybook/nextjs";
import Visual from "@/components/sections/Visual";

/** The diorama frame for concept-visuals — shared warm backdrop, emboss, optional
 *  dashed-focus boundary, reserved aspect-ratio. Visual content (NodeMap / Scatter
 *  / Roster / Window) is composed inside it from KDS atoms. */
const meta = {
  title: "Primitives/Visual",
  component: Visual,
  parameters: { layout: "padded" },
  args: { surface: "warm", focus: false, padded: true },
  argTypes: { surface: { control: "inline-radio", options: ["warm", "panel", "bare"] }, focus: { control: "boolean" } },
  decorators: [(Story) => <div style={{ maxWidth: 720, margin: "0 auto", padding: 32 }}><Story /></div>],
} satisfies Meta<typeof Visual>;
export default meta;

type Story = StoryObj<typeof meta>;

const Placeholder = (
  <div style={{ display: "grid", placeItems: "center", minHeight: 220, fontFamily: "var(--font-body)", color: "var(--ink-muted)" }}>
    concept-visual content (NodeMap / Scatter / Roster / Window)
  </div>
);

export const Warm: Story = { args: { children: Placeholder } };
export const Panel: Story = { args: { surface: "panel", children: Placeholder } };
export const Focus: Story = { args: { focus: true, children: Placeholder } };
