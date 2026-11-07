import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl;
  const routes: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/certifications`, changeFrequency: "monthly", priority: 0.9 },
    ...projects
      .filter((p) => !p.draft)
      .map((p) => ({
        url: `${base}/projects/${p.slug}`,
        changeFrequency: "yearly" as const,
        priority: 0.8,
      })),
  ];
  return routes;
}
