import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://mahmoud-elsebaey-portfolio.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
          "/private/",
          "/login/",
          "/register/",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
