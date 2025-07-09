
import ServiceSection from "../components/serviceSection";
import FooterCTA from "../components/footerCTA";
import TestimonialSection from "../components/testimonialSection";
import FAQSection from "../components/faq";
// import ProductSection from "./components/product";
import Informations from "../components/informations";
import StatsComponent from "@/components/statsSection";
import MiddleBanner from "@/components/middleBanner";
import MainBanner from "@/components/mainBanner";
import DetailSection from "@/components/detailsSection";

export default function Home() {
  return (
     <>
     <MainBanner/>
      <ServiceSection/>
      <StatsComponent/>
      <Informations/>
      <DetailSection/>
      <MiddleBanner/>
      <FAQSection/>
      <TestimonialSection/>
      
      <FooterCTA/>
      
     </>
  );
}
