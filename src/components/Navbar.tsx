"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/components/TranslationProvider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, dict } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Swaps theme (logo & text to black) exactly when the hero section (100vh) exits the viewport
      setIsScrolled(scrollY >= windowHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showWhiteLogo = true;
  const showBlackLogo = false;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent pt-2 pb-4">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative block w-[80px] md:w-[110px] aspect-square transition-opacity duration-300 hover:opacity-80">
          <img
            src="/logo/logo-blanco.png"
            alt="Logo Blanco"
            className="absolute inset-0 w-full h-full object-contain opacity-100 scale-100"
          />
        </Link>

        {/* Language selector */}
        <div className="flex items-center gap-5 md:gap-8 transition-all duration-300">
          <Link
            href="/es"
            className={`text-[14px] tracking-wide transition-colors duration-200 cursor-pointer ${lang === "es"
                ? "text-white font-semibold"
                : "text-white/60 hover:text-white/90"
              }`}
          >
            {dict.nav.lang_es}
          </Link>
          <Link
            href="/en"
            className={`text-[14px] tracking-wide transition-colors duration-200 cursor-pointer ${lang === "en"
                ? "text-white font-semibold"
                : "text-white/60 hover:text-white/90"
              }`}
          >
            {dict.nav.lang_en}
          </Link>
        </div>
      </div>
    </header>
  );
}

