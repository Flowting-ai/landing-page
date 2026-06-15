import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage/LegalPage";
import { LEGAL_DOCS } from "@/components/LegalPage/data";

export const metadata: Metadata = { title: "Cookie & Tracking Policy — Souvenir", description: "How Souvenir uses cookies and similar technologies." };

export default function Page() {
  return <LegalPage doc={LEGAL_DOCS.cookies} />;
}
