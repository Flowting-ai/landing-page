import type { Metadata } from "next";
import Script from "next/script";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Souvenir — Your company's AI brain, in Slack",
  description:
    "Souvenir is an AI workforce that lives where your team works. Agents that remember your context, run your workflows, and connect every tool you use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZLCFW0RLZJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZLCFW0RLZJ');
          `}
        </Script>
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
