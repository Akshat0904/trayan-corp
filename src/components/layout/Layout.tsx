"use client";

import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { EnquiryProvider } from "@/contexts/EnquiryContext";
import EnquiryModal from "@/components/EnquiryModal";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <EnquiryProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <EnquiryModal />
      </div>
    </EnquiryProvider>
  );
};

export default Layout;
