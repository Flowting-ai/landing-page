import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage/LegalPage";
import { LEGAL_DOCS } from "@/components/LegalPage/data";

export const metadata: Metadata = { title: "Sub-processor List — Souvenir", description: "The third parties Souvenir engages to process personal information, what each does, and where it processes data." };

export default function Page() {
  return <LegalPage doc={LEGAL_DOCS.subprocessors} />;
}
