"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/gtag";

/** "Was this helpful?" — Yes/No feedback (ElevenLabs pattern). Fires a GA event;
 *  shows a thanks state. */
export default function GuideHelpful({ slug }: { slug: string }) {
  const [done, setDone] = useState<null | "yes" | "no">(null);
  const vote = (v: "yes" | "no") => {
    setDone(v);
    trackEvent("guide_feedback", { guide: slug, helpful: v });
  };
  if (done) {
    return <p className="font-sans text-[length:var(--text-small)] text-ink-muted">Thanks for the feedback.</p>;
  }
  return (
    <div className="flex items-center gap-3">
      <span className="font-sans text-[length:var(--text-small)] text-ink-muted">Was this page helpful?</span>
      <button type="button" onClick={() => vote("yes")} className="rounded-[var(--r-md)] border border-line bg-surface px-3 py-1 font-sans text-[length:var(--text-small)] text-ink-secondary transition-colors hover:bg-surface-warm hover:text-ink">Yes</button>
      <button type="button" onClick={() => vote("no")} className="rounded-[var(--r-md)] border border-line bg-surface px-3 py-1 font-sans text-[length:var(--text-small)] text-ink-secondary transition-colors hover:bg-surface-warm hover:text-ink">No</button>
    </div>
  );
}
