"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEnquiry } from "@/contexts/EnquiryContext";
import EnquiryForm from "./EnquiryForm";

const EnquiryModal: React.FC = () => {
  const {
    isModalOpen,
    closeModal,
    source,
    preselectedCategory,
    preselectedProduct,
  } = useEnquiry();

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isModalOpen, closeModal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleSuccess = () => {
    // Keep modal open briefly to show success message, then close
    setTimeout(() => {
      closeModal();
    }, 2000);
  };

  return (
    <AnimatePresence mode="wait">
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={handleBackdropClick}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  damping: 20,
                  stiffness: 300,
                }}
                className="relative w-full max-w-2xl mx-auto"
              >
                {/* Modal Card */}
                <div className="relative bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-hidden">
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    aria-label="Close modal"
                  >
                    <XMarkIcon className="w-5 h-5 text-gray-600" />
                  </button>

                  {/* Modal Content */}
                  <div className="overflow-y-auto max-h-[90vh]">
                    <div className="p-6 sm:p-8">
                      <EnquiryForm
                        source={source}
                        preselectedCategory={preselectedCategory}
                        preselectedProduct={preselectedProduct}
                        onSuccess={handleSuccess}
                        onClose={closeModal}
                      />
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary-200/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-300/20 rounded-full blur-xl"></div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
