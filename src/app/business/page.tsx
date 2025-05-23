"use client";

import { motion } from "framer-motion";

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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Business
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Comprehensive chemical solutions for your business needs
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
  );
};

export default Business;
