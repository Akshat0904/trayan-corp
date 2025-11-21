"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaFlask,
  FaGlobeAmericas,
  FaUsers,
  FaIndustry,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import SEO from "@/components/SEO";

const Home = () => {
  const containerRef = useRef(null);

  // Add comprehensive meta tags following SEO master template
  useEffect(() => {
    // Set comprehensive meta tags for better SEO
    const metaTags = [
      // Geographic Tags for Local SEO
      { name: "geo.region", content: "IN-GJ" },
      { name: "geo.placename", content: "Ahmedabad, Gujarat" },
      { name: "geo.position", content: "23.1138826;72.5412793" },
      { name: "ICBM", content: "23.1138826, 72.5412793" },

      // Comprehensive Keywords for Maximum Search Visibility
      {
        name: "keywords",
        content:
          "Trayan Corporation, Trayan Corp, Trayan Chemical Corporation, Trayan Chemical Company, chemical trading, chemical manufacturing, chemical suppliers, chemical distributor, chemical solutions, industrial chemicals, chemical business, chemical industry, chemical company, chemical trading company, chemical manufacturing company, chemical supplier company, chemical distributor company, Ahmedabad chemical company, Gujarat chemical company, chemical company Ahmedabad, chemical company Gujarat, chemical suppliers Ahmedabad, chemical suppliers Gujarat, chemical trading Ahmedabad, chemical trading Gujarat, chemical manufacturing Ahmedabad, chemical manufacturing Gujarat, chemical distributor Ahmedabad, chemical distributor Gujarat, industrial chemicals Ahmedabad, industrial chemicals Gujarat, chemical solutions Ahmedabad, chemical solutions Gujarat, Gota chemical company, Jagatpur chemical company, SG Highway chemical company, Skywalk Elements chemical company, chemical company Gota Ahmedabad, chemical company Jagatpur Ahmedabad, chemical company SG Highway Ahmedabad, chemical suppliers near me, chemical company near me, chemical trading company near me, chemical manufacturers near me, chemical distributors near me, 382481 chemical company, chemical company 382481, Ahmedabad chemical suppliers, Gujarat chemical suppliers, Ahmedabad chemical manufacturers, Gujarat chemical manufacturers, Ahmedabad chemical distributors, Gujarat chemical distributors, Ahmedabad industrial chemicals, Gujarat industrial chemicals, West Ahmedabad chemical company, North Ahmedabad chemical company, chemical company west Ahmedabad, chemical company north Ahmedabad, solvents supplier, additives manufacturer, raw materials distributor, chemical raw materials, chemical solvents, chemical additives, industrial solvents, industrial additives, industrial raw materials, chemical export, chemical import, chemical export import, chemical trading business, chemical supply chain, chemical logistics, chemical procurement, chemical sourcing, quality chemicals, reliable chemical supplier, trusted chemical company, leading chemical company, top chemical company, best chemical company, chemical company India, India chemical company, chemical suppliers India, India chemical suppliers, chemical manufacturers India, India chemical manufacturers, chemical distributors India, India chemical distributors, chemical trading India, India chemical trading, chemical solutions India, India chemical solutions, chemical business India, India chemical business, chemical industry India, India chemical industry, Trayan Corporation Ahmedabad, Trayan Corporation Gujarat, Trayan Corporation India, Ahmedabad Trayan Corporation, Gujarat Trayan Corporation, India Trayan Corporation, chemical company founded 2020, established chemical company, experienced chemical company, 5 years experience chemical company, global chemical supplier, international chemical supplier, worldwide chemical supplier, chemical company 10 countries, chemical company 300 products, chemical company 200 partners, pharmaceutical chemicals, textile chemicals, paint chemicals, coating chemicals, plastic chemicals, rubber chemicals, food processing chemicals, agriculture chemicals, manufacturing chemicals, specialty chemicals, bulk chemicals, fine chemicals, organic chemicals, inorganic chemicals, chemical consultation, chemical technical support, chemical quality control, chemical testing, chemical certification, chemical standards, ISO certified chemical company, chemical safety, chemical compliance, chemical regulations, chemical documentation, chemical specifications, chemical data sheets, chemical analysis, chemical research, chemical development, custom chemicals, chemical formulation, chemical blending, chemical processing, chemical packaging, chemical storage, chemical handling, chemical transportation, chemical delivery, chemical supply, chemical inventory, chemical management, Ahmedabad chemical hub, Gujarat chemical zone, chemical park Ahmedabad, chemical cluster Gujarat, GIDC chemical company, industrial area chemical company, chemical company contact, chemical company phone, chemical company email, chemical company address, chemical company location, +91 87809 98478, +91 91063 64185, info@trayancorp.com, 310 Skywalk Elements, Jagatpur off SG Highway, Gota Ahmedabad Gujarat",
      },

      // Robots meta tag
      {
        name: "robots",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },

      // Additional SEO tags
      { name: "author", content: "Trayan Corporation" },
      { name: "publisher", content: "Trayan Corporation" },
      { name: "language", content: "English" },
      { name: "revisit-after", content: "7 days" },

      // Extended Location Keywords for Local SEO
      {
        name: "locality",
        content:
          "Gota, Jagatpur, SG Highway, West Ahmedabad, Bopal, Shela, Science City, Prahlad Nagar",
      },
      { name: "region", content: "Ahmedabad, Gujarat, Western India" },
      { name: "postal-code", content: "382481" },
      { name: "country-name", content: "India" },

      // Business specific tags
      { name: "classification", content: "Chemical Trading, Manufacturing" },
      { name: "category", content: "Chemical Industry" },
      { name: "coverage", content: "Worldwide" },
      { name: "distribution", content: "Global" },
      { name: "rating", content: "General" },

      // Nearby Landmarks and Industrial Areas
      {
        name: "nearby-landmarks",
        content:
          "GIFT City, Gandhinagar, PDEU University, Nirma University, Adani Wilmar, Torrent Power, Reliance Industries, Gujarat Gas, ONGC, IOCL, GSFC",
      },
      {
        name: "industrial-areas",
        content:
          "GIDC Vatva, GIDC Naroda, GIDC Odhav, GIDC Ankleshwar, GIDC Vapi, GIDC Bharuch, Dahej SEZ, Mundra Port, JNPT, Kandla Port",
      },
      {
        name: "business-districts",
        content:
          "SG Highway, CG Road, Ashram Road, Paldi, Navrangpura, Vastrapur, Satellite, Bodakdev, Thaltej, Ambawadi",
      },
    ];

    metaTags.forEach((tag) => {
      let meta = document.querySelector(
        `meta[name="${tag.name}"]`
      ) as HTMLMetaElement;
      if (meta) {
        meta.content = tag.content;
      } else {
        meta = document.createElement("meta");
        meta.name = tag.name;
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Set viewport meta tag if not exists
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement("meta");
      viewport.name = "viewport";
      viewport.content = "width=device-width, initial-scale=1.0";
      document.head.appendChild(viewport);
    }

    // Set charset meta tag if not exists
    if (!document.querySelector("meta[charset]")) {
      const charset = document.createElement("meta");
      charset.setAttribute("charset", "UTF-8");
      document.head.insertBefore(charset, document.head.firstChild);
    }
  }, []);

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

  // const [partnersRef, partnersInView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative" ref={containerRef}>
      <SEO
        title="Trayan Corporation | Chemical Trading & Manufacturing Company | Ahmedabad, Gujarat"
        description="Trayan Corporation - Leading chemical trading and manufacturing company in Ahmedabad, Gujarat, India. Specializing in industrial chemicals, solvents, additives & raw materials. Trusted chemical supplier with 5+ years experience. Call +91 87809 98478"
        canonical="/"
        pageType="website"
        imageUrl="/images/logos/Trayan-blue.jpg"
        structuredData={{
          type: "WebSite",
          data: {
            name: "Trayan Corporation",
            url: "https://trayancorp.com",
          },
        }}
      />

      {/* Enhanced FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Trayan Corporation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Trayan Corporation is a leading chemical trading and manufacturing company based in Ahmedabad, Gujarat, India. Founded in 2020, we specialize in sourcing, supplying, and distributing high-quality chemicals for various industries across India and internationally. Reliable Chemistry - with over 5+ years of experience.",
                },
              },
              {
                "@type": "Question",
                name: "What services does Trayan Corporation offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Trayan Corporation offers comprehensive chemical trading services, manufacturing solutions, technical support, and quality control services. Our expertise spans across industrial chemicals, solvents, additives, and raw materials. We provide supply chain management, custom chemical solutions, and distribution services to 300+ products across 10+ countries.",
                },
              },
              {
                "@type": "Question",
                name: "Where is Trayan Corporation located?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Trayan Corporation is located at 310 - Skywalk The Elements, Jagatpur, off SG Highway, Gota, Ahmedabad, Gujarat 382481, India. We serve clients across India and internationally from our Ahmedabad headquarters.",
                },
              },
              {
                "@type": "Question",
                name: "How can I contact Trayan Corporation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can contact Trayan Corporation at +91 87809 98478 (customer service) or +91 91063 64185 (sales), or email us at info@trayancorp.com. Our business hours are Monday to Saturday, 9:00 AM to 6:00 PM IST. Visit our contact page for more details.",
                },
              },
              {
                "@type": "Question",
                name: "What industries does Trayan Corporation serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Trayan Corporation serves various industries including pharmaceuticals, textiles, paints & coatings, plastics, rubber, food processing, agriculture, and manufacturing. We provide specialized chemical solutions tailored to each industry's specific requirements.",
                },
              },
              {
                "@type": "Question",
                name: "What makes Trayan Corporation different from other chemical companies?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Trayan Corporation stands out with our commitment to quality assurance, global and domestic network of 200+ partners, expert technical support, and personalized consultation services. We maintain the highest standards in chemical quality and safety with rigorous testing and certification processes.",
                },
              },
            ],
          }),
        }}
      />

      {/* BreadcrumbList Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://trayancorp.com/",
              },
            ],
          }),
        }}
      />

      {/* Hero Section - Redesigned */}
      <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Floating chemical molecules decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-32 h-32 border-2 border-primary-400/20 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              x: [0, 10, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-20 w-24 h-24 border-2 border-primary-300/20 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 left-1/4 w-40 h-40 border-2 border-primary-500/20 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary-400/10 rounded-full blur-xl"
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-700/50 backdrop-blur-sm border border-primary-400/30 text-primary-200 text-sm font-medium">
                  <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
                  Chemical Solutions Provider
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Reliable Chemistry
                <span className="block mt-2 bg-gradient-to-r from-primary-300 via-primary-200 to-accent-300 bg-clip-text text-transparent">
                  Trading & Manufacturing
                </span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-primary-100 mb-8 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Sourcing, supplying, and distributing high-quality industrial
                chemicals, solvents, and raw materials for various industries
                across India and internationally since 2020.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Link
                  href="/products"
                  className="group relative px-8 py-4 bg-white text-primary-900 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Products
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  href="/contact"
                  className="group px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-2"
                >
                  Contact Us
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-12 flex flex-wrap items-center gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3.5 rounded-xl border border-accent-400/30 hover:border-accent-400/60 hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-accent-400/20"
                >
                  <div className="w-10 h-10 bg-accent-400/20 rounded-lg flex items-center justify-center">
                    <FaShieldAlt className="text-accent-400 text-lg" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">5+ Years</div>
                    <div className="text-accent-200 text-xs">
                      Industry Experience
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3.5 rounded-xl border border-primary-400/30 hover:border-primary-400/60 hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-primary-400/20"
                >
                  <div className="w-10 h-10 bg-primary-400/20 rounded-lg flex items-center justify-center">
                    <FaIndustry className="text-primary-300 text-lg" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">
                      Talod GIDC
                    </div>
                    <div className="text-primary-200 text-xs">
                      Manufacturing Facility
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3.5 rounded-xl border border-secondary-400/30 hover:border-secondary-400/60 hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-secondary-400/20"
                >
                  <div className="w-10 h-10 bg-secondary-400/20 rounded-lg flex items-center justify-center">
                    <FaUsers className="text-secondary-300 text-lg" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">
                      Expert Support
                    </div>
                    <div className="text-secondary-200 text-xs">
                      Technical Assistance
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <div className="relative w-full h-[600px]">
                {/* Main card - Product Categories */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "reverse",
                  }}
                  className="absolute top-0 right-0 w-80 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-8 hover:border-white/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-accent-400/20 rounded-lg flex items-center justify-center">
                      <FaFlask className="text-2xl text-accent-300" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-base">
                        Product Range
                      </div>
                      <div className="text-accent-200 text-sm">
                        300+ Chemicals
                      </div>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-sm font-medium">
                          Solvents & Additives
                        </span>
                        <span className="text-accent-300 text-xs font-bold bg-accent-400/10 px-2 py-0.5 rounded">
                          120+
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{
                            delay: 1.5,
                            duration: 1.2,
                            ease: "easeOut",
                          }}
                          className="h-full bg-gradient-to-r from-accent-500 to-accent-400 rounded-full"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-sm font-medium">
                          Specialty Chemicals
                        </span>
                        <span className="text-primary-300 text-xs font-bold bg-primary-400/10 px-2 py-0.5 rounded">
                          100+
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "70%" }}
                          transition={{
                            delay: 1.7,
                            duration: 1.2,
                            ease: "easeOut",
                          }}
                          className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-sm font-medium">
                          Industrial Raw Materials
                        </span>
                        <span className="text-secondary-300 text-xs font-bold bg-secondary-400/10 px-2 py-0.5 rounded">
                          80+
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "60%" }}
                          transition={{
                            delay: 1.9,
                            duration: 1.2,
                            ease: "easeOut",
                          }}
                          className="h-full bg-gradient-to-r from-secondary-500 to-secondary-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Secondary card - Quality & Certifications */}
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                  className="absolute bottom-0 left-0 w-80 bg-gradient-to-br from-primary-800/90 to-primary-900/90 backdrop-blur-sm rounded-2xl border border-primary-600/30 shadow-2xl p-7 hover:border-primary-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center border border-accent-500/30">
                      <svg
                        className="w-7 h-7 text-accent-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">
                        Quality Assurance
                      </div>
                      <div className="text-accent-300 text-sm font-medium">
                        Certified Excellence
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        title: "ISO 9001:2015",
                        subtitle: "Quality Management",
                        icon: (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        ),
                      },
                      {
                        title: "GMP Compliant",
                        subtitle: "Manufacturing Standards",
                        icon: (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        ),
                      },
                      {
                        title: "Lab Tested",
                        subtitle: "100% Quality Check",
                        icon: (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                            />
                          </svg>
                        ),
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 1.8 + i * 0.15,
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                        className="flex items-center gap-3 p-3.5 bg-primary-700/40 rounded-xl border border-primary-600/20 hover:bg-primary-700/60 hover:border-primary-500/30 transition-all duration-300 cursor-pointer"
                      >
                        <div className="w-11 h-11 bg-accent-500/15 rounded-lg flex items-center justify-center text-accent-400 flex-shrink-0 border border-accent-500/20">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-sm font-bold">
                            {item.title}
                          </div>
                          <div className="text-gray-300 text-xs font-medium">
                            {item.subtitle}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Floating badge - Changed to Products */}
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/3 -left-8 bg-accent-400 text-primary-900 px-6 py-3 rounded-full font-bold shadow-xl"
                >
                  300+ Products
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section - Redesigned */}
      <motion.div
        ref={statsRef}
        className="relative bg-white py-24 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent opacity-50"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <motion.div
              custom={0}
              variants={fadeInUpVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
                Our Impact
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Trusted by companies
                <span className="block text-primary-600">
                  worldwide & domestically
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 5 years of excellence in chemical trading and
                manufacturing, we&apos;ve built a reputation for quality,
                reliability, and innovation across the globe.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all duration-300"
              >
                Learn more about us
                <span>→</span>
              </Link>
            </motion.div>

            {/* Right side - Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  number: "5+",
                  label: "Years Experience",
                  icon: FaChartLine,
                  color: "from-blue-500 to-primary-600",
                },
                {
                  number: "300+",
                  label: "Products Delivered",
                  icon: FaFlask,
                  color: "from-accent-500 to-accent-600",
                },
                {
                  number: "10+",
                  label: "Countries Reached",
                  icon: FaGlobeAmericas,
                  color: "from-secondary-500 to-secondary-600",
                },
                {
                  number: "200+",
                  label: "Global & Domestic Partners",
                  icon: FaIndustry,
                  color: "from-primary-500 to-primary-700",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  custom={index + 1}
                  variants={fadeInUpVariants}
                  initial="hidden"
                  animate={statsInView ? "visible" : "hidden"}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                  ></div>

                  <div className="relative">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}
                    >
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Site Navigation Section for SEO */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore Our Website
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Discover all aspects of our chemical trading and manufacturing
              services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <Link
                  href="/about"
                  className="hover:text-primary-600 transition-colors"
                >
                  About Trayan Corporation
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn about our journey, vision, and commitment to quality in
                chemical trading since 2020.
              </p>
              <Link
                href="/about"
                className="text-primary-600 hover:text-primary-700 text-sm font-medium group flex items-center"
              >
                Read Our Story
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <Link
                  href="/products"
                  className="hover:text-primary-600 transition-colors"
                >
                  Chemical Products Catalog
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Browse our comprehensive range of 300+ chemical products for
                various industries.
              </p>
              <Link
                href="/products"
                className="text-primary-600 hover:text-primary-700 text-sm font-medium group flex items-center"
              >
                View Products
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <Link
                  href="/business"
                  className="hover:text-primary-600 transition-colors"
                >
                  Business Services
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Discover our chemical trading, manufacturing, and technical
                support services.
              </p>
              <Link
                href="/business"
                className="text-primary-600 hover:text-primary-700 text-sm font-medium group flex items-center"
              >
                Our Services
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <Link
                  href="/contact"
                  className="hover:text-primary-600 transition-colors"
                >
                  Contact Information
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Get in touch with our team in Ahmedabad for inquiries and
                quotes.
              </p>
              <Link
                href="/contact"
                className="text-primary-600 hover:text-primary-700 text-sm font-medium group flex items-center"
              >
                Contact Us
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <Link
                  href="/privacy"
                  className="hover:text-primary-600 transition-colors"
                >
                  Privacy & Legal
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Review our privacy policy and terms of service for transparency.
              </p>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/privacy"
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium group flex items-center"
                >
                  Privacy Policy
                  <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  href="/terms"
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium group flex items-center"
                >
                  Terms of Service
                  <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-primary-50 border border-primary-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-primary-800 mb-3">
                Quick Access
              </h3>
              <p className="text-primary-700 text-sm mb-4">
                Fast links to important information and resources.
              </p>
              <div className="flex flex-col space-y-2">
                <a
                  href="tel:+918780998478"
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium group flex items-center"
                >
                  Call +91 87809 98478
                  <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="mailto:info@trayancorp.com"
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium group flex items-center"
                >
                  Email Us
                  <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section - Redesigned */}
      <motion.div
        ref={featuresRef}
        className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <motion.div
              custom={0}
              variants={fadeInUpVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary-600 text-white text-sm font-semibold mb-4">
                Why Choose Us
              </span>
            </motion.div>
            <motion.h2
              custom={1}
              variants={fadeInUpVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Your Trusted
              <span className="block bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Chemical Partner
              </span>
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeInUpVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              className="text-lg text-gray-600 leading-relaxed"
            >
              We combine industry expertise with advanced technology to deliver
              exceptional chemical products and solutions tailored to your
              specific needs.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                custom={index + 3}
                variants={fadeInUpVariants}
                initial="hidden"
                animate={featuresInView ? "visible" : "hidden"}
                whileHover={{ y: -12 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon with animated ring */}
                  <div className="relative mb-6">
                    <div className="relative inline-flex">
                      <div className="absolute inset-0 bg-primary-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg">
                        <feature.icon className="h-8 w-8" aria-hidden="true" />
                      </div>
                    </div>
                    {/* Decorative corner element */}
                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-accent-200 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* Learn more link */}
                    <Link
                      href={feature.href}
                      className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all duration-300"
                    >
                      Learn more
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-600 to-accent-500 group-hover:w-full transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Partners Section */}
      {/* <motion.div ref={partnersRef} className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            custom={0}
            variants={fadeInUpVariants}
            initial="hidden"
            animate={partnersInView ? "visible" : "hidden"}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">
              Reliable Partners
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
      </motion.div> */}

      {/* Testimonials Section */}
      {/* <Testimonials /> */}

      {/* CTA Section - Redesigned */}
      <motion.div ref={ctaRef} className="relative py-24 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900"></div>

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
              y: [0, -30, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 40, 0],
              rotate: [0, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              custom={0}
              variants={fadeInUpVariants}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent-400/20 border border-accent-400/30 text-accent-300 text-sm font-semibold mb-6">
                Get Started Today
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your
                <span className="block bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
                  Chemical Experience?
                </span>
              </h2>
              <p className="text-lg text-primary-100 mb-8 leading-relaxed">
                Let&apos;s discuss how our chemical solutions can address your
                specific needs and help you achieve your business goals.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-white text-primary-900 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden inline-flex items-center gap-2"
                >
                  <span className="relative z-10">Contact Us Today</span>
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  href="/products"
                  className="group px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 inline-flex items-center gap-2"
                >
                  Browse Products
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              {/* Contact info */}
              <motion.div
                custom={1}
                variants={fadeInUpVariants}
                initial="hidden"
                animate={ctaInView ? "visible" : "hidden"}
                className="mt-8 flex flex-wrap gap-6 text-primary-200"
              >
                <a
                  href="tel:+918780998478"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span className="text-accent-400">📞</span>
                  <span>+91 87809 98478</span>
                </a>
                <a
                  href="mailto:info@trayancorp.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span className="text-accent-400">✉️</span>
                  <span>info@trayancorp.com</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right side - Visual element */}
            <motion.div
              custom={2}
              variants={fadeInUpVariants}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              className="hidden lg:block relative"
            >
              <div className="relative">
                {/* Main feature card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300">
                  <h3 className="text-white font-bold text-lg mb-6">
                    Why Choose Trayan?
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaChartLine className="text-accent-300 text-xl" />
                      </div>
                      <div>
                        <div className="text-white font-semibold mb-1">
                          Competitive Pricing
                        </div>
                        <div className="text-primary-200 text-sm">
                          Best rates with flexible payment terms
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaIndustry className="text-primary-300 text-xl" />
                      </div>
                      <div>
                        <div className="text-white font-semibold mb-1">
                          Custom Manufacturing
                        </div>
                        <div className="text-primary-200 text-sm">
                          Tailored solutions at our Talod facility
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaUsers className="text-secondary-300 text-xl" />
                      </div>
                      <div>
                        <div className="text-white font-semibold mb-1">
                          Dedicated Support
                        </div>
                        <div className="text-primary-200 text-sm">
                          Expert guidance from inquiry to delivery
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-accent-400 to-accent-500 text-primary-900 px-6 py-3 rounded-full font-bold shadow-xl"
                >
                  Reliable Chemistry
                </motion.div>
              </div>
            </motion.div>
          </div>
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
    href: "/about",
  },
  {
    name: "Global and Domestic Network",
    description:
      "Our extensive network of suppliers and clients worldwide and domestically enables us to provide reliable supply chains and competitive pricing for all your chemical needs.",
    icon: FaGlobeAmericas,
    href: "/about",
  },
  {
    name: "Expert Support",
    description:
      "Our dedicated team of chemical experts provides personalized consultation and technical assistance to help you find the perfect solution for your requirements.",
    icon: FaUsers,
    href: "/about",
  },
];

export default Home;
