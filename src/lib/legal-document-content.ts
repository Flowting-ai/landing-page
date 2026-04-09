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

const privacyPolicyBody: LegalDocumentBody = {
  lastUpdated: "April 7, 2026",
  lastUpdatedIso: "2026-04-07",
  intro:
    'Souvenir, Inc. ("Souvenir," "we," "us," or "our") operates the Souvenir platform at getsouvenir.com, a unified AI workspace that connects multiple large language models and AI services into a single interface with persistent context management, intelligent model routing, workflow automation, and organizational tools. This Privacy Policy explains how we collect, use, disclose, store, and protect your personal information when you access or use our Services (as defined in our Terms of Service). It applies to all users of our Services in the United States, Canada, and India, and includes jurisdiction-specific disclosures for each. By creating an account or using our Services, you acknowledge that you have read and understood this Privacy Policy. Where required by applicable law, we will obtain your consent before processing your personal information.',
  toc: [
    { id: "overview", label: "1. Overview" },
    { id: "information-we-collect", label: "2. Information We Collect" },
    { id: "how-we-use-your-information", label: "3. How We Use Your Information" },
    { id: "ai-models-and-third-party-processing", label: "4. AI Models and Third-Party Data Processing" },
    { id: "data-storage-and-retention", label: "5. Data Storage and Retention" },
    { id: "data-sharing-and-disclosure", label: "6. Data Sharing and Disclosure" },
    { id: "international-data-transfers", label: "7. International Data Transfers" },
    { id: "your-rights-and-choices", label: "8. Your Rights and Choices" },
    { id: "security", label: "9. Security" },
    { id: "team-and-workspace-data", label: "10. Team and Workspace Data" },
    { id: "childrens-privacy", label: "11. Children's Privacy" },
    { id: "cookies-and-tracking-technologies", label: "12. Cookies and Tracking Technologies" },
    { id: "do-not-track-disclosure", label: "13. Do Not Track Disclosure" },
    { id: "third-party-links", label: "14. Third-Party Links" },
    { id: "changes-to-this-policy", label: "15. Changes to This Privacy Policy" },
    { id: "contact-information", label: "16. Contact Information" },
  ],
  sections: [
    {
      id: "overview",
      heading: "1. Overview",
      paragraphs: [
        'Souvenir, Inc. ("Souvenir," "we," "us," or "our") operates the Souvenir platform at getsouvenir.com, a unified AI workspace that connects multiple large language models and AI services into a single interface with persistent context management, intelligent model routing, workflow automation, and organizational tools.',
        "This Privacy Policy explains how we collect, use, disclose, store, and protect your personal information when you access or use our Services (as defined in our Terms of Service). It applies to all users of our Services in the United States, Canada, and India, and includes jurisdiction-specific disclosures for each.",
        "By creating an account or using our Services, you acknowledge that you have read and understood this Privacy Policy. Where required by applicable law, we will obtain your consent before processing your personal information.",
      ],
    },
    {
      id: "information-we-collect",
      heading: "2. Information We Collect",
      paragraphs: [
        "2.1 Information You Provide",
        "• Account information: name, email address, password, and account credentials",
        '• Inputs: prompts, files, images, code, instructions, and other content you submit to the platform ("Inputs")',
        '• Workspace data: projects, workflows, saved context, Personas, Pins, and AI-generated outputs ("Outputs")',
        "• Payment information: billing details processed by our payment processor, Stripe. We do not store credit card numbers, bank account details, or UPI IDs on our servers.",
        "• Communications: support inquiries, feedback, and correspondence with us",
        "2.2 Information Collected Automatically",
        "• Device and browser information: type, operating system, screen resolution, and browser version",
        "• IP address and approximate geographic location (country/region level). We use ip-api.com to resolve your IP address to city, region, and timezone for localization purposes. Your IP address is transmitted to this third-party service.",
        "• Usage data: features accessed, interaction patterns, session duration, and activity timestamps",
        "• Log data: server logs including timestamps, error reports, referring URLs, and system activity. We use Sentry for error monitoring, which may capture request metadata and stack traces when errors occur.",
        "• Analytics data: we use Mixpanel and Google Analytics to collect aggregated usage insights, feature adoption metrics, and session patterns",
        "• Cookies and similar technologies: as described in our Cookie and Tracking Disclosure Policy",
        "2.3 Information from Third-Party Integrations",
        "If you connect third-party services to your Souvenir account, we may access and process data necessary to enable those integrations, in accordance with the permissions you grant.",
      ],
    },
    {
      id: "how-we-use-your-information",
      heading: "3. How We Use Your Information",
      paragraphs: [
        "We use collected information for the following purposes:",
        "• To provide, operate, and maintain the platform, including persistent context and memory across workflows",
        "• To route your Inputs to appropriate AI models based on your settings or our auto-routing algorithm",
        "• To process payments and manage your subscription",
        "• To improve output quality, system performance, and user experience",
        "• To support collaboration within shared workspaces and team accounts",
        "• To respond to support requests, user inquiries, and feedback",
        "• To monitor usage for abuse prevention, security, and enforcement of our Terms of Service and Acceptable Use Policy",
        "• To comply with legal obligations, respond to lawful requests, and protect our legal rights",
        "• To send transactional communications (account confirmations, billing notices, security alerts)",
        "We do not use your Inputs or Outputs to train our own AI models unless you explicitly opt in.",
      ],
    },
    {
      id: "ai-models-and-third-party-processing",
      heading: "4. AI Models and Third-Party Data Processing",
      paragraphs: [
        "Souvenir connects with third-party AI model providers and processing services. When you submit an Input, it is routed through OpenRouter, a third-party middleware service, to one or more of the following AI providers:",
        "• OpenAI (United States) — text and chat models",
        "• Anthropic (United States) — text and chat models",
        "• Google Gemini (United States) — text and chat models",
        "• Mistral AI (France) — text, chat, and OCR models",
        "All AI providers are based in the United States or the European Union.",
        "In addition to AI model providers, your content may be processed by the following services on our infrastructure:",
        "• OpenRouter (United States) — middleware that routes your Inputs to the appropriate AI model provider",
        "• AWS Bedrock with Cohere embed-v4 (United States) — generates semantic vector embeddings from your content for search and memory features",
        "• AWS Textract (United States) — extracts text from uploaded documents and images via OCR",
        "• Mistral OCR API (France) — alternative OCR for document processing on certain plans",
        "• Docker sandbox (United States) — user-submitted or AI-generated code may be executed in isolated containers on our AWS infrastructure",
        "• PyMuPDF and python-pptx — local parsing of PDFs and PowerPoint files on our servers (no third-party data sharing)",
        "Each AI provider processes your data under their own terms and privacy policies. We share only the data necessary to fulfill your request. Under our API agreements with these providers, your Inputs and Outputs are not used for model training.",
      ],
    },
    {
      id: "data-storage-and-retention",
      heading: "5. Data Storage and Retention",
      paragraphs: [
        "• Your data is primarily stored on Amazon Web Services (AWS) infrastructure in the United States, region us-east-1",
        "• User data, conversations, personas, memories, and document embeddings are stored in a PostgreSQL database with pgvector extension",
        "• Uploaded files and documents are stored in AWS S3",
        "• API keys and credentials are stored securely in AWS Secrets Manager",
        "• Data is retained for as long as your account is active or as needed to provide the Services",
        "• You may request deletion of your data at any time by contacting info@getsouvenir.com",
        "• Upon account termination, we will delete your Materials within 90 days, except where retention is required for legal, security, or compliance purposes",
        "• Analytics data (Mixpanel, Google Analytics) is retained for up to 24 months",
        "• Session cookies are deleted upon logout or browser close",
      ],
    },
    {
      id: "data-sharing-and-disclosure",
      heading: "6. Data Sharing and Disclosure",
      paragraphs: [
        "We do not sell your personal data. We do not share your personal data for cross-context behavioral advertising.",
        "We may share data in the following limited circumstances:",
        "• With AI model providers (OpenAI, Anthropic, Google, Mistral) via OpenRouter: to process your Inputs and generate Outputs",
        "• With infrastructure and service providers: Stripe (payments), Auth0 (authentication and session management), AWS (hosting, S3 storage, Textract OCR, Bedrock embeddings, Secrets Manager), OpenRouter (AI model routing), Cohere (vector embeddings via AWS Bedrock), Sentry (error monitoring), ip-api.com (IP-based geolocation), Mixpanel and Google Analytics (usage analytics), and email service providers (transactional communications)",
        "• To comply with law: in response to valid legal process, court orders, subpoenas, or regulatory requests from authorities in the United States, Canada, or India",
        "• To protect rights and safety: to enforce our Terms of Service, protect the security of users and the platform, or prevent fraud",
        "• In connection with a business transaction: if Souvenir, Inc. is involved in a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction, subject to this Privacy Policy",
      ],
    },
    {
      id: "international-data-transfers",
      heading: "7. International Data Transfers",
      paragraphs: [
        "Souvenir, Inc. is based in the United States. Your information is primarily stored and processed in the United States (AWS us-east-1). Mistral AI processes certain requests in France.",
        "For users in Canada, we ensure that personal information transferred outside Canada receives a comparable level of protection through contractual safeguards with our service providers, as required under PIPEDA.",
        "For users in India, cross-border data transfers are currently permitted under the Digital Personal Data Protection Act, 2023, unless the Central Government restricts transfers to specific jurisdictions. We will comply with any future restrictions.",
      ],
    },
    {
      id: "your-rights-and-choices",
      heading: "8. Your Rights and Choices",
      paragraphs: [
        "8.1 All Users",
        "Regardless of your location, you may:",
        "• Access the personal data we hold about you",
        "• Correct inaccurate or incomplete data",
        "• Request deletion of your data",
        "• Export your data in a machine-readable format",
        "• Withdraw consent where processing is based on consent",
        "• Close your account at any time",
        "8.2 United States Residents",
        "California Residents (CCPA/CPRA): You have the right to know what personal information we collect; request deletion; opt out of sale or sharing (we do not sell or share personal information); and non-discrimination for exercising your privacy rights.",
        "Other U.S. State Privacy Laws: If you reside in a state with a comprehensive privacy law (Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Montana, Iowa, among others), you may have similar rights.",
        "Contact info@getsouvenir.com to exercise these rights. We will verify your identity before fulfilling requests.",
        "8.3 Canadian Users (PIPEDA)",
        "• Access their personal information held by us",
        "• Challenge accuracy and have information amended",
        "• Withdraw consent, subject to legal or contractual restrictions",
        "• Know how personal information is used and to whom it has been disclosed",
        "We obtain meaningful consent for collection, use, and disclosure. Express consent is required for sensitive information, including AI processing of your content.",
        "8.4 India Users (DPDP Act, 2023)",
        "• Access a summary of personal data processed",
        "• Correct and update inaccurate personal data",
        "• Erase personal data no longer necessary for its original purpose",
        "• Nominate another individual to exercise rights in event of death or incapacity",
        "• File a grievance and complain to the Data Protection Board of India",
        "We process your personal data based on your consent, which you may withdraw at any time by contacting info@getsouvenir.com. Withdrawal does not affect prior lawful processing.",
        "8.5 How to Exercise Your Rights",
        "Email: info@getsouvenir.com",
        "Address: 211 28th Street, Des Moines, IA 50312",
        "We will respond within 30 days (or sooner if required by applicable law).",
      ],
    },
    {
      id: "security",
      heading: "9. Security",
      paragraphs: [
        "We implement reasonable technical and organizational measures to protect your personal data, including encryption of data in transit (TLS/SSL) and at rest, role-based access controls, regular security assessments, secure authentication via Auth0, and secure credential storage via AWS Secrets Manager.",
        "No method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security.",
        "In the event of a personal data breach, we will notify affected users and relevant authorities in accordance with applicable law, including U.S. state breach notification laws (including Iowa Chapter 715C), PIPEDA in Canada, and the DPDP Act in India (once in effect).",
      ],
    },
    {
      id: "team-and-workspace-data",
      heading: "10. Team and Workspace Data",
      paragraphs: [
        "• Workspace owners and administrators may control access permissions and account settings",
        "• Content shared within a workspace may be visible to other members",
        "• You are responsible for data you share within collaborative environments",
      ],
    },
    {
      id: "childrens-privacy",
      heading: "11. Children's Privacy",
      paragraphs: [
        "Souvenir is not intended for individuals under 18. We do not knowingly collect personal data from anyone under 18. If we learn we have, we will delete it promptly. Contact info@getsouvenir.com to report.",
      ],
    },
    {
      id: "cookies-and-tracking-technologies",
      heading: "12. Cookies and Tracking Technologies",
      paragraphs: [
        "See our Cookie and Tracking Disclosure Policy at getsouvenir.com/cookies. We display an opt-in cookie consent banner to all users.",
      ],
    },
    {
      id: "do-not-track-disclosure",
      heading: "13. Do Not Track Disclosure",
      paragraphs: [
        "We do not currently respond to DNT signals as no universally accepted standard exists.",
      ],
    },
    {
      id: "third-party-links",
      heading: "14. Third-Party Links",
      paragraphs: [
        "We are not responsible for privacy practices of third-party websites linked from our Services.",
      ],
    },
    {
      id: "changes-to-this-policy",
      heading: "15. Changes to This Privacy Policy",
      paragraphs: [
        "We will provide at least 14 days’ notice before material changes take effect. Continued use constitutes acceptance.",
      ],
    },
    {
      id: "contact-information",
      heading: "16. Contact Information",
      paragraphs: [
        "Company: Souvenir, Inc.",
        "Address: 211 28th Street, Des Moines, IA 50312",
        "Email: info@getsouvenir.com",
        "Website: getsouvenir.com",
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

const acceptableUsePolicyBody: LegalDocumentBody = {
  lastUpdated: "April 7, 2026",
  lastUpdatedIso: "2026-04-07",
  intro:
    "This AUP governs your use of Souvenir and is incorporated into our Terms of Service. Violations may result in suspension, termination, or reporting to law enforcement.",
  toc: [
    { id: "age-requirement", label: "1. Age Requirement" },
    { id: "prohibited-content", label: "2. Prohibited Content" },
    { id: "personas", label: "3. Personas" },
    { id: "workflows", label: "4. Workflows" },
    { id: "memory", label: "5. Memory" },
    { id: "code-execution", label: "6. Code Execution" },
    { id: "teams", label: "7. Teams" },
    { id: "provider-compliance", label: "8. Provider Compliance" },
    { id: "dmca-takedowns", label: "9. DMCA Takedowns" },
    { id: "enforcement", label: "10. Enforcement" },
    { id: "reporting", label: "11. Reporting" },
    { id: "changes", label: "12. Changes" },
    { id: "contact", label: "13. Contact" },
  ],
  sections: [
    {
      id: "age-requirement",
      heading: "1. Age Requirement",
      paragraphs: [
        "You must be at least 18. Enforced via date-of-birth verification. Under-18 accounts are immediately terminated.",
      ],
    },
    {
      id: "prohibited-content",
      heading: "2. Prohibited Content",
      paragraphs: [
        "You may not use Souvenir to generate, upload, share, or otherwise engage with content that violates this section.",
        "2.1 Sexually Explicit Content: Prohibited across all models without exception.",
        "2.2 CSAM: Absolute zero-tolerance. Reported to NCMEC per 18 U.S.C. § 2258A. Immediate termination and law enforcement referral.",
        "2.3 Violence and Terrorism",
        "• Promoting/glorifying terrorism or violent extremism",
        "• Weapons/explosives instructions",
        "• Graphic real-world violence",
        "• Threats of violence",
        "2.4 Self-Harm",
        "• Promoting suicide or self-injury",
        "• Glorifying eating disorders",
        "2.5 Hate Speech",
        "• Attacks based on protected characteristics",
        "• Harassment, bullying, doxxing",
        "2.6 Deception",
        "• Impersonation without consent",
        "• Phishing, scam materials",
        "• Disinformation, deepfakes",
        "• Misrepresenting AI outputs as human-created",
        "• Academic dishonesty",
        "2.7 Privacy Violations",
        "• Unauthorized collection of personal information",
        "• Stalking or surveillance",
        "• Doxxing",
        "2.8 Malware and System Abuse",
        "• Malicious code generation",
        "• Unauthorized access attempts",
        "• Circumventing safety filters or prompt injection",
        "• Bypassing rate limits",
        "2.9 Illegal Activity",
        "• Facilitating illegal activity under US, Canadian, or Indian law",
        "• Controlled substances",
        "• Human trafficking",
        "2.10 IP Infringement",
        "• Reproducing copyrighted material without authorization",
        "• Trademark/patent/trade secret infringement",
        "• Circumventing DRM",
      ],
    },
    {
      id: "personas",
      heading: "3. Personas",
      paragraphs: [
        "Persona creators: ensure instructions comply with this AUP, do not impersonate real individuals, and do not bypass safety filters. Users of shared Personas remain responsible for their own conduct.",
      ],
    },
    {
      id: "workflows",
      heading: "4. Workflows",
      paragraphs: [
        "You are responsible for all Workflow outputs. Workflows must not automate prohibited content production or circumvent limits.",
      ],
    },
    {
      id: "memory",
      heading: "5. Memory",
      paragraphs: [
        "You can view, edit, and delete memory from Settings. Do not store others’ personal information without consent. Memory contents are subject to the same prohibited content rules as all other Materials.",
      ],
    },
    {
      id: "code-execution",
      heading: "6. Code Execution",
      paragraphs: [
        "User-submitted or AI-generated code is executed in isolated Docker sandbox containers. You are responsible for any code you submit or execute. Do not use the code execution feature to generate malware, attempt unauthorized access, or circumvent security measures.",
      ],
    },
    {
      id: "teams",
      heading: "7. Teams",
      paragraphs: [
        "Workspace administrators are responsible for team compliance. Content shared in team workspaces must comply with this AUP and your organization’s own policies.",
      ],
    },
    {
      id: "provider-compliance",
      heading: "8. Provider Compliance",
      paragraphs: [
        "You must comply with each upstream AI provider’s terms (OpenAI, Anthropic, Google, Mistral). Do not use Outputs to train competing models or represent Outputs as human-generated.",
      ],
    },
    {
      id: "dmca-takedowns",
      heading: "9. DMCA Takedowns",
      paragraphs: [
        "• First strike: Content removed, warning issued",
        "• Second strike: Content removed, warning, feature restrictions",
        "• Third strike: Account terminated",
        "Submit takedown notices to James Oliver at oliver@getsouvenir.com. Full DMCA procedures at getsouvenir.com/dmca.",
      ],
    },
    {
      id: "enforcement",
      heading: "10. Enforcement",
      paragraphs: [
        "Actions range from warnings to immediate termination and law enforcement reporting. CSAM, terrorism, and imminent violence trigger immediate termination without warning.",
      ],
    },
    {
      id: "reporting",
      heading: "11. Reporting",
      paragraphs: ["Email: info@getsouvenir.com"],
    },
    {
      id: "changes",
      heading: "12. Changes",
      paragraphs: ["14 days’ notice for material changes."],
    },
    {
      id: "contact",
      heading: "13. Contact",
      paragraphs: [
        "Company: Souvenir, Inc.",
        "Address: 211 28th Street, Des Moines, IA 50312",
        "Email: info@getsouvenir.com",
        "Website: getsouvenir.com",
      ],
    },
  ],
};

const cookieAndTrackingDisclosurePolicyBody: LegalDocumentBody = {
  lastUpdated: "April 7, 2026",
  lastUpdatedIso: "2026-04-07",
  intro:
    "This Policy explains how Souvenir, Inc. uses cookies and tracking technologies on getsouvenir.com. Read together with our Privacy Policy and Terms of Service. Applies to users in the United States, Canada, and India.",
  toc: [
    { id: "what-are-cookies", label: "1. What Are Cookies" },
    { id: "types-of-cookies-we-use", label: "2. Types of Cookies We Use" },
    { id: "third-party-sharing", label: "3. Third-Party Sharing" },
    { id: "consent", label: "4. Consent" },
    { id: "your-rights", label: "5. Your Rights" },
    { id: "retention", label: "6. Retention" },
    { id: "changes", label: "7. Changes" },
    { id: "contact", label: "8. Contact" },
  ],
  sections: [
    {
      id: "what-are-cookies",
      heading: "1. What Are Cookies",
      paragraphs: [
        "Cookies are small text files stored on your device. Similar technologies include web beacons, pixels, local storage, and session storage.",
      ],
    },
    {
      id: "types-of-cookies-we-use",
      heading: "2. Types of Cookies We Use",
      paragraphs: [
        "Category — Purpose — Examples — Duration",
        "Strictly Necessary — Essential for platform function. Cannot be disabled. — Auth0 session tokens, CSRF protection, load balancing — Session or up to 30 days",
        "Functional — Remember preferences and settings. — Language, model defaults, theme — Up to 12 months",
        "Analytics — Understand how users interact with Services. — Mixpanel, Google Analytics — Up to 24 months",
        "Performance — Monitor speed and reliability. — Error tracking, page load timing — Up to 12 months",
        "We do not use advertising or behavioral targeting cookies.",
      ],
    },
    {
      id: "third-party-sharing",
      heading: "3. Third-Party Sharing",
      paragraphs: [
        "• LLM and AI Service Providers — for model routing and processing",
        "• Auth0 — for authentication and session management",
        "• Mixpanel, Google Analytics — aggregated usage insights",
        "• AWS — hosting and infrastructure",
        "• Stripe — payment processing including UPI Autopay",
        "We do not sell or share personal data for advertising.",
      ],
    },
    {
      id: "consent",
      heading: "4. Consent",
      paragraphs: [
        "We display an opt-in cookie consent banner to all users. Non-essential cookies do not activate until you consent. Manage preferences via the banner, footer link, or browser settings.",
      ],
    },
    {
      id: "your-rights",
      heading: "5. Your Rights",
      paragraphs: [
        "USA (CCPA/CPRA): Right to know, delete, opt out. Contact info@getsouvenir.com.",
        "Canada (PIPEDA): Meaningful consent required. Withdraw anytime via info@getsouvenir.com.",
        "India (DPDP Act): Data Principal rights preserved. Contact info@getsouvenir.com.",
      ],
    },
    {
      id: "retention",
      heading: "6. Retention",
      paragraphs: [
        "Data Type — Retention",
        "Session cookies — Deleted on logout/close",
        "Functional cookies — Up to 12 months",
        "Analytics data — Up to 24 months",
      ],
    },
    {
      id: "changes",
      heading: "7. Changes",
      paragraphs: ["14 days’ notice for material changes."],
    },
    {
      id: "contact",
      heading: "8. Contact",
      paragraphs: [
        "Company: Souvenir, Inc.",
        "Address: 211 28th Street, Des Moines, IA 50312",
        "Email: info@getsouvenir.com",
        "Website: getsouvenir.com",
      ],
    },
  ],
};

const dmcaTakedownRequestsBody: LegalDocumentBody = {
  lastUpdated: "April 5, 2026",
  lastUpdatedIso: "2026-04-05",
  intro: "Digital Millennium Copyright Act Notice and Takedown Procedures",
  toc: [
    { id: "respect-for-ip", label: "1. Respect for IP" },
    { id: "designated-dmca-agent", label: "2. Designated DMCA Agent" },
    { id: "filing-a-takedown-notice", label: "3. Filing a Takedown Notice" },
    { id: "counter-notification", label: "4. Counter-Notification" },
    { id: "repeat-infringer-policy", label: "5. Repeat Infringer Policy" },
    { id: "removal-process", label: "6. Removal Process" },
    { id: "good-faith", label: "7. Good Faith" },
    { id: "contact", label: "8. Contact" },
  ],
  sections: [
    {
      id: "respect-for-ip",
      heading: "1. Respect for IP",
      paragraphs: [
        "Souvenir, Inc. respects intellectual property rights. In accordance with the DMCA (17 U.S.C. § 512), we respond promptly to valid notices submitted to our designated agent.",
      ],
    },
    {
      id: "designated-dmca-agent",
      heading: "2. Designated DMCA Agent",
      paragraphs: [
        "Our designated agent registered with the U.S. Copyright Office is:",
        "Name: James Oliver",
        "Company: Souvenir, Inc.",
        "Address: 211 28th Street, Des Moines, IA 50312",
        "Email: oliver@getsouvenir.com",
        "Registration Number: DMCA-1070683",
        "Status: Active",
        "Effective: March 17, 2026 to Present",
        "Alternate Names: SouvenirAI",
      ],
    },
    {
      id: "filing-a-takedown-notice",
      heading: "3. Filing a Takedown Notice",
      paragraphs: [
        "Submit a written notification containing:",
        "1. Physical or electronic signature of the copyright owner or authorized agent.",
        "2. Identification of the copyrighted work claimed to be infringed.",
        "3. Identification of the infringing material and information sufficient to locate it.",
        "4. Your contact information: name, address, telephone number, and email.",
        "5. A good faith belief statement that the use is not authorized.",
        "6. A statement under penalty of perjury that the information is accurate and you are authorized to act.",
        "Send to: oliver@getsouvenir.com",
        "Under 17 U.S.C. § 512(f), knowingly material misrepresentation may result in liability for damages.",
      ],
    },
    {
      id: "counter-notification",
      heading: "4. Counter-Notification",
      paragraphs: [
        "If you believe content was removed in error, submit a counter-notification containing:",
        "7. Your physical or electronic signature.",
        "8. Identification of removed material and its prior location.",
        "9. Good faith belief statement under penalty of perjury.",
        "10. Your name, address, phone, and consent to Federal District Court jurisdiction in Delaware.",
        "Send to: oliver@getsouvenir.com",
        "Removed material may be restored 10–14 business days after receipt unless the complainant files a court action.",
      ],
    },
    {
      id: "repeat-infringer-policy",
      heading: "5. Repeat Infringer Policy",
      paragraphs: [
        "• First strike: Content removed, warning issued.",
        "• Second strike: Content removed, warning, temporary restrictions.",
        "• Third strike: Account permanently terminated.",
      ],
    },
    {
      id: "removal-process",
      heading: "6. Removal Process",
      paragraphs: [
        "Upon valid notice: material is promptly removed, user is notified, and counter-notification procedures are provided.",
      ],
    },
    {
      id: "good-faith",
      heading: "7. Good Faith",
      paragraphs: [
        "Souvenir, Inc. processes all notices in good faith. We do not make copyright ownership determinations. Consult an attorney if uncertain.",
      ],
    },
    {
      id: "contact",
      heading: "8. Contact",
      paragraphs: [
        "DMCA Agent: James Oliver",
        "Email: oliver@getsouvenir.com",
        "General: info@getsouvenir.com",
        "Address: 211 28th Street, Des Moines, IA 50312",
        "Website: getsouvenir.com",
      ],
    },
  ],
};

const termsOfServiceBody: LegalDocumentBody = {
  lastUpdated: "April 7, 2026",
  lastUpdatedIso: "2026-04-07",
  intro:
    'Welcome to Souvenir! These Terms of Service ("Terms") govern your use of getsouvenir.com, the Souvenir web application, and any other products and services we may offer (together, our "Services"). These Terms are a contract between you and Souvenir, Inc. ("Souvenir," "we," "us," or "our"), incorporating our Acceptable Use Policy, Privacy Policy, and Cookie and Tracking Disclosure Policy by reference. By creating an account or accessing our Services, you agree to these Terms. If you do not agree, do not use the Services. Our Services are available to users in the United States, Canada, and India.',
  toc: [
    { id: "who-we-are", label: "1. Who We Are" },
    { id: "account-creation-and-access", label: "2. Account Creation and Access" },
    { id: "use-of-our-services", label: "3. Use of Our Services" },
    { id: "inputs-outputs-and-materials", label: "4. Inputs, Outputs, and Materials" },
    { id: "subscriptions-and-billing", label: "5. Subscriptions and Billing" },
    { id: "intellectual-property", label: "6. Intellectual Property" },
    { id: "copyright-and-dmca-policy", label: "7. Copyright and DMCA Policy" },
    { id: "third-party-provider-terms", label: "8. Third-Party Provider Terms" },
    { id: "acceptable-use-policy", label: "9. Acceptable Use Policy" },
    { id: "disclaimers-and-liability", label: "10. Disclaimers and Liability" },
    { id: "general-terms", label: "11. General Terms" },
    { id: "dispute-resolution", label: "12. Dispute Resolution" },
    { id: "contact", label: "13. Contact" },
  ],
  sections: [
    {
      id: "who-we-are",
      heading: "1. Who We Are",
      paragraphs: [
        "Souvenir, Inc. is a Delaware C-Corporation (File No. 10526583) that operates Souvenir, a unified AI workspace that connects multiple large language models and AI services into a single interface.",
        "We provide persistent context management, intelligent model routing, workflow automation, and organizational tools.",
      ],
    },
    {
      id: "account-creation-and-access",
      heading: "2. Account Creation and Access",
      paragraphs: [
        "2.1 Minimum Age: You must be at least 18 years old, or the minimum age required in your jurisdiction, whichever is higher.",
        "2.2 Your Account: You must create an account with accurate, current, and complete information. You may not share login credentials. You are responsible for all account activity. Notify us of unauthorized access at info@getsouvenir.com. Close your account anytime by contacting info@getsouvenir.com.",
        "2.3 Team Accounts: If you use a Team Account, your organization’s administrator may monitor and control your account, including access to Materials.",
      ],
    },
    {
      id: "use-of-our-services",
      heading: "3. Use of Our Services",
      paragraphs: [
        "You may use our Services only in compliance with these Terms and our AUP.",
        "You may not:",
        "1. Use the Services in violation of any applicable law, including export control laws of the US, India, Canada, or other jurisdictions.",
        "2. Develop competing products, train AI/ML models, or resell the Services.",
        "3. Reverse engineer, decompile, or disassemble our Services, except where prohibited by applicable law.",
        "4. Scrape or harvest data from our Services except as permitted.",
        "5. Use our Services to gain unauthorized access to any system or to deceive any person.",
        "6. Infringe intellectual property or privacy rights.",
        "7. Access the Services through bots or automated means unless explicitly permitted.",
        "8. Engage in conduct that restricts others or exposes us or third parties to liability.",
      ],
    },
    {
      id: "inputs-outputs-and-materials",
      heading: "4. Inputs, Outputs, and Materials",
      paragraphs: [
        '4.1 Definitions: "Inputs" are content you submit (text, images, files, code). "Outputs" are AI-generated responses (text, images, code). Together, they are "Materials."',
        "4.2 Multi-Model Routing: Your Inputs are routed through OpenRouter, a third-party middleware, to one or more AI providers: OpenAI, Anthropic, Google Gemini, and Mistral AI. Your content may also be processed by AWS Bedrock (Cohere) for vector embeddings, AWS Textract or Mistral for OCR, and executed in isolated Docker sandbox containers for code execution. By using our Services, you consent to this processing. Each provider operates under its own terms.",
        "4.3 Ownership: You retain ownership of your Inputs. We assign to you all rights in Outputs to the extent we have such rights. You are responsible for ensuring your use of Materials complies with applicable law.",
        "4.4 No Training Clause: We do not use your Inputs or Outputs to train our own AI models unless you explicitly opt in.",
        "4.5 AI Output Disclaimer: AI-generated Outputs may be inaccurate, incomplete, or misleading. Outputs may contain hallucinations, factual errors, or biased content. You should independently verify Outputs before relying on them. Outputs do not constitute professional advice of any kind. AI-generated code may contain errors, security vulnerabilities, or unintended behavior — you are solely responsible for reviewing and testing any code before use in production environments.",
        "4.6 Similarity of Outputs: Outputs generated for you may be similar or identical to Outputs generated for other users.",
      ],
    },
    {
      id: "subscriptions-and-billing",
      heading: "5. Subscriptions and Billing",
      paragraphs: [
        "5.1 Pricing: Pricing at getsouvenir.com/pricing, denominated in USD. Prices exclude applicable taxes unless stated otherwise.",
        "5.2 Payment: Payments processed by Stripe, Inc. We accept major credit/debit cards and local payment methods including UPI in India. Stripe’s terms apply.",
        "5.3 Auto-Renewal: Paid subscriptions auto-renew unless cancelled before renewal. Cancel through your account settings online.",
        "California: Express consent required; 7+ days notice before price increases.",
        "New York: 15–45 day renewal reminders; in-app cancel button.",
        "Colorado: One-step online cancellation.",
        "India (UPI Autopay): RBI-compliant e-mandate registration and 24-hour pre-debit notification.",
        "5.4 Refunds: Contact info@getsouvenir.com within 14 days. Determined case-by-case.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "6. Intellectual Property",
      paragraphs: [
        "The Services, including our auto-routing algorithm, workflow engine, and context management system, are owned by Souvenir, Inc. We retain all rights, title, and interest.",
      ],
    },
    {
      id: "copyright-and-dmca-policy",
      heading: "7. Copyright and DMCA Policy",
      paragraphs: [
        "Submit copyright infringement notices to our DMCA agent:",
        "DMCA Agent: James Oliver",
        "Address: 211 28th Street, Des Moines, IA 50312",
        "Email: oliver@getsouvenir.com",
        "Registration: DMCA-1070683",
        "DMCA Page: getsouvenir.com/dmca",
        "We maintain a repeat infringer policy. Accounts subject to repeated valid complaints may be terminated.",
      ],
    },
    {
      id: "third-party-provider-terms",
      heading: "8. Third-Party Provider Terms",
      paragraphs: [
        "You must comply with each AI provider’s usage policies. You may not represent AI Outputs as human-generated, use Outputs to train competing models, or use the Services for personalized legal/medical/financial advice without professional oversight.",
      ],
    },
    {
      id: "acceptable-use-policy",
      heading: "9. Acceptable Use Policy",
      paragraphs: [
        "Our AUP is incorporated by reference. Full text at getsouvenir.com/aup.",
      ],
    },
    {
      id: "disclaimers-and-liability",
      heading: "10. Disclaimers and Liability",
      paragraphs: [
        'THE SERVICES AND OUTPUTS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES OF FITNESS, MERCHANTABILITY, ACCURACY, AND NON-INFRINGEMENT. THE SOUVENIR PARTIES’ TOTAL AGGREGATE LIABILITY WILL NOT EXCEED THE GREATER OF AMOUNTS PAID IN THE PRIOR SIX MONTHS OR $100 USD.',
        "You agree to indemnify Souvenir, Inc. from claims arising from your breach of these Terms, use of the Services, or violation of law. Consumer protection laws in Canada and India may limit certain disclaimers.",
      ],
    },
    {
      id: "general-terms",
      heading: "11. General Terms",
      paragraphs: [
        "We may revise these Terms with at least 14 days’ notice. These Terms, our Privacy Policy, Cookie Policy, and AUP form the entire agreement. Souvenir, Inc. is a Delaware C-Corporation; these Terms are governed by Delaware law. Canadian and Indian users retain mandatory consumer protection rights.",
      ],
    },
    {
      id: "dispute-resolution",
      heading: "12. Dispute Resolution",
      paragraphs: [
        "Informal: Contact info@getsouvenir.com. 30-day resolution attempt required.",
        "Governing Law: State of Delaware, United States.",
        "Arbitration: AAA Consumer Arbitration Rules. Delaware or video conference.",
        "Class Action Waiver: Disputes resolved individually to the extent permitted by law.",
        "Canada & India: Mandatory local consumer protection rights preserved.",
      ],
    },
    {
      id: "contact",
      heading: "13. Contact",
      paragraphs: [
        "Company: Souvenir, Inc.",
        "Address: 211 28th Street, Des Moines, IA 50312",
        "Email: info@getsouvenir.com",
        "Website: getsouvenir.com",
      ],
    },
  ],
};

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
  if (sectionSlug === "platform-terms" && docSlug === "terms-of-service") {
    return termsOfServiceBody;
  }
  if (sectionSlug === "platform-terms" && docSlug === "acceptable-use-policy") {
    return acceptableUsePolicyBody;
  }
  if (sectionSlug === "privacy-data" && docSlug === "cookie-policy") {
    return cookieAndTrackingDisclosurePolicyBody;
  }
  if (sectionSlug === "security-trust" && docSlug === "dmca-takedown-requests") {
    return dmcaTakedownRequestsBody;
  }
  return defaultStubBody();
}
