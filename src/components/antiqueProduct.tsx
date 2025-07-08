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

const furniture: Product[] = [
  {
    id: 1,
    name: 'Victorian Mahogany Chair',
    price: '$1,250 USD',
    quantity: 'Single',
    image: 'https://i.pinimg.com/originals/94/60/fe/9460fec4b6dbe61daf37fff67f59e053.jpg',
    era: 'Late 19th Century'
  },
  {
    id: 2,
    name: 'Art Deco Side Table',
    price: '$895 USD',
    quantity: 'Single',
    image: 'https://rosewood.pk/wp-content/uploads/2022/11/WhatsApp-Image-2021-07-31-at-12.50.44-PM1.jpeg',
    era: '1920s'
  },
  {
    id: 3,
    name: 'Antique Writing Desk',
    price: '$2,300 USD',
    quantity: 'Single',
    image: 'https://www.theredcollectiononline.com/blog/wp-content/uploads/2022/07/cropped-redh129.jpg',
    era: 'Early 20th Century'
  },
  {
    id: 4,
    name: 'Renaissance Chest',
    price: '$3,500 USD',
    quantity: 'Single',
    image:  'http://www.theredcollectiononline.com/blog/wp-content/uploads/2023/01/cropped-redh217.jpg',
    era: '16th Century Reproduction'
  },
];

const collectibles: Product[] = [
  {
    id: 5,
    name: 'Porcelain Figurine Set',
    price: '$450 USD',
    quantity: 'Set of 3',
    image: 'https://c8.alamy.com/comp/T41GXE/antique-collectibles-on-display-in-an-antique-store-T41GXE.jpg',
    era: 'Victorian Era'
  },
  {
    id: 6,
    name: 'Antique Pocket Watch',
    price: '$675 USD',
    quantity: 'Single',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=400&q=80',
    era: '1890s'
  },
  {
    id: 7,
    name: 'Vintage Perfume Bottles',
    price: '$320 USD',
    quantity: 'Set of 5',
    image: 'https://images.unsplash.com/photo-1588514912908-8f5891714f8d?auto=format&fit=crop&w=400&q=80',
    era: 'Art Nouveau'
  },
  {
    id: 8,
    name: 'Brass Telescope',
    price: '$1,100 USD',
    quantity: 'Single',
    image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=400&q=80',
    era: 'Early 1800s'
  },
];

const decor: Product[] = [
  {
    id: 9,
    name: 'Tiffany Style Lamp',
    price: '$2,800 USD',
    quantity: 'Single',
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=400&q=80',
    era: '1920s Reproduction'
  },
  {
    id: 10,
    name: 'Gilded Mirror',
    price: '$1,750 USD',
    quantity: 'Single',
    image: 'https://followtheyellowbrickhome.com/wp-content/uploads/2021/02/Spring-Antique-SIdeboard-scaled.jpg',
    era: 'Louis XIV Style'
  },
  {
    id: 11,
    name: 'Chinese Blue Willow Plates',
    price: '$380 USD',
    quantity: 'Set of 6',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80',
    era: 'Early 1900s'
  },
  {
    id: 12,
    name: 'Victorian Oil Painting',
    price: '$1,950 USD',
    quantity: 'Single',
    image: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=400&q=80',
    era: '1880s'
  },
];

const categories = [
  { title: 'Furniture', products: furniture },
  { title: 'Collectibles', products: collectibles },
  { title: 'Decor', products: decor },
];

const AntiqueProductSection = () => {
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
          {categories.map((cat) => (
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
                        href={`https://wa.me/966571961404?text=${encodeURIComponent(`Hi, I'm interested in the ${product.name}. Could you please share more details for enquiry?`)}`}
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

export default AntiqueProductSection;