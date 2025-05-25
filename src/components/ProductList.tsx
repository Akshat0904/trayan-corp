"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaFlask, FaChevronDown, FaSearch } from "react-icons/fa";

interface ProductCategory {
  name: string;
  items: string[];
}

const productCategories: ProductCategory[] = [
  {
    name: "STRONG ACIDS",
    items: [
      "SULPHURIC ACID",
      "OLEUM",
      "NITRIC ACID",
      "GLACIAL ACETIC ACID",
      "PHOSPHORIC ACID",
      "HYDROCHLORIC ACID",
    ],
  },
  {
    name: "BASIC CHEMICAL",
    items: [
      "SODA ASH (LIGHT/DENSE)",
      "CAUSTIC SODA (FLAKES/PEARLS/LYE)",
      "SODIUM SILICATE (GLASS AND LIQUID)",
      "SODIUM META SILICATE SODIUM",
      "ALUMINA SILICATE",
      "PRECIPITATE SILICA SODIUM LAURYL SULPHATE",
      "LINER ALKYL BENZENE SULFONIC ACID",
      "SULPHAMIC ACID",
    ],
  },
  {
    name: "INORGANIC CHEMICAL",
    items: [
      // Sulphates
      "SODIUM SULPHATE",
      "MAGNESIUM SULPHATE",
      "MANGANESE SULPHATE",
      "AMMONIUM SULPHATE",
      "FERROUS SULPHATE",
      "ZINC SULPHATE",
      "COPPER SULPHATE",
      "NICKEL SULPHATE",
      "COBALT SULPHATE",
      "POTASSIUM SULPHATE",
      // Chlorides
      "CALCIUM CHLORIDE",
      "MAGNESIUM CHLORIDE",
      "POTASSIUM CHLORIDE",
      "SODIUM CHLORIDE",
      "ZINC CHLORIDE",
      "AMMONIUM CHLORIDE",
      // Oxides
      "ZINC OXIDE",
      "MAGNESIUM OXIDE",
      "NICKLE OXIDE",
      "COPPER OXIDE",
      // Sulphites
      "SODIUM SULPHITE",
      "SODIUM BISULPHITE",
      "SODIUM METABISULPHITE",
      "POTASSIUM BISULPHITE",
      // Nitrates
      "SODIUM NITRATE",
      "POTASSIUM NITRATE",
      "MANNESIUM NITRATE",
      // Carbonates
      "AMMONIUM CARBONATE",
      "BARIUM CARBONATE",
      "MANGANESE CABONATE",
      "ZINC CARBONATE",
      "CALCIUM CARBONATE",
    ],
  },
  {
    name: "OTHER CHEMICAL",
    items: [
      "LIQUOR AMMONIA",
      "CITRIC ACID (MONOHYDRATE/ANHYDROUS)",
      "BORIC ACID",
      "SODIUM CARBONATE",
      "SODIUM BICARBONATE",
      "DI CALCUIM PHOSPHATE",
      "SODIUM TRI-POLY PHOSPHATE",
      "SODIUM LIGNO SULPHONATE",
    ],
  },
];

const ProductList = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(
    "STRONG ACIDS"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const toggleCategory = (categoryName: string) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  const filteredCategories = productCategories
    .map((category) => {
      return {
        ...category,
        items: category.items.filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      };
    })
    .filter((category) => category.items.length > 0);

  const resetSearch = () => {
    setSearchTerm("");
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Our Product List
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse our comprehensive range of high-quality chemical products
            categorized for your convenience.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <input
                ref={searchRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-200 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-gray-900"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {searchTerm ? (
                  <button
                    onClick={resetSearch}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                ) : (
                  <FaSearch className="text-gray-400" />
                )}
              </div>
            </div>
            {searchTerm && (
              <div className="mt-2 text-sm text-gray-600">
                Showing{" "}
                {filteredCategories.reduce(
                  (acc, cat) => acc + cat.items.length,
                  0
                )}{" "}
                products
              </div>
            )}
          </div>
        </div>

        {/* Product Categories */}
        <div className="mt-8">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="mb-6 bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full flex items-center justify-between p-5 text-left bg-primary-50 hover:bg-primary-100 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <FaFlask className="text-primary-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.name}
                  </h3>
                  <span className="ml-3 bg-primary-100 text-primary-800 text-sm py-0.5 px-2 rounded-full">
                    {category.items.length}
                  </span>
                </div>
                <FaChevronDown
                  className={`text-primary-600 transform transition-transform duration-200 ${
                    openCategory === category.name ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Product Items */}
              {openCategory === category.name && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 py-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {category.items.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.03 }}
                        className="p-3 border border-gray-100 rounded-md hover:bg-primary-50 hover:border-primary-200 transition-colors duration-200 hover:shadow-sm"
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                          <p className="text-gray-800 text-sm">{item}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Request Info */}
        <div className="mt-12 bg-primary-50 border border-primary-100 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-800 mb-4">
            Need More Information?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our experts are ready to assist you with product specifications,
            applications, and pricing. Contact us today for detailed
            information.
          </p>
          <button className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors duration-300">
            Request Product Specifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
