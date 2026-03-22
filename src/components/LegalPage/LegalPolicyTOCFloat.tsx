"use client";

import { useEffect, useState } from "react";
import LegalPolicyTOCButton from "./LegalPolicyTOCButton";

const TOC_ID = "legal-table-of-contents";

type Props = { shellClassName: string };

/** True when the TOC section has fully scrolled above the viewport (not when it is still below the fold). */
function isTocScrolledPast(): boolean {
  const el = document.getElementById(TOC_ID);
  if (!el) return false;
  return el.getBoundingClientRect().bottom < 0;
}

export default function LegalPolicyTOCFloat({ shellClassName }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const update = () => setShow(isTocScrolledPast());

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 sm:bottom-8 left-0 right-0 z-40 pointer-events-none">
      <div className={`${shellClassName} pointer-events-auto flex justify-start`}>
        <LegalPolicyTOCButton />
      </div>
    </div>
  );
}
