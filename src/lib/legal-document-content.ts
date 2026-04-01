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
  lastUpdated: "April 1, 2026",
  lastUpdatedIso: "2026-04-01",
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
        "We collect information you provide directly, information collected automatically when you use our Services, and information from third-party integrations you choose to connect.",
        'Information You Provide: This includes account information (such as your name, email address, password, and account credentials), Inputs (prompts, files, images, instructions, and other content you submit to the platform, collectively referred to as "Inputs"), workspace data (projects, workflows, saved context, Personas, Pins, and AI-generated outputs, collectively referred to as "Outputs"), and communications (such as support inquiries, feedback, and correspondence with us).',
        "Payment Information: Billing details are processed by our payment processor, Stripe. We do not store credit card numbers, bank account details, or UPI IDs on our servers.",
        "Information Collected Automatically: We collect device and browser information (such as device type, operating system, screen resolution, and browser version), IP address and approximate geographic location at a country or region level, usage data (features accessed, interaction patterns, session duration, and activity timestamps), log data (including server logs, timestamps, error reports, referring URLs, and system activity), and information from cookies and similar technologies as described in our Cookie and Tracking Disclosure Policy.",
        "Information from Third-Party Integrations: If you connect third-party services to your Souvenir account, we may access and process data from those services as necessary to enable the integration, in accordance with the permissions you grant.",
      ],
    },
    {
      id: "how-we-use-your-information",
      heading: "3. How We Use Your Information",
      paragraphs: [
        "We use the information we collect for the following purposes:",
        "To provide, operate, and maintain the platform, including persistent context and memory across workflows.",
        "To route your Inputs to appropriate AI models based on your settings or our auto-routing algorithm.",
        "To process payments and manage your subscription.",
        "To improve output quality, system performance, and user experience, including through analytics and product research.",
        "To support collaboration within shared workspaces and team accounts.",
        "To respond to support requests, user inquiries, and feedback.",
        "To monitor usage for abuse prevention, security, and enforcement of our Terms of Service and Acceptable Use Policy.",
        "To comply with legal obligations, respond to lawful requests, and protect our legal rights.",
        "To send transactional communications, including account confirmations, billing notices, and security alerts.",
        "We do not use your Inputs or Outputs to train our own AI models unless you explicitly opt in.",
      ],
    },
    {
      id: "ai-models-and-third-party-processing",
      heading: "4. AI Models and Third-Party Data Processing",
      paragraphs: [
        "Souvenir integrates with multiple third-party AI model providers and AI services. When you submit an Input, it may be transmitted to one or more of the following providers for processing:",
        "Text and Chat Models (United States): OpenAI, Anthropic, Google Gemini, xAI / Grok",
        "Text and OCR Models (France): Mistral AI",
        "Search and Data Retrieval (Germany): Jina AI",
        "Image Generation (Germany): Flux by Black Forest Labs",
        "Text and Chat Models (People’s Republic of China): DeepSeek, Alibaba / Qwen, Moonshot AI / Kimi, ChatGLM / Zhipu AI — data may be processed and stored in China.",
        "Important Data Sovereignty Notice: When you select or are routed to DeepSeek, Alibaba/Qwen, Moonshot AI/Kimi, and ChatGLM/Zhipu AI, your Input data is transmitted to servers located in the People’s Republic of China. These providers may be subject to Chinese data access laws. You may disable China-based AI models (DeepSeek, Alibaba/Qwen, Moonshot AI/Kimi, and ChatGLM/Zhipu AI) at any time from your account Settings. When disabled, your data will not be transmitted to servers in the People’s Republic of China. Our auto-routing algorithm preferences US-based inference providers with Zero Data Retention (ZDR) enabled by default.",
        "Each AI provider processes your data under their own terms and privacy policies. We share only the data necessary to fulfill your request. Under our API agreements with US- and Europe-based providers, your Inputs and Outputs are not used for model training. China-based providers may reserve the right to use inputs and outputs for model training under their own terms.",
      ],
    },
    {
      id: "data-storage-and-retention",
      heading: "5. Data Storage and Retention",
      paragraphs: [
        "Your data is primarily stored on Amazon Web Services (AWS) infrastructure in the United States.",
        "We store conversation history, context, memory, and workspace data to provide persistent functionality across sessions.",
        "We retain data for as long as your account is active or as needed to provide the Services, comply with legal obligations, resolve disputes, and enforce our agreements.",
        "You may request deletion of your data at any time by contacting info@getsouvenir.com.",
        "Upon account termination, we will delete your Materials within 90 days, except where retention is required for legal, security, or compliance purposes.",
        "Analytics data is generally retained for up to 24 months.",
        "Session cookies are deleted upon logout or browser close.",
      ],
    },
    {
      id: "data-sharing-and-disclosure",
      heading: "6. Data Sharing and Disclosure",
      paragraphs: [
        "We do not sell your personal data. We do not share your personal data for cross-context behavioral advertising.",
        "We may share data in the following limited circumstances:",
        "With AI model providers to process your Inputs and generate Outputs, as described in Section 4.",
        "With service providers such as Stripe (payments), Auth0 (authentication), AWS (hosting and infrastructure), Mixpanel and Google Analytics (usage analytics), and email service providers (transactional communications).",
        "To comply with law, including responding to valid legal process, court orders, subpoenas, or regulatory requests from authorities in the United States, Canada, or India.",
        "To protect rights and safety, including enforcing our Terms of Service, protecting the security of users and the platform, and preventing fraud or abuse.",
        "In connection with a business transaction, such as a merger, acquisition, or sale of assets, in which your data may be transferred as part of the transaction, subject to this Privacy Policy.",
      ],
    },
    {
      id: "international-data-transfers",
      heading: "7. International Data Transfers",
      paragraphs: [
        "Souvenir, Inc. is based in the United States, and your information is primarily stored and processed in the United States. Certain AI models process data in France, Germany, and the People’s Republic of China, as disclosed in Section 4.",
        "For users in Canada, we ensure that personal information transferred outside Canada receives a comparable level of protection through contractual safeguards with our service providers, as required under PIPEDA.",
        "For users in India, cross-border data transfers are currently permitted under the Digital Personal Data Protection Act, 2023, unless the Central Government restricts transfers to specific jurisdictions. We will comply with any future restrictions.",
      ],
    },
    {
      id: "your-rights-and-choices",
      heading: "8. Your Rights and Choices",
      paragraphs: [
        "Regardless of your location, you may have the right to: access the personal data we hold about you, correct inaccurate or incomplete data, request deletion of your data, export your data in a machine-readable format, withdraw consent where processing is based on consent, and close your account at any time.",
        "United States Residents: California residents (CCPA/CPRA) have the right to know what personal information we collect and how it is used; request deletion of personal information; opt out of the sale or sharing of personal information (we do not sell or share personal information as defined under the CCPA/CPRA); and be free from discrimination for exercising privacy rights. Other U.S. state privacy laws (including but not limited to Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Montana, and Iowa) may provide similar rights to access, delete, correct, and opt out of certain data processing. To submit a request, contact us at info@getsouvenir.com. We will verify your identity before fulfilling requests.",
        "Canadian Users (PIPEDA): Canadian users have the right to access their personal information held by us; challenge the accuracy and completeness of their information and have it amended; withdraw consent, subject to legal or contractual restrictions; and know how their personal information is being used and to whom it has been disclosed. We obtain meaningful consent for the collection, use, and disclosure of your personal information. Express consent is required for sensitive information, including AI processing of your content.",
        "India Users (DPDP Act, 2023): Users in India (Data Principals) have the right to access a summary of personal data processed and the processing activities undertaken; correct and update inaccurate or misleading personal data; erase personal data that is no longer necessary for the purpose for which it was collected; nominate another individual to exercise rights in the event of death or incapacity; and file a grievance and, if unresolved, complain to the Data Protection Board of India. We process your personal data based on your consent, which you may withdraw at any time by contacting info@getsouvenir.com. Withdrawal of consent does not affect the lawfulness of processing performed before withdrawal.",
        "How to Exercise Your Rights: To exercise any of these rights, email info@getsouvenir.com or write to us at 211 28th Street, Des Moines, IA 50312. We will respond to verified requests within 30 days or sooner if required by applicable law.",
      ],
    },
    {
      id: "security",
      heading: "9. Security",
      paragraphs: [
        "We implement reasonable technical and organizational measures to protect your personal data from unauthorized access, loss, misuse, or alteration. These measures include encryption of data in transit (TLS/SSL) and at rest, role-based access controls, regular security assessments, and secure authentication protocols via Auth0.",
        "No method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security. We encourage you to use strong, unique passwords and enable available security features.",
        "In the event of a personal data breach that poses a risk to your rights, we will notify affected users and relevant authorities in accordance with applicable law, including applicable U.S. state breach notification laws (including Iowa Chapter 715C), PIPEDA breach notification requirements in Canada, and the DPDP Act breach notification requirements in India (once in effect).",
      ],
    },
    {
      id: "team-and-workspace-data",
      heading: "10. Team and Workspace Data",
      paragraphs: [
        "If you use Souvenir within a team or shared workspace, workspace owners and administrators may control access permissions, roles, and account settings.",
        "Content shared within a workspace may be visible to other members based on their access level. You are responsible for the data you choose to share within collaborative environments.",
      ],
    },
    {
      id: "childrens-privacy",
      heading: "11. Children's Privacy",
      paragraphs: [
        "Souvenir is not intended for use by individuals under the age of 18. We do not knowingly collect personal data from anyone under 18 years of age.",
        "If we become aware that we have collected personal data from a person under 18, we will take steps to delete that information promptly. If you believe a person under 18 has provided us with personal information, please contact us at info@getsouvenir.com.",
      ],
    },
    {
      id: "cookies-and-tracking-technologies",
      heading: "12. Cookies and Tracking Technologies",
      paragraphs: [
        "We use cookies and similar technologies as described in our separate Cookie and Tracking Disclosure Policy, available at getsouvenir.com/cookies.",
        "We display an opt-in cookie consent banner to users. You may manage cookie preferences through the consent banner on our website or through your browser settings.",
      ],
    },
    {
      id: "do-not-track-disclosure",
      heading: "13. Do Not Track Disclosure",
      paragraphs: [
        'Some web browsers transmit "Do Not Track" (DNT) signals. Because there is no universally accepted standard for how to respond to DNT signals, we do not currently respond to DNT signals.',
      ],
    },
    {
      id: "third-party-links",
      heading: "14. Third-Party Links",
      paragraphs: [
        "Our Services may contain links to third-party websites or services. We are not responsible for the privacy practices of those third parties, and their collection and use of your data are governed by their own policies.",
      ],
    },
    {
      id: "changes-to-this-policy",
      heading: "15. Changes to This Privacy Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements.",
        "If we make material changes, we will provide at least 14 days’ notice before the changes take effect, by posting the updated policy on our website and, where appropriate, by email notification.",
        "Your continued use of our Services after the effective date of the updated policy constitutes your acceptance of the changes.",
      ],
    },
    {
      id: "contact-information",
      heading: "16. Contact Information",
      paragraphs: [
        "If you have any questions about this Privacy Policy, your data, or wish to exercise your rights, you can contact us at:",
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
  lastUpdated: "April 1, 2026",
  lastUpdatedIso: "2026-04-01",
  intro:
    'This Acceptable Use Policy ("AUP") governs your use of Souvenir and is incorporated into our Terms of Service. Violations may result in suspension, termination, or reporting to law enforcement.',
  toc: [
    { id: "age-requirement", label: "1. Age Requirement" },
    { id: "prohibited-content", label: "2. Prohibited Content" },
    { id: "data-sovereignty", label: "3. Data Sovereignty" },
    { id: "personas", label: "4. Personas" },
    { id: "workflows", label: "5. Workflows" },
    { id: "memory", label: "6. Memory" },
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
        "You must be at least 18 to use Souvenir.",
        "We may enforce this requirement via date-of-birth verification, and accounts identified as under 18 are immediately terminated.",
      ],
    },
    {
      id: "prohibited-content",
      heading: "2. Prohibited Content",
      paragraphs: [
        "You may not use Souvenir to generate, upload, share, or otherwise engage with content that violates this section.",
        "2.1 Sexually Explicit Content: Sexually explicit content is prohibited across all models without exception.",
        "2.2 CSAM: We maintain an absolute zero-tolerance policy for child sexual abuse material (CSAM). Suspected CSAM is reported to NCMEC pursuant to 18 U.S.C. § 2258A and to law enforcement, and results in immediate account termination.",
        "2.3 Violence and Terrorism: You may not promote or glorify terrorism or violent extremism, provide weapons or explosives instructions, depict graphic real-world violence, or make threats of violence.",
        "2.4 Self-Harm: You may not promote suicide or self-injury or glorify eating disorders.",
        "2.5 Hate Speech: You may not attack or demean individuals or groups based on protected characteristics, engage in harassment, bullying, or doxxing, or otherwise target others with hateful conduct.",
        "2.6 Deception: You may not impersonate others without consent, create or distribute phishing or scam materials, generate disinformation or misleading deepfakes, misrepresent AI outputs as human-created work, or use the services to facilitate academic dishonesty.",
        "2.7 Privacy Violations: You may not engage in unauthorized collection of personal information, stalking or surveillance, or doxxing of individuals.",
        "2.8 Malware and System Abuse: You may not generate malicious code, attempt unauthorized access to systems, circumvent safety filters or perform prompt injection attacks, or attempt to bypass rate limits or abuse service resources.",
        "2.9 Illegal Activity: You may not use the services to facilitate illegal activity under United States, Canadian, or Indian law, including but not limited to activity involving controlled substances or human trafficking.",
        "2.10 IP Infringement: You may not reproduce copyrighted material without authorization, infringe trademarks, patents, or trade secrets, or attempt to circumvent digital rights management (DRM) or similar protections.",
        "2.11 Image Generation: AI-generated images (via Flux or other image models) must not depict real individuals without their consent, generate CSAM or sexually explicit imagery, create misleading deepfakes, or otherwise violate any of the prohibited content categories in this AUP.",
      ],
    },
    {
      id: "data-sovereignty",
      heading: "3. Data Sovereignty",
      paragraphs: [
        "DeepSeek, Alibaba/Qwen, Moonshot AI/Kimi, and ChatGLM/Zhipu AI process data in the People’s Republic of China.",
        "You may disable China-based AI models (DeepSeek, Alibaba/Qwen, Moonshot AI/Kimi, and ChatGLM/Zhipu AI) at any time from your account Settings. When disabled, your data will not be transmitted to servers in the People’s Republic of China.",
        "We strongly recommend disabling China-based models for sensitive or regulated data.",
      ],
    },
    {
      id: "personas",
      heading: "4. Personas",
      paragraphs: [
        "Persona creators must ensure that Persona instructions comply with this AUP, do not impersonate real individuals, and do not attempt to bypass safety filters.",
        "If you use shared Personas, you remain responsible for your own conduct and for ensuring your use complies with this AUP and other applicable terms.",
      ],
    },
    {
      id: "workflows",
      heading: "5. Workflows",
      paragraphs: [
        "You are responsible for all Workflow outputs and actions initiated through your account.",
        "Workflows must not automate the production of prohibited content or be used to circumvent system limits, safety measures, or rate limits.",
      ],
    },
    {
      id: "memory",
      heading: "6. Memory",
      paragraphs: [
        "You can view, edit, and delete stored memory through your account Settings or other controls we provide.",
        "You must not store others’ personal information in memory without their consent or other lawful basis.",
        "Data sovereignty warnings apply to memory associated with conversations routed through China-based models; if you disable those models, new memory from those providers will not be created.",
      ],
    },
    {
      id: "teams",
      heading: "7. Teams",
      paragraphs: [
        "Workspace and team administrators are responsible for ensuring that members’ use of Souvenir complies with this AUP and all applicable terms.",
        "Administrators may disable China-based models at the workspace level where appropriate for their organization’s risk profile and regulatory obligations.",
      ],
    },
    {
      id: "provider-compliance",
      heading: "8. Provider Compliance",
      paragraphs: [
        "You must comply with each upstream AI provider’s applicable terms and policies when using Souvenir.",
        "You may not use Outputs to train or improve competing models in violation of provider terms, and you may not represent AI-generated Outputs as exclusively human-generated where applicable law or platform policies would consider that misleading.",
      ],
    },
    {
      id: "dmca-takedowns",
      heading: "9. DMCA Takedowns",
      paragraphs: [
        "We follow a graduated response process for valid DMCA takedown notices related to content generated or shared through Souvenir:",
        "First strike: Content is removed and a warning is issued.",
        "Second strike: Content is removed, a warning is issued, and we may apply feature or account restrictions.",
        "Third strike: Account is terminated.",
        "Submit DMCA takedown notices to James Oliver at oliver@getsouvenir.com. Full DMCA procedures are available at getsouvenir.com/dmca.",
      ],
    },
    {
      id: "enforcement",
      heading: "10. Enforcement",
      paragraphs: [
        "We may take enforcement actions ranging from warnings and content removal to immediate account suspension or termination, at our discretion and as permitted by law.",
        "CSAM, terrorism-related activity, and imminent threats of violence result in immediate termination without prior warning and may be reported to law enforcement and relevant authorities.",
      ],
    },
    {
      id: "reporting",
      heading: "11. Reporting",
      paragraphs: [
        "If you become aware of content or behavior that may violate this AUP, please notify us so we can review it.",
        "You may contact us at info@getsouvenir.com to report abuse or potential violations.",
      ],
    },
    {
      id: "changes",
      heading: "12. Changes",
      paragraphs: [
        "We may update this Acceptable Use Policy from time to time.",
        "We will provide at least 14 days’ notice for material changes, unless immediate changes are required for legal, safety, or security reasons.",
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

const cookieAndTrackingDisclosurePolicyBody: LegalDocumentBody = {
  lastUpdated: "April 1, 2026",
  lastUpdatedIso: "2026-04-01",
  intro:
    "This Cookie and Tracking Disclosure Policy explains how Souvenir, Inc. uses cookies and similar tracking technologies on getsouvenir.com. It should be read together with our Privacy Policy and Terms of Service and applies to users in the United States, Canada, and India.",
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
        "Cookies are small text files stored on your device when you visit a website or use an online service. Similar technologies include web beacons, pixels, local storage, and session storage.",
      ],
    },
    {
      id: "types-of-cookies-we-use",
      heading: "2. Types of Cookies We Use",
      paragraphs: [
        "We use the following categories of cookies on getsouvenir.com:",
        "Strictly Necessary: Essential for the platform to function and cannot be disabled through our systems. Examples include Auth0 session tokens, CSRF protection, and load-balancing identifiers. These typically last for the duration of your session or up to 30 days.",
        "Functional: Remember your preferences and settings so that your experience is more personalized. Examples include language selection, model defaults, and theme choices. These cookies generally persist for up to 12 months.",
        "Analytics: Help us understand how users interact with our Services so we can improve performance and usability. Examples include analytics tools such as Mixpanel and Google Analytics, which may store data for up to 24 months.",
        "Performance: Help us monitor the speed, reliability, and stability of our Services, including error tracking and page load timing. These cookies typically persist for up to 12 months.",
        "We do not use advertising or behavioral targeting cookies on getsouvenir.com.",
      ],
    },
    {
      id: "third-party-sharing",
      heading: "3. Third-Party Sharing",
      paragraphs: [
        "We may allow certain third-party providers to set or access cookies in connection with the services they provide to us. These providers include:",
        "LLM and AI service providers, which receive data as necessary for model routing and inference.",
        "Auth0, which provides authentication and session management.",
        "Analytics providers such as Mixpanel and Google Analytics, which help us derive aggregated insights about how the Services are used.",
        "Infrastructure providers such as Amazon Web Services (AWS), which support hosting, storage, and related infrastructure needs.",
        "Payment processors such as Stripe, which support payment processing, including methods like UPI Autopay.",
        "We do not sell or share your personal data for advertising purposes.",
      ],
    },
    {
      id: "consent",
      heading: "4. Consent",
      paragraphs: [
        "We display an opt-in cookie consent banner to users. Non-essential cookies (such as many functional, analytics, and performance cookies) do not activate until you provide consent where required.",
        "You can manage your preferences at any time via the cookie banner (when shown again), a footer link or in-product settings where available, or through your browser settings, which may allow you to block or delete cookies.",
      ],
    },
    {
      id: "your-rights",
      heading: "5. Your Rights",
      paragraphs: [
        "United States (including CCPA/CPRA where applicable): You may have rights to know what personal information is collected, to request deletion of certain information, and to opt out of certain data sharing. To exercise these rights or request more information, contact us at info@getsouvenir.com.",
        "Canada (PIPEDA): We rely on meaningful consent for the collection, use, and disclosure of personal information, including through cookies where personal information is involved. You may withdraw your consent at any time, subject to legal or contractual restrictions, by contacting us at info@getsouvenir.com.",
        "India (DPDP Act): As a Data Principal, you may have rights over your personal data, including rights to access, correction, and grievance redressal. You can contact us at info@getsouvenir.com to exercise applicable rights related to data collected through cookies and tracking technologies.",
      ],
    },
    {
      id: "retention",
      heading: "6. Retention",
      paragraphs: [
        "We retain cookie-derived data in line with the following general timeframes:",
        "Session cookies: Deleted when you log out of your account or close your browser session.",
        "Functional cookies: Retained for up to 12 months, unless you clear them earlier via your browser or settings.",
        "Analytics data: Retained for up to 24 months in aggregate or de-identified form, depending on the provider and configuration.",
      ],
    },
    {
      id: "changes",
      heading: "7. Changes",
      paragraphs: [
        "We may update this Cookie and Tracking Disclosure Policy from time to time to reflect changes in our practices, technologies, or legal requirements.",
        "For material changes, we will provide at least 14 days’ notice through the Services, by email, or by other appropriate means, unless an earlier effective date is required for legal, security, or operational reasons.",
      ],
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
  lastUpdated: "April 1, 2026",
  lastUpdatedIso: "2026-04-01",
  intro:
    'This Digital Millennium Copyright Act Notice and Takedown Procedures ("DMCA Policy") explains how Souvenir, Inc. responds to copyright complaints under the U.S. Digital Millennium Copyright Act (17 U.S.C. § 512).',
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
        "Souvenir, Inc. respects intellectual property rights.",
        "In accordance with the Digital Millennium Copyright Act (17 U.S.C. § 512), we respond promptly to valid notices submitted to our designated agent.",
      ],
    },
    {
      id: "designated-dmca-agent",
      heading: "2. Designated DMCA Agent",
      paragraphs: [
        "Our designated DMCA agent registered with the U.S. Copyright Office is:",
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
        "If you believe that content available through our services infringes your copyright, you or your authorized agent may submit a written DMCA takedown notice that includes all of the following information:",
        "1. Physical or electronic signature of the copyright owner or a person authorized to act on their behalf.",
        "2. Identification of the copyrighted work claimed to have been infringed (or, if multiple works at a single online site are covered, a representative list of such works).",
        "3. Identification of the material that is claimed to be infringing or to be the subject of infringing activity and information reasonably sufficient to permit us to locate the material.",
        "4. Your contact information, including your name, mailing address, telephone number, and email address.",
        "5. A statement that you have a good faith belief that the use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.",
        "6. A statement that the information in the notification is accurate and, under penalty of perjury, that you are the copyright owner or are authorized to act on the copyright owner's behalf.",
        "Send DMCA takedown notices to: oliver@getsouvenir.com.",
        "Under 17 U.S.C. § 512(f), any person who knowingly materially misrepresents that material or activity is infringing may be liable for damages, including costs and attorneys' fees.",
      ],
    },
    {
      id: "counter-notification",
      heading: "4. Counter-Notification",
      paragraphs: [
        "If you believe that material was removed or disabled by mistake or misidentification, you may submit a DMCA counter-notification to our DMCA agent. Your counter-notification must include:",
        "1. Your physical or electronic signature.",
        "2. Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or disabled.",
        "3. A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification.",
        "4. Your name, mailing address, and telephone number, and a statement that you consent to the jurisdiction of the Federal District Court for the District of Delaware, and that you will accept service of process from the person who provided the original notification or their agent.",
        "Send counter-notifications to: oliver@getsouvenir.com.",
        "If we receive a valid counter-notification, we may restore the removed material after 10–14 business days unless the original complainant notifies us that they have filed a court action seeking to restrain the allegedly infringing activity.",
      ],
    },
    {
      id: "repeat-infringer-policy",
      heading: "5. Repeat Infringer Policy",
      paragraphs: [
        "We may, in appropriate circumstances and at our discretion, terminate the accounts of users who are determined to be repeat infringers.",
        "Our general approach to repeat infringement includes:",
        "First strike: Content removed and a warning issued.",
        "Second strike: Content removed, a warning issued, and temporary feature or account restrictions applied.",
        "Third strike: Account permanently terminated.",
      ],
    },
    {
      id: "removal-process",
      heading: "6. Removal Process",
      paragraphs: [
        "Upon receipt of a valid DMCA takedown notice, we will promptly remove or disable access to the identified material, consistent with our legal obligations and technical capabilities.",
        "We will notify the affected user, where possible, that we have removed or disabled access to the content and provide information about the counter-notification process.",
      ],
    },
    {
      id: "good-faith",
      heading: "7. Good Faith",
      paragraphs: [
        "Souvenir, Inc. processes DMCA notices and counter-notifications in good faith based on the information provided by the parties.",
        "We do not act as an arbiter of copyright ownership or the merits of any particular claim. If you are uncertain about your rights or obligations, you should consult with an attorney before submitting a notice or counter-notification.",
      ],
    },
    {
      id: "contact",
      heading: "8. Contact",
      paragraphs: [
        "DMCA Agent: James Oliver",
        "DMCA Email: oliver@getsouvenir.com",
        "General: info@getsouvenir.com",
        "Address: 211 28th Street, Des Moines, IA 50312",
        "Website: getsouvenir.com",
      ],
    },
  ],
};

