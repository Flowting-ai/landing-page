import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import Analytics from "@/components/analytics/Analytics";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Pages set self-contained titles (e.g. "Brain & Automation — Souvenir"); this
  // is only the fallback for any page that doesn't. No title template — it would
  // double the brand name on the existing hand-written titles.
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <head>
        <JsonLd />
        <Analytics />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-dvh bg-bg text-ink antialiased"
      >
        {children}
      </body>
    </html>
  );
}
