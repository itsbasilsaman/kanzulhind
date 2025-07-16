"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "EN" | "AR";

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lang') as Language) || 'EN';
    }
    return 'EN';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang);
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}; 