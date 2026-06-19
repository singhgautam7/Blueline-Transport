import { siteContent } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";
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

/* -------------------------------------------------------------------------
 * Equirectangular projection zoomed onto CENTRAL & SOUTH India (the region we
 * serve). Longitude → x, latitude → y (inverted), with a small cos-latitude
 * squash on longitude so the silhouette keeps realistic proportions. The full
 * India outline below is drawn through the same projection and simply clipped
 * by the viewBox, so the landmass runs off the top/right edges like a real
 * zoomed map. City dots use the SAME projection, so they always sit in their
 * true geographic position.
 * ----------------------------------------------------------------------- */
const LON0 = 69.0; // western edge of frame (Gujarat coast)
const LON_MAX = 86.5; // eastern edge of frame (Bay of Bengal coast)
const LAT_TOP = 26.5; // northern edge of frame (above Ahmedabad)
const LAT_BOT = 7.8; // southern edge of frame (Kanyakumari tip)
const PX_LON = 13.3;
const PX_LAT = 14.0;
const PAD = 16;

const px = (lng: number) => PAD + (lng - LON0) * PX_LON;
const py = (lat: number) => PAD + (LAT_TOP - lat) * PX_LAT;

const VB_W = Math.round(PAD * 2 + (LON_MAX - LON0) * PX_LON);
const VB_H = Math.round(PAD * 2 + (LAT_TOP - LAT_BOT) * PX_LAT);

// India border traced clockwise from the north-west as [lng, lat] pairs.
const INDIA: [number, number][] = [
  [74.0, 34.3], [75.0, 35.0], [76.8, 35.5], [78.4, 34.6], [79.2, 33.2],
  [80.0, 31.4], [81.0, 30.2], [82.8, 28.8], [84.6, 27.9], [86.7, 27.5],
  [88.2, 27.3], [89.0, 27.9], [90.5, 28.0], [92.0, 27.9], [94.0, 28.0],
  [95.5, 28.5], [96.8, 28.3], [97.0, 27.5], [96.2, 26.6], [95.2, 26.7],
  [94.6, 25.4], [94.2, 24.0], [93.3, 23.0], [93.4, 22.2], [92.2, 23.7],
  [91.0, 24.1], [89.7, 25.3], [88.1, 24.6], [88.0, 23.2], [87.8, 21.7],
  [86.5, 20.8], [85.0, 19.8], [84.0, 18.5], [82.5, 17.0], [80.8, 15.8],
  [80.3, 13.5], [79.9, 11.9], [79.3, 10.3], [78.5, 9.2], [77.5, 8.1],
  [76.5, 8.9], [75.8, 11.6], [74.7, 13.5], [73.8, 15.7], [72.9, 17.9],
  [72.7, 19.2], [72.6, 20.7], [72.9, 21.7], [70.0, 20.9], [69.1, 22.3],
  [68.2, 23.7], [70.0, 24.3], [71.0, 24.3], [72.6, 24.6], [73.0, 27.0],
  [72.3, 28.5], [73.8, 30.0], [74.5, 31.6], [74.6, 32.8],
];

const indiaPath =
  INDIA.map(([lng, lat], i) => `${i === 0 ? "M" : "L"}${px(lng).toFixed(1)} ${py(lat).toFixed(1)}`).join(" ") + " Z";

const hubByCity = Object.fromEntries(hubs.map((h) => [h.city, h]));

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
            <svg viewBox={`0 0 ${VB_W} ${VB_H}`} width="100%" className="block max-w-[300px]" role="img" aria-label="Map of central and southern India showing Blueline service hubs">
              {/* India landmass (clipped to the central/south frame) */}
              <path d={indiaPath} fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.4" strokeLinejoin="round" />

              {/* Freight corridors between hubs */}
              <g
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="2 7"
                style={{ animation: "bl-dash 1.2s linear infinite" }}
              >
                {coverage.corridors.map(([a, b]) => {
                  const ha = hubByCity[a];
                  const hb = hubByCity[b];
                  if (!ha || !hb) return null;
                  return <path key={`${a}-${b}`} d={`M${px(ha.lng)} ${py(ha.lat)} L${px(hb.lng)} ${py(hb.lat)}`} />;
                })}
              </g>

              {/* Tinted context metros (not served) */}
              <g fontFamily="var(--font-display)" fontWeight="600" fontSize="9.5" fill="rgba(255,255,255,0.42)">
                {coverage.contextCities.map((c) => {
                  const left = c.labelSide === "left";
                  return (
                    <g key={c.city}>
                      <circle cx={px(c.lng)} cy={py(c.lat)} r="3" fill="rgba(255,255,255,0.30)" />
                      <text x={left ? px(c.lng) - 6 : px(c.lng) + 6} y={py(c.lat) + 3} textAnchor={left ? "end" : "start"}>
                        {c.city}
                      </text>
                    </g>
                  );
                })}
              </g>

              {/* Served hubs (accent) */}
              <g fontFamily="var(--font-display)" fontWeight="700" fontSize="11.5" fill="#fff">
                {hubs.map((hub) => {
                  const left = hub.labelSide === "left";
                  return (
                    <g key={hub.city} opacity={hub.comingSoon ? 0.92 : 1}>
                      <circle
                        cx={px(hub.lng)}
                        cy={py(hub.lat)}
                        r={hub.primary ? 6 : 5}
                        fill="var(--color-accent)"
                        stroke="#fff"
                        strokeWidth={hub.primary ? 2 : 1.5}
                      />
                      <text x={left ? px(hub.lng) - 10 : px(hub.lng) + 10} y={py(hub.lat) + 4} textAnchor={left ? "end" : "start"}>
                        {hub.city}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>

            {/* Legend */}
            <div className="absolute bottom-[14px] left-[18px] flex flex-col gap-[6px] text-[11px] text-white/60">
              <span className="flex items-center gap-2">
                <span className="inline-block h-[9px] w-[9px] rounded-full border border-white bg-accent" />
                Cities we serve
              </span>
              <span className="flex items-center gap-2">
                <span className="h-[2px] w-[14px] bg-accent" />
                {coverage.mapLegend}
              </span>
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
