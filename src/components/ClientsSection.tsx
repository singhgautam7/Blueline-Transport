import { siteContent } from "@/data/siteContent";

const { clients } = siteContent;

export function ClientsSection() {
  return (
    <section className="bg-blued px-[18px] py-14 site:px-12 site:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-[30px] text-center">
          <span className="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-accent">
            {clients.eyebrow}
          </span>
          <h2 className="mt-[10px] font-display text-[24px] font-extrabold text-white">{clients.heading}</h2>
        </div>

        {/* Logo placeholders — replace with real logos once usage rights are cleared. */}
        <div className="mb-10 grid grid-cols-2 gap-3 site:grid-cols-5">
          {clients.logos.map((logo) => (
            <div
              key={logo}
              className="flex h-16 items-center justify-center rounded-lg border border-white/[.14] font-display text-[15px] font-extrabold tracking-[0.04em] text-white/55"
            >
              {logo}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 site:grid-cols-2">
          {clients.testimonials.map((t) => (
            <div key={t.author} className="rounded-xl border border-white/[.12] bg-white/[.05] p-6">
              <div className="font-display text-[38px] font-black leading-[.6] text-accent" aria-hidden>
                &ldquo;
              </div>
              <p className="my-4 mb-4 mt-[6px] text-[16px] leading-[1.55] text-white">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-display font-extrabold text-accenti">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[14px] font-bold text-white">{t.author}</div>
                  <div className="text-[12.5px] text-white/60">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
