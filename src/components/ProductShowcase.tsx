"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFlask } from "react-icons/fa";
import { Product, products, productCategories } from "../constants/products";

interface ProductShowcaseProps {
  selectedProduct?: Product | null;
  onProductSelect?: (product: Product) => void;
  onModalClose?: () => void;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  selectedProduct = null,
  onProductSelect,
  onModalClose,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

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
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-medium text-gray-600">
                      In Stock
                    </span>
                  </div>

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
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-md max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg"
            >
              <div className="relative">
                <div
                  className={`h-32 w-full flex items-center justify-center relative
                  ${
                    selectedProduct.category === "STRONG ACIDS"
                      ? "bg-gradient-to-r from-red-100 to-red-50"
                      : ""
                  }
                  ${
                    selectedProduct.category === "BASIC CHEMICAL"
                      ? "bg-gradient-to-r from-blue-100 to-blue-50"
                      : ""
                  }
                  ${
                    selectedProduct.category === "INORGANIC CHEMICAL"
                      ? "bg-gradient-to-r from-green-100 to-green-50"
                      : ""
                  }
                  ${
                    selectedProduct.category === "OTHER CHEMICAL"
                      ? "bg-gradient-to-r from-purple-100 to-purple-50"
                      : ""
                  }
                `}
                >
                  <div className="flex flex-col items-center justify-center">
                    <FaFlask
                      className={`text-5xl mb-2
                      ${
                        selectedProduct.category === "STRONG ACIDS"
                          ? "text-red-400"
                          : ""
                      }
                      ${
                        selectedProduct.category === "BASIC CHEMICAL"
                          ? "text-blue-400"
                          : ""
                      }
                      ${
                        selectedProduct.category === "INORGANIC CHEMICAL"
                          ? "text-green-400"
                          : ""
                      }
                      ${
                        selectedProduct.category === "OTHER CHEMICAL"
                          ? "text-purple-400"
                          : ""
                      }
                    `}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full
                      ${
                        selectedProduct.category === "STRONG ACIDS"
                          ? "bg-red-100 text-red-800"
                          : ""
                      }
                      ${
                        selectedProduct.category === "BASIC CHEMICAL"
                          ? "bg-blue-100 text-blue-800"
                          : ""
                      }
                      ${
                        selectedProduct.category === "INORGANIC CHEMICAL"
                          ? "bg-green-100 text-green-800"
                          : ""
                      }
                      ${
                        selectedProduct.category === "OTHER CHEMICAL"
                          ? "bg-purple-100 text-purple-800"
                          : ""
                      }
                    `}
                    >
                      {selectedProduct.category}
                    </span>
                  </div>
                  <h2
                    className={`text-2xl font-bold mb-4
                    ${
                      selectedProduct.category === "STRONG ACIDS"
                        ? "text-red-900"
                        : ""
                    }
                    ${
                      selectedProduct.category === "BASIC CHEMICAL"
                        ? "text-blue-900"
                        : ""
                    }
                    ${
                      selectedProduct.category === "INORGANIC CHEMICAL"
                        ? "text-green-900"
                        : ""
                    }
                    ${
                      selectedProduct.category === "OTHER CHEMICAL"
                        ? "text-purple-900"
                        : ""
                    }
                  `}
                  >
                    {selectedProduct.name}
                  </h2>
                  <p
                    className={`text-gray-700 mb-6 border-l-4 pl-4 py-2 italic bg-gray-50
                    ${
                      selectedProduct.category === "STRONG ACIDS"
                        ? "border-red-300"
                        : ""
                    }
                    ${
                      selectedProduct.category === "BASIC CHEMICAL"
                        ? "border-blue-300"
                        : ""
                    }
                    ${
                      selectedProduct.category === "INORGANIC CHEMICAL"
                        ? "border-green-300"
                        : ""
                    }
                    ${
                      selectedProduct.category === "OTHER CHEMICAL"
                        ? "border-purple-300"
                        : ""
                    }
                  `}
                  >
                    {selectedProduct.description}
                  </p>
                </div>
                <button
                  onClick={() => onModalClose?.()}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
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
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductShowcase;
