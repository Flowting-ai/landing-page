import { Briefcase, Brain, Plug } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";

const ITEMS = [
  { Icon: Briefcase, kicker: "One role, one job", title: "Each Assistant has a job description", body: "Give every agent a clear role — researcher, drafter, analyst. It knows what it owns and stays in its lane." },
  { Icon: Brain, kicker: "Memory out of the box", title: "Your context travels with every task", body: "Agents draw on your shared memory — past decisions, your stack, your customers — so nothing starts from zero." },
  { Icon: Plug, kicker: "Reads & writes your tools", title: "They read and write in your stack", body: "Connected to your apps, agents pull what they need and push results back where your team already works." },
];

export default function ThreeThings() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <SectionHeading eyebrow="What's a Souvenir Agent" title="Three things every Souvenir agent does well." />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {ITEMS.map(({ Icon, kicker, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="relative h-full rounded-[var(--r-xl)] bg-surface border border-line p-6" style={{ boxShadow: "var(--shadow-sm)" }}>
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
                <span className="flex h-11 w-11 items-center justify-center rounded-[var(--r-md)] bg-surface-warm border border-line text-ink"><Icon size={20} strokeWidth={1.75} /></span>
                <span className="mt-5 block font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.1em] text-ink-subtle">{kicker}</span>
                <h3 className="font-display mt-1.5 text-[length:var(--text-h3)] text-ink">{title}</h3>
                <p className="mt-2 font-sans text-[var(--text-body)] leading-relaxed text-ink-muted">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
