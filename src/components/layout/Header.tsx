"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEnquiry } from "@/contexts/EnquiryContext";
import Logo from "../../../public/images/logos/Trayan-blue.svg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Business", href: "/business" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { openModal } = useEnquiry();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <header
        className={`fixed w-full z-[99] transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-white shadow-sm py-4"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="-m-1.5 p-1.5 flex items-center gap-1 sm:gap-2"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Image
                  src={Logo}
                  alt="Trayan Corp Logo"
                  width={100}
                  height={100}
                  className="h-8 sm:h-12 w-auto"
                  style={{ filter: "none" }}
                />
              </motion.div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-600 hover:bg-primary-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Close menu" : "Open main menu"}
              </span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className="relative text-lg font-semibold leading-6 text-gray-800 transition-all duration-200 hover:text-primary-600 group"
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal("header")}
              className="bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-soft transition-all duration-200 hover:shadow-glow"
            >
              Get a Quote
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Mobile menu - appears below the header */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="lg:hidden fixed inset-0 z-[50] bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu links container */}
            <motion.div
              className="lg:hidden fixed top-0 inset-x-0 z-[90] flex flex-col bg-white shadow-md"
              style={{
                top: scrolled ? "calc(56px)" : "calc(72px)",
                maxHeight: "calc(100vh - 72px)",
                overflow: "auto",
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Navigation links */}
              <div className="border-t border-gray-100">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-6 py-4 text-base font-semibold ${
                        isActive
                          ? "text-primary-600 bg-primary-50"
                          : "text-gray-800"
                      } hover:bg-primary-50 border-b border-gray-100`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <div className="p-4">
                  <button
                    onClick={() => {
                      openModal("header");
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-center bg-primary-600 hover:bg-primary-500 text-white px-4 py-3 rounded-md text-base font-semibold shadow-soft"
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
