"use client";

import Image from "next/image";
import { useState, useMemo } from "react";

// ─── Asset URLs (Figma exports) ───────────────────────────────────────────────
const imgLogoUnion = "https://www.figma.com/api/mcp/asset/b543f430-ea63-48a5-a581-8830d2acb26d";
const imgChevronDown = "https://www.figma.com/api/mcp/asset/466246bf-76e3-44c7-8163-44f6cd16229d";
const imgSendIcon = "https://www.figma.com/api/mcp/asset/157279c2-7b48-4ab5-adcf-049e2e4ad515";
const imgFooterBg = "https://www.figma.com/api/mcp/asset/74982765-99cb-421d-a38a-55e17640ae92";
const imgFooterLogo = "https://www.figma.com/api/mcp/asset/d6ebf9eb-da7a-4cb5-bd91-451b326c69b5";
const imgSubmitIcon = "https://www.figma.com/api/mcp/asset/2aee586a-46aa-4d30-be7e-3c69d67e163f";

// E-commerce logos
const imgShopify = "https://www.figma.com/api/mcp/asset/31a70384-79ce-40d2-be8e-c55e1b3961ac";
const imgShipEngine = "https://www.figma.com/api/mcp/asset/cbcdde4a-bf28-442c-85e7-95b3e1204dbd";
const imgKlaviyo = "https://www.figma.com/api/mcp/asset/4520c47a-c7c0-46ac-86b1-1741f7a00df8";
const imgGorgias = "https://www.figma.com/api/mcp/asset/474ff7e2-72ea-46d7-8534-6f0b8a94da29";

// Communication logos
const imgSlack = "https://www.figma.com/api/mcp/asset/3c6453a6-e523-4ed3-b565-4c75efdaf0b1";
const imgTeams = "https://www.figma.com/api/mcp/asset/864362d4-9789-433f-b302-bf6dc7889be4";
const imgDiscord = "https://www.figma.com/api/mcp/asset/4f629fd9-e12c-4130-8f05-d383346968f6";
const imgWhatsApp = "https://www.figma.com/api/mcp/asset/7890de68-a651-47a3-b8aa-c9b0fd547d6c";
const imgTelegram = "https://www.figma.com/api/mcp/asset/1f475c28-5bc5-4c25-b27e-756be904d67e";

// Email logos
const imgGmail = "https://www.figma.com/api/mcp/asset/3dc92c83-2eca-47c5-a450-eb9c7e29723d";
const imgOutlook = "https://www.figma.com/api/mcp/asset/653716b0-91e3-4ae3-8710-f09d6e0e260b";

// Productivity logos
const imgNotion = "https://www.figma.com/api/mcp/asset/86ceeef9-9f19-4d75-80e0-d4efff0fd2e9";
const imgGSheets = "https://www.figma.com/api/mcp/asset/203ebfe6-507e-41d6-8293-6b6b1ac4303f";
const imgGDocs = "https://www.figma.com/api/mcp/asset/319552d6-bedf-4ba5-bea1-439f06663df6";
const imgAirtable = "https://www.figma.com/api/mcp/asset/a104a270-68dc-45ac-a5bd-c55386096cdf";
const imgClickUp = "https://www.figma.com/api/mcp/asset/639d6c6d-53f4-4e96-b857-d6d21e4806b1";
const imgGCalendar = "https://www.figma.com/api/mcp/asset/2456a8d1-e06a-4654-abd2-6031099022a0";
const imgCalendly = "https://www.figma.com/api/mcp/asset/639c4670-8ea2-4275-ab61-51857185c385";
const imgZoom = "https://www.figma.com/api/mcp/asset/c5dbd188-2c45-4fe4-9381-e663610e2503";
const imgFireflies = "https://www.figma.com/api/mcp/asset/7127c882-967a-481c-bf91-66ff5e87c4fd";
const imgTrello = "https://www.figma.com/api/mcp/asset/b2be9382-12c8-4ff9-8364-d001516612d6";
const imgAsana = "https://www.figma.com/api/mcp/asset/6175b1e0-ba9c-4d34-9dbf-ef34db483908";

// Storage logos
const imgGDrive = "https://www.figma.com/api/mcp/asset/5f85d698-8d98-4c9d-bcbe-e6c4a7eaf05d";
const imgOneDrive = "https://www.figma.com/api/mcp/asset/7ce0d0c6-a4de-48c0-be34-bbab6814f3d5";
const imgDropbox = "https://www.figma.com/api/mcp/asset/bb371a06-72ce-4534-9af5-e4aad165fe2c";
const imgGPhotos = "https://www.figma.com/api/mcp/asset/98ade327-258f-4aa3-89c6-d7262193261b";
const imgGSuper = "https://www.figma.com/api/mcp/asset/70016141-0a1e-45fa-b169-1266d00a64b8";

// CRM & Sales logos
const imgHubSpot = "https://www.figma.com/api/mcp/asset/999acbf3-23cd-40de-8b23-781717114eb8";
const imgSalesforce = "https://www.figma.com/api/mcp/asset/9b3af31b-0f51-4a8e-bae3-d803be8fbf79";
const imgLinkedIn = "https://www.figma.com/api/mcp/asset/2289b6de-55b9-44a7-81de-000f4cab76a5";
const imgAttio = "https://www.figma.com/api/mcp/asset/4cd7d6d2-5f73-4428-867c-a98b4e123e6a";
const imgPipedrive = "https://www.figma.com/api/mcp/asset/b14ac47d-8341-43b3-a32d-579a1d6a90bd";
const imgApollo = "https://www.figma.com/api/mcp/asset/ff6425e8-306a-467e-9e8a-788d036a40bc";
const imgZoho = "https://www.figma.com/api/mcp/asset/5984fbbb-7630-41cc-a24b-d642b79a47b3";

