'use client';

import { useState, useRef } from 'react';
import { motion, easeOut } from 'framer-motion';
import LocalizedText from "@/components/LocalizedText";
import { useLanguage } from "@/components/LanguageContext";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { lang } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: easeOut
      }
    })
  };

  return (
    <section className="contact-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="contact-form-wrap">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="contact-form-block w-form"
          >
            <div className="contact-form-title-wrap">
              <motion.h2 
                custom={0}
                variants={itemVariants}
                className="section-title font-medium"
              >
                <LocalizedText en="Get in touch!" ar="تواصل معنا!" />
              </motion.h2>
            </div>
            
            <form 
              ref={formRef}
              id="email-form" 
              name="email-form" 
              data-name="Email Form" 
              method="get" 
              className="contact-form"
         
              onSubmit={handleSubmit}
            >
              <motion.div custom={1} variants={itemVariants} className='w-full'>
                <input 
                  className="contact-text-field w-input" 
                  maxLength={256} 
                  name="name" 
                  data-name="Name" 
                  placeholder={lang === 'EN' ? 'Your Name' : 'اسمك'}
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </motion.div>
              
              <motion.div custom={2} variants={itemVariants} className='w-full'>
                <input 
                  className="contact-text-field w-input" 
                  maxLength={256} 
                  name="email" 
                  data-name="Email" 
                  placeholder={lang === 'EN' ? 'Email Address' : 'البريد الإلكتروني'}
                  type="email" 
                  id="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </motion.div>
              
              <motion.div custom={3} variants={itemVariants} className='w-full'>
                <textarea
                  placeholder={lang === 'EN' ? 'Your Message' : 'رسالتك'}
                  maxLength={5000} 
                  id="field" 
                  name="message" 
                  data-name="Field"
                  className="contact-message-field w-input"
                  value={formData.message}
                  onChange={handleChange}
                />
              </motion.div>
              
              <motion.div custom={4} variants={itemVariants} className="form-button-wrap">
                <motion.button
                  type="submit"
                  data-wait={lang === 'EN' ? 'Please wait...' : 'يرجى الانتظار...'}
                  className="primary-button w-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LocalizedText en="Send Message" ar="إرسال الرسالة" />
                </motion.button>
              </motion.div>
            </form>
            
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="w-form-done"
              >
                <LocalizedText en="Thank you! Your submission has been received!" ar="شكراً لك! تم استلام رسالتك بنجاح!" />
              </motion.div>
            )}
            
            {isError && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="w-form-fail"
              >
                <LocalizedText en="Oops! Something went wrong while submitting the form." ar="عذراً! حدث خطأ أثناء إرسال النموذج." />
              </motion.div>
            )}
            
            <div className="contact-left-leaf-wrap">
              <motion.img
                src="/contact-left-leaf.svg"
                loading="lazy"
                alt="contact form leaf"
                initial={{ rotate: -10, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
            </div>
            
            <div className="contact-right-leaf">
              <motion.img
                src="/contact-right-leaf.svg"
                loading="lazy"
                alt="contact form leaf"
                initial={{ rotate: 10, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="contact-link-whole-wrap"
          >
            <motion.div custom={0} variants={itemVariants} className="footer-contact-item">
              <div className="footer-icon-wrap">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                  loading="lazy"
                  alt="footer contact icon"
                />
              </div>
              <div className="footer-contact-text-wrap">
                <p className="footer-contact-text">Rajiv Gandhi Bypass<br />Manjeri, Kerala 676121</p>
              </div>
            </motion.div>
            
            <motion.div custom={1} variants={itemVariants} className="footer-contact-item">
              <div className="footer-icon-wrap">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                  loading="lazy"
                  alt="footer contact icon"
                />
              </div>
              <div className="footer-contact-text-wrap">
                <a href="mailto:info@kanzulhind.com" className="footer-contact-text footer-text-link">
                  info@kanzulhind.com
                </a>
                <a href="mailto:orders@kanzulhind.com" className="footer-contact-text footer-text-link">
                  orders@kanzulhind.com
                </a>
              </div>
            </motion.div>
            
            <motion.div custom={2} variants={itemVariants} className="footer-contact-item">
              <div className="footer-icon-wrap">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/126/126341.png"
                  loading="lazy"
                  alt="footer contact icon"
                />
              </div>
              <div className="footer-contact-text-wrap">
                <a
                  href="https://wa.me/966571961404?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                  className="footer-contact-text footer-text-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +966571961404
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}