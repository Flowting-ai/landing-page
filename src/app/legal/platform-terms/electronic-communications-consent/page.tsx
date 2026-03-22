import type { Metadata } from "next";
import LegalDocumentShell from "@/components/LegalPage/LegalDocumentShell";
import { legalPageMetadata } from "@/lib/legal-docs";

export const metadata: Metadata = legalPageMetadata("Electronic Communications Consent");

export default function ElectronicCommunicationsConsentPage() {
  return (
    <LegalDocumentShell
      sectionSlug="platform-terms"
      docSlug="electronic-communications-consent"
      sectionTitle="Platform Terms"
      documentTitle="Electronic Communications Consent"
    />
  );
}
