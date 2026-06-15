import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";
import { Badge } from "@/components/Badge";

export type CompareItem = { t: string; b: string };

function Column({ tag, tagColor, title, items, mark, markClass, highlight }: {
  tag: string; tagColor: "Red" | "Green"; title: string;
  items: CompareItem[]; mark: string; markClass: string; highlight?: boolean;
}) {
  return (
    <div className={"relative h-full rounded-[var(--r-2xl)] border p-6 sm:p-8 " + (highlight ? "border-line-strong bg-bg-subtle" : "border-line bg-surface")} style={{ boxShadow: "var(--shadow-sm)" }}>
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-2xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
      <Badge label={tag} color={tagColor} />
      <h3 className="font-display mt-4 max-w-[20ch] text-[length:var(--text-h3)] leading-snug text-ink">{title}</h3>
      <ul className="mt-6 flex flex-col gap-4">
        {items.map((it) => (
          <li key={it.t} className="flex items-start gap-3">
            <span className={"mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-sans text-[var(--text-micro)] " + markClass}>{mark}</span>
            <p className="font-sans text-[var(--text-small)] leading-relaxed text-ink-secondary">
              <span className="font-medium text-ink">{it.t}</span> — {it.b}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Comparison({
  eyebrow,
  title,
  intro,
  without,
  withSouvenir,
}: {
  eyebrow?: string;
  title?: string;
  intro: string;
  without: { title: string; items: CompareItem[] };
  withSouvenir: { title: string; items: CompareItem[] };
}) {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        {title && <div className="mb-6"><SectionHeading eyebrow={eyebrow} title={title} /></div>}
        <Reveal>
          <p className="mx-auto max-w-[62ch] text-center font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-ink-muted">
            {intro}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <Column tag="Without Souvenir" tagColor="Red" title={without.title} items={without.items} mark="✕" markClass="border border-line-strong text-ink-subtle" />
          </Reveal>
          <Reveal delay={0.1}>
            <Column tag="With Souvenir" tagColor="Green" title={withSouvenir.title} items={withSouvenir.items} mark="✓" markClass="bg-ink text-dark-ink" highlight />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
