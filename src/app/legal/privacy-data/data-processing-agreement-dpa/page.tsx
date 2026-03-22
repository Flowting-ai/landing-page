import type { Metadata } from "next";
import LegalDocumentShell from "@/components/LegalPage/LegalDocumentShell";
import { legalPageMetadata } from "@/lib/legal-docs";

export const metadata: Metadata = legalPageMetadata("Data Processing Agreement (DPA)");

export default function DataProcessingAgreementPage() {
  return (
    <LegalDocumentShell
      sectionSlug="privacy-data"
      docSlug="data-processing-agreement-dpa"
      sectionTitle="Privacy & Data"
      documentTitle="Data Processing Agreement (DPA)"
    />
  );
}
