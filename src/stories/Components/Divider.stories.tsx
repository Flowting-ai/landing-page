import type { Meta, StoryObj } from "@storybook/nextjs";
import { Divider } from "@/components/Divider";

/**
 * Vendored KDS atom — a 1px warm rule (`--divider-color`). Marketing usage:
 * separating footer columns, list rows, or stacked meta. Pass `decorative`
 * when it's purely visual (hidden from assistive tech).
 */
const meta = {
  title: "Components/Atoms/Divider",
  component: Divider,
  parameters: { layout: "padded" },
  args: { orientation: "horizontal", decorative: true },
  argTypes: { orientation: { control: "inline-radio", options: ["horizontal", "vertical"] } },
} satisfies Meta<typeof Divider>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  decorators: [(Story) => <div style={{ width: 320, padding: 24 }}><Story /></div>],
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  decorators: [(Story) => <div style={{ height: 80, display: "flex", alignItems: "center", padding: 24 }}><span style={{ fontFamily: "var(--font-body)", color: "var(--ink-muted)" }}>A</span><Story /><span style={{ fontFamily: "var(--font-body)", color: "var(--ink-muted)" }}>B</span></div>],
};
