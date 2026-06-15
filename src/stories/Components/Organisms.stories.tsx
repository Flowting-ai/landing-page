import type { Meta, StoryObj } from "@storybook/nextjs";
import ClientOnly from "@/components/ui/ClientOnly";
import PersonaDashboard from "@/components/AIAgentsPage/PersonaDashboard";
import ChatPinVisual from "@/components/ChatspacePage/ChatPinVisual";
import CommandGrid from "@/components/SlackPage/CommandGrid";
import { OrchestrationMap } from "@/components/BrainPage/visuals";
import { SlackWorkforceMap } from "@/components/SlackPage/visuals";
import { UsageVisual } from "@/components/AIAgentsPage/visuals";

/**
 * Organisms = the bespoke marketing concept-visuals already built in the pages.
 * They are assembled ENTIRELY from the documented atoms (Avatar, Badge,
 * MessageBubble, StatCard) inside a ShowcaseFrame — the "make it tangible, one
 * abstracted visual per section" rule made concrete. Self-contained (no props),
 * so they're shown verbatim. Visuals using MessageBubble are wrapped in
 * <ClientOnly> (canvas text-measure on mount).
 */
const meta = {
  title: "Components/Organisms",
  parameters: { layout: "fullscreen" },
  decorators: [(Story) => <div style={{ maxWidth: 980, margin: "0 auto", padding: "48px 24px" }}><Story /></div>],
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

/** AI Agents — persona roster built from Avatar + Badge. */
export const PersonaDashboard_: Story = { name: "PersonaDashboard", render: () => <PersonaDashboard /> };

/** Chatspace — pinning a message to the Brain (uses MessageBubble → ClientOnly). */
export const ChatPinVisual_: Story = {
  name: "ChatPinVisual",
  render: () => <ClientOnly><ChatPinVisual /></ClientOnly>,
};

/** Slack — the @Souvenir command grid. */
export const CommandGrid_: Story = { name: "CommandGrid", render: () => <CommandGrid /> };

/** Brain — the orchestration concept map (MessageBubble → ClientOnly). */
export const OrchestrationMap_: Story = {
  name: "OrchestrationMap",
  render: () => <ClientOnly><OrchestrationMap /></ClientOnly>,
};

/** Slack — the workforce map (Avatar + Badge). */
export const SlackWorkforceMap_: Story = { name: "SlackWorkforceMap", render: () => <SlackWorkforceMap /> };

/** AI Agents — usage panel built from StatCard. */
export const UsageVisual_: Story = { name: "UsageVisual", render: () => <UsageVisual /> };
