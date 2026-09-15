import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Route handlers only; nothing crawlable lives under /api.
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://zentreks.ai/sitemap.xml",
    host: "https://zentreks.ai",
  };
}
