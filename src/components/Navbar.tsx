"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const [activeLang, setActiveLang] = useState("es");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Swaps theme (logo & text to black) exactly when the hero section (100vh) exits the viewport
      setIsScrolled(scrollY >= windowHeight - 80);
      
      // Swaps back to white when entering the footer (which is 100vh tall)
      setIsAtFooter(scrollY >= docHeight - windowHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const showWhiteLogo = !isScrolled || isAtFooter;
  const showBlackLogo = isScrolled && !isAtFooter;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent ${
        isScrolled && !isAtFooter
          ? "pt-0.5 pb-2" 
          : "pt-1 pb-3 md:pt-2 md:pb-4"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative block w-[80px] md:w-[110px] aspect-square transition-opacity duration-300 hover:opacity-80">
          <img
            src="/logo/logo-blanco.png"
            alt="Logo Blanco"
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-in-out ${
              !showWhiteLogo ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
            }`}
          />
          <img
            src="/logo/logo-negro.png"
            alt="Logo Negro"
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-in-out ${
              showBlackLogo ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
            }`}
          />
        </Link>

        {/* Language selector */}
        <div 
          className={`flex items-center gap-5 md:gap-8 transition-all duration-300 ${
            !showWhiteLogo
              ? "opacity-0 pointer-events-none translate-x-4" 
              : "opacity-100 translate-x-0"
          }`}
        >
          <button
            onClick={() => setActiveLang("es")}
            className={`text-[14px] tracking-wide transition-colors duration-200 cursor-pointer ${
              activeLang === "es"
                ? "text-white font-semibold"
                : "text-white/60 hover:text-white/90"
            }`}
          >
            Español
          </button>
          <button
            onClick={() => setActiveLang("en")}
            className={`text-[14px] tracking-wide transition-colors duration-200 cursor-pointer ${
              activeLang === "en"
                ? "text-white font-semibold"
                : "text-white/60 hover:text-white/90"
            }`}
          >
            Inglés
          </button>
        </div>
      </div>
    </header>
  );
}

