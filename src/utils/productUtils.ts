import { Product, products } from "@/constants/products";

// Generate URL-friendly slug from product name
export function generateProductSlug(productName: string): string {
  return productName
    .toLowerCase()
    .replace(/[^a-z0-9\s\-]/g, "") // Remove special chars except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim()
    .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens
}

// Find product by slug
export function findProductBySlug(slug: string): Product | null {
  return (
    products.find((product) => generateProductSlug(product.name) === slug) ||
    null
  );
}

// Get all product slugs (for sitemap generation)
export function getAllProductSlugs(): string[] {
  return products.map((product) => generateProductSlug(product.name));
}

// Generate product URL
export function getProductUrl(product: Product): string {
  return `/products/${generateProductSlug(product.name)}`;
}

// Generate full product URL
export function getFullProductUrl(product: Product): string {
  return `https://trayancorp.com/products/${generateProductSlug(product.name)}`;
}
