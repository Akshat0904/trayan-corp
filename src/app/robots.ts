import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/.git/",
          "/private/",
          "/_app/",
          "/temp/",
          "/cache/",
        ],
        crawlDelay: 1,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/.git/"],
        crawlDelay: 0,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/.git/"],
        crawlDelay: 1,
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // Allow important file types for better SEO
      {
        userAgent: "*",
        allow: [
          "/*.css$",
          "/*.js$",
          "/*.jpg$",
          "/*.jpeg$",
          "/*.png$",
          "/*.gif$",
          "/*.webp$",
          "/*.svg$",
          "/*.json$",
          "/*.xml$",
          "/*.pdf$",
        ],
      },
    ],
    sitemap: [
      "https://trayancorp.com/sitemap.xml",
      "https://trayancorp.com/sitemap-products.xml",
    ],
    host: "https://trayancorp.com",
  };
}
