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
const LON0 = 68.0; // western edge of frame (Kutch coast)
const LON_MAX = 80.0; // eastern edge of frame (Deccan / east coast)
const LAT_TOP = 24.5; // northern edge of frame (Rann of Kutch / above Ahmedabad)
const LAT_BOT = 11.0; // southern edge of frame (below Bengaluru)
const PX_LON = 18.05;
const PX_LAT = 19.0;
const PAD = 16;

const px = (lng: number) => PAD + (lng - LON0) * PX_LON;
const py = (lat: number) => PAD + (LAT_TOP - lat) * PX_LAT;

const VB_W = Math.round(PAD * 2 + (LON_MAX - LON0) * PX_LON);
const VB_H = Math.round(PAD * 2 + (LAT_TOP - LAT_BOT) * PX_LAT);

// India border traced clockwise from the north as [lng, lat] pairs. Points
// outside the frame (the north, north-east and far east) are intentionally
// coarse — they are clipped by the viewBox. The Gujarat coast (Gulf of
// Khambhat, Saurashtra peninsula, Gulf of Kutch, Kutch) is detailed because
// it sits inside the zoomed frame.
const INDIA: [number, number][] = [
  // North & north-east (clipped above the frame)
  [74.0, 34.3], [78.0, 35.0], [82.0, 29.0], [86.0, 27.5], [89.0, 27.9],
  [92.0, 27.9], [95.5, 28.5], [97.0, 28.0],
  // East / north-east (clipped to the right)
  [97.0, 26.0], [94.5, 25.0], [93.5, 22.5], [91.0, 24.0], [88.0, 23.0],
  // East coast (Odisha → Andhra → Tamil Nadu)
  [87.0, 20.8], [85.0, 19.5], [83.5, 18.0], [82.0, 16.5], [80.8, 15.7],
  [80.3, 13.5], [79.9, 12.0], [79.3, 10.5], [78.6, 9.4],
  // South tip (clipped below the frame)
  [77.5, 8.1], [76.6, 8.8],
  // West coast going north (Kerala → Karnataka → Goa → Konkan)
  [76.0, 10.8], [75.0, 12.2], [74.5, 13.2], [74.0, 14.5], [73.7, 15.5],
  [73.4, 16.5], [73.0, 17.7], [72.9, 18.5], [72.78, 19.2], [72.72, 20.1],
  // --- Gujarat: east shore of Gulf of Khambhat up to the head ---
  [72.78, 20.9], [72.6, 21.5], [72.55, 22.0], [72.5, 22.35],
  // head of the gulf, down the west shore (Bhavnagar)
  [72.25, 22.05], [72.15, 21.77],
  // Saurashtra south coast: Bhavnagar → Diu → Veraval → Porbandar → Dwarka
  [71.5, 21.0], [70.99, 20.71], [70.37, 20.9], [69.64, 21.64], [68.97, 22.24],
  // Saurashtra north coast into the Gulf of Kutch (Okha → Jamnagar → head)
  [69.15, 22.45], [70.07, 22.47], [70.55, 22.7],
  // around the gulf head, west along the Kutch south coast (Mandvi → Kutch W)
  [70.1, 22.95], [69.35, 22.83], [68.7, 23.05], [68.2, 23.75],
  // Rann of Kutch north edge, back toward the mainland (clipped above)
  [68.6, 24.2], [70.2, 24.3], [71.6, 24.35], [72.6, 24.6],
  // Western border up through Rajasthan/Punjab (clipped above)
  [73.0, 27.0], [73.8, 30.0], [74.5, 32.5],
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
            <svg viewBox={`0 0 ${VB_W} ${VB_H}`} width="100%" className="block max-w-[400px]" role="img" aria-label="Map of central and southern India showing Blueline service hubs">
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
