import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";
import PersonalHero from "@/components/PersonalPage/PersonalHero";
import Comparison from "@/components/CompanyBrainPage/Comparison";
import FeatureSplit from "@/components/AIAgentsPage/FeatureSplit";
import FinalCTABand from "@/components/sections/FinalCTABand";
import { PinsBoard, AgentRosterGrid, AutomationCard, ModelPickerVisual } from "@/components/PersonalPage/visuals";

export const metadata: Metadata = {
  title: "Souvenir for Individuals — Your personal AI OS",
  description: "Your personal AI operating system. Souvenir connects your disconnected apps, automates tasks across them, and saves your AI work forever — one workspace, coordinated Assistants, a Brain that remembers everything.",
};

export default function IndividualsPage() {
  return (
    <>
      <PersonalHero />
      <Comparison
        eyebrow="The shift"
        title="Why Souvenir?"
        intro="The cost of running everything across disconnected apps adds up — in hours, in lost context, in re-explaining yourself to every new chat."
        without={{
          title: "Data leaking. Context lost. Operations stalled.",
          items: [
            { t: "Re-explaining context", b: "to every new ChatGPT chat — your voice, your tone, your project brief." },
            { t: "Notes spread", b: "across Notion, Apple Notes, Drive, voice memos — you can never find that one good idea." },
            { t: "Manually copy-pasting", b: "between Gmail, Sheets, ChatGPT, Claude — you're the integration layer." },
            { t: "Repeat work", b: "every week — the same newsletter, the same invoices, the same drafts." },
            { t: "Locked into one AI model", b: "paying for ChatGPT Plus and Claude Pro and Perplexity separately." },
          ],
        }}
        withSouvenir={{
          title: "One workspace. Coordinated Assistants. Saved forever.",
          items: [
            { t: "Pinned context", b: "your voice, your projects, your decisions are saved once and pulled into every chat." },
            { t: "One searchable workspace", b: "notes, files, voice memos, web bookmarks all unified." },
            { t: "Auto-connected apps", b: "Souvenir reads from Gmail, Drive, Notion, Calendar so you don't have to." },
            { t: "Brains on autopilot", b: "your weekly newsletter, monthly invoices, daily triage run on their own." },
            { t: "Multi-agent workforce", b: "one chat, auto-routed to the best model per task, billed as one credit pool." },
          ],
        }}
      />
      <section className="py-[var(--section-y)]">
        <Container>
          <SectionHeading eyebrow="Save it. Find it." title="Your knowledge, organized." lead="Save any chat output as a Pin. Sort into folders. Surface in any future conversation." />
          <Reveal delay={0.14}><div className="mx-auto mt-12 max-w-4xl"><PinsBoard /></div></Reveal>
        </Container>
      </section>
      <section className="py-[var(--section-y)]">
        <Container>
          <SectionHeading eyebrow="A workforce built for one" title="Personal team of AI Agents" lead="The cost of running everything across disconnected apps adds up. So put a specialist on each job — each one in your voice, grounded in your saved work." />
          <Reveal delay={0.14}><div className="mt-12"><AgentRosterGrid /></div></Reveal>
        </Container>
      </section>
      <FeatureSplit
        eyebrow="Brain & Automation"
        title="Set it once. Runs forever."
        body="Schedule tasks to run on their own — your weekly newsletter, monthly invoices, daily inbox triage. Output lands where you want it, without you lifting a finger."
        visual={<AutomationCard />}
      />
      <FeatureSplit
        flip
        eyebrow="Every major AI model"
        title="Souvenir picks. You don't think about it."
        body="Same chat, different models. Choose which model you want — or have Souvenir autoroute each of your queries to the best model for the task."
        visual={<ModelPickerVisual />}
      />
      <FinalCTABand
        title="Stop re-teaching AI. Start compounding your work."
        body="Your personal AI operating system — one unified workspace where your disconnected apps come together and your tasks run themselves."
      />
    </>
  );
}
