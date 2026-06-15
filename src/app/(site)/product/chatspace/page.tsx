import type { Metadata } from "next";
import ChatspaceHero from "@/components/ChatspacePage/ChatspaceHero";
import ChatspaceStats from "@/components/ChatspacePage/ChatspaceStats";
import FeatureSplit from "@/components/AIAgentsPage/FeatureSplit";
import FeaturePair from "@/components/ChatspacePage/FeaturePair";
import FinalCTABand from "@/components/sections/FinalCTABand";
import { CompareVisual, RoutingVisual } from "@/components/ChatspacePage/visuals";
import { ResearchMini, HighlightMini, AgentMini, FoldersMini } from "@/components/ChatspacePage/featureMinis";

export const metadata: Metadata = {
  title: "Unified Chatspace — Souvenir",
  description: "Every major AI model in one chat that remembers, researches, and compares. Auto-routing, pins, folders, and team sharing.",
};

export default function ChatspacePage() {
  return (
    <>
      <ChatspaceHero />
      <ChatspaceStats />
      <FeatureSplit
        eyebrow="The routing algorithm"
        title="Three models. One prompt. You pick the winner."
        body="Don't trust auto-routing on high-stakes work? Run the same prompt across three frontier models side by side — see the outputs in one view, and ship the answer that's actually best."
        visual={<CompareVisual />}
      />
      <FeatureSplit
        flip
        eyebrow="The routing algorithm"
        title="Reads your intent. Routes to the right model."
        body="You don't pick the model. The Chatspace reads what you're asking and routes the prompt — OpenAI, Anthropic, Gemini, or Mistral — based on the task, quality required, and cost. Same chat, different engines, no toggling."
        visual={<RoutingVisual />}
      />
      <FeaturePair cards={[
        { eyebrow: "Feature · Research mode", title: "Ask a real question. Get a researched answer.", body: "Souvenir runs research paths across the web, reads sources, and synthesizes one structured answer — with citations.", visual: <ResearchMini /> },
        { eyebrow: "Feature · Highlights", title: "Save the line. Quote it later.", body: "Highlight any line in any answer — it becomes a quotable card, tagged and searchable, ready when you need it.", visual: <HighlightMini /> },
      ]} />
      <FeaturePair cards={[
        { eyebrow: "Feature · @-mention agents", title: "Pull a specialist into the chat.", body: "Type @ and your Assistant joins the conversation. It reads what came before, does its part, and hands back the result.", visual: <AgentMini /> },
        { eyebrow: "Feature · Pins", title: "Memory that lasts. Organized into folders.", body: "Pins are persistent memory — brand voice, decisions, templates, customer workflows. Group them into folders. Every Assistant and Brain reads automatically when relevant.", visual: <FoldersMini /> },
      ]} />
      <FinalCTABand
        title="Stop re-teaching AI. Start compounding your work."
        body="One workspace where your memory, Assistants, and chats live together — across every major AI model."
      />
    </>
  );
}
