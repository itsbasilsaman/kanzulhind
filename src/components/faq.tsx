'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';
import LocalizedText from "@/components/LocalizedText";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I inquire about a product on Kanzulhind?',
      answer: 'Click the inquiry button on any product page to send your request directly to our team.'
    },
    {
      question: 'What types of products are featured on Kanzulhind?',
      answer: 'We showcase antiques, clothing, spices, and a variety of rice types with detailed information.'
    },
    {
      question: 'Can I view product origin and specifications?',
      answer: 'Yes, each product page provides images, specifications, and origin details for your review.'
    },
    {
      question: 'Is the inquiry process fast and personal?',
      answer: 'Our platform allows one-click inquiries, making your experience quick, personal, and convenient.'
    },
    {
      question: 'Why choose Kanzulhind for unique products?',
      answer: 'We offer a curated selection, easy inquiries, and detailed product info for a seamless experience.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pt-10 md:pt-[60px] bg-white faq-section" dir="ltr">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="max-w-full md:max-w-4xl lg:max-w-6xl xl:max-w-8xl mx-auto">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-10 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium section-title max-w-[90vw] md:max-w-[485px] mx-auto"><LocalizedText en="Frequently Asked Questions" ar="الأسئلة الشائعة" /></h2>
          </motion.div>
          <div className="bg-[#eaf4ee] rounded-2xl mt-6 md:mt-10 p-4 sm:p-6 md:p-[40px_60px_60px] shadow-sm">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border-b border-[#c8d6ce] w-full last:border-b-0 py-1 sm:py-2"
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex justify-between items-center py-3 sm:py-[15px] cursor-pointer select-none gap-x-4 sm:gap-x-8"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-800 text-left flex-1 whitespace-pre-wrap">
                    <LocalizedText en={faq.question} ar={faq.question} />
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-2 sm:ml-4 flex items-center justify-center min-w-[24px] sm:min-w-[28px] h-[24px] sm:h-[28px]"
                  >
                    <span className="block text-[18px] sm:text-[20px] text-green-700">
                      <FaPlus />
                    </span>
                  </motion.div>
                </motion.div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.nav 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden relative z-0"
                    >
                      <div className="max-w-full md:max-w-2xl lg:max-w-4xl pb-3 md:pb-[15px] pr-2 md:pr-[30px]">
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.15 }}
                          className="text-gray-700 text-sm sm:text-base md:text-lg mb-1 md:mb-[5px]"
                        >
                          <LocalizedText en={faq.answer} ar={faq.answer} />
                        </motion.p>
                      </div>
                    </motion.nav>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}