"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFlask } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
}

// Create products based on the product list
const products: Product[] = [
  // STRONG ACIDS
  {
    id: 1,
    name: "SULPHURIC ACID",
    category: "STRONG ACIDS",
    description:
      "High-purity industrial sulphuric acid with consistent quality for various manufacturing processes.",
    price: "$80-120 per unit",
    image: "",
  },
  {
    id: 2,
    name: "OLEUM",
    category: "STRONG ACIDS",
    description:
      "Concentrated form of sulfuric acid containing dissolved sulfur trioxide, ideal for specialized chemical processes.",
    price: "$90-140 per unit",
    image: "",
  },
  {
    id: 3,
    name: "NITRIC ACID",
    category: "STRONG ACIDS",
    description:
      "High-grade nitric acid available in various concentrations for industrial applications.",
    price: "$85-130 per unit",
    image: "",
  },
  {
    id: 4,
    name: "GLACIAL ACETIC ACID",
    category: "STRONG ACIDS",
    description:
      "Pure acetic acid with minimal water content, ideal for industrial and laboratory applications.",
    price: "$70-110 per unit",
    image: "",
  },
  {
    id: 5,
    name: "PHOSPHORIC ACID",
    category: "STRONG ACIDS",
    description:
      "Technical and food-grade phosphoric acid for diverse industrial applications.",
    price: "$75-125 per unit",
    image: "",
  },
  {
    id: 6,
    name: "HYDROCHLORIC ACID",
    category: "STRONG ACIDS",
    description:
      "High-quality hydrochloric acid available in various concentrations for different industrial uses.",
    price: "$65-100 per unit",
    image: "",
  },

  // BASIC CHEMICAL
  {
    id: 7,
    name: "SODA ASH (LIGHT/DENSE)",
    category: "BASIC CHEMICAL",
    description:
      "Sodium carbonate available in light and dense forms for various industrial applications.",
    price: "$50-90 per unit",
    image: "/images/additives.jpg",
  },
  {
    id: 8,
    name: "CAUSTIC SODA (FLAKES/PEARLS/LYE)",
    category: "BASIC CHEMICAL",
    description:
      "Sodium hydroxide available in multiple forms - flakes, pearls, and liquid lye.",
    price: "$55-95 per unit",
    image: "/images/additives.jpg",
  },
  {
    id: 9,
    name: "SODIUM SILICATE (GLASS AND LIQUID)",
    category: "BASIC CHEMICAL",
    description:
      "Versatile sodium silicate available in both solid and liquid forms.",
    price: "$60-100 per unit",
    image: "",
  },
  {
    id: 10,
    name: "SODIUM META SILICATE SODIUM",
    category: "BASIC CHEMICAL",
    description:
      "Specialized silicate compound for detergent and cleaning applications.",
    price: "$65-105 per unit",
    image: "",
  },
  {
    id: 11,
    name: "SODIUM ALUMINA SILICATE",
    category: "BASIC CHEMICAL",
    description: "Synthetic silicate with numerous industrial applications.",
    price: "$70-110 per unit",
    image: "",
  },
  {
    id: 12,
    name: "PRECIPITATE SILICA SODIUM LAURYL SULPHATE",
    category: "BASIC CHEMICAL",
    description:
      "High-performance surfactant compound for specialized applications.",
    price: "$75-120 per unit",
    image: "",
  },
  {
    id: 13,
    name: "LINER ALKYL BENZENE SULFONIC ACID",
    category: "BASIC CHEMICAL",
    description:
      "Key surfactant for detergent and cleaning product formulations.",
    price: "$80-130 per unit",
    image: "",
  },
  {
    id: 14,
    name: "SULPHAMIC ACID",
    category: "BASIC CHEMICAL",
    description:
      "Versatile acid compound for descaling and cleaning applications.",
    price: "$60-100 per unit",
    image: "",
  },

  // INORGANIC CHEMICAL - Selected key items
  {
    id: 15,
    name: "SODIUM SULPHATE",
    category: "INORGANIC CHEMICAL",
    description: "Versatile sodium salt for numerous industrial applications.",
    price: "$45-85 per unit",
    image: "/images/raw-materials.jpg",
  },
  {
    id: 16,
    name: "MAGNESIUM SULPHATE",
    category: "INORGANIC CHEMICAL",
    description:
      "High-purity magnesium salt used in agriculture and industrial processes.",
    price: "$50-90 per unit",
    image: "/images/raw-materials.jpg",
  },
  {
    id: 17,
    name: "MANGANESE SULPHATE",
    category: "INORGANIC CHEMICAL",
    description:
      "Essential micronutrient compound for agricultural and industrial use.",
    price: "$55-95 per unit",
    image: "",
  },
  {
    id: 18,
    name: "CALCIUM CHLORIDE",
    category: "INORGANIC CHEMICAL",
    description:
      "Versatile calcium salt for diverse applications including deicing and food processing.",
    price: "$40-80 per unit",
    image: "",
  },
  {
    id: 19,
    name: "ZINC OXIDE",
    category: "INORGANIC CHEMICAL",
    description:
      "High-quality zinc compound for rubber, ceramics, and pharmaceutical applications.",
    price: "$60-100 per unit",
    image: "",
  },
  {
    id: 20,
    name: "SODIUM SULPHITE",
    category: "INORGANIC CHEMICAL",
    description:
      "Effective reducing agent and preservative for various industrial processes.",
    price: "$45-85 per unit",
    image: "",
  },

  // OTHER CHEMICAL
  {
    id: 21,
    name: "LIQUOR AMMONIA",
    category: "OTHER CHEMICAL",
    description:
      "Concentrated ammonia solution for cleaning, refrigeration, and manufacturing applications.",
    price: "$40-80 per unit",
    image: "/images/solvents.jpg",
  },
  {
    id: 22,
    name: "CITRIC ACID (MONOHYDRATE/ANHYDROUS)",
    category: "OTHER CHEMICAL",
    description:
      "Food-grade organic acid available in monohydrate and anhydrous forms.",
    price: "$55-95 per unit",
    image: "/images/solvents.jpg",
  },
  {
    id: 23,
    name: "BORIC ACID",
    category: "OTHER CHEMICAL",
    description:
      "Versatile mild acid with antiseptic and insecticidal properties.",
    price: "$45-85 per unit",
    image: "",
  },
  {
    id: 24,
    name: "SODIUM CARBONATE",
    category: "OTHER CHEMICAL",
    description:
      "Essential alkaline compound for numerous industrial applications.",
    price: "$40-80 per unit",
    image: "",
  },
  {
    id: 25,
    name: "SODIUM BICARBONATE",
    category: "OTHER CHEMICAL",
    description:
      "Versatile sodium salt with applications in food, pharmaceuticals, and cleaning products.",
    price: "$35-75 per unit",
    image: "",
  },
  {
    id: 26,
    name: "DI CALCUIM PHOSPHATE",
    category: "OTHER CHEMICAL",
    description:
      "Calcium phosphate compound used in animal feed and fertilizers.",
    price: "$50-90 per unit",
    image: "",
  },
  {
    id: 27,
    name: "SODIUM TRI-POLY PHOSPHATE",
    category: "OTHER CHEMICAL",
    description:
      "Effective water softener and dispersing agent for detergent formulations.",
    price: "$55-95 per unit",
    image: "",
  },
  {
    id: 28,
    name: "SODIUM LIGNO SULPHONATE",
    category: "OTHER CHEMICAL",
    description: "Versatile dispersant and binder derived from lignin.",
    price: "$60-100 per unit",
    image: "",
  },
];

