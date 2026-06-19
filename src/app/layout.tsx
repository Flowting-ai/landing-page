import type { Metadata } from "next";
import Script from "next/script";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Souvenir — Your company's AI brain, in Slack",
  description:
    "Souvenir is an AI workforce that lives where your team works. Agents that remember your context, run your workflows, and connect every tool you use.",
};

// GA4 measurement ID. Override per-environment via NEXT_PUBLIC_GA_ID; falls back
// to the production property. Only loaded in production so local dev and preview
// builds don't pollute the analytics property.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-ZLCFW0RLZJ";
const GA_ENABLED = process.env.NODE_ENV === "production" && Boolean(GA_ID);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <head>
        {GA_ENABLED && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
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
