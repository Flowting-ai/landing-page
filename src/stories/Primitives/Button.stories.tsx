import type { Meta, StoryObj } from "@storybook/nextjs";
import { ConnectorIcon } from "@strange-huge/icons/connectors";
import { Button } from "@/components/kaya/Button";

/**
 * The canonical CTA — the **vendored** `@/components/kaya/Button`. Its interaction is
 * locked, byte-for-byte Kaya: squircle corners, emboss shadows, corrosion hover glow,
 * press `scale(0.98)`, ink focus ring, timings. Do NOT restyle any of that.
 *
 * Marketing uses it as-is. Sizing today is `md` / `sm` (both product-compact). A larger,
 * more generous marketing `lg` size is a *proposed* additive size variant (geometry only —
 * padding / font-size / min-height — reusing the exact same interaction, driven by
 * marketing.css tokens) that should be **upstreamed into KDS** rather than forked here.
 * Not added in this session pending sign-off.
 */
const meta = {
  title: "Primitives/Button (CTA)",
  component: Button,
  parameters: { layout: "centered" },
  args: { children: "Book a Demo" },
  argTypes: {
    variant: { control: "select", options: ["default", "secondary", "outline", "ghost", "danger"] },
    size: { control: "inline-radio", options: ["md", "sm"] },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    fluid: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { variant: "default", size: "md" } };

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
      <Button {...args} variant="default">Default</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="danger">Danger</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button {...args} size="md">Medium (md)</Button>
      <Button {...args} size="sm">Small (sm)</Button>
    </div>
  ),
};

/** default · disabled · loading. Hover, focus (keyboard), and press(scale 0.98) are
 *  live — interact with the canvas to see them. All six states are part of the system. */
export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
      <Button {...args}>Default</Button>
      <Button {...args} disabled>Disabled</Button>
      <Button {...args} loading>Loading</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
      <Button {...args} leftIcon={<ConnectorIcon id="slack" size={16} />}>Connect Slack</Button>
      <Button {...args} variant="secondary" rightIcon={<ConnectorIcon id="notion" size={16} />}>Open in Notion</Button>
    </div>
  ),
};
