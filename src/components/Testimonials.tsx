"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Production Manager",
    company: "ChemSolutions Inc.",
    quote:
      "Trayan Corporation has been our trusted supplier for over 5 years. Their products are consistently high quality and their technical support team is knowledgeable and responsive.",
    image: "/images/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Chief Operations Officer",
    company: "Global Manufacturers Ltd.",
    quote:
      "Working with Trayan Corporation has transformed our manufacturing process. Their chemical solutions have improved our efficiency by 30% while maintaining the highest quality standards.",
    image: "/images/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Procurement Director",
    company: "InnoTech Industries",
    quote:
      "The reliability and consistency of Trayan's products have made them our primary chemical supplier. Their global network ensures we never experience supply chain disruptions.",
    image: "/images/avatar-3.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonialVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      }
      return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
    });
  };

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
            What Our Clients Say
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Discover why leading companies around the world trust Trayan
            Corporation for their chemical needs.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl h-96 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full px-4"
            >
              <div className="bg-white rounded-md shadow-soft p-8 md:p-10 h-full flex flex-col justify-between">
                <div>
                  <FaQuoteLeft className="text-primary-200 h-10 w-10 mb-4" />
                  <p className="text-lg md:text-xl text-gray-700 mb-6">
                    &quot;{testimonials[currentIndex].quote}&quot;
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role},{" "}
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-primary-600 w-6 md:w-8"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
