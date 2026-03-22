import type { Metadata } from "next";
import LegalDocumentShell from "@/components/LegalPage/LegalDocumentShell";
import { legalPageMetadata } from "@/lib/legal-docs";

export const metadata: Metadata = legalPageMetadata("Subprocessor List");

export default function SubprocessorListPage() {
  return (
    <LegalDocumentShell
      sectionSlug="privacy-data"
      docSlug="subprocessor-list"
      sectionTitle="Privacy & Data"
      documentTitle="Subprocessor List"
    />
  );
}
