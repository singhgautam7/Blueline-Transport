import { siteContent } from "@/data/siteContent";
import { telHref, waHref } from "@/lib/links";
import { WhatsAppBubble, PhoneIcon, CheckIcon } from "./icons";

const { hero, contact } = siteContent;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-[18px] pb-12 pt-10 site:px-12 site:pb-[86px] site:pt-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-[30px] site:grid-cols-[1.05fr_0.95fr] site:gap-[54px]">
        {/* Copy column */}
        <div>
          <div className="mb-5 flex items-center gap-[10px]">
            <span className="h-[2px] w-7 bg-accent" />
            <span className="font-display text-[12px] font-bold uppercase tracking-[0.18em] text-accent">
              {hero.eyebrow}
            </span>
          </div>

          <h1 className="mb-[18px] text-balance font-display text-[39px] font-black leading-[1.02] tracking-[-0.025em] text-blued site:text-[58px]">
            {hero.titlePre}
            <span className="text-accent">{hero.titleAccent}</span>
            {hero.titlePost}
          </h1>

          <p className="mb-[26px] max-w-[500px] text-[17px] leading-[1.55] text-body site:text-[19px]">
            {hero.subline}
          </p>

          <div className="mb-[26px] flex flex-col gap-3 site:flex-row">
            <a
              href={waHref(hero.quoteMessage)}
              className="inline-flex items-center justify-center gap-[9px] rounded-md bg-accent px-6 py-[15px] font-display text-[16px] font-extrabold text-accenti shadow-[0_8px_20px_rgba(30,111,232,.22)]"
            >
              <WhatsAppBubble size={18} />
              {hero.quoteCta}
            </a>
            <a
              href={telHref()}
              className="inline-flex items-center justify-center gap-[9px] rounded-md border-[1.6px] border-[#C9D6EC] bg-white px-6 py-[15px] font-display text-[16px] font-bold text-blue"
            >
              <PhoneIcon size={18} />
              Call {contact.phone.display}
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {hero.trustChips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-[6px] rounded-[30px] bg-bluel px-3 py-[7px] text-[13px] font-semibold text-blue"
              >
                <CheckIcon size={14} className="text-accent" />
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Image column.
            TODO (client): drop a real highway/fleet photo into
            /public/images/ and swap this gradient block for it
            (e.g. a background-image or <Image> from next/image). */}
        <div className="relative h-[300px] overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#0B3A82_0%,#06203F_100%)] site:h-[460px]">
          <svg
            viewBox="0 0 600 400"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full opacity-[.18]"
            fill="none"
            stroke="#fff"
            strokeWidth="1.4"
          >
            <path d="M-40 400 L260 110 M120 400 L340 110 M300 400 L410 110 M520 400 L500 110" />
            <path d="M0 330 H600 M0 270 H600 M0 220 H600" strokeWidth="0.7" opacity="0.6" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center opacity-90">
            <svg width="160" height="92" viewBox="0 0 120 70" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="2.4" strokeLinejoin="round">
              <path d="M8 16h52v34H8z" />
              <path d="M60 26h22l16 11v13H60z" />
              <circle cx="30" cy="54" r="8" fill="#06203F" />
              <circle cx="84" cy="54" r="8" fill="#06203F" />
            </svg>
          </div>
          <div className="absolute bottom-3 right-[14px] font-display text-[10px] uppercase tracking-[0.16em] text-white/45">
            {hero.imageCaption}
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-[10px] bg-white px-[15px] py-[11px] shadow-[0_10px_26px_rgba(8,30,70,.22)]">
            <div className="font-display text-[24px] font-black leading-none text-accent">{hero.statBadgeValue}</div>
            <div className="text-[11px] font-semibold leading-[1.25] text-body">
              {hero.statBadgeLabel.split(" ").slice(0, 1).join(" ")}
              <br />
              {hero.statBadgeLabel.split(" ").slice(1).join(" ")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
