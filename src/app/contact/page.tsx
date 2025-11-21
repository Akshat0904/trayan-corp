"use client";

import { motion } from "framer-motion";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { useEnquiry } from "@/contexts/EnquiryContext";
import SEO from "@/components/SEO";

const Contact = () => {
  const { openModal } = useEnquiry();

  return (
    <div>
      <SEO
        title="Contact Us - Chemical Trading Company in Ahmedabad | Trayan Corporation"
        description="Get in touch with Trayan Corporation for inquiries about our chemical products and services. Located in Ahmedabad, Gujarat, we're here to help with your chemical trading needs across India."
        canonical="/contact"
        structuredData={{
          type: "BreadcrumbList",
          data: {
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://trayancorp.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact Us",
                item: "https://trayancorp.com/contact",
              },
            ],
          },
        }}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        {/* Animated pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        {/* Floating shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-48 h-48 bg-primary-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-20 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent-400/20 border border-accent-400/30 text-accent-300 text-sm font-semibold mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl leading-relaxed">
              Have questions or need assistance? Our team is ready to help you
              with any inquiries about our products and services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Reach out to us through any of these channels or send us an
              enquiry
            </p>
            <div className="mt-8">
              <button
                onClick={() => openModal("contact")}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-md text-base font-semibold shadow-soft transition-all duration-300 hover:shadow-glow"
              >
                Send Enquiry
              </button>
            </div>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-y-8"
            >
              <div className="flex items-center gap-x-4">
                <PhoneIcon className="h-6 w-6 text-blue-600" />
                <a
                  href="tel:+1234567890"
                  className="text-lg font-semibold text-gray-900 hover:text-blue-600"
                >
                  +91 87809 98478 / +91 91063 64185
                </a>
              </div>
              <div className="flex items-center gap-x-4">
                <EnvelopeIcon className="h-6 w-6 text-blue-600" />
                <a
                  href="mailto:info@trayancorp.com"
                  className="text-lg font-semibold text-gray-900 hover:text-blue-600"
                >
                  info@trayancorp.com
                </a>
              </div>
              <div className="flex items-center gap-x-4">
                <MapPinIcon className="h-6 w-6 text-blue-600" />
                <p className="text-md font-semibold text-gray-900">
                  310 - Skywalk The Elements, Jagatpur, off SG Highway, Gota,
                  Ahmedabad, Gujarat 382481
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] w-full overflow-hidden rounded-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.541273080122!2d72.5412793!3d23.113882600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e833857652dc5%3A0xf8b42b54a20cb61a!2sTrayan%20Corporation!5e0!3m2!1sen!2sin!4v1748092831365!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
