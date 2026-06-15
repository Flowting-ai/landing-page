import { redirect } from "next/navigation";

// Canonical individuals page now lives at /individuals (Colin's B2C/B2B IA, Jun 14).
export default function PersonalRedirect() {
  redirect("/individuals");
}
