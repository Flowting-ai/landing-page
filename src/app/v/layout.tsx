import type { Metadata } from "next";

// /v/* are A/B experiment variants of the landing page — keep them out of the
// index so they don't compete with the canonical home page for ranking.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function VariantLayout({ children }: { children: React.ReactNode }) {
  return children;
}
