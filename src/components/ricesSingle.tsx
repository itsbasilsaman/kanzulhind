'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function RicesSingle() {
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

  const riceVarieties = [
    { name: "Basmati Rice", href: "basmati-rice.html" },
    { name: "Jasmine Rice", href: "jasmine-rice.html" },
    { name: "Sona Masoori", href: "sona-masoori.html" },
    { name: "Brown Basmati", href: "brown-basmati.html" },
    { name: "Red Rice", href: "red-rice.html" },
  ];

  const faqs = [
    {
      question: "What makes Basmati rice special?",
      answer: "Basmati rice is known for its distinctive aroma, long slender grains, and fluffy texture when cooked. It's aged for 2-3 years to develop its characteristic fragrance and is considered the 'King of Rice' in Indian cuisine."
    },
    {
      question: "How should I store premium rice varieties?",
      answer: "Store rice in an airtight container in a cool, dry place away from direct sunlight. For longer shelf life, you can refrigerate or freeze rice. Proper storage helps maintain the aroma and quality of premium rice varieties."
    },
    {
      question: "What's the difference between white and brown Basmati?",
      answer: "White Basmati has the outer bran layer removed, making it lighter and faster to cook. Brown Basmati retains the bran layer, providing more fiber and nutrients while maintaining the characteristic Basmati aroma and taste."
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
                <h2 className="service-list-card-title">Rice Varieties</h2>
              </div>
              <div className="service-list">
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    {riceVarieties.map((variety, index) => (
                      <div 
                        key={index} 
                        role="listitem" 
                        className="w-dyn-item hover:translate-x-2 transition-transform duration-200"
                      >
                        <a href={variety.href} className="service-list-link">
                          {variety.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="service-cta-card   rices  group hover:shadow-lg transition-all duration-300">
              <h2 className="service-cta-title">Looking for specific rice variety? Contact us!</h2>
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
              <h4>Premium Indian Rice Collection</h4>
              <p>We specialize in sourcing and delivering the finest quality Indian rice varieties, bringing the authentic taste and aroma of India to your table. Our carefully curated selection represents the best of traditional Indian rice cultivation.</p>
              <p>With generations of expertise in rice trading and quality assurance, our team ensures that every grain meets the highest standards of purity, aroma, and taste that Indian rice is renowned for worldwide.</p>
              <h4>Why Choose Our Premium Rice?</h4>
              <p>Our rice collection represents the finest examples of Indian rice varieties, each with its unique characteristics and culinary applications.</p>
              <ul role="list">
                <li className="hover:text-green-600 transition-colors">Authentic Indian Origin & Quality</li>
                <li className="hover:text-green-600 transition-colors">Premium Grade Selection</li>
                <li className="hover:text-green-600 transition-colors">Natural Aging Process</li>
                <li className="hover:text-green-600 transition-colors">Certified Organic Options</li>
              </ul>
              <h4>Our Rice Varieties</h4>
              <p>From the aromatic Basmati to the fragrant Jasmine, from traditional Sona Masoori to specialty red rice varieties, we offer a comprehensive range of premium Indian rice, each carefully selected for its quality and authenticity.</p>
              <figure style={{ maxWidth: '752px' }} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                <div>
                  <Image
                    src="https://www.thedailymeal.com/img/gallery/types-of-rice-and-how-to-cook-them/l-intro-1676410300.jpg"
                    width={752}
                    height={400}
                    alt="Premium Indian rice varieties"
                    className="rounded-lg hover:shadow-md transition-shadow duration-300"
                  />
                </div>
              </figure>
              <p>We are committed to preserving the traditional methods of rice cultivation and processing, ensuring that every grain carries the authentic taste and aroma that has made Indian rice famous across the globe.</p>
              <h4>Contact Us</h4>
              <p>Whether you&apos;re a culinary professional, restaurant owner, or home cook seeking authentic Indian rice varieties, our team is here to help you discover the perfect rice for your culinary needs.</p>
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