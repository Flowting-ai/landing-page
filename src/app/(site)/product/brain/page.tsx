import type { Metadata } from "next";
import BrainHero from "@/components/BrainPage/BrainHero";
import BrainStats from "@/components/BrainPage/BrainStats";
import ConnectorBand from "@/components/BrainPage/ConnectorBand";
import BrainSteps from "@/components/BrainPage/BrainSteps";
import RunModes from "@/components/BrainPage/RunModes";
import FeatureSplit from "@/components/AIAgentsPage/FeatureSplit";
import FinalCTABand from "@/components/sections/FinalCTABand";
import ClientOnly from "@/components/ui/ClientOnly";
import {
  BrainRunPanel,
  LearningTimeline,
  AgentChainVisual,
  SlackPlanVisual,
  ScheduleDashboard,
} from "@/components/BrainPage/visuals";

export const metadata: Metadata = {
  title: "Brain & Automation — Souvenir",
  description: "From intention to completed. Souvenir Brain decomposes tasks, builds a plan you approve, orchestrates your agents and connectors, and delivers completed work — on demand or on schedule, built and run right inside Slack.",
};

export default function BrainPage() {
  return (
    <>
      <BrainHero />
      <BrainStats />
      <FeatureSplit
        eyebrow="Anatomy of a Brain run"
        title="A goal in. An answer out. Everything in between, automatic."
        body="Brain doesn't take blind orders. It asks questions until the goal is clear, builds a plan you can approve, then executes — using your Assistants, your saved work, and the right model for each step."
        visual={<BrainRunPanel />}
      />
      <FeatureSplit
        flip
        eyebrow="Feature · Learning over time"
        title="Every run, a little smarter."
        body="Brain doesn't just execute — it learns about you. Every clarifying question you answer, every plan you approve, every edit you make becomes context for the next run."
        visual={<LearningTimeline />}
      />
      <ConnectorBand />
      <FeatureSplit
        eyebrow="Brain orchestration · Coordination"
        title="Coordinate multi-agent workflows."
        body="Brain connects specialized Assistants to complete multi-step tasks — activating each one at the right time and passing context seamlessly along the way."
        bullets={[
          { title: "Right agent, right step", body: "Brain delegates based on the role required" },
          { title: "Shared context", body: "every Assistant sees the output of the one before" },
          { title: "No manual handoffs", body: "Brain orchestrates the chain end-to-end" },
        ]}
        visual={<AgentChainVisual />}
      />
      <FeatureSplit
        flip
        eyebrow="Brain orchestration · Slack-native"
        title="Build & run Automations from Slack."
        body="Your team doesn't need to leave Slack. Create an Automation by describing it in a channel. Trigger any automation on demand. Get results back where the conversation already lives."
        bullets={[
          { title: "Spawn a Brain in chat", body: "describe the job, Brain self-builds the plan" },
          { title: "Run any automation on demand", body: "type /brain run and pick" },
          { title: "Approval gates in-channel", body: "sign off on writes without leaving Slack" },
        ]}
        visual={<ClientOnly minHeight={420}><SlackPlanVisual /></ClientOnly>}
      />
      <RunModes />
      <BrainSteps />
      <FeatureSplit
        eyebrow="The schedule view"
        title="Every workflow you've deployed. One dashboard."
        body="See what's running, what's queued, what last ran, and what's about to fire. Pause any workflow in one click. Edit its plan. Inspect every past run with a full audit trail."
        visual={<ScheduleDashboard />}
      />
      <FinalCTABand
        title="Tell it the goal. It handles the rest."
        body="Run it once. Or run it every Monday at 9am, forever. Either way — your operational work just stopped needing you."
      />
    </>
  );
}
