"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function MiddleBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-50px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div ref={sectionRef} className=" pt-12 flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
      <section
        className={`relative w-full max-w-7xl h-[400px] overflow-hidden rounded-2xl transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 transform translate-y-0 scale-100" : "opacity-0 transform translate-y-8 scale-95"
        }`}
        style={{ backgroundColor: "#5E806F" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1690983323310-3f8e55c9272f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D"
            alt="Green plants background"
            fill
            className="object-cover opacity-80"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-[#5E806F]/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
            {/* Main Heading */}
            <span
              className={`font-bold text-white text-center leading-[1.3] transition-all duration-1000 delay-300 ease-out ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
              }`}
              style={{
                fontSize: "clamp(20px, 4vw, 36px)",
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              Subscribe to get <span className="block sm:inline font-extrabold">15% OFF</span> on your first order!
            </span>

            {/* Subtext */}
            <p
              className={`max-w-2xl mx-auto text-center transition-all duration-1000 delay-500 ease-out ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
              }`}
              style={{
                fontSize: "clamp(14px, 2.5vw, 18px)",
                fontWeight: 400,
                color: "#DADADA",
                lineHeight: 1.5,
                marginTop: "12px",
                marginBottom: "16px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur erat eleifend ac ut lorem posuere vulputate est auctor pharetra.
            </p>

            {/* Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 transition-all duration-1000 delay-700 ease-out ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
              }`}
            >
              {/* Shop now Button */}
              <button
                className="bg-white text-gray-800 hover:bg-gray-100 hover:scale-105 transition-all duration-200 font-medium rounded-full shadow-lg w-full sm:w-auto"
                style={{
                  fontWeight: 600,
                  fontSize: "clamp(14px, 2vw, 16px)",
                  padding: "10px 24px",
                  borderRadius: "9999px",
                  minWidth: "160px",
                  color: "#333333",
                }}
              >
                Shop now
              </button>

              {/* Browse all products Button */}
              <span
                className="  text-white border border-white hover:bg-white hover:text-gray-800 hover:scale-105 transition-all duration-200 font-medium rounded-full backdrop-blur-sm w-full sm:w-auto"
                style={{
                  fontWeight: 500,
                  fontSize: "clamp(14px, 2vw, 16px)",
                  padding: "10px 24px",
                  borderRadius: "9999px",
                  borderWidth: "1px",
                  minWidth: "180px",
                }}
              >
                Browse all products
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
