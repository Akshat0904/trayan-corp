"use client";

import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import ProductShowcase from "@/components/ProductShowcase";
import SEO from "@/components/SEO";
import { products, Product } from "@/constants/products";
import { findProductBySlug, generateProductSlug } from "@/utils/productUtils";

const ProductsContent = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Handle URL-based product selection
  useEffect(() => {
    const productSlug = searchParams.get("product");
    if (productSlug) {
      const product = findProductBySlug(productSlug);
      if (product) {
        setSelectedProduct(product);
      } else {
        // Invalid product slug, remove from URL
        router.replace("/products", { scroll: false });
      }
    } else {
      setSelectedProduct(null);
    }
  }, [searchParams, router]);

  // Handle product selection (opens modal and updates URL)
  const handleProductSelect = (product: Product) => {
    const slug = generateProductSlug(product.name);
    router.push(`/products?product=${slug}`, { scroll: false });
  };

  // Handle modal close (removes product from URL)
  const handleModalClose = () => {
    router.push("/products", { scroll: false });
  };

  // Generate keywords from product names and categories
  const productKeywords = products
    .map(
      (product) =>
        `${product.name.toLowerCase()}, ${product.category.toLowerCase()}`
    )
    .join(", ");

  // Dynamic SEO based on selected product
  const pageTitle = selectedProduct
    ? `${selectedProduct.name} - Chemical Products | Trayan Corporation`
    : "Chemical Products - Industrial Chemicals & Solvents | Trayan Corporation";

  const pageDescription = selectedProduct
    ? `${selectedProduct.description} Available from Trayan Corporation, your trusted chemical supplier in Ahmedabad, Gujarat, India.`
    : "Explore Trayan Corporation's comprehensive range of high-quality chemical products for every industry. From industrial solvents to specialized additives, find the perfect chemical solution for your needs in India.";

  const canonicalUrl = selectedProduct
    ? `/products?product=${generateProductSlug(selectedProduct.name)}`
    : "/products";

  return (
    <div>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={canonicalUrl}
        structuredData={{
          type: "BreadcrumbList",
          data: {
            itemListElement: selectedProduct
              ? [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://trayancorp.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Products",
                    item: "https://trayancorp.com/products",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: selectedProduct.name,
                    item: `https://trayancorp.com/products?product=${generateProductSlug(
                      selectedProduct.name
                    )}`,
                  },
                ]
              : [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://trayancorp.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Products",
                    item: "https://trayancorp.com/products",
                  },
                ],
          },
        }}
      />

      {/* Individual Product Structured Data */}
      {selectedProduct && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "@id": `https://trayancorp.com/products?product=${generateProductSlug(
                selectedProduct.name
              )}`,
              url: `https://trayancorp.com/products?product=${generateProductSlug(
                selectedProduct.name
              )}`,
              name: selectedProduct.name,
              description: selectedProduct.description,
              category: selectedProduct.category,
              sku: `TC-${selectedProduct.id.toString().padStart(3, "0")}`,
              image:
                selectedProduct.image ||
                "https://trayancorp.com/images/chemical-hero.jpg",
              brand: {
                "@type": "Brand",
                name: "Trayan Corporation",
                url: "https://trayancorp.com",
              },
              manufacturer: {
                "@type": "Organization",
                name: "Trayan Corporation",
                url: "https://trayancorp.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "310 - Skywalk The Elements, Jagatpur, off SG Highway, Gota",
                  addressLocality: "Ahmedabad",
                  addressRegion: "Gujarat",
                  postalCode: "382481",
                  addressCountry: "IN",
                },
              },
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceCurrency: "INR",
                seller: {
                  "@type": "Organization",
                  name: "Trayan Corporation",
                },
              },
            }),
          }}
        />
      )}

      {/* Product Catalog Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Chemical Products Catalog - Trayan Corporation",
            description:
              "Comprehensive catalog of chemical products including acids, solvents, and industrial chemicals",
            numberOfItems: products.length,
            url: "https://trayancorp.com/products",
            itemListElement: products.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Product",
                "@id": `https://trayancorp.com/products#${product.id}`,
                url: `https://trayancorp.com/products#${product.id}`,
                name: product.name,
                description: product.description,
                category: product.category,
                sku: `TC-${product.id.toString().padStart(3, "0")}`,
                image:
                  product.image ||
                  "https://trayancorp.com/images/chemical-hero.jpg",
                brand: {
                  "@type": "Brand",
                  name: "Trayan Corporation",
                },
                manufacturer: {
                  "@type": "Organization",
                  name: "Trayan Corporation",
                  url: "https://trayancorp.com",
                },
                additionalProperty: [
                  {
                    "@type": "PropertyValue",
                    name: "Category",
                    value: product.category,
                  },
                  {
                    "@type": "PropertyValue",
                    name: "Industry",
                    value: "Chemical Trading",
                  },
                  {
                    "@type": "PropertyValue",
                    name: "Availability",
                    value: "In Stock",
                  },
                  {
                    "@type": "PropertyValue",
                    name: "Quality Standard",
                    value: "ISO 9001 Certified",
                  },
                ],
              },
            })),
          }),
        }}
      />

      {/* Organization Products Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://trayancorp.com/#organization",
            name: "Trayan Corporation",
            url: "https://trayancorp.com",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Chemical Products Catalog",
              itemListElement: products.map((product) => ({
                "@type": "Product",
                "@id": `https://trayancorp.com/products#${product.id}`,
                url: `https://trayancorp.com/products#${product.id}`,
                name: product.name,
                description: product.description,
                category: product.category,
                sku: `TC-${product.id.toString().padStart(3, "0")}`,
                image:
                  product.image ||
                  "https://trayancorp.com/images/chemical-hero.jpg",
                brand: {
                  "@type": "Brand",
                  name: "Trayan Corporation",
                },
                manufacturer: {
                  "@type": "Organization",
                  name: "Trayan Corporation",
                  url: "https://trayancorp.com",
                },
              })),
            },
            knowsAbout: products.slice(0, 10).map((product) => ({
              "@type": "Product",
              "@id": `https://trayancorp.com/products#${product.id}`,
              url: `https://trayancorp.com/products#${product.id}`,
              name: product.name,
              description: product.description,
              category: product.category,
              sku: `TC-${product.id.toString().padStart(3, "0")}`,
              image:
                product.image ||
                "https://trayancorp.com/images/chemical-hero.jpg",
              brand: {
                "@type": "Brand",
                name: "Trayan Corporation",
              },
            })),
          }),
        }}
      />

      {/* Keywords Meta Tag */}
      <meta
        name="keywords"
        content={`chemical products, industrial chemicals, ${productKeywords}, chemical supplier India, Trayan Corporation`}
      />

      {/* Product FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What chemical products does Trayan Corporation offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Trayan Corporation offers a comprehensive range of chemical products including ${Array.from(
                    new Set(products.map((p) => p.category))
                  ).join(
                    ", "
                  )}. We specialize in high-quality industrial chemicals, acids, solvents, and specialty chemicals for various industries.`,
                },
              },
              {
                "@type": "Question",
                name: "Which industries use Trayan Corporation's chemical products?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our chemical products serve diverse industries including manufacturing, pharmaceuticals, textiles, agriculture, water treatment, food processing, and many other industrial applications.",
                },
              },
              {
                "@type": "Question",
                name: "Are Trayan Corporation's chemical products ISO certified?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, our manufacturing processes adhere to ISO 9001 and ISO 14001 standards for quality and environmental management. Every product batch is thoroughly tested to ensure consistent quality.",
                },
              },
              {
                "@type": "Question",
                name: "How can I purchase chemical products from Trayan Corporation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can contact us directly at +91 87809 98478 or email info@trayancorp.com for product inquiries and purchases. We provide customized solutions and competitive pricing for bulk orders.",
                },
              },
            ],
          }),
        }}
      />

      <div className="relative bg-gradient-to-r from-primary-700 to-primary-600 text-white py-10 md:py-24">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
        <div className="container mx-auto mt-12 md:mt-5 px-6 max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-5xl mt-5 md:mt-0 font-bold mb-6 font-heading">
              Chemical Products <br />
              <span className="text-primary-300">For Every Industry</span>
            </h1>
            <p className="text-lg text-gray-200 mb-4">
              Discover our comprehensive range of high-quality chemical products
              designed to meet the demands of modern industries. From industrial
              solvents to specialized additives, we provide solutions tailored
              to your specific needs.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              <span className="bg-primary-600/30 text-primary-100 px-3 py-1 rounded-full">
                {products.filter((p) => p.category === "STRONG ACIDS").length}{" "}
                Strong Acids
              </span>
              <span className="bg-primary-600/30 text-primary-100 px-3 py-1 rounded-full">
                {products.filter((p) => p.category === "BASIC CHEMICAL").length}{" "}
                Basic Chemicals
              </span>
              <span className="bg-primary-600/30 text-primary-100 px-3 py-1 rounded-full">
                {
                  products.filter((p) => p.category === "INORGANIC CHEMICAL")
                    .length
                }{" "}
                Inorganic Chemicals
              </span>
              <span className="bg-primary-600/30 text-primary-100 px-3 py-1 rounded-full">
                {products.filter((p) => p.category === "SOLVENTS").length}{" "}
                Solvents
              </span>
            </div>
            {/* <div className="flex flex-wrap gap-4">
              <button className="bg-white text-primary-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300">
                Request Custom Quote
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors duration-300">
                View Certifications
              </button>
            </div> */}
          </motion.div>
        </div>
      </div>

      <ProductShowcase
        selectedProduct={selectedProduct}
        onProductSelect={handleProductSelect}
        onModalClose={handleModalClose}
      />

      {/* Featured Products Section
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
              Featured Chemical Products
            </h2>
            <p className="text-lg text-gray-600">
              Explore our most popular chemical products trusted by industries worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full font-medium">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex justify-end items-center">
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Looking for a specific chemical product? We have {products.length}+ products in our catalog.
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors duration-300">
              View Complete Catalog
            </button>
          </div>
        </div>
      </div> */}

      {/* Product Categories Section */}
      {/* <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
              Product Categories
            </h2>
            <p className="text-lg text-gray-600">
              Browse our extensive range of chemical products by category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from(new Set(products.map((p) => p.category))).map(
              (category, index) => {
                const categoryProducts = products.filter(
                  (p) => p.category === category
                );
                const categoryId = `category-${index}-${category
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`;
                const isExpanded = expandedCategory === categoryId;

                return (
                  <motion.div
                    key={categoryId}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {category}
                        </h3>
                        <button
                          onClick={() => toggleCategory(categoryId)}
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors duration-200"
                          aria-label={
                            isExpanded ? "Collapse category" : "Expand category"
                          }
                        >
                          <motion.div
                            animate={{ rotate: isExpanded ? 45 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-lg font-semibold"
                          >
                            +
                          </motion.div>
                        </button>
                      </div>

                      <p className="text-gray-600 text-sm mb-4">
                        {categoryProducts.length} products available
                      </p>

                      <div className="space-y-2">
                        {categoryProducts.slice(0, 3).map((product) => (
                          <div
                            key={product.id}
                            className="text-sm text-gray-500"
                          >
                            • {product.name}
                          </div>
                        ))}
                        {categoryProducts.length > 3 && !isExpanded && (
                          <button
                            onClick={() => toggleCategory(categoryId)}
                            className="text-sm text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
                          >
                            +{categoryProducts.length - 3} more products
                          </button>
                        )}
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <div className="space-y-2">
                                {categoryProducts.slice(3).map((product) => (
                                  <div
                                    key={product.id}
                                    className="text-sm text-gray-500"
                                  >
                                    • {product.name}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </div> */}

      {/* Additional Info Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
              Quality & Safety Standards
            </h2>
            <p className="text-lg text-gray-600">
              All our products undergo rigorous quality control measures and
              comply with international safety standards to ensure reliability
              and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "ISO Certified",
                description:
                  "Our manufacturing processes adhere to ISO 9001 and ISO 14001 standards for quality and environmental management.",
              },
              {
                title: "Batch Testing",
                description:
                  "Every product batch is thoroughly tested to ensure consistent quality and performance specifications.",
              },
              {
                title: "Safety Documentation",
                description:
                  "Complete material safety data sheets and technical documentation provided with all products.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-md shadow-soft"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading products...</p>
          </div>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
};

export default Products;
