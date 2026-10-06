import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${site.url}/images/season7-munnar-hero.webp`,
        `${site.url}/images/forest/intro.webp`,
        `${site.url}/images/forest/cottage.webp`,
        `${site.url}/images/forest/dining.webp`,
        `${site.url}/images/forest/pool.webp`,
        `${site.url}/images/forest/spa.webp`,
        `${site.url}/images/forest/munnar.webp`,
        `${site.url}/images/forest/campfire.webp`,
      ],
    },
  ];
}
