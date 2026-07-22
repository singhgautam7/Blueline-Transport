import { Truck, Boxes, Route, Warehouse, ShieldCheck, Clock, Zap, Utensils, type LucideIcon } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

const { services } = siteContent;

const ICONS: Record<string, LucideIcon> = {
  truck: Truck,
  boxes: Boxes,
  route: Route,
  warehouse: Warehouse,
  shield: ShieldCheck,
  clock: Clock,
  zap: Zap,
  utensils: Utensils,
};

export function ServicesSection() {
  return (
    <section id="services" className="bg-white px-[18px] py-14 site:px-12 site:py-24">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading eyebrow={services.eyebrow} heading={services.heading} intro={services.intro} />
        <div className="grid grid-cols-1 gap-4 site:grid-cols-3">
          {services.items.map((service) => {
            const Icon = ICONS[service.icon] ?? Truck;
            return (
              <div key={service.title} className="rounded-[10px] border border-line bg-white p-6">
                <div className="mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-[9px] bg-bluel">
                  <Icon size={24} strokeWidth={1.7} className="text-blue" />
                </div>
                <h3 className="mb-[7px] font-display text-[18px] font-bold text-blued">{service.title}</h3>
                <p className="text-[14.5px] text-body">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
