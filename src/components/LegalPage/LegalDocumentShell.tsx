import Navbar from "@/components/Common/Navbar/Navbar";
import LegalPolicyTemplate from "@/components/LegalPage/LegalPolicyTemplate";
import { getLegalDocumentBody } from "@/lib/legal-document-content";

type Props = {
  sectionSlug: string;
  docSlug: string;
  sectionTitle: string;
  documentTitle: string;
};

export default function LegalDocumentShell({
  sectionSlug,
  docSlug,
  sectionTitle,
  documentTitle,
}: Props) {
  const body = getLegalDocumentBody(sectionSlug, docSlug);

  return (
    <div className="min-h-screen bg-[#FAF9F8]">
      <div className="mx-auto w-full max-w-7xl bg-[#FAF9F8] flex items-center justify-center px-4 sm:px-6 lg:px-10 xl:px-12 py-3 lg:py-6">
        <Navbar />
      </div>
      <LegalPolicyTemplate
        sectionTitle={sectionTitle}
        documentTitle={documentTitle}
        body={body}
      />
    </div>
  );
}
