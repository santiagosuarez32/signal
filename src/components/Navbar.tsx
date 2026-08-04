"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/components/TranslationProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, dict } = useTranslation();
  const pathname = usePathname();

  // Determine equivalent path for language switching
  const getLangPath = (targetLang: string) => {
    if (!pathname) return `/${targetLang}`;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${targetLang}`;
    segments[0] = targetLang;
    return `/${segments.join("/")}`;
  };

  const isServicesPage = pathname?.includes("/servicios");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-2 pb-3 bg-transparent">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={`/${lang}`}
          onClick={() => setOpen(false)}
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
                ? "text-turquesa font-semibold"
                : "text-slate-300 hover:text-white font-normal"
            }`}
          >
            {dict.nav?.home || "Inicio"}
          </Link>
          <Link
            href={`/${lang}/servicios`}
            className={`text-sm md:text-base font-sans transition-colors duration-200 ${
              isServicesPage
                ? "text-turquesa font-semibold"
                : "text-slate-300 hover:text-white font-normal"
            }`}
          >
            {dict.nav?.services || "Servicios"}
          </Link>
          <a
            href="#contacto"
            className="text-sm md:text-base font-sans text-slate-300 hover:text-white font-normal transition-colors duration-200"
          >
            {dict.nav?.contact || "Contacto"}
          </a>
        </nav>

        {/* Language selector - Desktop */}
        <div className="hidden md:flex items-center gap-4 md:gap-6 transition-all duration-300 text-xs md:text-sm font-sans">
          <Link
            href={getLangPath("es")}
            className={`transition-colors duration-200 cursor-pointer ${
              lang === "es"
                ? "text-white font-semibold border-b border-turquesa pb-0.5"
                : "text-white/60 hover:text-white/90 font-normal"
            }`}
          >
            {dict.nav?.lang_es || "Español"}
          </Link>
          <Link
            href={getLangPath("en")}
            className={`transition-colors duration-200 cursor-pointer ${
              lang === "en"
                ? "text-white font-semibold border-b border-turquesa pb-0.5"
                : "text-white/60 hover:text-white/90 font-normal"
            }`}
          >
            {dict.nav?.lang_en || "Inglés"}
          </Link>
        </div>

        {/* Botón Hamburguesa - Mobile */}
        <button
          className="md:hidden text-white z-50 p-2 focus:outline-none cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden fixed inset-0 w-full h-screen bg-[#090c1f]/98 backdrop-blur-2xl flex flex-col items-center justify-center space-y-10 sm:space-y-12 z-40 px-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              <Link
                href={`/${lang}`}
                onClick={() => setOpen(false)}
                className={`text-4xl sm:text-5xl font-sans font-bold tracking-tight transition-colors ${
                  !isServicesPage ? "text-turquesa" : "text-white hover:text-turquesa"
                }`}
              >
                {dict.nav?.home || "Inicio"}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                href={`/${lang}/servicios`}
                onClick={() => setOpen(false)}
                className={`text-4xl sm:text-5xl font-sans font-bold tracking-tight transition-colors ${
                  isServicesPage ? "text-turquesa" : "text-white hover:text-turquesa"
                }`}
              >
                {dict.nav?.services || "Servicios"}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-white hover:text-turquesa transition-colors"
              >
                {dict.nav?.contact || "Contacto"}
              </a>
            </motion.div>

            {/* Selector de idioma en menú móvil */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-8 pt-8 border-t border-white/20 mt-4"
            >
              <Link
                href={getLangPath("es")}
                onClick={() => setOpen(false)}
                className={`text-xl sm:text-2xl font-sans transition-colors ${
                  lang === "es"
                    ? "text-white font-bold border-b-2 border-turquesa pb-1"
                    : "text-white/60 hover:text-white font-normal"
                }`}
              >
                {dict.nav?.lang_es || "Español"}
              </Link>
              <Link
                href={getLangPath("en")}
                onClick={() => setOpen(false)}
                className={`text-xl sm:text-2xl font-sans transition-colors ${
                  lang === "en"
                    ? "text-white font-bold border-b-2 border-turquesa pb-1"
                    : "text-white/60 hover:text-white font-normal"
                }`}
              >
                {dict.nav?.lang_en || "Inglés"}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
