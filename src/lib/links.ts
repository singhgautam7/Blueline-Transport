import { siteContent } from "@/data/siteContent";

const { contact } = siteContent;

/** A `tel:` link for the company phone number. */
export function telHref(): string {
  return `tel:${contact.phone.tel}`;
}

/**
 * A WhatsApp click-to-chat link (https://wa.me/<number>?text=…).
 * Pass an optional message to pre-fill the chat.
 */
export function waHref(message?: string): string {
  const base = `https://wa.me/${contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Google Maps embed URL for the office, built from `contact.mapsQuery`. */
export function mapEmbedSrc(): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(contact.mapsQuery)}&output=embed`;
}