// Extract unique categories for filtering
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
                  {/* <p
                    className={`text-sm font-semibold
                    ${product.category === "STRONG ACIDS" ? "text-red-600" : ""}
                    ${
                      product.category === "BASIC CHEMICAL"
                        ? "text-blue-600"
                        : ""
                    }
                    ${
                      product.category === "INORGANIC CHEMICAL"
                        ? "text-green-600"
                        : ""
                    }
                    ${
                      product.category === "OTHER CHEMICAL"
                        ? "text-purple-600"
                        : ""
                    }
                  `}
                  >
                    {product.price}
                  </p> */}
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

                  {/* <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-8 pt-4 border-t border-gray-200">
                    <div
                      className={`text-xl font-bold 
                      ${
                        selectedProduct.category === "STRONG ACIDS"
                          ? "text-red-700"
                          : ""
                      }
                      ${
                        selectedProduct.category === "BASIC CHEMICAL"
                          ? "text-blue-700"
                          : ""
                      }
                      ${
                        selectedProduct.category === "INORGANIC CHEMICAL"
                          ? "text-green-700"
                          : ""
                      }
                      ${
                        selectedProduct.category === "OTHER CHEMICAL"
                          ? "text-purple-700"
                          : ""
                      }
                    `}
                    >
                      {selectedProduct.price}
                    </div>
                    <div className="flex gap-4">
                      <button
                        className={`text-white px-4 py-2 rounded-md transition-colors duration-200
                        ${
                          selectedProduct.category === "STRONG ACIDS"
                            ? "bg-red-600 hover:bg-red-700"
                            : ""
                        }
                        ${
                          selectedProduct.category === "BASIC CHEMICAL"
                            ? "bg-blue-600 hover:bg-blue-700"
                            : ""
                        }
                        ${
                          selectedProduct.category === "INORGANIC CHEMICAL"
                            ? "bg-green-600 hover:bg-green-700"
                            : ""
                        }
                        ${
                          selectedProduct.category === "OTHER CHEMICAL"
                            ? "bg-purple-600 hover:bg-purple-700"
                            : ""
                        }
                      `}
                      >
                        Request Quote
                      </button>
                      <button
                        onClick={() => setSelectedProduct(null)}
                        className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md transition-colors duration-200"
                      >
                        Close
                      </button>
                    </div>
                  </div> */}
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
