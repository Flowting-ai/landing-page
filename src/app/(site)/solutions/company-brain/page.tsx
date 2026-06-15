import type { Metadata } from "next";
import CompanyHero from "@/components/CompanyBrainPage/CompanyHero";
import BreakingStats from "@/components/CompanyBrainPage/BreakingStats";
import Comparison from "@/components/CompanyBrainPage/Comparison";
import CrewSection from "@/components/CompanyBrainPage/CrewSection";
import NativeIntegrations from "@/components/CompanyBrainPage/NativeIntegrations";
import ConnectorBand from "@/components/BrainPage/ConnectorBand";
import BrainSteps from "@/components/BrainPage/BrainSteps";
import FinalCTABand from "@/components/sections/FinalCTABand";

export const metadata: Metadata = {
  title: "Company Brain — Souvenir for Teams",
  description: "The autonomous company brain. One operational layer, a multi-agent workforce that lives in the Slack you already use — OAuth-authenticated, bidirectional, audit-logged across 250+ apps.",
};

export default function CompanyBrainPage() {
  return (
    <>
      <CompanyHero />
      <ConnectorBand />
      <BreakingStats />
      <BrainSteps />
      <Comparison
        intro="The real cost of AI sprawl isn't the subscriptions — it's the leaks, the lost context, and the hours your team burns as the integration layer."
        without={{
          title: "Data leaking. Context lost. Operations stalled.",
          items: [
            { t: "Employees using personal AI tools", b: "pasting customer data into ChatGPT, Claude, Gemini with zero audit trail." },
            { t: "Operational fragmentation", b: "your team copy-pasting between Shopify, Klaviyo, Gmail, Sheets all day." },
            { t: "“Pull this number for me”", b: "every report is a manual ask to the one person who knows the spreadsheet." },
            { t: "Tool sprawl", b: "separate seats for ChatGPT, Claude, Notion AI, Perplexity. Nothing talks to anything." },
            { t: "No multi-step automation", b: "your existing AI tools can read or write, but can't orchestrate." },
          ],
        }}
        withSouvenir={{
          title: "One operational layer. One workforce. Audit-logged.",
          items: [
            { t: "One billing relationship", b: "every AI interaction routes through Souvenir. Full audit trail, no rogue accounts." },
            { t: "Native integrations", b: "across 250+ apps — Souvenir reads, writes, and acts across your stack on its own." },
            { t: "Self-serve data in Slack", b: "any team member asks the manager and Souvenir answers in seconds." },
            { t: "One credit pool", b: "every major AI model auto-routed. No more separate subscriptions." },
            { t: "Multi-agent workforce", b: "specialist AI Assistants chain together to run multi-step operations end-to-end." },
          ],
        }}
      />
      <CrewSection />
      <NativeIntegrations />
      <FinalCTABand
        title="One brain. One workforce. One operational layer."
        body="OAuth-authenticated. Bidirectional. Audit-logged. No middleware. Deploy when you're ready."
      />
    </>
  );
}
