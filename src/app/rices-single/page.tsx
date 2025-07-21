import RicesSingle from '@/components/ricesSingle';
 
import RicesProductSection from '@/components/ricesProduct';
import Head from "next/head";


export default function RicesSinglePage() {
  return (
    <>
      <Head>
        <title>Rices Product - Kanzulhind</title>
        <meta name="description" content="Explore our unique rices products at Kanzulhind." />
        <meta property="og:title" content="Rices Product - Kanzulhind" />
        <meta property="og:description" content="Explore our unique rices products at Kanzulhind." />
        <meta property="og:type" content="product" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rices Product - Kanzulhind" />
        <meta name="twitter:description" content="Explore our unique rices products at Kanzulhind." />
        <meta name="twitter:image" content="/banner-img.jpg" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://kanzulhind.com/rices-single" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          'name': 'Rices Product',
          'description': 'Explore our unique rices products at Kanzulhind.',
          'url': 'https://kanzulhind.com/rices-single'
        }) }} />
      </Head>
      <RicesProductSection/>
      <RicesSingle />
    </>
  );
}
