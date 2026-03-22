import type { Metadata } from "next";
import LegalDocumentShell from "@/components/LegalPage/LegalDocumentShell";
import { legalPageMetadata } from "@/lib/legal-docs";

export const metadata: Metadata = legalPageMetadata("Your Data & Model Training");

export default function YourDataModelTrainingPage() {
  return (
    <LegalDocumentShell
      sectionSlug="ai-intellectual-property"
      docSlug="your-data-model-training"
      sectionTitle="AI & Intellectual Property"
      documentTitle="Your Data & Model Training"
    />
  );
}
