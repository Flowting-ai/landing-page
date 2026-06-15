import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage/LegalPage";
import { LEGAL_DOCS } from "@/components/LegalPage/data";

export const metadata: Metadata = { title: "Privacy Policy — Souvenir", description: "How Souvenir collects, uses, and protects your data." };

export default function Page() {
  return <LegalPage doc={LEGAL_DOCS.privacy} />;
}
