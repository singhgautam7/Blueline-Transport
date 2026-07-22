"use client";

import { ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection, Geometry } from "geojson";
import { siteContent } from "@/data/siteContent";
import topo from "@/data/india-states.topo.json";

const { coverage } = siteContent;

type City = {
  city: string;
  lat: number;
  lng: number;
  labelSide: "left" | "right";
  hq?: boolean;
  primary?: boolean;
  comingSoon?: string;
};

const hubs = coverage.hubs as readonly City[];
const hubByCity: Record<string, City> = Object.fromEntries(hubs.map((h) => [h.city, h]));

// States our confirmed hubs sit in — tinted brighter. Karnataka is included
// because Bengaluru is a "coming soon" hub and the highlight communicates
// that it's part of the planned network.
const SERVED_STATES = new Set([
  "Maharashtra", // Mumbai HQ, Pune, Nagpur
  "Gujarat", // Ahmedabad
  "Haryana", // Gurgaon (NCR)
  "Karnataka", // Bengaluru — coming soon
]);
// States to include in the fitExtent frame so the map covers everywhere the
// hubs (and their surrounding context) live — essentially all of continental
// India minus offshore territories.
const FRAME_STATES = new Set([
  "Jammu and Kashmir",
  "Himachal Pradesh",
  "Punjab",
  "Haryana",
  "Delhi",
  "Uttaranchal",
  "Uttar Pradesh",
  "Rajasthan",
  "Bihar",
  "Jharkhand",
  "West Bengal",
  "Sikkim",
  "Assam",
  "Meghalaya",
  "Nagaland",
  "Manipur",
  "Mizoram",
  "Tripura",
  "Arunachal Pradesh",
  "Gujarat",
  "Madhya Pradesh",
  "Chhattisgarh",
  "Orissa",
  "Maharashtra",
  "Goa",
  "Karnataka",
  "Andhra Pradesh",
  "Tamil Nadu",
  "Kerala",
]);

// Decode the bundled TopoJSON to GeoJSON features.
type StateProps = { NAME_1: string };
const collection = feature(
  topo as never,
  (topo as unknown as { objects: Record<string, never> }).objects.india_state,
) as unknown as FeatureCollection<Geometry, StateProps>;
const allFeatures = collection.features;
const frameFC: FeatureCollection<Geometry, StateProps> = {
  type: "FeatureCollection",
  features: allFeatures.filter((f) => FRAME_STATES.has(f.properties.NAME_1)),
};

/* Build a Mercator projection that fits the FRAME states (central/west/south
   India) with a uniform inset. The viewBox aspect ratio is derived from the
   region so padding is consistent on all four sides, and every marker shares
   this projection so cities land exactly on the real geography. */
const FRAME_H = 500;
const INSET = 6; // uniform padding (viewBox units) on all four sides
const probe = geoMercator().fitExtent(
  [
    [0, 0],
    [1000, 1000],
  ],
  frameFC,
);
const pb = geoPath(probe).bounds(frameFC);
const aspect = (pb[1][0] - pb[0][0]) / (pb[1][1] - pb[0][1]);
const FRAME_W = Math.round(FRAME_H * aspect);
const projection = geoMercator().fitExtent(
  [
    [INSET, INSET],
    [FRAME_W - INSET, FRAME_H - INSET],
  ],
  frameFC,
);

export function CoverageMap() {
  return (
    <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[14px] bg-blued p-[5px]">
      <div className="absolute left-[18px] top-[14px] z-10 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white/55">
        {coverage.mapLabel}
      </div>

      <ComposableMap
        // react-simple-maps uses a function projection as-is (no config
        // override), so our pre-fit Mercator is used directly. The cast just
        // satisfies the prop type, which otherwise expects a factory.
        projection={projection as unknown as string}
        width={FRAME_W}
        height={FRAME_H}
        style={{ width: "100%", height: "auto" }}
        role="img"
        aria-label="Map of central and southern India showing Blueline service hubs"
      >
        {/* State outlines */}
        <Geographies geography={topo as unknown as Record<string, unknown>}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = (geo.properties as StateProps).NAME_1 ?? "";
              const served = SERVED_STATES.has(name);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={served ? "rgba(30,111,232,0.22)" : "rgba(255,255,255,0.05)"}
                  stroke="rgba(255,255,255,0.20)"
                  strokeWidth={0.5}
                  tabIndex={-1}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: served ? "rgba(30,111,232,0.30)" : "rgba(255,255,255,0.08)" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Freight corridors */}
        {coverage.corridors.map(([a, b]) => {
          const ha = hubByCity[a];
          const hb = hubByCity[b];
          if (!ha || !hb) return null;
          return (
            <Line
              key={`${a}-${b}`}
              from={[ha.lng, ha.lat]}
              to={[hb.lng, hb.lat]}
              stroke="var(--color-accent)"
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="2 7"
              style={{ animation: "bl-dash 1.2s linear infinite" }}
            />
          );
        })}

        {/* Tinted context metros */}
        {coverage.contextCities.map((c) => {
          const left = c.labelSide === "left";
          return (
            <Marker key={c.city} coordinates={[c.lng, c.lat]}>
              <circle r={3} fill="rgba(255,255,255,0.32)" />
              <text
                textAnchor={left ? "end" : "start"}
                x={left ? -6 : 6}
                y={3}
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 9.5, fill: "rgba(255,255,255,0.42)" }}
              >
                {c.city}
              </text>
            </Marker>
          );
        })}

        {/* Served hubs */}
        {hubs.map((hub) => {
          const left = hub.labelSide === "left";
          return (
            <Marker key={hub.city} coordinates={[hub.lng, hub.lat]} opacity={hub.comingSoon ? 0.92 : 1}>
              <circle r={hub.primary ? 6 : 5} fill="var(--color-accent)" stroke="#fff" strokeWidth={hub.primary ? 2 : 1.5} />
              <text
                textAnchor={left ? "end" : "start"}
                x={left ? -10 : 10}
                y={4}
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5, fill: "#fff" }}
              >
                {hub.city}
              </text>
            </Marker>
          );
        })}
      </ComposableMap>

      {/* Legend */}
      <div className="absolute bottom-[14px] left-[18px] z-10 flex flex-col gap-[6px] text-[11px] text-white/60">
        <span className="flex items-center gap-2">
          <span className="inline-block h-[9px] w-[9px] rounded-full border border-white bg-accent" />
          {coverage.mapLegend}
        </span>
      </div>
    </div>
  );
}
