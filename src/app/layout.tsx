import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Preloader from "@/components/ui/Preloader";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const resortName = "SEASON7 THE NATURE RESORT";
const pageTitle = `${resortName} | Munnar, Kerala`;
const pageDescription =
  "Find your quiet escape at Season7 The Nature Resort in Chithirapuram, Munnar. Discover cottages with private balconies, dining, a swimming pool and spa.";
const socialImage = {
  url: "/images/season7-munnar-hero.webp",
  width: 1672,
  height: 941,
  alt: "A nature retreat overlooking misty green hills in Munnar",
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  metadataBase: new URL(site.url),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Season7 The Nature Resort",
    "Nature resort in Munnar",
    "Resort in Chithirapuram",
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
    "@type": "Resort",
    "@id": `${site.url}/#resort`,
    name: resortName,
    description: pageDescription,
    url: site.url,
    image: new URL(socialImage.url, site.url).toString(),
    hasMap: site.mapsLink,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Eatty City Road, Chithirapuram, PO, Anachal",
      addressLocality: "Munnar",
      addressRegion: "Kerala",
      postalCode: "685565",
      addressCountry: "IN",
    },
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
