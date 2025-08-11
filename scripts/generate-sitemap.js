/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const baseUrl = "https://trayancorp.com";

function formatDate(date) {
  return new Date(date).toISOString().split("T")[0];
}

function getLastModifiedForFile(absoluteFilePath) {
  try {
    const output = execSync(`git log -1 --format=%cs -- ${absoluteFilePath}`, {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    if (output) return output;
  } catch {
    // ignore
  }

  try {
    const stat = fs.statSync(absoluteFilePath);
    return formatDate(stat.mtime);
  } catch {
    return formatDate(Date.now());
  }
}

function writeSitemap(entries) {
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(
      (e) =>
        `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
    ),
    "</urlset>",
  ].join("\n");

  const outPath = path.join(process.cwd(), "public", "sitemap.xml");
  fs.writeFileSync(outPath, xml + "\n", "utf8");
  console.log(`Wrote sitemap with ${entries.length} URLs to ${outPath}`);
}

function main() {
  const root = process.cwd();
  const routeToFile = {
    "/": path.join(root, "src", "app", "page.tsx"),
    "/about": path.join(root, "src", "app", "about", "page.tsx"),
    "/products": path.join(root, "src", "app", "products", "page.tsx"),
    "/business": path.join(root, "src", "app", "business", "page.tsx"),
    "/contact": path.join(root, "src", "app", "contact", "page.tsx"),
  };

  const entries = Object.entries(routeToFile).map(([route, filePath]) => {
    const lastmod = getLastModifiedForFile(filePath);
    const changefreq =
      route === "/" || route === "/products" ? "weekly" : "monthly";
    const priority =
      route === "/"
        ? "1.0"
        : route === "/products"
        ? "0.9"
        : route === "/about" || route === "/business"
        ? "0.8"
        : "0.7";

    return {
      loc: `${baseUrl}${route}`,
      lastmod,
      changefreq,
      priority,
    };
  });

  writeSitemap(entries);
}

main();
