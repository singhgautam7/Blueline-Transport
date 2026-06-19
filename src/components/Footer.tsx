import { siteContent } from "@/data/siteContent";
import { telHref } from "@/lib/links";
import { LogoMark } from "./icons";

const { company, footer, contact } = siteContent;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer px-[18px] pb-[26px] pt-12">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-[30px] site:grid-cols-[2.2fr_1fr_1fr_1.4fr]">
        {/* Brand + blurb */}
        <div>
          <div className="mb-[14px] flex items-center gap-[10px]">
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-md bg-blue">
              <LogoMark size={20} wheels={false} />
            </span>
            <span className="font-display leading-none">
              <span className="block text-[16px] font-black text-white">{company.logoLine1}</span>
              <span className="block text-[9px] font-semibold tracking-[0.3em] text-accent">{company.logoLine2}</span>
            </span>
          </div>
          <p className="max-w-[260px] text-[14px] leading-[1.6] text-white/50">{footer.blurb}</p>
        </div>

        {/* Company links */}
        <div>
          <div className="mb-[14px] font-display text-[12px] font-bold uppercase tracking-[0.12em] text-white/45">
            Company
          </div>
          <div className="flex flex-col gap-[9px]">
            {footer.companyLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-[14px] text-white/[.78] no-underline">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Service list */}
        <div>
          <div className="mb-[14px] font-display text-[12px] font-bold uppercase tracking-[0.12em] text-white/45">
            Services
          </div>
          <div className="flex flex-col gap-[9px]">
            {footer.serviceLinks.map((label) => (
              <span key={label} className="text-[14px] text-white/[.78]">
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="mb-[14px] font-display text-[12px] font-bold uppercase tracking-[0.12em] text-white/45">
            Contact
          </div>
          <a href={telHref()} className="mb-[6px] block font-display text-[18px] font-extrabold text-white no-underline">
            {contact.phone.display}
          </a>
          <div className="mb-1 text-[13.5px] text-white/65">{contact.email}</div>
          <div className="text-[13px] leading-[1.5] text-white/50">{contact.address}</div>
        </div>
      </div>

      <div className="mx-auto mt-[34px] flex max-w-[1180px] flex-wrap justify-between gap-2 border-t border-white/10 pt-[18px] text-[12.5px] text-white/40">
        <span>© {year} {company.legalName} All rights reserved.</span>
        <span>{footer.gstin}</span>
      </div>
    </footer>
  );
}
