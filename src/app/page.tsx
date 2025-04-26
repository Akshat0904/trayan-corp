"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaFlask,
  FaGlobeAmericas,
  FaUsers,
  FaIndustry,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    }),
  };

  // Custom Hook for Animations
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [partnersRef, partnersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative" ref={containerRef}>
      {/* Hero Section */}
      <div className="relative h-screen">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-hero-pattern bg-cover bg-center"
        />

        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl px-6 z-10"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <span className="block">Leading in Chemical</span>
              <span className="relative block">
                <span className="bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent">
                  Solutions
                </span>
                <motion.span
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 bg-primary-400"
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>
            </motion.h1>
            <motion.p
              className="mt-8 text-xl leading-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Your trusted partner in chemical trading and manufacturing
              solutions for the global industry
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <Link
                href="/products"
                className="rounded-full bg-primary-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-300"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="text-base font-semibold leading-6 text-white hover:text-primary-300 transition-colors duration-300 group flex items-center"
              >
                Contact Us
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div ref={statsRef} className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h2
              custom={0}
              variants={fadeInUpVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              className="text-base font-semibold leading-7 text-primary-600"
            >
              Our Global Impact
            </motion.h2>
            <motion.p
              custom={1}
              variants={fadeInUpVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Trusted by companies worldwide
            </motion.p>
          </div>

          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "20+", label: "Years Experience", icon: FaChartLine },
              { number: "5000+", label: "Products Delivered", icon: FaFlask },
              {
                number: "50+",
                label: "Countries Reached",
                icon: FaGlobeAmericas,
              },
              { number: "300+", label: "Global Partners", icon: FaIndustry },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                custom={index + 2}
                variants={fadeInUpVariants}
                initial="hidden"
                animate={statsInView ? "visible" : "hidden"}
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-50">
                  <stat.icon className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
                  {stat.number}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div ref={featuresRef} className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              custom={0}
              variants={fadeInUpVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              className="text-base font-semibold leading-7 text-primary-600"
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              custom={1}
              variants={fadeInUpVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Your Trusted Chemical Partner
            </motion.p>
            <motion.p
              custom={2}
              variants={fadeInUpVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              We combine industry expertise with advanced technology to deliver
              exceptional chemical products and solutions tailored to your
              specific needs.
            </motion.p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  custom={index + 3}
                  variants={fadeInUpVariants}
                  initial="hidden"
                  animate={featuresInView ? "visible" : "hidden"}
                  className="flex flex-col rounded-xl p-6 bg-white shadow-soft hover:shadow-hard hover:shadow-glow transition-all duration-300"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <feature.icon
                      className="h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <div className="mt-6">
                      <Link
                        href={feature.href}
                        className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500 group flex items-center"
                      >
                        Learn more{" "}
                        <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </motion.div>

      {/* Partners Section */}
      <motion.div ref={partnersRef} className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            custom={0}
            variants={fadeInUpVariants}
            initial="hidden"
            animate={partnersInView ? "visible" : "hidden"}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">
              Trusted Partners
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Working with Global Leaders
            </p>
          </motion.div>
          <motion.div
            custom={1}
            variants={fadeInUpVariants}
            initial="hidden"
            animate={partnersInView ? "visible" : "hidden"}
            className="mx-auto mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex justify-center">
                <div className="h-16 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 font-medium">
                    Partner {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <motion.div
        ref={ctaRef}
        className="bg-cta-pattern bg-cover py-16 sm:py-24 relative"
      >
        <div className="absolute inset-0 bg-primary-900/80 backdrop-blur-sm"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            custom={0}
            variants={fadeInUpVariants}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Chemical Experience?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Let&apos;s discuss how our chemical solutions can address your
              specific needs and help you achieve your business goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-700 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300"
              >
                Contact Us Today
              </Link>
              <Link
                href="/products"
                className="text-sm font-semibold leading-6 text-white hover:text-primary-200 transition-colors duration-300 group flex items-center"
              >
                Browse Products{" "}
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const features = [
  {
    name: "Quality Assurance",
    description:
      "We maintain the highest standards in chemical quality and safety, with rigorous testing and certification processes to ensure consistent product excellence.",
    icon: FaShieldAlt,
    href: "/about#quality",
  },
  {
    name: "Global Network",
    description:
      "Our extensive network of suppliers and clients worldwide enables us to provide reliable supply chains and competitive pricing for all your chemical needs.",
    icon: FaGlobeAmericas,
    href: "/about#network",
  },
  {
    name: "Expert Support",
    description:
      "Our dedicated team of chemical experts provides personalized consultation and technical assistance to help you find the perfect solution for your requirements.",
    icon: FaUsers,
    href: "/about#support",
  },
];

export default Home;