// Marketing logos
const imgMetaAds = "https://www.figma.com/api/mcp/asset/ad86fa97-9726-4e6f-9672-084c41762be8";
const imgGoogleAds = "https://www.figma.com/api/mcp/asset/cad4ad23-b7b1-4049-981e-2175120f2479";
const imgMailchimp = "https://www.figma.com/api/mcp/asset/a6df39f9-30a7-4193-8aac-11cccd120d2e";
const imgSemrush = "https://www.figma.com/api/mcp/asset/6b84b6c0-2cf4-4321-ba22-dac5773a74df";
const imgTikTok = "https://www.figma.com/api/mcp/asset/3385a495-a1bc-4b5a-be3a-ab9d595dafac";

// Finance & Ops logos
const imgStripe = "https://www.figma.com/api/mcp/asset/c172943d-37f6-4273-ab5a-9a5e2bde1fb3";
const imgQuickbooks = "https://www.figma.com/api/mcp/asset/75d9360a-8be1-450e-90b0-08d22656d807";
const imgXero = "https://www.figma.com/api/mcp/asset/40ad2138-3516-4551-8a5e-b74a31d8bdce";
const imgNetSuite = "https://www.figma.com/api/mcp/asset/74539b2f-8abf-4503-9754-ae2a7eabdf78";
const imgRamp = "https://www.figma.com/api/mcp/asset/4c408ae1-3939-476b-a926-d9c2e4963b62";
const imgBrex = "https://www.figma.com/api/mcp/asset/68201540-fdcc-46b6-b1e8-695ed27dfc12";

// Development logos
const imgLinear = "https://www.figma.com/api/mcp/asset/496cd0f0-5a85-4f96-87d6-16562013fa48";
const imgJira = "https://www.figma.com/api/mcp/asset/b74d89c0-9ab0-4730-9903-2e6c00e7de00";
const imgGitHub = "https://www.figma.com/api/mcp/asset/498bc50b-c487-40d1-a967-34bb3b46f739";
const imgGitLab = "https://www.figma.com/api/mcp/asset/b7c58106-1715-4ede-abbd-12d0ebaa620b";
const imgConfluence = "https://www.figma.com/api/mcp/asset/7560f337-43b8-4f6a-8a39-c72f765bd053";
const imgSupabase = "https://www.figma.com/api/mcp/asset/3c2b835b-7c4c-4abd-b552-f92847c1ca57";

// Support logos
const imgZendesk = "https://www.figma.com/api/mcp/asset/be227f08-dbdb-48d5-bb70-d6ad02b46554";
const imgIntercom = "https://www.figma.com/api/mcp/asset/4b8e4541-c864-46ab-97bc-3bec3c65e6ab";
const imgFreshdesk = "https://www.figma.com/api/mcp/asset/fc240a18-2816-4858-8eb5-65191374ab9c";
const imgHubSpotSvc = "https://www.figma.com/api/mcp/asset/999acbf3-23cd-40de-8b23-781717114eb8";
const imgFront = "https://www.figma.com/api/mcp/asset/fa462733-b707-4645-a4ce-838c7eda0d34";
const imgCrisp = "https://www.figma.com/api/mcp/asset/6e88202a-512a-410c-a675-720d4f25e935";

// Data & Analytics logos
const imgGAnalytics = "https://www.figma.com/api/mcp/asset/a413d567-b9e0-4d47-a91a-dc2f614a7add";
const imgMixpanel = "https://www.figma.com/api/mcp/asset/76d8a9bd-05a3-4b31-8227-ec8669c63fee";
const imgPostHog = "https://www.figma.com/api/mcp/asset/8cf93129-bb77-4a7b-bd7c-5cef302d789a";
const imgAmplitude = "https://www.figma.com/api/mcp/asset/549e30a7-b70e-49ed-b4dc-3696579c710a";
const imgSnowflake = "https://www.figma.com/api/mcp/asset/fb789cd3-91b6-41e1-bb99-fd006020749a";
const imgBigQuery = "https://www.figma.com/api/mcp/asset/300b4bd6-fbb0-4845-b387-d39761dfaad7";
const imgFirecrawl = "https://www.figma.com/api/mcp/asset/5f394e59-d18e-4078-8eee-f932b0c8e96f";
const imgTavily = "https://www.figma.com/api/mcp/asset/1011a188-ca5c-4186-bc71-a25698aefc57";
const imgExa = "https://www.figma.com/api/mcp/asset/c89643e7-1703-4c16-a98f-d3829be2de1f";
const imgPerplexity = "https://www.figma.com/api/mcp/asset/f17411a1-bccd-469f-857d-af9f13d7818f";
const imgMicrosoft = "https://www.figma.com/api/mcp/asset/e9111400-d165-49a1-b046-b196e63361ca";

// HR & Recruiting logos
const imgAshby = "https://www.figma.com/api/mcp/asset/57183338-efe8-494f-8a21-0e3fc478b8a1";
const imgDocusign = "https://www.figma.com/api/mcp/asset/657239f7-da24-4d85-97f5-16e4ea49e4dd";

// ─── Types ────────────────────────────────────────────────────────────────────
type BadgeColor = "neutral" | "blue" | "green";
type Status = "live" | "coming";

interface Connector {
  name: string;
  category: string;
  status: Status;
  desc: string;
  logo: string;
  badges: { label: string; color: BadgeColor }[];
}

interface Category {
  id: string;
  name: string;
  count: number;
  connectors: Connector[];
}

const STD: { label: string; color: BadgeColor }[] = [
  { label: "361 Tools", color: "neutral" },
  { label: "Api Key", color: "blue" },
  { label: "Oauth2", color: "green" },
  { label: "S2s Oauth2", color: "blue" },
];

const ALL_N: { label: string; color: BadgeColor }[] = [
  { label: "361 Tools", color: "neutral" },
  { label: "Api Key", color: "neutral" },
  { label: "Oauth2", color: "neutral" },
  { label: "S2s Oauth2", color: "neutral" },
];

