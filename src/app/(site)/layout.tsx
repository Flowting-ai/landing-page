import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import HeroBackdrop from "@/components/site/HeroBackdrop";

/**
 * Shared marketing shell. Every page in the (site) route group renders the
 * SAME nav + footer — guaranteeing a consistent navigation across all pages.
 * (Old legacy pages outside this group keep their own chrome until rebuilt.)
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    // `isolate` makes this a stacking context so the foliage's -z-10 sits ABOVE
    // the body's cream background (which would otherwise paint over it) yet behind
    // the nav + content. `relative` anchors the backdrop to the page top so it
    // spans behind the sticky translucent nav (which frosts the shadow through it).
    <div className="relative isolate">
      <HeroBackdrop />
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
