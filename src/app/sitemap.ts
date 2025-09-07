import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { getAllProductSlugs } from "@/utils/productUtils";

function getRepoRoot(): string {
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

  // Complete route mapping following SEO master template recommendations
  const routeToFile: Record<
    string,
    {
      file: string;
      changeFreq: "daily" | "weekly" | "monthly" | "yearly";
      priority: number;
    }
  > = {
    // Core Business Pages - Highest Priority
    "/": {
      file: path.join(root, "src", "app", "page.tsx"),
      changeFreq: "daily",
      priority: 1.0,
    },
    "/products": {
      file: path.join(root, "src", "app", "products", "page.tsx"),
      changeFreq: "weekly",
      priority: 0.9,
    },

    // Trust & Authority Pages - High Priority
    "/about": {
      file: path.join(root, "src", "app", "about", "page.tsx"),
      changeFreq: "monthly",
      priority: 0.8,
    },
    "/business": {
      file: path.join(root, "src", "app", "business", "page.tsx"),
      changeFreq: "monthly",
      priority: 0.8,
    },
    "/contact": {
      file: path.join(root, "src", "app", "contact", "page.tsx"),
      changeFreq: "monthly",
      priority: 0.7,
    },

    // Legal Pages
    "/privacy": {
      file: path.join(root, "src", "app", "privacy", "page.tsx"),
      changeFreq: "yearly",
      priority: 0.3,
    },
    "/terms": {
      file: path.join(root, "src", "app", "terms", "page.tsx"),
      changeFreq: "yearly",
      priority: 0.3,
    },
    "/cookie-policy": {
      file: path.join(root, "src", "app", "layout.tsx"),
      changeFreq: "yearly",
      priority: 0.2,
    },
  };

  // Add individual product URLs dynamically
  const productSlugs = getAllProductSlugs();
  productSlugs.forEach((slug) => {
    routeToFile[`/products?product=${slug}`] = {
      file: path.join(root, "src", "app", "products", "page.tsx"),
      changeFreq: "weekly",
      priority: 0.6,
    };
  });

  // Generate sitemap entries with automatic file change detection
  const entries: MetadataRoute.Sitemap = Object.entries(routeToFile).map(
    ([route, config]) => ({
      url: `${baseUrl}${route}`,
      lastModified: getLastModifiedForFile(config.file),
      changeFrequency: config.changeFreq,
      priority: config.priority,
    })
  );

  return entries;
}
