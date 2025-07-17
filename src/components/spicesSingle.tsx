'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import LocalizedText from "@/components/LocalizedText";

export default function SpicesSingle() {
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
    { name: { en: "Cardamom", ar: "هيل" }, href: "cardamom.html" },
    { name: { en: "Turmeric", ar: "كركم" }, href: "turmeric.html" },
    { name: { en: "Saffron", ar: "زعفران" }, href: "saffron.html" },
    { name: { en: "Cinnamon", ar: "قرفة" }, href: "cinnamon.html" },
    { name: { en: "Black Pepper", ar: "فلفل أسود" }, href: "black-pepper.html" },
  ];

  const faqs = [
    {
      question: {
        en: "How do you ensure the authenticity of your Indian spices?",
        ar: "كيف تضمنون أصالة التوابل الهندية لديكم؟"
      },
      answer: {
        en: "We source our spices directly from certified farms across India, ensuring each batch is tested for purity, potency, and authenticity. Our quality control process includes rigorous testing for contaminants and verification of origin.",
        ar: "نحصل على توابلنا مباشرة من مزارع معتمدة في جميع أنحاء الهند، مع اختبار كل دفعة لضمان النقاء والقوة والأصالة. تشمل عملية مراقبة الجودة لدينا اختبارات دقيقة للملوثات والتحقق من المصدر."
      }
    },
    {
      question: {
        en: "What makes your spices different from regular store-bought ones?",
        ar: "ما الذي يميز توابلكم عن التوابل المتوفرة في المتاجر العادية؟"
      },
      answer: {
        en: "Our spices are sourced directly from farms, eliminating middlemen and ensuring fresher, more potent flavors. They are carefully harvested, processed, and packaged to preserve their natural aroma and medicinal properties.",
        ar: "توابلنا تأتي مباشرة من المزارع دون وسطاء، ما يضمن نكهة أقوى وأعذب. يتم حصادها ومعالجتها وتعبئتها بعناية للحفاظ على رائحتها الطبيعية وخصائصها العلاجية."
      }
    },
    {
      question: {
        en: "Do you offer organic spice options?",
        ar: "هل تقدمون خيارات توابل عضوية؟"
      },
      answer: {
        en: "Yes, we offer a wide selection of organic Indian spices that are grown without synthetic pesticides or fertilizers, ensuring the purest and most natural flavors for your culinary creations.",
        ar: "نعم، نقدم مجموعة واسعة من التوابل الهندية العضوية المزروعة دون مبيدات أو أسمدة صناعية، لضمان أنقى وألذ النكهات لأطباقكم."
      }
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
                <h2 className="service-list-card-title">
                  <LocalizedText en="Spice Categories" ar="فئات التوابل" />
                </h2>
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
                          <LocalizedText en={service.name.en} ar={service.name.ar} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="  service-cta-card spices  group hover:shadow-lg transition-all duration-300">
              <h2 className="service-cta-title">
                <LocalizedText en="Looking for specific spices? Contact us!" ar="تبحث عن توابل معينة؟ تواصل معنا!" />
              </h2>
              <div className="service-cta-link-wrap">
                <div className="service-cta-icon-bg">
                  {/* <Image
                    src="https://images.pexels.com/photos/2884867/pexels-photo-2884867.jpeg?_gl=1*srpa6d*_ga*MTM0MzMxOTA0NS4xNzIxMDQ2ODAy*_ga_8JE65Q40S6*czE3NTE2OTQwNTEkbzExJGcxJHQxNzUxNjk0MDc0JGozNyRsMCRoMA.."
                    width={24}
                    height={24}
                    alt="service cta link icon"
                    className="group-hover:rotate-12 transition-transform duration-200"
                  /> */}
                </div>
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
              <h4><LocalizedText en="Pure Indian Spices" ar="توابل هندية نقية" /></h4>
              <p><LocalizedText en="Authentic Indian spices sourced directly from farms - cardamom, turmeric, saffron and more, delivering authentic flavors to your kitchen." ar="توابل هندية أصلية تُجلب مباشرة من المزارع - هيل، كركم، زعفران وأكثر، لتمنح مطبخك نكهات أصيلة." /></p>
              <p><LocalizedText en="With generations of expertise in spice cultivation and processing, our carefully selected spices bring the true essence of Indian cuisine to your home, ensuring every dish is infused with authentic flavors and aromas." ar="بخبرة أجيال في زراعة ومعالجة التوابل، نقدم لكم توابل مختارة بعناية تجلب جوهر المطبخ الهندي الأصيل إلى منزلكم، لتضفي على كل طبق نكهات وروائح فريدة." /></p>
              <h4><LocalizedText en="Why Choose Our Spices?" ar="لماذا تختار توابلنا؟" /></h4>
              <p><LocalizedText en="Our spices represent the finest quality available, sourced directly from the most renowned spice-growing regions across India." ar="توابلنا تمثل أعلى درجات الجودة، حيث يتم الحصول عليها مباشرة من أشهر مناطق زراعة التوابل في الهند." /></p>
              <ul role="list">
                <li className="hover:text-green-600 transition-colors"><LocalizedText en="Direct Farm-to-Table Sourcing" ar="من المزرعة إلى المائدة مباشرة" /></li>
                <li className="hover:text-green-600 transition-colors"><LocalizedText en="Premium Quality Selection" ar="اختيار عالي الجودة" /></li>
                <li className="hover:text-green-600 transition-colors"><LocalizedText en="Authentic Indian Flavors" ar="نكهات هندية أصيلة" /></li>
                <li className="hover:text-green-600 transition-colors"><LocalizedText en="Fresh & Potent Aromas" ar="روائح طازجة وقوية" /></li>
              </ul>
              <h4><LocalizedText en="Our Spice Collection" ar="مجموعة التوابل لدينا" /></h4>
              <p><LocalizedText en="From the aromatic cardamom pods to the golden turmeric, from precious saffron threads to robust black pepper, we offer a comprehensive range of authentic Indian spices that will transform your culinary experience." ar="من حبات الهيل العطرية إلى الكركم الذهبي، ومن خيوط الزعفران الثمينة إلى الفلفل الأسود القوي، نقدم مجموعة شاملة من التوابل الهندية الأصيلة التي ستغير تجربتك في الطهي." /></p>
              <figure style={{ maxWidth: '752px' }} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={752}
                    height={400}
                    alt="Authentic Indian spices collection"
                    className="rounded-lg hover:shadow-md transition-shadow duration-300"
                  />
                </div>
              </figure>
              <p><LocalizedText en="We are committed to preserving the traditional methods of spice cultivation and processing, ensuring that every spice in our collection carries the authentic taste and aroma that has made Indian cuisine world-famous." ar="نحن ملتزمون بالحفاظ على الطرق التقليدية في زراعة ومعالجة التوابل، لضمان أن كل نوع في مجموعتنا يحمل الطعم والرائحة الأصيلة التي جعلت المطبخ الهندي مشهورًا عالميًا." /></p>
              <h4><LocalizedText en="Contact Us" ar="تواصل معنا" /></h4>
              <p><LocalizedText en="Whether you're a professional chef or a home cook passionate about authentic flavors, our team is here to help you discover the perfect spices that will elevate your dishes to new heights of culinary excellence." ar="سواء كنت طاهياً محترفاً أو هاوياً يعشق النكهات الأصيلة، فإن فريقنا هنا لمساعدتك في اكتشاف التوابل المثالية التي سترتقي بأطباقك إلى أعلى مستويات التميز." /></p>
            </div>
            <div className="faq-service-wrap">
              <div className="faq-title-wrap service-post">
                <h2 className="section-title font-medium">
                  <LocalizedText en="Frequently Asked Questions" ar="الأسئلة الشائعة" />
                </h2>
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
                      <div><LocalizedText en={faq.question.en} ar={faq.question.ar} /></div>
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
                          <LocalizedText en={faq.answer.en} ar={faq.answer.ar} />
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