'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

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
            <div 
              ref={titleRef}
              className="our-company-title-wrap"
            >
              <h2 className="section-title">Authentic Indian Products for Your Lifestyle</h2>
              <div className="section-content-wrap">
                <p className="section-content">
                  Premium Indian heritage products - spices, textiles, rice, and antiques, bringing authentic India to the Middle East.
                </p>
              </div>
            </div>
            <div className="our-company-card-whole-grid">
              {/* Card 1 */}
              <div 
                ref={el => { cardRefs.current[0] = el; }}
                className="our-company-card"
                onMouseEnter={() => handleCardHover(0, true)}
                onMouseLeave={() => handleCardHover(0, false)}
              >
                <div className="our-company-card-icon-bg">
                  <Image
                    src="/65ead98a4be3ad22160d41af_about-list-icon-tick.svg"
                    width={50}
                    height={50}
                    loading="lazy"
                    alt="Indian Antiques Icon"
                    className="our-company-card-icon"
                  />
                </div>
                <div className="our-company-card-list-whole-wrap">
                  <h3 className="our-company-card-title">Indian Antiques</h3>
                  <div className="our-company-card-list">
                    {['Traditional Jewelry', 'Vintage Artifacts', 'Centuries of Culture', 'Heritage Pieces', 'Authentic Collection'].map((item, i) => (
                      <div key={i} className="about-list-item">
                        <div className="about-list-icon-wrap">
                          <Image
                            src="/65ead98a4be3ad22160d41af_about-list-icon-tick.svg"
                            width={20}
                            height={20}
                            loading="lazy"
                            alt=""
                            className="about-list-icon"
                          />
                        </div>
                        <p className="about-list-content">{item}</p>
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
                  <Image
                    src="/65ead98a4be3ad22160d41af_about-list-icon-tick.svg"
                    width={50}
                    height={50}
                    loading="lazy"
                    alt="Traditional Textiles Icon"
                    className="our-company-card-icon"
                  />
                </div>
                <div className="our-company-card-list-whole-wrap">
                  <h3 className="our-company-card-title">Traditional Textiles</h3>
                  <div className="our-company-card-list">
                    {['Silk Sarees', 'Handcrafted Cotton', 'Rich Textile Heritage', 'Premium Fabrics', 'Traditional Garments'].map((item, i) => (
                      <div key={i} className="about-list-item">
                        <div className="about-list-icon-wrap">
                          <Image
                            src="/65ead98a4be3ad22160d41af_about-list-icon-tick.svg"
                            width={20}
                            height={20}
                            loading="lazy"
                            alt=""
                            className="about-list-icon"
                          />
                        </div>
                        <p className="about-list-content">{item}</p>
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
                  <Image
                    src="/65ead98a4be3ad22160d41af_about-list-icon-tick.svg"
                    width={50}
                    height={50}
                    loading="lazy"
                    alt="Pure Indian Spices & Rice Icon"
                    className="our-company-card-icon"
                  />
                </div>
                <div className="our-company-card-list-whole-wrap">
                  <h3 className="our-company-card-title">Pure Indian Spices & Rice</h3>
                  <div className="our-company-card-list">
                    {['Cardamom & Elaichi', 'Turmeric & Haldi', 'Saffron & Kesar', 'Basmati & Jasmine Rice', 'Direct Farm Sourcing'].map((item, i) => (
                      <div key={i} className="about-list-item">
                        <div className="about-list-icon-wrap">
                          <Image
                            src="/65ead98a4be3ad22160d41af_about-list-icon-tick.svg"
                            width={20}
                            height={20}
                            loading="lazy"
                            alt=""
                            className="about-list-icon"
                          />
                        </div>
                        <p className="about-list-content">{item}</p>
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
