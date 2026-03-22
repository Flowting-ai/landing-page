import ContactForm from "@/components/GetStartedPage/Contact/ContactForm";
import Navbar from "@/components/Common/Navbar/Navbar";

export default function ContactPage() {
  return (
    <>
      {/* === NAVBAR === */}
      <div className="container mx-auto bg-[#FAF9F8] flex items-center justify-center px-2 lg:px-16 py-3 lg:py-6">
        <Navbar />
      </div>

      {/* === CONTACT FORM === */}
      <ContactForm />
    </>
  );
}
