import { Geist, Geist_Mono, Besley } from "next/font/google";

/* Single source for the site fonts. Loaded once via next/font (self-hosted, no
   render-blocking Google @import). Consumed by app/layout.tsx AND the Storybook
   preview decorator so both render with the real Besley/Geist — no drift.
   Geist = body/UI, Besley = display headings. */
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const besley = Besley({
  variable: "--font-besley",
  subsets: ["latin"],
  display: "swap",
});

/** The three font CSS-variable classes, space-joined — apply to <body>. */
export const fontVariables = `${geistSans.variable} ${geistMono.variable} ${besley.variable}`;
