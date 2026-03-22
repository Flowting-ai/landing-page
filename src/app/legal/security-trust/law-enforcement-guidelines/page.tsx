import type { Metadata } from "next";
import LegalDocumentShell from "@/components/LegalPage/LegalDocumentShell";
import { legalPageMetadata } from "@/lib/legal-docs";

export const metadata: Metadata = legalPageMetadata("Law Enforcement Guidelines");

export default function LawEnforcementGuidelinesPage() {
  return (
    <LegalDocumentShell
      sectionSlug="security-trust"
      docSlug="law-enforcement-guidelines"
      sectionTitle="Security & Trust"
      documentTitle="Law Enforcement Guidelines"
    />
  );
}
