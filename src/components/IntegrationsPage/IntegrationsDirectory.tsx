"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { Badge } from "@/components/Badge";

type Integration = { name: string; live: boolean; blurb: string };
type Category = { name: string; items: Integration[] };

const CATEGORIES: Category[] = [
  { name: "E-commerce", items: [
    { name: "Shopify", live: true, blurb: "Read orders, products, and customers; trigger automations on store events." },
    { name: "ShipEngine", live: true, blurb: "Multi-carrier shipping — rates, labels, and tracking across your fulfilment." },
    { name: "Klaviyo", live: false, blurb: "Email & SMS flows, segments, and campaign performance." },
    { name: "Gorgias", live: false, blurb: "Support tickets and customer context for e-commerce teams." },
  ]},
  { name: "Communication", items: [
    { name: "Slack", live: true, blurb: "Run the whole workforce by @-mention. Results post back in-thread." },
    { name: "Microsoft Teams", live: false, blurb: "The Souvenir manager bot, native to your Teams channels." },
    { name: "Discord", live: false, blurb: "Community and team workflows triggered from Discord." },
    { name: "WhatsApp", live: false, blurb: "Reach and notify from the channel your customers already use." },
  ]},
  { name: "Email", items: [
    { name: "Gmail", live: true, blurb: "Read, draft, and send — triage your inbox with full context." },
    { name: "Outlook", live: true, blurb: "Email and calendar across Microsoft accounts, unified." },
  ]},
  { name: "Productivity", items: [
    { name: "Notion", live: true, blurb: "Read and write pages, databases, and your team knowledge base." },
    { name: "Google Sheets", live: true, blurb: "Pull and push tabular data for reports and analysis." },
    { name: "Google Docs", live: true, blurb: "Draft and edit documents end-to-end." },
    { name: "Airtable", live: true, blurb: "Structured records and views, read and write." },
    { name: "ClickUp", live: true, blurb: "Tasks, docs, and project context." },
    { name: "Google Calendar", live: true, blurb: "Find slots, schedule, and manage events." },
    { name: "Calendly", live: true, blurb: "Automated scheduling with availability sync." },
    { name: "Trello", live: false, blurb: "Boards and cards for lightweight project tracking." },
    { name: "Asana", live: false, blurb: "Tasks and projects for cross-functional teams." },
  ]},
  { name: "Storage", items: [
    { name: "Google Drive", live: true, blurb: "Semantic search and retrieval across your Drive." },
    { name: "OneDrive", live: true, blurb: "Files and folders across Microsoft storage." },
    { name: "Dropbox", live: false, blurb: "Sync and retrieve shared files." },
  ]},
  { name: "CRM & Sales", items: [
    { name: "HubSpot", live: true, blurb: "Contacts, deals, and pipeline activity." },
    { name: "Salesforce", live: true, blurb: "Accounts, opportunities, and CRM records." },
    { name: "LinkedIn", live: true, blurb: "Prospecting, outreach, and profile research." },
    { name: "Attio", live: false, blurb: "Modern CRM records and relationships." },
    { name: "Pipedrive", live: false, blurb: "Pipeline management and sales activity." },
  ]},
  { name: "Marketing", items: [
    { name: "Meta Ads", live: true, blurb: "Campaign management and spend across Facebook & Instagram." },
    { name: "Google Ads", live: true, blurb: "Search and display campaign performance." },
    { name: "Mailchimp", live: true, blurb: "Email marketing automation and audiences." },
    { name: "Semrush", live: false, blurb: "SEO, keyword, and competitive research." },
  ]},
  { name: "Finance & Ops", items: [
    { name: "Stripe", live: true, blurb: "Payments, subscriptions, and revenue data." },
    { name: "QuickBooks", live: false, blurb: "Accounting, invoices, and expense data." },
  ]},
  { name: "Development", items: [
    { name: "GitHub", live: true, blurb: "Repos, issues, and pull-request activity." },
    { name: "Linear", live: true, blurb: "Issues, projects, and engineering velocity." },
    { name: "Vercel", live: false, blurb: "Deployments and project status." },
  ]},
];

export default function IntegrationsDirectory() {
  const [active, setActive] = useState("All");
  const tabs = ["All", ...CATEGORIES.map((c) => c.name)];
  const shown = active === "All" ? CATEGORIES : CATEGORIES.filter((c) => c.name === active);

  return (
    <section className="pb-[var(--section-y)]">
      <Container>
        {/* search (visual) */}
        <div className="flex items-center gap-2 rounded-[var(--r-pill)] border border-line bg-surface px-4 py-3" style={{ boxShadow: "var(--shadow-sm)" }}>
          <span className="text-ink-subtle">⌕</span>
          <span className="font-sans text-[var(--text-small)] text-ink-subtle">Search integrations…</span>
        </div>
        {/* category tabs */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button key={t} onClick={() => setActive(t)} className={"rounded-[var(--r-pill)] border px-3.5 py-1.5 font-sans text-[var(--text-small)] font-medium transition-colors " + (active === t ? "border-transparent bg-ink text-dark-ink" : "border-line bg-surface text-ink-muted hover:text-ink")}>{t}</button>
          ))}
        </div>
        {/* category sections */}
        <div className="mt-12 flex flex-col gap-12">
          {shown.map((cat) => (
            <div key={cat.name}>
              <div className="flex items-baseline gap-3 border-b border-line pb-3">
                <h2 className="font-display text-[length:var(--text-h3)] text-ink">{cat.name}</h2>
                <span className="font-sans text-[var(--text-micro)] text-ink-subtle">{cat.items.length} integrations</span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {cat.items.map((it) => (
                  <div key={it.name} className="relative flex h-full flex-col rounded-[var(--r-xl)] border border-line bg-surface p-4" style={{ boxShadow: "var(--shadow-sm)" }}>
                    <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
                    <div className="flex items-start justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-line bg-bg-subtle font-display text-[15px] text-ink">{it.name[0]}</span>
                      <Badge label={it.live ? "Live" : "Coming soon"} color={it.live ? "Green" : "Neutral"} />
                    </div>
                    <h3 className="mt-3 font-sans text-[var(--text-body)] font-semibold text-ink">{it.name}</h3>
                    <span className="font-mono text-[var(--text-micro)] uppercase tracking-[0.08em] text-ink-subtle">{cat.name}</span>
                    <p className="mt-2 font-sans text-[var(--text-small)] leading-relaxed text-ink-muted">{it.blurb}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
