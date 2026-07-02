/** Learning-guide sidebar nav — Supademo-backed. Getting Started = prose pages
 *  (explicit href). The how-to groups map to Supademo demos: `slug` → /guide/<slug>,
 *  `demoId` = the Supademo demo the content is pulled from (used by the batch
 *  importer). Only guides with a generated content file render; others 404 until built. */

export type GuideNavItem = { label: string; slug: string; icon: string; href?: string; demoId?: string; blurb?: string };
export type GuideNavGroup = { title: string; items: GuideNavItem[] };

export const GUIDE_NAV: GuideNavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { label: "What is Souvenir?", slug: "getting-started/what-is-souvenir", href: "/guide/getting-started/what-is-souvenir", icon: "book", blurb: "The big picture — what Souvenir is and the problem it solves for you and your team." },
      { label: "How Souvenir is organized", slug: "getting-started/how-its-organized", href: "/guide/getting-started/how-its-organized", icon: "layout", blurb: "Chats, projects, agents, teams — how the pieces fit together so you always know where things live." },
      { label: "Two ways to onboard", slug: "getting-started/two-ways-to-onboard", href: "/guide/getting-started/two-ways-to-onboard", icon: "users", blurb: "Start solo or bring your whole team — pick the path that matches how you want to begin." },
    ],
  },
  {
    title: "Chatspace",
    items: [
      { label: "The Chatspace", slug: "chatspace", icon: "chat", demoId: "cmqyb17cv1rdnqmecccdqaxdw" },
      { label: "Compare Models", slug: "compare-models", icon: "radar", demoId: "cmqydx38s1s8oqmec5lt248dw" },
      { label: "Organize Pins & Folders", slug: "pins", icon: "pin", demoId: "cmqycwqt51rriqmec7zntp78u" },
      { label: "Highlights", slug: "highlights", icon: "quill", demoId: "cmqybsk6y1rfnqmecg5fxnbek" },
      { label: "Move & Monitor Chats", slug: "analytics-chats", icon: "chatone", demoId: "cmr01tp5n0hjwqm4ik37vggf8" },
    ],
  },
  {
    title: "AI Agents",
    items: [
      { label: "Create & Deploy an Agent", slug: "create-agent", icon: "useradd", demoId: "cmqykxfc71x0xqmecwmljci35" },
      { label: "Share & Import Agents", slug: "share-import-agents", icon: "network", demoId: "cmqzn5zlk05ghqm4iiyfakry7" },
      { label: "Share & Collaborate", slug: "share-collaborate-agents", icon: "userai", demoId: "cmqzuimqs0c24qm4i4jrtz190" },
      { label: "Import the Research Analyst", slug: "import-research-analyst", icon: "workflow", demoId: "cmqyewcr81sjbqmecahai2272" },
      { label: "Query GA with Scout", slug: "query-ga-scout", icon: "galaxy", demoId: "cmqynsc011yb1qmec1r8ek0ir" },
    ],
  },
  {
    title: "Teams & Admin",
    items: [
      { label: "Set Up Teams", slug: "set-up-teams", icon: "users", demoId: "cmr04gffk0jkjqm4ippkgw1jc" },
      { label: "Invite Team Members", slug: "invite-members", icon: "useradd", demoId: "cmr046fgm0jesqm4itb55n54i" },
      { label: "Connectors & Permissions", slug: "connectors-permissions", icon: "settings", demoId: "cmr05pgw50kgwqm4iu8qbvizy" },
      { label: "Personal Projects", slug: "personal-projects", icon: "dashboard", demoId: "cmr02g0w70i76qm4ibhrzrpw8" },
      { label: "Share GA Reports", slug: "share-ga-reports", icon: "radar", demoId: "cmr02l5h90idpqm4iv1q91biq" },
    ],
  },
];

export type FlatNavItem = GuideNavItem & { group: string };

export function flatNav(): FlatNavItem[] {
  return GUIDE_NAV.flatMap((g) => g.items.map((i) => ({ ...i, group: g.title })));
}
export function navEntry(slug: string): FlatNavItem | undefined {
  return flatNav().find((i) => i.slug === slug);
}
export function siblings(slug: string): { prev?: FlatNavItem; next?: FlatNavItem } {
  const flat = flatNav();
  const i = flat.findIndex((x) => x.slug === slug);
  return { prev: i > 0 ? flat[i - 1] : undefined, next: i >= 0 && i < flat.length - 1 ? flat[i + 1] : undefined };
}
export function nextGuides(slug: string, n = 3): FlatNavItem[] {
  const flat = flatNav();
  const i = flat.findIndex((x) => x.slug === slug);
  if (i < 0) return flat.slice(0, n);
  const after = flat.slice(i + 1);
  return (after.length ? after : flat.filter((x) => x.slug !== slug)).slice(0, n);
}
