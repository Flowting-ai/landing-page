import type { Metadata } from "next";
import LegalDocumentShell from "@/components/LegalPage/LegalDocumentShell";
import { legalPageMetadata } from "@/lib/legal-docs";

export const metadata: Metadata = legalPageMetadata("Subscription & Billing Terms");

export default function SubscriptionBillingTermsPage() {
  return (
    <LegalDocumentShell
      sectionSlug="platform-terms"
      docSlug="subscription-billing-terms"
      sectionTitle="Platform Terms"
      documentTitle="Subscription & Billing Terms"
    />
  );
}
