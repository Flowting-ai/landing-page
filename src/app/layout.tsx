import type { Metadata } from "next";
import { Geist, Geist_Mono, Besley } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const besley = Besley({
  variable: "--font-besley-start",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "SouvenirAI",
  description: "All AI Models, One Interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* linking to our Google Analytics Dashboard
      adding the tag manager script to the head of our document -> G-ZLCFW0RLZJ */}
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
        className={`font-besley ${geistSans.variable} ${geistMono.variable} ${besley.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
