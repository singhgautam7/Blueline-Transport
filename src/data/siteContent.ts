/* =============================================================================
 * Blueline Transport — single editable content file
 * -----------------------------------------------------------------------------
 * EVERY visible word, number, phone, email and address on the website comes
 * from this one file. To update the site you only need to edit values here —
 * you do not need to touch any other file.
 *
 * HOW TO EDIT SAFELY
 *   • Change only the text inside the "quotes". e.g. "Mumbai" -> "Chennai".
 *   • Keep the quotes, the commas and the curly braces exactly where they are.
 *   • Numbers (like establishedYear or a stat `value`) have NO quotes — leave
 *     them as plain numbers, e.g. 450.
 *   • `whatsapp` must be digits only with the country code and no “+”, spaces
 *     or dashes (e.g. India +91 98765 43210  ->  "919876543210"). It is used
 *     to build the WhatsApp click-to-chat link.
 *   • `phone.display` is what people SEE; `phone.tel` is what the phone DIALS
 *     (digits + leading “+”, no spaces).
 *   • Do not rename the keys (the words before each ":"). Renaming a key will
 *     break the site. If unsure, change one thing, save, and check the page.
 *
 * After editing, run `bun run dev` to preview, or `bun run build` to publish.
 * ========================================================================== */

export const siteContent = {
  company: {
    name: "Blueline Transport",
    legalName: "Blueline Transport Pvt. Ltd.",
    logoLine1: "BLUELINE",
    logoLine2: "TRANSPORT",
    tagline: "Moving India's freight, on time, every time.",
    establishedYear: 2019,
  },

  // Top navigation links (anchor to the matching section ids on the page).
  nav: [
    { label: "Services", href: "#services" },
    { label: "Fleet", href: "#fleet" },
    { label: "Coverage", href: "#coverage" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Road Logistics · Since 2019",
    // The headline is split so the middle phrase can be shown in the accent
    // colour, exactly like the design.
    titlePre: "Moving India's freight, ",
    titleAccent: "on time",
    titlePost: ", every time.",
    subline:
      "Full-truckload and part-load road transport across Mumbai, Pune and Ahmedabad. GPS-tracked, insured, and run by a team that picks up the phone.",
    quoteCta: "Get a Quote on WhatsApp",
    // Pre-filled message used for the hero "Get a Quote" WhatsApp link.
    quoteMessage: "Hi Blueline, I'd like a freight quote",
    trustChips: ["GPS-tracked fleet", "All shipments insured", "Pan-India network"],
    imageCaption: "Photo placeholder · NH-48",
    statBadgeValue: "99.2%",
    statBadgeLabel: "On-time delivery record",
  },

  // The four count-up counters on the dark stats bar.
  // `value` is the number it counts up to; `suffix` is appended after it.
  stats: [
    { value: 7, suffix: "", label: "Years on the road" },
    { value: 450, suffix: "+", label: "Trucks in fleet" },
    { value: 80, suffix: "+", label: "Cities reached" },
    { value: 240, suffix: "K+", label: "Shipments delivered" },
  ],

  services: {
    eyebrow: "What we move",
    heading: "Freight services built for supply chains that can't slip.",
    intro:
      "One operator for line-haul, distribution and storage, so you brief one team and track one shipment, end to end.",
    // `icon` maps to a lucide icon (see ServicesSection.tsx). Allowed values:
    // "truck" | "boxes" | "route" | "warehouse" | "shield" | "clock".
    items: [
      {
        icon: "truck",
        title: "Full Truckload (FTL)",
        description:
          "Dedicated vehicles for bulk consignments. Point to point, no transhipment, fixed transit windows.",
      },
      {
        icon: "boxes",
        title: "Part Load (LTL)",
        description:
          "Pay only for the space you use, with shared trucking and safe handling for smaller, frequent dispatches.",
      },
      {
        icon: "route",
        title: "Intercity Line-Haul",
        description:
          "Scheduled corridor runs between our hubs with relay drivers for faster, predictable long-distance transit.",
      },
      {
        icon: "warehouse",
        title: "Warehousing",
        description:
          "Short and long-term storage at hub locations with inventory handling, staging and last-mile dispatch.",
      },
      {
        icon: "shield",
        title: "Insured & Tracked",
        description:
          "Every consignment covered and visible, with live GPS, e-POD and a single point of contact per account.",
      },
      {
        icon: "clock",
        title: "Time-Bound Express",
        description:
          "Priority lanes for production-critical and FMCG replenishment loads with committed delivery SLAs.",
      },
    ],
  },

  fleet: {
    eyebrow: "The fleet",
    heading: "The right vehicle for every load.",
    intro:
      "From 1-tonne city runs to 18-tonne trailers. Owned and attached vehicles, all GPS-fitted.",
    // `shape` selects the truck illustration (see FleetSection.tsx). Allowed:
    // "lcv" | "container" | "trailer" | "flatbed".
    items: [
      { shape: "lcv", type: "Mini / LCV", model: "Tata Ace · 407 class", payload: "up to 1.5T", count: "160+" },
      { shape: "container", type: "Container", model: "19ft & 22ft closed body", payload: "up to 9T", count: "190+" },
      { shape: "trailer", type: "Trailer", model: "32ft multi-axle", payload: "up to 18T", count: "70+" },
      { shape: "flatbed", type: "Open / Flatbed", model: "Tarpaulin & project cargo", payload: "up to 15T", count: "30+" },
    ],
  },

  coverage: {
    eyebrow: "Coverage",
    heading: "Hubs in the west, reach across the map.",
    intro:
      "Operational from Mumbai, Pune and Ahmedabad, with daily corridor runs, and Bangalore opening next.",
    mapLabel: "Route network",
    mapLegend: "Active freight corridors",
    // Hubs shown in the list and as nodes on the map. `lat`/`lng` are real
    // coordinates, projected onto the India map. `hq` marks the head office;
    // `comingSoon` styles a hub as an upcoming location. `labelSide` nudges the
    // map label left/right so it doesn't overlap the silhouette.
    hubs: [
      { city: "Mumbai", note: "Bhiwandi hub · Maharashtra", hq: true, primary: true, lat: 19.08, lng: 72.88, labelSide: "left" },
      { city: "Pune", note: "Chakan industrial belt", lat: 18.52, lng: 73.86, labelSide: "right" },
      { city: "Ahmedabad", note: "Gujarat distribution centre", lat: 23.03, lng: 72.57, labelSide: "right" },
      { city: "Bengaluru", note: "Next hub, our South India gateway", comingSoon: "Coming 2026", lat: 12.97, lng: 77.59, labelSide: "left" },
    ],
    // Decorative non-served metros (central & south India), tinted on the map
    // for geographic context.
    contextCities: [
      { city: "Nagpur", lat: 21.15, lng: 79.09, labelSide: "right" },
      { city: "Hyderabad", lat: 17.39, lng: 78.49, labelSide: "right" },
      { city: "Goa", lat: 15.49, lng: 73.83, labelSide: "left" },
      { city: "Chennai", lat: 13.08, lng: 80.27, labelSide: "right" },
      { city: "Kochi", lat: 9.93, lng: 76.27, labelSide: "left" },
    ],
    // Freight corridors drawn between hubs (by city name).
    corridors: [
      ["Mumbai", "Pune"],
      ["Mumbai", "Ahmedabad"],
      ["Mumbai", "Bengaluru"],
      ["Pune", "Bengaluru"],
    ],
  },

  clients: {
    eyebrow: "Trusted by",
    heading: "Leading FMCG & manufacturing brands",
    // Text placeholders for client logos. Replace with real names/logos ONLY
    // once you have written permission to display each brand.
    logos: ["NORTHPEAK", "VEDA FOODS", "ACME STEEL", "PRIMECHEM", "SUNRISE FMCG"],
    testimonials: [
      {
        quote:
          "Blueline runs our Maharashtra to Gujarat lane with delivery reliability we can actually plan production around. When something moves, someone answers the phone.",
        initials: "RM",
        author: "Rohan Mehta",
        role: "Head of Supply Chain · Veda Foods",
      },
      {
        quote:
          "We shifted our inbound steel coils to Blueline trailers two years ago. Transit times tightened and the GPS visibility ended the daily where-is-my-truck calls.",
        initials: "SP",
        author: "Sneha Patil",
        role: "Procurement Lead · Acme Steel",
      },
    ],
  },

  about: {
    eyebrow: "About Blueline",
    heading: "Started in 2019 with four trucks and one promise: deliver on time.",
    paragraphs: [
      "Blueline Transport was founded in Bhiwandi to take the guesswork out of road freight for manufacturers and FMCG distributors. What began as a handful of vehicles on the Mumbai to Pune lane has grown into a network of owned and attached trucks running the western corridor every day.",
      "We stayed deliberately hands-on: GPS on every vehicle, a named coordinator on every account, and a control room that you can reach on a phone call, not a ticket queue. That's what dependable logistics looks like.",
    ],
    facts: [
      { value: "2019", label: "Founded in Bhiwandi" },
      { value: "3", label: "Operating hubs" },
      { value: "24/7", label: "Control room" },
      { value: "99.2%", label: "On-time record" },
    ],
  },

  contact: {
    eyebrow: "Get in touch",
    heading: "Tell us the load. We'll quote it on the call.",
    phone: { display: "+91 98765 43210", tel: "+919876543210" },
    whatsapp: "919876543210", // digits only, builds the wa.me link
    email: "ops@bluelinetransport.in",
    address: "Sai Logistics Park, Bhiwandi, MH 421302",
    hours: "Mon-Sat 9:00-20:00 · Control room 24/7",
    mapsQuery: "Sai Logistics Park, Bhiwandi, Maharashtra", // used for the embedded map
    form: {
      title: "Request a quote",
      namePlaceholder: "Your name",
      companyPlaceholder: "Company",
      phonePlaceholder: "Phone number",
      detailsPlaceholder: "Route & load details (e.g. Mumbai → Ahmedabad, 8T)",
      submitLabel: "Send via WhatsApp",
      // {phone} is replaced with a clickable phone link in the UI.
      footnote: "Prefer to talk? Call {phone} and we answer fast.",
      // Pre-filled WhatsApp message template for the quote form.
      // {name}/{company}/{phone}/{details} are filled from the form fields.
      whatsappTemplate:
        "Hi Blueline, I'd like a freight quote.\nName: {name}\nCompany: {company}\nPhone: {phone}\nRoute & load: {details}",
    },
    mapCaption: "Map · Bhiwandi",
  },

  footer: {
    blurb:
      "Dependable road freight for India's manufacturers and FMCG brands. On time, every time, since 2019.",
    companyLinks: [
      { label: "Services", href: "#services" },
      { label: "Fleet", href: "#fleet" },
      { label: "Coverage", href: "#coverage" },
      { label: "About", href: "#about" },
    ],
    serviceLinks: ["Full Truckload", "Part Load", "Warehousing", "Express Lanes"],
    gstin: "GSTIN 27ABCDE1234F1Z5 · Fully insured carrier",
  },

  // Used for SEO <title>/<meta> and the LocalBusiness structured data.
  seo: {
    title: "Blueline Transport | Road Logistics & Freight Across Western India",
    description:
      "Full-truckload (FTL) and part-load (LTL) road transport across Mumbai, Pune and Ahmedabad. GPS-tracked, insured freight with a 99.2% on-time record. Get a quote on WhatsApp.",
    siteUrl: "https://www.bluelinetransport.in",
    ogImage: "/images/og-cover.svg",
    priceRange: "₹₹",
    areaServed: ["Mumbai", "Pune", "Ahmedabad", "Bengaluru", "Maharashtra", "Gujarat"],
  },
} as const;

export type SiteContent = typeof siteContent;
