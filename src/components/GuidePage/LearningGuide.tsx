import Link from "next/link";
import type { Guide } from "@/lib/guides";
import { navEntry, siblings, nextGuides } from "@/content/guides/nav";
import { getGuide } from "@/lib/guides";
import CopyPageButton from "@/components/GuidePage/CopyPageButton";
import GuideHelpful from "@/components/GuidePage/GuideHelpful";
import GuideScreenshot from "@/components/GuidePage/GuideScreenshot";
import SupademoEmbed from "@/components/GuidePage/SupademoEmbed";

/** Supademo-backed guide page: live interactive demo at the top, then the written
 *  walkthrough below (numbered instructions from the demo's hotspots + the
 *  hotlinked, always-fresh Supademo screenshots). Design language matches the docs
 *  (full-width shell provided by GuideShell). */

const ArrowR = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ArrowL = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;

/** Short on-this-page label: drop the leading filler clause ("To begin,", "Next up,"…)
 *  from a step instruction and cap to a handful of words. */
const FILLER = /^(first(ly)?( up| off| of all)?|next( up)?|then|now|after(wards)?( that)?|following (this|that)|to (begin|get started|wrap up|end)( off)?|start by|as (the|a) (last|final|first) step)[,:]?\s+/i;
function tocLabel(text: string): string {
  const t = text.replace(FILLER, "").trim();
  const cap = t.charAt(0).toUpperCase() + t.slice(1);
  const words = cap.split(/\s+/);
  return words.slice(0, 6).join(" ") + (words.length > 6 ? "…" : "");
}

function toMarkdown(g: Guide): string {
  const lines = [`# ${g.title}`, ""];
  if (g.overview) lines.push(g.overview, "");
  lines.push(`Interactive demo: https://app.supademo.com/demo/${g.supademoId}`, "");
  g.steps.forEach((s) => lines.push(`${s.num}. ${s.text}`));
  return lines.join("\n");
}

export default function LearningGuide({ guide }: { guide: Guide }) {
  const entry = navEntry(guide.slug);
  const { prev, next } = siblings(guide.slug);
  const upNext = nextGuides(guide.slug, 3).map((n) => ({ ...n, g: getGuide(n.slug) })).filter((n) => n.g);

  return (
    <article className="py-10 sm:py-14">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 font-sans text-[length:var(--text-small)] text-ink-muted">
        <Link href="/guide" className="transition-colors hover:text-ink">Learning Guide</Link>
        {entry && <><span aria-hidden>/</span><span>{entry.group}</span></>}
      </nav>

      {/* Header */}
      <header className="mt-5">
        <div className="flex items-start justify-between gap-6">
          <h1 className="guide-title max-w-[20ch]">{guide.title}</h1>
          <div className="hidden shrink-0 pt-1 sm:block"><CopyPageButton markdown={toMarkdown(guide)} /></div>
        </div>
        {guide.overview && <p className="guide-lead mt-6">{guide.overview}</p>}
      </header>

      {/* Live interactive demo */}
      <section className="mt-14">
        <SupademoEmbed demoId={guide.supademoId} title={guide.title} aspect={guide.aspect} />
      </section>

      {/* Written walkthrough */}
      {guide.steps.length > 0 && (
        <section className="mt-20">
          <h2 id="walkthrough" data-toc data-toc-label="Walkthrough" className="guide-h2">Step-by-step</h2>
          <p className="mt-3 max-w-[64ch] font-sans text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-ink-muted">
            Prefer to scan? Here&rsquo;s the same flow, step by step.
          </p>
          <ol className="mt-10 flex flex-col gap-16">
            {guide.steps.map((s) => (
              <li key={s.num} id={`step-${s.num}`} data-toc data-toc-label={tocLabel(s.text)} className="scroll-mt-28">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-surface font-sans text-[length:var(--text-small)] font-semibold tabular-nums text-ink" style={{ boxShadow: "var(--shadow-sm)" }}>
                    {s.num}
                  </span>
                  <p className="guide-body min-w-0 font-sans text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-ink-secondary">{s.text}</p>
                </div>
                {s.image && (
                  <figure className="mt-6 sm:pl-[calc(1.75rem+1rem)]">
                    <GuideScreenshot src={s.image} alt={s.text} hotspot={s.hotspot} />
                  </figure>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Next steps */}
      {upNext.length > 0 && (
        <section className="mt-20">
          <h2 id="next-steps" data-toc data-toc-label="Next steps" className="guide-h2">Next steps</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {upNext.map((n) => (
              <Link key={n.slug} href={n.href ?? `/guide/${n.slug}`} className="group flex flex-col rounded-[var(--r-xl)] border border-line bg-surface p-5 transition-shadow hover:shadow-[var(--shadow-md)]" style={{ boxShadow: "var(--shadow-sm)" }}>
                <span className="font-sans text-[length:var(--text-micro)] font-medium uppercase tracking-[0.12em] text-ink-subtle">{n.group}</span>
                <span className="guide-h3 mt-1.5">{n.g!.title}</span>
                {n.g!.overview && <span className="mt-2 line-clamp-2 font-sans text-[length:var(--text-small)] leading-[var(--text-small--line-height)] text-ink-muted">{n.g!.overview}</span>}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Was this helpful? */}
      <div className="mt-16 border-t border-line pt-6"><GuideHelpful slug={guide.slug} /></div>

      {/* Prev / Next */}
      {(prev || next) && (
        <nav className="mt-6 grid gap-4 sm:grid-cols-2" aria-label="Guide pagination">
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
