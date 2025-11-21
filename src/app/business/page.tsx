"use client";

import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const businessAreas = [
  {
    title: "Chemical Trading",
    description:
      "We specialize in trading a wide range of chemical products, connecting suppliers with manufacturers worldwide.",
    icon: "🌍",
  },
  {
    title: "Manufacturing Solutions",
    description:
      "Our manufacturing facilities produce high-quality chemical products tailored to your specific requirements.",
    icon: "🏭",
  },
  {
    title: "Technical Support",
    description:
      "Our team of experts provides comprehensive technical support and consultation services.",
    icon: "🔬",
  },
  {
    title: "Quality Control",
    description:
      "Rigorous quality control processes ensure the highest standards in all our products.",
    icon: "✅",
  },
];

const Business = () => {
  return (
    <div>
      <SEO
        title="Business Areas - Chemical Trading & Manufacturing | Trayan Corporation"
        description="Explore Trayan Corporation's comprehensive chemical business areas including trading, manufacturing solutions, technical support, and quality control services across India."
        canonical="/business"
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
                name: "Business Areas",
                item: "https://trayancorp.com/business",
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
                Business Areas
              </span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl leading-relaxed">
              Comprehensive chemical solutions for your business needs - from
              trading and manufacturing to technical support and quality
              control.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Discover how we can help your business succeed
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {businessAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <span className="text-3xl">{area.icon}</span>
                    {area.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{area.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
