'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AntiqueSingle() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Animation on scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.75) {
          element.classList.add('animate-fadeIn');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    { name: "Antique Furniture", href: "antique-furniture.html" },
    { name: "Vintage Jewelry", href: "vintage-jewelry.html" },
    { name: "Collectible Art", href: "collectible-art.html" },
    { name: "Rare Books & Manuscripts", href: "rare-books.html" },
    { name: "Vintage Watches", href: "vintage-watches.html" },
  ];

  const faqs = [
    {
      question: "How do you authenticate antique items?",
      answer: "We use a combination of expert appraisal, provenance research, material analysis, and historical documentation to authenticate all antique items in our collection."
    },
    {
      question: "What is the difference between antique and vintage?",
      answer: "Antique items are typically 100+ years old, while vintage items are usually 20-100 years old. Both represent different eras of craftsmanship and design."
    },
    {
      question: "Do you offer restoration services for damaged antiques?",
      answer: "Yes, we provide professional restoration services to preserve and enhance antique items while maintaining their historical integrity and value."
    }
  ];

  return (
    <section className="service-single-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="service-single-wrap">
          <div 
            data-animate
            className="service-left-wrap animate-fadeIn transition-opacity duration-500 delay-100"
          >
            <div className="service-list-card-wrap hover:scale-[1.02] transition-transform duration-300">
              <div className="service-list-card-title-wrap">
                <h2 className="service-list-card-title">Antique Categories</h2>
              </div>
              <div className="service-list">
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    {services.map((service, index) => (
                      <div 
                        key={index} 
                        role="listitem" 
                        className="w-dyn-item hover:translate-x-2 transition-transform duration-200"
                      >
                        <a href={service.href} className="service-list-link">
                          {service.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="service-cta-card   antique  group hover:shadow-lg transition-all duration-300">
              <h2 className="service-cta-title">Looking for a specific antique? Contact us!</h2>
              <div className="service-cta-link-wrap">
                 
                <a href="tel:+(422)544249372" className="service-contact-link hover:text-green-600 transition-colors">
                  +(422) 54424 9372
                </a>
              </div>
              <div className="service-cta-bg-overlay"></div>
            </div>
          </div>
          <div 
            data-animate
            className="service-summary-whole-wrap animate-fadeIn transition-opacity duration-500 delay-200"
          >
            <div className="service-summary w-richtext">
              <h4>Antique & Vintage Collection</h4>
              <p>We specialize in curating exceptional antique and vintage pieces that tell stories of craftsmanship, history, and timeless beauty.</p>
              <p>With decades of experience in the antique trade, our expert team carefully selects each piece, ensuring authenticity, quality, and historical significance for collectors and enthusiasts worldwide.</p>
              <h4>Why Choose Our Antiques?</h4>
              <p>Our collection represents the finest examples of historical craftsmanship and design from various periods and cultures.</p>
              <ul role="list">
                <li className="hover:text-green-600 transition-colors">Expert Authentication & Appraisal</li>
                <li className="hover:text-green-600 transition-colors">Curated Quality Selection</li>
                <li className="hover:text-green-600 transition-colors">Comprehensive Provenance Research</li>
                <li className="hover:text-green-600 transition-colors">Professional Restoration Services</li>
              </ul>
              <h4>Our Expertise</h4>
              <p>From Victorian furniture to Art Deco jewelry, from rare books to vintage timepieces, we offer a diverse range of antique categories, each carefully authenticated and documented.</p>
              <figure style={{ maxWidth: '752px' }} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1665888111461-6c98379622ab?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={752}
                    height={400}
                    alt="Antique furniture and collectibles"
                    className="rounded-lg hover:shadow-md transition-shadow duration-300"
                  />
                </div>
              </figure>
              <p>We are committed to preserving the legacy of fine craftsmanship and connecting collectors with pieces that carry historical significance and artistic merit.</p>
              <h4>Contact Us</h4>
              <p>Whether you&apos;re a seasoned collector or new to the world of antiques, our team is here to help you discover exceptional pieces that will become treasured additions to your collection.</p>
            </div>
            <div className="faq-service-wrap">
              <div className="faq-title-wrap service-post">
                <h2 className="section-title font-medium">Frequently Asked Questions</h2>
              </div>
              <div className="faq-whole-wrap service-post">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className={`faq service-post ${activeFaq === index ? 'active' : ''}`}
                  >
                    <div 
                      className="faq-toggle service-post cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => toggleFaq(index)}
                    >
                      <div>{faq.question}</div>
                      <div className="faq-icon-wrap">
                        <Image
                          src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                          width={16}
                          height={16}
                          alt="FAQ icon"
                          className={`faq-icon vertical transition-transform duration-200 ${activeFaq === index ? 'rotate-0' : '-rotate-90'}`}
                        />
                        <Image
                          src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                          width={16}
                          height={16}
                          alt="FAQ icon"
                          className="faq-icon"
                        />
                      </div>
                    </div>
                    <div 
                      className={`faq-answer-list transition-all duration-300 overflow-hidden ${activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="faq-answer-list-wrap service">
                        <p className="faq-answer-content">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}