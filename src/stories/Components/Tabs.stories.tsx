import type { Meta, StoryObj } from "@storybook/nextjs";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/Tabs";

/**
 * Vendored KDS molecule (Radix Tabs) — beige pill list + animated selected
 * indicator. Marketing usage: a feature switcher / product-area selector
 * (e.g. the Chatspace/Brain/Slack showcase tabs). General UI, not product-only.
 */
const meta = {
  title: "Components/Molecules/Tabs",
  component: Tabs,
  parameters: { layout: "padded" },
  decorators: [(Story) => <div style={{ maxWidth: 520, margin: "0 auto", padding: 24 }}><Story /></div>],
} satisfies Meta<typeof Tabs>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="chatspace">
      <TabsList>
        <TabsTrigger value="chatspace">Chatspace</TabsTrigger>
        <TabsTrigger value="brain">Brain</TabsTrigger>
        <TabsTrigger value="slack">Slack</TabsTrigger>
      </TabsList>
      <TabsContent value="chatspace">
        <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-muted)", marginTop: 16 }}>One place to think with every model and every tool.</p>
      </TabsContent>
      <TabsContent value="brain">
        <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-muted)", marginTop: 16 }}>A memory that compounds — the orchestrator for your agents.</p>
      </TabsContent>
      <TabsContent value="slack">
        <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-muted)", marginTop: 16 }}>Run the whole workforce from inside Slack.</p>
      </TabsContent>
    </Tabs>
  ),
};
