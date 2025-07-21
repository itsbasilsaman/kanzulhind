import ClothsSingle from '@/components/clothsSingle';
import ClothsProductSection from '@/components/clothsProduct';
import Head from "next/head";


export default function ClothsSinglePage() {
  return (
    <>
      <Head>
        <title>Cloths Product - Kanzulhind</title>
        <meta name="description" content="Explore our unique cloths products at Kanzulhind." />
        <meta property="og:title" content="Cloths Product - Kanzulhind" />
        <meta property="og:description" content="Explore our unique cloths products at Kanzulhind." />
        <meta property="og:type" content="product" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cloths Product - Kanzulhind" />
        <meta name="twitter:description" content="Explore our unique cloths products at Kanzulhind." />
        <meta name="twitter:image" content="/banner-img.jpg" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://kanzulhind.com/cloths-single" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          'name': 'Cloths Product',
          'description': 'Explore our unique cloths products at Kanzulhind.',
          'url': 'https://kanzulhind.com/cloths-single'
        }) }} />
      </Head>
      <ClothsProductSection/>
      <ClothsSingle />
    </>
  );
}
