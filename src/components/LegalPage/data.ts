export type LegalSection = { title: string; body: string };
export type LegalDoc = {
  slug: string;
  eyebrow: string;
  title: string;
  updated: string;
  sections: LegalSection[];
};

// Body copy is scaffolded: where the Figma had readable intro text it is transcribed;
// remaining sections carry a placeholder to be replaced with the firm-reviewed text.
const TODO = "Final reviewed copy for this section will be published here.";
const UPDATED = "April 7, 2026";

export const LEGAL_DOCS: Record<string, LegalDoc> = {
  terms: {
    slug: "terms",
    eyebrow: "Platform · Terms",
    title: "Terms of Service",
    updated: UPDATED,
    sections: [
      { title: "Who We Are", body: "Souvenir, Inc. is a Delaware C-Corporation (File No. 10526563) that operates Souvenir, the centralized workspace brain. We unify multiple frontier AI models and tools into a single workspace with persistent context, intelligent model routing, automation, and organizational tools. These Terms of Service (“Terms”) govern your use of getsouvenir.com, the Souvenir web application, and any other products and services we may offer (together, our “Services”). They are a contract between you and Souvenir, Inc. (“Souvenir,” “we,” “us,” or “our”) and incorporate our Acceptable Use Policy, Privacy Policy, and Cookie Policy by reference. By creating an account or accessing our Services, you agree to these Terms. If you do not agree, do not use the Services. Our Services are available to users in the United States, Canada, and India." },
      { title: "Account Creation and Access", body: TODO },
      { title: "Use of Our Services", body: TODO },
      { title: "Inputs, Outputs, and Materials", body: TODO },
      { title: "Subscriptions and Billing", body: TODO },
      { title: "Intellectual Property", body: TODO },
      { title: "Copyright and DMCA Policy", body: TODO },
      { title: "Third-Party Policies", body: TODO },
      { title: "Acceptable Use Policy", body: TODO },
      { title: "Termination", body: TODO },
      { title: "Disclaimers and Liability", body: TODO },
      { title: "General", body: TODO },
      { title: "Dispute Resolution", body: TODO },
    ],
  },
  "acceptable-use": {
    slug: "acceptable-use",
    eyebrow: "Platform · Terms",
    title: "Acceptable Use Policy",
    updated: UPDATED,
    sections: [
      { title: "Age Requirement", body: "You must be at least 18 years old. We enforce this via date-of-birth verification. Accounts identified as under-18 are immediately terminated." },
      { title: "Prohibited Content", body: "You may not use Souvenir to generate, upload, store, or otherwise engage with content that violates this section — including sexually explicit content (prohibited across all models without exception) and child sexual abuse material (absolute zero-tolerance; reported to NCMEC per 18 U.S.C. § 2258A, with immediate termination and law-enforcement referral)." },
      { title: "AI Assistants", body: TODO },
      { title: "Brain & Automation", body: TODO },
      { title: "Memory and Pins", body: TODO },
      { title: "Code Execution", body: TODO },
      { title: "Teams", body: TODO },
      { title: "Prohibited Compliance", body: TODO },
      { title: "DMCA Takedowns", body: TODO },
      { title: "Enforcement", body: TODO },
      { title: "Reporting", body: TODO },
      { title: "Changes", body: TODO },
      { title: "Contact", body: "Questions about this policy? Contact info@getsouvenir.com." },
    ],
  },
  privacy: {
    slug: "privacy",
    eyebrow: "Privacy & Data",
    title: "Privacy Policy",
    updated: UPDATED,
    sections: [
      { title: "Overview", body: "Souvenir, Inc. (“Souvenir,” “we,” “us,” or “our”) operates the Souvenir platform at getsouvenir.com, a centralized workspace brain that connects multiple frontier AI models and tools into a single workspace with persistent context, intelligent model routing, automation, and organizational tools. This Privacy Policy explains how we collect, use, disclose, store, and protect your personal information when you access or use our Services. By creating an account or using our Services, you acknowledge that you have read and understood this Privacy Policy." },
      { title: "Information We Collect", body: TODO },
      { title: "How We Use Your Information", body: TODO },
      { title: "AI Models and Third-Party Processing", body: TODO },
      { title: "Data Storage and Retention", body: TODO },
      { title: "International Data Transfers", body: TODO },
      { title: "Your Rights and Choices", body: TODO },
      { title: "Security", body: TODO },
      { title: "Team and Workspace Data", body: TODO },
      { title: "Children's Privacy", body: TODO },
      { title: "Cookies and Tracking", body: TODO },
      { title: "Do Not Track", body: TODO },
      { title: "Third-Party Links", body: TODO },
      { title: "Changes to This Policy", body: TODO },
      { title: "Contact", body: "Privacy questions? Contact info@getsouvenir.com." },
    ],
  },
  cookies: {
    slug: "cookies",
    eyebrow: "Privacy & Data",
    title: "Cookie and Tracking Policy",
    updated: UPDATED,
    sections: [
      { title: "What Are Cookies", body: "Cookies are small text files stored on your device. Similar technologies include web beacons, pixels, local storage, and session storage. This Policy explains how Souvenir, Inc. uses these technologies at getsouvenir.com. Read together with our Privacy Policy and Terms of Service. Applies to users in the United States, Canada, and India." },
      { title: "Types of Cookies We Use", body: "Strictly necessary (platform function, cannot be disabled — e.g. Auth0 session tokens, CSRF protection, load balancing), functional (preferences and settings), performance (how users interact with the Services), and analytics (speed, reliability, and error tracking)." },
      { title: "Third-Party Sharing", body: TODO },
      { title: "Consent", body: TODO },
      { title: "Your Rights", body: TODO },
      { title: "Enforcement", body: TODO },
      { title: "Changes", body: TODO },
      { title: "Contact", body: "Questions about cookies? Contact info@getsouvenir.com." },
    ],
  },
  copyright: {
    slug: "copyright",
    eyebrow: "Platform · Terms",
    title: "Copyright & DMCA Policy",
    updated: UPDATED,
    sections: [
      { title: "Respect for Intellectual Property", body: "Souvenir, Inc. respects intellectual property rights. In accordance with the Digital Millennium Copyright Act (17 U.S.C. § 512), we respond promptly to valid notices submitted to our designated agent." },
      { title: "Designated DMCA Agent", body: "Our designated agent, registered with the U.S. Copyright Office — Name: James Oliver; Company: Souvenir, Inc.; Registration: DMCA-1070683; Status: Active, effective March 17, 2026 to present; Alternate Names: SouvenirAI. Send notices to oliver@getsouvenir.com." },
      { title: "Filing a Takedown Notice", body: "Submit a written notification containing: (1) a physical or electronic signature of the copyright owner or authorized agent; (2) identification of the copyrighted work claimed to be infringed; (3) identification of the infringing material and information sufficient to locate it; (4) your contact information — name, address, telephone number, and email; (5) a good-faith belief statement that the use is not authorized; and (6) a statement under penalty of perjury that the information is accurate and you are authorized to act." },
      { title: "Counter-Notification", body: TODO },
      { title: "Repeat Infringer Policy", body: TODO },
      { title: "Removal Process", body: TODO },
      { title: "Good Faith", body: TODO },
      { title: "Contact", body: "Copyright questions? Contact oliver@getsouvenir.com." },
    ],
  },
};
