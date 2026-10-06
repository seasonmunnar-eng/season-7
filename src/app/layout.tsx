import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Preloader from "@/components/ui/Preloader";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const resortName = "Season7 The Nature Resort";
const pageTitle = `${resortName} | Munnar, Kerala`;
const pageDescription = site.description;
const socialImage = {
  url: "/images/season7-munnar-hero.webp",
  width: 1672,
  height: 941,
  alt: "A nature retreat overlooking misty green hills in Munnar",
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  applicationName: resortName,
  category: "travel",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL(site.url),
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
  },
  keywords: [
    "Season7 The Nature Resort",
    "Nature resort in Munnar",
    "Resort in Chithirapuram",
    "Chithirapuram resort",
    "Resort near Anachal",
    "Cottage stay in Munnar",
    "Munnar resort with pool",
    "Munnar Kerala resort",
    "Nature stay in Munnar",
  ],
  authors: [{ name: resortName }],
  creator: resortName,
  publisher: resortName,
  icons: {
    icon: "/icon.webp",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: site.url,
    siteName: resortName,
    locale: "en_IN",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Munnar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LodgingBusiness", "Resort"],
        "@id": `${site.url}/#resort`,
        name: resortName,
        legalName: site.legalName,
        description: pageDescription,
        url: site.url,
        image: [
          new URL(socialImage.url, site.url).toString(),
          new URL("/images/season7-forest-logo.webp", site.url).toString(),
        ],
        logo: new URL("/images/season7-forest-logo.webp", site.url).toString(),
        telephone: site.telephone,
        sameAs: site.sameAs,
        hasMap: site.mapsLink,
        areaServed: ["Munnar", "Kerala", "India"],
        knowsAbout: [
          "Munnar nature stays",
          "Kerala highlands travel",
          "Chithirapuram accommodation",
        ],
        amenityFeature: [
          "Private balconies",
          "Complimentary breakfast",
          "Multi-cuisine restaurant",
          "Cool Bar",
          "Swimming pool",
          "Spa and wellness",
          "Kids play area",
          "Campfire nights",
          "Bicycle rides",
        ].map((name) => ({
          "@type": "LocationFeatureSpecification",
          name,
          value: true,
        })),
        address: {
          "@type": "PostalAddress",
          streetAddress: "Eatty City Road, Chithirapuram, PO, Anachal",
          addressLocality: "Munnar",
          addressRegion: "Kerala",
          postalCode: "685565",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.telephone,
          contactType: "reservations",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: resortName,
        url: site.url,
        description: pageDescription,
        inLanguage: "en-IN",
        publisher: { "@id": `${site.url}/#resort` },
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <Preloader />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
