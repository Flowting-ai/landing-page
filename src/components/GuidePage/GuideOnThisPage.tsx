"use client";

import { useEffect, useState } from "react";

/** Right-rail "On this page" navigator (ElevenLabs/Stripe pattern): a vertical
 *  rail of anchors to the page's steps/sections, with scrollspy highlighting the
 *  active one as you scroll, click to jump. Reads the DOM (`[data-toc]` elements)
 *  so it stays decoupled from the content. Desktop-only (xl+); narrow screens use
 *  the left drawer. */

type Item = { id: string; label: string };

export default function GuideOnThisPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-toc]"));
    const list = els.map((el) => ({ id: el.id, label: el.dataset.tocLabel || el.textContent?.trim() || "" }));
    setItems(list);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // pick the topmost element currently intersecting near the top
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -65% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  if (items.length < 2) return null;

  return (
    <nav aria-label="On this page" className="flex flex-col">
      <span className="px-3 font-sans text-[length:var(--text-small)] text-ink-muted">On this page</span>
      <ul className="mt-3 flex flex-col">
        {items.map((it) => {
          const isActive = it.id === active;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                data-active={isActive}
                className="block border-l-2 border-line py-1.5 pl-3 font-sans text-[length:var(--text-small)] leading-snug text-ink-muted transition-colors hover:text-ink data-[active=true]:border-[color:var(--ink)] data-[active=true]:font-medium data-[active=true]:text-ink"
              >
                {it.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
