import SpicesSingle from '@/components/spicesSingle';
import SpicesProductSection from '@/components/spicesProduct';
import Head from "next/head";


export default function SpicesSingleSection() {
  return (
    <>
      <Head>
        <title>Spices Product - Kanzulhind</title>
        <meta name="description" content="Explore our unique spices products at Kanzulhind." />
        <meta property="og:title" content="Spices Product - Kanzulhind" />
        <meta property="og:description" content="Explore our unique spices products at Kanzulhind." />
        <meta property="og:type" content="product" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Spices Product - Kanzulhind" />
        <meta name="twitter:description" content="Explore our unique spices products at Kanzulhind." />
        <meta name="twitter:image" content="/banner-img.jpg" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://kanzulhind.com/spices-single" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          'name': 'Spices Product',
          'description': 'Explore our unique spices products at Kanzulhind.',
          'url': 'https://kanzulhind.com/spices-single'
        }) }} />
      </Head>
      <SpicesProductSection/>
      <SpicesSingle />
    </>
  );
}
