import type { Metadata } from "next";
import SlackHero from "@/components/SlackPage/SlackHero";
import CommandGrid from "@/components/SlackPage/CommandGrid";
import TriSection from "@/components/SlackPage/TriSection";
import FeatureSplit from "@/components/AIAgentsPage/FeatureSplit";
import FinalCTABand from "@/components/sections/FinalCTABand";
import { SlackConvoPanel } from "@/components/SlackPage/visuals";

export const metadata: Metadata = {
  title: "Slack Manager — Souvenir",
  description: "Your team already lives in Slack — now your agent workforce does too. Mention @Souvenir in any channel, assign a goal, and a coordinated team of AI agents executes complex work in the background.",
};

export default function SlackManagerPage() {
  return (
    <>
      <SlackHero />
      <FeatureSplit
        flip
        eyebrow="A real conversation"
        title="What it looks like in your Slack."
        body="No new dashboard. No new tab. Just @ Souvenir like you'd @ a teammate — and watch the workforce execute."
        visual={<SlackConvoPanel />}
      />
      <CommandGrid />
      <TriSection
        eyebrow="Where the Master lives"
        title="Every channel. Every DM. Wherever you work."
        lead="The Master shows up wherever you @ it. Public, private, group, or one-on-one — same agent, same memory."
        cards={[
          { kicker: "Public channels", title: "# growth-team", mono: true, body: "Team-wide work. Everyone sees the thread. Great for client reports, weekly digests, cross-functional asks." },
          { kicker: "Private channels", title: "# exec-strategy", mono: true, body: "Sensitive work stays sensitive. Access controls follow Slack's existing channel permissions. Nothing leaks." },
          { kicker: "Direct messages", title: "1:1 with @Souvenir", mono: true, body: "Your own personal AI workspace. Triage your inbox, draft replies, schedule meetings — quietly, just for you." },
        ]}
      />
      <TriSection
        eyebrow="The full stack"
        title="Slack Master is the front door. Here's what's behind it."
        cards={[
          { kicker: "The Engine", title: "The Brain", body: "The orchestrator the Master delegates to. Plans the work, picks the model, and decides which agent does which step." },
          { kicker: "The Workforce", title: "Specialist Agents", body: "The hands that ship the work. Writer, Analyst, Researcher, Inbox, Scheduler, Drive — each one a specialist." },
          { kicker: "The Workforce", title: "Chat & Saved work", body: "The web chatspace for deeper work. Multi-model chat, Pins, Projects — where you build the memory the Master uses." },
        ]}
      />
      <FinalCTABand
        title="Hire your first AI co-worker. They start today."
        body="Install in 30 seconds. Mention in 30 more. Ship work by lunch. No card, no commitment, no consultant required."
      />
    </>
  );
}
