"use client"

import type React from "react"
import Image from "next/image";
import { Heart, RefreshCcw } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoIosContacts } from "react-icons/io";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "700"],
});

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const pathname = usePathname();
  // Add language state
  const [lang, setLang] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lang') || 'EN';
    }
    return 'EN';
  });

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "/contact" },
  ]

  const isHome = pathname === "/";
  const isProducts = pathname.startsWith("/products");
  const isContact = pathname.startsWith("/contact");

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isSearchOpen])

  return (
    <>
      <header className={`fixed top-0 left-0 w-full bg-white  border-b border-gray-100 z-50  ${montserrat.variable}`}>
        <div className="container mx-auto px-4">
          {/* Desktop Header */}
          <div className="hidden sm:flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="flex items-center space-x-2">
               <Image src="/KANZUL-20.png" alt="logo" width={150} height={100} />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8">
              {navigationLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-5 py-2 rounded-full text-base font-medium transition-all duration-200 transform hover:scale-105 
                      ${isActive
                        ? "bg-[#41574B] text-[#1c2922] font-semibold scale-110 border-[#41574B]"
                        : "text-gray-700 border-[#41574B] bg-transparent hover:text-[#1c2922] hover:bg-[#41574B] hover:border-[#41574B]"}
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
             

             

              {/* WhatsApp Icon - Hidden on mobile */}
              <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-all duration-200 group">
              <FaWhatsapp  className="w-6 h-6 text-green-600 group-hover:text-green-600 transition-colors duration-200" />              </button>

              {/* Language Switcher Toggle - Compact, Themed */}
              <button
                onClick={() => {
                  const newLang = lang === 'EN' ? 'AR' : 'EN';
                  setLang(newLang);
                  if (typeof window !== 'undefined') localStorage.setItem('lang', newLang);
                }}
                aria-label="Switch language"
                className="flex items-center gap-1 pl-8 px-1 py-0.5 rounded-xl border-2 border-[#41574B] bg-white   transition-all duration-200   focus:outline-none"
                style={{ minWidth: 64 }}
              >
                {/* English Block */}
                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-lg text-base font-semibold border-2 transition-all duration-200 ${
                    lang === 'EN'
                      ? 'bg-[#D6E6BA] border-[#41574B] text-[#41574B] scale-105 shadow'
                      : 'bg-white border-[#D6E6BA] text-[#41574B]'
                  }`}
                >
                  EN
                </span>
                {/* Swap Icon */}
                <RefreshCcw className="w-4 h-4 text-[#41574B] mx-0.5" />
                {/* Arabic Block */}
                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-lg text-base font-semibold border-2 transition-all duration-200 ${
                    lang === 'AR'
                      ? 'bg-[#D6E6BA] border-[#41574B] text-[#41574B] scale-105 shadow'
                      : 'bg-white border-[#D6E6BA] text-[#41574B]'
                  }`}
                  style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}
                >
                  عـر
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="flex sm:hidden items-center justify-between h-16">
            {/* Logo on the left */}
            <Link href="/" className="flex items-center">
              <Image src="/KANZUL-20.png" alt="logo" width={100} height={60} />
            </Link>
            {/* Cart and Chat on the right */}
            <div className="flex items-center space-x-4">
               {/* Language Switcher Toggle - Compact, Themed */}
              <button
                onClick={() => {
                  const newLang = lang === 'EN' ? 'AR' : 'EN';
                  setLang(newLang);
                  if (typeof window !== 'undefined') localStorage.setItem('lang', newLang);
                }}
                aria-label="Switch language"
                className="flex items-center gap-1 pl-8 px-1 py-0.5 rounded-xl border-2 border-[#41574B] bg-white   transition-all duration-200   focus:outline-none"
                style={{ minWidth: 64 }}
              >
                {/* English Block */}
                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-lg text-base font-semibold border-2 transition-all duration-200 ${
                    lang === 'EN'
                      ? 'bg-[#D6E6BA] border-[#41574B] text-[#41574B] scale-105 shadow'
                      : 'bg-white border-[#D6E6BA] text-[#41574B]'
                  }`}
                >
                  EN
                </span>
                {/* Swap Icon */}
                <RefreshCcw className="w-4 h-4 text-[#41574B] mx-0.5" />
                {/* Arabic Block */}
                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-lg text-base font-semibold border-2 transition-all duration-200 ${
                    lang === 'AR'
                      ? 'bg-[#D6E6BA] border-[#41574B] text-[#41574B] scale-105 shadow'
                      : 'bg-white border-[#D6E6BA] text-[#41574B]'
                  }`}
                  style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}
                >
                  عـر
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
   
   <div className="fixed bottom-1 left-0 mx-2 right-0 bg-white border-t border-gray-200 px-4 py-2 sm:hidden z-40 rounded-full">
    <div className="flex items-center justify-around">
      {/* Home */}
     <Link href={'/'}>
     <button className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg group">
        <div className="relative">
          <svg className={`w-6 h-6 ${isHome ? "text-[#41574B]" : "text-gray-500"} group-hover:text-[#41574B] transition-colors duration-200`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </div>
        <span className={`text-xs font-medium ${isHome ? "text-[#41574B]" : "text-gray-500"} group-hover:text-[#41574B] transition-colors duration-200`}>Home</span>
      </button>
     </Link>

    

 
      
      <Link href={'/products'}>
      <button className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg group">
        <div className="relative">
        <AiFillProduct className={`w-6 h-6 ${isProducts ? "text-[#41574B]" : "text-gray-500"} group-hover:text-[#41574B] transition-colors duration-200`} />
          <span className="absolute -top-2 -right-2 bg-[#41574B] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
            4
          </span>
        </div>
        <span className={`text-xs font-medium ${isProducts ? "text-[#41574B]" : "text-gray-500"} group-hover:text-[#41574B] transition-colors duration-200`}>
          Products
        </span>
      </button>
      </Link>

       
        <Link href={'/contact'}>
          <button className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg group">
        <div className="relative">
          <IoIosContacts className={`w-6 h-6 ${isContact ? "text-[#41574B]" : "text-gray-500"} group-hover:text-green-500 transition-colors duration-200`}/>
        </div>
        <span className={`text-xs font-medium ${isContact ? "text-[#41574B]" : "text-gray-500"} group-hover:text-[#1b211e] transition-colors duration-200`}>
          Contact
        </span>
        </button>
        </Link>

      {/* Chat */}
      <Link href={'https://wa.me/966571961404?text=Sir%2C%20I%20want%20to%20discuss%20about%20your%20products.'} target="_blank" rel="noopener noreferrer">
        <button className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg group">
        <div className="relative">
          <FaWhatsapp className="w-6 h-6 text-gray-500 group-hover:text-green-500 transition-colors duration-200" />
        </div>
        <span className="text-xs font-medium text-gray-500 group-hover:text-green-500 transition-colors duration-200">
          Chat
        </span>
      </button>
      </Link>
    </div>
  </div>
    </>
  );
}
