"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/gtag";

/** Fires a GA4 event when its child CTA is clicked. Renders `display:contents`
 *  so it adds no box and never affects layout — the click bubbles up from the
 *  inner button/link. Use in server components where inline onClick isn't allowed;
 *  in client components you can call trackEvent() directly instead. */
export default function TrackCTA({
  event,
  params,
  children,
}: {
  event: string;
  params?: Record<string, string | number | boolean>;
  children: ReactNode;
}) {
  return (
    <span style={{ display: "contents" }} onClick={() => trackEvent(event, params)}>
      {children}
    </span>
  );
}
