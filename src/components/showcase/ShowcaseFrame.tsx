import { ReactNode } from "react";

/**
 * A product "window" frame with KDS embossed craft: outer shadow + 1px ring
 * (in --shadow-lg) plus an inner-highlight overlay span. Houses the showcase
 * panels. Looser/larger than in-product chrome — this is marketing.
 */
export default function ShowcaseFrame({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      className="relative rounded-[var(--r-2xl)] bg-surface p-2.5"
      style={{ boxShadow: "var(--shadow-lg)" }}
    >
      {/* inner highlight (emboss) */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[var(--r-2xl)]"
        style={{ boxShadow: "var(--shadow-inner)" }}
      />
      {/* window chrome */}
      <div className="flex items-center gap-1.5 px-3 pt-2 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="ml-3 font-sans text-[var(--text-micro)] text-ink-subtle">{title}</span>
      </div>
      <div className="relative rounded-[var(--r-xl)] bg-bg-subtle border border-line overflow-hidden">
        {children}
      </div>
    </div>
  );
}
