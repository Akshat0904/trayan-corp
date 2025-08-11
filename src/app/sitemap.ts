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
}
