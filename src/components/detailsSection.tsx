'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import LocalizedText from "@/components/LocalizedText";

const DetailSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate elements when they come into view
            const elements = entry.target.querySelectorAll('[data-animate]');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fadeInUp');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const currentSectionRef = sectionRef.current;
    
    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="our-products-section mt-8 lg:mt-28" dir="ltr">
      <div className="w-layout-blockcontainer container w-container">
        <div className="why-us-wrap">
          <div 
            data-animate
            className="why-us-title-wrap animate-fadeInUp"
          >
            <h2 className="section-title"><LocalizedText en="Curated Product Inquiry Platform" ar="منصة استفسار عن المنتجات المختارة" /></h2>
          </div>
          <div 
            data-animate
            className="why-us-whole-wrap animate-fadeInUp"
          >
            <div className="why-us-count-wrap">
              <div className="why-us-main-wrap">
                <div className="why-us-count-main-wrap">
                  <div className="why-us-count-list-wrap">
                    <h3 className="why-us-count-number-text">25K</h3>
                    <p className="why-us-count-content">
                      Thousands of users explore unique products daily here.
                    </p>
                  </div>
                  <p className="why-us-count-list-text">Inquiries Made</p>
                </div>
                <div className="why-us-wrap-line-break"></div>
                <div className="why-us-count-main-wrap">
                  <div className="why-us-count-list-wrap">
                    <h3 className="why-us-count-number-text">10M</h3>
                    <p className="why-us-count-content">
                      Products from antiques to rice, all in one place.
                    </p>
                  </div>
                  <p className="why-us-count-list-text">Products Showcased</p>
                </div>
              </div>
            </div>
            <div className="why-select-us-wrap">
              <div className="why-select-us-content-list-wrap">
                <h3 className="why-select-us-title">Why Kanzulhind?</h3>
                <div className="why-select-us-whole-list-wrap">
                  <div 
                    data-animate
                    className="why-select-us-list-item animate-fadeInUp"
                  >
                    <div className="why-select-us-icon-wrap">
                      <Image
                        src="/why-us-list-icon.svg"
                        width={24}
                        height={24}
                        alt=""
                        className="why-select-us-icon"
                      />
                    </div>
                    <div className="why-select-us-item-content-wrap">
                      <h4 className="why-select-us-item-title">One-Click Inquiry</h4>
                      <p className="why-select-us-content">
                        Instantly connect with sellers for any product you like.
                      </p>
                    </div>
                  </div>
                  <div 
                    data-animate
                    className="why-select-us-list-item animate-fadeInUp"
                  >
                    <div className="why-select-us-icon-wrap">
                      <Image
                        src="/why-us-list-icon.svg"
                        width={24}
                        height={24}
                        alt=""
                        className="why-select-us-icon"
                      />
                    </div>
                    <div className="why-select-us-item-content-wrap">
                      <h4 className="why-select-us-item-title">Diverse Selection</h4>
                      <p className="why-select-us-content">
                        Antiques, clothing, spices, and rice, all with details.
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="why-us-bg-image-wrap">
              <Image
                src="/why-us-bg-image.svg"
                width={500}
                height={500}
                alt="why us bg image"
                className="why-us-bg-image"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default  DetailSection;