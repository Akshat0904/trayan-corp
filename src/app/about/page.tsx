"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBuilding, FaFlask, FaTruck, FaUserTie } from "react-icons/fa";
import SEO from "@/components/SEO";

const AboutPage = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const services = [
    {
      icon: FaFlask,
      title: "Wide Range of Chemicals",
      description:
        "From basic industrial chemicals to specialized compounds, we offer a comprehensive catalog to support multiple industries.",
    },
    {
      icon: FaTruck,
      title: "Reliable Supply Chain",
      description:
        "Through our robust network and logistics expertise, we ensure prompt and secure delivery.",
    },
    {
      icon: FaUserTie,
      title: "Tailored Solutions",
      description:
        "We understand that every client is unique. That's why we offer customized solutions to match your operational needs.",
    },
    {
      icon: FaBuilding,
      title: "In-House Manufacturing",
      description:
        "Our Talod GIDC facility adds a layer of flexibility and quality assurance to our offerings.",
    },
  ];

  return (
    <div className="bg-white">
      <SEO
        title="About Trayan Corporation | Your Chemical Trading Partner"
        description="Learn about Trayan Corporation - your trusted partner in chemical trading and manufacturing with years of experience serving industries worldwide."
        canonical="/about"
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
                name: "About Us",
                item: "https://trayancorp.com/about",
              },
            ],
          },
        }}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Trayan Corporation
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl leading-relaxed"
          >
            Your trusted partner in chemical merchandise since many years,
            delivering quality products and solutions to businesses worldwide.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Welcome to Trayan Corporation, where our head office is situated
                in Ahmedabad. We are your trusted partner for chemical
                merchandise, with a substantial background in the chemical
                industry spanning many years.
              </p>
              <p>
                We specialize in sourcing, supplying and distributing a wide
                range of chemicals to meet your unique business needs. Our
                commitment to quality, reliability, and sustainability sets us
                apart in this dynamic industry.
              </p>
              <p>
                In addition to our strong distribution network, we operate our
                own manufacturing facility at Talod GIDC, allowing us to deliver
                both standard and customized products with greater efficiency
                and control.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="relative h-80 md:h-[400px] rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-primary-50 to-primary-100">
              <div className="absolute inset-0 bg-grid-primary-200/50 bg-[length:20px_20px]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-xs w-full text-primary-600 flex flex-col items-center justify-center p-8 text-center bg-white/90 rounded-lg shadow-lg backdrop-blur-sm border border-primary-200">
                  <div className="mb-4 p-3 bg-primary-50 rounded-full">
                    <FaFlask className="text-4xl text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-800">
                    Our Manufacturing Facility
                  </h3>
                  <p className="text-sm text-primary-600 mt-3">
                    Talod GIDC, Gujarat
                  </p>
                  <div className="mt-5 flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-primary-300"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Chemical pattern background */}
              <div className="absolute top-5 right-5 opacity-20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full border-4 border-primary-500 flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                  </div>
                  <div className="w-8 h-8 border-4 border-primary-500"></div>
                </div>
              </div>
              <div className="absolute bottom-5 left-5 opacity-20">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 border-4 border-primary-500 rotate-45"></div>
                  <div className="w-6 h-6 bg-primary-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What We Offer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg hover:border-primary-100 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="text-primary-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision and Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-600"
          >
            <h2 className="text-2xl font-bold text-primary-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To provide high-quality chemical products and solutions to meet
              the diverse needs of our customers while upholding the highest
              standards of safety, sustainability, and ethical business
              practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-600"
          >
            <h2 className="text-2xl font-bold text-primary-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To be the leading global chemical commerce company, recognized for
              our commitment to innovation, customer satisfaction, and
              environmental responsibility. We aim to foster long-term
              partnerships with suppliers and customers, driving mutual growth
              and success in the chemical industry.
            </p>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl p-10 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our chemical solutions can address your
            specific needs and help you achieve your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
