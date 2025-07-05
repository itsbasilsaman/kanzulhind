
import ServiceSection from "../components/serviceSection";
import FooterCTA from "../components/footerCTA";
import TestimonialSection from "../components/testimonialSection";
import FAQSection from "../components/faq";
// import ProductSection from "./components/product";
import Informations from "../components/informations";
import Navbar from "../components/navbar";
import BlogSection from "@/components/blogSection";

export default function Home() {
  return (
     <>
      <ServiceSection/>
      {/* <ProductSection/> */}
      <Informations/>
      <TestimonialSection/>
      <FAQSection/>
      <FooterCTA/>
      
     </>
  );
}
