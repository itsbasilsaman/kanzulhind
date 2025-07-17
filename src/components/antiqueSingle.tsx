'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import LocalizedText from "@/components/LocalizedText";

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
    { name: { en: "Furniture Antique", ar: "أثاث أثري" } },
    { name: { en: "Collectibles Antique", ar: "مقتنيات أثرية" } },
    { name: { en: "Decor Antiques", ar: "ديكور أثري" } },
  ];

  const serviceContents = [
    {
      title: { en: "Furniture Antique", ar: "أثاث أثري" },
      content: (
        <>
          <h4><LocalizedText en="Furniture Antique" ar="أثاث أثري" /></h4>
          <p><LocalizedText en="Explore our curated collection of antique furniture, featuring timeless pieces that reflect the artistry and craftsmanship of bygone eras." ar="استكشف مجموعتنا المختارة من الأثاث الأثري، والتي تضم قطعًا خالدة تعكس فنون وحرف العصور الماضية." /></p>
          <p><LocalizedText en="From grand Victorian dining tables and intricately carved Chippendale chairs to elegant French armoires and Georgian sideboards, each item in our selection is chosen for its historical significance, authenticity, and enduring beauty." ar="من طاولات الطعام الفيكتورية الفخمة والكراسي المنحوتة بدقة إلى الخزائن الفرنسية الأنيقة وخزائن جانبية جورجية، كل قطعة مختارة لأهميتها التاريخية وأصالتها وجمالها الدائم." /></p>
          <p><LocalizedText en="Our team of experts meticulously authenticates every piece, ensuring original materials, period-accurate construction, and provenance. Whether you are a collector, interior designer, or simply appreciate the charm of antique furniture, we offer pieces that blend history with functional elegance." ar="يقوم فريق خبرائنا بفحص كل قطعة بدقة، لضمان المواد الأصلية والبناء الدقيق والتوثيق التاريخي. سواء كنت جامعًا أو مصمم ديكور أو من محبي الأثاث الأثري، نقدم لك قطعًا تجمع بين التاريخ والأناقة العملية." /></p>
        </>
      )
    },
    {
      title: { en: "Collectibles Antique", ar: "مقتنيات أثرية" },
      content: (
        <>
          <h4><LocalizedText en="Collectibles Antique" ar="مقتنيات أثرية" /></h4>
          <p><LocalizedText en="Discover a world of rare and fascinating collectibles, from vintage toys and coins to historical memorabilia and unique curiosities." ar="اكتشف عالمًا من المقتنيات النادرة والمثيرة، من الألعاب والعملات القديمة إلى التذكارات التاريخية والغرائب الفريدة." /></p>
          <p><LocalizedText en="Our collectibles span centuries and cultures, including limited-edition figurines, antique maps, rare stamps, and ephemera that tell the stories of the past. Each collectible is carefully vetted for authenticity and condition, with detailed documentation provided." ar="تغطي مقتنياتنا قرونًا وثقافات متعددة، وتشمل تماثيل إصدار محدود وخرائط أثرية وطوابع نادرة ووثائق تروي قصص الماضي. يتم فحص كل قطعة بعناية من حيث الأصالة والحالة مع توفير توثيق مفصل." /></p>
          <p><LocalizedText en="Whether you are seeking to expand your collection or searching for a one-of-a-kind gift, our selection offers treasures that capture the imagination and preserve the legacy of human creativity." ar="سواء كنت ترغب في توسيع مجموعتك أو تبحث عن هدية فريدة، فإن مجموعتنا تقدم كنوزًا تأسر الخيال وتحفظ إرث الإبداع البشري." /></p>
        </>
      )
    },
    {
      title: { en: "Decor Antiques", ar: "ديكور أثري" },
      content: (
        <>
          <h4><LocalizedText en="Decor Antiques" ar="ديكور أثري" /></h4>
          <p><LocalizedText en="Enhance your living spaces with our exquisite range of decor antiques, including fine porcelain, silverware, glassware, and decorative art objects." ar="عزز مساحاتك المعيشية بمجموعة رائعة من ديكورات التحف، بما في ذلك البورسلين الفاخر وأدوات الفضة والزجاج والأعمال الفنية الزخرفية." /></p>
          <p><LocalizedText en="Our decor antiques feature pieces from renowned makers and artistic movements, such as Art Nouveau vases, Meissen figurines, Tiffany lamps, and ornate candelabras. Each item is selected for its craftsmanship, aesthetic appeal, and historical value." ar="تضم ديكوراتنا قطعًا من صانعين مشهورين وحركات فنية مثل مزهريات آرت نوفو وتماثيل مايسن ومصابيح تيفاني وشمعدانات مزخرفة. كل قطعة مختارة لحرفيتها وجمالها وقيمتها التاريخية." /></p>
          <p><LocalizedText en="Perfect for collectors, interior designers, or anyone looking to add a touch of elegance and history to their home, our decor antiques are both beautiful and investment-worthy." ar="مثالية لهواة الجمع أو مصممي الديكور أو أي شخص يرغب في إضافة لمسة من الأناقة والتاريخ لمنزله، تحفنا الزخرفية جميلة وجديرة بالاقتناء." /></p>
        </>
      )
    },
  ];

  const faqs = [
    {
      question: {
        en: "How do you authenticate antique items?",
        ar: "كيف يتم التحقق من أصالة القطع الأثرية؟"
      },
      answer: {
        en: "We use a combination of expert appraisal, provenance research, material analysis, and historical documentation to authenticate all antique items in our collection.",
        ar: "نستخدم مزيجًا من التقييم الخبير، وبحث الأصل، وتحليل المواد، والتوثيق التاريخي للتحقق من أصالة جميع القطع الأثرية في مجموعتنا."
      }
    },
    {
      question: {
        en: "What is the difference between antique and vintage?",
        ar: "ما الفرق بين الأثري والقديم؟"
      },
      answer: {
        en: "Antique items are typically 100+ years old, while vintage items are usually 20-100 years old. Both represent different eras of craftsmanship and design.",
        ar: "القطع الأثرية عادة ما يزيد عمرها عن 100 عام، بينما القطع القديمة تتراوح أعمارها بين 20 و100 عام. كلاهما يمثل عصورًا مختلفة من الحرفية والتصميم."
      }
    },
    {
      question: {
        en: "Do you offer restoration services for damaged antiques?",
        ar: "هل تقدمون خدمات ترميم للتحف التالفة؟"
      },
      answer: {
        en: "Yes, we provide professional restoration services to preserve and enhance antique items while maintaining their historical integrity and value.",
        ar: "نعم، نقدم خدمات ترميم احترافية للحفاظ على التحف وتعزيزها مع الحفاظ على أصالتها وقيمتها التاريخية."
      }
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
                  <h2 className="service-list-card-title"><LocalizedText en="Antique Categories" ar="فئات التحف" /></h2>
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
                            <LocalizedText en={service.name.en} ar={service.name.ar} />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-cta-card   antique  group hover:shadow-lg transition-all duration-300">
                <h2 className="service-cta-title"><LocalizedText en="Looking for a specific antique? Contact us!" ar="تبحث عن قطعة أثرية محددة؟ تواصل معنا!" /></h2>
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
                <h2 className="section-title font-medium"><LocalizedText en="Frequently Asked Questions" ar="الأسئلة الشائعة" /></h2>
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