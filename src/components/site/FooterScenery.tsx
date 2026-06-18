/**
 * FooterScenery — a hand-authored warm-monochrome landscape for the footer
 * sign-off. Token-colored (cream sky, taupe→espresso layered hills, an ochre
 * tree line, an ink lone tree, soft cream clouds). Pure SVG (no image asset, no
 * perf hit) + a risograph grain overlay for printed warmth. Decorative only.
 *
 * preserveAspectRatio "xMidYMax slice" keeps the horizon anchored to the bottom
 * and fills any footer width/height (so text overlaid in the sky always clears
 * the hills). aria-hidden — purely atmospheric.
 */
export default function FooterScenery({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="footer-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--neutral-100)" />
          <stop offset="62%" stopColor="var(--neutral-50)" />
          <stop offset="100%" stopColor="var(--neutral-50)" />
        </linearGradient>
        {/* risograph grain */}
        <filter id="footer-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>

      {/* sky */}
      <rect x="0" y="0" width="1440" height="760" fill="url(#footer-sky)" />

      {/* soft clouds (near-white, low-contrast) */}
      <g fill="var(--neutral-white)" opacity="0.7">
        <ellipse cx="300" cy="250" rx="190" ry="34" />
        <ellipse cx="250" cy="232" rx="120" ry="28" />
        <ellipse cx="1080" cy="320" rx="220" ry="40" />
        <ellipse cx="1180" cy="300" rx="130" ry="30" />
      </g>

      {/* far hill ridge (lightest taupe) */}
      <path
        d="M0 472 C 240 432 520 452 760 460 C 1000 468 1240 446 1440 470 L 1440 760 L 0 760 Z"
        fill="var(--neutral-200)"
      />

      {/* ochre tree line riding the far ridge */}
      <g fill="var(--yellow-500)">
        {Array.from({ length: 28 }).map((_, i) => {
          const x = 740 + i * 26;
          const r = 13 + ((i * 7) % 9);
          const y = 470 - (i % 3) * 4;
          return <circle key={i} cx={x} cy={y} r={r} />;
        })}
      </g>
      {/* a denser ochre band so the canopy row reads as a tree line, not dots */}
      <path d="M735 470 C 900 452 1140 456 1440 460 L 1440 486 L 735 486 Z" fill="var(--yellow-500)" />

      {/* mid hill (mid taupe) */}
      <path
        d="M0 545 C 300 512 560 536 820 540 C 1080 544 1280 520 1440 540 L 1440 760 L 0 760 Z"
        fill="var(--neutral-400)"
      />

      {/* lone tree — ink silhouette on the mid ridge, left third */}
      <g fill="var(--neutral-900)">
        <rect x="232" y="556" width="10" height="64" rx="2" />
        <circle cx="237" cy="540" r="62" />
        <circle cx="193" cy="556" r="40" />
        <circle cx="283" cy="556" r="42" />
        <circle cx="237" cy="512" r="44" />
      </g>

      {/* near field (espresso) */}
      <path
        d="M0 612 C 320 590 600 606 880 606 C 1140 606 1300 592 1440 606 L 1440 760 L 0 760 Z"
        fill="var(--neutral-700)"
      />

      {/* plowed-field furrows — light strokes fanning to a vanishing point */}
      <g stroke="var(--neutral-400)" strokeOpacity="0.5" strokeWidth="2" fill="none">
        {Array.from({ length: 11 }).map((_, i) => {
          const vpx = 720; // vanishing point x near horizon
          const baseX = -200 + i * 320;
          return <path key={i} d={`M${baseX} 760 Q ${(baseX + vpx) / 2} 680 ${vpx} 624`} />;
        })}
      </g>

      {/* grain wash over everything */}
      <rect x="0" y="0" width="1440" height="760" filter="url(#footer-grain)" opacity="0.06" style={{ mixBlendMode: "multiply" }} />
    </svg>
  );
}
