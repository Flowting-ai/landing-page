import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/kaya/Button";
import { DEMO_URL } from "@/lib/links";
import { ConnectorIcon } from "@strange-huge/icons/connectors";
import TrackCTA from "@/components/analytics/TrackCTA";

const CONNECTORS = ["slack", "figma", "notion", "gmail", "linear", "stripe", "github", "hubspot"];

/** Shared dark final-CTA band with connector icons. Used across product pages.
 *  `appGrid` (Home close, Figma #16) swaps the connector row for a faded
 *  full-bleed app-icon grid backdrop behind the band content. */
export default function FinalCTABand({
  title,
  body,
  primary = "Book a Demo",
  secondary = "Join Discord Community",
  primaryHref = DEMO_URL,
  secondaryHref = "#discord",
  appGrid = false,
}: {
  title: string;
  body: string;
  primary?: string;
  secondary?: string;
  primaryHref?: string;
  secondaryHref?: string;
  appGrid?: boolean;
}) {
  const primaryExternal = /^https?:/.test(primaryHref);
  const secondaryExternal = /^https?:/.test(secondaryHref);
  return (
    <section className="px-[var(--gutter)] py-[var(--section-y)]">
      <Container wide>
        <div className="relative overflow-hidden rounded-[var(--r-2xl)] bg-dark-bg px-6 py-16 sm:px-10 sm:py-20">
          {appGrid ? (
            // faded app-icon grid backdrop — masked to dissolve toward the centre
            // so the headline stays legible (valid ConnectorIcon ids only).
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.14]"
              style={{
                WebkitMaskImage: "radial-gradient(120% 75% at 50% 50%, transparent 28%, #000 85%)",
                maskImage: "radial-gradient(120% 75% at 50% 50%, transparent 28%, #000 85%)",
              }}
            >
              <div className="grid h-full grid-cols-5 place-items-center gap-3 p-3 sm:grid-cols-8">
                {Array.from({ length: 32 }).map((_, i) => (
                  <span key={i} className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[var(--dark-line)] bg-[var(--dark-surface)]">
                    <ConnectorIcon id={CONNECTORS[i % CONNECTORS.length]} size={20} />
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="dotgrid-dark pointer-events-none absolute inset-0 opacity-60" />
          )}
          <div className="glow-signature pointer-events-none absolute left-1/2 top-0 h-[360px] w-[560px] -translate-x-1/2 opacity-40" />
          <div className="relative flex flex-col items-center text-center">
            <Reveal>
              <div className="relative mx-auto mb-7 h-14 w-14 sm:h-16 sm:w-16">
                <Image
                  src="/visuals/souvenir-gold.webp"
                  alt="Souvenir"
                  fill
                  sizes="64px"
                  className="object-contain drop-shadow-[var(--shadow-md)]"
                  priority={false}
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display max-w-[20ch] text-[length:var(--text-h1)] leading-[var(--text-h1--line-height)] tracking-[var(--text-h1--letter-spacing)] text-dark-ink">{title}</h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 max-w-[54ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-dark-ink-muted">{body}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-col sm:flex-row items-center gap-3" style={{ ["--font-size-body" as string]: "16px", ["--line-height-body" as string]: "24px" }}>
                <TrackCTA event="book_demo_click" params={{ location: "final_cta_band" }}>
                  <a href={primaryHref} target={primaryExternal ? "_blank" : undefined} rel={primaryExternal ? "noreferrer" : undefined} className="inline-flex">
                    <Button variant="default" size="md" className="px-7 py-3">{primary}</Button>
                  </a>
                </TrackCTA>
                <TrackCTA event="discord_click" params={{ location: "final_cta_band" }}>
                  <a href={secondaryHref} target={secondaryExternal ? "_blank" : undefined} rel={secondaryExternal ? "noreferrer" : undefined} className="inline-flex h-[3.25rem] items-center rounded-[var(--r-pill)] border border-[var(--dark-line)] px-7 font-sans text-[var(--text-body)] font-medium text-dark-ink transition-colors hover:bg-[var(--dark-surface)]">{secondary}</a>
                </TrackCTA>
              </div>
            </Reveal>
            {!appGrid && (
              <Reveal delay={0.26}>
                <div className="mt-12 w-full max-w-[34rem] border-t border-[var(--dark-line)] pt-7">
                  <p className="mb-4 font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.14em] text-dark-ink-muted">
                    One brain across your stack
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
                    {CONNECTORS.map((c) => (
                      <span
                        key={c}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--r-md)] border border-[var(--dark-line)] bg-[var(--dark-surface)]"
                      >
                        <ConnectorIcon id={c} size={20} />
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
