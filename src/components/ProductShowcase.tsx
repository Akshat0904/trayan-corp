"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFlask } from "react-icons/fa";
import { Product, products, productCategories } from "../constants/products";

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === "all"
                ? "bg-primary-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            } transition-colors duration-200`}
            onClick={() => setActiveCategory("all")}
          >
            All Products
          </button>
          {productCategories.map((category) => (
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
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredProducts.map((product) => (
            <motion.article
              layout
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: (product.id * 0.05) % 0.5 }}
              className="flex flex-col items-start bg-white rounded-md shadow-soft overflow-hidden hover:shadow-hard hover:shadow-glow transition-all duration-300 h-full border border-gray-100"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="w-full">
                <div
                  className={`h-24 w-full flex items-center justify-center relative overflow-hidden
                  ${
                    product.category === "STRONG ACIDS"
                      ? "bg-gradient-to-r from-red-50 to-orange-50"
                      : ""
                  }
                  ${
                    product.category === "BASIC CHEMICAL"
                      ? "bg-gradient-to-r from-blue-50 to-indigo-50"
                      : ""
                  }
                  ${
                    product.category === "INORGANIC CHEMICAL"
                      ? "bg-gradient-to-r from-green-50 to-teal-50"
                      : ""
                  }
                  ${
                    product.category === "OTHER CHEMICAL"
                      ? "bg-gradient-to-r from-purple-50 to-pink-50"
                      : ""
                  }
                `}
                >
                  <div className="absolute top-0 right-0 m-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium
                      ${
                        product.category === "STRONG ACIDS"
                          ? "bg-red-100 text-red-800"
                          : ""
                      }
                      ${
                        product.category === "BASIC CHEMICAL"
                          ? "bg-blue-100 text-blue-800"
                          : ""
                      }
                      ${
                        product.category === "INORGANIC CHEMICAL"
                          ? "bg-green-100 text-green-800"
                          : ""
                      }
                      ${
                        product.category === "OTHER CHEMICAL"
                          ? "bg-purple-100 text-purple-800"
                          : ""
                      }
                    `}
                    >
                      {product.category}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <FaFlask
                      className={`text-3xl mb-1
                      ${
                        product.category === "STRONG ACIDS"
                          ? "text-red-300"
                          : ""
                      }
                      ${
                        product.category === "BASIC CHEMICAL"
                          ? "text-blue-300"
                          : ""
                      }
                      ${
                        product.category === "INORGANIC CHEMICAL"
                          ? "text-green-300"
                          : ""
                      }
                      ${
                        product.category === "OTHER CHEMICAL"
                          ? "text-purple-300"
                          : ""
                      }
                    `}
                    />
                    <div
                      className={`text-sm font-semibold
                      ${
                        product.category === "STRONG ACIDS"
                          ? "text-red-700"
                          : ""
                      }
                      ${
                        product.category === "BASIC CHEMICAL"
                          ? "text-blue-700"
                          : ""
                      }
                      ${
                        product.category === "INORGANIC CHEMICAL"
                          ? "text-green-700"
                          : ""
                      }
                      ${
                        product.category === "OTHER CHEMICAL"
                          ? "text-purple-700"
                          : ""
                      }
                    `}
                    >
                      Chemical
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow w-full">
                <div className="flex items-center gap-x-4 text-xs mb-1">
                  <span className="text-gray-500 bg-gray-100 px-2 py-0.5 rounded-sm">
                    Available Now
                  </span>
                </div>
                <div className="group flex-grow">
                  <h3 className="text-base font-bold leading-6 text-gray-900 group-hover:text-primary-600 line-clamp-2 h-12">
                    {product.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600 h-[4.5rem]">
                    {product.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className={`text-sm font-semibold flex items-center rounded-full px-3 py-1
                      ${
                        product.category === "STRONG ACIDS"
                          ? "text-red-600 hover:bg-red-50"
                          : ""
                      }
                      ${
                        product.category === "BASIC CHEMICAL"
                          ? "text-blue-600 hover:bg-blue-50"
                          : ""
                      }
                      ${
                        product.category === "INORGANIC CHEMICAL"
                          ? "text-green-600 hover:bg-green-50"
                          : ""
                      }
                      ${
                        product.category === "OTHER CHEMICAL"
                          ? "text-purple-600 hover:bg-purple-50"
                          : ""
                      }
                    `}
                  >
                    Details
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
                  onClick={() => setSelectedProduct(null)}
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
