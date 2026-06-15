import { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export type FeatureBullet = { title: string; body: string };

/** Reusable split: copy on one side, visual on the other. Optional check-bullets. */
export default function FeatureSplit({
  eyebrow,
  title,
  body,
  visual,
  bullets,
  flip = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  visual: ReactNode;
  bullets?: FeatureBullet[];
  flip?: boolean;
}) {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className={flip ? "lg:order-2" : ""}>
            <Reveal><span className="font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.14em] text-ink-subtle">{eyebrow}</span></Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-3 max-w-[16ch] text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] text-ink">{title}</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[52ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-ink-muted">{body}</p>
            </Reveal>
            {bullets && bullets.length > 0 && (
              <Reveal delay={0.18}>
                <ul className="mt-7 flex flex-col gap-4">
                  {bullets.map((b) => (
                    <li key={b.title} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink font-sans text-[var(--text-micro)] text-dark-ink">✓</span>
                      <p className="font-sans text-[var(--text-body)] leading-relaxed text-ink-secondary">
                        <span className="font-medium text-ink">{b.title}</span> — {b.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>
          <Reveal delay={0.15} className={"min-w-0 " + (flip ? "lg:order-1" : "")}>{visual}</Reveal>
        </div>
      </Container>
    </section>
  );
}
