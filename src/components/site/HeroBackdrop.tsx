/**
 * Page-level foliage backdrop. Lives in the (site) layout ABOVE the nav in the
 * DOM and spans from the very top of the page (top-0) at `-z-10` — a true
 * background layer. Because it sits behind the translucent/blurred sticky nav,
 * the dappled "light through leaves" shadow shows THROUGH the nav (frosted),
 * then fades out via the radial mask before the hero content. This is why the
 * foliage couldn't reach behind the nav before: it was trapped inside the hero
 * <section> (which starts below the nav and clips with overflow-hidden).
 */
export default function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 mix-blend-multiply opacity-50"
      style={{
        height: "clamp(440px, 62vh, 720px)",
        backgroundImage: "url('/textures/foliage-shadow.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        filter: "contrast(1.15)",
        WebkitMaskImage: "radial-gradient(120% 88% at 50% 0%, #000 28%, transparent 78%)",
        maskImage: "radial-gradient(120% 88% at 50% 0%, #000 28%, transparent 78%)",
      }}
    />
  );
}
