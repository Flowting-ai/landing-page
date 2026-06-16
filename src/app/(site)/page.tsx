import type { Metadata } from "next";
import LandingHero from "@/components/LandingPage/LandingHero";
import TwoWays from "@/components/LandingPage/TwoWays";
import Breaking from "@/components/LandingPage/Breaking";
import Turn from "@/components/LandingPage/Turn";
import FeatureSplit from "@/components/AIAgentsPage/FeatureSplit";
import Pillars from "@/components/LandingPage/Pillars";
import CategoryTable from "@/components/LandingPage/CategoryTable";
import FinalCTABand from "@/components/sections/FinalCTABand";
import { SlackWorkforceMap } from "@/components/SlackPage/visuals";

export const metadata: Metadata = {
  title: "Souvenir — All your apps unified into one AI Brain",
  description: "Souvenir unifies your disconnected tools into one intelligent workspace where a coordinated team of AI agents automate and execute real work across all your apps. Two ways to use it — for individuals and for teams.",
};

export default function Home() {
  return (
    <>
      <LandingHero />
      <Breaking />
      <Turn />
      <TwoWays />
      <FeatureSplit
        eyebrow="Intelligent context layer"
        title="Your knowledge, deeply understood. Acted on."
        body="Any tool can pull information from your apps. Souvenir goes further — the Brain develops a rich understanding of your knowledge and puts it to work. Our AI Assistants don't just tell you things. They execute real work."
        visual={<SlackWorkforceMap />}
      />
      <Pillars />
      <CategoryTable />
      <FinalCTABand
        title="One Brain. A coordinated team of agents."
        body="Souvenir brings your apps, scattered data, and daily workflows into a single operational layer — with a dedicated workforce of AI Assistants to run your work on autopilot."
      />
    </>
  );
}
