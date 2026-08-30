import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Static export needs a fixed list. Keep in sync with the real public routes —
// excludes /v/* experiments, /home-v1 (legacy), and /solutions/personal (redirect).
// Roughly ordered by priority: marketing pages first, legal last.
const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1.0 },
  { path: "/product/brain", priority: 0.9 },
  { path: "/product/ai-assistants", priority: 0.9 },
  { path: "/product/chatspace", priority: 0.9 },
  { path: "/product/slack", priority: 0.9 },
  { path: "/solutions/company-brain", priority: 0.8 },
  { path: "/individuals", priority: 0.8 },
  { path: "/pricing", priority: 0.8 },
  { path: "/integrations", priority: 0.7 },
  { path: "/about", priority: 0.6 },
  { path: "/guide", priority: 0.6 },
  { path: "/legal/terms", priority: 0.3 },
  { path: "/legal/privacy", priority: 0.3 },
  { path: "/legal/cookies", priority: 0.3 },
  { path: "/legal/acceptable-use", priority: 0.3 },
  { path: "/legal/connected-services", priority: 0.3 },
  { path: "/legal/subprocessors", priority: 0.3 },
  { path: "/legal/copyright", priority: 0.3 },
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
