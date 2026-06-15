import type { Metadata } from "next";
import { Geist, Geist_Mono, Besley } from "next/font/google";
import Script from "next/script";
import "./globals.css";

/* Fonts are loaded ONCE here via next/font (self-hosted, no render-blocking
   Google @import). Geist = body/UI, Besley = display headings. */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const besley = Besley({
  variable: "--font-besley",
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="en" suppressHydrationWarning>
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
        className={`${geistSans.variable} ${geistMono.variable} ${besley.variable} min-h-dvh bg-bg text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
