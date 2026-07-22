import { siteContent } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";
import { CoverageMap } from "./CoverageMap";
import { PinIcon, ArrowRight } from "./icons";

const { coverage } = siteContent;

type Hub = {
  city: string;
  note: string;
  lat: number;
  lng: number;
  labelSide: "left" | "right";
  hq?: boolean;
  primary?: boolean;
  comingSoon?: string;
};

const hubs = coverage.hubs as readonly Hub[];

export function CoverageSection() {
  return (
    <section id="coverage" className="bg-white px-[18px] py-14 site:px-12 site:py-24">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading
          eyebrow={coverage.eyebrow}
          heading={coverage.heading}
          intro={coverage.intro}
          introClassName="mb-[30px] max-w-[620px]"
        />
        <div className="grid grid-cols-1 items-stretch gap-6 site:grid-cols-[1.05fr_0.95fr]">
          {/* Route map (real India geography + state outlines) */}
          <CoverageMap />

          {/* Hub list */}
          <div className="flex flex-col gap-3">
            {hubs.map((hub) =>
              hub.comingSoon ? (
                <div
                  key={hub.city}
                  className="flex items-center justify-between gap-[14px] rounded-[10px] border-[1.5px] border-accent bg-bluel px-[18px] py-4"
                >
                  <div>
                    <div className="flex items-center gap-[9px]">
                      <span className="font-display text-[16px] font-extrabold text-blued">{hub.city}</span>
                      <span className="inline-flex items-center gap-[5px] rounded-[20px] bg-accent px-[9px] py-[3px] text-[10px] font-extrabold uppercase tracking-[0.08em] text-accenti">
                        <span className="inline-block h-[5px] w-[5px] rounded-full bg-accenti" />
                        {hub.comingSoon}
                      </span>
                    </div>
                    <div className="mt-1 text-[13.5px] text-body">{hub.note}</div>
                  </div>
                  <ArrowRight size={22} className="flex-none text-accent" />
                </div>
              ) : (
                <div
                  key={hub.city}
                  className="flex items-center justify-between gap-[14px] rounded-[10px] border border-line px-[18px] py-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display text-[16px] font-extrabold text-blued">{hub.city}</span>
                      {hub.hq ? (
                        <span className="rounded-[20px] bg-accent px-[7px] py-[2px] text-[10px] font-bold uppercase tracking-[0.08em] text-accenti">
                          HQ
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-[3px] text-[13.5px] text-body">{hub.note}</div>
                  </div>
                  <PinIcon size={20} className="flex-none text-accent" />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