const termsOfServiceBody: LegalDocumentBody = {
  lastUpdated: "April 1, 2026",
  lastUpdatedIso: "2026-04-01",
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
    { id: "data-sovereignty", label: "9. Data Sovereignty" },
    { id: "acceptable-use-policy", label: "10. Acceptable Use Policy" },
    { id: "disclaimers-and-liability", label: "11. Disclaimers and Liability" },
    { id: "general-terms", label: "12. General Terms" },
    { id: "dispute-resolution", label: "13. Dispute Resolution" },
    { id: "contact", label: "14. Contact" },
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
        "2.2 Your Account: You must create an account with accurate, current, and complete information. You may not share your login credentials with anyone else. You are responsible for all activity that occurs under your account. Notify us promptly of any unauthorized access or suspected compromise at info@getsouvenir.com. You may close your account at any time by contacting info@getsouvenir.com.",
        "2.3 Team Accounts: If you use a Team Account, your organization’s administrator may monitor and control your account, including access to Materials.",
      ],
    },
    {
      id: "use-of-our-services",
      heading: "3. Use of Our Services",
      paragraphs: [
        "You may use our Services only in compliance with these Terms and our Acceptable Use Policy.",
        "You may not:",
        "1. Use the Services in violation of any applicable law, including export control laws of the United States, India, Canada, or other jurisdictions.",
        "2. Develop competing products or services, train AI or machine learning models, or resell or sublicense the Services.",
        "3. Reverse engineer, decompile, or disassemble our Services except to the extent such restriction is prohibited by applicable law.",
        "4. Scrape, harvest, or index data from our Services except as expressly permitted in writing.",
        "5. Use our Services to gain unauthorized access to any system or to deceive any person.",
        "6. Infringe or misappropriate intellectual property, privacy, or other rights of any person.",
        "7. Access the Services through bots or automated means unless explicitly permitted by us.",
        "8. Engage in conduct that restricts or inhibits others from using the Services or that exposes us or third parties to liability.",
      ],
    },
    {
      id: "inputs-outputs-and-materials",
      heading: "4. Inputs, Outputs, and Materials",
      paragraphs: [
        '4.1 Definitions: "Inputs" are content you submit to the Services (such as text, images, and files). "Outputs" are AI-generated responses and content returned by the Services (including text and images). Together, Inputs and Outputs are referred to as "Materials."',
        "4.2 Multi-Model Routing: Your Inputs may be routed to one or more third-party AI providers, including OpenAI, Anthropic, Google, xAI, Mistral AI, Jina AI, Flux/Black Forest Labs, DeepSeek, Alibaba, Moonshot AI, and ChatGLM/Zhipu AI, among others. By using our Services, you consent to this routing. Each provider operates under its own terms and policies.",
        "4.3 Ownership: You retain ownership of your Inputs. To the extent we have any rights in the Outputs, we assign those rights to you. You are responsible for ensuring that your use of Materials complies with all applicable laws and these Terms.",
        "4.4 No Training Clause: We do not use your Inputs or Outputs to train our own AI models unless you explicitly opt in. Our auto-routing algorithm preferences providers with Zero Data Retention (ZDR) where available.",
        "4.5 AI Output Disclaimer: AI-generated Outputs may be inaccurate, incomplete, or misleading and may contain hallucinations, factual errors, or biased content. You should independently verify Outputs before relying on them. Outputs do not constitute professional advice of any kind (including legal, medical, or financial advice). AI-generated images may not accurately depict real people, places, or events.",
        "4.6 Similarity of Outputs: Because of the nature of AI, Outputs generated for you may be similar or identical to Outputs generated for other users.",
      ],
    },
    {
      id: "subscriptions-and-billing",
      heading: "5. Subscriptions and Billing",
      paragraphs: [
        "5.1 Pricing: Pricing for paid plans is displayed at getsouvenir.com/pricing and is denominated in United States Dollars (USD). All prices exclude applicable taxes unless explicitly stated otherwise.",
        "5.2 Payment: Payments are processed by Stripe, Inc. We accept major credit and debit cards and certain local payment methods, including UPI in India. Your use of Stripe is subject to Stripe’s own terms and policies.",
        "5.3 Auto-Renewal: Paid subscriptions auto-renew at the end of each billing period unless you cancel before the renewal date. You can cancel through your account settings. Cancellation takes effect at the end of the then-current billing period.",
        "Jurisdictional auto-renewal and notice requirements may apply, including: California (express consent required for auto-renewal and at least 7 days’ notice before price increases), New York (renewal reminders 15–45 days before renewal and clear in-app cancellation options), Colorado (one-step online cancellation), and India (UPI Autopay with RBI-compliant e-mandate registration and 24-hour pre-debit notification).",
        "5.4 Refunds: If you believe a charge is incorrect or you are dissatisfied, contact info@getsouvenir.com within 14 days of the charge. Refund requests are evaluated on a case-by-case basis at our discretion, subject to applicable law.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "6. Intellectual Property",
      paragraphs: [
        "The Services, including our auto-routing algorithm, workflow engine, context management system, and all related software, designs, and content (excluding your Inputs and Outputs), are owned by Souvenir, Inc. or our licensors.",
        "We and our licensors retain all rights, title, and interest in and to the Services.",
      ],
    },
    {
      id: "copyright-and-dmca-policy",
      heading: "7. Copyright and DMCA Policy",
      paragraphs: [
        "We respect intellectual property rights and expect our users to do the same.",
        "If you believe that content on the Services infringes your copyright, you may submit a notice to our designated DMCA agent:",
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
        "You agree to comply with each AI provider’s applicable usage policies, terms, and restrictions when using the Services.",
        "You may not represent AI Outputs as solely human-generated where doing so would be misleading or prohibited by provider policies or applicable law.",
        "You may not use Outputs to train or improve competing models in violation of provider terms.",
        "You should not rely on Outputs as a substitute for personalized professional advice (including legal, medical, or financial advice) without appropriate independent review by a qualified professional.",
      ],
    },
    {
      id: "data-sovereignty",
      heading: "9. Data Sovereignty",
      paragraphs: [
        "DeepSeek, Alibaba/Qwen, Moonshot AI/Kimi, and ChatGLM/Zhipu AI may process data in the People’s Republic of China.",
        "You may disable China-based AI models (DeepSeek, Alibaba/Qwen, Moonshot AI/Kimi, and ChatGLM/Zhipu AI) at any time from your account Settings. When disabled, your data will not be transmitted to servers in the People’s Republic of China.",
        "We provide in-product disclosures when data is routed to these providers so that you can make informed decisions about your use of the Services.",
      ],
    },
    {
      id: "acceptable-use-policy",
      heading: "10. Acceptable Use Policy",
      paragraphs: [
        "Our Acceptable Use Policy (AUP) is incorporated into these Terms by reference.",
        "The full AUP is available at getsouvenir.com/aup and describes prohibited content and behaviors, including restrictions relating to illegal activity, harmful conduct, harassment, and abuse of the Services.",
        "Your use of the Services must comply with the AUP at all times.",
      ],
    },
    {
      id: "disclaimers-and-liability",
      heading: "11. Disclaimers and Liability",
      paragraphs: [
        'THE SERVICES AND OUTPUTS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.',
        "Without limiting the foregoing, we do not warrant that the Services or Outputs will be error-free, uninterrupted, secure, or free of harmful components, or that any Outputs will be accurate, complete, or suitable for your purposes.",
        "To the maximum extent permitted by law, the total aggregate liability of Souvenir, Inc. and its affiliates, officers, employees, and agents (collectively, the \"Souvenir Parties\") for any claims arising out of or relating to the Services or these Terms will not exceed the greater of (a) the amounts you paid to us for the Services in the six (6) months prior to the event giving rise to the claim, or (b) one hundred U.S. dollars (USD $100).",
        "You agree to indemnify, defend, and hold harmless the Souvenir Parties from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys’ fees) arising out of or related to your breach of these Terms, your use of the Services, or your violation of any law or the rights of a third party.",
        "Consumer protection laws in Canada and India may limit certain disclaimers, exclusions, or limitations of liability. These Terms are intended to apply only to the extent permitted by applicable law in your jurisdiction.",
      ],
    },
    {
      id: "general-terms",
      heading: "12. General Terms",
      paragraphs: [
        "We may revise these Terms from time to time. If we make material changes, we will provide at least 14 days’ notice before the changes become effective, which may include posting the updated Terms on our website or sending you an email notification.",
        "These Terms, together with our Privacy Policy, Cookie and Tracking Disclosure Policy, Acceptable Use Policy, and any supplemental terms or policies referenced herein, constitute the entire agreement between you and Souvenir, Inc. regarding the Services.",
        "Souvenir, Inc. is a Delaware C-Corporation, and these Terms are governed by the laws of the State of Delaware, without regard to conflict-of-law principles.",
        "Nothing in these Terms is intended to limit mandatory consumer protection rights available to Canadian or Indian users under applicable law.",
      ],
    },
    {
      id: "dispute-resolution",
      heading: "13. Dispute Resolution",
      paragraphs: [
        "Informal Resolution: If you have a dispute or concern, contact us at info@getsouvenir.com. We will attempt to resolve the issue informally within 30 days.",
        "Governing Law: Except where prohibited by law or where local law requires otherwise (for example, for certain Canadian or Indian consumers), these Terms and any disputes arising out of or relating to them will be governed by the laws of the State of Delaware, United States.",
        "Arbitration: Except where prohibited by law, any dispute, claim, or controversy arising out of or relating to these Terms or the Services will be resolved by binding arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules. The arbitration will take place in Delaware or via remote video conference, unless the parties agree otherwise.",
        "Class Action Waiver: To the extent permitted by law, disputes will be resolved on an individual basis and not as part of any class, consolidated, or representative action.",
        "Canada & India: Mandatory local consumer protection rights and dispute resolution mechanisms in Canada and India are preserved and are not waived by this clause.",
      ],
    },
    {
      id: "contact",
      heading: "14. Contact",
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
