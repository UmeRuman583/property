'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: '40+', label: 'Workers' },
  { number: '20+', label: 'Projects' },
  { number: '22+', label: 'Trusted Homeowners' },
  { number: '30+', label: 'Trusted Residents' },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/bg03.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md"
        >
         Hassle-Free Living
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-2xl mb-8 drop-shadow-sm"
        >
Say goodbye to landlord stress. We’re making rentals simple for homeowners and residents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#for-homeowners"
            className="bg-yellow-600 hover:bg-[#1a202c] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            For Homeowners
          </a>
          <a
            href="#for-residents"
            className="bg-[#1a202c] hover:bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            For Residents
          </a>
        </motion.div>
      </motion.div>

      {/* Stats Section Overlay */}
     
        <motion.div
  initial={{ y: 100, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  className="absolute bottom-[-60px] left-0 w-full px-4 sm:px-10 z-20"
>
  <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-0 sm:divide-x divide-gray-300">
    {stats.map((item, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: idx * 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className={`text-center px-4 ${idx !== 0 ? 'sm:pl-6' : ''}`}
      >
        <h2 className="text-3xl font-bold text-gray-800">{item.number}</h2>
        <p className="text-sm font-bold text-gray-600">{item.label}</p>
      </motion.div>
    ))}
  </div>
</motion.div>

    </section>
  );
};

export default Hero;