const CATEGORIES: Category[] = [
  {
    id: "ecommerce", name: "E-commerce", count: 4,
    connectors: [
      { name: "Shopify", category: "E-COMMERCE", status: "live", logo: imgShopify, desc: "Shopify is an e-commerce platform for building, managing, and scaling online stores. It streamlines sales, inventory, and payments so merchants can focus on growth.", badges: STD },
      { name: "ShipEngine", category: "E-COMMERCE", status: "live", logo: imgShipEngine, desc: "ShipEngine is a shipping API that connects with multiple carriers to manage shipments, labels, and tracking. Streamline your shipping process and reduce manual effort with one unified tool.", badges: STD },
      { name: "Klaviyo", category: "E-COMMERCE", status: "coming", logo: imgKlaviyo, desc: "Klaviyo is a data-driven email and SMS marketing platform for e-commerce brands. It helps deliver targeted messages, track conversions, and build scalable customer relationships.", badges: ALL_N },
      { name: "Gorgias", category: "E-COMMERCE", status: "coming", logo: imgGorgias, desc: "Gorgias is a helpdesk and live chat platform built for e-commerce brands. It helps automate support, manage orders, and unify customer communication across channels.", badges: ALL_N },
    ],
  },
  {
    id: "communication", name: "Communication", count: 5,
    connectors: [
      { name: "Slack", category: "COMMUNICATION", status: "live", logo: imgSlack, desc: "Slack is a channel-based messaging platform for teams and organizations. It helps people collaborate in real time, share files, and connect all their tools in one place.", badges: STD },
      { name: "Microsoft Teams", category: "COMMUNICATION", status: "coming", logo: imgTeams, desc: "Microsoft Teams is a collaboration platform that combines chat, meetings, and file sharing within Microsoft 365. It keeps distributed teams connected and productive through seamless virtual communication.", badges: ALL_N },
      { name: "Discord", category: "COMMUNICATION", status: "coming", logo: imgDiscord, desc: "Discord is a real-time messaging and VoIP platform for communities and teams. It lets users chat, share media, and collaborate across public and private channels.", badges: ALL_N },
      { name: "WhatsApp", category: "COMMUNICATION", status: "coming", logo: imgWhatsApp, desc: "WhatsApp is a business messaging platform for secure, automated customer communication. It streamlines chat workflows and customer outreach using the WhatsApp Business API.", badges: ALL_N },
      { name: "Telegram", category: "COMMUNICATION", status: "coming", logo: imgTelegram, desc: "Telegram is a fast, secure cloud messaging app for individuals and groups. It offers robust privacy and real-time chat features.", badges: STD },
    ],
  },
  {
    id: "email", name: "Email", count: 2,
    connectors: [
      { name: "Gmail", category: "EMAIL", status: "live", logo: imgGmail, desc: "Gmail is Google's email service with powerful spam protection, search, and G Suite integration. It keeps your inbox organized and makes communication fast and reliable.", badges: STD },
      { name: "Outlook", category: "EMAIL", status: "live", logo: imgOutlook, desc: "Outlook is Microsoft's email and calendaring platform for unified communications and scheduling. It helps users stay organized with powerful email, contacts, and calendar management.", badges: ALL_N },
    ],
  },
  {
    id: "productivity", name: "Productivity", count: 11,
    connectors: [
      { name: "Notion", category: "PRODUCTIVITY", status: "live", logo: imgNotion, desc: "Notion is an all-in-one workspace for notes, databases, tasks, and team wikis. It keeps your knowledge and workflow organized in a flexible, collaborative platform.", badges: STD },
      { name: "Google Sheets", category: "PRODUCTIVITY", status: "live", logo: imgGSheets, desc: "Google Sheets is a cloud-based spreadsheet tool for real-time collaboration and data analysis. It integrates seamlessly with other Google Workspace apps for connected productivity.", badges: STD },
      { name: "Google Docs", category: "PRODUCTIVITY", status: "live", logo: imgGDocs, desc: "Google Docs is a cloud-based word processor for creating and collaborating on documents in real time. It integrates with Google Workspace and supports rich formatting and sharing.", badges: STD },
      { name: "Airtable", category: "PRODUCTIVITY", status: "live", logo: imgAirtable, desc: "Airtable is a flexible database and project management tool combining spreadsheets with database power. It helps teams organize workflows, track projects, and collaborate effortlessly.", badges: STD },
      { name: "ClickUp", category: "PRODUCTIVITY", status: "live", logo: imgClickUp, desc: "ClickUp is an all-in-one productivity platform for tasks, projects, docs, and goals. It replaces multiple tools with one unified space for teams to plan, track, and collaborate.", badges: STD },
      { name: "Google Calendar", category: "PRODUCTIVITY", status: "live", logo: imgGCalendar, desc: "Google Calendar is a time-management and scheduling tool for organizing your day and coordinating with others. It integrates with Google Workspace for seamless scheduling and reminders.", badges: STD },
      { name: "Calendly", category: "PRODUCTIVITY", status: "live", logo: imgCalendly, desc: "Calendly is a scheduling automation platform that eliminates back-and-forth emails for meeting bookings. It syncs with your calendar and lets others book time based on your availability.", badges: STD },
      { name: "Zoom", category: "PRODUCTIVITY", status: "live", logo: imgZoom, desc: "Zoom is a video communications platform for meetings, webinars, and team collaboration. It provides reliable virtual meetings with screen sharing, recording, and integrations.", badges: STD },
      { name: "Fireflies", category: "PRODUCTIVITY", status: "coming", logo: imgFireflies, desc: "Fireflies.ai is an AI meeting assistant that automatically records, transcribes, and summarizes meetings. It helps teams capture action items and search across conversations.", badges: ALL_N },
      { name: "Trello", category: "PRODUCTIVITY", status: "coming", logo: imgTrello, desc: "Trello is a visual project management tool using boards, lists, and cards to organize tasks. It's perfect for individuals and teams who need a simple, flexible way to track work.", badges: ALL_N },
      { name: "Asana", category: "PRODUCTIVITY", status: "coming", logo: imgAsana, desc: "Asana is a work management platform that helps teams organize, track, and manage their work. It provides project timelines, task assignments, and reporting for better team coordination.", badges: ALL_N },
    ],
  },
  {
    id: "storage", name: "Storage", count: 5,
    connectors: [
      { name: "Google Drive", category: "STORAGE", status: "live", logo: imgGDrive, desc: "Google Drive is a cloud storage platform for uploading, sharing, and collaborating on files. It's perfect for keeping your documents accessible and organized across devices.", badges: STD },
      { name: "OneDrive", category: "STORAGE", status: "live", logo: imgOneDrive, desc: "OneDrive is Microsoft's cloud storage for storing, syncing, and sharing files across devices. Access your files securely anywhere with real-time collaboration and offline support.", badges: ALL_N },
      { name: "Dropbox", category: "STORAGE", status: "coming", logo: imgDropbox, desc: "Dropbox is a cloud storage service for file syncing, sharing, and collaboration. It keeps your files accessible, organized, and safe across all your devices.", badges: ALL_N },
      { name: "Google Photos", category: "STORAGE", status: "coming", logo: imgGPhotos, desc: "Google Photos is a cloud-based photo storage and organization service by Google. It offers automatic backups, smart search, and seamless sharing for managing your media library.", badges: ALL_N },
      { name: "Google Super", category: "STORAGE", status: "coming", logo: imgGSuper, desc: "Google Super is an all-in-one suite combining Gmail, Drive, Calendar, Sheets, Analytics, and more. It gives you a unified platform to manage your digital life, boosting productivity and organization.", badges: STD },
    ],
  },
  {
    id: "crm", name: "CRM & Sales", count: 7,
    connectors: [
      { name: "HubSpot", category: "CRM & SALES", status: "live", logo: imgHubSpot, desc: "HubSpot is an all-in-one marketing, sales, and customer service platform. It lets teams nurture leads, automate outreach, and track every customer interaction in one place.", badges: STD },
      { name: "Salesforce", category: "CRM & SALES", status: "live", logo: imgSalesforce, desc: "Salesforce is a leading CRM platform that helps businesses manage sales, service, and marketing. It centralizes customer data, enabling teams to drive growth and build strong relationships.", badges: ALL_N },
      { name: "LinkedIn", category: "CRM & SALES", status: "live", logo: imgLinkedIn, desc: "LinkedIn is a professional networking platform for connecting, sharing content, and engaging with business opportunities. It's the go-to place for building your professional brand and unlocking new career connections.", badges: ALL_N },
      { name: "Attio", category: "CRM & SALES", status: "coming", logo: imgAttio, desc: "Attio is a customizable CRM and workspace for managing your team's relationships and workflows. It helps teams organize contacts, automate tasks, and collaborate more efficiently.", badges: ALL_N },
      { name: "Pipedrive", category: "CRM & SALES", status: "coming", logo: imgPipedrive, desc: "Pipedrive is a sales management platform offering pipeline visualization, lead tracking, and workflow automation. It helps sales teams keep deals moving forward efficiently and never miss a follow-up.", badges: STD },
      { name: "Apollo", category: "CRM & SALES", status: "coming", logo: imgApollo, desc: "Apollo.io is a sales intelligence platform for finding and engaging prospects. It combines a powerful lead database with sequencing tools to help sales teams close more deals.", badges: ALL_N },
      { name: "Zoho CRM", category: "CRM & SALES", status: "coming", logo: imgZoho, desc: "Zoho CRM is a cloud-based CRM platform for managing leads, contacts, and sales pipelines. It helps businesses automate their sales process and improve customer relationships.", badges: ALL_N },
    ],
  },
  {
    id: "marketing", name: "Marketing", count: 5,
    connectors: [
      { name: "Meta Ads", category: "MARKETING", status: "live", logo: imgMetaAds, desc: "Meta Ads is Meta's official Ads API that lets you manage, analyze, and optimize your Facebook and Instagram ad campaigns. Streamline ad operations and gain deeper insights with robust automation.", badges: STD },
      { name: "Google Ads", category: "MARKETING", status: "live", logo: imgGoogleAds, desc: "Google Ads is Google's online advertising platform for creating, managing, and optimizing digital campaigns. It helps businesses reach targeted customers and maximize return on ad spend.", badges: ALL_N },
      { name: "Mailchimp", category: "MARKETING", status: "live", logo: imgMailchimp, desc: "Mailchimp is an email marketing and automation platform offering campaign creation, audience segmentation, and analytics. It helps businesses drive engagement and grow their customer base.", badges: ALL_N },
      { name: "Semrush", category: "MARKETING", status: "coming", logo: imgSemrush, desc: "Semrush is a leading SEO tool suite for keyword research, competitor analysis, and campaign tracking. It empowers marketers to improve search rankings and optimize online visibility.", badges: ALL_N },
      { name: "TikTok", category: "MARKETING", status: "coming", logo: imgTikTok, desc: "Tiktok is a short-form video platform for creating, sharing, and discovering viral content. It helps creators and brands reach massive audiences with creative tools and global social features.", badges: STD },
    ],
  },
  {
    id: "finance", name: "Finance & Ops", count: 6,
    connectors: [
      { name: "Stripe", category: "FINANCE & OPS", status: "live", logo: imgStripe, desc: "Stripe is a global online payments platform offering APIs for managing payments, customers, and subscriptions. Trusted by businesses for secure, efficient, and scalable payment processing worldwide.", badges: ALL_N },
      { name: "Quickbooks", category: "FINANCE & OPS", status: "live", logo: imgQuickbooks, desc: "Quickbooks is cloud-based accounting software for managing your business finances. It helps you track income, expenses, and gain insights to streamline your workflow.", badges: ALL_N },
      { name: "Xero", category: "FINANCE & OPS", status: "live", logo: imgXero, desc: "Xero is cloud-based accounting software for small businesses, offering invoicing, bookkeeping, and real-time financial reports. It helps you manage business finances efficiently from anywhere.", badges: ALL_N },
      { name: "NetSuite", category: "FINANCE & OPS", status: "coming", logo: imgNetSuite, desc: "NetSuite by Oracle is a cloud-based ERP suite combining accounting, CRM, e-commerce, and inventory management. It streamlines business operations with real-time insights and unified data.", badges: ALL_N },
      { name: "Ramp", category: "FINANCE & OPS", status: "live", logo: imgRamp, desc: "Ramp is a finance automation platform for tracking business expenses and income. It helps you manage spending and gain actionable insights into your company's finances.", badges: STD },
      { name: "Brex", category: "FINANCE & OPS", status: "live", logo: imgBrex, desc: "Brex provides corporate credit cards and spend management tailored for startups and tech businesses. It helps optimize company cash flow, streamline accounting, and accelerate business growth.", badges: STD },
    ],
  },
  {
    id: "development", name: "Development", count: 6,
    connectors: [
      { name: "Linear", category: "DEVELOPMENT", status: "live", logo: imgLinear, desc: "Linear is a modern issue tracking and project planning tool for fast-moving teams. It helps streamline workflows, organize projects, and boost productivity.", badges: ALL_N },
      { name: "Jira", category: "DEVELOPMENT", status: "live", logo: imgJira, desc: "Jira is Atlassian's platform for bug tracking, issue tracking, and agile project management. It helps teams organize work, prioritize tasks, and deliver projects efficiently.", badges: ALL_N },
      { name: "GitHub", category: "DEVELOPMENT", status: "live", logo: imgGitHub, desc: "GitHub is a code hosting platform for version control and collaborative software development. It streamlines project management, code review, and team workflows in one place.", badges: ALL_N },
      { name: "GitLab", category: "DEVELOPMENT", status: "coming", logo: imgGitLab, desc: "Gitlab is a web-based DevOps platform for managing source code, issues, and CI/CD pipelines. It streamlines software development with integrated collaboration and automation tools.", badges: ALL_N },
      { name: "Confluence", category: "DEVELOPMENT", status: "live", logo: imgConfluence, desc: "Confluence is Atlassian's team collaboration and knowledge management platform. It helps your team organize, share, and update documents and project content in one secure workspace.", badges: STD },
      { name: "Supabase", category: "DEVELOPMENT", status: "live", logo: imgSupabase, desc: "Supabase is an open-source backend platform offering scalable Postgres databases, authentication, storage, and real-time APIs. It lets developers build modern apps without managing infrastructure.", badges: STD },
    ],
  },
  {
    id: "support", name: "Support", count: 6,
    connectors: [
      { name: "Zendesk", category: "SUPPORT", status: "live", logo: imgZendesk, desc: "Zendesk is a customer support platform for managing tickets, live chats, and help articles. It streamlines support workflows and boosts customer satisfaction for businesses of any size.", badges: ALL_N },
      { name: "Intercom", category: "SUPPORT", status: "live", logo: imgIntercom, desc: "Intercom is a customer messaging platform for live chat and support automation. It helps businesses engage, convert, and support customers at scale.", badges: ALL_N },
      { name: "Freshdesk", category: "SUPPORT", status: "live", logo: imgFreshdesk, desc: "Freshdesk is customer support software with ticketing and automation tools. It helps teams streamline helpdesk operations for faster, better customer support.", badges: ALL_N },
      { name: "HubSpot Service", category: "SUPPORT", status: "coming", logo: imgHubSpotSvc, desc: "HubSpot Service Hub is a customer service platform with ticketing, live chat, and knowledge base tools. It helps teams deliver exceptional support experiences at scale.", badges: ALL_N },
      { name: "Front", category: "SUPPORT", status: "coming", logo: imgFront, desc: "Front is a customer communication platform that brings email, chat, and social messages into one shared inbox. It helps support teams collaborate and respond faster.", badges: ALL_N },
      { name: "Crisp", category: "SUPPORT", status: "coming", logo: imgCrisp, desc: "Crisp is a customer messaging platform offering live chat, email, and CRM in one interface. It helps startups and SMBs build better customer relationships through seamless communication.", badges: ALL_N },
    ],
  },
  {
    id: "analytics", name: "Dat & Analytics", count: 11,
    connectors: [
      { name: "Google Analytics", category: "DATA & ANALYTICS", status: "live", logo: imgGAnalytics, desc: "Google Analytics is a web analytics service for tracking website traffic and user behavior. It provides actionable insights to help businesses optimize their digital performance.", badges: STD },
      { name: "Mixpanel", category: "DATA & ANALYTICS", status: "live", logo: imgMixpanel, desc: "Mixpanel is a product analytics platform for tracking user interactions and measuring feature adoption. It helps teams make data-driven decisions to improve user experience.", badges: STD },
      { name: "PostHog", category: "DATA & ANALYTICS", status: "live", logo: imgPostHog, desc: "PostHog is an open-source product analytics platform for tracking user behavior and running experiments. It gives teams full data ownership with powerful self-hosted analytics.", badges: STD },
      { name: "Amplitude", category: "DATA & ANALYTICS", status: "live", logo: imgAmplitude, desc: "Amplitude is a product analytics platform for understanding user behavior and driving growth. It helps teams analyze user journeys, run experiments, and improve product outcomes.", badges: STD },
      { name: "Snowflake", category: "DATA & ANALYTICS", status: "live", logo: imgSnowflake, desc: "Snowflake is a cloud-based data warehouse platform for storing, querying, and sharing large-scale data. It enables seamless collaboration and data-driven insights across your organization.", badges: STD },
      { name: "BigQuery", category: "DATA & ANALYTICS", status: "live", logo: imgBigQuery, desc: "BigQuery is Google's serverless data warehouse for analyzing large datasets with SQL. It provides scalable, cost-effective analytics for business intelligence and machine learning workloads.", badges: STD },
      { name: "Firecrawl", category: "DATA & ANALYTICS", status: "live", logo: imgFirecrawl, desc: "Firecrawl is a web scraping and crawling API that turns any website into clean, structured data. It's ideal for AI applications requiring fresh web data at scale.", badges: STD },
      { name: "Tavily", category: "DATA & ANALYTICS", status: "live", logo: imgTavily, desc: "Tavily is a search API built for AI agents and RAG pipelines. It delivers fast, accurate, real-time web search results optimized for language model consumption.", badges: STD },
      { name: "Exa", category: "DATA & ANALYTICS", status: "live", logo: imgExa, desc: "Exa is a semantic search engine designed for AI applications. It enables precise web search using meaning-based retrieval to find the most relevant content for your queries.", badges: STD },
      { name: "Perplexity", category: "DATA & ANALYTICS", status: "live", logo: imgPerplexity, desc: "Perplexity is an AI-powered search and answer engine providing real-time, cited research. It helps users and AI agents find accurate answers by searching and synthesizing the web.", badges: STD },
      { name: "Microsoft 365", category: "DATA & ANALYTICS", status: "live", logo: imgMicrosoft, desc: "Microsoft 365 is a comprehensive productivity suite offering Word, Excel, Outlook, Teams, and more. It connects your workforce with cloud-powered tools for seamless collaboration.", badges: ALL_N },
    ],
  },
  {
    id: "hr", name: "HR & Recruiting", count: 2,
    connectors: [
      { name: "Ashby", category: "HR & RECRUITING", status: "live", logo: imgAshby, desc: "Ashby is an applicant tracking system that handles job postings, candidate management, and hiring analytics. It streamlines the full recruiting lifecycle in one powerful platform.", badges: ALL_N },
      { name: "Docusign", category: "HR & RECRUITING", status: "live", logo: imgDocusign, desc: "Docusign is a digital agreement platform for sending, signing, and managing documents online. It streamlines electronic signatures and automates contract workflows for businesses.", badges: ALL_N },
    ],
  },
];

