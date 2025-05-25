"use client";

import React, { useState, useEffect, useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);

  // Update container height when testimonial changes
  useEffect(() => {
    // Keep reference to container for transition
    if (containerRef.current) {
      // This ensures the container properly mounts with ref
    }
  }, [currentIndex]);

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

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Testimonials
          </h2>
          <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 font-heading">
            What Our Clients Say
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
            Discover why leading companies around the world trust Trayan
            Corporation for their chemical needs.
          </p>
        </div>

        <div className="max-w-lg mx-auto md:max-w-2xl lg:max-w-3xl relative">
          <div className="relative">
            {/* Navigation arrows */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none z-10">
              <button
                onClick={() => paginate(-1)}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 -ml-3 sm:-ml-5"
                aria-label="Previous testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
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
                onClick={() => paginate(1)}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 -mr-3 sm:-mr-5"
                aria-label="Next testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
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

            {/* Testimonial Card */}
            <div
              className="relative overflow-hidden"
              style={{ height: "320px" }}
            >
              <AnimatePresence
                mode="popLayout"
                initial={false}
                custom={direction}
              >
                <motion.div
                  ref={containerRef}
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="bg-white rounded-lg shadow-md absolute top-0 left-0 right-0"
                >
                  <div className="p-6 sm:p-8">
                    <div className="mb-6">
                      <FaQuoteLeft className="text-blue-200 h-6 w-6 sm:h-8 sm:w-8 mb-4" />
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        &quot;{testimonials[currentIndex].quote}&quot;
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex flex-col items-center text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                        <span className="text-gray-600 text-sm sm:text-base font-medium">
                          {testimonials[currentIndex].name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">
                          {testimonials[currentIndex].role},{" "}
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-primary-600 w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
