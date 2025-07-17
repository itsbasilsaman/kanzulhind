'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import LocalizedText from "@/components/LocalizedText";

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
    { name: { en: "Basmati Rice", ar: "أرز بسمتي" }, href: "basmati-rice.html" },
    { name: { en: "Jasmine Rice", ar: "أرز ياسمين" }, href: "jasmine-rice.html" },
    { name: { en: "Sona Masoori", ar: "سونا ماسوري" }, href: "sona-masoori.html" },
    { name: { en: "Brown Basmati", ar: "بسمتي بني" }, href: "brown-basmati.html" },
    { name: { en: "Red Rice", ar: "أرز أحمر" }, href: "red-rice.html" },
  ];

  const faqs = [
    {
      question: {
        en: "What makes Basmati rice special?",
        ar: "ما الذي يميز أرز بسمتي؟"
      },
      answer: {
        en: "Basmati rice is known for its distinctive aroma, long slender grains, and fluffy texture when cooked. It's aged for 2-3 years to develop its characteristic fragrance and is considered the 'King of Rice' in Indian cuisine.",
        ar: "يُعرف أرز بسمتي برائحته المميزة وحبوبه الطويلة الرفيعة وقوامه المنفوش عند الطهي. يُعتق لمدة 2-3 سنوات ليكتسب رائحته الفريدة، ويُعتبر 'ملك الأرز' في المطبخ الهندي."
      }
    },
    {
      question: {
        en: "How should I store premium rice varieties?",
        ar: "كيف يجب أن أخزن أنواع الأرز الفاخرة؟"
      },
      answer: {
        en: "Store rice in an airtight container in a cool, dry place away from direct sunlight. For longer shelf life, you can refrigerate or freeze rice. Proper storage helps maintain the aroma and quality of premium rice varieties.",
        ar: "يُنصح بتخزين الأرز في وعاء محكم الإغلاق في مكان بارد وجاف بعيدًا عن أشعة الشمس المباشرة. ولعمر أطول، يمكن تبريده أو تجميده. التخزين الجيد يحافظ على رائحة وجودة الأرز الفاخر."
      }
    },
    {
      question: {
        en: "What's the difference between white and brown Basmati?",
        ar: "ما الفرق بين بسمتي الأبيض والبني؟"
      },
      answer: {
        en: "White Basmati has the outer bran layer removed, making it lighter and faster to cook. Brown Basmati retains the bran layer, providing more fiber and nutrients while maintaining the characteristic Basmati aroma and taste.",
        ar: "يتم إزالة طبقة النخالة الخارجية من بسمتي الأبيض، فيصبح أخف وأسهل في الطهي. أما البسمتي البني فيحتفظ بالنخالة، فيوفر أليافًا وعناصر غذائية أكثر مع الحفاظ على رائحة وطعم البسمتي المميزين."
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
                  <LocalizedText en="Rice Varieties" ar="أنواع الأرز" />
                </h2>
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
                          <LocalizedText en={variety.name.en} ar={variety.name.ar} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="service-cta-card   rices  group hover:shadow-lg transition-all duration-300">
              <h2 className="service-cta-title">
                <LocalizedText en="Looking for specific rice variety? Contact us!" ar="تبحث عن نوع أرز معين؟ تواصل معنا!" />
              </h2>
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
              <h4><LocalizedText en="Premium Indian Rice Collection" ar="مجموعة الأرز الهندي الفاخر" /></h4>
              <p><LocalizedText en="We specialize in sourcing and delivering the finest quality Indian rice varieties, bringing the authentic taste and aroma of India to your table. Our carefully curated selection represents the best of traditional Indian rice cultivation." ar="نحن متخصصون في توريد وتقديم أجود أنواع الأرز الهندي، لنقدم لك الطعم والرائحة الأصيلة للهند على مائدتك. مجموعتنا المختارة بعناية تمثل أفضل ما في زراعة الأرز التقليدية الهندية." /></p>
              <p><LocalizedText en="With generations of expertise in rice trading and quality assurance, our team ensures that every grain meets the highest standards of purity, aroma, and taste that Indian rice is renowned for worldwide." ar="بفضل خبرة أجيال في تجارة الأرز وضمان الجودة، يضمن فريقنا أن كل حبة تلبي أعلى معايير النقاء والرائحة والطعم التي يشتهر بها الأرز الهندي عالميًا." /></p>
              <h4><LocalizedText en="Why Choose Our Premium Rice?" ar="لماذا تختار الأرز الفاخر لدينا؟" /></h4>
              <p><LocalizedText en="Our rice collection represents the finest examples of Indian rice varieties, each with its unique characteristics and culinary applications." ar="تمثل مجموعتنا من الأرز أفضل أنواع الأرز الهندي، ولكل نوع خصائصه الفريدة واستخداماته في الطهي." /></p>
              <ul role="list">
                <li className="hover:text-green-600 transition-colors"><LocalizedText en="Authentic Indian Origin & Quality" ar="أصل وجودة هندية أصيلة" /></li>
                <li className="hover:text-green-600 transition-colors"><LocalizedText en="Premium Grade Selection" ar="اختيار من الدرجة الممتازة" /></li>
                <li className="hover:text-green-600 transition-colors"><LocalizedText en="Natural Aging Process" ar="عملية تعتيق طبيعية" /></li>
                <li className="hover:text-green-600 transition-colors"><LocalizedText en="Certified Organic Options" ar="خيارات عضوية معتمدة" /></li>
              </ul>
              <h4><LocalizedText en="Our Rice Varieties" ar="أنواع الأرز لدينا" /></h4>
              <p><LocalizedText en="From the aromatic Basmati to the fragrant Jasmine, from traditional Sona Masoori to specialty red rice varieties, we offer a comprehensive range of premium Indian rice, each carefully selected for its quality and authenticity." ar="من البسمتي العطري إلى الياسمين الفواح، ومن سونا ماسوري التقليدي إلى أنواع الأرز الأحمر المميزة، نقدم مجموعة شاملة من الأرز الهندي الفاخر، تم اختيار كل نوع بعناية لجودته وأصالته." /></p>
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
              <p><LocalizedText en="We are committed to preserving the traditional methods of rice cultivation and processing, ensuring that every grain carries the authentic taste and aroma that has made Indian rice famous across the globe." ar="نحن ملتزمون بالحفاظ على الأساليب التقليدية في زراعة ومعالجة الأرز، لضمان أن كل حبة تحمل الطعم والرائحة الأصيلة التي جعلت الأرز الهندي مشهورًا عالميًا." /></p>
              <h4><LocalizedText en="Contact Us" ar="تواصل معنا" /></h4>
              <p><LocalizedText en="Whether you're a culinary professional, restaurant owner, or home cook seeking authentic Indian rice varieties, our team is here to help you discover the perfect rice for your culinary needs." ar="سواء كنت محترفًا في الطهي أو صاحب مطعم أو طباخًا منزليًا تبحث عن أنواع الأرز الهندي الأصيلة، فإن فريقنا هنا لمساعدتك في اكتشاف النوع المثالي لاحتياجاتك." /></p>
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