'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const ProductSection = () => {
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
    <section ref={sectionRef} className="our-products-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="why-us-wrap">
          <div 
            data-animate
            className="why-us-title-wrap animate-fadeInUp"
          >
            <h2 className="section-title">Farm-to-Home Produce Directly</h2>
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
                      Thousands of Trusting Customers Choose Our Services
                    </p>
                  </div>
                  <p className="why-us-count-list-text">Clients Trust Us</p>
                </div>
                <div className="why-us-wrap-line-break"></div>
                <div className="why-us-count-main-wrap">
                  <div className="why-us-count-list-wrap">
                    <h3 className="why-us-count-number-text">10M</h3>
                    <p className="why-us-count-content">
                      Organic products delivered with sustainable commitment
                    </p>
                  </div>
                  <p className="why-us-count-list-text">Organic Products Sold</p>
                </div>
              </div>
            </div>
            <div className="why-select-us-wrap">
              <div className="why-select-us-content-list-wrap">
                <h3 className="why-select-us-title">Why select us?</h3>
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
                      <h4 className="why-select-us-item-title">Forever Fresh</h4>
                      <p className="why-select-us-content">
                        Fresh, organic harvests guarantee peak flavor and nutrition in every bite.
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
                      <h4 className="why-select-us-item-title">Chemical-Free</h4>
                      <p className="why-select-us-content">
                        Embrace organic farming: excellence sans synthetics. Witness soil fertility,
                        biodiversity, and exceptional agricultural products through natural methods.
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

export default ProductSection;