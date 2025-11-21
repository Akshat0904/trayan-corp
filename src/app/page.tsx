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
import TrayanLogo from "../../public/images/logos/Trayan-blue.svg";

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
        imageUrl={TrayanLogo}
        structuredData={{
          type: "WebSite",
          data: {
            name: "Trayan Corporation",
            url: "https://trayancorp.com",
          },
        }}
      />

      {/* Enhanced Local Business Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://trayancorp.com/#localbusiness",
            name: "Trayan Corporation",
            alternateName: [
              "Trayan Corp",
              "Trayan Chemical Corporation",
              "Trayan Chemical Company",
              "Trayan Corporation Ahmedabad",
            ],
            description:
              "Trayan Corporation is a leading chemical trading and manufacturing company based in Ahmedabad, Gujarat, India. We specialize in sourcing, supplying, and distributing high-quality industrial chemicals, solvents, additives, and raw materials for various industries across India and internationally.",
            url: "https://trayancorp.com",
            logo: "https://trayancorp.com/images/logos/Tryan-blue.svg",
            image: [
              "https://trayancorp.com/images/logos/Tryan-blue.svg",
              "https://trayancorp.com/images/chemical-industry-hero.jpg",
              "https://trayancorp.com/images/chemicals-lab.jpg",
            ],
            telephone: ["+91 87809 98478", "+91 91063 64185"],
            email: "info@trayancorp.com",
            foundingDate: "2020",
            slogan:
              "Your trusted partner in chemical trading and manufacturing solutions",
            priceRange: "$$",
            currenciesAccepted: ["INR", "USD", "EUR"],
            paymentAccepted: [
              "Bank Transfer",
              "Letter of Credit",
              "Cash",
              "Check",
            ],
            openingHours: "Mo-Sa 09:00-18:00",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "310 - Skywalk The Elements, Jagatpur, off SG Highway, Gota",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              postalCode: "382481",
              addressCountry: {
                "@type": "Country",
                name: "India",
              },
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "23.1138826",
              longitude: "72.5412793",
            },
            hasMap: "https://maps.google.com/?cid=your_google_maps_cid",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91 87809 98478",
                contactType: "customer service",
                areaServed: ["IN", "US", "EU", "ASIA"],
                availableLanguage: ["English", "Hindi", "Gujarati"],
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              },
              {
                "@type": "ContactPoint",
                telephone: "+91 91063 64185",
                contactType: "sales",
                areaServed: ["IN", "US", "EU", "ASIA"],
                availableLanguage: ["English", "Hindi", "Gujarati"],
              },
            ],
            sameAs: [
              "https://www.facebook.com/trayancorp",
              "https://www.linkedin.com/company/trayan-corporation",
              "https://twitter.com/trayancorp",
              "https://www.instagram.com/trayancorp",
            ],
            knowsAbout: [
              "Chemical Trading",
              "Chemical Manufacturing",
              "Industrial Chemicals",
              "Chemical Solvents",
              "Chemical Additives",
              "Raw Materials",
              "Chemical Distribution",
              "Chemical Supply Chain",
              "Chemical Import Export",
              "Chemical Solutions",
              "Pharmaceutical Chemicals",
              "Textile Chemicals",
              "Paint and Coating Chemicals",
              "Plastic and Polymer Chemicals",
              "Rubber Chemicals",
              "Food Grade Chemicals",
              "Agriculture Chemicals",
              "Construction Chemicals",
              "Automotive Chemicals",
              "Electronics Chemicals",
              "Specialty Chemicals",
              "Bulk Chemicals",
              "Fine Chemicals",
              "Organic Chemicals",
              "Inorganic Chemicals",
              "Chemical Processing",
              "Chemical Formulation",
              "Chemical Blending",
              "Chemical Packaging",
              "Chemical Quality Control",
              "Chemical Testing",
              "Chemical Analysis",
              "Chemical Certification",
              "Chemical Compliance",
              "Chemical Safety",
              "Chemical Storage",
              "Chemical Handling",
              "Chemical Transportation",
              "Chemical Logistics",
              "Chemical Procurement",
              "Chemical Sourcing",
              "Chemical Inventory Management",
              "Chemical Supply Chain Management",
              "Chemical Technical Support",
              "Chemical Consultation",
              "Custom Chemical Manufacturing",
              "Chemical Research and Development",
              "Chemical Market Intelligence",
              "Chemical Regulatory Affairs",
            ],
            areaServed: [
              {
                "@type": "Country",
                name: "India",
              },
              {
                "@type": "State",
                name: "Gujarat",
              },
              {
                "@type": "State",
                name: "Rajasthan",
              },
              {
                "@type": "State",
                name: "Maharashtra",
              },
              {
                "@type": "State",
                name: "Madhya Pradesh",
              },
              {
                "@type": "City",
                name: "Ahmedabad",
              },
              {
                "@type": "City",
                name: "Gandhinagar",
              },
              {
                "@type": "City",
                name: "Surat",
              },
              {
                "@type": "City",
                name: "Vadodara",
              },
              {
                "@type": "City",
                name: "Rajkot",
              },
              {
                "@type": "City",
                name: "Bharuch",
              },
              {
                "@type": "City",
                name: "Ankleshwar",
              },
              {
                "@type": "City",
                name: "Vapi",
              },
              {
                "@type": "City",
                name: "Mumbai",
              },
              {
                "@type": "City",
                name: "Pune",
              },
              {
                "@type": "City",
                name: "Delhi",
              },
              {
                "@type": "City",
                name: "Chennai",
              },
              {
                "@type": "City",
                name: "Bangalore",
              },
              {
                "@type": "City",
                name: "Hyderabad",
              },
              {
                "@type": "City",
                name: "Kolkata",
              },
            ],
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: "23.1138826",
                longitude: "72.5412793",
              },
              geoRadius: "50000",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "47",
              bestRating: "5",
              worstRating: "1",
            },
            hasCredential: [
              "ISO 9001:2015 Certified",
              "Chemical Trading License",
              "Import Export License",
            ],
          }),
        }}
      />

      {/* Enhanced Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://trayancorp.com/#organization",
            name: "Trayan Corporation",
            legalName: "Trayan Corporation Private Limited",
            alternateName: ["Trayan Corp", "Trayan Chemical"],
            description:
              "Trayan Corporation is a leading chemical trading and manufacturing company based in Ahmedabad, Gujarat, specializing in sourcing, supplying, and distributing high-quality chemicals for various industries across India and internationally.",
            url: "https://trayancorp.com",
            logo: "https://trayancorp.com/images/logos/Tryan-blue.svg",
            image: "https://trayancorp.com/images/logos/Tryan-blue.svg",
            telephone: "+91 87809 98478",
            email: "info@trayancorp.com",
            foundingDate: "2020",
            numberOfEmployees: {
              "@type": "QuantitativeValue",
              minValue: "10",
              maxValue: "50",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "310 - Skywalk The Elements, Jagatpur, off SG Highway, Gota",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              postalCode: "382481",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "23.1138826",
              longitude: "72.5412793",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91 87809 98478",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi", "Gujarati"],
              },
              {
                "@type": "ContactPoint",
                telephone: "+91 91063 64185",
                contactType: "sales",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi", "Gujarati"],
              },
            ],
            sameAs: [
              "https://www.facebook.com/trayancorp",
              "https://www.linkedin.com/company/trayan-corporation",
              "https://twitter.com/trayancorp",
            ],
            knowsAbout: [
              "Chemical Trading",
              "Chemical Manufacturing",
              "Industrial Chemicals",
              "Chemical Solutions",
              "Chemical Distribution",
            ],
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            makesOffer: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Chemical Trading Services",
                  description:
                    "Professional chemical trading and distribution services",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Chemical Manufacturing",
                  description: "Custom chemical manufacturing and processing",
                },
              },
            ],
          }),
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
                  text: "Trayan Corporation is a leading chemical trading and manufacturing company based in Ahmedabad, Gujarat, India. Founded in 2020, we specialize in sourcing, supplying, and distributing high-quality chemicals for various industries across India and internationally. We serve as a trusted partner for chemical solutions with over 5+ years of experience.",
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

      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("/images/trayan-industry-2.webp")',
            backgroundPosition: "center 100%",
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        ></div>
        <div className="absolute inset-0 bg-primary-900/75 z-0"></div>

        <div className="relative container mx-auto px-4 sm:px-6 z-10 mt-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-3 sm:mb-4"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary-900/40 text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Chemical Solutions Provider
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <span className="block mb-1 sm:mb-2">Leading in</span>
              <span className="relative inline-block">
                <span className="text-primary-300">Chemical Solutions</span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 1 }}
              className="h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent max-w-xs mx-auto mb-6 sm:mb-8"
            />

            <motion.p
              className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-10 max-w-2xl mx-auto py-2 sm:py-3 px-3 sm:px-4 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              Your trusted partner in chemical trading and manufacturing
              solutions for the global industry
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Link
                href="/products"
                className="rounded-md bg-primary-600 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-xl hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-300 border border-primary-500/50 h-10 sm:h-12 flex items-center"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="rounded-md border-2 border-white/80 bg-primary-800/50 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold text-white hover:bg-primary-700/60 hover:border-white transition-colors duration-300 group flex items-center shadow-xl h-10 sm:h-12"
              >
                Contact Us
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-5 sm:bottom-10 left-0 w-full z-20 flex justify-center">
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <div className="w-6 h-10 sm:w-8 sm:h-12 rounded-full border-2 border-white flex items-start justify-center p-1 bg-primary-900/60">
              <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white rounded-full" />
            </div>
          </motion.div>
        </div>
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
              Our Global And Domestic Impact
            </motion.h2>
            <motion.p
              custom={1}
              variants={fadeInUpVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Trusted by companies worldwide and domestically
            </motion.p>
          </div>

          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "5+", label: "Years Experience", icon: FaChartLine },
              { number: "300+", label: "Products Delivered", icon: FaFlask },
              {
                number: "10+",
                label: "Countries Reached",
                icon: FaGlobeAmericas,
              },
              {
                number: "200+",
                label: "Global And Domestic Partners",
                icon: FaIndustry,
              },
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
      </motion.div> */}

      {/* Testimonials Section */}
      {/* <Testimonials /> */}

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
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-4 py-3 text-sm font-semibold text-primary-700 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300"
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
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-white hover:text-primary-200 transition-colors duration-300 group flex items-center"
              >
                Learn About Us{" "}
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/business"
                className="text-sm font-semibold leading-6 text-white hover:text-primary-200 transition-colors duration-300 group flex items-center"
              >
                Our Services{" "}
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
