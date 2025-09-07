"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const PrivacyPolicyPage = () => {
  // Enhanced Privacy Policy SEO meta implementation
  useEffect(() => {
    const metaTags = [
      // Privacy Policy Specific Keywords
      {
        name: "keywords",
        content:
          "Trayan Corporation privacy policy, chemical company data protection, privacy statement Ahmedabad, GDPR compliance chemical industry, data security Trayan Corp, personal information protection, chemical trading privacy, industrial chemicals data policy, privacy notice Gujarat, chemical supplier data protection, confidentiality policy, information security chemical company, data handling procedures, privacy rights chemical industry, cookie policy chemical trading",
      },

      // Page Classification
      {
        name: "page-type",
        content: "Privacy Policy, Legal Document, Data Protection",
      },
      {
        name: "content-type",
        content: "Legal Information, Privacy Statement, Corporate Policy",
      },
      {
        name: "document-type",
        content: "Privacy Policy, Data Protection Notice",
      },

      // Legal and Compliance Tags
      {
        name: "compliance",
        content: "GDPR, Data Protection Act, Privacy Laws India",
      },
      {
        name: "legal-document",
        content: "Privacy Policy, Data Protection Statement",
      },
      { name: "jurisdiction", content: "India, Gujarat, Ahmedabad" },
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Privacy Policy - Trayan Corporation | Chemical Trading Company Ahmedabad"
        description="Privacy Policy for Trayan Corporation - Leading chemical trading and manufacturing company in Ahmedabad, Gujarat. Learn how we protect your personal information and data privacy in accordance with applicable laws and regulations."
        canonical="/privacy"
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
                name: "Privacy Policy",
                item: "https://trayancorp.com/privacy",
              },
            ],
          },
        }}
      />

      {/* Legal Document Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://trayancorp.com/privacy#webpage",
            name: "Privacy Policy - Trayan Corporation",
            description:
              "Privacy Policy and Data Protection Statement for Trayan Corporation",
            url: "https://trayancorp.com/privacy",
            datePublished: "2020-01-01T00:00:00+05:30",
            dateModified: new Date().toISOString(),
            inLanguage: "en-US",
            isPartOf: {
              "@type": "WebSite",
              name: "Trayan Corporation",
              url: "https://trayancorp.com",
            },
            author: {
              "@type": "Organization",
              name: "Trayan Corporation",
              url: "https://trayancorp.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Trayan Corporation",
              url: "https://trayancorp.com",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-90"
          >
            How Trayan Corporation protects your personal information and data
            privacy
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong>{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <p className="text-lg text-gray-700 mb-8">
              At Trayan Corporation, we are committed to protecting your privacy
              and personal information. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or engage with our chemical trading and
              manufacturing services.
            </p>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Personal Information
            </h3>
            <p className="text-gray-700 mb-4">
              We may collect personal information that you voluntarily provide
              to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>
                Name and contact information (email address, phone number,
                postal address)
              </li>
              <li>Company name and business information</li>
              <li>Product inquiries and specifications</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Technical Information
            </h3>
            <p className="text-gray-700 mb-4">
              We automatically collect certain technical information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>
                Provide and maintain our chemical trading and manufacturing
                services
              </li>
              <li>Process and respond to your inquiries and requests</li>
              <li>
                Send you product information, quotes, and business
                communications
              </li>
              <li>Improve our website functionality and user experience</li>
              <li>Comply with legal obligations and regulatory requirements</li>
              <li>Protect against fraud and ensure website security</li>
            </ul>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Information Sharing and Disclosure
            </h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>
                With trusted business partners who assist in providing our
                services
              </li>
              <li>When required by law or to comply with legal processes</li>
              <li>
                To protect our rights, property, or safety, or that of others
              </li>
              <li>In connection with a business transfer or acquisition</li>
              <li>With your explicit consent</li>
            </ul>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method
              of transmission over the internet or electronic storage is 100%
              secure.
            </p>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Your Rights
            </h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>
                Right to access and receive a copy of your personal information
              </li>
              <li>Right to rectify inaccurate or incomplete information</li>
              <li>Right to request deletion of your personal information</li>
              <li>Right to restrict processing of your information</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent at any time</li>
            </ul>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Cookies Policy
            </h2>
            <p className="text-gray-700 mb-6">
              Our website uses cookies to enhance your browsing experience,
              analyze website traffic, and personalize content. You can control
              cookie preferences through your browser settings, though this may
              affect website functionality.
            </p>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. International Data Transfers
            </h2>
            <p className="text-gray-700 mb-6">
              As a chemical trading company serving multiple countries, your
              information may be transferred to and processed in countries other
              than your own. We ensure appropriate safeguards are in place for
              such transfers.
            </p>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or wish to
              exercise your rights, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">
                Trayan Corporation
              </p>
              <p className="text-gray-700">
                310 - Skywalk The Elements, Jagatpur, off SG Highway, Gota
              </p>
              <p className="text-gray-700">Ahmedabad, Gujarat 382481, India</p>
              <p className="text-gray-700 mt-2">
                <strong>Email:</strong> info@trayancorp.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91 87809 98478 / +91 91063 64185
              </p>
            </div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Changes to This Policy
            </h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &ldquo;Last Updated&rdquo; date. We
              encourage you to review this Privacy Policy periodically for any
              changes.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
