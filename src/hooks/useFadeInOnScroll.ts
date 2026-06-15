"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Fades an element in the first time it scrolls into view.
 * - Starts slightly translated on Y with 0 opacity
 * - Animates to full opacity and neutral Y
 * - Runs only once per element per page load
 */
export function useFadeInOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Initial hidden state
    gsap.set(el, { opacity: 0, y: 40 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}

