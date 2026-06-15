"use client";

import { ArrowUpFromDot } from "lucide-react";

export default function LegalPolicyTOCButton() {
  return (
    <button
      type="button"
      aria-label="Scroll to table of contents"
      onClick={() =>
        document.getElementById("legal-table-of-contents")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
      className="cursor-pointer text-black rounded-full border border-main-border shadow-xs flex items-center gap-3 px-4 py-2.5 sm:py-3 bg-white text-sm sm:text-base font-geist transition-colors hover:bg-black hover:text-white"
    >
      Table of content
      <ArrowUpFromDot className="size-4 sm:size-5 shrink-0" strokeWidth={1.5} aria-hidden />
    </button>
  );
}
