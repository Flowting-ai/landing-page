"use client";

import { useState } from "react";
import { CopyOneIcon, CheckmarkCircleTwoIcon } from "@strange-huge/icons";

/** "Copy page" (ElevenLabs/Mintlify pattern) — copies the guide as clean Markdown
 *  so it can be pasted into an AI assistant or notes. Markdown is prebuilt at the
 *  server and passed in (keeps the component tiny). */
export default function CopyPageButton({ markdown }: { markdown: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-[var(--r-md)] border border-line bg-surface px-3 py-1.5 font-sans text-[length:var(--text-small)] text-ink-secondary transition-colors hover:bg-surface-warm hover:text-ink"
      style={{ boxShadow: "var(--shadow-sm)" }}
      aria-label="Copy this page as Markdown"
    >
      <span aria-hidden style={{ lineHeight: 0 }}>
        {copied ? <CheckmarkCircleTwoIcon size={15} /> : <CopyOneIcon size={15} />}
      </span>
      {copied ? "Copied" : "Copy page"}
    </button>
  );
}
