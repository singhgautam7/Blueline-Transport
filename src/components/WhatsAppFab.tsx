import { siteContent } from "@/data/siteContent";
import { waHref } from "@/lib/links";
import { WhatsAppIcon } from "./icons";

/* Persistent floating WhatsApp button, bottom-right on every screen size. */
export function WhatsAppFab() {
  return (
    <a
      href={waHref(siteContent.hero.quoteMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-[0_8px_24px_rgba(7,61,24,.35)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wa"
    >
      <WhatsAppIcon size={30} />
    </a>
  );
}
