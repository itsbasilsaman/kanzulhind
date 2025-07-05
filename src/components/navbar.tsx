"use client"

import type React from "react"
import Image from "next/image";
import { ShoppingCart, Heart, Search, MessageCircle, Clock, TrendingUp, X } from "lucide-react"
import { FaMicroblog } from "react-icons/fa6";
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Input } from "./ui/input"
import { usePathname } from "next/navigation"
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "700"],
});

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const pathname = usePathname();

  // Dummy data for search suggestions
  const recentSearches = ["Honey Products", "Organic Honey", "Raw Honey"]
  const popularSuggestions = [
    "Premium Honey Collection",
    "Manuka Honey",
    "Wildflower Honey",
    "Honey Gift Sets",
    "Bee Pollen",
    "Royal Jelly",
    "Honeycomb",
    "Acacia Honey",
  ]

  const filteredSuggestions = popularSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pages", href: "/pages" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ]

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

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion)
    setIsSearchOpen(false)
    // Here you would typically handle the search action
    console.log("Searching for:", suggestion)
  }

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setIsSearchOpen(false)
      // Handle search submission
      console.log("Searching for:", searchQuery)
    }
  }

  return (
    <>
      <header className={`fixed top-0 left-0 w-full bg-white z-40 border-b border-gray-100 z-50  ${montserrat.variable}`}>
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
              {/* Search Icon with Dropdown */}
              <div className="relative" ref={searchRef}>
                <button
                  onClick={handleSearchClick}
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 group ${
                    isSearchOpen ? "bg-yellow-100 text-yellow-600" : "hover:bg-gray-100"
                  }`}
                >
                  <Search
                    className={`w-5 h-5 transition-colors duration-200 ${
                      isSearchOpen ? "text-yellow-600" : "text-gray-700 group-hover:text-yellow-600"
                    }`}
                  />
                </button>

                {/* Search Dropdown */}
                {isSearchOpen && (
                  <div className="absolute top-12 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 animate-in slide-in-from-top-2 duration-200">
                    {/* Search Input */}
                    <form onSubmit={handleSearchSubmit} className="px-4 mb-4">
                      <div className="relative">
                        <Input
                          ref={inputRef}
                          type="text"
                          placeholder="Search products, categories..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        />
                        {searchQuery && (
                          <button
                            type="button"
                            onClick={() => setSearchQuery("")}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </form>

                    {/* Recent Searches */}
                    {!searchQuery && recentSearches.length > 0 && (
                      <div className="px-4 mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-600">Recent Searches</span>
                        </div>
                        <div className="space-y-1">
                          {recentSearches.map((search, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(search)}
                              className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-150"
                            >
                              {search}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Popular Suggestions */}
                    <div className="px-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-600">
                          {searchQuery ? "Suggestions" : "Popular Searches"}
                        </span>
                      </div>
                      <div className="space-y-1 max-h-48 overflow-y-auto">
                        {(searchQuery ? filteredSuggestions : popularSuggestions).map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-150 flex items-center justify-between group"
                          >
                            <span>{suggestion}</span>
                            <Search className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* No Results */}
                    {searchQuery && filteredSuggestions.length === 0 && (
                      <div className="px-4 py-8 text-center">
                        <div className="text-gray-400 mb-2">
                          <Search className="w-8 h-8 mx-auto" />
                        </div>
                        <p className="text-sm text-gray-600">No results found for &quot;{searchQuery}&quot;</p>
                        <p className="text-xs text-gray-400 mt-1">Try searching for something else</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Like/Heart Icon */}
              <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-all duration-200 group">
                <Heart className="w-5 h-5 text-gray-700 group-hover:text-red-500 group-hover:fill-red-500 transition-all duration-200 transform group-hover:scale-110" />
              </button>

              {/* WhatsApp Icon - Hidden on mobile */}
              <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-all duration-200 group">
                <MessageCircle className="w-5 h-5 text-gray-700 group-hover:text-green-600 transition-colors duration-200" />
              </button>

              {/* Shopping Cart - Hidden on mobile since it's in bottom nav */}
              <button className="relative items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-all duration-200 group">
                <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-yellow-600 transition-colors duration-200" />
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium transform group-hover:scale-110 transition-transform duration-200">
                  0
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
              <button className="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition-all duration-200">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">0</span>
              </button>
              <button className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition-all duration-200">
                <MessageCircle className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header>
   
   <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 sm:hidden z-40">
    <div className="flex items-center justify-around">
      {/* Home */}
      <button className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg group">
        <div className="relative">
          <svg className="w-6 h-6 text-[#41574B]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </div>
        <span className="text-xs font-medium text-[#41574B]">Home</span>
      </button>

      {/* Shop */}
      <button className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg group">
        <div className="relative">
          <svg
            className="w-6 h-6 text-gray-500 group-hover:text-[#223028] transition-colors duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
        <span className="text-xs font-medium text-gray-500 group-hover:text-[#1b211e] transition-colors duration-200">
          Shop
        </span>
      </button>

      {/* Cart */}
      
      <Link href={'/blog'}>
      <button className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg group">
        <div className="relative">
        <FaMicroblog className="w-6 h-6 text-gray-500 group-hover:text-[#242e29] transition-colors duration-200" />
          <span className="absolute -top-2 -right-2 bg-[#41574B] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
            3
          </span>
        </div>
        <span className="text-xs font-medium text-gray-500 group-hover:text-[#27322c] transition-colors duration-200">
          Blog
        </span>
      </button>
      </Link>

      {/* Chat */}
      <button className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg group">
        <div className="relative">
          <MessageCircle className="w-6 h-6 text-gray-500 group-hover:text-green-500 transition-colors duration-200" />
        </div>
        <span className="text-xs font-medium text-gray-500 group-hover:text-green-500 transition-colors duration-200">
          Chat
        </span>
      </button>
    </div>
  </div>
    </>
  );
}
