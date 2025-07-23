'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services are included?',
    answer:'Trust Property Keys offers a one-stop-shop for all your home management needs including: • Preparing your home for future residents by conducting an inspection and addressing maintenance and repairs. • Marketing and showcasing your home with professional photography, virtual walkthroughs, open houses, and full-service tours. What sets us apart is that we offer these tours at no extra cost to homeowners. This flexibility ensures that we reach a wider pool of potential residents, making the process efficient and hassle-free. • Distributing the listing on multiple websites including Zillow, Apartments.com, Craigslist, Trulia, Zumper and Hotpads. Additionally, we list the home in its best light on our website that receives thousands of visitors a month - a true competitive advantage. • Screening and placing residents through our thorough vetting and background check process. • Managing the resident relationship, including rent collection, home visits, and fostering community connections. - you will not need to worry about dealing with Residents directly. Our Member Service Team will ensure both you and your Resident have everything needed. • Providing long-term care and handling maintenance, including 24/7 emergency service'
  },
  {
    question: 'How fast do I get paid? When will you list my home?',
    answer:
      'Payments are processed promptly once tenants are settled. We typically list your home within 24–48 hours of receiving your details.',
  },
  {
    question: 'When can I see the home?',
    answer:
      'Viewings can be scheduled at your convenience. Just contact us and we’ll set up a time that works best for you.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [query, setQuery] = useState('');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="help-faqs" className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* Accordion FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200"
            >
           <button
  onClick={() => toggleFAQ(index)}
  className="w-full flex justify-between items-center text-left text-xl font-semibold px-6 py-4 bg-yellow-50 text-blue-900"
>
  {faq.question}
  <ChevronDown
    className={`transition-transform duration-300 ${
      openIndex === index ? 'rotate-180' : ''
    }`}
  />
</button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-6 pb-4 text-gray-600 bg-white"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Ask a Question Box */}
        <div className="mt-14 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h4 className="text-2xl font-semibold text-yellow-600 mb-4">
            Still have questions?
          </h4>
          <p className="text-gray-900 mb-6">
            Let us know anything you want to ask. We'll get back to you with a detailed answer.
          </p>
          <textarea
            rows={4}
            placeholder="Type your question here..."
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-[#1a202c] placeholder:text-[#1a202c]"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            className="mt-4 bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-blue-900 transition font-medium"
            onClick={() => {
              alert('Your question has been submitted!');
              setQuery('');
            }}
          >
            Submit Question
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
