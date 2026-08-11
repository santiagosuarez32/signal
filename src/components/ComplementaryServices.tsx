"use client";

import React, { useEffect, useRef } from "react";
import { useTranslation } from "@/components/TranslationProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ComplementaryServices() {
  const { dict } = useTranslation();
  const cs = dict.complementary_services || {};
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (containerRef.current && sectionRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const b2bTargets: string[] = cs.b2b?.targets || [
    "Empresas de software (SaaS).",
    "Consultoras.",
    "Empresas de tecnología.",
    "Empresas de servicios.",
    "Soluciones corporativas.",
  ];

  return (
    <section ref={sectionRef} id="servicios-complementarios" className="relative w-full py-16 md:py-24 bg-[#090c1f] text-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 border border-white/20 rounded-[30px] text-white/90 text-xs font-light mb-4 bg-transparent">
            <span>{cs.badge || "Servicios Extra"}</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-normal leading-[1.2] tracking-tight text-white mb-3 normal-case">
            {cs.title || "Servicios Complementarios"}
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl font-light">
            {cs.subtitle || "Soluciones adicionales para potenciar el alcance, la confianza y las oportunidades comerciales de tu marca."}
          </p>
        </div>

        {/* Services Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          
          {/* 1. Gestión de Redes Sociales */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#1e23ac] via-[#15197d] to-[#0a0e36] border border-[#1e23ac]/30 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col h-full z-10 relative">
              <h3 className="text-2xl font-normal leading-tight tracking-tight text-white mb-2">
                {cs.social?.title || "Gestión de Redes Sociales"}
              </h3>
              <p className="text-sm font-light text-slate-300 leading-relaxed">
                {cs.social?.description || "Planes mensuales diseñados para empresas que buscan fortalecer su presencia digital mediante una estrategia de contenido, diseño, planificación y gestión enfocada en generar confianza, alcance y ventas."}
              </p>
            </div>
          </div>

          {/* 2. Producción de Video Profesional */}
          <div className="relative rounded-3xl bg-gradient-to-br from-cyan-950 via-teal-900 to-slate-950 border border-cyan-500/30 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col h-full z-10 relative">
              <h3 className="text-2xl font-normal leading-tight tracking-tight text-white mb-2">
                {cs.video?.title || "Producción de Video Profesional"}
              </h3>
              <p className="text-sm font-light text-slate-300 leading-relaxed">
                {cs.video?.description || "Creación de videos publicitarios y corporativos con grabación y edición profesional para campañas de Meta Ads, Google Ads, redes sociales y contenido de marca."}
              </p>
            </div>
          </div>

          {/* 3. Marketing B2B para Empresas */}
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 border border-slate-600/50 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-hidden md:col-span-2 lg:col-span-1">
            <div className="flex flex-col h-full z-10 relative">
              <h3 className="text-2xl font-normal leading-tight tracking-tight text-white mb-2">
                {cs.b2b?.title || "Marketing B2B para Empresas"}
              </h3>
              <p className="text-sm font-light text-slate-300 leading-relaxed mb-4">
                {cs.b2b?.description || "Estrategias especializadas para empresas que venden a otras empresas (B2B), diseñando sistemas para generar oportunidades comerciales mediante Google Ads, Meta Ads y campañas enfocadas en la captación de leads de calidad vía email marketing."}
              </p>
              
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs sm:text-sm font-light text-turquesa mb-3 block">
                  {cs.b2b?.targets_label || "Especializado en:"}
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {b2bTargets.map((target, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-light">
                      <span className="text-turquesa font-light">•</span>
                      <span>{target}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Consultoría de Marketing Digital */}
          <div className="relative rounded-3xl bg-gradient-to-br from-indigo-950 via-[#0a0e36] to-[#090c1f] border border-indigo-900/30 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-hidden md:col-span-2 lg:col-span-1">
            <div className="flex flex-col h-full z-10 relative">
              <h3 className="text-2xl font-normal leading-tight tracking-tight text-white mb-2">
                {cs.consulting?.title || "Consultoría de Marketing Digital"}
              </h3>
              <p className="text-sm font-light text-slate-300 leading-relaxed">
                {cs.consulting?.description || "Asesorías personalizadas para empresas que desean optimizar su estrategia digital, mejorar el rendimiento de sus campañas y aumentar sus resultados."}
              </p>
            </div>
          </div>

        </div>

        {/* 5. Custom Solution Banner */}
        <div className="relative rounded-[36px] border border-white/20 px-8 py-6 sm:px-10 sm:py-8 md:px-12 md:py-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 bg-transparent">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight mb-2">
              {cs.custom_solution?.title || "¿Buscas una solución a medida?"}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl">
              {cs.custom_solution?.description || "Contáctanos y prepararemos una propuesta personalizada de acuerdo con las necesidades y objetivos de tu empresa."}
            </p>
          </div>

          <a
            href="#contacto"
            className="bg-mystic-navy text-white font-light text-xs md:text-sm px-6 py-3 rounded-xl inline-flex items-center justify-center shadow-[0_0_25px_rgba(30,35,172,0.5)] hover:bg-white hover:text-black hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shrink-0"
          >
            <span>{cs.custom_solution?.cta || "Contactar ahora"}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
