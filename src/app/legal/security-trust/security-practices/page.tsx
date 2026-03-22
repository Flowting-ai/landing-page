import type { Metadata } from "next";
import LegalDocumentShell from "@/components/LegalPage/LegalDocumentShell";
import { legalPageMetadata } from "@/lib/legal-docs";

export const metadata: Metadata = legalPageMetadata("Security Practices");

export default function SecurityPracticesPage() {
  return (
    <LegalDocumentShell
      sectionSlug="security-trust"
      docSlug="security-practices"
      sectionTitle="Security & Trust"
      documentTitle="Security Practices"
    />
  );
}
