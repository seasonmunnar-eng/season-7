import { NavLink } from "@/types";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");

export const site = {
  name: "SEASON7",
  legalName: "Season7 Natural Resort Munnar (Amrutha Resort)",
  shortName: "Season7 Natural Resort",
  tagline: "A quiet stay among Munnar's green hills",
  description:
    "Season7 The Nature Resort is a nature stay in Chithirapuram, Munnar, Kerala, with comfortable A/C and non A/C cottages, private balconies, dining, a swimming pool, spa and experiences in the hills.",
  url: configuredSiteUrl || "https://www.season7resort.com",
  address: "Eatty City Road, Chithirapuram, PO, Anachal, Munnar, Kerala 685565, India",
  telephone: "+918891747244",
  bookingUrl: "https://wa.me/918891747244",
  mapsLink:
    "https://share.google/q5DIH6NS6ARocP5l5",
  mapsEmbed: "https://maps.google.com/maps?q=Season7+The+Nature+Resort+Chithirapuram+Munnar&z=15&output=embed",
  sameAs: [
    "https://www.facebook.com/share/14riSrmegjZ/?mibextid=wwXIfr",
    "https://www.instagram.com/season7_the_nature_resort?stkn=NnVrcmt2cXYydTIy",
  ],
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];
