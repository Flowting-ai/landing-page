import type { Metadata } from "next";
import LegalDocumentShell from "@/components/LegalPage/LegalDocumentShell";
import { legalPageMetadata } from "@/lib/legal-docs";

export const metadata: Metadata = legalPageMetadata("Cookie Policy");

export default function CookiePolicyPage() {
  return (
    <LegalDocumentShell
      sectionSlug="privacy-data"
      docSlug="cookie-policy"
      sectionTitle="Privacy & Data"
      documentTitle="Cookie Policy"
    />
  );
}
