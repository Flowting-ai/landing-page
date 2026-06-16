import { ElementType, ReactNode } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

/**
 * The editorial composition primitive — the Antimetal/Linear grammar (numbered
 * eyebrow → Besley headline → one tight support line), rebuilt in Souvenir tokens
 * on the warm canvas. EVERY marketing section inherits its rhythm + header from
 * here so the page reads as one composed system, not eight re-decided paddings.
 *
 * - Rhythm comes from --section-y* tokens (sm / md / lg) — never ad-hoc padding.
 * - `index` renders the Antimetal-style "01" label; `eyebrow` is the caps kicker
 *   (mauve accent). Headline uses --text-display by default; the hero overrides
 *   to --text-hero.
 * - `align` defaults to left (editorial); pass "center" for symmetric beats.
 */
export default function Section({
  as: Tag = "section",
  index,
  eyebrow,
  title,
  lead,
  align = "left",
  size = "md",
  wide = false,
  children,
  className = "",
  id,
}: {
  as?: ElementType;
  index?: string;
  eyebrow?: string;
  title?: ReactNode;
  lead?: string;
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
  wide?: boolean;
  children?: ReactNode;
  className?: string;
  id?: string;
}) {
  const padY = size === "lg" ? "var(--section-y-lg)" : size === "sm" ? "var(--section-y-sm)" : "var(--section-y)";
  const isCenter = align === "center";
  const hasHeader = index || eyebrow || title || lead;

  return (
    <Tag id={id} className={className} style={{ paddingBlock: padY }}>
      <Container wide={wide}>
        {hasHeader && (
          <div className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"}`}>
            {(index || eyebrow) && (
              <Reveal>
                <span className="flex items-center gap-2.5 font-sans text-[length:var(--text-micro)] font-medium uppercase tracking-[0.14em]">
                  {index && <span className="font-mono text-ink-subtle tabular-nums">{index}</span>}
                  {index && eyebrow && <span aria-hidden className="h-px w-6 bg-line-strong" />}
                  {eyebrow && <span className="text-[color:var(--accent)]">{eyebrow}</span>}
                </span>
              </Reveal>
            )}
            {title && (
              <Reveal delay={0.06}>
                <h2 className="font-display mt-4 max-w-[20ch] text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] text-ink text-balance">
                  {title}
                </h2>
              </Reveal>
            )}
            {lead && (
              <Reveal delay={0.12}>
                <p className={`mt-5 max-w-[58ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-ink-muted ${isCenter ? "mx-auto" : ""}`}>
                  {lead}
                </p>
              </Reveal>
            )}
          </div>
        )}
        {children && <div className={hasHeader ? "mt-12 sm:mt-16" : ""}>{children}</div>}
      </Container>
    </Tag>
  );
}
