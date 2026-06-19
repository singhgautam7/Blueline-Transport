import { siteContent } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

const { fleet } = siteContent;

/* The four truck silhouettes from the design, keyed by `shape`. */
function FleetTruck({ shape }: { shape: string }) {
  const common = {
    fill: "none",
    stroke: "var(--color-blue)",
    strokeWidth: 2.4,
    strokeLinejoin: "round" as const,
  };
  switch (shape) {
    case "container":
      return (
        <svg width="86" height="46" viewBox="0 0 110 58" {...common}>
          <path d="M6 10h62v32H6z" />
          <path d="M68 20h18l18 8v14H68z" />
          <circle cx="30" cy="46" r="7" fill="#fff" />
          <circle cx="86" cy="46" r="7" fill="#fff" />
        </svg>
      );
    case "trailer":
      return (
        <svg width="92" height="46" viewBox="0 0 120 58" {...common}>
          <path d="M4 22h22v20H4z" />
          <path d="M30 12h86v30H30z" />
          <circle cx="16" cy="46" r="7" fill="#fff" />
          <circle cx="70" cy="46" r="7" fill="#fff" />
          <circle cx="98" cy="46" r="7" fill="#fff" />
        </svg>
      );
    case "flatbed":
      return (
        <svg width="88" height="46" viewBox="0 0 110 58" {...common}>
          <path d="M6 26h60v16H6z" />
          <path d="M6 26V16h60v10" strokeDasharray="3 4" />
          <path d="M66 22h18l18 8v12H66z" />
          <circle cx="30" cy="46" r="7" fill="#fff" />
          <circle cx="86" cy="46" r="7" fill="#fff" />
        </svg>
      );
    default: // lcv
      return (
        <svg width="80" height="46" viewBox="0 0 100 58" {...common}>
          <path d="M6 14h44v28H6z" />
          <path d="M50 24h20l14 10v8H50z" />
          <circle cx="26" cy="46" r="7" fill="#fff" />
          <circle cx="70" cy="46" r="7" fill="#fff" />
        </svg>
      );
  }
}

export function FleetSection() {
  return (
    <section id="fleet" className="bg-bluel px-[18px] py-14 site:px-12 site:py-24">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading eyebrow={fleet.eyebrow} heading={fleet.heading} intro={fleet.intro} />
        <div className="grid grid-cols-1 gap-4 site:grid-cols-4">
          {fleet.items.map((item) => (
            <div key={item.type} className="rounded-[10px] border border-line2 bg-white p-[22px]">
              <div className="mb-[14px] flex h-16 items-end">
                <FleetTruck shape={item.shape} />
              </div>
              <div className="font-display text-[17px] font-extrabold text-blued">{item.type}</div>
              <div className="mb-3 mt-1 text-[13.5px] text-body">{item.model}</div>
              <div className="flex justify-between border-t border-[#EAEFF7] pt-[10px]">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">Payload</div>
                  <div className="font-display font-bold text-blued">{item.payload}</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">In fleet</div>
                  <div className="font-display font-bold text-accents">{item.count}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
