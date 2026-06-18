// A section body is either a single paragraph (string) or an ordered list of
// blocks: a plain string renders as a paragraph; a { list } renders as bullets;
// a { subhead } renders as a small inline heading within the section.
export type LegalBlock = string | { list: string[] } | { subhead: string };
export type LegalSection = { title: string; body: string | LegalBlock[] };
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
    updated: "June 14, 2026",
    sections: [
      { title: "Agreement to These Terms", body: [
        "These Terms of Service (“Terms”) are a binding agreement between you and Souvenir, Inc. (“Souvenir,” “we,” “us,” or “our”), governing your access to and use of the Souvenir products, applications, the website at getsouvenir.com, APIs, and related services (collectively, the “Service”).",
        "By creating an account, clicking “I agree,” or otherwise accessing or using the Service, you agree to these Terms and to our Privacy Policy. If you do not agree, do not use the Service.",
        "If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization, and “you” refers to both you and that organization.",
      ] },
      { title: "The Service", body: [
        "Souvenir is a centralized workspace brain driven by a coordinated team of AI Assistants. The Service lets you:",
        { list: [
          "Chat with AI models through a unified chatspace and receive generated text, images, and other content (“Output”);",
          "Upload, store, and ask questions about your own documents and files;",
          "Create, share, and use AI Assistants;",
          "Connect third-party applications and data sources (“Connectors”) so the AI can read from and act on those services on your behalf;",
          "Use multi-step background automation (“Brain & Automation”) that plans and executes tasks across your connected tools;",
          "Collaborate within organizations and teams, including via the Slack managerial bot.",
        ] },
        "We may add, change, or remove features at any time. We may also impose or change usage limits, including credit allotments and rate limits.",
      ] },
      { title: "Eligibility and Accounts", body: [
        { list: [
          "You must be at least 18 years old (or the age of majority in your jurisdiction) to use the Service. The Service is not directed to children under 13, and we do not knowingly collect their data.",
          "You must provide accurate registration information and keep it current.",
          "You are responsible for safeguarding your account credentials and for all activity under your account. Notify us promptly at contact@getsouvenir.com of any unauthorized use.",
          "You are responsible for your API keys, access tokens, and any credentials you supply to connect third-party services.",
        ] },
      ] },
      { title: "Organizations and Teams", body: [
        "The Service supports organization and team accounts with multiple roles (such as Owner, Admin, Editor, and Member).",
        { list: [
          "The organization Owner and Admins control the organization’s settings, membership, connected accounts, shared resources, and billing. They may add or remove members, manage shared Connectors, transfer ownership, and access organization-level audit and usage information.",
          "If you join an organization, an administrator may have access to your activity, content, and usage within that organization, and may manage or remove your access. Your use within an organization is also subject to that organization’s own policies.",
          "Connectors, credits, and certain content may be shared across an organization. Resources shared into a team or organization may be visible to, and usable by, other authorized members.",
          "If you have an individual (personal) plan and then join an organization, your billing and usage may transition to the organization’s plan as described in your account settings and in the Plans, Credits, Billing, and Trials section.",
        ] },
      ] },
      { title: "Connectors and Third-Party Services", body: [
        "A core feature of the Service is connecting third-party applications and data sources (for example, Shopify, Slack, Meta Ads, Klaviyo, HubSpot, ShipStation, Google Drive, Gmail, and others). Connectors are facilitated through integration providers including Composio and Nango.",
        "By enabling a Connector, you authorize us and our integration providers to access, retrieve, store, and act on data within that third-party service on your behalf, to the extent of the permissions (scopes) you grant.",
        "You understand and agree that:",
        { list: [
          "You must have the right to connect each account and to authorize the access you grant. Do not connect accounts or data you are not authorized to use.",
          "Your use of each third-party service remains governed by that third party’s own terms and privacy policies. We are not responsible for third-party services, their availability, or their handling of your data once it leaves our Service.",
          "The AI may read data from and take actions in your connected services (such as querying records, sending messages, creating or updating records). Some actions are irreversible. You are responsible for reviewing actions, and where the Service requests approval before acting, for the approvals you grant.",
          "We may store data returned by Connectors (including, where results are large, in temporary files within your chat) so the AI can process it. See the Privacy Policy.",
          "You can disconnect a Connector at any time. Disconnecting stops future access but does not retroactively undo actions already taken or delete data already processed.",
        ] },
        { subhead: "Souvenir for Slack (our Slack managerial bot)" },
        "Souvenir offers a Slack managerial bot (“Slack App”) that you can install into a Slack workspace to interact with the AI directly inside Slack. The Slack App is separate from connecting your own Slack as a Connector above, though both may apply. By installing or using the Slack App, you agree that:",
        { list: [
          "Installation authority. Only a person authorized by the Slack workspace (typically a Workspace Owner, Admin, or a member permitted to install apps) may install the Slack App. The installing organization is responsible for its members’ use within that workspace.",
          "What the bot accesses. Once installed, the bot processes messages and content in the channels and conversations where it is added, mentioned, or messaged, and related workspace metadata (such as user, channel, and team identifiers), to respond and provide the Service. It does not access channels it has not been added to. The exact data depends on the scopes granted at installation.",
          "Per-workspace authorization. We store the access tokens issued for each workspace to operate the Slack App for that workspace. Removing or uninstalling the app revokes our access going forward.",
          "Visibility. Messages sent to or by the bot in a channel may be visible to other members of that channel. Do not share sensitive information in shared channels you do not want others to see.",
          "Compliance with Slack. Your use of the Slack App is also subject to Slack’s own terms, including the Slack API Terms of Service and Slack’s user / workspace policies. We operate the Slack App in accordance with Slack’s developer requirements. To the extent these Terms conflict with Slack’s terms with respect to the Slack platform, Slack’s terms govern the Slack platform.",
          "Administration. Slack workspace administrators may control, restrict, or remove the Slack App and may have their own visibility and retention obligations over workspace content. Requests concerning workspace-controlled data should be directed to the workspace administrator.",
        ] },
        "How we handle data from the Slack App is described in our Privacy Policy.",
      ] },
      { title: "Your Content", body: [
        "“Your Content” means the inputs you submit to the Service (prompts, files, documents, instructions, AI Assistant definitions) and the data the Service retrieves from your Connectors on your behalf.",
        { list: [
          "You retain ownership of Your Content. You grant us a worldwide, non-exclusive, royalty-free license to host, store, copy, transmit, process, and display Your Content solely to operate, provide, secure, and improve the Service for you, including transmitting it to the AI model providers and infrastructure providers described below and in the Privacy Policy.",
          "You are responsible for Your Content and represent that you have all rights necessary to submit it and that it does not violate these Terms or any law or third-party right.",
          "We may process and store memory or summaries derived from your interactions to provide continuity and personalization features. You can manage or delete this where the Service provides controls.",
        ] },
      ] },
      { title: "AI Output, Model Providers, and Subprocessors", body: [
        { list: [
          "The Service generates Output using third-party AI model providers, currently OpenAI, Anthropic (Claude models), Google (Gemini), and Mistral. Your prompts and relevant context are transmitted to these providers to generate Output.",
          "The Service is hosted on and uses Amazon Web Services (AWS) for compute, storage, and databases. Your Content is stored and processed on AWS infrastructure.",
          "A current list of categories of subprocessors is described in our Privacy Policy.",
        ] },
        { subhead: "About Output" },
        { list: [
          "As between you and us, and to the extent permitted by law and by the applicable model provider’s terms, you own the Output you generate through your use of the Service, subject to your compliance with these Terms.",
          "AI Output can be inaccurate, incomplete, or misleading. Output is generated probabilistically and may “hallucinate” facts, citations, code, or data. Do not rely on Output as a substitute for professional advice (legal, financial, medical, or otherwise). You are solely responsible for evaluating Output and any decisions or actions you take based on it.",
          "Output is not unique to you; other users may receive similar or identical Output.",
          "You must not present Output in a way that falsely implies it was human-generated where doing so is deceptive or unlawful.",
        ] },
      ] },
      { title: "Plans, Credits, Billing, and Trials", body: [
        { list: [
          "The Service is offered through free trials, paid personal plans, and organization plans. Usage is metered in credits or similar units, which may apply to chat, AI Assistant use, image generation, background automation, and other features.",
          "Trials: We may offer trial credits or trial periods. Trial benefits are limited, may change, and may end at any time. Plan exclusivity rules apply — for example, you generally cannot hold a personal trial, an active personal plan, and an organization membership simultaneously; joining an organization may end your personal entitlements.",
          "Paid plans: Fees, billing cycles, and credit allotments are described at purchase. Unless stated otherwise, fees are billed in advance, are non-refundable except where required by law, and exclude applicable taxes, which you are responsible for.",
          "Top-ups and overages: Additional credits may be purchased. Credits are consumed as you use the Service, are not redeemable for cash, and may expire as described at purchase or in your account. Where an organization sets spending caps, usage may be blocked once a cap or balance is exhausted.",
          "Payment processing is handled by Stripe. By providing payment information you authorize us and our processors to charge the applicable fees.",
          "We may change pricing, plans, and credit values on a going-forward basis with notice as required by law.",
          "Cancellation: You may cancel at any time; cancellation takes effect at the end of the current billing period and does not entitle you to a refund of prepaid fees except where required by law.",
        ] },
      ] },
      { title: "Acceptable Use", body: [
        "You agree not to, and not to permit anyone to:",
        { list: [
          "Use the Service in violation of any law, regulation, or third-party right (including intellectual property, privacy, and data-protection rights);",
          "Upload or connect data you lack the right to use, or use the Service to process others’ personal data without a lawful basis;",
          "Use the Service to generate or distribute content that is unlawful, infringing, defamatory, harassing, hateful, or that sexually exploits minors;",
          "Attempt to develop a competing model or service by using the Service or its Output, or to scrape, reverse engineer, or extract the underlying models;",
          "Circumvent, disable, or interfere with security, rate limits, credit metering, or access controls;",
          "Use the Service to send spam, malware, or to gain unauthorized access to any system, including via Connectors;",
          "Use automated means to access the Service except through documented APIs and within their limits;",
          "Use the Service for high-risk activities where failure could lead to death, personal injury, or severe environmental or property damage.",
        ] },
        "We may investigate suspected violations and may suspend or terminate access. We may also be required to follow the usage policies of our model providers (for example, OpenAI’s, Anthropic’s, Google’s, and Mistral’s usage policies), and you agree to comply with those policies as applied through the Service.",
      ] },
      { title: "Intellectual Property", body: [
        { list: [
          "The Service, including all software, model access, designs, and trademarks (other than Your Content and Output), is owned by us or our licensors and is protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable, revocable license to use the Service per these Terms.",
          "Feedback you provide may be used by us without restriction or obligation to you.",
        ] },
      ] },
      { title: "Privacy", body: "Our collection and use of personal information is described in our Privacy Policy, which is incorporated into these Terms." },
      { title: "Confidentiality and Security", body: "We implement reasonable technical and organizational measures to protect Your Content. However, no system is perfectly secure, and we cannot guarantee absolute security. You are responsible for the security of your own credentials and connected accounts." },
      { title: "Suspension and Termination", body: [
        { list: [
          "You may stop using the Service and delete your account at any time.",
          "We may suspend or terminate your access, with or without notice, if you violate these Terms, if required by law, to protect the Service or other users, or if we discontinue the Service.",
          "Upon termination, your right to use the Service ends. We may delete Your Content after termination in accordance with our retention practices, subject to legal requirements. Sections that by their nature should survive (including Your Content; AI Output, Model Providers, and Subprocessors; Intellectual Property; and Disclaimers through Changes to These Terms) survive termination.",
        ] },
      ] },
      { title: "Disclaimers", body: "THE SERVICE AND ALL OUTPUT ARE PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, ACCURACY, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT OUTPUT WILL BE ACCURATE OR RELIABLE. ACTIONS TAKEN THROUGH CONNECTORS ARE AT YOUR OWN RISK." },
      { title: "Limitation of Liability", body: [
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW:",
        { list: [
          "IN NO EVENT WILL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO THE SERVICE OR THESE TERMS, EVEN IF ADVISED OF THE POSSIBILITY.",
          "OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THE SERVICE OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE TOTAL AMOUNTS YOU PAID US FOR THE SERVICE (INCLUDING PLAN FEES AND CREDIT PURCHASES) IN THE TWELVE (12) MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM, OR (B) USD $100.",
        ] },
        "Some jurisdictions do not allow certain limitations, so some of the above may not apply to you. We are not liable for decisions made or actions taken in reliance on AI Assistant Output or background automations; you are responsible for reviewing them.",
      ] },
      { title: "Indemnification", body: "You will defend, indemnify, and hold harmless Souvenir and its affiliates, officers, employees, and agents from any claims, damages, liabilities, and expenses (including reasonable legal fees) arising out of or related to: (a) Your Content; (b) your use of the Service, including actions taken through Connectors; (c) your violation of these Terms or any law or third-party right." },
      { title: "Governing Law, Arbitration, and Disputes", body: [
        "These Terms are governed by the laws of the State of Delaware and applicable U.S. federal law, without regard to conflict-of-laws rules.",
        { subhead: "Binding arbitration" },
        "Except for the carve-outs below, you and Souvenir agree that any dispute arising out of or relating to these Terms or the Service will be resolved by binding individual arbitration, administered by a recognized arbitration provider under its applicable rules, rather than in court. Judgment on the award may be entered in any court of competent jurisdiction.",
        { subhead: "Class-action and jury-trial waiver" },
        "You and Souvenir agree to bring claims only in an individual capacity and not as a plaintiff or class member in any class, collective, or representative action, and each party waives any right to a jury trial. The arbitrator may not consolidate more than one person’s claims.",
        { subhead: "Carve-outs" },
        "Either party may bring an individual claim in small-claims court, and either party may seek injunctive or equitable relief in court to protect its intellectual property or confidential information.",
        { subhead: "30-day opt-out" },
        "You may opt out of this arbitration agreement by emailing contact@getsouvenir.com within 30 days of first accepting these Terms, stating your name, account email, and intent to opt out. Opting out does not affect any other provision of these Terms.",
        "Where arbitration or these waivers are not enforceable, the exclusive venue for disputes is the state and federal courts located in Delaware, and you consent to their jurisdiction.",
      ] },
      { title: "Changes to These Terms", body: "We may update these Terms from time to time. If we make material changes, we will provide notice (for example, by email or in-product). Changes are effective when posted unless stated otherwise. Your continued use after the effective date constitutes acceptance." },
      { title: "General", body: [
        { list: [
          "Entire agreement: These Terms and the documents referenced here are the entire agreement between you and us regarding the Service. If you have signed a separate written agreement with us (for example, an enterprise order form or master services agreement), that agreement controls to the extent it conflicts with these Terms.",
          "Assignment: You may not assign these Terms without our consent; we may assign them in connection with a merger, acquisition, or sale of assets.",
          "Severability: If any provision is unenforceable, the rest remains in effect.",
          "No waiver: Our failure to enforce a provision is not a waiver.",
          "Force majeure: We are not liable for delays or failures caused by events beyond our reasonable control.",
        ] },
      ] },
      { title: "Contact", body: "Questions about these Terms: contact@getsouvenir.com — Souvenir, Inc. [MAILING ADDRESS — add registered business address before publishing]" },
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
