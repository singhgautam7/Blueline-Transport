import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/data/siteContent";

// Display face for headings/logo; body face for everything else.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const { seo, company } = siteContent;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: seo.title,
  description: seo.description,
  keywords: [
    "road logistics India",
    "full truckload FTL",
    "part load LTL",
    "freight transport Mumbai Pune Ahmedabad",
    "GPS tracked trucking",
    company.name,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: company.name,
    title: seo.title,
    description: seo.description,
    url: seo.siteUrl,
    locale: "en_IN",
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: company.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
};

// LocalBusiness structured data — populated entirely from siteContent.
function LocalBusinessJsonLd() {
  const { contact } = siteContent;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: company.name,
    legalName: company.legalName,
    description: seo.description,
    url: seo.siteUrl,
    foundingDate: String(company.establishedYear),
    telephone: contact.phone.tel,
    email: contact.email,
    priceRange: seo.priceRange,
    image: `${seo.siteUrl}${seo.ogImage}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address,
      addressLocality: contact.locality,
      addressRegion: contact.region,
      postalCode: contact.postalCode,
      addressCountry: "IN",
    },
    areaServed: seo.areaServed.map((name) => ({ "@type": "Place", name })),
    openingHours: "Mo-Sa 09:00-20:00",
    sameAs: [`https://wa.me/${contact.whatsapp}`],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${hanken.variable}`}>
      <body>
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}
