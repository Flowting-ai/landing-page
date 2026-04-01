import type { Metadata } from "next";
import LegalDocumentShell from "@/components/LegalPage/LegalDocumentShell";
import { legalPageMetadata } from "@/lib/legal-docs";

export const metadata: Metadata = legalPageMetadata(
  "Cookie and Tracking Disclosure Policy",
);

export default function CookieAndTrackingDisclosurePolicyPage() {
  return (
    <LegalDocumentShell
      sectionSlug="privacy-data"
      docSlug="cookie-policy"
      sectionTitle="Privacy & Data"
      documentTitle="Cookie and Tracking Disclosure Policy"
    />
  );
}

