"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Business Solutions", href: "/business" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Certifications", href: "/certifications" },
  ];

  const productCategories = [
    { name: "Industrial Chemicals", href: "/products#industrial" },
    { name: "Chemical Additives", href: "/products#additives" },
    { name: "Raw Materials", href: "/products#raw-materials" },
    { name: "Specialty Products", href: "/products#specialty" },
    { name: "Custom Solutions", href: "/products#custom" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top section with logo and newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10 border-b border-gray-800">
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-heading font-bold text-white">
                Trayan Corp
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Your trusted partner in chemical trading and manufacturing
              solutions. With decades of experience, we deliver quality products
              globally.
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -3, color: "#214079" }}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              )}
            </div>
          </div>

          <div className="col-span-2">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">
                Subscribe to our Newsletter
              </h3>
              <p className="text-gray-400 mb-4">
                Stay up to date with our latest products, industry insights, and
                exclusive offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-500 transition-colors duration-300"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </div>

        {/* Middle section with links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 border-b border-gray-800">
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-300 transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-gray-400 hover:text-primary-300 transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 text-primary-400 mr-3 mt-0.5" />
                <span className="text-gray-400">+1 (234) 567-890</span>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 text-primary-400 mr-3 mt-0.5" />
                <span className="text-gray-400">info@trayancorp.com</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-primary-400 mr-3 mt-0.5" />
                <span className="text-gray-400">
                  123 Chemical Street, Industrial Zone,
                  <br />
                  City, Country
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="mt-8 md:flex md:items-center md:justify-between">
          <div className="text-sm text-gray-400">
            <p>© 2024 Trayan Corporation. All rights reserved.</p>
            <p className="mt-2">Chemical Trading & Manufacturing Solutions</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-center text-xs text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              {" • "}
              <Link
                href="/terms"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              {" • "}
              <Link
                href="/sitemap"
                className="hover:text-white transition-colors duration-300"
              >
                Sitemap
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
