import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import Analytics from "@/components/analytics/Analytics";
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
