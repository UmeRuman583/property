'use client';
import React from 'react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 text-blue-900 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1 - Logo & Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">Trust Property Keys</h2>
          <p className="text-gray-600 mb-4">
            {"Managing your property with care and excellence."}
          </p>
          <p className="text-gray-600">{"Call: "} <span className="text-yellow-500">(510) 459-0964</span></p>
          <p className="text-gray-600">{"Email: "} <span className="text-yellow-500">info@trustpropertykeys.com</span></p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-500">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { label: "How It Works", id: "how-it-works" },
              { label: "About Us", id: "about-us" },
              { label: "For Homeowners", id: "for-homeowners" },
              { label: "For Residents", id: "for-residents" },
            ].map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-yellow-500 transition-colors font-semibold"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-500">Support</h3>
          <ul className="space-y-2">
            {[
              { label: "Help & FAQs", id: "help-faqs" },
              { label: "Testimonials", id: "testimonials" },
            ].map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-yellow-500 transition-colors font-semibold"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Contact Button */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-4">
            {"Have questions? We're here to help."}
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-yellow-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 border-t border-gray-300 pt-4 text-center text-blue-900 text-sm">
        © {new Date().getFullYear()} Trust Property Keys. {"All rights reserved."}
      </div>
    </footer>
  );
};

export default Footer;
