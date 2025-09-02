import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

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
  const routeToFile: Record<string, { file: string; changeFreq: "daily" | "weekly" | "monthly" | "yearly"; priority: number }> = {
    // Core Business Pages - Highest Priority
    "/": { 
      file: path.join(root, "src", "app", "page.tsx"), 
      changeFreq: "daily", 
      priority: 1.0 
    },
    "/products": { 
      file: path.join(root, "src", "app", "products", "page.tsx"), 
      changeFreq: "weekly", 
      priority: 0.9 
    },
    
    // Trust & Authority Pages - High Priority
    "/about": { 
      file: path.join(root, "src", "app", "about", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.8 
    },
    "/business": { 
      file: path.join(root, "src", "app", "business", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.8 
    },
    "/contact": { 
      file: path.join(root, "src", "app", "contact", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.7 
    },

    // Product Category Pages - SEO Focused
    "/products/industrial-chemicals": { 
      file: path.join(root, "src", "constants", "products.ts"), 
      changeFreq: "weekly", 
      priority: 0.8 
    },
    "/products/solvents": { 
      file: path.join(root, "src", "constants", "products.ts"), 
      changeFreq: "weekly", 
      priority: 0.8 
    },
    "/products/additives": { 
      file: path.join(root, "src", "constants", "products.ts"), 
      changeFreq: "weekly", 
      priority: 0.8 
    },
    "/products/raw-materials": { 
      file: path.join(root, "src", "constants", "products.ts"), 
      changeFreq: "weekly", 
      priority: 0.8 
    },
    "/products/specialty-chemicals": { 
      file: path.join(root, "src", "constants", "products.ts"), 
      changeFreq: "weekly", 
      priority: 0.8 
    },
    "/products/bulk-chemicals": { 
      file: path.join(root, "src", "constants", "products.ts"), 
      changeFreq: "weekly", 
      priority: 0.8 
    },

    // Location-Based SEO Pages - Local SEO Priority
    "/chemical-suppliers-ahmedabad": { 
      file: path.join(root, "src", "app", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.7 
    },
    "/chemical-trading-gujarat": { 
      file: path.join(root, "src", "app", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.7 
    },
    "/chemical-company-gota": { 
      file: path.join(root, "src", "app", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.7 
    },
    "/chemical-manufacturer-ahmedabad": { 
      file: path.join(root, "src", "app", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.7 
    },
    "/industrial-chemicals-gujarat": { 
      file: path.join(root, "src", "app", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.7 
    },

    // Industry-Specific Landing Pages
    "/industries/pharmaceutical": { 
      file: path.join(root, "src", "constants", "products.ts"), 
      changeFreq: "monthly", 
      priority: 0.6 
    },
    "/industries/textile": { 
      file: path.join(root, "src", "constants", "products.ts"), 
      changeFreq: "monthly", 
      priority: 0.6 
    },
    "/industries/paint-coatings": { 
      file: path.join(root, "src", "constants", "products.ts"), 
      changeFreq: "monthly", 
      priority: 0.6 
    },
    "/industries/plastics-polymers": { 
      file: path.join(root, "src", "constants", "products.ts"), 
      changeFreq: "monthly", 
      priority: 0.6 
    },
    "/industries/rubber": { 
      file: path.join(root, "src", "constants", "products.ts"), 
      changeFreq: "monthly", 
      priority: 0.6 
    },
    "/industries/food-processing": { 
      file: path.join(root, "src", "constants", "products.ts"), 
      changeFreq: "monthly", 
      priority: 0.6 
    },
    "/industries/agriculture": { 
      file: path.join(root, "src", "constants", "products.ts"), 
      changeFreq: "monthly", 
      priority: 0.6 
    },
    "/industries/construction": { 
      file: path.join(root, "src", "constants", "products.ts"), 
      changeFreq: "monthly", 
      priority: 0.6 
    },
    "/industries/automotive": { 
      file: path.join(root, "src", "constants", "products.ts"), 
      changeFreq: "monthly", 
      priority: 0.6 
    },
    "/industries/electronics": { 
      file: path.join(root, "src", "constants", "products.ts"), 
      changeFreq: "monthly", 
      priority: 0.6 
    },

    // Service Pages - B2B Focus
    "/services/chemical-trading": { 
      file: path.join(root, "src", "app", "business", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.6 
    },
    "/services/manufacturing": { 
      file: path.join(root, "src", "app", "business", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.6 
    },
    "/services/quality-control": { 
      file: path.join(root, "src", "app", "about", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.5 
    },
    "/services/technical-support": { 
      file: path.join(root, "src", "app", "about", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.5 
    },
    "/services/chemical-consultation": { 
      file: path.join(root, "src", "app", "contact", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.5 
    },
    "/services/supply-chain": { 
      file: path.join(root, "src", "app", "business", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.5 
    },
    "/services/chemical-procurement": { 
      file: path.join(root, "src", "app", "business", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.5 
    },

    // SEO-Focused Brand Pages
    "/why-choose-trayan-corporation": { 
      file: path.join(root, "src", "app", "about", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.5 
    },
    "/global-chemical-supplier": { 
      file: path.join(root, "src", "app", "business", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.5 
    },
    "/trusted-chemical-partner": { 
      file: path.join(root, "src", "app", "about", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.5 
    },
    "/chemical-solutions-india": { 
      file: path.join(root, "src", "app", "products", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.5 
    },
    "/experience-chemical-trading": { 
      file: path.join(root, "src", "app", "about", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.4 
    },

    // Location + Service Combination Pages
    "/chemical-trading-ahmedabad-gujarat": { 
      file: path.join(root, "src", "app", "contact", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.6 
    },
    "/industrial-chemical-supplier-ahmedabad": { 
      file: path.join(root, "src", "app", "products", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.6 
    },
    "/chemical-manufacturer-gujarat": { 
      file: path.join(root, "src", "app", "business", "page.tsx"), 
      changeFreq: "monthly", 
      priority: 0.6 
    },

    // Compliance & Quality Pages
    "/quality-policy": { 
      file: path.join(root, "src", "app", "about", "page.tsx"), 
      changeFreq: "yearly", 
      priority: 0.4 
    },
    "/iso-certification": { 
      file: path.join(root, "src", "app", "about", "page.tsx"), 
      changeFreq: "yearly", 
      priority: 0.4 
    },
    "/chemical-safety-standards": { 
      file: path.join(root, "src", "app", "about", "page.tsx"), 
      changeFreq: "yearly", 
      priority: 0.4 
    },

    // Legal Pages
    "/privacy-policy": { 
      file: path.join(root, "src", "app", "layout.tsx"), 
      changeFreq: "yearly", 
      priority: 0.3 
    },
    "/terms-of-service": { 
      file: path.join(root, "src", "app", "layout.tsx"), 
      changeFreq: "yearly", 
      priority: 0.3 
    },
    "/cookie-policy": { 
      file: path.join(root, "src", "app", "layout.tsx"), 
      changeFreq: "yearly", 
      priority: 0.2 
    },
  };

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
