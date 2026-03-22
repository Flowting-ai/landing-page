import type { Metadata } from "next";

export type LegalLink = { slug: string; label: string };

export type LegalSection = {
  slug: string;
  title: string;
  links: LegalLink[];
};

/** Section slugs match static route folders under `src/app/legal/`. */
export const legalSections: LegalSection[] = [
  {
    slug: "platform-terms",
    title: "Platform Terms",
    links: [
      { slug: "terms-of-service", label: "Terms of Service" },
      { slug: "acceptable-use-policy", label: "Acceptable Use Policy" },
      { slug: "subscription-billing-terms", label: "Subscription & Billing Terms" },
      { slug: "electronic-communications-consent", label: "Electronic Communications Consent" },
    ],
  },
  {
    slug: "privacy-data",
    title: "Privacy & Data",
    links: [
      { slug: "privacy-policy", label: "Privacy Policy" },
      { slug: "cookie-policy", label: "Cookie Policy" },
      { slug: "data-processing-agreement-dpa", label: "Data Processing Agreement (DPA)" },
      { slug: "subprocessor-list", label: "Subprocessor List" },
    ],
  },
  {
    slug: "ai-intellectual-property",
    title: "AI & Intellectual Property",
    links: [
      { slug: "ai-usage-policy", label: "AI Usage Policy" },
      { slug: "your-data-model-training", label: "Your Data & Model Training" },
      { slug: "output-ownership-ip", label: "Output Ownership & IP" },
    ],
  },
  {
    slug: "security-trust",
    title: "Security & Trust",
    links: [
      { slug: "security-practices", label: "Security Practices" },
      { slug: "vulnerability-disclosure-policy", label: "Vulnerability Disclosure Policy" },
      { slug: "dmca-takedown-requests", label: "DMCA & Takedown Requests" },
      { slug: "law-enforcement-guidelines", label: "Law Enforcement Guidelines" },
    ],
  },
];

export function legalHref(sectionSlug: string, docSlug: string): string {
  return `/legal/${sectionSlug}/${docSlug}`;
}

export function legalPageMetadata(documentTitle: string): Metadata {
  return {
    title: `${documentTitle} | Souvenir AI Legal`,
    description: `${documentTitle} — Souvenir AI.`,
  };
}
