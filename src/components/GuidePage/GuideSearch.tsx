"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { GlobalSearchModal, type SearchResult } from "@/components/GlobalSearchModal";

type Step = { num: string; title: string; body: string };
type Entry = { slug: string; title: string; lede: string; steps: Step[] };

/** ⌘K search for the Learning Guide — uses the REAL Kaya `GlobalSearchModal`
 *  (vendored from may-day, adapted to guide/step types). This component is the
 *  controller: owns open state, lazy-loads the prebuilt index, filters on query,
 *  maps hits to KDS SearchResults, and deep-links to /guide/<slug>#step-N. */
export default function GuideSearch() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState<Entry[] | null>(null);
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen((v) => !v); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open && !index) fetch("/guides/search-index.json").then((r) => r.json()).then(setIndex).catch(() => setIndex([]));
  }, [open, index]);

  const onQuery = useCallback((q: string) => {
    const query = q.trim().toLowerCase();
    if (!query || !index) { setResults([]); return; }
    const out: SearchResult[] = [];
    for (const g of index) {
      if (g.title.toLowerCase().includes(query) || g.lede.toLowerCase().includes(query)) {
        out.push({ id: g.slug, type: "guide", title: g.title, subtitle: g.lede });
      }
      for (const s of g.steps) {
        if (s.title.toLowerCase().includes(query) || s.body.toLowerCase().includes(query)) {
          out.push({ id: `${g.slug}::${s.num}`, type: "step", title: s.title, subtitle: g.title, meta: `Step ${s.num}` });
        }
      }
    }
    setResults(out.slice(0, 20));
  }, [index]);

  const onSelect = useCallback((r: SearchResult) => {
    setOpen(false);
    const [slug, stepNum] = r.id.split("::");
    router.push(`/guide/${slug}${stepNum ? `#step-${stepNum}` : ""}`);
  }, [router]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center gap-2 rounded-[var(--r-md)] border border-line bg-surface px-3 py-2 font-sans text-[length:var(--text-small)] text-ink-muted transition-colors hover:border-line-strong hover:text-ink-secondary"
      >
        <Search size={15} className="shrink-0" />
        <span className="flex-1 text-left">Search guides</span>
        <kbd className="rounded-[5px] border border-line bg-bg px-1.5 py-0.5 font-sans text-[length:var(--text-micro)] text-ink-subtle">⌘K</kbd>
      </button>

      <GlobalSearchModal
        open={open}
        onClose={() => setOpen(false)}
        onQuery={onQuery}
        onSelect={onSelect}
        results={results}
      />
    </>
  );
}
