import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage/LegalPage";
import { LEGAL_DOCS } from "@/components/LegalPage/data";

export const metadata: Metadata = { title: "Terms of Service — Souvenir", description: "The terms that govern your use of Souvenir." };

export default function Page() {
  return <LegalPage doc={LEGAL_DOCS.terms} />;
}
