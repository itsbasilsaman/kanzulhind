"use client"
import { useLanguage } from "@/components/LanguageContext";

export default function LocalizedText({ en, ar, className }: { en: string; ar: string; className?: string }) {
  const { lang } = useLanguage();
  return (
    <>
      <span style={{ display: lang === "EN" ? "inline" : "none" }} data-en className={className}>{en}</span>
      <span style={{ display: lang === "AR" ? "inline" : "none" }} data-ar className={className}>{ar}</span>
    </>
  );
} 