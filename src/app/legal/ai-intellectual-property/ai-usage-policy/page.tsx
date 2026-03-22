import type { Metadata } from "next";
import LegalDocumentShell from "@/components/LegalPage/LegalDocumentShell";
import { legalPageMetadata } from "@/lib/legal-docs";

export const metadata: Metadata = legalPageMetadata("AI Usage Policy");

export default function AiUsagePolicyPage() {
  return (
    <LegalDocumentShell
      sectionSlug="ai-intellectual-property"
      docSlug="ai-usage-policy"
      sectionTitle="AI & Intellectual Property"
      documentTitle="AI Usage Policy"
    />
  );
}
