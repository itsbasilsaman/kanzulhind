'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import LocalizedText from "@/components/LocalizedText";

export default function ClothsSingle() {
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
    { name: { en: "Silk Sarees", ar: "ساري حريري" }, href: "silk-sarees.html" },
    { name: { en: "Handcrafted Cotton", ar: "قطن مصنوع يدويًا" }, href: "handcrafted-cotton.html" },
    { name: { en: "Banarasi Silk", ar: "حرير بنارسي" }, href: "banarasi-silk.html" },
    { name: { en: "Kanjeevaram Silk", ar: "حرير كانجيورام" }, href: "kanjeeفرام-silk.html" },
    { name: { en: "Traditional Garments", ar: "ملابس تقليدية" }, href: "traditional-garments.html" },
  ];

  const faqs = [
    {
      question: {
        en: "How do you ensure the authenticity of your traditional textiles?",
        ar: "كيف تضمنون أصالة الأقمشة التقليدية لديكم؟"
      },
      answer: {
        en: "We source our textiles directly from renowned weaving clusters across India, ensuring each piece is handcrafted by skilled artisans using traditional techniques passed down through generations. Our quality control process includes verification of origin and craftsmanship standards.",
        ar: "نحن نُحضر أقمشتنا مباشرة من أشهر مراكز النسيج في الهند، حيث يتم تصنيع كل قطعة يدويًا على يد حرفيين مهرة باستخدام تقنيات تقليدية متوارثة عبر الأجيال. تشمل عملية مراقبة الجودة لدينا التحقق من الأصل ومعايير الحرفية."
      }
    },
    {
      question: {
        en: "What makes your textiles different from mass-produced fabrics?",
        ar: "ما الذي يميز أقمشتكم عن الأقمشة المنتجة بكميات كبيرة؟"
      },
      answer: {
        en: "Our textiles are handcrafted by master artisans using traditional looms and techniques, ensuring unique designs, superior quality, and preservation of India's rich textile heritage. Each piece carries the distinctive touch of skilled craftsmanship.",
        ar: "أقمشتنا مصنوعة يدويًا على أيدي حرفيين خبراء باستخدام الأنوال والتقنيات التقليدية، مما يضمن تصاميم فريدة وجودة عالية والحفاظ على تراث الهند الغني في الأقمشة. كل قطعة تحمل لمسة الحرفية المميزة."
      }
    },
    {
      question: {
        en: "Do you offer custom-made traditional garments?",
        ar: "هل تقدمون ملابس تقليدية مصنوعة حسب الطلب؟"
      },
      answer: {
        en: "Yes, we offer custom-made traditional garments including sarees, lehengas, and ethnic wear. Our artisans can create personalized designs while maintaining the authenticity and quality of traditional Indian textiles.",
        ar: "نعم، نقدم ملابس تقليدية مصنوعة حسب الطلب بما في ذلك الساري واللانغا والملابس العرقية. يمكن لحرفيينا تنفيذ تصاميم مخصصة مع الحفاظ على أصالة وجودة الأقمشة الهندية التقليدية."
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
                  <LocalizedText en="Textile Categories" ar="فئات الأقمشة" />
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
            <div className="  service-cta-card cloths  group hover:shadow-lg transition-all duration-300">
              <h2 className="service-cta-title">
                <LocalizedText en="Looking for specific textiles? Contact us!" ar="تبحث عن أقمشة معينة؟ تواصل معنا!" />
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
              <h4><LocalizedText en="Premium Indian Textiles" ar="أقمشة هندية فاخرة" /></h4>
              <p><LocalizedText en="Authentic Indian fabrics and traditional garments - from silk sarees to handcrafted cotton, showcasing India's rich textile heritage." ar="أقمشة هندية أصلية وملابس تقليدية - من الساري الحريري إلى القطن المصنوع يدويًا، تعرض تراث الهند الغني في الأقمشة." /></p>
              <p><LocalizedText en="With centuries of expertise in textile craftsmanship, our carefully curated collection brings the true essence of Indian textile traditions to your wardrobe, ensuring every piece tells a story of cultural heritage and artistic excellence." ar="بفضل قرون من الخبرة في صناعة الأقمشة، تقدم مجموعتنا المختارة بعناية جوهر التقاليد النسيجية الهندية إلى خزانتك، لتروي كل قطعة قصة تراث وثقافة وإبداع فني." /></p>
              <h4><LocalizedText en="Why Choose Our Textiles?" ar="لماذا تختار أقمشتنا؟" /></h4>
              <p><LocalizedText en="Our textiles represent the finest quality available, sourced directly from the most renowned weaving clusters and artisan communities across India." ar="أقمشتنا تمثل أعلى مستويات الجودة، حيث يتم الحصول عليها مباشرة من أشهر مراكز النسيج ومجتمعات الحرفيين في الهند." /></p>
              <ul role="list">
                <li className="hover:text-green-600 transition-colors"><LocalizedText en="Handcrafted by Master Artisans" ar="مصنوعة يدويًا على أيدي خبراء" /></li>
                <li className="hover:text-green-600 transition-colors"><LocalizedText en="Traditional Weaving Techniques" ar="تقنيات نسيج تقليدية" /></li>
                <li className="hover:text-green-600 transition-colors"><LocalizedText en="Authentic Indian Designs" ar="تصاميم هندية أصلية" /></li>
                <li className="hover:text-green-600 transition-colors"><LocalizedText en="Premium Quality Materials" ar="خامات عالية الجودة" /></li>
              </ul>
              <h4><LocalizedText en="Our Textile Collection" ar="مجموعة الأقمشة لدينا" /></h4>
              <p><LocalizedText en="From the luxurious silk sarees of Banaras to the elegant Kanjeevaram silks, from handcrafted cotton garments to traditional ethnic wear, we offer a comprehensive range of authentic Indian textiles that celebrate our rich cultural heritage." ar="من الساري الحريري الفاخر في بنارس إلى حرير كانجيورام الأنيق، ومن الملابس القطنية المصنوعة يدويًا إلى الملابس التقليدية، نقدم مجموعة شاملة من الأقمشة الهندية الأصيلة التي تحتفي بتراثنا الثقافي الغني." /></p>
              <figure style={{ maxWidth: '752px' }} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                <div>
                  <Image
                    src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?_gl=1*zuiptu*_ga*MTM0MzMxOTA0NS4xNzIxMDQ2ODAy*_ga_8JE65Q40S6*czE3NTE2OTQwNTEkbzExJGcxJHQxNzUxNjk2NzEyJGoxMiRsMCRoMA.."
                    width={752}
                    height={400}
                    alt="Traditional Indian textiles collection"
                    className="rounded-lg hover:shadow-md transition-shadow duration-300"
                  />
                </div>
              </figure>
              <p><LocalizedText en="We are committed to preserving the traditional methods of textile weaving and craftsmanship, ensuring that every piece in our collection carries the authentic beauty and cultural significance that has made Indian textiles world-famous." ar="نحن ملتزمون بالحفاظ على الأساليب التقليدية في النسيج والحرفية، لضمان أن كل قطعة في مجموعتنا تحمل الجمال الأصيل والدلالة الثقافية التي جعلت الأقمشة الهندية مشهورة عالميًا." /></p>
              <h4><LocalizedText en="Contact Us" ar="تواصل معنا" /></h4>
              <p><LocalizedText en="Whether you're looking for a special occasion saree, traditional ethnic wear, or handcrafted cotton garments, our team is here to help you discover the perfect textiles that will connect you to India's rich cultural heritage." ar="سواء كنت تبحث عن ساري لمناسبة خاصة، أو ملابس تقليدية، أو ملابس قطنية مصنوعة يدويًا، فإن فريقنا هنا لمساعدتك في اكتشاف الأقمشة المثالية التي ستربطك بتراث الهند الغني." /></p>
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