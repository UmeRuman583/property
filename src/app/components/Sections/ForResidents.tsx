'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Review from './Review';

const ForResidents = () => {
  return (
    <>
      <section id="for-residents" className="w-full bg-gray-100">
        {/* Top Heading Section */}
        <div className="text-center max-w-3xl mx-auto px-4 pt-16 pb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-800 mb-3"
          >
            {"For Residents"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 text-lg"
          >
            {"Access building notices, events, and updates from your mobile or desktop."}
          </motion.p>
        </div>

        {/* Background Image Section */}
        <div
          className="w-full bg-cover bg-center bg-no-repeat min-h-[600px]"
          style={{ backgroundImage: `url('/blue.png')` }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-end gap-10 px-4 py-37">
            {/* Right Side: Cards and Buttons */}
            <div className="md:w-1/2 flex flex-col gap-6 z-10">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative bg-white rounded-xl shadow-md p-6 border border-gray-300 overflow-hidden"
              >
                {/* Blue left strip */}
                <div className="absolute top-0 left-0 h-full w-1 bg-blue-900 rounded-tl-xl rounded-bl-xl" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2 pl-3">
                  {"CreditFlow"}
                </h3>
                <p className="text-gray-600 pl-3">
                  {"Establish credit through effortless and adaptable rent transactions"}
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative bg-white rounded-xl shadow-md p-6 border border-gray-300 overflow-hidden"
              >
                {/* Left blue strip */}
                <div className="absolute top-0 left-0 h-full w-1 bg-blue-900 rounded-tl-xl rounded-bl-xl" />
                <div className="pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {"RENT A HOME"}
                  </h3>
                  <p className="text-gray-600">
                    {"Easy and straightforward homes for valued residents"}
                  </p>
                </div>
              </motion.div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-4 w-full">
                <button className="bg-yellow-600 hover:bg-blue-900 text-white font-medium px-5 py-2 rounded-full shadow transition">
                  {"📞 +92 300 1234567"}
                </button>
                <button className="bg-yellow-600 hover:bg-blue-900 text-white font-medium px-5 py-2 rounded-full shadow transition">
                  {"✉️ contact@trustproperty.com"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Review />
    </>
  );
};

export default ForResidents;
