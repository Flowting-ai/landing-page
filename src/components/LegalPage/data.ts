// A section body is either a single paragraph (string) or an ordered list of
// blocks: a plain string renders as a paragraph; a { list } renders as bullets;
// a { subhead } renders as a small inline heading within the section.
export type LegalBlock =
  | string
  | { list: string[] }
  | { subhead: string }
  | { table: { head: string[]; rows: string[][] } };
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
    updated: "August 30, 2026",
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
        "A core feature of the Service is connecting third-party applications and data sources (for example, Shopify, Slack, Meta Ads, Klaviyo, HubSpot, ShipStation, Google Drive, Gmail, and others). Connectors are facilitated through our integration provider Pipedream, through remote Model Context Protocol (MCP) servers operated by the third-party service itself, or through direct OAuth connections we operate.",
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
          "The Service generates Output using third-party AI model providers, currently OpenAI, Anthropic (Claude models), Google (Gemini), xAI (Grok), and Mistral. Your prompts and relevant context are transmitted to these providers, routed through OpenRouter, an AI model routing provider, to generate Output.",
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
        "We may investigate suspected violations and may suspend or terminate access. We may also be required to follow the usage policies of our model providers (for example, OpenAI’s, Anthropic’s, Google’s, xAI’s, and Mistral’s usage policies), and you agree to comply with those policies as applied through the Service.",
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
      { title: "Contact", body: "Questions about these Terms: contact@getsouvenir.com — Souvenir, Inc. 211 28th Street, Des Moines, Iowa, USA." },
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
    updated: "August 30, 2026",
    sections: [
      { title: "Overview", body: [
        "This Privacy Policy explains how Souvenir, Inc. (“Souvenir,” “we,” “us,” or “our”) collects, uses, shares, and protects personal information when you use the Souvenir products, the website at getsouvenir.com, our APIs, and related services (the “Service”).",
        "By using the Service, you agree to this Privacy Policy. If you do not agree, do not use the Service.",
        "Roles: For individual users, we generally act as a controller of your personal information. For business and organization customers, when we process data on the organization’s behalf (including data brought in through Connectors), we generally act as a processor / service provider, and the organization is the controller responsible for that data and for the lawful basis to process it.",
      ] },
      { title: "Information We Collect", body: [
        { subhead: "Information you provide" },
        { list: [
          "Account information: name, email address, password or login credentials, and organization or team details.",
          "Billing information: plan, credits, and transaction records. Card details are collected and processed by our payment processor, not stored by us.",
          "Content you submit: prompts, messages, uploaded documents and files (e.g., PDF, DOCX, PPTX, XLSX, text, images), AI Assistant definitions, and instructions (“Your Content”).",
          "Support communications: messages you send us.",
        ] },
        { subhead: "Information from your connected services (Connectors)" },
        "When you enable a Connector (for example, Shopify, Slack, Meta Ads, Klaviyo, HubSpot, ShipStation, Google Drive, Gmail, and others), we and our integration providers access and process data from those services according to the permissions you grant. This may include:",
        { list: [
          "Access tokens / credentials needed to maintain the connection;",
          "Business and operational data retrieved on your behalf (e.g., orders, customers, messages, analytics, records), which may itself contain personal information about your own customers or contacts.",
        ] },
        "You are responsible for ensuring you have the right to connect each account and to authorize this access.",
        { subhead: "Information collected automatically" },
        { list: [
          "Usage data: features used, credits consumed, actions taken, timestamps, and interaction logs.",
          "Device and log data: IP address, browser/device type, and similar technical data.",
          "Cookies and similar technologies: used for authentication, preferences, and analytics. See the Cookies and Tracking section.",
        ] },
        { subhead: "Derived information" },
        { list: [
          "Memory and summaries: we may extract and store memories, summaries, or embeddings from your interactions and documents to power continuity, search, and personalization features.",
        ] },
        { subhead: "Information from our Slack managerial bot" },
        "If the Souvenir Slack managerial bot is installed in a workspace, we process Slack data needed to operate the bot, including:",
        { list: [
          "Workspace and installation data: team/workspace identifiers and the OAuth access tokens issued to operate the app for that workspace;",
          "Conversation content: messages and content in the channels or conversations where the bot is added, mentioned, or messaged, including any files or links shared with it;",
          "Workspace metadata: user, channel, and team identifiers needed to route responses and apply permissions.",
        ] },
        "The bot only processes data in conversations it has been added to. This data is used to respond to requests and provide the Service, consistent with Slack’s API Terms of Service. We use Slack data only to provide the Service and not for advertising. Slack workspace administrators are the controllers of workspace content; direct requests about that content to your administrator.",
      ] },
      { title: "How We Use Information", body: [
        "We use personal information to:",
        { list: [
          "Provide, operate, maintain, and secure the Service;",
          "Generate AI Output in response to your inputs;",
          "Execute Connector reads and actions you request or approve through Brain & Automation;",
          "Authenticate users, manage accounts, organizations, and teams;",
          "Process payments, manage credits, plans, trials, and prevent abuse of billing;",
          "Provide personalization and memory features;",
          "Monitor, debug, and improve the Service and develop new features;",
          "Communicate with you about the Service, including service and security notices;",
          "Detect, prevent, and address fraud, abuse, security, and legal issues;",
          "Comply with legal obligations and enforce our Terms of Service.",
        ] },
        "Legal bases (where GDPR / UK GDPR applies): performance of a contract; our legitimate interests (securing and improving the Service, preventing abuse); consent (e.g., certain cookies, certain Connectors); and compliance with legal obligations.",
      ] },
      { title: "AI Model Providers and How Your Inputs Are Used", body: [
        "To generate Output, we transmit your prompts and relevant context (which may include Your Content and Connector data) to third-party AI model providers, currently OpenAI, Anthropic, Google (Gemini), xAI (Grok), and Mistral. These requests are routed through OpenRouter, an AI model routing provider that transmits your Inputs to the selected provider and returns the response.",
        { list: [
          "These providers process inputs to return Output to you.",
          "We rely on these providers’ enterprise / API terms, under which, per their current policies, API inputs and outputs are not used to train their foundation models except as their terms permit. Their handling of data is governed by their own privacy terms.",
          "We do not use Your Content to train our own or third parties’ foundation models without your consent.",
        ] },
      ] },
      { title: "How We Share Information", body: [
        "We share personal information with:",
        { list: [
          "Subprocessors and service providers who help operate the Service, under contracts requiring appropriate protection. Categories include: cloud infrastructure (Amazon Web Services — compute, storage including Amazon S3, PostgreSQL databases, caching via Redis, Amazon Textract for document OCR, and Amazon Bedrock for vector embeddings); AI model routing (OpenRouter); AI model providers (OpenAI, Anthropic, Google Gemini, xAI, and Mistral); identity and authentication (Auth0, an Okta company); connector / integration providers (Pipedream); sandboxed code execution (E2B); web page retrieval and search (Jina AI); payment processing (Stripe); error monitoring (Sentry); product analytics (Mixpanel and Google Analytics); application hosting for our web front end (Vercel); and email and operational tooling. A current provider-level list is published at getsouvenir.com/legal/subprocessors.",
          "Within your organization: if you use the Service as part of an organization, your account information, content, and usage may be accessible to that organization’s administrators and, where resources are shared, to other authorized members.",
          "Third-party services you connect: when you direct the AI to take actions, we send data to those services as needed to perform the action.",
          "Legal and safety: to comply with law, legal process, or governmental requests; to enforce our terms; and to protect the rights, property, or safety of Souvenir, our users, or others.",
          "Business transfers: in connection with a merger, acquisition, financing, or sale of assets, subject to this Policy.",
        ] },
        "We do not sell your personal information, and we do not “share” it for cross-context behavioral advertising as those terms are defined under U.S. state privacy laws.",
      ] },
      { title: "Data Retention", body: [
        { list: [
          "We retain personal information for as long as your account is active and as needed to provide the Service.",
          "We retain Your Content until you delete it or your account, subject to backups and legal / operational requirements.",
          "We may retain certain data longer where required for legal compliance, dispute resolution, security, and enforcement of our agreements.",
          "Some large Connector results may be stored temporarily as files within your chat to allow the AI to process them; these follow the same deletion controls as your other chat content. Cached Connector results held for reuse expire automatically 30 days after they are fetched.",
          "We do not store the text of Slack messages. When you use our Slack app, conversation context is read live from Slack’s API on each request and is not written to our database.",
        ] },
      ] },
      { title: "Security", body: "We implement reasonable technical and organizational measures to protect personal information, including encryption in transit (TLS) and at rest, application-layer encryption of connector credentials and Slack bot tokens before they are written to our database, access controls, databases that are not reachable from the public internet, and isolation between accounts. No method of transmission or storage is completely secure, and we cannot guarantee absolute security. Protect your credentials and connected accounts, and notify us of any suspected compromise. If a security breach affecting your personal information occurs, we will notify you and the relevant authorities as required by applicable law." },
      { title: "Your Rights and Choices", body: [
        "Depending on your location, you may have rights to:",
        { list: [
          "Access the personal information we hold about you;",
          "Correct inaccurate information;",
          "Delete your information;",
          "Port your information;",
          "Object to or restrict certain processing;",
          "Withdraw consent where processing is based on consent;",
          "Opt out of sale / sharing / targeted advertising (note: we do not sell or share as defined by law).",
        ] },
        "To exercise these rights, contact contact@getsouvenir.com. We will verify your request and respond as required by law. You will not be discriminated against for exercising your rights. If you are part of an organization, please direct requests concerning organization-controlled data to that organization; we will assist them as the processor.",
        "California (CCPA / CPRA), Virginia, Colorado, and other U.S. state residents have the rights described above. We do not sell your personal information, and we do not share it for cross-context behavioral advertising as defined by law. To opt out of any processing that may be considered “sale” or “sharing,” email contact@getsouvenir.com or enable a recognized opt-out preference signal (such as Global Privacy Control) in your browser, which we honor.",
        "EU / UK / EEA residents have rights under GDPR / UK GDPR and may lodge a complaint with their supervisory authority. Where we transfer data outside the EEA or UK, we rely on Standard Contractual Clauses and will appoint an EU / UK representative if required by applicable law.",
      ] },
      { title: "Cookies and Tracking", body: "We use cookies and similar technologies for authentication, to remember your preferences, and to understand usage. You can control cookies through your browser settings; disabling some cookies may affect functionality. For more detail, see our Cookie Policy." },
      { title: "International Data Transfers", body: "We are based in the United States and use infrastructure (including AWS) and subprocessors that may process data in the United States and other countries. Where we transfer personal data from the EEA, UK, or Switzerland, we rely on appropriate safeguards such as Standard Contractual Clauses where applicable." },
      { title: "Children’s Privacy", body: "The Service is intended for users aged 16 and over (or the minimum age required in your jurisdiction). We do not knowingly collect personal information from children under that age. If you believe a child has provided us personal information, contact us and we will delete it." },
      { title: "Third-Party Services", body: "The Service integrates with and links to third-party services. This Policy does not cover those third parties’ practices. Your use of connected services remains subject to their own privacy policies and terms." },
      { title: "Changes to This Policy", body: "We may update this Privacy Policy from time to time and review it at least annually. If we make material changes, we will provide notice (for example, by email or in-product). The “Last updated” date reflects the latest revision. Your continued use after changes take effect constitutes acceptance." },
      { title: "Contact Us", body: "Questions or requests regarding this Privacy Policy or your personal information: contact@getsouvenir.com — Souvenir, Inc. 211 28th Street, Des Moines, Iowa, USA." },
    ],
  },
  subprocessors: {
    slug: "subprocessors",
    eyebrow: "Privacy & Data",
    title: "Sub-processor List",
    updated: "August 30, 2026",
    sections: [
      { title: "About This List", body: [
        "This page lists the third parties Souvenir, Inc. engages to process personal information on behalf of our customers (our “sub-processors”), together with what each one does and where it processes data. It supplements our Privacy Policy and our Connected Services Privacy Policy, and is the list referenced by our data processing commitments.",
        "Every sub-processor listed here is engaged under a written contract requiring it to process data only on our documented instructions, to protect it with appropriate technical and organizational measures, and to support our obligations to you.",
      ] },
      { title: "Infrastructure and Platform", body: [
        { table: {
          head: ["Sub-processor", "Purpose", "Location"],
          rows: [
            ["Amazon Web Services, Inc.", "Primary cloud infrastructure — compute, PostgreSQL databases, S3 file storage, Redis caching, secrets management, Textract document OCR, and Bedrock vector embeddings (Cohere models)", "United States (us-east-1)"],
            ["Vercel Inc.", "Hosting and content delivery for the Souvenir web application and marketing site", "United States"],
            ["Okta, Inc. (Auth0)", "User authentication, login, and session management", "United States"],
            ["E2B", "Isolated sandbox containers that execute code and generate files on a user’s request", "United States"],
          ],
        } },
      ] },
      { title: "AI Model Providers", body: [
        "Inputs are transmitted to the providers below to generate a response. Requests are routed through OpenRouter, which selects and calls the appropriate provider. We do not use Customer Data to train any model, and we rely on each provider’s API terms, under which API inputs and outputs are not used to train their foundation models.",
        { table: {
          head: ["Sub-processor", "Purpose", "Location"],
          rows: [
            ["OpenRouter, Inc.", "AI model routing — transmits Inputs to the selected model provider and returns the response", "United States"],
            ["OpenAI, L.L.C.", "AI model inference, including speech-to-text transcription", "United States"],
            ["Anthropic PBC", "AI model inference", "United States"],
            ["Google LLC", "AI model inference (Gemini models)", "United States"],
            ["xAI Corp.", "AI model inference (Grok models)", "United States"],
            ["Mistral AI SAS", "AI model inference and document OCR", "France"],
          ],
        } },
      ] },
      { title: "Connectors and Integrations", body: [
        { table: {
          head: ["Sub-processor", "Purpose", "Location"],
          rows: [
            ["Pipedream, Inc.", "Connector authentication and API brokering — holds connected-account credentials in its vault and relays requests to the connected service", "United States"],
            ["Jina AI GmbH", "Retrieval and search of public web pages when an assistant looks up information from the internet", "Germany"],
            ["Slack Technologies, LLC", "Platform for the Souvenir Slack app", "United States"],
            ["Meta Platforms, Inc.", "Meta Ads API, for customers who connect a Meta Ads account", "United States"],
          ],
        } },
        "Connectors are optional. A provider in this section processes your data only if you choose to enable the corresponding connector or install the Slack app.",
      ] },
      { title: "Business Operations", body: [
        { table: {
          head: ["Sub-processor", "Purpose", "Location"],
          rows: [
            ["Stripe, Inc.", "Payment processing, subscriptions, and billing", "United States"],
            ["Functional Software, Inc. (Sentry)", "Application error monitoring and diagnostics", "United States"],
            ["Mixpanel, Inc.", "Product analytics within the Souvenir application", "United States"],
            ["Google LLC (Google Analytics)", "Website analytics for getsouvenir.com", "United States"],
          ],
        } },
      ] },
      { title: "Changes to This List", body: [
        "We may add or replace sub-processors as the Service evolves. When we do, we will update this page and revise the “Last updated” date above.",
        "To be notified in advance of changes to this list, email contact@getsouvenir.com and ask to be added to our sub-processor change notifications. Customers with a data processing agreement in place receive notice in accordance with that agreement.",
      ] },
      { title: "Contact", body: "Questions about this list, or requests for notification of changes: contact@getsouvenir.com — Souvenir, Inc. 211 28th Street, Des Moines, Iowa, USA." },
    ],
  },
  cookies: {
    slug: "cookies",
    eyebrow: "Privacy & Data",
    title: "Cookie Policy",
    updated: "June 14, 2026",
    sections: [
      { title: "Overview", body: [
        "This Cookie Policy explains how Souvenir, Inc. (“Souvenir,” “we,” “us,” or “our”) uses cookies and similar technologies on the website at getsouvenir.com and within the Souvenir application (the “Service”). It should be read together with our Privacy Policy.",
        "In short: We use cookies and local storage that are necessary to sign you in and run the Service, plus a limited set of analytics cookies to understand usage and improve the product. We do not use third-party advertising cookies and we do not sell your data.",
      ] },
      { title: "What Are Cookies?", body: [
        "Cookies are small text files placed on your device when you visit a website. “Local storage” and similar technologies serve comparable purposes — storing small amounts of data in your browser. We use the term “cookies” in this policy to cover cookies, local storage, and similar technologies.",
        "Cookies can be “first-party” (set by Souvenir) or “third-party” (set by a service we use, such as our analytics provider). They can be “session” cookies (deleted when you close your browser) or “persistent” cookies (kept until they expire or you remove them).",
      ] },
      { title: "How We Use Cookies", body: [
        "We use cookies for the following purposes:",
        { table: {
          head: ["Category", "Purpose", "Can you disable?"],
          rows: [
            ["Strictly necessary", "Authenticate your session, keep you signed in, maintain security, remember consent choices, and enable core features of the Service. The Service will not function correctly without these.", "No — required for the Service to work"],
            ["Preferences", "Remember settings such as interface preferences and recently used options so the Service behaves the way you expect.", "Yes — via browser settings"],
            ["Analytics / performance", "Understand how the Service is used (features used, errors encountered, aggregate usage patterns) so we can debug and improve. We use Google Analytics for website analytics and Mixpanel for in-product analytics.", "Yes — via browser settings or our cookie controls where offered"],
          ],
        } },
        "We do not use advertising or cross-site tracking cookies, and we do not allow third parties to use cookies on the Service to build advertising profiles.",
      ] },
      { title: "Third-Party Cookies", body: [
        "Some cookies are set by service providers that help us operate the Service. The main ones are:",
        { list: [
          "Google Analytics — website analytics, used to measure page views, traffic sources, and aggregate site usage (cookies such as _ga and _gid). Google processes this data on our behalf as a service provider.",
          "Mixpanel — in-product analytics, used to measure feature usage and diagnose issues. Mixpanel processes this data on our behalf as a service provider.",
        ] },
        "Authentication and payment flows may also set cookies via our providers (for example, our authentication provider and Stripe for billing) strictly to perform those functions. These third parties process data under their own privacy terms.",
      ] },
      { title: "Your Choices", body: [
        { list: [
          "Browser settings. Most browsers let you block or delete cookies, or alert you before one is set. Disabling strictly necessary cookies may prevent you from signing in or using parts of the Service.",
          "Cookie controls. Where we offer an in-product or banner cookie control, you can use it to manage non-essential (analytics / preferences) cookies.",
          "Do Not Track. Some browsers send a “Do Not Track” signal. Because there is no common industry standard for responding to these signals, we currently handle them through the controls described above.",
        ] },
      ] },
      { title: "Changes to This Policy", body: "We may update this Cookie Policy from time to time. The “Last updated” date reflects the latest revision. Material changes will be communicated through the Service or by other reasonable means." },
      { title: "Contact Us", body: "Questions about this Cookie Policy: contact@getsouvenir.com — Souvenir, Inc. 211 28th Street, Des Moines, Iowa, USA." },
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
  "connected-services": {
    slug: "connected-services",
    eyebrow: "Privacy & Data",
    title: "Privacy Policy — Connected Services",
    updated: "August 30, 2026",
    sections: [
      { title: "Scope", body: [
        "This Privacy Policy describes how Souvenir, Inc. (“Souvenir,” “we,” “us,” or “our”) collects, uses, stores, and shares information when you use the Souvenir Meta (Facebook) app, the Souvenir Slack managerial bot, and other Connectors. It covers:",
        { list: [
          "the Souvenir web application available at getsouvenir.com (the “Service”);",
          "the Souvenir app for Meta (our Facebook / Meta Platform application used to connect Meta advertising accounts); and",
          "the Souvenir Slack managerial bot (our Slack application).",
        ] },
        "By using the Service, the Souvenir Meta app, or the Souvenir Slack bot, you agree to the practices described in this policy. If you do not agree, please do not use the Service. This policy took effect June 11, 2026. Contact: contact@getsouvenir.com",
      ] },
      { title: "Who We Are", body: [
        "Souvenir is a centralized workspace brain driven by a coordinated team of AI Assistants. It lets you chat with AI models and, optionally, connect third-party business tools (such as Meta Ads, Shopify, Slack, HubSpot, Klaviyo, and others) so the assistants can retrieve and analyze your business data on your instruction.",
        "Souvenir is the data controller for personal information collected through the Service. Where you connect your company’s third-party accounts and instruct Souvenir to process data from them, we act on your instructions with respect to that connected data.",
      ] },
      { title: "Information We Collect", body: [
        { subhead: "Information you provide directly" },
        { list: [
          "Account information. When you sign up, our authentication provider (Auth0, an Okta company) collects your name, email address, and login credentials or social-login identity. We store your email, display name, and a unique account identifier. We never see or store your password if you use social login.",
          "Billing information. Payments are processed by Stripe. Stripe collects your payment card details directly; we do not receive or store full card numbers. We store your Stripe customer ID, subscription plan, invoices / credit balances, and transaction history.",
          "Chat content. Messages you send to the assistants, files and documents you upload (e.g., PDF, DOCX, XLSX, PPTX, images), and the assistants’ responses.",
          "Configuration data. AI Assistants, projects, team and organization settings, and connector configurations you create.",
          "Support communications. Anything you send us when contacting support.",
        ] },
        { subhead: "Information collected automatically" },
        { list: [
          "Usage and log data. Request logs, timestamps, feature usage, error logs, IP address, browser / device type, and credit / usage accounting records (which features and AI models you used and how much).",
          "Cookies and similar technologies. We use cookies and local storage for authentication sessions and core functionality. We do not use third-party advertising cookies.",
        ] },
        { subhead: "Information from connected third-party services" },
        "You may optionally connect third-party accounts (“Connectors”). We only access connected data when you ask an assistant to perform a task that requires it (for example, “summarize last month’s ad performance”).",
        { subhead: "a) Meta (Facebook) — Souvenir Meta app" },
        "When you connect a Meta Ads account, you authorize our Meta app through Meta’s OAuth consent flow. Through this connection we may receive:",
        { list: [
          "OAuth access tokens for your Meta account, obtained through Meta’s OAuth consent flow and held by Souvenir encrypted at rest. We never receive or store your Facebook / Meta password.",
          "Advertising data you direct an assistant to retrieve, under the ads_read and ads_management permissions: ad account metadata, campaigns, ad sets, ads, creatives, audiences, budgets, and performance insights (impressions, clicks, spend, conversions, and similar metrics).",
          "Basic profile information associated with the connected Meta account (such as name and account ID) as returned by Meta during authorization.",
        ] },
        "We use Meta Platform Data only to provide the features you request inside Souvenir (retrieving, analyzing, and summarizing your advertising data). We do not sell Meta Platform Data, use it for advertising of our own, build profiles unrelated to the Service, or transfer it to data brokers. Our use of information received from Meta APIs adheres to the Meta Platform Terms and Developer Policies.",
        { subhead: "b) Slack — Souvenir Slack managerial bot" },
        "When a workspace admin or member installs the Souvenir bot via Slack’s OAuth consent flow, we collect and store:",
        { list: [
          "Workspace installation data: Slack workspace (team) ID and name, the bot access token (encrypted at rest), the bot’s user ID, the granted OAuth scopes, and which Souvenir account performed the installation.",
          "Identity links: a mapping between your Souvenir account and your Slack user ID in each workspace, created when you link your Slack identity, so the bot can attribute requests to your Souvenir account.",
          "Message content — processed, not stored, and only in limited cases: when you @-mention the bot in a channel; send the bot a direct message; use one of the bot’s slash commands; or when the bot reads the history of a thread it is participating in, in order to maintain conversational context for its reply.",
        ] },
        "The bot requests the following Slack scopes, for these purposes:",
        { table: {
          head: ["Scope", "Purpose"],
          rows: [
            ["app_mentions:read", "Receive messages that @-mention the bot"],
            ["chat:write", "Post replies in channels, threads, and DMs"],
            ["commands", "Provide slash commands"],
            ["im:history, im:read, im:write", "Receive and reply to direct messages sent to the bot"],
            ["channels:history, groups:history, mpim:history", "Read the thread the bot is replying in, so replies have context"],
            ["channels:read, groups:read, mpim:read", "Resolve channel names and confirm which conversations the bot belongs to"],
            ["channels:join, channels:manage", "Join a channel when invited and create a channel when you ask the bot to"],
            ["users:read, users:read.email", "Resolve Slack user IDs to display names and match a Slack user to their Souvenir account"],
            ["team:read, usergroups:read, emoji:read", "Read workspace, user-group, and custom-emoji names used in a conversation"],
            ["files:read, files:write", "Read a file you point the bot at, and post files it produces (charts, spreadsheets, reports) into the thread"],
            ["canvases:read, canvases:write", "Read and write Slack canvases when you ask the bot to draft or update one"],
            ["bookmarks:read, bookmarks:write", "Read and manage channel bookmarks when you ask the bot to"],
            ["pins:read, pins:write", "Read and manage pinned messages when you ask the bot to"],
            ["reactions:read, reactions:write", "Read and add emoji reactions, which the bot uses to acknowledge a request"],
            ["assistant:write", "Operate in Slack’s AI assistant surface"],
          ],
        } },
        "The bot does not continuously monitor, archive, or index your workspace’s messages, and we do not store the text of Slack messages. Each time the bot is asked to respond, it reads the conversation it is participating in live from Slack’s API, uses it to generate a reply (including by sending it to AI model providers), and does not write that message text to our database. Files you explicitly ask the bot to fetch are stored with your Souvenir chat so the assistant can work with them, and follow the same deletion controls as your other chat content. If the bot is uninstalled from a workspace, or its tokens are revoked, we delete the stored installation record and bot token for that workspace automatically.",
        { subhead: "c) Google, Shopify, and other connectors" },
        "The Service supports additional connectors (e.g., Google Drive, Gmail, Shopify, HubSpot, Klaviyo, ShipStation, and others). For each, the same principles apply: we access data only through the permissions you grant via OAuth, only to fulfill tasks you request, and we store the tokens or credentials you provide encrypted at rest. We do not use data from any connected service for advertising or to train AI models. Souvenir’s use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including its Limited Use requirements. You can disconnect any connector at any time, or revoke access from the third-party service’s own settings.",
        { subhead: "d) Connector authentication brokers" },
        "To connect third-party accounts securely, Souvenir uses the integration provider Pipedream, which acts strictly as a processor on our behalf: it brokers the OAuth flow, holds the resulting credentials encrypted in its own vault, and relays API requests; it does not use your data for its own purposes. For some services we connect directly instead — either to a remote Model Context Protocol (MCP) server operated by that service, or through an OAuth application we operate ourselves. Where we hold credentials directly, we encrypt them at the application layer before storing them. Connections are scoped to your individual account and isolated from other users. When you disconnect a connector in Souvenir, the corresponding connection record is deleted or unlinked, and we no longer have access to that account. You can also revoke access directly from the third-party service’s own security settings at any time.",
      ] },
      { title: "How We Use Information", body: [
        "We use the information described above to:",
        { list: [
          "Provide and operate the Service — authenticate you, run AI conversations, execute connector tasks you request, and maintain your chat, AI Assistant, and project data.",
          "Process payments and meter usage — manage subscriptions, credits, and billing through Stripe.",
          "Generate AI responses — send relevant conversation content and connected data to AI model providers.",
          "Maintain security — detect abuse, enforce access controls, and protect accounts and stored credentials.",
          "Improve the Service — analyze aggregate usage patterns and diagnose errors. We use internal logs for debugging; we do not sell usage data.",
          "Communicate with you — service announcements, billing notices, and support responses.",
          "Comply with law — meet legal, accounting, and regulatory obligations.",
        ] },
        "We do not sell your personal information, and we do not use your data — including data obtained from Meta or Slack — for third-party advertising.",
      ] },
      { title: "AI Model Processing", body: [
        "Souvenir generates responses using third-party large language model providers, currently OpenAI, Anthropic, Google (Gemini), xAI (Grok), and Mistral, reached through OpenRouter, an AI model routing provider. When you chat with an assistant:",
        { list: [
          "your messages, relevant conversation history, uploaded document excerpts, and connected data needed to answer your request are transmitted to the selected model provider to generate a response;",
          "we access these providers via their business / API offerings, under terms that prohibit them from using API-submitted data to train their models.",
        ] },
        "Beyond response generation, your content may also be processed by: Amazon Bedrock (Cohere embedding models) to create the vector embeddings that power document search; Amazon Textract or Mistral to extract text from documents and images you upload; E2B, which runs isolated sandbox containers when an assistant executes code or builds a file for you; and Jina AI, which retrieves and searches web pages when an assistant needs public information from the internet.",
        "You control what you share in conversations and which connectors you enable.",
      ] },
      { title: "How We Share Information", body: [
        "We share information only with:",
        { list: [
          "Service providers / sub-processors that process data on our behalf to run the Service;",
          "Your team and organization, where you use shared workspaces, shared AI Assistants, team connectors, or chat sharing — content you share is visible to the users or teams you share it with;",
          "Third-party services you connect, when executing your instructions (e.g., sending an API request to Meta or posting a message to Slack on your behalf);",
          "Legal authorities, if required by law, subpoena, or to protect the rights, safety, or property of Souvenir, our users, or the public;",
          "A successor entity, in connection with a merger, acquisition, or sale of assets, in which case this policy will continue to apply to previously collected data.",
        ] },
        "We never sell personal information or share it with data brokers.",
      ] },
      { title: "Sub-processors", body: [
        { table: {
          head: ["Provider", "Purpose"],
          rows: [
            ["Amazon Web Services (AWS)", "Cloud hosting — compute, PostgreSQL databases, S3 storage, Redis caching, Textract document OCR, and Bedrock vector embeddings (Cohere models) — United States (us-east-1)"],
            ["Vercel", "Hosting and delivery of our web front end — United States"],
            ["Auth0 (Okta)", "Authentication and session management"],
            ["Stripe", "Payments and billing"],
            ["Pipedream", "Connector authentication and API brokering"],
            ["OpenRouter", "AI model routing — transmits Inputs to the selected model provider — United States"],
            ["OpenAI", "AI model inference (including speech-to-text)"],
            ["Anthropic", "AI model inference"],
            ["Google (Gemini)", "AI model inference"],
            ["xAI (Grok)", "AI model inference"],
            ["Mistral AI", "AI model inference and document OCR — France"],
            ["E2B", "Isolated sandbox containers for code execution and file generation"],
            ["Jina AI", "Web page retrieval and search when an assistant looks up public information"],
            ["Sentry", "Application error monitoring"],
            ["Mixpanel", "Product analytics"],
            ["Google Analytics", "Website analytics (getsouvenir.com marketing site)"],
            ["Slack Technologies", "Slack managerial bot platform"],
            ["Meta Platforms", "Meta Ads API"],
          ],
        } },
        "We may update this list as the Service evolves; material changes will be reflected in an updated policy. To request notice of subprocessor changes, email contact@getsouvenir.com.",
      ] },
      { title: "Data Security", body: "We protect your information using industry-standard measures, including encryption in transit (TLS / HTTPS) and at rest, access controls limiting production access to authorized personnel, and isolation of connected-account credentials to the account that created them. Credentials held by our integration providers are encrypted at rest. Slack bot tokens are deleted automatically on uninstall or revocation, and disconnecting a connector removes our stored link to that account. No method of transmission or storage is 100% secure, but we work to protect your information and will notify you of any breach affecting your personal information as required by law." },
      { title: "Data Retention", body: [
        { table: {
          head: ["Data", "Retention"],
          rows: [
            ["Account information", "For the life of your account; deleted upon account deletion"],
            ["Chat history, uploaded files, AI Assistants, projects", "Until you delete them or delete your account"],
            ["Connector credentials / tokens", "Until you disconnect the connector or delete your account"],
            ["Slack installation data (workspace, bot token)", "Until the bot is uninstalled or tokens are revoked, then deleted automatically"],
            ["Slack message text", "Not stored — read live from Slack on each request"],
            ["Connected third-party data retrieved for a task", "Retained as part of the relevant conversation / results until that conversation is deleted; cached results held for reuse expire automatically after 30 days"],
            ["Billing records", "As required by tax and accounting law"],
            ["Server logs", "Rotated on a rolling basis"],
          ],
        } },
      ] },
      { title: "Data Deletion and Your Controls", body: [
        "You can, at any time:",
        { list: [
          "Delete conversations, files, AI Assistants, and projects from within the Service.",
          "Disconnect any connector (including Meta Ads) from the connectors page — this removes our access and stored credentials for that account. You can additionally revoke Souvenir’s access from the third party’s side (for Meta: Settings & Privacy → Settings → Business Integrations on Facebook; for Slack: remove the app from your workspace, which triggers automatic deletion of our stored installation data).",
          "Close your account from in-app account settings, which deactivates it and ends access to the Service, or request full deletion by emailing contact@getsouvenir.com. On a verified deletion request we erase your personal information, chat history, uploads, identity links, and stored connector credentials within 30 days, except records we must retain for legal / billing compliance and residual copies in encrypted backups, which age out on our backup rotation schedule.",
        ] },
        { subhead: "Data deletion for Meta users" },
        "If you used the Souvenir Meta app and want data obtained from Meta deleted, either disconnect the Meta Ads connector in Souvenir and delete any conversations that referenced it; or email contact@getsouvenir.com with the subject “Meta Data Deletion Request” from the email associated with your account. We will delete the data and confirm within 30 days.",
      ] },
      { title: "Your Privacy Rights", body: [
        "Depending on where you live, you may have rights to:",
        { list: [
          "Access the personal information we hold about you;",
          "Correct inaccurate information;",
          "Delete your information;",
          "Export your information in a portable format;",
          "Restrict or object to certain processing;",
          "Withdraw consent where processing is based on consent (e.g., by disconnecting a connector).",
        ] },
        "EEA / UK (GDPR): Our legal bases are performance of a contract (providing the Service), legitimate interests (security, service improvement), consent (optional connectors), and legal obligation (billing records). You may lodge a complaint with your local supervisory authority.",
        "California (CCPA / CPRA): We do not sell or “share” personal information as defined by the CCPA. You may exercise access, deletion, and correction rights without discrimination.",
        "To exercise any right, email contact@getsouvenir.com. We will respond within the timeframe required by applicable law (generally 30 days).",
      ] },
      { title: "International Data Transfers", body: "Our infrastructure is hosted in the United States (AWS). If you access the Service from outside the U.S., your information will be transferred to and processed in the U.S. Where required, we rely on appropriate safeguards such as standard contractual clauses with our sub-processors." },
      { title: "Children’s Privacy", body: "The Service is intended for business use and is not directed at children under 16. We do not knowingly collect personal information from children. If you believe a child has provided us information, contact us and we will delete it." },
      { title: "Changes to This Policy", body: "We may update this policy from time to time. We will post the updated version at this URL with a revised “Last updated” date, and for material changes we will notify you via the Service or email. Continued use after changes take effect constitutes acceptance." },
      { title: "Contact Us", body: "Souvenir, Inc. — Email: contact@getsouvenir.com — Mailing address: 211 28th Street, Des Moines, Iowa, USA. Website: https://www.getsouvenir.com." },
    ],
  },
};
