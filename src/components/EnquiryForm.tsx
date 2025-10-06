"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFlask, FaPaperPlane, FaSpinner } from "react-icons/fa";
import { products, productCategories } from "@/constants/products";
import { sendEnquiryEmail, EnquiryFormData, initEmailJS } from "@/lib/emailjs";

interface EnquiryFormProps {
  source: "header" | "contact" | "product";
  preselectedCategory?: string;
  preselectedProduct?: string;
  onSuccess: () => void;
  onClose: () => void;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({
  source,
  preselectedCategory,
  preselectedProduct,
  onSuccess,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productCategory: preselectedCategory || "",
    specificProduct: preselectedProduct || "",
    message: "",
  });

  const [filteredProducts, setFilteredProducts] = useState<typeof products>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Initialize EmailJS when component mounts
  useEffect(() => {
    initEmailJS();
  }, []);

  // Filter products based on selected category
  useEffect(() => {
    if (formData.productCategory) {
      const filtered = products.filter(
        (p) => p.category === formData.productCategory
      );
      setFilteredProducts(filtered);

      // If preselected product doesn't match the category, reset it
      if (
        formData.specificProduct &&
        !filtered.some((p) => p.name === formData.specificProduct)
      ) {
        setFormData((prev) => ({ ...prev, specificProduct: "" }));
      }
    } else {
      setFilteredProducts([]);
      setFormData((prev) => ({ ...prev, specificProduct: "" }));
    }
  }, [formData.productCategory, formData.specificProduct]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      const enquiryData: EnquiryFormData = {
        ...formData,
        source,
      };

      await sendEnquiryEmail(enquiryData);
      setSubmitStatus("success");
      setTimeout(() => {
        onSuccess();
      }, 2000);
    } catch (error) {
      console.error("Failed to send enquiry:", error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="text-center py-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <div className="w-6 h-6 bg-green-500 rounded-full"></div>
        </motion.div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">
          Your enquiry has been sent successfully. We&apos;ll get back to you
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <FaFlask className="text-primary-600 text-xl" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 font-heading">
          Get a Quote
        </h2>
        <p className="text-gray-600 mt-2">
          Fill out the form below and we&apos;ll get back to you with a
          personalized quote.
        </p>
      </div>

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 text-center">
          <p className="text-red-600 text-sm">
            Failed to send your enquiry. Please try again or contact us
            directly.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name - Required */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 ${
              errors.name
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300"
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email - Required */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 ${
              errors.email
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300"
            }`}
            placeholder="your.email@company.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Phone - Optional */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
            placeholder="+91 98765 43210"
          />
        </div>

        {/* Company - Optional */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
            placeholder="Your company name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Product Category - Optional */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Category
          </label>
          <select
            name="productCategory"
            value={formData.productCategory}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
          >
            <option value="">Select a Category</option>
            {productCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Specific Product - Optional */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Specific Product
          </label>
          <select
            name="specificProduct"
            value={formData.specificProduct}
            onChange={handleInputChange}
            disabled={!formData.productCategory}
            className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 ${
              !formData.productCategory ? "bg-gray-100 cursor-not-allowed" : ""
            }`}
          >
            <option value="">Select a Product</option>
            {filteredProducts.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
          {!formData.productCategory && (
            <p className="mt-1 text-sm text-gray-500">
              Select a category first
            </p>
          )}
        </div>
      </div>

      {/* Message - Required */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none ${
            errors.message
              ? "border-red-300 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300"
          }`}
          placeholder="Tell us about your requirements, quantities, or any specific questions you have..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center space-x-2"
        >
          {isLoading ? (
            <>
              <FaSpinner className="animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <FaPaperPlane />
              <span>Send Enquiry</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default EnquiryForm;
