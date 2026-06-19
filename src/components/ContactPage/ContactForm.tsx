"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/kaya/Button";
import { trackEvent } from "@/lib/gtag";

const field = "mt-1.5 w-full rounded-[var(--r-md)] border border-line bg-bg-subtle px-3.5 py-2.5 font-sans text-[var(--text-small)] text-ink placeholder:text-ink-subtle outline-none focus:border-line-strong";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    trackEvent("contact_form_submitted", { location: "contact_page" });
    const subject = encodeURIComponent(`Souvenir enquiry — ${name || "website"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`);
    window.location.href = `mailto:info@getsouvenir.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="relative rounded-[var(--r-2xl)] border border-line bg-surface p-6 sm:p-8" style={{ boxShadow: "var(--shadow-lg)" }}>
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-2xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
      <div className="relative">
        <h2 className="font-display text-[length:var(--text-h3)] text-ink">Send us a message</h2>
        <div className="mt-5 flex flex-col gap-4">
          <label className="block">
            <span className="font-sans text-[var(--text-micro)] font-medium text-ink-secondary">Your name</span>
            <input className={field} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
          </label>
          <label className="block">
            <span className="font-sans text-[var(--text-micro)] font-medium text-ink-secondary">Email address</span>
            <input type="email" className={field} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required />
          </label>
          <label className="block">
            <span className="font-sans text-[var(--text-micro)] font-medium text-ink-secondary">Message</span>
            <textarea className={field + " min-h-[120px] resize-y"} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us what you need…" required />
          </label>
        </div>
        <div className="mt-6" style={{ ["--font-size-body" as string]: "15px", ["--line-height-body" as string]: "22px" }}>
          <Button variant="default" size="md" className="w-full justify-center px-6 py-3">Send message</Button>
        </div>
      </div>
    </form>
  );
}
