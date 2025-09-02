import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

function getRepoRoot(): string {
  // Resolve repo root relative to this file
  // This file lives at src/app/sitemap.ts
  return path.resolve(process.cwd());
}

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

function getLastModifiedForFile(absoluteFilePath: string): string {
  try {
    // Try git last commit date for the file (format: YYYY-MM-DD)
    const output = execSync(`git log -1 --format=%cs -- ${absoluteFilePath}`, {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();

    if (output) return output;
  } catch {
    // ignore and fallback below
  }

  try {
    const stat = fs.statSync(absoluteFilePath);
    return formatDate(stat.mtime);
  } catch {
    // As a last resort return today's date
    return formatDate(new Date());
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://trayancorp.com";
  const root = getRepoRoot();

<<<<<<< Updated upstream
  // Map routes to their source files in the app directory
  const routeToFile: Record<string, string> = {
    "/": path.join(root, "src", "app", "page.tsx"),
    "/about": path.join(root, "src", "app", "about", "page.tsx"),
    "/products": path.join(root, "src", "app", "products", "page.tsx"),
    "/business": path.join(root, "src", "app", "business", "page.tsx"),
    "/contact": path.join(root, "src", "app", "contact", "page.tsx"),
  };

  const entries: MetadataRoute.Sitemap = Object.entries(routeToFile).map(
    ([route, filePath]) => ({
      url: `${baseUrl}${route}`,
      lastModified: getLastModifiedForFile(filePath),
      changeFrequency:
        route === "/" || route === "/products" ? "weekly" : "monthly",
      priority:
        route === "/"
          ? 1.0
          : route === "/products"
          ? 0.9
          : route === "/about" || route === "/business"
          ? 0.8
          : 0.7,
    })
  );

  return entries;
=======
  return [
    // Homepage - Highest priority
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    // Main service pages - High priority
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // About page - Important for trust signals
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Business page - Important for B2B SEO
    {
      url: `${baseUrl}/business`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Contact page - Important for local SEO
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Add specific product categories for better SEO
    {
      url: `${baseUrl}/products/industrial-chemicals`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/solvents`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/additives`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/raw-materials`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Location-based pages for local SEO
    {
      url: `${baseUrl}/chemical-suppliers-ahmedabad`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/chemical-trading-gujarat`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Industry-specific pages
    {
      url: `${baseUrl}/industries/pharmaceutical`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/industries/textile`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/industries/manufacturing`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Service pages
    {
      url: `${baseUrl}/services/chemical-trading`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/manufacturing`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services/quality-control`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // Additional SEO pages
    {
      url: `${baseUrl}/why-choose-trayan-corporation`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/global-chemical-supplier`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // Legal and policy pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/quality-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
>>>>>>> Stashed changes
}
