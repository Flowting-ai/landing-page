import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage/LegalPage";
import { LEGAL_DOCS } from "@/components/LegalPage/data";

export const metadata: Metadata = { title: "Acceptable Use Policy — Souvenir", description: "What you may and may not do with Souvenir." };

export default function Page() {
  return <LegalPage doc={LEGAL_DOCS["acceptable-use"]} />;
}
