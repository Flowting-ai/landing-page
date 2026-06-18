import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage/LegalPage";
import { LEGAL_DOCS } from "@/components/LegalPage/data";

export const metadata: Metadata = { title: "Connected Services Privacy — Souvenir", description: "How Souvenir handles data from the Meta app, the Slack managerial bot, and other Connectors." };

export default function Page() {
  return <LegalPage doc={LEGAL_DOCS["connected-services"]} />;
}
