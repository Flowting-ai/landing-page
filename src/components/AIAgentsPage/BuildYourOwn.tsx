import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";

const PILLARS = [
  { n: "01", title: "Start from a template — or a blank slate", body: "Pick a pre-built template for Sales, Legal, Research, Content or Marketing. Or start blank and shape the role from scratch." },
  { n: "02", title: "Define the role. Pick the model.", body: "Write the instruction in plain English — the job description for your Assistant. Souvenir routes it to the model that fits." },
  { n: "03", title: "A name. An avatar. A personality.", body: "Profiles matter when your team uses ten Assistants daily. A clear face and name means anyone spots the right one fast." },
  { n: "04", title: "Feed it knowledge it should remember", body: "Upload files, link Drive folders, paste URLs. Your Assistant retrieves the relevant context the moment it needs it." },
  { n: "05", title: "Pick the apps it can reach", body: "Connect Gmail, Drive, Shopify, Klaviyo, Slack, Notion and more — read and write, through approval gates or not." },
  { n: "06", title: "Decide who else gets to use it", body: "Build once, publish to your team's library. See usage, credit spend, and active users across every Assistant." },
];

export default function BuildYourOwn() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <SectionHeading eyebrow="Beyond the library" title="Or build your own — no code, no prompt engineering." lead="Start from a template, fork an existing Assistant, or build from scratch. Give it a role, attach connectors, point it at the Pins it should consume, and ship." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={(i % 3) * 0.08}>
              <div className="relative h-full rounded-[var(--r-xl)] bg-surface border border-line p-6" style={{ boxShadow: "var(--shadow-sm)" }}>
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
                <span className="font-mono text-[var(--text-micro)] text-ink-subtle">{p.n}</span>
                <h3 className="font-display mt-2 text-[length:var(--text-h3)] text-ink">{p.title}</h3>
                <p className="mt-2 font-sans text-[var(--text-body)] leading-relaxed text-ink-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
