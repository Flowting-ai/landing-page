import Reveal from "@/components/ui/Reveal";

/** Reusable section header: eyebrow kicker + Besley headline + optional lead. */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "flex flex-col items-center text-center" : "flex flex-col items-start text-left"}>
      {eyebrow && (
        <Reveal>
          <span className="font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.14em] text-ink-subtle">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2 className="font-display mt-3 max-w-[20ch] text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] text-ink">
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.12}>
          <p className={`mt-4 max-w-[56ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-ink-muted ${isCenter ? "" : ""}`}>
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
