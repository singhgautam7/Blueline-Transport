"use client";

import { useState } from "react";
import { siteContent } from "@/data/siteContent";
import { telHref, waHref } from "@/lib/links";
import {
  LogoMark,
  PhoneIcon,
  WhatsAppIcon,
  BurgerIcon,
  CloseIcon,
} from "./icons";

const { company, nav } = siteContent;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-3 border-b border-line bg-white/92 px-[18px] py-[13px] backdrop-blur-[10px] site:px-12 site:py-4">
      {/* Logo */}
      <a href="#top" className="flex items-center gap-[10px]" aria-label={company.name}>
        <span className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[7px] bg-blue">
          <LogoMark size={22} />
        </span>
        <span className="font-display leading-none">
          <span className="block text-[17px] font-black tracking-[0.02em] text-blued">{company.logoLine1}</span>
          <span className="block text-[10px] font-semibold tracking-[0.32em] text-accent">{company.logoLine2}</span>
        </span>
      </a>

      {/* Primary nav — dropdown on mobile, inline row on desktop */}
      <nav
        className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-[2px] border-b border-line bg-white px-4 pb-[14px] pt-2 shadow-[0_16px_30px_rgba(8,30,70,.10)] site:static site:flex site:flex-row site:gap-[30px] site:border-0 site:bg-transparent site:p-0 site:shadow-none`}
      >
        {nav.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={`px-1 py-[11px] text-[15px] font-semibold text-blued site:border-0 site:p-0 ${
              i < nav.length - 1 ? "border-b border-[#F0F3F8] site:border-0" : ""
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Action cluster */}
      <div className="flex items-center gap-[9px]">
        <a
          href={telHref()}
          className="inline-flex items-center gap-[7px] whitespace-nowrap rounded-[5px] bg-blue px-[14px] py-[10px] font-display text-[14px] font-bold text-white"
        >
          <PhoneIcon size={16} className="text-white" />
          <span className="hidden site:inline">Call Now</span>
        </a>
        <a
          href={waHref()}
          className="hidden items-center gap-[7px] whitespace-nowrap rounded-[5px] bg-wa px-[14px] py-[10px] font-display text-[14px] font-bold text-[#073d18] site:inline-flex"
        >
          <WhatsAppIcon size={16} className="text-[#073d18]" />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-[5px] border border-[#D9E0EC] bg-white text-blued site:hidden"
        >
          {open ? <CloseIcon size={20} /> : <BurgerIcon size={20} />}
        </button>
      </div>
    </header>
  );
}
