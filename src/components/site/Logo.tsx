import { CSSProperties } from "react";

type Variant = "lockup" | "wordmark" | "wordmarkAi" | "mark";

const SRC: Record<Variant, string> = {
  lockup: "/brand/wordmark-logo.svg",
  wordmark: "/brand/wordmark.svg",
  wordmarkAi: "/brand/wordmark-ai.svg",
  mark: "/brand/mark.svg",
};
const RATIO: Record<Variant, number> = {
  lockup: 3931 / 740,
  wordmark: 2876 / 634,
  wordmarkAi: 3887 / 634,
  mark: 1,
};

/**
 * Souvenir logo. Single-color SVGs recolored via CSS mask, so the same files
 * work on cream (className="text-ink") and on dark (className="text-dark-ink").
 */
export default function Logo({
  variant = "lockup",
  height = 26,
  className = "text-ink",
}: {
  variant?: Variant;
  height?: number;
  className?: string;
}) {
  const style: CSSProperties = {
    height,
    width: height * RATIO[variant],
    backgroundColor: "currentColor",
    WebkitMaskImage: `url(${SRC[variant]})`,
    maskImage: `url(${SRC[variant]})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskPosition: "left center",
    maskPosition: "left center",
  };
  return <span role="img" aria-label="Souvenir" className={className} style={style} />;
}
