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
                  <h2 className="footer-wrap-title">Welcome to Kanzulhind</h2>
                  <p className="footer-brand-content">
                    Your trusted source for premium spices, traditional cloths, authentic antiques, and finest quality rice.  
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
                  <h2 className="footer-wrap-title">Explore</h2>
                  <div className="footer-title-bar-line"></div>
                </div>
                <div className="footer-link-list-wrap">
                  {['spices', 'cloths', 'antiques', 'rice', 'about', 'contact'].map((page) => (
                    <Link 
                      key={page} 
                      href={`/${page}`} 
                      className="footer-widget hover:underline hover:text-white transition-colors"
                    >
                      {page.charAt(0).toUpperCase() + page.slice(1)}
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
                  <h2 className="footer-wrap-title">Contact Info</h2>
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
                      <p className="footer-contact-text">Rajiv Gandhi Bypass<br />Manjeri, Kerala 676121</p>
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
                      <Link href="tel:+919074851748" className="footer-contact-text footer-text-link hover:underline">
                        +91 90748 51748
                      </Link>
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
                  <h2 className="footer-wrap-title">Opening Hours</h2>
                  <div className="footer-title-bar-line"></div>
                </div>
                <div className="footer-timing-wrap">
                  <p className="footer-contact-text">Mon - Sat &nbsp; &nbsp; 09:00 - 19:00 hrs</p>
                  <p className="footer-contact-text">Sunday &nbsp; &nbsp; &nbsp; 10:00 - 16:00 hrs</p>
                  <p className="footer-contact-text">Online orders: 24/7</p>
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
                Copyright © <Link href="/home" className="copyright-link hover:underline">Kanzulhind</Link> | 
                Your Premium Source for Spices, Cloths, Antiques & Rice
              </p>
              
              <div className="footer-utility-link-wrap">
                {[
                  { href: "/privacy-policy", text: "Privacy Policy" },
                  { href: "/terms-conditions", text: "Terms & Conditions" },
                  { href: "/shipping-info", text: "Shipping Info" },
                  { href: "/return-policy", text: "Return Policy" },
                  { href: "/faq", text: "FAQ" }
                ].map((link, index) => (
                  <React.Fragment key={index}>
                    <Link href={link.href} className="footer-utility-widget hover:underline">
                      {link.text}
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