'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const TestimonialSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Animation effect for cards on load
  useEffect(() => {
    const cards = document.querySelectorAll('.testimonial-grid-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate-fade-up');
      }, index * 150);
    });
  }, []);

  return (
    <section className="testimonial-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="testimonial-wrap">
          <div className="testimonial-title-wrap">
            <h2 className="section-title">Authentic Voices from Our Valued Customers</h2>
          </div>
          <div className="w-layout-grid testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-grid-card transition-all duration-300 ease-in-out ${activeCard === index ? 'scale-105  ' : 'hover:scale-[1.02]'}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              >
                <div className="testimonial-profile-wrap">
                  <div className="testimonial-image-wrap">
                    <Image
                      src={testimonial.image}
                      width={80}
                      height={80}
                      loading="lazy"
                      alt="testimonial profile images"
                      className="testimonial-profile-image w-[80px] h-[80px] rounded-full object-cover"
                    />
                  </div>
                  <div className="testimonial-details-wrap">
                    <h3 className="testimonial-profile-name">{testimonial.name}</h3>
                    <p className="testimonial-profile-description">{testimonial.role}</p>
                  </div>
                </div>
                <p className="testimonial-card-content">{testimonial.content}</p>
              </div>
            ))}
          </div>
          <div  className="testimonial-leaf-bg">
            <Image
              src="/testimonial-pattern-leafs.png"
              width={300}
              height={300}
              loading="lazy"
              alt="testimonial leafs"
              className="testimonial-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: 'Fatima Al Zahra',
    role: 'Cultural Curator, UAE',
    content: 'The antiques from KanzulHind add authentic heritage to my space.',
    image: 'https://thumbs.dreamstime.com/b/young-arab-man-smiling-confident-standing-street-290073953.jpg'
  },
  {
    name: 'Omar Al Farsi',
    role: 'Chef, Saudi Arabia',
    content: 'The spices bring rich, pure flavors to our traditional dishes.',
    image: 'https://st2.depositphotos.com/1011643/9196/i/950/depositphotos_91965412-stock-photo-arabian-man-standing-near-house.jpg'
  },
  {
    name: 'Layla  Mansoori',
    role: 'Boutique Owner, Qatar',
    content: 'Their fabrics blend tradition with luxury — our clients love it.',
    image: 'https://www.brandedgirls.com/wp-content/uploads/2015/11/almousa_su-700x.jpeg'
  },
  {
    name: 'Yusuf Al Najjar',
    role: 'Organic Lifestyle Advocate, Oman',
    content: 'KanzulHind stands out for quality, authenticity, and care.',
    image: 'https://i.pinimg.com/736x/de/81/d7/de81d7fe375c5290385c36bdd7ef7936.jpg'
  }
];



export default TestimonialSection;