const TAB_LABELS = ["All", "E-commerce", "Communication", "Email", "Productivity", "Storage", "CRM & Sales", "Marketing", "Finance & Ops", "Development", "Support", "Dat & Analytics", "HR & Recruiting"];

// ─── Shared UI components ─────────────────────────────────────────────────────
function ButtonGhost({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7] relative bg-white text-[#524b47] text-[14px] font-medium leading-[22px] whitespace-nowrap ${className}`}>
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
      {children}
    </button>
  );
}

function ButtonDark({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] shadow-[0px_0px_0px_1px_#000,0px_1.091px_1.091px_0px_rgba(59,54,50,0.1),0px_1.455px_3.127px_0px_rgba(59,54,50,0.4)] relative text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap ${className}`}>
      <span className="absolute inset-0 rounded-[10px] pointer-events-none bg-gradient-to-b from-[#524b47] to-[#26211e]" />
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_1px_0.364px_0px_rgba(247,242,237,0.3),inset_0px_-2.182px_0.364px_0px_#120c08,inset_0px_-2.545px_4px_-2.182px_rgba(247,242,237,0.5)]" />
      <span className="relative z-10 flex items-center gap-1">{children}</span>
    </button>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="w-full px-[200px] py-6 flex flex-col items-start">
      <div className="w-full bg-white/20 border border-[#d1c6bd] rounded-[22px] p-3 flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="size-10 relative shrink-0">
              <Image src={imgLogoUnion} alt="Souvenir logo" fill className="object-contain" unoptimized />
            </div>
            <span className="text-[34px] tracking-[0.01em] leading-none text-black font-normal" style={{ fontFamily: "var(--font-besley)" }}>
              Souvenir
            </span>
          </div>
          <div className="flex items-center gap-4">
            {["Product", "Solution"].map((item) => (
              <button key={item} className="flex items-center gap-0.5 text-[14px] text-[#524b47] leading-[22px]">
                {item}
                <span className="size-4 relative ml-0.5 flex-shrink-0">
                  <Image src={imgChevronDown} alt="" fill className="object-contain" unoptimized />
                </span>
              </button>
            ))}
            <button className="text-[14px] text-[#524b47] leading-[22px]">Pricing</button>
            <button className="text-[14px] text-[#524b47] leading-[22px]">About</button>
          </div>
          <div className="flex items-center gap-4">
            <ButtonGhost>Sign in</ButtonGhost>
            <ButtonDark>Get started for free</ButtonDark>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ─── Badge chip (connector card) ─────────────────────────────────────────────
function ChipBadge({ label, color }: { label: string; color: BadgeColor }) {
  const map: Record<BadgeColor, string> = {
    neutral: "shadow-[0px_1px_1.5px_0px_rgba(18,12,8,0.2),0px_0px_0px_1px_rgba(106,98,93,0.5)] bg-[#ede1d7] text-[#524b47] shadow-[inset_0px_1px_0px_0px_rgba(247,242,237,0.7),inset_0px_-1px_0px_0px_rgba(106,98,93,0.1)]",
    blue: "shadow-[0px_1px_1.5px_0px_rgba(2,15,24,0.2),0px_0px_0px_1px_rgba(13,110,178,0.5)] bg-[#cadcf1] text-[#135487] shadow-[inset_0px_1px_0px_0px_rgba(231,244,253,0.7),inset_0px_-1px_0px_0px_rgba(13,110,178,0.1)]",
    green: "shadow-[0px_1px_1.5px_0px_rgba(17,25,1,0.2),0px_0px_0px_1px_rgba(128,183,7,0.5)] bg-[#f7fee6] text-[#456211] shadow-[inset_0px_1px_0px_0px_rgba(247,254,230,0.7),inset_0px_-1px_0px_0px_rgba(128,183,7,0.1)]",
  };
  return (
    <span className={`inline-flex items-center justify-center overflow-clip px-[5px] py-0.5 rounded-[6px] relative flex-shrink-0 ${map[color]}`}>
      <span className="relative text-[11px] font-medium leading-[16px] whitespace-nowrap">{label}</span>
    </span>
  );
}

// ─── Connector card ───────────────────────────────────────────────────────────
function ConnectorCard({ c }: { c: Connector }) {
  const isLive = c.status === "live";
  return (
    <div className="bg-white flex flex-col gap-3 overflow-hidden p-4 rounded-[16px] shadow-[0px_2px_2.8px_0px_#d1c6bd,0px_0px_0px_1px_#d1c6bd] w-[298.333px] flex-shrink-0">
      {/* Header */}
      <div className="flex items-center gap-3 w-full">
        <div className="flex-shrink-0 p-[3px] bg-white">
          <div className="bg-[#ede1d7] flex items-center justify-center overflow-hidden px-[5.5px] py-[4px] rounded-[6px] h-[31.877px] w-[31.996px]">
            <div className="relative size-6">
              <Image src={c.logo} alt={c.name} fill className="object-contain" unoptimized />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <p className="text-[14px] font-medium text-[#26211e] leading-[22px] truncate">{c.name}</p>
          <p className="text-[11px] text-[#827a74] leading-[16px] truncate">
            {c.category} |{" "}
            <span className={isLive ? "text-[#80b707]" : "text-[#0d6eb2]"}>
              {isLive ? "Live." : "Coming soon"}
            </span>
          </p>
        </div>
      </div>
      {/* Description */}
      <p className="text-[11px] text-[#827a74] leading-[16px] line-clamp-3 w-full">{c.desc}</p>
      {/* Badges */}
      <div className="flex gap-3 flex-wrap">
        {c.badges.map((b, i) => <ChipBadge key={i} label={b.label} color={b.color} />)}
      </div>
    </div>
  );
}

// ─── Category section ─────────────────────────────────────────────────────────
function CategorySection({ cat }: { cat: Category }) {
  const rows: Connector[][] = [];
  for (let i = 0; i < cat.connectors.length; i += 4) {
    rows.push(cat.connectors.slice(i, i + 4));
  }
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex items-baseline gap-4">
          <h2 className="text-[24px] text-black font-normal leading-[32px]" style={{ fontFamily: "var(--font-besley)" }}>
            {cat.name}
          </h2>
          <span className="text-[14px] text-[#6a625d] font-normal leading-[23px]">{cat.count} integrations</span>
        </div>
        <div className="h-px bg-[#d1c6bd] w-full" />
      </div>
      <div className="flex flex-col gap-[26px]">
        {rows.map((row, ri) => (
          <div key={ri} className="flex gap-[26px]">
            {row.map((conn, ci) => <ConnectorCard key={ci} c={conn} />)}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const footerLinks: Record<string, string[]> = {
    Product: ["AI Assistants", "Brain & Automation", "Slack Command Center", "Unified Chatspace", "Pricing"],
    Solutions: ["Businesses", "Individuals"],
    Company: ["About", "Blogs"],
    Legal: ["Terms of Service", "Privacy Policy", "Other Policies"],
  };
  return (
    <footer className="relative w-full overflow-hidden rounded-[16px] min-h-[362px]">
      <div className="absolute inset-0">
        <Image src={imgFooterBg} alt="" fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a2e1e] via-[#2d1a10] to-[#1a0e08] opacity-95" />
      </div>
      <div className="relative z-10 px-[41px] py-8 flex flex-col gap-8">
        <div className="flex gap-[120px] items-start">
          <div className="flex flex-col gap-4 w-[399px]">
            <div className="flex items-center gap-3">
              <div className="relative size-10 flex-shrink-0">
                <Image src={imgFooterLogo} alt="" fill className="object-contain" unoptimized />
              </div>
              <span className="text-[34px] text-white tracking-[0.01em] font-normal leading-none" style={{ fontFamily: "var(--font-besley)" }}>Souvenir</span>
            </div>
            <p className="text-[24px] text-[#ede1d7] leading-[32px] font-normal" style={{ fontFamily: "var(--font-besley)" }}>
              The centralized workspace brain. A coordinated team of agents.
            </p>
            <div className="flex flex-col gap-1 w-[327px]">
              <label className="text-[14px] text-white leading-[22px]">Newsletter</label>
              <div className="bg-white flex items-center gap-0.5 overflow-clip px-2.5 py-[7px] rounded-[10px] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7]">
                <span className="flex-1 text-[14px] text-[#6a625d] leading-[22px] px-0.5 min-w-0">your@company.com</span>
                <button className="bg-gradient-to-b from-[#524b47] to-[#26211e] flex items-center gap-0.5 overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap flex-shrink-0">
                  <span className="relative size-4 flex-shrink-0">
                    <Image src={imgSubmitIcon} alt="" fill className="object-contain" unoptimized />
                  </span>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-4 w-[164px]">
                <p className="text-[24px] text-white font-normal leading-[32px]" style={{ fontFamily: "var(--font-besley)" }}>{title}</p>
                <div className="flex flex-col gap-[10px]">
                  {links.map((link) => (
                    <a key={link} href="#" className="text-[14px] text-[#ede1d7] leading-[22px] hover:text-white transition-colors overflow-hidden text-ellipsis whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>{link}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-px bg-white/20 w-full" />
        <div className="flex items-center gap-8">
          <p className="text-[14px] text-[#f7f2ed] leading-[22px] whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>© 2026 Souvenir Inc. Made with context.</p>
          <div className="size-1.5 rounded-full bg-[#f7f2ed]/60 flex-shrink-0" />
          <p className="text-[14px] text-[#f7f2ed] leading-[22px] whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>v2.0 — June 2026</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ConnectorsPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return CATEGORIES
      .filter((cat) => {
        if (activeTab === "All") return true;
        return cat.name === activeTab;
      })
      .map((cat) => ({
        ...cat,
        connectors: q
          ? cat.connectors.filter((c) => c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q) || c.category.toLowerCase().includes(q))
          : cat.connectors,
      }))
      .filter((cat) => cat.connectors.length > 0);
  }, [search, activeTab]);

  return (
    <div className="min-h-screen bg-[#f7f2ed]">
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col items-center gap-16 px-[200px] pt-[60px] pb-10 max-w-[1728px] mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Brown badge */}
          <span className="inline-flex items-center justify-center overflow-clip px-[5px] py-0.5 rounded-[6px] relative shadow-[0px_1.476px_2.214px_0px_rgba(20,12,5,0.2),0px_0px_0px_1px_rgba(126,84,53,0.5)]">
            <span className="absolute inset-0 rounded-[6px] bg-[#e6d5ca]" />
            <span className="absolute inset-0 rounded-[6px] shadow-[inset_0px_1.476px_0px_0px_rgba(250,241,235,0.7),inset_0px_-1.476px_0px_0px_rgba(126,84,53,0.1)]" />
            <span className="relative text-[11px] font-medium leading-[16px] whitespace-nowrap text-[#683d1b]">Integrations · Connectors</span>
          </span>

          <h1 className="text-[48px] text-black leading-[56px] font-normal text-center w-[977px]" style={{ fontFamily: "var(--font-besley)" }}>
            Connect Souvenir to{" "}
            <em className="italic text-[#6a625d]" style={{ fontFamily: "var(--font-besley)" }}>your entire stack.</em>
          </h1>

          <p className="text-[16px] text-black text-center leading-[22px] w-[977px]">
            250+ tools and data sources. Slack, Shopify, Klaviyo, Gmail, Notion, Drive, and more. Your AI Assistants read and write across every app your team already uses.
          </p>
        </div>

        {/* Search + tabs */}
        <div className="flex flex-col gap-8 items-center w-full">
          {/* Search bar */}
          <div className="bg-white flex gap-6 items-center overflow-hidden p-5 rounded-[12px] shadow-[0px_2px_2.8px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_rgba(59,54,50,0.1)] w-[1121px]">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search integrations....."
              className="flex-1 text-[16px] text-[#6a625d] leading-[22px] bg-transparent outline-none placeholder:text-[#6a625d]"
              style={{ fontFamily: "var(--font-besley)" }}
            />
            <button className="relative flex items-center justify-center overflow-hidden pb-[9px] pt-[7px] px-2 rounded-[8.727px] shadow-[0px_0px_0px_1px_#3b3632,0px_1.091px_1.091px_0px_rgba(59,54,50,0.1),0px_1.455px_3.127px_0px_rgba(59,54,50,0.4)] flex-shrink-0 opacity-70">
              <span className="absolute inset-0 rounded-[8.727px] bg-gradient-to-b from-[#524b47] to-[#3b3632]" />
              <span className="relative size-5">
                <Image src={imgSendIcon} alt="Search" fill className="object-contain" unoptimized />
              </span>
            </button>
          </div>

          {/* Tab bar */}
          <div className="relative flex items-start w-full">
            <div className="absolute inset-0 rounded-[10px] bg-[rgba(247,242,237,0.5)] shadow-[inset_0px_-1px_0px_0px_rgba(255,255,255,0.9),inset_0px_1px_0px_0px_#ede1d7,inset_0px_0px_4px_0px_rgba(209,198,189,0.5)]" />
            <div className="relative flex items-center flex-wrap p-1 gap-1">
              {TAB_LABELS.map((tab) => {
                const isActive = tab === activeTab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center justify-center overflow-hidden px-2 py-[7px] rounded-[10px] text-[14px] font-medium leading-[22px] whitespace-nowrap transition-colors ${
                      isActive
                        ? "bg-white text-[#524b47] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7,inset_0px_-1px_0px_0px_rgba(38,33,30,0.1)]"
                        : "text-[#827a74]"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Connector categories grid */}
      <div className="max-w-[1728px] mx-auto px-[200px]">
        <div className="pl-[26px] flex flex-col gap-16 pb-24">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-4 py-24">
              <p className="text-[24px] text-[#6a625d] font-normal" style={{ fontFamily: "var(--font-besley)" }}>No connectors found</p>
              <button
                onClick={() => { setSearch(""); setActiveTab("All"); }}
                className="text-[16px] text-[#524b47] leading-[22px] underline"
              >
                Browse all integrations
              </button>
            </div>
          ) : (
            filtered.map((cat) => <CategorySection key={cat.id} cat={cat} />)
          )}
        </div>
      </div>

      {/* Request connector CTA */}
      <div className="max-w-[1328px] mx-auto mb-16 px-0">
        <div className="bg-white rounded-[16px] p-12 flex flex-col items-center gap-6 text-center shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7]">
          <h2 className="text-[36px] text-black font-normal leading-[42px]" style={{ fontFamily: "var(--font-besley)" }}>
            Can&apos;t find your app?{" "}
            <em className="italic text-[#6a625d]" style={{ fontFamily: "var(--font-besley)" }}>Request a connector.</em>
          </h2>
          <p className="text-[16px] text-[#524b47] leading-[22px] max-w-[600px]">
            We&apos;re adding new integrations every week. Tell us what you need and we&apos;ll prioritize it for you.
          </p>
          <div className="flex items-center gap-4">
            <ButtonGhost>Request an integration</ButtonGhost>
            <ButtonDark>Get started for free</ButtonDark>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-[1328px] mx-auto pb-8">
        <Footer />
      </div>
    </div>
  );
}
