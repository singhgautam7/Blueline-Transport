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
 *     them as plain numbers, e.g. 400.
 *   • `whatsapp` must be digits only with the country code and no “+”, spaces
 *     or dashes (e.g. India +91 98670 76389  ->  "91 98670 76389"). It is used
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
    legalName: "Blueline Transport",
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
      "A 400-strong fleet moving full and part loads across 20+ cities for India's leading e-commerce and logistics partners. GPS-tracked, insured, and run by a team that picks up the phone.",
    quoteCta: "Get a Quote on WhatsApp",
    // Pre-filled message used for the hero "Get a Quote" WhatsApp link.
    quoteMessage: "Hi Blueline, I'd like a freight quote",
    trustChips: [
      "GPS-tracked fleet",
      "98.2% on-time delivery",
      "Trusted by India's leading e-commerce brands",
    ],
    imageCaption: "Photo placeholder",
    statBadgeValue: "98.2%",
    statBadgeLabel: "On-time delivery record",
  },

  // The four count-up counters on the dark stats bar.
  // `value` is the number it counts up to; `suffix` is appended after it.
  stats: [
    { value: 7, suffix: "", label: "Years on the road" },
    { value: 400, suffix: "+", label: "Vehicles in network" },
    { value: 20, suffix: "+", label: "Cities reached" },
    { value: 4, suffix: " Lakh+", label: "Tonnes delivered" },
  ],

  services: {
    eyebrow: "What we move",
    heading: "Freight services built for supply chains that can't slip.",
    intro:
      "From bulk line-haul to same-day quick-commerce runs — one operator, one team, one point of contact per account.",
    // `icon` maps to a lucide icon (see ServicesSection.tsx). Allowed values:
    // "truck" | "boxes" | "route" | "warehouse" | "shield" | "clock" | "zap" |
    // "utensils".
    items: [
      {
        icon: "truck",
        title: "Full Truckload (FTL)",
        description:
          "Dedicated Eicher trucks (14ft to 32ft XL) for bulk consignments. Point to point, no transhipment, fixed transit windows.",
      },
      {
        icon: "zap",
        title: "Quick-Commerce & E-com Fulfilment",
        description:
          "High-frequency Tata Ace and Bolero pickup runs built for quick-commerce and marketplace partners.",
      },
      {
        icon: "boxes",
        title: "Part Load / Mini-LCV Delivery",
        description:
          "Pay only for the space you use. Tata Ace 7ft/8ft and Bolero pickups for smaller, frequent city dispatches.",
      },
      {
        icon: "route",
        title: "Intercity Line-Haul",
        description:
          "Scheduled corridor runs on our 17ft to 32ft XL Eicher trucks, for faster, predictable long-distance transit.",
      },
      {
        icon: "utensils",
        title: "Food, FMCG & Perishables",
        description:
          "FSSAI-registered handling for prepared foods, ready-to-eat and fresh produce categories.",
      },
      {
        icon: "shield",
        title: "Insured & Tracked",
        description:
          "Every consignment covered and visible, with GPS tracking, e-POD and a single point of contact per account.",
      },
    ],
  },

  fleet: {
    eyebrow: "The fleet",
    heading: "The right vehicle for every load.",
    intro:
      "From compact 7-foot Tata Ace pickups to 32-foot Eicher XL trucks. 400+ vehicles in our network, all GPS-tracked.",
    milestone: "4 Lakh+ tonnes delivered in the past year",
    // `shape` selects the truck illustration (see FleetSection.tsx). Allowed:
    // "ace" | "bolero" | "eicher" | "eicher-xl".
    items: [
      { shape: "ace", type: "Tata Ace 7ft", model: "Mini / LCV", payload: "≈ 0.75 T", count: "70+" },
      { shape: "ace", type: "Tata Ace 8ft", model: "Mini / LCV", payload: "≈ 1.0 T", count: "60+" },
      { shape: "bolero", type: "Bolero Pickup 1.2T", model: "Pickup", payload: "1.2 T", count: "40+" },
      { shape: "bolero", type: "Bolero Pickup 1.3T", model: "Pickup", payload: "1.3 T", count: "35+" },
      { shape: "bolero", type: "Bolero Pickup 1.7T", model: "Pickup", payload: "1.7 T", count: "30+" },
      { shape: "bolero", type: "Bolero Pickup 2.0T", model: "Pickup", payload: "2.0 T", count: "25+" },
      { shape: "eicher", type: "Eicher 14ft", model: "Truck", payload: "≈ 4 T", count: "30+" },
      { shape: "eicher", type: "Eicher 17ft", model: "Truck", payload: "≈ 5–6 T", count: "25+" },
      { shape: "eicher", type: "Eicher 20ft", model: "Truck", payload: "≈ 7–8 T", count: "20+" },
      { shape: "eicher", type: "Eicher 22ft", model: "Truck", payload: "≈ 9 T", count: "20+" },
      { shape: "eicher", type: "Eicher 24ft", model: "Truck", payload: "≈ 10 T", count: "20+" },
      { shape: "eicher-xl", type: "Eicher 32ft XL", model: "Long-haul truck", payload: "≈ 12–14 T", count: "25+" },
    ],
  },

  coverage: {
    eyebrow: "Coverage",
    heading: "Headquartered in Mumbai, delivering across India.",
    intro:
      "20+ cities served nationwide from our Goregaon operations base, with dedicated hubs across the western, central, northern and southern corridors.",
    mapLabel: "Service network",
    mapLegend: "Active service cities",
    // Hubs shown in the list and as nodes on the map. `lat`/`lng` are real
    // coordinates, projected onto the India map. `hq` marks the head office;
    // `comingSoon` styles a hub as an upcoming location. `labelSide` nudges the
    // map label left/right so it doesn't overlap the silhouette.
    hubs: [
      { city: "Mumbai", note: "Goregaon East · Registered office", hq: true, primary: true, lat: 19.14, lng: 72.87, labelSide: "left" },
      { city: "Ahmedabad", note: "Gujarat distribution point", lat: 23.03, lng: 72.57, labelSide: "left" },
      { city: "Pune", note: "Chakan & Talegaon industrial belt", lat: 18.52, lng: 73.86, labelSide: "right" },
      { city: "Nagpur", note: "Central India hub", lat: 21.15, lng: 79.09, labelSide: "right" },
      { city: "Gurgaon", note: "NCR delivery base", lat: 28.46, lng: 77.03, labelSide: "left" },
      { city: "Bengaluru", note: "Next hub, our South India gateway", comingSoon: "Coming 2026", lat: 12.97, lng: 77.59, labelSide: "left" },
    ],
    // Decorative non-served metros, tinted on the map for geographic context.
    contextCities: [
      { city: "Jaipur", lat: 26.91, lng: 75.79, labelSide: "left" },
      { city: "Rajkot", lat: 22.30, lng: 70.79, labelSide: "left" },
      { city: "Indore", lat: 22.72, lng: 75.86, labelSide: "left" },
      { city: "Hyderabad", lat: 17.39, lng: 78.49, labelSide: "right" },
      { city: "Kolkata", lat: 22.57, lng: 88.36, labelSide: "left" },
      { city: "Chennai", lat: 13.08, lng: 80.27, labelSide: "right" },
      { city: "Goa", lat: 15.49, lng: 73.83, labelSide: "left" },
    ],
    // Freight corridors drawn between hubs (by city name).
    corridors: [] as ReadonlyArray<readonly [string, string]>,
  },

  clients: {
    eyebrow: "Trusted by",
    heading: "Leading e-commerce & logistics brands",
    // Real client names supplied by the client, with confirmed permission.
    // Replace text tiles with logo image paths in public/images/clients/
    // once official logo files are received (PNG or SVG, transparent bg).
    logos: ["Flipkart", "Blinkit", "Ninjacart", "Udaan", "Mahindra Logistics", "Zomato"],
    testimonials: [] as ReadonlyArray<{
      quote: string;
      initials: string;
      author: string;
      role: string;
    }>,
  },

  about: {
    eyebrow: "About Blueline",
    heading: "Founded in 2019 with a promise: deliver on time.",
    paragraphs: [
      "Blueline Transport was founded in Mumbai in 2019 to take the guesswork out of road freight for India's e-commerce, quick-commerce and FMCG operators. What began as a handful of pickups running city dispatches has grown into a 400-strong network of Tata Ace, Bolero and Eicher vehicles moving loads for partners like Flipkart, Blinkit, Ninjacart, Udaan, Mahindra Logistics and Zomato.",
      "We stayed deliberately hands-on: GPS on every vehicle, a named coordinator on every account, and a control room that you can reach on a phone call, not a ticket queue. That's what dependable logistics looks like.",
    ],
    facts: [
      { value: "2019", label: "Founded in Mumbai" },
      { value: "3", label: "Operating hubs" },
      { value: "24/7", label: "Control room" },
      { value: "98.2%", label: "On-time record" },
    ],
  },

  contact: {
    eyebrow: "Get in touch",
    heading: "Tell us the load. We'll quote it on the call.",
    phone: { display: "+91 98670 76389", tel: "+919867076389" },
    whatsapp: "919867076389", // digits only, builds the wa.me link
    email: "bluelinetransport8@gmail.com",
    address: "RNO 843, Adarsha Nagar, Aarey Colony, Goregaon East, Mumbai 400065",
    locality: "Mumbai",
    region: "Maharashtra",
    postalCode: "400065",
    hours: "Mon-Sat 9:00-20:00 · Control room 24/7",
    mapsQuery: "Adarsha Nagar, Aarey Colony, Goregaon East, Mumbai 400065", // used for the embedded map
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
    mapCaption: "Map · Goregaon East, Mumbai",
  },

  footer: {
    blurb:
      "Dependable road freight for India's e-commerce, quick-commerce and FMCG partners. On time, every time, since 2019.",
    companyLinks: [
      { label: "Services", href: "#services" },
      { label: "Fleet", href: "#fleet" },
      { label: "Coverage", href: "#coverage" },
      { label: "About", href: "#about" },
    ],
    serviceLinks: [
      "Full Truckload",
      "Quick-Commerce",
      "Part Load / LCV",
      "Food & FMCG",
    ],
    gstin: "GSTIN 27CBZPM5601D1ZF · FSSAI registered · Fully insured carrier",
  },

  // Used for SEO <title>/<meta> and the LocalBusiness structured data.
  seo: {
    title: "Blueline Transport | Road Freight & Quick-Commerce Delivery Across India",
    description:
      "400+ vehicles moving full and part loads across 20+ cities for India's leading e-commerce, quick-commerce and FMCG partners. GPS-tracked, insured freight with a 98.2% on-time record.",
    siteUrl: "https://www.bluelinetransport.in",
    ogImage: "/images/og-cover.svg",
    priceRange: "₹₹",
    areaServed: ["Mumbai", "Maharashtra", "India"],
  },
} as const;

export type SiteContent = typeof siteContent;
