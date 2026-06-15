import type { Metadata } from "next";
import AgentsHero from "@/components/AIAgentsPage/AgentsHero";
import ThreeThings from "@/components/AIAgentsPage/ThreeThings";
import AgentStats from "@/components/AIAgentsPage/AgentStats";
import FeatureSplit from "@/components/AIAgentsPage/FeatureSplit";
import BuildYourOwn from "@/components/AIAgentsPage/BuildYourOwn";
import AgentsFinalCTA from "@/components/AIAgentsPage/AgentsFinalCTA";
import { ModelPickerVisual, UsageVisual } from "@/components/AIAgentsPage/visuals";

export const metadata: Metadata = {
  title: "AI Assistants — Souvenir",
  description: "A team of specialized AI agents that know your context and do your work. Connected to your apps, grounded in shared memory.",
};

export default function AIAssistantsPage() {
  return (
    <>
      <AgentsHero />
      <ThreeThings />
      <AgentStats />
      <FeatureSplit
        eyebrow="Intelligent context layer"
        title="The best model for the job. Every time."
        body="OpenAI, Anthropic, Google Gemini, Mistral — Souvenir picks the model your Assistant runs on, or lets the Brain decide per task. When a new model ships, your Assistants get smarter without a re-build."
        visual={<ModelPickerVisual />}
      />
      <FeatureSplit
        flip
        eyebrow="Workspace controls"
        title="Share Assistants with your team. Track who uses what."
        body="Build an Assistant once, publish to your team's library. See usage, credit spend, and active users per Assistant, per role — governance without enterprise overhead."
        visual={<UsageVisual />}
      />
      <BuildYourOwn />
      <AgentsFinalCTA />
    </>
  );
}
