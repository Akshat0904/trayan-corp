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
import Logo from "../../../public/images/logos/trayan-white.png";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Business", href: "/business" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-primary-900 to-primary-950 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top section with logo and newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10 border-b border-primary-700/50">
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
            <p className="text-primary-200 mb-6 leading-relaxed">
              Reliable Chemistry - delivering solutions for the global industry.
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 bg-primary-800/50 hover:bg-primary-700 rounded-lg flex items-center justify-center text-primary-300 hover:text-white transition-all duration-300 border border-primary-700/50 hover:border-primary-600"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              )}
            </div>
          </div>

          <div className="col-span-2">
            <div className="bg-primary-800/30 backdrop-blur-sm p-6 rounded-xl border border-primary-700/50 hover:border-primary-600/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-white">
                Subscribe to our Newsletter
              </h3>
              <p className="text-primary-200 mb-4">
                Stay up to date with our latest products, industry insights, and
                exclusive offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg bg-primary-900/50 text-white border border-primary-700/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400 placeholder:text-primary-400 transition-all duration-300"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 bg-accent-400 text-primary-900 rounded-lg hover:bg-accent-300 transition-colors duration-300 font-semibold shadow-lg hover:shadow-accent-400/20"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </div>

        {/* Middle section with links */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 py-10 border-b border-primary-700/50">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2 w-full max-w-xs">
              {navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-accent-300 transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent-400">
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
                <PhoneIcon className="h-5 w-5 text-accent-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-primary-200">
                  +91 87809 98478 / +91 91063 64185
                </span>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 text-accent-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-primary-200">info@trayancorp.com</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-accent-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-primary-200">
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
            <ul className="space-y-2 text-primary-200 w-full max-w-xs">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="text-right ml-4 text-white font-medium">
                  9:00 AM - 6:00 PM
                </span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-right ml-4 text-white font-medium">
                  10:00 AM - 4:00 PM
                </span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-right ml-4 text-accent-400 font-medium">
                  Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="mt-8 md:flex md:items-center md:justify-between">
          <div className="text-sm text-primary-300">
            <p className="font-semibold text-white">
              © 2024 Trayan Corporation. All rights reserved.
            </p>
            <p className="mt-2">Chemical Trading & Manufacturing Solutions</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-center text-sm text-primary-300">
              <Link
                href="/privacy"
                className="hover:text-accent-300 transition-colors duration-300 font-medium"
              >
                Privacy Policy
              </Link>
              <span className="mx-2 text-primary-600">•</span>
              <Link
                href="/terms"
                className="hover:text-accent-300 transition-colors duration-300 font-medium"
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
