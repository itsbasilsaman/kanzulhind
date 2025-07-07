import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, Calendar } from "lucide-react"

export default function MainBanner() {
  const coffeeTypes = [
    { name: "CAPPUCCINO", icon: "☕" },
    { name: "COLD BREW", icon: "🧊" },
    { name: "ESPRESSO", icon: "☕" },
    { name: "ICED COFFEE", icon: "🧊" },
    { name: "AMERICANO", icon: "☕" },
    { name: "FRAPPUCCINO", icon: "🥤" },
    { name: "LATTE", icon: "☕" },
    { name: "MACCHIATO", icon: "☕" },
  ]

  return (
    <div className="relative pt-12 min-h-screen overflow-hidden w-full">
      {/* Full width background split: right color only from center to end on large screens */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <div className="bg-[#002B1C] w-full h-full absolute inset-0" />
        <div className="bg-[#FDF5EC] absolute top-0 bottom-0 left-0 right-[25%] rounded-l-[80px]" />
      </div>
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="grid items-center min-h-[80vh] gap-8 lg:grid-cols-[60%_40%]">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="text-4xl md:text-5xl lg:text-[60px] font-bold text-emerald-900 capitalize leading-tight">
            The Sip That Completes Your Day With Perfect Flavor Always
            </div>

            <span className="bg-[#9C9F3A] inline-flex justify-center items-center hover:bg-[#555631] text-white font-semibold px-8 py-4 rounded-full text-lg    transition-all duration-300 group">
              Explore our menu
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>

           

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-6 justify-center lg:justify-start mt-12">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Truck className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <div className="font-medium text-emerald-900 text-[18px]">Free</div>
                  <p className="text-emerald-700">Delivery</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Calendar className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <div className="font-medium text-emerald-900 text-[18px] inline-flex">Fresh Deals</div>
                  <p className="text-emerald-700">Daily</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Coffee Images */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center">
            <div className="relative z-10">
              {/* Main Coffee Image */}
              <div className="relative w-full   mx-auto">
                <Image
                  src="/banner-img.png"
                  alt="Premium Coffee with Whipped Cream"
                  width={700}
                  height={700}
                  className="w-full lg:w-[700px] h-auto  "
                  priority
                />

                {/* 100% Original Badge */}
                <div className="absolute bottom-4 right-4 bg-emerald-900 text-white rounded-full p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-xs font-bold">100% ORIGINAL</div>
                    <div className="text-xs flex items-center justify-center mt-1">
                      <span className="mr-1">☕</span>
                      coffee
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Coffee Types Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-emerald-800 to-emerald-900 py-4 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...coffeeTypes, ...coffeeTypes].map((coffee, index) => (
            <div key={index} className="flex items-center mx-8 text-white">
              <span className="text-2xl mr-2">{coffee.icon}</span>
              <span className="font-bold text-lg tracking-wider">{coffee.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Yellow accent stripe */}
      <div className="absolute bottom-16 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 to-orange-400"></div>
    </div>
  )
}
