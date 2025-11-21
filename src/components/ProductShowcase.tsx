"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFlask } from "react-icons/fa";
import { Product, products, productCategories } from "../constants/products";

interface ProductShowcaseProps {
  selectedProduct?: Product | null;
  onProductSelect?: (product: Product) => void;
  onModalClose?: () => void;
  initialCategory?: string;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  selectedProduct = null,
  onProductSelect,
  onModalClose,
  initialCategory = "all",
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  // Sync activeCategory with initialCategory prop
  React.useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="bg-white py-8 sm:py-10">
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
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeCategory === "all"
                ? "bg-primary-600 text-white shadow-sm"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setActiveCategory("all")}
          >
            All Products
          </button>
          {productCategories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary-600 text-white shadow-sm"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredProducts.map((product) => (
            <motion.article
              layout
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: (product.id * 0.05) % 0.5 }}
              className="group relative bg-white rounded-xl border border-gray-200 hover:border-primary-400 transition-all duration-300 h-full cursor-pointer overflow-hidden"
              onClick={() => onProductSelect?.(product)}
            >
              {/* Accent bar on left */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>

              <div className="p-6 flex flex-col h-full">
                {/* Header with icon and category */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors duration-300">
                      <FaFlask className="text-xl text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Product name */}
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2 mb-3 min-h-[3.5rem]">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-3 flex-grow mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-100">
                  {/* Availability */}
                  {/* <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-medium text-gray-600">
                      In Stock
                    </span>
                  </div> */}

                  {/* View button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onProductSelect?.(product);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-primary-600 hover:text-white bg-primary-50 hover:bg-primary-600 rounded-lg transition-all duration-200"
                  >
                    Details
                    <svg
                      className="w-3.5 h-3.5"
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

        {/* Product Count */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Showing {filteredProducts.length} products
          {activeCategory !== "all" ? ` in ${activeCategory}` : ""}
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            >
              <div className="relative">
                {/* Header with gradient background */}
                <div className="relative h-48 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
                  {/* Animated pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: "30px 30px",
                      }}
                    ></div>
                  </div>

                  {/* Floating shapes */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute top-10 right-10 w-32 h-32 bg-primary-600/20 rounded-full blur-2xl"
                    />
                    <motion.div
                      animate={{
                        y: [0, 15, 0],
                        rotate: [0, -5, 0],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute bottom-10 left-10 w-40 h-40 bg-accent-500/10 rounded-full blur-2xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                      <FaFlask className="text-4xl text-white" />
                    </div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent-400/20 border border-accent-400/30 text-accent-300 text-xs font-semibold uppercase tracking-wide">
                      {selectedProduct.category}
                    </span>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => onModalClose?.()}
                    className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-2.5 transition-all duration-200 border border-white/20 hover:border-white/30 group"
                  >
                    <svg
                      className="h-5 w-5 text-white"
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

                {/* Content */}
                <div className="p-8 overflow-y-auto max-h-[calc(90vh-12rem)]">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
                    {selectedProduct.name}
                  </h2>

                  <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-lg mb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Product Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">
                        Availability
                      </div>
                      {/* <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-900 font-semibold">
                          In Stock
                        </span>SSSS
                      </div> */}
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Quality</div>
                      <div className="text-gray-900 font-semibold">
                        ISO 9001 Certified
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex gap-3">
                    <a
                      href="/contact"
                      className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
                    >
                      Request Quote
                    </a>
                    <a
                      href="tel:+918780998478"
                      className="flex-1 border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 text-center"
                    >
                      Call Now
                    </a>
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
