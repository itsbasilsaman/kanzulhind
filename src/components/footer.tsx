'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LocalizedText from "@/components/LocalizedText";

export default function Footer() {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 1 }, // Changed from 0 to 1 to remove opacity 0
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };



  return (
    <section className="footer-main-section" ref={ref}>
      <div className="footer-bg-whole-wrap">
        {/* Background Image */}
        <div className="footer-bg-image-wrap">
          <Image
            src="/footer-bg-image.jpg"
            alt="footer image"
            className="footer-bg-image"
            fill
            sizes="(max-width: 1919px) 100vw, 1920px"
            priority={false}
          />
        </div>
        
        <div className="footer-bg-overlay-green"></div>
        <div className="footer-bg-image-overlay"></div>
        
        <div className="w-layout-blockcontainer container w-container">
          <div className="footer-whole-wrap">
            <motion.div 
              className="w-layout-grid footer-grid"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {/* Brand Logo Section */}
              <motion.div 
                data-w-id="9149e6f5-64ca-3121-a4f6-b2d4ea071ea6" 
                className="footer-brand-logo-wrap"
         
              >
                <Link href="/home" className="footer-brand-link w-inline-block">
                  <Image
                    src="/KANZUL-20.png"
                    alt="brand logo"
                    className="footer-brand-image"
                    width={150}
                    height={50}
                  />
                </Link>
                
                <div className="footer-brand-content-wrap">
                  <h2 className="footer-wrap-title"><LocalizedText en="Welcome to Kanzulhind" ar="مرحبًا بكم في كنز الهند" /></h2>
                  <p className="footer-brand-content">
                    <LocalizedText en="Your trusted source for premium spices, traditional cloths, authentic antiques, and finest quality rice." ar="مصدرُكم الموثوق للتوابل الفاخرة، الملابس التقليدية، التحف الأصيلة، وأجود أنواع الأرز." />
                  </p>
                </div>
                
                <div className="footer-brand-social-wrap">
                  {[
                    { href: "https://www.instagram.com/kanzulhind", icon: FaInstagram, label: "Instagram" },
                    { href: "https://wa.me/919074851748", icon: FaWhatsapp, label: "WhatsApp" },
                    { href: "https://twitter.com/kanzulhind", icon: FaXTwitter, label: "Twitter" },
                    { href: "https://www.linkedin.com/company/kanzulhind", icon: FaLinkedin, label: "LinkedIn" }
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-link w-inline-block hover:scale-110 transition-transform duration-200"
                      aria-label={social.label}
                    >
                      <social.icon 
                        className="footer-social-icon text-[#41574B] text-2xl hover:text-[#1d2320] transition-colors duration-200" 
                        size={24}
                      />
                    </Link>
                  ))}
                </div>
              </motion.div>
              
              {/* Explore Links */}
              <motion.div 
                data-w-id="9149e6f5-64ca-3121-a4f6-b2d4ea071ebb" 
                className="footer-page-link-wrap"
         
              >
                <div className="footer-link-list-title-wrap">
                  <h2 className="footer-wrap-title"><LocalizedText en="Explore" ar="تصفح" /></h2>
                  <div className="footer-title-bar-line"></div>
                </div>
                <div className="footer-link-list-wrap">
                  {['spices', 'cloths', 'antiques', 'rice', 'about', 'contact'].map((page) => (
                    <Link 
                      key={page} 
                      href={`/${page}`} 
                      className="footer-widget hover:underline hover:text-white transition-colors"
                    >
                      <LocalizedText 
                        en={page.charAt(0).toUpperCase() + page.slice(1)} 
                        ar={
                          page === 'spices' ? 'التوابل' :
                          page === 'cloths' ? 'الملابس' :
                          page === 'antiques' ? 'التحف' :
                          page === 'rice' ? 'الأرز' :
                          page === 'about' ? 'من نحن' :
                          page === 'contact' ? 'اتصل بنا' :
                          page
                        }
                      />
                    </Link>
                  ))}
                </div>
              </motion.div>
              
              {/* Contact Info */}
              <motion.div 
                data-w-id="9149e6f5-64ca-3121-a4f6-b2d4ea071ecf" 
                className="footer-page-link-wrap"
              
              >
                <div className="footer-link-list-title-wrap">
                  <h2 className="footer-wrap-title"><LocalizedText en="Contact Info" ar="معلومات التواصل" /></h2>
                  <div className="footer-title-bar-line"></div>
                </div>
                <div className="footer-contact-info-details">
                  <div className="footer-contact-item">
                    <div className="footer-icon-wrap">
                      <Image
                        src="/footer-contact-location.svg"
                        alt="footer contact icon"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="footer-contact-text-wrap">
                      <p className="footer-contact-text"><LocalizedText en="Rajiv Gandhi Bypass\nManjeri, Kerala 676121" ar="طريق راجيف غاندي السريع\nمانجيري، كيرالا 676121" /></p>
                    </div>
                  </div>
                  <div className="footer-contact-line-break"></div>
                  <div className="footer-contact-item">
                    <div className="footer-icon-wrap email">
                      <Image
                        src="/footer-contact-email.svg"
                        alt="footer contact icon"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="footer-contact-text-wrap">
                      <Link href="mailto:info@kanzulhind.com" className="footer-contact-text footer-text-link hover:underline">
                        info@kanzulhind.com
                      </Link>
                      <Link href="mailto:orders@kanzulhind.com" className="footer-contact-text footer-text-link hover:underline">
                        orders@kanzulhind.com
                      </Link>
                    </div>
                  </div>
                  <div className="footer-contact-line-break"></div>
                  <div className="footer-contact-item">
                    <div className="footer-icon-wrap phone">
                      <Image
                        src="/footer-contact-phone.svg"
                        alt="footer contact icon"
                        width={20}
                        height={20}
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
                  </div>
                </div>
              </motion.div>
              
              {/* Opening Hours */}
              <motion.div 
                data-w-id="9149e6f5-64ca-3121-a4f6-b2d4ea071eed" 
                className="footer-page-link-wrap"
             
              >
                <div className="footer-link-list-title-wrap">
                  <h2 className="footer-wrap-title"><LocalizedText en="Opening Hours" ar="ساعات العمل" /></h2>
                  <div className="footer-title-bar-line"></div>
                </div>
                <div className="footer-timing-wrap">
                  <p className="footer-contact-text"><LocalizedText en="Mon - Sat   09:00 - 19:00 hrs" ar="الاثنين - السبت   09:00 - 19:00" /></p>
                  <p className="footer-contact-text"><LocalizedText en="Sunday     10:00 - 16:00 hrs" ar="الأحد     10:00 - 16:00" /></p>
                  <p className="footer-contact-text"><LocalizedText en="Online orders: 24/7" ar="الطلبات عبر الإنترنت: 24/7" /></p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="footer-copyright-content-wrap">
          <div className="w-layout-blockcontainer container w-container">
            <motion.div 
              data-w-id="9149e6f5-64ca-3121-a4f6-b2d4ea071efb" 
              className="footer-copyright-wrap"
            
            >
              <p className="footer-copyright-content">
                Copyright © <Link href="/home" className="copyright-link hover:underline"><LocalizedText en="Kanzulhind" ar="كنز الهند" /></Link> | 
                <LocalizedText en="Your Premium Source for Spices, Cloths, Antiques & Rice" ar="مصدرُكم المميز للتوابل، الملابس، التحف والأرز" />
              </p>
              
              <div className="footer-utility-link-wrap">
                {[
                  { href: "/privacy-policy", text: "Privacy Policy", ar: "سياسة الخصوصية" },
                  { href: "/terms-conditions", text: "Terms & Conditions", ar: "الشروط والأحكام" },
                  { href: "/shipping-info", text: "Shipping Info", ar: "معلومات الشحن" },
                  { href: "/return-policy", text: "Return Policy", ar: "سياسة الإرجاع" },
                  { href: "/faq", text: "FAQ", ar: "الأسئلة الشائعة" }
                ].map((link, index) => (
                  <React.Fragment key={index}>
                    <Link href={link.href} className="footer-utility-widget hover:underline">
                      <LocalizedText en={link.text} ar={link.ar} />
                    </Link>
                    {index < 4 && <div className="footer-widget-line-break"></div>}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}