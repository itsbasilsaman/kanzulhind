"use client";

import dynamic from "next/dynamic";

const FAQSection = dynamic(() => import("../components/faq"), { ssr: false });
const TestimonialSection = dynamic(() => import("../components/testimonialSection"), { ssr: false });

export default function HomeClient() {
  return (
    <>
      <FAQSection />
      <TestimonialSection />
    </>
  );
} 