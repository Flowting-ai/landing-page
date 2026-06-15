"use client";

import { useState, useEffect, type ReactNode } from "react";

/**
 * Renders children only after mount. Use to wrap subtrees whose markup differs
 * between SSR and first client render (e.g. KDS MessageBubble computes inline
 * transition/size styles on the client → hydration mismatch). The fallback
 * reserves height to avoid layout shift.
 */
export default function ClientOnly({ children, minHeight }: { children: ReactNode; minHeight?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div style={{ minHeight }} aria-hidden />;
  return <>{children}</>;
}
