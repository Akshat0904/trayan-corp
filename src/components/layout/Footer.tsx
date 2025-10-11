"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
import Logo from "../../../public/images/logos/Trayan-white-3.png";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Business", href: "/business" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-primary-600 text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top section with logo and newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10 border-b border-gray-800">
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src={Logo}
                alt="Trayan Corp Logo"
                width={300}
                height={300}
                className="h-30 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Your trusted partner in chemical trading and manufacturing
              solutions for the global industry.
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 py-10 border-b border-gray-800">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2 w-full max-w-xs">
              {navigation.map((link) => (
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

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-white">
              Contact Information
            </h3>
            <ul className="space-y-4 w-full max-w-xs">
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  +91 87809 98478 / +91 91063 64185
                </span>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">info@trayancorp.com</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  310 - Skywalk The Elements, Jagatpur, off SG Highway, Gota,
                  Ahmedabad, Gujarat 382481
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-white">
              Business Hours
            </h3>
            <ul className="space-y-2 text-gray-400 w-full max-w-xs">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="text-right ml-4">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-right ml-4">10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-right ml-4">Closed</span>
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
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
