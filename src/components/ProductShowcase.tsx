"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  applications: string[];
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Industrial Solvents",
    category: "Industrial Chemicals",
    description:
      "High-quality industrial solvents for various manufacturing processes. Our solvents are manufactured to the highest standards to ensure maximum efficiency and reliability.",
    features: [
      "99.9% purity guaranteed",
      "Available in bulk quantities",
      "Fast evaporation rate",
      "Low toxicity options available",
    ],
    applications: [
      "Paint and coating industry",
      "Industrial cleaning",
      "Pharmaceutical processing",
      "Electronics manufacturing",
    ],
    price: "$50-200 per gallon",
    image: "/images/solvents.jpg",
  },
  {
    id: 2,
    name: "Chemical Additives",
    category: "Processing Chemicals",
    description:
      "Specialized chemical additives for enhanced product performance. These additives improve stability, appearance, and functional properties of end products.",
    features: [
      "Highly concentrated formulations",
      "Custom blending available",
      "Environmentally friendly options",
      "Technical support included",
    ],
    applications: [
      "Plastic manufacturing",
      "Food processing",
      "Water treatment",
      "Agricultural products",
    ],
    price: "$100-500 per kg",
    image: "/images/additives.jpg",
  },
  {
    id: 3,
    name: "Raw Materials",
    category: "Base Chemicals",
    description:
      "Premium raw materials for chemical manufacturing. Our high-purity raw materials serve as the foundation for quality chemical products across industries.",
    features: [
      "Consistently high quality",
      "Batch testing and certification",
      "Multiple grades available",
      "Global sourcing capabilities",
    ],
    applications: [
      "Chemical synthesis",
      "Research and development",
      "Manufacturing processes",
      "Quality control standards",
    ],
    price: "$200-1000 per ton",
    image: "/images/raw-materials.jpg",
  },
  {
    id: 4,
    name: "Specialty Polymers",
    category: "Advanced Materials",
    description:
      "Advanced specialty polymers designed for specific applications requiring unique physical and chemical properties.",
    features: [
      "Custom molecular weights",
      "Controlled viscosity",
      "Heat and chemical resistance",
      "Advanced mechanical properties",
    ],
    applications: [
      "Aerospace components",
      "Medical devices",
      "Automotive parts",
      "Advanced coatings",
    ],
    price: "$300-1500 per kg",
    image: "/images/polymers.jpg",
  },
];

const categories = Array.from(
  new Set(products.map((product) => product.category))
);

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
            Our Chemical Solutions
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover our comprehensive range of high-quality chemical products
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === "all"
                ? "bg-primary-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            } transition-colors duration-200`}
            onClick={() => setActiveCategory("all")}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              } transition-colors duration-200`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {filteredProducts.map((product) => (
            <motion.article
              layout
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start bg-white rounded-md shadow-soft overflow-hidden hover:shadow-hard hover:shadow-glow transition-all duration-300"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full bg-gray-200 flex items-center justify-center">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-400">No image available</div>
                  )}
                </div>
                <div className="absolute top-0 right-0 m-2">
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="text-gray-500">Available Now</span>
                </div>
                <div className="group mt-3">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary-600">
                    {product.name}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                    {product.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-primary-600">
                    {product.price}
                  </p>
                </div>
                <div className="mt-5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="text-sm font-semibold text-primary-600 hover:text-primary-500 flex items-center"
                  >
                    View Details
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-md max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-60 md:h-full">
                  {selectedProduct.image ? (
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      className="object-cover rounded-t md:rounded-l md:rounded-tr-none"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                      No image available
                    </div>
                  )}
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
                  >
                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2.5 py-0.5 rounded-full">
                      {selectedProduct.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-gray-700 mb-6">
                    {selectedProduct.description}
                  </p>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Key Features
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Applications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {selectedProduct.applications.map(
                        (application, index) => (
                          <li key={index}>{application}</li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-8">
                    <div className="text-xl font-bold text-primary-700">
                      {selectedProduct.price}
                    </div>
                    <div className="flex gap-4">
                      <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors duration-200">
                        Request Quote
                      </button>
                      <button
                        onClick={() => setSelectedProduct(null)}
                        className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md transition-colors duration-200"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductShowcase;
