import { siteContent } from "@/data/siteContent";

const { about } = siteContent;

export function AboutSection() {
  return (
    <section id="about" className="bg-white px-[18px] py-14 site:px-12 site:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 items-center gap-7 site:grid-cols-[1.3fr_0.7fr]">
          <div>
            <div className="mb-[14px] flex items-center gap-[10px]">
              <span className="h-[2px] w-[26px] bg-accent" />
              <span className="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-accent">
                {about.eyebrow}
              </span>
            </div>
            <h2 className="mb-4 max-w-[560px] font-display text-[29px] font-extrabold leading-[1.08] tracking-[-0.015em] text-blued site:text-[42px]">
              {about.heading}
            </h2>
            {about.paragraphs.map((para, i) => (
              <p
                key={i}
                className={`max-w-[600px] text-[16px] leading-[1.6] text-body ${
                  i < about.paragraphs.length - 1 ? "mb-[14px]" : ""
                }`}
              >
                {para}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {about.facts.map((fact) => (
              <div key={fact.label} className="rounded-[10px] bg-bluel p-[18px]">
                <div className="font-display text-[26px] font-black text-blue">{fact.value}</div>
                <div className="mt-1 text-[13px] text-body">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
