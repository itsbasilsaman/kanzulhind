"use client"
import { Plus_Jakarta_Sans, Montserrat, Almarai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { LanguageProvider, useLanguage } from "@/components/LanguageContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "700"],
});

const almarai = Almarai({
  subsets: ["arabic"],
  variable: "--font-almarai",
  weight: ["400", "700", "800"],
});

function LayoutWithDir({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage();
  return (
    <html lang={lang === "AR" ? "ar" : "en"} dir={lang === "AR" ? "rtl" : "ltr"}>
      <body
        className={`${plusJakartaSans.variable} ${montserrat.variable} ${almarai.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <LanguageProvider>
      <LayoutWithDir>{children}</LayoutWithDir>
    </LanguageProvider>
  );
}
