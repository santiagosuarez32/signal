"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/components/TranslationProvider";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { lang, dict } = useTranslation();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine equivalent path for language switching
  const getLangPath = (targetLang: string) => {
    if (!pathname) return `/${targetLang}`;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${targetLang}`;
    segments[0] = targetLang;
    return `/${segments.join("/")}`;
  };

  const isServicesPage = pathname?.includes("/servicios");

  const toggleMenu = () => {
    if (!open) {
      setOpen(true);
    } else {
      closeMenu();
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => setOpen(false),
      });
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
      const items = menuRef.current.querySelectorAll(".mobile-nav-item");
      if (items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, ease: "power2.out", delay: 0.05 }
        );
      }
    }
  }, [open]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? "pt-2.5 pb-2.5 bg-[#090c1f]/80 backdrop-blur-md border-white/5 shadow-lg" : "pt-4 pb-4 bg-transparent border-transparent"}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={`/${lang}`}
          onClick={closeMenu}
          className="relative block w-[70px] md:w-[95px] aspect-square transition-opacity duration-300 hover:opacity-80 z-50"
        >
          <img
            src="/logo/logo-blanco.png"
            alt="Signal Logo"
            className="absolute inset-0 w-full h-full object-contain opacity-100 scale-100"
          />
        </Link>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-6 md:gap-10">
          <Link
            href={`/${lang}`}
            className={`text-sm md:text-base font-sans transition-colors duration-200 ${
              !isServicesPage
                ? "text-turquesa font-light"
                : "text-white/60 hover:text-white font-light"
            }`}
          >
            {dict.nav?.home || "Inicio"}
          </Link>
          <Link
            href={`/${lang}/servicios`}
            className={`text-sm md:text-base font-sans transition-colors duration-200 ${
              isServicesPage
                ? "text-turquesa font-light"
                : "text-white/60 hover:text-white font-light"
            }`}
          >
            {dict.nav?.services || "Servicios"}
          </Link>
          <a
            href="#contacto"
            className="text-sm md:text-base font-sans text-white/60 hover:text-white font-light transition-colors duration-200"
          >
            {dict.nav?.contact || "Contacto"}
          </a>
        </nav>

        {/* Language selector - Desktop */}
        <div className="hidden md:flex items-center gap-4 md:gap-6 transition-all duration-300 text-xs md:text-sm font-sans">
          <Link
            href={getLangPath("es")}
            className={`transition-colors duration-200 cursor-pointer font-light ${
              lang === "es"
                ? "text-white border-b border-turquesa pb-0.5"
                : "text-white/60 hover:text-white/90"
            }`}
          >
            {dict.nav?.lang_es || "Español"}
          </Link>
          <Link
            href={getLangPath("en")}
            className={`transition-colors duration-200 cursor-pointer font-light ${
              lang === "en"
                ? "text-white border-b border-turquesa pb-0.5"
                : "text-white/60 hover:text-white/90"
            }`}
          >
            {dict.nav?.lang_en || "Inglés"}
          </Link>
        </div>

        {/* Botón Hamburguesa - Mobile */}
        <button
          className="md:hidden text-white z-50 p-2 focus:outline-none cursor-pointer"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div
          ref={menuRef}
          className="md:hidden fixed inset-0 w-full h-screen bg-[#090c1f]/98 backdrop-blur-2xl flex flex-col items-center justify-center space-y-10 sm:space-y-12 z-40 px-6"
        >
          <div className="mobile-nav-item">
            <Link
              href={`/${lang}`}
              onClick={closeMenu}
              className={`text-4xl sm:text-5xl font-sans font-light tracking-tight transition-colors ${
                !isServicesPage ? "text-turquesa" : "text-white hover:text-turquesa"
              }`}
            >
              {dict.nav?.home || "Inicio"}
            </Link>
          </div>

          <div className="mobile-nav-item">
            <Link
              href={`/${lang}/servicios`}
              onClick={closeMenu}
              className={`text-4xl sm:text-5xl font-sans font-light tracking-tight transition-colors ${
                isServicesPage ? "text-turquesa" : "text-white hover:text-turquesa"
              }`}
            >
              {dict.nav?.services || "Servicios"}
            </Link>
          </div>

          <div className="mobile-nav-item">
            <a
              href="#contacto"
              onClick={closeMenu}
              className="text-4xl sm:text-5xl font-sans font-light tracking-tight text-white hover:text-turquesa transition-colors"
            >
              {dict.nav?.contact || "Contacto"}
            </a>
          </div>

          {/* Selector de idioma en menú móvil */}
          <div className="mobile-nav-item flex items-center gap-8 pt-8 border-t border-white/20 mt-4">
            <Link
              href={getLangPath("es")}
              onClick={closeMenu}
              className={`text-xl sm:text-2xl font-sans transition-colors ${
                lang === "es"
                  ? "text-white font-light border-b border-turquesa pb-1"
                  : "text-white/60 hover:text-white font-light"
              }`}
            >
              {dict.nav?.lang_es || "Español"}
            </Link>
            <Link
              href={getLangPath("en")}
              onClick={closeMenu}
              className={`text-xl sm:text-2xl font-sans transition-colors ${
                lang === "en"
                  ? "text-white font-light border-b border-turquesa pb-1"
                  : "text-white/60 hover:text-white font-light"
              }`}
            >
              {dict.nav?.lang_en || "Inglés"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
