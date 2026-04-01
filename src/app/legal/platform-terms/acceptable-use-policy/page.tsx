import type { Metadata } from "next";
import LegalDocumentShell from "@/components/LegalPage/LegalDocumentShell";
import { legalPageMetadata } from "@/lib/legal-docs";

export const metadata: Metadata = legalPageMetadata("Acceptable Use Policy");

export default function AcceptableUsePolicyPage() {
  return (
    <LegalDocumentShell
      sectionSlug="platform-terms"
      docSlug="acceptable-use-policy"
      sectionTitle="Platform Terms"
      documentTitle="Acceptable Use Policy"
    />
  );
}

