"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBuilding, FaFlask, FaTruck, FaUserTie } from "react-icons/fa";
import SEO from "@/components/SEO";

const AboutPage = () => {
  // Enhanced About Page SEO meta implementation
  React.useEffect(() => {
    const metaTags = [
      // About Page Specific Keywords
      {
        name: "keywords",
        content:
          "About Trayan Corporation, chemical company history Ahmedabad, chemical trading company founded 2020, Gujarat chemical manufacturer, industrial chemicals supplier background, chemical business Ahmedabad Gujarat, Trayan Corp company profile, chemical solutions provider India, established chemical trading company, experienced chemical manufacturer Ahmedabad, chemical industry expertise Gujarat, Talod GIDC manufacturing facility, chemical supply chain management, quality chemical supplier, reliable chemistry, ISO certified chemical company, chemical trading license, import export chemical business, Skywalk Elements chemical company, Gota Ahmedabad chemical trading, SG Highway chemical supplier, company story chemical industry, chemical business journey, chemical manufacturing expertise, industrial chemical experience, chemical trading background, Ahmedabad chemical company profile, Gujarat chemical business history, chemical industry leaders, chemical solutions experience",
      },

      // About Page Classification
      {
        name: "page-type",
        content: "About Page, Company Profile, Corporate Information",
      },
      {
        name: "content-type",
        content: "Company History, Business Profile, Corporate About",
      },
      {
        name: "page-topic",
        content:
          "Chemical Company Background, Business History, Corporate Profile",
      },

      // About Page Local SEO
      {
        name: "local-business-about",
        content:
          "Ahmedabad chemical company established 2020, Gujarat chemical manufacturer profile, Gota chemical trading company",
      },
      { name: "company-founding", content: "2020, Ahmedabad, Gujarat, India" },
      {
        name: "business-experience",
        content:
          "5+ years chemical trading, manufacturing expertise, industrial chemicals",
      },

      // Manufacturing Facility Information
      { name: "manufacturing-location", content: "Talod GIDC, Gujarat, India" },
      {
        name: "facility-type",
        content: "Chemical Manufacturing, Processing, Custom Solutions",
      },
      {
        name: "manufacturing-capabilities",
        content: "Standard chemicals, customized products, quality control",
      },

      // Business Credentials
      {
        name: "certifications",
        content:
          "ISO 9001:2015 Certified, Chemical Trading License, Import Export License",
      },
      {
        name: "business-model",
        content:
          "B2B Chemical Trading, Manufacturing, Distribution, Custom Solutions",
      },
      {
        name: "service-commitment",
        content: "Quality, Reliability, Sustainability, Customer Satisfaction",
      },

      // Industry Expertise Tags
      {
        name: "chemical-expertise",
        content:
          "Industrial chemicals, solvents, additives, raw materials, specialty chemicals, bulk chemicals",
      },
      {
        name: "industry-experience",
        content:
          "Pharmaceuticals, textiles, paints, coatings, plastics, rubber, food processing, agriculture",
      },
      {
        name: "business-scope",
        content:
          "India, International, 10+ countries, 300+ products, 200+ partners",
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
  }, []);

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
        title="About Trayan Corporation - Leading Chemical Trading & Manufacturing Company | Ahmedabad, Gujarat"
        description="Discover Trayan Corporation's journey as a premier chemical trading and manufacturing company in Ahmedabad, Gujarat. Founded in 2020, serving 10+ countries with 300+ products, 200+ partners. ISO certified chemical supplier with 5+ years expertise in industrial chemicals, solvents, additives. Contact: +91 87809 98478"
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

      {/* Enhanced About Page Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://trayancorp.com/about#aboutpage",
            name: "About Trayan Corporation",
            description:
              "Learn about Trayan Corporation - leading chemical trading and manufacturing company in Ahmedabad, Gujarat, India since 2020",
            url: "https://trayancorp.com/about",
            mainEntity: {
              "@type": "Corporation",
              "@id": "https://trayancorp.com/#corporation",
              name: "Trayan Corporation",
              legalName: "Trayan Corporation Private Limited",
              foundingDate: "2020-01-01",
              foundingLocation: {
                "@type": "Place",
                name: "Ahmedabad, Gujarat, India",
              },
              description:
                "Trayan Corporation is a leading chemical trading and manufacturing company specializing in industrial chemicals, solvents, additives, and raw materials for various industries across India and internationally.",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                minValue: 10,
                maxValue: 50,
              },
              knowsAbout: [
                "Chemical Trading",
                "Chemical Manufacturing",
                "Industrial Chemicals",
                "Chemical Distribution",
              ],
              location: {
                "@type": "Place",
                name: "Ahmedabad, Gujarat, India",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "310 - Skywalk The Elements, Jagatpur, off SG Highway, Gota",
                  addressLocality: "Ahmedabad",
                  addressRegion: "Gujarat",
                  postalCode: "382481",
                  addressCountry: "India",
                },
              },

              award: [
                "ISO 9001:2015 Certified",
                "Chemical Trading License",
                "Import Export License",
              ],
              slogan: "Reliable Chemistry",
            },
          }),
        }}
      />

      {/* Company History Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": "https://trayancorp.com/about#company-story",
            headline: "Our Story - Trayan Corporation Journey",
            description:
              "The journey of Trayan Corporation from its founding in 2020 to becoming a leading chemical trading and manufacturing company in Ahmedabad, Gujarat",
            author: {
              "@type": "Organization",
              name: "Trayan Corporation",
              url: "https://trayancorp.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Trayan Corporation",
              url: "https://trayancorp.com",
              logo: {
                "@type": "ImageObject",
                url: "https://trayancorp.com/images/logos/Trayan-blue.jpg",
                width: 400,
                height: 400,
              },
            },
            datePublished: "2020-01-01T00:00:00+05:30",
            dateModified: new Date().toISOString(),
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://trayancorp.com/about",
            },
            image: {
              "@type": "ImageObject",
              url: "https://trayancorp.com/images/logos/Trayan-blue.jpg",
              width: 400,
              height: 400,
            },
            articleBody:
              "Welcome to Trayan Corporation, where our head office is situated in Ahmedabad. We are your trusted partner for chemical merchandise, with a substantial background in the chemical industry spanning many years. We specialize in sourcing, supplying and distributing a wide range of chemicals to meet your unique business needs. Our commitment to quality, reliability, and sustainability sets us apart in this dynamic industry. In addition to our strong distribution network, we operate our own manufacturing facility at Talod GIDC, allowing us to deliver both standard and customized products with greater efficiency and control.",
          }),
        }}
      />

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://trayancorp.com/about#faq",
            mainEntity: [
              {
                "@type": "Question",
                name: "When was Trayan Corporation founded?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Trayan Corporation was founded in 2020 and has since grown to become a leading chemical trading and manufacturing company in Ahmedabad, Gujarat, with over 5 years of experience serving industries across India and internationally.",
                },
              },
              {
                "@type": "Question",
                name: "Where is Trayan Corporation located?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Trayan Corporation is headquartered at 310 - Skywalk The Elements, Jagatpur, off SG Highway, Gota, Ahmedabad, Gujarat 382481. We also operate a manufacturing facility at Talod GIDC, Gujarat.",
                },
              },
              {
                "@type": "Question",
                name: "What makes Trayan Corporation different?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Trayan Corporation stands out with our commitment to quality, reliability, and sustainability. We combine strong distribution networks with in-house manufacturing capabilities at our Talod GIDC facility, allowing us to deliver both standard and customized chemical solutions with greater efficiency and control.",
                },
              },
              {
                "@type": "Question",
                name: "What industries does Trayan Corporation serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We serve various industries including pharmaceuticals, textiles, paints & coatings, plastics, rubber, food processing, agriculture, construction, automotive, and electronics with specialized chemical solutions tailored to each industry's requirements.",
                },
              },
              {
                "@type": "Question",
                name: "What certifications does Trayan Corporation have?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Trayan Corporation is ISO 9001:2015 certified and holds valid Chemical Trading License and Import Export License, ensuring compliance with industry standards and regulations.",
                },
              },
            ],
          }),
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
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
                Trayan Corporation
              </span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl leading-relaxed">
              Reliable Chemistry - delivering quality products and solutions to
              businesses worldwide since many years.
            </p>
          </motion.div>
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
          className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white rounded-xl p-10 text-center"
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
