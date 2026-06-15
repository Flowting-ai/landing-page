import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";
import { CommandChip } from "./visuals";

const CARDS = [
  { title: "Delegate a task", cmd: "draft a follow-up email to the prospect we met yesterday", body: "The Master hands it to the Brain, which routes to Writer + Inbox. You get a draft to approve." },
  { title: "Ask a question", cmd: "what did Sarah and I agree on last week about the launch date?", body: "Master pulls from your conversation memory + Pins. Answers in-thread without leaving Slack." },
  { title: "Find a file", cmd: "find the SCS pitch deck from last quarter", body: "Drive agent does semantic search across your Google Drive. Returns the file inline." },
  { title: "Schedule something", cmd: "book a 30-min sync with the design team on Friday afternoon", body: "Master reads everyone's calendar, finds the slot, sends the invite — all in-thread." },
  { title: "Trigger a saved Brain", cmd: "run the weekly competitor scan", body: "Master kicks off a previously saved flow. The whole agent sequence runs autonomously." },
  { title: "Brainstorm together", cmd: "help me brainstorm names for the new product line", body: "Brain auto-routes to the best model for creative work. Conversation continues in-thread." },
];

export default function CommandGrid() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <SectionHeading
          eyebrow="Talk like a teammate"
          title="No syntax to learn. Just type what you want."
          lead="The Master Agent understands natural language. Mention it like you would any colleague — short or long, formal or casual."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.08}>
              <div className="relative flex h-full flex-col rounded-[var(--r-xl)] border border-line bg-surface p-6" style={{ boxShadow: "var(--shadow-sm)" }}>
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
                <h3 className="font-display text-[length:var(--text-h3)] text-ink">{c.title}</h3>
                <div className="mt-3"><CommandChip>{c.cmd}</CommandChip></div>
                <p className="mt-3 font-sans text-[var(--text-body)] leading-relaxed text-ink-muted">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
