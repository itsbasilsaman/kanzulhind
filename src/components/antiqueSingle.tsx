'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AntiqueSingle() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);

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
    { name: "Furniture Antique" },
    { name: "Collectibles Antique" },
    { name: "Decor Antiques" },
  ];

  const serviceContents = [
    {
      title: "Furniture Antique",
      content: (
        <>
          <h4>Furniture Antique</h4>
          <p>Explore our curated collection of antique furniture, featuring timeless pieces that reflect the artistry and craftsmanship of bygone eras.</p>
          <p>From grand Victorian dining tables and intricately carved Chippendale chairs to elegant French armoires and Georgian sideboards, each item in our selection is chosen for its historical significance, authenticity, and enduring beauty.</p>
          <p>Our team of experts meticulously authenticates every piece, ensuring original materials, period-accurate construction, and provenance. Whether you are a collector, interior designer, or simply appreciate the charm of antique furniture, we offer pieces that blend history with functional elegance.</p>
        </>
      )
    },
    {
      title: "Collectibles Antique",
      content: (
        <>
          <h4>Collectibles Antique</h4>
          <p>Discover a world of rare and fascinating collectibles, from vintage toys and coins to historical memorabilia and unique curiosities.</p>
          <p>Our collectibles span centuries and cultures, including limited-edition figurines, antique maps, rare stamps, and ephemera that tell the stories of the past. Each collectible is carefully vetted for authenticity and condition, with detailed documentation provided.</p>
          <p>Whether you are seeking to expand your collection or searching for a one-of-a-kind gift, our selection offers treasures that capture the imagination and preserve the legacy of human creativity.</p>
        </>
      )
    },
    {
      title: "Decor Antiques",
      content: (
        <>
          <h4>Decor Antiques</h4>
          <p>Enhance your living spaces with our exquisite range of decor antiques, including fine porcelain, silverware, glassware, and decorative art objects.</p>
          <p>Our decor antiques feature pieces from renowned makers and artistic movements, such as Art Nouveau vases, Meissen figurines, Tiffany lamps, and ornate candelabras. Each item is selected for its craftsmanship, aesthetic appeal, and historical value.</p>
          <p>Perfect for collectors, interior designers, or anyone looking to add a touch of elegance and history to their home, our decor antiques are both beautiful and investment-worthy.</p>
        </>
      )
    },
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

  // Handle fade animation on service change
  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => setFade(false), 400);
    return () => clearTimeout(timeout);
  }, [activeService]);

  return (
    <section className="service-single-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="service-single-wrap">
          <div 
            data-animate
            className="service-left-wrap animate-fadeIn transition-opacity duration-500 delay-100"
          >
            <div className="service-left-sticky">
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
                          className={`w-dyn-item hover:translate-x-2 transition-transform duration-200 ${activeService === index ? 'active-service' : ''}`}
                          onClick={() => setActiveService(index)}
                          style={{ cursor: 'pointer' }}
                        >
                          <span className="service-list-link">
                            {service.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-cta-card   antique  group hover:shadow-lg transition-all duration-300">
                <h2 className="service-cta-title">Looking for a specific antique? Contact us!</h2>
                <div className="service-cta-link-wrap">
                  <a href="tel:+966571961404" className="service-contact-link hover:text-green-600 transition-colors">
                    +966571961404
                  </a>
                </div>
                <div className="service-cta-bg-overlay"></div>
              </div>
            </div>
          </div>
          <div 
            data-animate
            className="service-summary-whole-wrap animate-fadeIn transition-opacity duration-500 delay-200"
          >
            <div className={`service-summary w-richtext fade-anim${fade ? ' fade-out' : ' fade-in'}`}
              key={activeService}
            >
              {serviceContents[activeService].content}
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