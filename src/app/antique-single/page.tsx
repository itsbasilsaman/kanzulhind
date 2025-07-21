import AntiqueSingle from '@/components/antiqueSingle';
import AntiqueProductSection from '@/components/antiqueProduct';
import Head from "next/head";
 
 


export default function AntiqueSinglePage() {
  return (
    <>
      <Head>
        <title>Antique Product - Kanzulhind</title>
        <meta name="description" content="Explore our unique antique products at Kanzulhind." />
        <meta property="og:title" content="Antique Product - Kanzulhind" />
        <meta property="og:description" content="Explore our unique antique products at Kanzulhind." />
        <meta property="og:type" content="product" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Antique Product - Kanzulhind" />
        <meta name="twitter:description" content="Explore our unique antique products at Kanzulhind." />
        <meta name="twitter:image" content="/banner-img.jpg" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://kanzulhind.com/antique-single" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          'name': 'Antique Product',
          'description': 'Explore our unique antique products at Kanzulhind.',
          'url': 'https://kanzulhind.com/antique-single'
        }) }} />
      </Head>
  
       <AntiqueProductSection/>
      <AntiqueSingle />
    </>
  );
}
