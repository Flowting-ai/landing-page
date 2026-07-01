import Link from "next/link";
import { flatNav } from "@/content/guides/nav";

/** Layout for prose/concept docs (Getting Started: What is Souvenir, How it's
 *  organized, Two ways to onboard). Same design language + on-this-page rail +
 *  prev/next as the step guides, but free-form content. Headings inside `children`
 *  marked with `data-toc data-toc-label="…"` feed the right rail. */

const ArrowR = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ArrowL = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function ProseDoc({
  slug,
  group = "Getting Started",
  eyebrow,
  title,
  lede,
  children,
}: {
  slug: string;          // nav slug, e.g. "getting-started/what-is-souvenir"
  group?: string;
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  children: React.ReactNode;
}) {
  const flat = flatNav();
  const i = flat.findIndex((x) => x.slug === slug);
  const prev = i > 0 ? flat[i - 1] : undefined;
  const next = i >= 0 && i < flat.length - 1 ? flat[i + 1] : undefined;

  return (
    <article className="py-10 sm:py-14">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 font-sans text-[length:var(--text-small)] text-ink-muted">
        <Link href="/guide" className="transition-colors hover:text-ink">Learning Guide</Link>
        <span aria-hidden>/</span><span>{group}</span>
      </nav>

      {/* Header */}
      <header className="mt-4">
        {eyebrow && (
          <span className="font-sans text-[length:var(--text-micro)] font-medium uppercase tracking-[0.12em] text-[color:var(--accent)]">{eyebrow}</span>
        )}
        <h1 className="guide-title mt-1.5 max-w-[20ch]">{title}</h1>
        {lede && (
          <p className="mt-5 max-w-[68ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-ink-muted">{lede}</p>
        )}
      </header>

      {/* Body */}
      <div className="mt-12 flex flex-col gap-12">{children}</div>

      {/* Prev / Next */}
      {(prev || next) && (
        <nav className="mt-16 grid gap-4 border-t border-line pt-6 sm:grid-cols-2" aria-label="Pagination">
          {prev ? (
            <Link href={prev.href ?? `/guide/${prev.slug}`} className="group flex items-center gap-3 rounded-[var(--r-xl)] border border-line bg-surface p-4 transition-colors hover:bg-surface-warm" style={{ boxShadow: "var(--shadow-sm)" }}>
              <span aria-hidden className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-bg text-ink-muted transition-transform group-hover:-translate-x-0.5 group-hover:text-ink"><ArrowL /></span>
              <span className="min-w-0"><span className="block font-sans text-[length:var(--text-micro)] text-ink-subtle">Previous</span><span className="block truncate font-sans text-[length:var(--text-small)] font-medium text-ink">{prev.label}</span></span>
            </Link>
          ) : <span className="hidden sm:block" />}
          {next && (
            <Link href={next.href ?? `/guide/${next.slug}`} className="group flex items-center justify-end gap-3 rounded-[var(--r-xl)] border border-line bg-surface p-4 text-right transition-colors hover:bg-surface-warm" style={{ boxShadow: "var(--shadow-sm)" }}>
              <span className="min-w-0"><span className="block font-sans text-[length:var(--text-micro)] text-ink-subtle">Next</span><span className="block truncate font-sans text-[length:var(--text-small)] font-medium text-ink">{next.label}</span></span>
              <span aria-hidden className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-bg text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-ink"><ArrowR /></span>
            </Link>
          )}
        </nav>
      )}
    </article>
  );
}
