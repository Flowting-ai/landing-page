"use client";

import { ElementType, ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Scroll-reveal wrapper. The site's ONLY motion primitive for entrances:
 * a subtle fade + rise, once per element. Respects prefers-reduced-motion
 * (renders immediately, no transform). One focal reveal per section — not
 * decoration on everything.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  y = 24,
  className = "",
  children,
}: {
  as?: ElementType;
  delay?: number;
  y?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (reduce) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(el, { opacity: 0, y });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay,
              ease: "power3.out",
            });
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, y]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
