"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface EnquiryContextType {
  isModalOpen: boolean;
  openModal: (
    source?: "header" | "contact" | "product",
    preselectedCategory?: string,
    preselectedProduct?: string
  ) => void;
  closeModal: () => void;
  source: "header" | "contact" | "product";
  preselectedCategory?: string;
  preselectedProduct?: string;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

interface EnquiryProviderProps {
  children: ReactNode;
}

export const EnquiryProvider: React.FC<EnquiryProviderProps> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [source, setSource] = useState<"header" | "contact" | "product">(
    "header"
  );
  const [preselectedCategory, setPreselectedCategory] = useState<
    string | undefined
  >();
  const [preselectedProduct, setPreselectedProduct] = useState<
    string | undefined
  >();

  const openModal = (
    modalSource: "header" | "contact" | "product" = "header",
    category?: string,
    product?: string
  ) => {
    setSource(modalSource);
    setPreselectedCategory(category);
    setPreselectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Clear preselected values after a short delay
    setTimeout(() => {
      setPreselectedCategory(undefined);
      setPreselectedProduct(undefined);
    }, 300);
  };

  const value: EnquiryContextType = {
    isModalOpen,
    openModal,
    closeModal,
    source,
    preselectedCategory,
    preselectedProduct,
  };

  return (
    <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>
  );
};

export const useEnquiry = (): EnquiryContextType => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used within an EnquiryProvider");
  }
  return context;
};
