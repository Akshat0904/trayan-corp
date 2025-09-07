"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const TermsOfServicePage = () => {
  // Enhanced Terms of Service SEO meta implementation
  useEffect(() => {
    const metaTags = [
      // Terms of Service Specific Keywords
      {
        name: "keywords",
        content:
          "Trayan Corporation terms of service, chemical trading terms conditions, terms of use chemical company, legal terms Trayan Corp, chemical supplier terms, service agreement chemical industry, terms and conditions Ahmedabad, chemical trading legal terms, industrial chemicals terms service, business terms chemical company, user agreement chemical supplier, legal conditions Gujarat, chemical services terms, chemical trading agreement, website terms chemical industry",
      },

      // Page Classification
      {
        name: "page-type",
        content: "Terms of Service, Legal Document, Service Agreement",
      },
      {
        name: "content-type",
        content: "Legal Information, Terms and Conditions, Service Terms",
      },
      { name: "document-type", content: "Terms of Service, User Agreement" },

      // Legal and Business Tags
      {
        name: "agreement-type",
        content: "Terms of Service, User Agreement, Service Terms",
      },
      {
        name: "legal-document",
        content: "Terms and Conditions, Service Agreement",
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
        title="Terms of Service - Trayan Corporation | Chemical Trading Terms & Conditions"
        description="Terms of Service for Trayan Corporation - Leading chemical trading and manufacturing company in Ahmedabad, Gujarat. Read our terms and conditions for chemical trading services, website usage, and business agreements."
        canonical="/terms"
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
                name: "Terms of Service",
                item: "https://trayancorp.com/terms",
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
            "@id": "https://trayancorp.com/terms#webpage",
            name: "Terms of Service - Trayan Corporation",
            description:
              "Terms of Service and Conditions for Trayan Corporation chemical trading services",
            url: "https://trayancorp.com/terms",
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
            Terms of Service
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-90"
          >
            Terms and conditions for using Trayan Corporation&apos;s services
            and website
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
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
              the Trayan Corporation website and our chemical trading and
              manufacturing services. By accessing our website or using our
              services, you agree to be bound by these Terms.
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
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 mb-6">
              By accessing and using the Trayan Corporation website and
              services, you accept and agree to be bound by these Terms of
              Service and our Privacy Policy. If you do not agree to these
              Terms, you should not use our website or services.
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
              2. Description of Services
            </h2>
            <p className="text-gray-700 mb-4">
              Trayan Corporation provides chemical trading and manufacturing
              services, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Industrial chemical sourcing and supply</li>
              <li>Chemical manufacturing and processing</li>
              <li>Chemical distribution and logistics</li>
              <li>Technical consultation and support</li>
              <li>Custom chemical solutions</li>
              <li>Quality control and testing services</li>
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
              3. User Responsibilities
            </h2>
            <p className="text-gray-700 mb-4">
              By using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Provide accurate and complete information</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Use our services for lawful business purposes only</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Notify us promptly of any unauthorized use</li>
              <li>Handle chemical products safely and responsibly</li>
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
              4. Chemical Products and Safety
            </h2>
            <p className="text-gray-700 mb-4">
              All chemical products supplied by Trayan Corporation are subject
              to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Industry standard quality control measures</li>
              <li>Proper packaging and labeling requirements</li>
              <li>Safety data sheets (SDS) and documentation</li>
              <li>Compliance with applicable regulatory standards</li>
              <li>Transportation and handling guidelines</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Customers are responsible for proper handling, storage, and use of
              chemical products in accordance with provided documentation and
              applicable safety regulations.
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
              5. Orders and Payments
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Order Process
            </h3>
            <p className="text-gray-700 mb-4">
              All orders are subject to acceptance by Trayan Corporation. We
              reserve the right to refuse or cancel orders for any reason,
              including product availability, credit approval, or regulatory
              compliance requirements.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Payment Terms
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Payment terms are specified in individual quotations</li>
              <li>
                Accepted payment methods include bank transfer, letter of credit
              </li>
              <li>All prices are subject to change without notice</li>
              <li>
                Additional charges may apply for expedited delivery or special
                handling
              </li>
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
              6. Delivery and Risk of Loss
            </h2>
            <p className="text-gray-700 mb-4">
              Delivery terms are specified in individual purchase agreements.
              Unless otherwise agreed:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>
                Risk of loss passes to the buyer upon delivery to the carrier
              </li>
              <li>Delivery dates are estimates and not guaranteed</li>
              <li>
                Trayan Corporation is not liable for delays beyond our
                reasonable control
              </li>
              <li>
                Special handling or storage requirements may incur additional
                charges
              </li>
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
              7. Warranties and Disclaimers
            </h2>
            <p className="text-gray-700 mb-4">
              Trayan Corporation warrants that products will conform to agreed
              specifications at time of delivery. EXCEPT AS EXPRESSLY SET FORTH
              HEREIN, WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
              WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
            </p>
            <p className="text-gray-700 mb-6">
              Our liability is limited to replacement of non-conforming products
              or refund of purchase price, at our option.
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
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-6">
              IN NO EVENT SHALL TRAYAN CORPORATION BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
              LOST PROFITS, ARISING FROM OR RELATING TO THESE TERMS OR OUR
              SERVICES, REGARDLESS OF THE LEGAL THEORY AND WHETHER OR NOT WE
              HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
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
              9. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-6">
              All content on this website, including text, graphics, logos,
              images, and software, is the property of Trayan Corporation or its
              licensors and is protected by copyright, trademark, and other
              intellectual property laws. You may not use, reproduce, or
              distribute any content without our express written permission.
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
              10. Governing Law and Disputes
            </h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising from these Terms or our
              services shall be resolved through:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Good faith negotiations between the parties</li>
              <li>Mediation if negotiations fail</li>
              <li>Arbitration or courts in Ahmedabad, Gujarat, India</li>
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
              11. Termination
            </h2>
            <p className="text-gray-700 mb-6">
              We may terminate or suspend your access to our services
              immediately, without prior notice, for any breach of these Terms
              or for any other reason at our sole discretion. Upon termination,
              your right to use our services will cease immediately.
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
              12. Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please
              contact us:
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
              13. Changes to Terms
            </h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to update these Terms of Service at any time.
              We will notify users of material changes by posting the updated
              Terms on our website and updating the &ldquo;Last Updated&rdquo;
              date. Your continued use of our services after such modifications
              constitutes acceptance of the updated Terms.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
