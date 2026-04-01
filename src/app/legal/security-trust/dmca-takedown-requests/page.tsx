import type { Metadata } from "next";
import LegalDocumentShell from "@/components/LegalPage/LegalDocumentShell";
import { legalPageMetadata } from "@/lib/legal-docs";

export const metadata: Metadata = legalPageMetadata(
  "DMCA & Takedown Requests",
);

export default function DmcaTakedownRequestsPage() {
  return (
    <LegalDocumentShell
      sectionSlug="security-trust"
      docSlug="dmca-takedown-requests"
      sectionTitle="Security & Trust"
      documentTitle="DMCA & Takedown Requests"
    />
  );
}

