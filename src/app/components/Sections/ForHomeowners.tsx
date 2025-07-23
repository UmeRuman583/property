'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ForHomeowners = () => {
  return (
    <section id="for-homeowners" className="bg-white">
      {/* Heading and Description */}
      <div className="text-center max-w-3xl mx-auto pt-12 pb-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          For Homeowners
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 text-lg"
        >
          Secure rent and additional benefits, whether you prefer hands-on <br />
          management or entrusting us with the keys
        </motion.p>
      </div>
      
      {/* Fixed Background with Content */}
      <div 
        className="bg-cover bg-center bg-no-repeat  min-h-[500px]"
        style={{ 
          backgroundImage: "url('/yellow.png')",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-6 pt-24 px-4">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-xl shadow-md p-6 border border-gray-100 w-full max-w-md sm:max-w-xl overflow-hidden"
          >
            {/* Fixed blue side bar */}
            <div className="absolute inset-y-0 left-0 w-1 bg-blue-900 rounded-l-xl" />

            <h3 className="text-xl font-semibold text-gray-800 mb-2 ml-3">
              FOR SELF MANAGERS
            </h3>
            <p className="text-gray-600 ml-3">
              Rental home leasing &amp; financial protection, for those that like to manage things themselves.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative bg-white rounded-xl shadow-md p-6 border border-gray-100 w-full max-w-md sm:max-w-xl overflow-hidden"
          >
            {/* Fixed side border */}
            <div className="absolute inset-y-0 left-0 w-1 bg-blue-900 rounded-l-xl" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 ml-3">
              TrustProperty does eviction coverage
            </h3>
            <p className="text-gray-600 ml-3">
              Enhance Your Revenue Stream with TrustProperty&apos;s Localized Property Management Solutions.
            </p>
          </motion.div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4 w-full">
            <button className="bg-[#0E2148] hover:bg-yellow-600 text-white font-medium px-5 py-2 rounded-full shadow transition">
              📞 +92 300 1234567
            </button>
            <button className="bg-[#0E2148] hover:bg-yellow-600 text-white font-medium px-5 py-2 rounded-full shadow transition">
              ✉️ contact@trustproperty.com
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForHomeowners;
