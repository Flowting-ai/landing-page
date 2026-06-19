// Google Analytics 4 — shared config + helpers.
// The measurement ID is overridable per-environment via NEXT_PUBLIC_GA_ID and
// falls back to the production property. GA only runs in production so local dev
// and preview builds never pollute the analytics property.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-ZLCFW0RLZJ";
export const GA_ENABLED = process.env.NODE_ENV === "production" && Boolean(GA_ID);

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Fire a GA4 page_view manually (used on client-side route changes). */
export function pageview(url: string) {
  if (!GA_ENABLED || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: url,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** Fire a named GA4 event, e.g. trackEvent("book_demo_click", { location: "hero" }). */
export function trackEvent(name: string, params: GtagParams = {}) {
  if (!GA_ENABLED || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}
