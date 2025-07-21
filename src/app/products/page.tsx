import MiddleBanner from "@/components/middleBanner";
import ServiceSection from "@/components/serviceSection";
import StatsComponent from "@/components/statsSection";
import TestimonialSection from "@/components/testimonialSection";
import Head from "next/head";

export default function Products() {
    return (
        <>
      <Head>
        <title>Products - Kanzulhind</title>
        <meta name="description" content="Discover our curated selection of Indian products including antiques, spices, textiles, and more." />
        <meta property="og:title" content="Products - Kanzulhind" />
        <meta property="og:description" content="Discover our curated selection of Indian products including antiques, spices, textiles, and more." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Products - Kanzulhind" />
        <meta name="twitter:description" content="Discover our curated selection of Indian products including antiques, spices, textiles, and more." />
        <meta name="twitter:image" content="/banner-img.jpg" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://kanzulhind.com/products" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          'name': 'Products',
          'description': 'Discover our curated selection of Indian products including antiques, spices, textiles, and more.',
          'url': 'https://kanzulhind.com/products'
        }) }} />
      </Head>
      <div className="lg:pt-[40px]">
      <ServiceSection/>
      </div>
        <StatsComponent/>
        <MiddleBanner/>
        <TestimonialSection/>
        </>
    )
}