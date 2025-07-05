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
    <section className="faq-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="faq-wrap">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            data-w-id="d20dd745-8054-1429-1e3a-247209336e41" 
            className="faq-title-wrap"
          >
            <h2 className="section-title font-medium">Frequently Asked Questions</h2>
          </motion.div>
          
          <div data-w-id="d20dd745-8054-1429-1e3a-247209336e44" className="faq-whole-wrap">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                data-w-id={`d20dd745-8054-1429-1e3a-247209336e${45 + (index * 11)}`}
                className="faq w-dropdown"
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="faq-toggle w-dropdown-toggle"
                  onClick={() => toggleFAQ(index)}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
                >
                  <div>{faq.question}</div>
                  <motion.div
                    className="faq-icon-wrap"
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ marginLeft: '1rem', display: 'flex', alignItems: 'center' }}
                  >
                    <FaPlus size={20} />
                  </motion.div>
                </motion.div>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.nav 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="faq-answer-list w-dropdown-list"
                    >
                      <div className="faq-answer-list-wrap">
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.15 }}
                          className="faq-answer-content"
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