"use client"
import { useLanguage } from "@/components/LanguageContext";
import { Almarai } from "next/font/google";

const almarai = Almarai({
  subsets: ["arabic"],
  variable: "--font-almarai",
  weight: ["400", "700", "800"],
});

export default function LocalizedText({ en, ar, className }: { en: string; ar: string; className?: string }) {
  const { lang } = useLanguage();
  return (
    <>
      <span style={{ display: lang === "EN" ? "inline" : "none" }} data-en className={className}>{en}</span>
      <span
        style={{ display: lang === "AR" ? "inline" : "none", fontFamily: 'Almarai, sans-serif' }}
        data-ar
        className={className ? `${className} ${almarai.variable}` : almarai.variable}
      >
        {ar}
      </span>
    </>
  );
} 