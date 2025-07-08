import { Button } from "@/components/ui/button"

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
          <h1 className="text-4xl font-light leading-tight mb-6">Germ-free handwashing essentials</h1>
          <p className="text-gray-300 mb-8 leading-relaxed">
            From proper lathering techniques to understanding the importance of hand hygiene, this book covers what you
            need to know.
          </p>
          <Button className="bg-[#41574B] rounded-[12px] text-black hover:bg-gray-100 w-fit px-8 py-3  font-medium">
            Shop Now
          </Button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Content Section - Desktop */}
        <div className="w-1/2 linear-section-bg text-white flex flex-col justify-center px-12">
          <h1 className="text-6xl font-light leading-tight mb-8">Germ-free handwashing essentials</h1>
          <p className="text-gray-300 mb-12 text-lg leading-relaxed max-w-md">
            From proper lathering techniques to understanding the importance of hand hygiene, this book covers what you
            need to know.
          </p>
          <Button className="bg-[#41574B] rounded-[12px] text-black hover:bg-gray-100 w-fit px-8 py-3   font-medium">
            Shop Now
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
