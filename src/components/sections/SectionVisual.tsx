import Image from "next/image";

/**
 * The standard slot for a section's concept-visual when it's an EXPORTED ASSET
 * (an SVG/WebP made in Claude Design or image-gen, per the lean pipeline) rather
 * than a bespoke in-repo component. Drop it inside <Visual> like any other visual.
 *
 *   <Visual surface="warm"><SectionVisual src="/visuals/breaking.svg" alt="…" /></Visual>
 *
 * - Reserves a 16:10 box by default (no CLS) — override via `aspect`.
 * - Below-the-fold by default → lazy-loaded; pass `priority` only for above-fold.
 * - `alt` is required: write what the visual MEANS (it carries the section's idea).
 * Why a single slot: variety comes from the asset, not from re-engineering each
 * section — so a new section is place-and-verify, not invent-from-scratch.
 */
export default function SectionVisual({
  src,
  alt,
  aspect = "16 / 10",
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  aspect?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio: aspect }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 960px"
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="object-contain"
      />
    </div>
  );
}
