import type { Metadata } from "next";
import LegalDocumentShell from "@/components/LegalPage/LegalDocumentShell";
import { legalPageMetadata } from "@/lib/legal-docs";

export const metadata: Metadata = legalPageMetadata("Terms of Service");

export default function TermsOfServicePage() {
  return (
    <LegalDocumentShell
      sectionSlug="platform-terms"
      docSlug="terms-of-service"
      sectionTitle="Platform Terms"
      documentTitle="Terms of Service"
    />
  );
}

