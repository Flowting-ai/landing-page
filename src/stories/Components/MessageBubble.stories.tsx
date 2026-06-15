import type { Meta, StoryObj } from "@storybook/nextjs";
import { MessageBubble } from "@/components/MessageBubble";
import ClientOnly from "@/components/ui/ClientOnly";

/**
 * Vendored KDS organism-ish atom (~3 live imports) — the real chat bubble, used
 * inside marketing concept-visuals (Chatspace/Brain mocks) to show the product
 * truthfully. **Must be wrapped in `<ClientOnly>`** (it canvas-measures text on
 * mount; SSR mismatch otherwise). Uses the inherited KDS body ramp — not the
 * marketing type tier — because it's a product surface.
 */
const meta = {
  title: "Components/Atoms/MessageBubble",
  component: MessageBubble,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <ClientOnly>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
          <Story />
        </div>
      </ClientOnly>
    ),
  ],
  args: { role: "assistant", content: "I pulled the Q3 numbers from the Brain and drafted the summary — want me to post it to #leadership?" },
  argTypes: { role: { control: "inline-radio", options: ["user", "assistant"] } },
} satisfies Meta<typeof MessageBubble>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Assistant: Story = {};

export const User: Story = { args: { role: "user", content: "Summarize this week's launch thread." } };

export const Conversation: Story = {
  render: () => (
    <>
      <MessageBubble role="user" content="Summarize this week's launch thread." />
      <MessageBubble role="assistant" content="Done — 3 decisions, 2 open questions, and the ship date held. I saved it to the Brain so the next person doesn't have to re-read 80 messages." timestamp="just now" />
    </>
  ),
};
