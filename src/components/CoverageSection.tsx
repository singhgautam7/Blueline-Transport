import { siteContent } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";
import { PinIcon, ArrowRight } from "./icons";

const { coverage } = siteContent;

type Hub = {
  city: string;
  note: string;
  mapX: number;
  mapY: number;
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
          {/* Route map */}
          <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[14px] bg-blued p-[22px]">
            <div className="absolute left-[18px] top-[14px] font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white/55">
              {coverage.mapLabel}
            </div>
            <svg viewBox="0 0 280 360" width="100%" className="block max-w-[300px]">
              {/* Stylised India outline */}
              <path
                d="M150 28 L182 40 L210 44 L228 60 L218 78 L206 96 L214 116 L210 142 L198 172 L182 206 L162 244 L142 286 L128 314 L118 290 L106 262 L94 230 L82 200 L86 174 L74 156 L60 150 L70 138 L86 142 L96 130 L92 108 L84 92 L98 78 L116 64 L134 46 Z"
                fill="rgba(255,255,255,0.07)"
                stroke="rgba(255,255,255,0.32)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {/* Animated freight corridors */}
              <g
                stroke="var(--color-accent)"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="2 7"
                style={{ animation: "bl-dash 1.2s linear infinite" }}
              >
                <path d="M92 196 L120 206" />
                <path d="M92 196 L96 132" />
                <path d="M120 206 L150 286" />
                <path d="M92 196 L150 286" />
              </g>
              {/* City nodes (from coverage.hubs) */}
              <g fontFamily="var(--font-display)" fontWeight="700" fontSize="11" fill="#fff">
                {hubs.map((hub) => {
                  const left = hub.mapX < 110;
                  return (
                    <g key={hub.city} opacity={hub.comingSoon ? 0.85 : 1}>
                      <circle
                        cx={hub.mapX}
                        cy={hub.mapY}
                        r={hub.primary ? 6 : 5}
                        fill={hub.primary ? "var(--color-accent)" : "#fff"}
                        stroke={hub.primary ? "#fff" : undefined}
                        strokeWidth={hub.primary ? 2 : undefined}
                      />
                      <text
                        x={left ? hub.mapX - 12 : hub.mapX + 9}
                        y={hub.mapY + 4}
                        textAnchor={left ? "end" : "start"}
                      >
                        {hub.city}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>
            <div className="absolute bottom-[14px] left-[18px] flex items-center gap-2 text-[11px] text-white/60">
              <span className="h-[2px] w-[14px] bg-accent" />
              {coverage.mapLegend}
            </div>
          </div>

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
