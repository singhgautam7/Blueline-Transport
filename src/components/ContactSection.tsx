"use client";

import { useState, type FormEvent } from "react";
import { siteContent } from "@/data/siteContent";
import { telHref, waHref, mapEmbedSrc } from "@/lib/links";
import { SectionHeading } from "./SectionHeading";
import { PhoneIcon, WhatsAppBubble, MailIcon, PinIcon } from "./icons";

const { contact } = siteContent;
const { form } = contact;

/* ---------------------------------------------------------------------------
 * The site is static, so the form cannot email by itself. By DEFAULT it builds
 * a pre-filled WhatsApp message and opens wa.me — no backend, no secrets.
 *
 * TO SWITCH TO EMAIL DELIVERY (Web3Forms) instead, see the commented block at
 * the bottom of `handleSubmit` and set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local
 * (documented in .env.example). No code secrets are committed.
 * ------------------------------------------------------------------------- */

export function ContactSection() {
  const [values, setValues] = useState({ name: "", company: "", phone: "", details: "" });

  const update = (field: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // --- Default: open WhatsApp with the load details pre-filled ---
    const message = form.whatsappTemplate
      .replace("{name}", values.name)
      .replace("{company}", values.company)
      .replace("{phone}", values.phone)
      .replace("{details}", values.details || "Not specified");
    window.open(waHref(message), "_blank", "noopener,noreferrer");

    // --- Alternative: deliver as email via Web3Forms (uncomment to use) ---
    // const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY; // TODO: set in .env.local
    // if (key) {
    //   await fetch("https://api.web3forms.com/submit", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ access_key: key, ...values }),
    //   });
    // }
  }

  const [footPre, footPost] = form.footnote.split("{phone}");

  return (
    <section id="contact" className="bg-bluel px-[18px] py-14 site:px-12 site:py-24">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          eyebrow={contact.eyebrow}
          heading={contact.heading}
          headingClassName="mb-7 max-w-[640px]"
        />
        <div className="grid grid-cols-1 gap-6 site:grid-cols-2">
          {/* Contact channels */}
          <div className="flex flex-col gap-3">
            <a
              href={telHref()}
              className="flex items-center gap-[14px] rounded-[10px] border border-line2 bg-white px-[18px] py-4"
            >
              <span className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-[9px] bg-blue">
                <PhoneIcon size={20} className="text-white" />
              </span>
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">Call us</span>
                <span className="block font-display text-[17px] font-extrabold text-blued">{contact.phone.display}</span>
              </span>
            </a>

            <a
              href={waHref()}
              className="flex items-center gap-[14px] rounded-[10px] border border-line2 bg-white px-[18px] py-4"
            >
              <span className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-[9px] bg-wa">
                <WhatsAppBubble size={20} className="text-white" />
              </span>
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">WhatsApp</span>
                <span className="block font-display text-[17px] font-extrabold text-blued">{contact.phone.display}</span>
              </span>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="flex items-start gap-[14px] rounded-[10px] border border-line2 bg-white px-[18px] py-4"
            >
              <span className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-[9px] bg-bluel">
                <MailIcon size={20} className="text-blue" />
              </span>
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">Email</span>
                <span className="block font-display text-[15px] font-bold text-blued">{contact.email}</span>
              </span>
            </a>

            <div className="flex items-start gap-[14px] rounded-[10px] border border-line2 bg-white px-[18px] py-4">
              <span className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-[9px] bg-bluel">
                <PinIcon size={20} className="text-blue" />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">Office &amp; hours</div>
                <div className="font-display text-[15px] font-bold text-blued">{contact.address}</div>
                <div className="mt-[2px] text-[13px] text-body">{contact.hours}</div>
              </div>
            </div>

            {/* Embedded map of the office (built from contact.mapsQuery) */}
            <div className="relative h-[130px] overflow-hidden rounded-[10px] border border-line2 bg-[#E9EEF5]">
              <iframe
                title={`Map of ${contact.mapsQuery}`}
                src={mapEmbedSrc()}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>

          {/* Quote form (submits to WhatsApp by default) */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 rounded-xl border border-line2 bg-white p-[22px]"
          >
            <div className="font-display text-[17px] font-extrabold text-blued">{form.title}</div>
            <input
              required
              value={values.name}
              onChange={update("name")}
              placeholder={form.namePlaceholder}
              aria-label={form.namePlaceholder}
              className="rounded-[7px] border border-line3 px-[14px] py-[13px] text-[15px] text-ink outline-none focus:border-accent"
            />
            <input
              required
              value={values.company}
              onChange={update("company")}
              placeholder={form.companyPlaceholder}
              aria-label={form.companyPlaceholder}
              className="rounded-[7px] border border-line3 px-[14px] py-[13px] text-[15px] text-ink outline-none focus:border-accent"
            />
            <input
              required
              type="tel"
              value={values.phone}
              onChange={update("phone")}
              placeholder={form.phonePlaceholder}
              aria-label={form.phonePlaceholder}
              className="rounded-[7px] border border-line3 px-[14px] py-[13px] text-[15px] text-ink outline-none focus:border-accent"
            />
            <textarea
              rows={3}
              value={values.details}
              onChange={update("details")}
              placeholder={form.detailsPlaceholder}
              aria-label={form.detailsPlaceholder}
              className="resize-y rounded-[7px] border border-line3 px-[14px] py-[13px] text-[15px] text-ink outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-[9px] rounded-[7px] bg-accent p-[14px] font-display text-[15px] font-extrabold text-accenti"
            >
              <WhatsAppBubble size={18} />
              {form.submitLabel}
            </button>
            <div className="text-center text-[12px] text-muted">
              {footPre}
              <a href={telHref()} className="font-bold text-blue no-underline">
                {contact.phone.display}
              </a>
              {footPost}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
