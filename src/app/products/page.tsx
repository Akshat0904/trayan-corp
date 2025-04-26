"use client";

import React from "react";
import { motion } from "framer-motion";
import ProductShowcase from "@/components/ProductShowcase";

const Products = () => {
  return (
    <div>
      <div className="bg-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
              Chemical Products <br />
              <span className="text-primary-300">For Every Industry</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Discover our comprehensive range of high-quality chemical products
              designed to meet the demands of modern industries. From industrial
              solvents to specialized additives, we provide solutions tailored
              to your specific needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-primary-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300">
                Request Custom Quote
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors duration-300">
                View Certifications
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <ProductShowcase />

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

export default Products;
