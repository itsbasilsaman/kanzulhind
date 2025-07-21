"use client"
import { Button } from "@/components/ui/button"
import LocalizedText from "@/components/LocalizedText";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function MainBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="h-auto lg:h-[85vh] bg-white">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Video Section - Mobile */}
        <div className="relative w-full h-[50vh] bg-gray-100">
          <video className="w-full h-full object-contain" autoPlay muted loop playsInline poster="/banner-img.jpg">
            <source src="https://brandbikofficial.s3.eu-north-1.amazonaws.com/brandbik_website/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Section - Mobile */}
      <motion.div
       initial={{opacity: 0, y: 40}}
       animate={{opacity: 1, y: 0}}
       transition={{ duration: 0.8, ease: 'easeOut'}}
      >
          <div
          className={`linear-section-bg p-6 min-h-[37vh] flex flex-col justify-center transition-all duration-700 ease-out transform
            ${isVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-12 -translate-x-8'}
          `}
        >
          <h1 className="text-4xl font-light leading-tight mb-6"><LocalizedText en="Unlock the Treasures of India" ar="اكتشف كنوز الهند" /></h1>
          <p className="text-gray-300 mb-8 leading-relaxed">
            <LocalizedText en="Experience the essence of India with Kanzulhind’s handpicked collection." ar="اختبر جوهر الهند مع مجموعة كنز الهند المختارة بعناية." />
          </p>
          <Button className="bg-[#41574B] rounded-[12px] w-fit px-8 py-3 font-medium transition-all duration-300 ease-in-out hover:bg-gray-100">
            <a
              href="https://wa.me/966571961404?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
              className="footer-contact-text footer-text-link !text-white hover:!text-[#41574B] !no-underline hover:!no-underline transition-all duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LocalizedText en="Inquire Now" ar="استفسر الآن" />
            </a>
          </Button>
        </div>
      </motion.div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Content Section - Desktop */}
        <div
          className={`w-1/2 linear-section-bg text-white flex flex-col justify-center px-12 transition-all duration-700 ease-out transform
            ${isVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-12 -translate-x-8'}
          `}
        >
          <h1 className="text-6xl font-light leading-tight mb-8"><LocalizedText en="Unlock the Treasures of India: Antiques, Fashion, Spices & Rice" ar="اكتشف كنوز الهند: التحف، الأزياء، التوابل والأرز" /></h1>
          <p className="text-gray-300 mb-12 text-lg leading-relaxed max-w-md pb-2">
            <LocalizedText en="Experience the essence of India with Kanzulhind’s handpicked collection. From rare antiques and elegant attire to aromatic spices and premium rice." ar="اختبر جوهر الهند مع مجموعة كنز الهند المختارة بعناية. من التحف النادرة والأزياء الأنيقة إلى التوابل العطرية والأرز الفاخر—اكتشف واستفسر واقتنِ شيئًا مميزًا بنقرة واحدة فقط." />
          </p>
          <Button className="bg-[#41574B] rounded-[12px] w-fit  px-8 py-3 font-medium transition-all duration-300 ease-in-out hover:bg-gray-100">
            <a
              href="https://wa.me/966571961404?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
              className="footer-contact-text footer-text-link !text-white hover:!text-[#41574B] !no-underline hover:!no-underline transition-all duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LocalizedText en="Inquire Now" ar="استفسر الآن" />
            </a>
          </Button>
        </div>

        {/* Video Section - Desktop */}
        <div className="w-1/2 relative bg-gray-100">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline poster="/banner-img.jpg">
            <source src="https://brandbikofficial.s3.eu-north-1.amazonaws.com/brandbik_website/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}
