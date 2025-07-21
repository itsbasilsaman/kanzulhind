
import ServiceSection from "../components/serviceSection";
import FooterCTA from "../components/footerCTA";
// import ProductSection from "./components/product";
import Informations from "../components/informations";
import StatsComponent from "@/components/statsSection";
import MiddleBanner from "@/components/middleBanner";
import MainBanner from "@/components/mainBanner";
import DetailSection from "@/components/detailsSection";
import Head from "next/head";
import HomeClient from "./HomeClient";

export default function Home() {
  return (
     <>
      <Head>
        <title>Kanzulhind - Unlock the Treasures of India</title>
        <meta name="description" content="Experience the essence of India with Kanzulhind’s handpicked collection of antiques, spices, textiles, and more." />
        <meta property="og:title" content="Kanzulhind - Unlock the Treasures of India" />
        <meta property="og:description" content="Experience the essence of India with Kanzulhind’s handpicked collection of antiques, spices, textiles, and more." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kanzulhind - Unlock the Treasures of India" />
        <meta name="twitter:description" content="Experience the essence of India with Kanzulhind’s handpicked collection of antiques, spices, textiles, and more." />
        <meta name="twitter:image" content="/banner-img.jpg" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://kanzulhind.com/" />
        <link rel="preload" href="/fonts/Inter-VariableFont_slnt,wght.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          'name': 'Kanzulhind',
          'url': 'https://kanzulhind.com/',
          'logo': 'https://kanzulhind.com/KANZUL-20.png',
          'sameAs': [
            'https://www.facebook.com/kanzulhind',
            'https://www.instagram.com/kanzulhind'
          ]
        }) }} />
      </Head>
      <MainBanner/>
      <ServiceSection/>
      <StatsComponent/>
      <Informations/>
      <DetailSection/>
      <MiddleBanner/>  
      <HomeClient />
      <FooterCTA/>
     </>
  );
}
