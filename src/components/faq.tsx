'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What are some sustainable farming practices?',
      answer: 'Sustainable farming uses rotation, cover crops, organics, and IPM to sustain productivity while reducing environmental impact.'
    },
    {
      question: 'How can I improve soil health on my farm?',
      answer: 'Improve soil health by composting, applying manure, reducing tillage to prevent erosion, rotating crops, and using lime or gypsum to balance pH levels.'
    },
    {
      question: 'What crops are best suited for my region\'s climate?',
      answer: 'Select crops suited to your region\'s climate with guidance from local experts or experienced farmers.'
    },
    {
      question: 'How can I control pests and diseases without harmful chemicals?',
      answer: 'Cultural practices like crop rotation, disease-resistant crops, natural predators, and beneficial insects manage pests and diseases eco-friendly.'
    },
    {
      question: 'What are the benefits of diversifying my farm\'s products?',
      answer: 'Diversify farm products for risk reduction, soil health, wider customer base, and resilience to market or climate changes.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pt-10 md:pt-[60px] bg-white faq-section">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="max-w-full md:max-w-4xl lg:max-w-6xl xl:max-w-8xl mx-auto">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-10 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium section-title max-w-[90vw] md:max-w-[485px] mx-auto">Frequently Asked Questions</h2>
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
                    {faq.question}
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
                          {faq.answer}
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