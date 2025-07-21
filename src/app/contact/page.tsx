import ContactSection from "@/components/contactSection";
import Head from "next/head";

export default function ContactPage() {
    return (
        <>
         <Head>
          <title>Contact Us - Kanzulhind</title>
          <meta name="description" content="Get in touch with Kanzulhind for inquiries about our antiques, spices, textiles, and more." />
          <meta property="og:title" content="Contact Us - Kanzulhind" />
          <meta property="og:description" content="Get in touch with Kanzulhind for inquiries about our antiques, spices, textiles, and more." />
          <meta property="og:type" content="website" />
          <meta name="robots" content="index, follow" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Contact Us - Kanzulhind" />
          <meta name="twitter:description" content="Get in touch with Kanzulhind for inquiries about our antiques, spices, textiles, and more." />
          <meta name="twitter:image" content="/banner-img.jpg" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="canonical" href="https://kanzulhind.com/contact" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            'name': 'Contact Us',
            'description': 'Get in touch with Kanzulhind for inquiries about our antiques, spices, textiles, and more.',
            'url': 'https://kanzulhind.com/contact'
          }) }} />
         </Head>
         <ContactSection/>
        </>
    )
}