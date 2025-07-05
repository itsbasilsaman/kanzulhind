'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductSection = () => {
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

  // Product data
  const seeds = [
    {
      id: 1,
      name: 'Walnuts',
      price: '$28.99 USD',
      quantity: '100g',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
      href: '/product/walnuts',
    },
    {
      id: 2,
      name: 'Hazelnut',
      price: '$29.99 USD',
      quantity: '250g',
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
      href: '/product/hazelnut',
    },
    {
      id: 3,
      name: 'Peapod',
      price: '$24.99 USD',
      quantity: '500g',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      href: '/product/peapod',
    },
    {
      id: 4,
      name: 'Burnt leaves',
      price: '$24.99 USD',
      quantity: '25g',
      image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80',
      href: '/product/burnt-leaves',
    },
  ];

  const plants = [
    {
      id: 5,
      name: 'Broccoli',
      price: '$45.99 USD',
      quantity: '350g',
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
      href: '/product/broccoli',
    },
    {
      id: 6,
      name: 'Tomato',
      price: '$22.99 USD',
      quantity: '2kg',
      image: 'https://images.unsplash.com/photo-1504674900247-ec6b0b1b798e?auto=format&fit=crop&w=400&q=80',
      href: '/product/tomato',
    },
    {
      id: 7,
      name: 'Linen Burlap Bag',
      price: '$3.99 USD',
      quantity: '50g',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      href: '/product/linen-burlap-bag',
    },
    {
      id: 8,
      name: 'Corn',
      price: '$85.43 USD',
      quantity: '500g',
      image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80',
      href: '/product/corn',
    },
  ];

  const vegetables = [
    {
      id: 9,
      name: 'Corn',
      price: '$85.43 USD',
      quantity: '500g',
      image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80',
      href: '/product/corn',
    },
    {
      id: 10,
      name: 'Onion',
      price: '$12.99 USD',
      quantity: '1kg',
      image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=crop&w=400&q=80',
      href: '/product/onion',
    },
    {
      id: 11,
      name: 'Pistachio',
      price: '$22.99 USD',
      quantity: '200g',
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
      href: '/product/pistachio',
    },
    {
      id: 12,
      name: 'Reusable Cups',
      price: '$2.99 USD',
      quantity: '25g',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      href: '/product/reusable-cups',
    },
  ];

  return (
    <section ref={sectionRef} className="our-products-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="why-us-wrap">
          <div 
            data-animate
            className="why-us-title-wrap animate-fadeInUp"
          >
            <h2 className="section-title">Farm-to-Home Produce Directly</h2>
          </div>
          <div 
            data-animate
            className="why-us-whole-wrap animate-fadeInUp"
          >
            <div className="why-us-count-wrap">
              <div className="why-us-main-wrap">
                <div className="why-us-count-main-wrap">
                  <div className="why-us-count-list-wrap">
                    <h3 className="why-us-count-number-text">25K</h3>
                    <p className="why-us-count-content">
                      Thousands of Trusting Customers Choose Our Services
                    </p>
                  </div>
                  <p className="why-us-count-list-text">Clients Trust Us</p>
                </div>
                <div className="why-us-wrap-line-break"></div>
                <div className="why-us-count-main-wrap">
                  <div className="why-us-count-list-wrap">
                    <h3 className="why-us-count-number-text">10M</h3>
                    <p className="why-us-count-content">
                      Organic products delivered with sustainable commitment
                    </p>
                  </div>
                  <p className="why-us-count-list-text">Organic Products Sold</p>
                </div>
              </div>
            </div>
            <div className="why-select-us-wrap">
              <div className="why-select-us-content-list-wrap">
                <h3 className="why-select-us-title">Why select us?</h3>
                <div className="why-select-us-whole-list-wrap">
                  <div 
                    data-animate
                    className="why-select-us-list-item animate-fadeInUp"
                  >
                    <div className="why-select-us-icon-wrap">
                      <Image
                        src="/why-us-list-icon.svg"
                        width={24}
                        height={24}
                        alt=""
                        className="why-select-us-icon"
                      />
                    </div>
                    <div className="why-select-us-item-content-wrap">
                      <h4 className="why-select-us-item-title">Forever Fresh</h4>
                      <p className="why-select-us-content">
                        Fresh, organic harvests guarantee peak flavor and nutrition in every bite.
                      </p>
                    </div>
                  </div>
                  <div 
                    data-animate
                    className="why-select-us-list-item animate-fadeInUp"
                  >
                    <div className="why-select-us-icon-wrap">
                      <Image
                        src="/why-us-list-icon.svg"
                        width={24}
                        height={24}
                        alt=""
                        className="why-select-us-icon"
                      />
                    </div>
                    <div className="why-select-us-item-content-wrap">
                      <h4 className="why-select-us-item-title">Chemical-Free</h4>
                      <p className="why-select-us-content">
                        Embrace organic farming: excellence sans synthetics. Witness soil fertility,
                        biodiversity, and exceptional agricultural products through natural methods.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-us-bg-image-wrap">
              <Image
                src="/why-us-bg-image.svg"
                width={500}
                height={500}
                alt="why us bg image"
                className="why-us-bg-image"
              />
            </div>
          </div>
        </div>
        <div className="our-products-main-wrap">
          <div 
            data-animate
            className="our-products-title-wrap animate-fadeInUp"
          >
            <h2 className="section-title">Our products</h2>
          </div>
          <div className="our-products-list-wrap">
            <div 
              data-animate
              className="products-category-title-wrap animate-fadeInUp"
            >
              <div className="products-line-wrap"></div>
              <h3 className="products-category-title">Seeds</h3>
              <div className="products-line-wrap"></div>
            </div>
            <div 
              data-animate
              className="product-listing animate-fadeInUp"
            >
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items w-row">
                  {seeds.map((product) => (
                    <div
                      key={product.id}
                      role="listitem"
                      className="product-item w-dyn-item w-col w-col-3"
                    >
                      <div className="product-list-wrap">
                        <Link
                          href={product.href}
                          className="product-image-link w-inline-block"
                        >
                          <div className="relative w-full h-64 overflow-hidden group">
                            <Image
                              src={product.image}
                              fill
                              alt={product.name}
                              className="product-image object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </Link>
                        <div className="product-price-wrap">
                          <Link href={product.href} className="product-name-link">
                            {product.name}
                          </Link>
                          <div className="product-price-quantity">
                            <p className="product-price-text">{product.price}</p>
                            <p className="product-price-text">/</p>
                            <p className="product-price-text">{product.quantity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="our-products-list-wrap">
            <div 
              data-animate
              className="products-category-title-wrap animate-fadeInUp"
            >
              <div className="products-line-wrap"></div>
              <h3 className="products-category-title">Plants</h3>
              <div className="products-line-wrap"></div>
            </div>
            <div 
              data-animate
              className="product-listing animate-fadeInUp"
            >
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items w-row">
                  {plants.map((product) => (
                    <div
                      key={product.id}
                      role="listitem"
                      className="product-item w-dyn-item w-col w-col-3"
                    >
                      <div className="product-list-wrap">
                        <Link
                          href={product.href}
                          className="product-image-link w-inline-block"
                        >
                          <div className="relative w-full h-64 overflow-hidden group">
                            <Image
                              src={product.image}
                              fill
                              alt={product.name}
                              className="product-image object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </Link>
                        <div className="product-price-wrap">
                          <Link href={product.href} className="product-name-link">
                            {product.name}
                          </Link>
                          <div className="product-price-quantity">
                            <p className="product-price-text">{product.price}</p>
                            <p className="product-price-text">/</p>
                            <p className="product-price-text">{product.quantity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="our-products-list-wrap">
            <div 
              data-animate
              className="products-category-title-wrap animate-fadeInUp"
            >
              <div className="products-line-wrap"></div>
              <h3 className="products-category-title">Vegetables</h3>
              <div className="products-line-wrap"></div>
            </div>
            <div 
              data-animate
              className="product-listing animate-fadeInUp"
            >
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items w-row">
                  {vegetables.map((product) => (
                    <div
                      key={product.id}
                      role="listitem"
                      className="product-item w-dyn-item w-col w-col-3"
                    >
                      <div className="product-list-wrap">
                        <Link
                          href={product.href}
                          className="product-image-link w-inline-block"
                        >
                          <div className="relative w-full h-64 overflow-hidden group">
                            <Image
                              src={product.image}
                              fill
                              alt={product.name}
                              className="product-image object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </Link>
                        <div className="product-price-wrap">
                          <Link href={product.href} className="product-name-link">
                            {product.name}
                          </Link>
                          <div className="product-price-quantity">
                            <p className="product-price-text">{product.price}</p>
                            <p className="product-price-text">/</p>
                            <p className="product-price-text">{product.quantity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div 
            data-animate
            className="products-button-wrap animate-fadeInUp"
          >
            <Link
              href="/shop"
              className="shop-button w-button hover:bg-green-700 transition-colors duration-300"
            >
              Our Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;