import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";

/**
 * Shared marketing shell. Every page in the (site) route group renders the
 * SAME nav + footer — guaranteeing a consistent navigation across all pages.
 * (Old legacy pages outside this group keep their own chrome until rebuilt.)
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
