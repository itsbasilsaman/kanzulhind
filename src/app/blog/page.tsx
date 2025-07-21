import BlogSection from "@/components/blogSection";
import Head from "next/head";

 

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog - Kanzulhind</title>
        <meta name="description" content="Read the latest articles and updates from Kanzulhind about Indian antiques, spices, textiles, and more." />
        <meta property="og:title" content="Blog - Kanzulhind" />
        <meta property="og:description" content="Read the latest articles and updates from Kanzulhind about Indian antiques, spices, textiles, and more." />
        <meta property="og:type" content="blog" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Kanzulhind" />
        <meta name="twitter:description" content="Read the latest articles and updates from Kanzulhind about Indian antiques, spices, textiles, and more." />
        <meta name="twitter:image" content="/banner-img.jpg" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://kanzulhind.com/blog" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Blog',
          'name': 'Kanzulhind Blog',
          'description': 'Read the latest articles and updates from Kanzulhind about Indian antiques, spices, textiles, and more.',
          'url': 'https://kanzulhind.com/blog'
        }) }} />
      </Head>
       <BlogSection/>
    </>
  )
}
