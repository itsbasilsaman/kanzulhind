'use client'; // This is a Client Component

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function SpicesBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (bannerRef.current) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      bannerRef.current.style.transform = `scale(1.02) translate(${x * 10}px, ${y * 5}px)`;
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (bannerRef.current) {
      bannerRef.current.style.transform = 'scale(1)';
    }
  };

  return (
    <section className="banner-section-spices">
      <div 
        className="banner-main-area"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          ref={bannerRef}
          className="relative w-full h-full transition-all duration-500 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            alt="Assorted spices banner image"
            fill
            className="banner-main-bg-image object-cover"
            priority
            sizes="(max-width: 1919px) 100vw, 1920px"
          />
        </div>
        
        <div className="banner-wrap">
          <div className="w-layout-blockcontainer container w-container">
            <div className={`banner-title-wrap transition-all duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}>
              <h1 className="banner-title relative inline-block">
                <span className="relative z-10">Spices</span>
                
              </h1>
            </div>
          </div>
        </div>
        <div className="banner-linear-overlay" />
      </div>
    </section>
  );
}