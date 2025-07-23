'use client';
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-6 px-16 md:px-30">
      {/* Heading */}
      <div className="mb-8 mt-2">
        <h2 className="text-3xl font-bold text-[#0E2148]">
          Contact <br /> 
          <span className="text-yellow-600">&nbsp;&amp; Reach Us!</span>
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-start ">
        {/* Left Column - Contact Info */}
        <div className="space-y-8 mt-10">
          {/* Email */}
          <div className="flex items-center gap-5">
            <div className="bg-yellow-500 rounded-full p-4">
              <Mail className="text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#0E2148]">Email</h4>
              <p className="text-[#0E2148]">info@trustpropertykeys.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-5">
            <div className="bg-yellow-500 rounded-full p-4">
              <Phone className="text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#0E2148]">Phone / Mobile</h4>
              <p className="text-[#0E2148]">(510) 459-0964</p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <form className="space-y-5 py-2">
          <input
            type="text"
            placeholder=" Name"
            className="w-full border border-gray-200 rounded-lg p-3 
                       text-[#1a202c] placeholder-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder=" Email address"
            className="w-full border border-gray-200 rounded-lg p-3 
                       text-[#1a202c] placeholder-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder=" Message here..."
            rows={5}
            className="w-full border border-gray-200 rounded-lg p-3 
                       text-[#1a202c] placeholder-gray-600 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-yellow-600 text-white font-medium px-6 py-3 
                       rounded-lg hover:bg-blue-900 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
