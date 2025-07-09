import MiddleBanner from "@/components/middleBanner";
import ServiceSection from "@/components/serviceSection";
import StatsComponent from "@/components/statsSection";
import TestimonialSection from "@/components/testimonialSection";

export default function Products() {
    return (
        <>
      <div className="lg:pt-[40px]">
      <ServiceSection/>
      </div>
        <StatsComponent/>
        <MiddleBanner/>
        <TestimonialSection/>
        </>
    )
}