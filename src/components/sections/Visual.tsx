import { CSSProperties, ReactNode } from "react";

/**
 * The diorama frame every concept-visual sits in (sibling to <Section>). Provides
 * the shared warm backdrop, padding, emboss, optional dashed-focus boundary, and a
 * reserved aspect-ratio so visuals share depth + responsive behavior instead of
 * each re-deciding it. Build the visual content (NodeMap / Scatter / Roster /
 * Window) inside it from KDS atoms — see docs/solutions/design-patterns/concept-visuals.md.
 */
export default function Visual({
  children,
  surface = "warm",
  focus = false,
  padded = true,
  bgImage,
  bgOpacity = 0.5,
  aspect,
  className = "",
}: {
  children: ReactNode;
  /** warm = tan diorama panel · panel = white surface · bare = transparent */
  surface?: "warm" | "panel" | "bare";
  /** dashed "this is the live one" boundary (Figma selection motif) */
  focus?: boolean;
  padded?: boolean;
  /** a texture/wash (e.g. the gold damask) rendered CLIPPED inside the panel box */
  bgImage?: string;
  bgOpacity?: number;
  /** e.g. "16 / 10" — reserve space to prevent layout shift */
  aspect?: string;
  className?: string;
}) {
  const bg =
    surface === "panel" ? "var(--surface)" : surface === "bare" ? "transparent" : "var(--surface-warm)";

  const style: CSSProperties = {
    backgroundColor: bg,
    // warm panels gain a subtle radial depth — brighter toward upper-center so the focal
    // element lifts off the surface; fades back to the flat warm tone at the edges.
    ...(surface === "warm"
      ? { backgroundImage: "radial-gradient(118% 92% at 50% 38%, color-mix(in oklch, var(--surface-warm) 72%, white) 0%, var(--surface-warm) 68%)" }
      : {}),
    ...(surface !== "bare" ? { boxShadow: "var(--shadow-sm)" } : {}),
    ...(aspect ? { aspectRatio: aspect } : {}),
  };

  return (
    <div
      className={`relative overflow-hidden rounded-[var(--r-2xl)] ${padded ? "p-6 sm:p-10" : ""} ${className}`}
      style={style}
    >
      {/* texture wash — clipped to the panel (overflow-hidden), faded via a radial mask */}
      {bgImage && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: bgOpacity,
            maskImage: "radial-gradient(92% 88% at 50% 42%, black 0%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(92% 88% at 50% 42%, black 0%, transparent 90%)",
          }}
        />
      )}
      {/* emboss — top highlight + warm bottom line, like every KDS surface */}
      {surface !== "bare" && (
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-2xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
      )}
      {/* optional dashed-focus boundary (ink, not color — colorblind-safe) */}
      {focus && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-3 rounded-[var(--r-xl)]"
          style={{ border: "1.5px dashed var(--line-strong)" }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
