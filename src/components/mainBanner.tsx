"use client"
import { Button } from "@/components/ui/button"
import LocalizedText from "@/components/LocalizedText";

export default function HandwashInterface() {
  return (
    <div className="h-auto lg:h-[85vh] bg-white">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Video Section - Mobile */}
        <div className="relative w-full h-[50vh] bg-gray-100">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Section - Mobile */}
        <div className="linear-section-bg text-white p-6 min-h-[50vh] flex flex-col justify-center">
          <h1 className="text-4xl font-light leading-tight mb-6"><LocalizedText en="Discover Unique Antiques, Clothing, Spices & Rice" ar="اكتشف التحف الفريدة والملابس والتوابل والأرز" /></h1>
          <p className="text-gray-300 mb-8 leading-relaxed">
            <LocalizedText en="Explore Kanzulhind’s curated collection and inquire about antiques, attire, spices, and rice with a single click." ar="استكشف مجموعة كنز الهند المختارة واستفسر عن التحف والملابس والتوابل والأرز بنقرة واحدة." />
          </p>
          <Button className="bg-[#41574B] rounded-[12px] text-black hover:bg-gray-100 w-fit px-8 py-3  font-medium">
          <a
                  href="https://wa.me/966571961404?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                  className="footer-contact-text footer-text-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LocalizedText en="Inquire Now" ar="استفسر الآن" />
                </a>
          </Button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Content Section - Desktop */}
        <div className="w-1/2 linear-section-bg text-white flex flex-col justify-center px-12">
          <h1 className="text-6xl font-light leading-tight mb-8"><LocalizedText en="Discover Unique Antiques, Clothing, Spices & Rice" ar="اكتشف التحف الفريدة والملابس والتوابل والأرز" /></h1>
          <p className="text-gray-300 mb-12 text-lg leading-relaxed max-w-md">
            <LocalizedText en="Explore Kanzulhind’s curated collection and inquire about antiques, attire, spices, and rice with a single click." ar="استكشف مجموعة كنز الهند المختارة واستفسر عن التحف والملابس والتوابل والأرز بنقرة واحدة." />
          </p>
          <Button className="bg-[#41574B] rounded-[12px] text-black hover:bg-gray-100 w-fit px-8 py-3   font-medium">
          <a
                  href="https://wa.me/966571961404?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                  className="footer-contact-text footer-text-link no-underline text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LocalizedText en="Inquire Now" ar="استفسر الآن" />
                </a>
          </Button>
        </div>

        {/* Video Section - Desktop */}
        <div className="w-1/2 relative bg-gray-100">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          
           
        </div>
      </div>
    </div>
  )
}
