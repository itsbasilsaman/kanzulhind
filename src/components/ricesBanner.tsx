'use client'; // This is a Client Component

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function RicesBanner() {
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
    <section className="banner-section-rices">
      <div 
        className="banner-main-area"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        
        <div className="banner-wrap">
          <div className="w-layout-blockcontainer container w-container">
            <div className={`banner-title-wrap transition-all duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}>
              <h1 className="banner-title relative inline-block">
                <span className="relative z-10">Premium Indian Rice</span>
                
              </h1>
              
            </div>
          </div>
        </div>
        <div className="banner-linear-overlay" />
      </div>
    </section>
  );
}