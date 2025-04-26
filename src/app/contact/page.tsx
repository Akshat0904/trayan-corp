"use client";

import { motion } from "framer-motion";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Get in touch with our team
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
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
                +1 (234) 567-890
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
              <p className="text-lg font-semibold text-gray-900">
                123 Chemical Street, Industrial Zone, City, Country
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043087964!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
