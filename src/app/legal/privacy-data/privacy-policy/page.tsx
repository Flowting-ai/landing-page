import type { Metadata } from "next";
import LegalDocumentShell from "@/components/LegalPage/LegalDocumentShell";
import { legalPageMetadata } from "@/lib/legal-docs";

export const metadata: Metadata = legalPageMetadata("Privacy Policy");

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentShell
      sectionSlug="privacy-data"
      docSlug="privacy-policy"
      sectionTitle="Privacy & Data"
      documentTitle="Privacy Policy"
    />
  );
}
