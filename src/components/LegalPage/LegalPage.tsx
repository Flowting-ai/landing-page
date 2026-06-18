import Container from "@/components/ui/Container";
import type { LegalDoc, LegalBlock } from "./data";

const num = (i: number) => String(i + 1).padStart(2, "0");
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function SectionBody({ body }: { body: string | LegalBlock[] }) {
  const blocks: LegalBlock[] = typeof body === "string" ? [body] : body;
  return (
    <div className="mt-3 flex flex-col gap-4">
      {blocks.map((b, i) => {
        if (typeof b === "string")
          return <p key={i} className="max-w-[70ch] font-sans text-[var(--text-body)] leading-relaxed text-ink-muted">{b}</p>;
        if ("subhead" in b)
          return <h3 key={i} className="font-display text-[length:var(--text-small)] font-semibold text-ink">{b.subhead}</h3>;
        return (
          <ul key={i} className="flex max-w-[70ch] list-disc flex-col gap-2 pl-5 font-sans text-[var(--text-body)] leading-relaxed text-ink-muted marker:text-ink-subtle">
            {b.list.map((li, j) => <li key={j} className="pl-1">{li}</li>)}
          </ul>
        );
      })}
    </div>
  );
}

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <section className="relative pt-16 sm:pt-24 pb-[var(--section-y)]">
      <Container>
        {/* header */}
        <span className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line bg-surface px-3.5 py-1.5 font-sans text-[var(--text-micro)] font-medium text-ink-muted" style={{ boxShadow: "var(--shadow-sm)" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-ink" /> {doc.eyebrow}
        </span>
        <h1 className="font-display mt-6 text-[length:var(--text-h1)] leading-[var(--text-h1--line-height)] tracking-[var(--text-h1--letter-spacing)] text-ink">{doc.title}</h1>
        <p className="mt-3 font-mono text-[var(--text-micro)] text-ink-subtle">Last updated {doc.updated}</p>
        <hr className="mt-8 border-line" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[240px_1fr]">
          {/* sticky TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28">
              <p className="font-mono text-[var(--text-micro)] uppercase tracking-[0.1em] text-ink-subtle">On this page</p>
              <ol className="mt-3 flex flex-col gap-2">
                {doc.sections.map((s, i) => (
                  <li key={s.title}>
                    <a href={`#${slugify(s.title)}`} className="font-sans text-[var(--text-small)] text-ink-muted transition-colors hover:text-ink">{num(i)} · {s.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
          {/* sections */}
          <div className="min-w-0 flex flex-col gap-10">
            {doc.sections.map((s, i) => (
              <section key={s.title} id={slugify(s.title)} className="scroll-mt-28">
                <h2 className="font-display text-[length:var(--text-h3)] text-ink">{num(i)} &nbsp; {s.title}</h2>
                <SectionBody body={s.body} />
              </section>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
