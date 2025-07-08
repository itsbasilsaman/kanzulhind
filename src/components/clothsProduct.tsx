'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaWhatsapp } from "react-icons/fa6";

export interface Product {
  id: number;
  name: string;
  price: string;
  quantity: string;
  image: string;
  era?: string;
}

interface ProductSectionProps {
  products: Product[];
  category: string;
}

const cloths: Product[] = [
    {
      id: 1,
      name: 'Banarasi Silk Saree',
      price: '$350 USD',
      quantity: 'Single',
      image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg',
    },
    {
      id: 2,
      name: 'Handcrafted Cotton Kurta',
      price: '$120 USD',
      quantity: 'Single',
      image: 'https://images.pexels.com/photos/2884867/pexels-photo-2884867.jpeg',
    },
    {
      id: 3,
      name: 'Kanjeevaram Silk Saree',
      price: '$500 USD',
      quantity: 'Single',
      image: 'https://images.pexels.com/photos/2884868/pexels-photo-2884868.jpeg',
    },
    {
      id: 4,
      name: 'Traditional Lehenga',
      price: '$420 USD',
      quantity: 'Single',
      image: 'https://images.pexels.com/photos/2884870/pexels-photo-2884870.jpeg',
    },
  ];

const categories = [
  { title: 'Indian Cloths', products: cloths },
 
];

const ClothsProductSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate elements when they come into view
            const elements = entry.target.querySelectorAll('[data-animate]');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fadeInUp');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const currentSectionRef = sectionRef.current;
    
    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="our-products-section pt-24 lg:pt-28">
      <div className="w-layout-blockcontainer container w-container">
        <div className=" ">
          <div 
            data-animate
            className="our-products-title-wrap animate-fadeInUp"
          >
            <h2 className="section-title text-center">Our products</h2>
          </div>
          {categories.map((cat, idx) => (
            <div className="our-products-list-wrap" key={cat.title}>
              <div 
                data-animate
                className="products-category-title-wrap animate-fadeInUp"
              >
                <div className="products-line-wrap"></div>
                <h3 className="products-category-title">{cat.title}</h3>
                <div className="products-line-wrap"></div>
              </div>
              <div 
                data-animate
                className="product-listing animate-fadeInUp"
              >
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items product-grid">
                    {cat.products.map((product) => (
                      <a
                        key={product.id}
                        href={`https://wa.me/966571961404?text=${encodeURIComponent(`Hi, I'm interested in the ${product.name}. Could you please share more details for enquiry?\n`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="product-item w-dyn-item w-col  group cursor-pointer transition-all duration-300 transform-gpu hover:scale-105 hover:-rotate-1 active:scale-95"
                        style={{ textDecoration: 'none' }}
                      >
                        <div className="product-list-wrap">
                          <div className="relative w-full h-64 overflow-hidden rounded-xl">
                            <Image
                              src={product.image}
                              fill
                              alt={product.name}
                              className="product-image object-cover transition-transform duration-300 rounded-xl"
                            />
                            {/* WhatsApp icon and text on hover */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl bg-black/10 backdrop-blur-sm">
                              <span className="flex gap-2 items-center text-white text-lg font-semibold bg-[#41574B] px-4 py-2 rounded-full">
                                <FaWhatsapp className='text-[20px]' /> Connect us
                              </span>
                            </div>
                          </div>
                          <div className="product-price-wrap">
                            <span className="product-name-link">
                              {product.name}
                            </span>
                            <div className="product-price-quantity">
                              <p className="product-price-text">{product.price}</p>
                              <p className="product-price-text">/</p>
                              <p className="product-price-text">{product.quantity}</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClothsProductSection;