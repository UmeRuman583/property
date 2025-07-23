'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Belong from './belong';

const reviews = [
  {
    name: "Ali Raza",
    role: "Homeowner",
    feedback: "Absolutely seamless! The platform made managing my property stress-free and transparent.",
  },
  {
    name: "Fatima Khan",
    role: "Resident",
    feedback: "I love the instant communication and ease of reporting issues. Highly recommend it!",
  },
  {
    name: "John Smith",
    role: "Homeowner",
    feedback: "Great support and intuitive design. It has made community living much better!",
  },
];

const cardVariants = {
  initial: { opacity: 0, x: 60, scale: 0.9 },
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -60, scale: 0.9 },
};

const ReviewSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => setIndex((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <>
      <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-24 flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Left Title */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-blue-900 leading-snug">
              {"What our "}
              <span className="text-yellow-600">{"Owners"}</span>
              {" and "}
              <span className="text-yellow-600">{"Residents"}</span>
              {" are saying "}
              <br />
              <b>{"About us"}</b>
            </h2>
          </div>

          {/* Right: Card */}
          <div className="md:w-1/2 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                whileHover={{
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2,
                  transition: { duration: 0.3 },
                }}
                className="relative bg-white min-h-[300px] rounded-3xl p-8 shadow-2xl border border-gray-200 max-w-md mx-auto overflow-hidden group"
              >
                {/* Glow Line */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-700 rounded-l-xl" />

                {/* Quote */}
                <p className="text-gray-700 text-lg mb-6 italic leading-relaxed transition-all duration-300 group-hover:scale-[1.02]">
                  {`"${reviews[index].feedback}"`}
                </p>

                {/* Reviewer */}
                <div className="border-t pt-4 mt-4">
                  <p className="text-blue-600 font-semibold text-lg">
                    {reviews[index].name}
                  </p>
                  <p className="text-sm text-gray-500">{reviews[index].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 font-bold transition"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 font-bold transition"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>
      <Belong />
    </>
  );
};

export default ReviewSection;
