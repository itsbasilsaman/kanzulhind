'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import LocalizedText from "@/components/LocalizedText";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { GiTravelDress } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";

export default function Informations() {
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add('fade-in-up');
            } else {
              const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
              setTimeout(() => {
                entry.target.classList.add('fade-in-up');
              }, index * 150);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentTitleRef = titleRef.current;
    const currentCardRefs = cardRefs.current;

    if (currentTitleRef) observer.observe(currentTitleRef);
    currentCardRefs.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (currentTitleRef) observer.unobserve(currentTitleRef);
      currentCardRefs.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const handleCardHover = (index: number, isHovering: boolean) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.transform = isHovering ? 'translateY(-5px)' : 'translateY(0)';
      card.style.transition = 'transform 0.3s ease';
    }
  };

  return (
    <section className="our-company-section">
      <div className="linear-section-bg">
        <div className="w-layout-blockcontainer container w-container">
          <div className="our-company-wrap">
             
            <div className="our-company-card-whole-grid">
              {/* Card 1 */}
              <div 
                ref={el => { cardRefs.current[0] = el; }}
                className="our-company-card"
                onMouseEnter={() => handleCardHover(0, true)}
                onMouseLeave={() => handleCardHover(0, false)}
              >
                <div className="our-company-card-icon-bg">
                <FaHandsHoldingCircle size={35} className='text-white' />
                </div>
                <div className="our-company-card-list-whole-wrap">
                  <h3 className="our-company-card-title">
                    <LocalizedText en="Indian Antiques" ar="تحف هندية" />
                  </h3>
                  <div className="our-company-card-list">
                    {[
                      { en: 'Traditional Jewelry', ar: 'مجوهرات تقليدية' },
                      { en: 'Vintage Artifacts', ar: 'قطع أثرية قديمة' },
                      { en: 'Centuries of Culture', ar: 'قرون من الثقافة' },
                      { en: 'Heritage Pieces', ar: 'قطع تراثية' },
                      { en: 'Authentic Collection', ar: 'مجموعة أصلية' }
                    ].map((item, i) => (
                      <div key={i} className="about-list-item">
                        <div className="about-list-icon-wrap">
                          <Image
                            src="/about-list-icon-tick.svg"
                            width={20}
                            height={20}
                            loading="lazy"
                            alt=""
                            className="about-list-icon"
                          />
                        </div>
                        <p className="about-list-content">
                          <LocalizedText en={item.en} ar={item.ar} />
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div 
                ref={el => { cardRefs.current[1] = el; }}
                className="our-company-card"
                onMouseEnter={() => handleCardHover(1, true)}
                onMouseLeave={() => handleCardHover(1, false)}
              >
                <div className="our-company-card-icon-bg">
                <GiTravelDress  size={35}  className='  text-white'/>
                </div>
                <div className="our-company-card-list-whole-wrap">
                  <h3 className="our-company-card-title">
                    <LocalizedText en="Traditional Textiles" ar="منسوجات تقليدية" />
                  </h3>
                  <div className="our-company-card-list">
                    {[
                      { en: 'Silk Sarees', ar: 'ساري حرير' },
                      { en: 'Handcrafted Cotton', ar: 'قطن يدوي الصنع' },
                      { en: 'Rich Textile Heritage', ar: 'تراث غني في النسيج' },
                      { en: 'Premium Fabrics', ar: 'أقمشة فاخرة' },
                      { en: 'Traditional Garments', ar: 'ملابس تقليدية' }
                    ].map((item, i) => (
                      <div key={i} className="about-list-item">
                        <div className="about-list-icon-wrap">
                          <Image
                            src="/about-list-icon-tick.svg"
                            width={20}
                            height={20}
                            loading="lazy"
                            alt=""
                            className="about-list-icon"
                          />
                        </div>
                        <p className="about-list-content">
                          <LocalizedText en={item.en} ar={item.ar} />
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div 
                ref={el => { cardRefs.current[2] = el; }}
                className="our-company-card"
                onMouseEnter={() => handleCardHover(2, true)}
                onMouseLeave={() => handleCardHover(2, false)}
              >
                <div className="our-company-card-icon-bg">
                <FaBowlFood  size={35} className='  text-white' />
                </div>
                <div className="our-company-card-list-whole-wrap">
                  <h3 className="our-company-card-title">
                    <LocalizedText en="Pure Indian Spices & Rice" ar="توابل وأرز هندي أصيل" />
                  </h3>
                  <div className="our-company-card-list">
                    {[
                      { en: 'Cardamom & Elaichi', ar: 'هيل وإيلايتشي' },
                      { en: 'Turmeric & Haldi', ar: 'كركم وهالدي' },
                      { en: 'Saffron & Kesar', ar: 'زعفران وكيسار' },
                      { en: 'Basmati & Jasmine Rice', ar: 'أرز بسمتي وياسمين' },
                      { en: 'Direct Farm Sourcing', ar: 'توريد مباشر من المزارع' }
                    ].map((item, i) => (
                      <div key={i} className="about-list-item">
                        <div className="about-list-icon-wrap">
                          <Image
                            src="/about-list-icon-tick.svg"
                            width={20}
                            height={20}
                            loading="lazy"
                            alt=""
                            className="about-list-icon"
                          />
                        </div>
                        <p className="about-list-content">
                          <LocalizedText en={item.en} ar={item.ar} />
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .our-company-title-wrap,
        .our-company-card {
          opacity: 1;
          visibility: hidden;
          transform: translateY(20px);
        }
        
        .fade-in-up {
          visibility: visible;
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .our-company-card:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
}
