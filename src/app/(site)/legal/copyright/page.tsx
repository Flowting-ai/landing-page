import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage/LegalPage";
import { LEGAL_DOCS } from "@/components/LegalPage/data";

export const metadata: Metadata = { title: "Copyright & DMCA Policy — Souvenir", description: "How Souvenir handles copyright and DMCA takedown notices." };

export default function Page() {
  return <LegalPage doc={LEGAL_DOCS.copyright} />;
}
