import { siteContent } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

const { fleet } = siteContent;

/* Vehicle silhouettes keyed by `shape`:
   - "ace"       — Tata Ace: small square-bodied mini truck
   - "bolero"    — Bolero Pickup: half-cab with an open pickup bed
   - "eicher"    — Eicher medium truck (14ft–24ft): closed body
   - "eicher-xl" — Eicher 32ft XL: extra-long closed body, more axles */
function FleetTruck({ shape }: { shape: string }) {
  const common = {
    fill: "none",
    stroke: "var(--color-blue)",
    strokeWidth: 2.4,
    strokeLinejoin: "round" as const,
  };
  switch (shape) {
    case "bolero":
      return (
        // Cab + open pickup bed with side rail (Bolero Pickup).
        <svg width="80" height="46" viewBox="0 0 100 58" {...common}>
          <path d="M6 22h22v20H6z" />
          <path d="M6 22V14h22v8" />
          <path d="M28 24h60v18H28z" />
          <path d="M32 24v-4h52v4" strokeDasharray="3 4" />
          <circle cx="18" cy="46" r="7" fill="#fff" />
          <circle cx="74" cy="46" r="7" fill="#fff" />
        </svg>
      );
    case "eicher":
      return (
        // Medium Eicher (14ft–24ft): tractor cab + closed cargo body.
        <svg width="86" height="46" viewBox="0 0 110 58" {...common}>
          <path d="M6 20h18v22H6z" />
          <path d="M24 10h72v32H24z" />
          <circle cx="16" cy="46" r="7" fill="#fff" />
          <circle cx="82" cy="46" r="7" fill="#fff" />
        </svg>
      );
    case "eicher-xl":
      return (
        // Eicher 32ft XL: extra-long cargo body, three axles.
        <svg width="98" height="46" viewBox="0 0 128 58" {...common}>
          <path d="M6 20h16v22H6z" />
          <path d="M22 8h100v34H22z" />
          <circle cx="14" cy="46" r="7" fill="#fff" />
          <circle cx="96" cy="46" r="7" fill="#fff" />
          <circle cx="114" cy="46" r="7" fill="#fff" />
        </svg>
      );
    default: // ace  — Tata Ace: compact square-bodied mini
      return (
        <svg width="66" height="46" viewBox="0 0 84 58" {...common}>
          <path d="M8 16h50v26H8z" />
          <path d="M8 22h50" />
          <circle cx="20" cy="46" r="7" fill="#fff" />
          <circle cx="52" cy="46" r="7" fill="#fff" />
        </svg>
      );
  }
}

export function FleetSection() {
  return (
    <section id="fleet" className="bg-bluel px-[18px] py-14 site:px-12 site:py-24">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading eyebrow={fleet.eyebrow} heading={fleet.heading} intro={fleet.intro} />

        {fleet.milestone ? (
          <div className="mb-8 -mt-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-4 py-2 font-display text-[13px] font-bold text-blue">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-accent" />
            {fleet.milestone}
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 site:grid-cols-3 lg:grid-cols-4">
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
