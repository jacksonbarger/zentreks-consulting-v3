import type { MetadataRoute } from "next";

const SITE = "https://zentreks.ai";

// Static routes, grouped by how much they matter for discovery.
const PRIMARY = ["", "/services", "/industries", "/case-studies", "/insights", "/contact"];
const SECONDARY = [
  "/about",
  "/ai-readiness",
  "/events",
  "/careers",
  "/services/ai-integration",
  "/services/strategy",
  "/services/workflow",
  "/services/digital",
  "/industries/technology",
  "/industries/healthcare",
  "/industries/financial",
  "/industries/manufacturing",
];
const LEGAL = ["/privacy", "/terms", "/accessibility"];

// Kept in sync by hand with the ARTICLES / CASE_STUDIES records in the
// [slug] routes. If those move to a shared data module, import from there.
const INSIGHT_SLUGS = [
  "ai-dividend-age",
  "ai-strategy-2026",
  "future-of-work",
  "economic-outlook-2026",
  "ai-healthcare",
  "ai-risk-management",
  "industry-4-lessons",
];
const CASE_STUDY_SLUGS = [
  "retail-saas-platform",
  "commercial-equipment",
  "utility-brokerage",
  "civic-engagement",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...PRIMARY.map((path) => ({
      url: `${SITE}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...SECONDARY.map((path) => ({
      url: `${SITE}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...INSIGHT_SLUGS.map((slug) => ({
      url: `${SITE}/insights/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...CASE_STUDY_SLUGS.map((slug) => ({
      url: `${SITE}/case-studies/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...LEGAL.map((path) => ({
      url: `${SITE}${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
