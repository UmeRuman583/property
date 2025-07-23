'use client';
import React from 'react';
import Faq from './Faq';

const Belong = () => {
  return (
    <>
      <div className="bg-white">
        <div className="bg-white border-4 border-yellow-400 rounded-2xl px-6 py-8 md:px-8 md:py-12 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto my-10 shadow-sm gap-6">
          {/* Left Content */}
          <div className="text-center md:text-left max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
              We have <span className="text-yellow-500 ">$500</span> that <br /> belongs in your pocket!
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mt-2">
              Refer a great homeowner and get $500 when their lease starts.
            </p>
          </div>

          {/* Right Button */}
          <button className="bg-yellow-600 font-medium text-lg px-6 py-3 rounded-full hover:bg-[#0E2148] transition duration-300 w-full md:w-auto">
            Call Now (510) 459-0964
          </button>
        </div>
      </div>

      <Faq />
    </>
  );
};

export default Belong;
