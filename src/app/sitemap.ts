import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://johannesobermair.com",
      lastModified: new Date(),
    },
  ];
}
