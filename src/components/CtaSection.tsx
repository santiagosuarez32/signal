"use client";

import React from "react";
import { useTranslation } from "@/components/TranslationProvider";

const widgets = [
  { title: "Facturación", value: "$ 894.027,00", subtitle: "Ayer" },
  { title: "Visitas únicas", value: "1.568", subtitle: "Hoy" },
  { title: "Ticket promedio", value: "$ 49.668,17", subtitle: "Esta semana" },
  { title: "Ventas", value: "18", subtitle: "Hoy" },
  { title: "Conversión", value: "3.2%", subtitle: "+0.5% vs mes anterior" },
];

export default function CtaSection() {
  const { dict } = useTranslation();

  return (
    <section className="w-full bg-[#090c1f] py-20 px-6 lg:px-12 flex justify-center">
      <div className="max-w-[1000px] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e23ac] via-[#15197d] to-[#0a0e36] text-white border border-white/20 relative shadow-2xl min-h-[400px] flex items-center">
        
        {/* Full Card Background Image Marquee with increased opacity and size */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-50">
          <div 
            className="w-full h-full relative flex justify-center items-center" 
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', 
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' 
            }}
          >
            <div 
              className="flex flex-col w-full max-w-[750px] lg:max-w-[950px] -rotate-6 scale-150 gap-0 m-0 p-0"
              style={{ animation: 'marquee-vertical 30s linear infinite reverse', willChange: 'transform' }}
            >
              <img src="/marquee-cta.png" alt="Marquee Background" className="w-full h-auto block shrink-0 select-none pointer-events-none m-0 p-0 border-0" />
              <img src="/marquee-cta.png" alt="Marquee Background" className="w-full h-auto block shrink-0 select-none pointer-events-none m-0 p-0 border-0" />
              <img src="/marquee-cta.png" alt="Marquee Background" className="w-full h-auto block shrink-0 select-none pointer-events-none m-0 p-0 border-0" />
              <img src="/marquee-cta.png" alt="Marquee Background" className="w-full h-auto block shrink-0 select-none pointer-events-none m-0 p-0 border-0" />
            </div>
          </div>
        </div>

        {/* Subtle Overlay to enhance text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#15197d]/95 via-[#15197d]/75 to-[#15197d]/20 pointer-events-none z-10" />

        {/* Text Content */}
        <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center relative z-20 max-w-2xl">
          <h2 className="text-3xl lg:text-4xl leading-[1.3] mb-5 tracking-tight text-white drop-shadow-md">
            <span className="font-light">{dict.cta.title_part1} </span>
            <span className="font-bold text-turquesa">{dict.cta.title_bold}</span>
            <span className="font-light"> {dict.cta.title_part2}</span>
          </h2>
          
          <p className="text-base text-slate-200 font-light mb-8 max-w-[480px] leading-relaxed">
            {dict.cta.subtext}
          </p>
          
          <a href="#contacto" className="bg-turquesa text-mystic-navy font-bold px-6 py-4 rounded-xl flex items-center gap-3 w-fit hover:brightness-110 transition-all text-sm shadow-[0_0_20px_rgba(45,204,210,0.4)] hover:shadow-[0_0_30px_rgba(45,204,210,0.7)] hover:-translate-y-0.5 duration-300">
            {dict.cta.button}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
