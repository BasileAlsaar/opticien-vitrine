import type { MetadataRoute } from "next";

const BASE = "https://opticien-vitrine.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, priority: 1 },
    { url: `${BASE}/collections`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/maison`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/services`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, priority: 0.9 },
  ];
}
