import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

// Default social share card, generated once at build (static export). Brand is
// carried by color + layout (warm cream / ink / dusty-mauve accent) — no banned
// gradients. Twitter uses summary_large_image (set in layout), so this doubles as
// the Twitter card.
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F7F2ED",
          padding: "80px",
        }}
      >
        {/* dusty-mauve accent rule */}
        <div style={{ width: 96, height: 8, borderRadius: 4, backgroundColor: "#674F68" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 700, color: "#26211E", letterSpacing: "-0.03em" }}>
            {SITE_NAME}
          </div>
          <div style={{ marginTop: 16, fontSize: 44, color: "#524B47", maxWidth: 900, lineHeight: 1.2 }}>
            {SITE_TAGLINE}
          </div>
        </div>
        <div style={{ fontSize: 28, color: "#827A74" }}>getsouvenir.com</div>
      </div>
    ),
    { ...size },
  );
}
