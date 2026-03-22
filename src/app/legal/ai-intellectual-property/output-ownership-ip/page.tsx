import type { Metadata } from "next";
import LegalDocumentShell from "@/components/LegalPage/LegalDocumentShell";
import { legalPageMetadata } from "@/lib/legal-docs";

export const metadata: Metadata = legalPageMetadata("Output Ownership & IP");

export default function OutputOwnershipIpPage() {
  return (
    <LegalDocumentShell
      sectionSlug="ai-intellectual-property"
      docSlug="output-ownership-ip"
      sectionTitle="AI & Intellectual Property"
      documentTitle="Output Ownership & IP"
    />
  );
}
