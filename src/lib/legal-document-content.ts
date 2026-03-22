export type LegalTocItem = {
  id: string;
  /** Full line as shown in TOC, e.g. "1. Information We Collect" */
  label: string;
};

export type LegalContentSection = {
  id: string;
  /** Display heading, e.g. "1. Information We Collect" */
  heading: string;
  paragraphs: string[];
};

export type LegalDocumentBody = {
  lastUpdated: string;
  /** ISO 8601 date for `<time dateTime>` */
  lastUpdatedIso: string;
  intro?: string;
  toc: LegalTocItem[];
  sections: LegalContentSection[];
};

const PLACEHOLDER_PARA =
  "This section will be updated with complete policy language. It is provided as a placeholder so layout, navigation, and publishing workflow can be reviewed before final legal copy is added.";

function stubSection(n: number, title: string): LegalContentSection {
  return {
    id: title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, ""),
    heading: `${n}. ${title}`,
    paragraphs: [PLACEHOLDER_PARA],
  };
}

/** Full Privacy Policy copy structure (Souvenir AI placeholders). */
const privacyPolicyBody: LegalDocumentBody = {
  lastUpdated: "November 3, 2025",
  lastUpdatedIso: "2025-11-03",
  intro:
    'At Souvenir AI, we build products that help teams work with AI in one place. Earning your trust starts with respecting your privacy. This Souvenir AI Privacy Policy ("Privacy Policy") describes how Souvenir AI and its affiliates ("Souvenir," "we," "our," or "us") collect, use, share, and protect your personal information when you use our websites, applications, and related services.',
  toc: [
    { id: "information-we-collect", label: "1. Information We Collect" },
    { id: "how-we-use-your-information", label: "2. How We Use Your Information" },
    { id: "sharing-your-information", label: "3. Sharing Your Information" },
    { id: "data-security-measures", label: "4. Data Security Measures" },
    { id: "your-rights-and-choices", label: "5. Your Rights and Choices" },
    { id: "changes-to-this-policy", label: "6. Changes to This Policy" },
    { id: "third-party-services", label: "7. Third-Party Services" },
    { id: "cookies-and-tracking-technologies", label: "8. Cookies and Tracking Technologies" },
    { id: "childrens-privacy", label: "9. Children's Privacy" },
    { id: "international-data-transfers", label: "10. International Data Transfers" },
    { id: "data-retention-policies", label: "11. Data Retention Policies" },
    { id: "contact-us-for-more-information", label: "12. Contact Us for More Information" },
    { id: "effective-date-of-this-policy", label: "13. Effective Date of This Policy" },
  ],
  sections: [
    {
      id: "information-we-collect",
      heading: "1. Information We Collect",
      paragraphs: [
        "We collect information you provide directly (such as account details, profile information, and content you submit), information collected automatically (such as device, log, and usage data), and information from third parties where permitted by law. The categories we collect may evolve as our services change; we will describe material updates in this policy or through in-product notices.",
      ],
    },
    {
      id: "how-we-use-your-information",
      heading: "2. How We Use Your Information",
      paragraphs: [
        "We use personal information to provide, secure, and improve our services, to communicate with you, to comply with legal obligations, and to protect our users and Souvenir AI. We limit use to compatible purposes and apply safeguards where required.",
      ],
    },
    {
      id: "sharing-your-information",
      heading: "3. Sharing Your Information",
      paragraphs: [
        "We may share information with service providers who assist our operations, with your direction or consent, as part of a business transaction, or when required by law. We do not sell your personal information as a term of art in applicable privacy laws without a lawful basis and, where required, your consent.",
      ],
    },
    {
      id: "data-security-measures",
      heading: "4. Data Security Measures",
      paragraphs: [
        "We implement technical and organizational measures designed to protect personal information. No method of transmission or storage is completely secure; we encourage you to use strong credentials and report suspected incidents promptly.",
      ],
    },
    {
      id: "your-rights-and-choices",
      heading: "5. Your Rights and Choices",
      paragraphs: [
        "Depending on where you live, you may have rights to access, correct, delete, or export certain data, and to object to or restrict certain processing. You can contact us using the details below to exercise applicable rights.",
      ],
    },
    {
      id: "changes-to-this-policy",
      heading: "6. Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. We will post the updated version and revise the \"Last Updated\" date. Where changes are material, we will provide additional notice as required by law.",
      ],
    },
    {
      id: "third-party-services",
      heading: "7. Third-Party Services",
      paragraphs: [
        "Our services may link to or integrate with third-party sites and tools. Their privacy practices are governed by their own policies. We encourage you to read those policies before sharing information with third parties.",
      ],
    },
    {
      id: "cookies-and-tracking-technologies",
      heading: "8. Cookies and Tracking Technologies",
      paragraphs: [
        "We and our partners may use cookies and similar technologies for essential operations, analytics, and preferences. You can control certain cookies through your browser settings and, where offered, our cookie tools.",
      ],
    },
    {
      id: "childrens-privacy",
      heading: "9. Children's Privacy",
      paragraphs: [
        "Our services are not directed to children under the age where parental consent is required in their jurisdiction. If you believe we have collected such information, please contact us and we will take appropriate steps.",
      ],
    },
    {
      id: "international-data-transfers",
      heading: "10. International Data Transfers",
      paragraphs: [
        "If we transfer personal information across borders, we use mechanisms recognized by applicable law (such as standard contractual clauses) where required to ensure appropriate protection.",
      ],
    },
    {
      id: "data-retention-policies",
      heading: "11. Data Retention Policies",
      paragraphs: [
        "We retain personal information for as long as needed to provide the services, comply with law, resolve disputes, and enforce our agreements. Retention periods vary by data category and context.",
      ],
    },
    {
      id: "contact-us-for-more-information",
      heading: "12. Contact Us for More Information",
      paragraphs: [
        "Questions about this Privacy Policy or our privacy practices can be directed to our team through the contact options provided on our website or in your account settings.",
      ],
    },
    {
      id: "effective-date-of-this-policy",
      heading: "13. Effective Date of This Policy",
      paragraphs: [
        "This Privacy Policy is effective as of the date stated at the top of this page and applies to information collected thereafter unless otherwise stated.",
      ],
    },
  ],
};

function defaultStubBody(): LegalDocumentBody {
  return {
    lastUpdated: "November 3, 2025",
    lastUpdatedIso: "2025-11-03",
    intro: PLACEHOLDER_PARA,
    toc: [{ id: "overview", label: "1. Overview" }],
    sections: [stubSection(1, "Overview")],
  };
}

/**
 * Resolve document body by route. Add branches (or a Record map) for each
 * legal page; unknown routes use the same layout with a one-section stub.
 */
export function getLegalDocumentBody(
  sectionSlug: string,
  docSlug: string,
): LegalDocumentBody {
  if (sectionSlug === "privacy-data" && docSlug === "privacy-policy") {
    return privacyPolicyBody;
  }
  return defaultStubBody();
}
