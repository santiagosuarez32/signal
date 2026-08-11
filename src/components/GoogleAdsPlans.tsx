"use client";

import React, { useEffect, useRef } from "react";
import { useTranslation } from "@/components/TranslationProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function GoogleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC04"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

function GoogleIconWhite({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09zM12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23zM5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63zM12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
  );
}

export default function GoogleAdsPlans() {
  const { dict } = useTranslation();
  const gapData = dict.google_ads_plans || {};
  const basic = gapData.basic || {};
  const scaled = gapData.scaled || {};

  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (cardsContainerRef.current && sectionRef.current) {
      gsap.fromTo(
        cardsContainerRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const basicIncludes: string[] = basic.includes || [
    "Investigación de palabras clave.",
    "Configuración de hasta 1 campaña en Google Ads.",
    "Hasta 2 grupos de anuncios.",
    "Creación de anuncios optimizados.",
    "Configuración de conversiones básicas.",
    "Optimización semanal.",
    "Exclusión de palabras clave negativas.",
    "Monitoreo del presupuesto.",
    "Informe mensual con resultados y recomendaciones.",
    "Reunión mensual de seguimiento (30 minutos).",
    "Soporte por WhatsApp.",
  ];

  const basicRecommended: string[] = basic.recommended_for || [
    "Negocios locales.",
    "Profesionales independientes.",
    "Empresas que están iniciando con Google Ads.",
  ];

  const scaledIncludes: string[] = scaled.includes || [
    "Investigación avanzada de palabras clave y análisis de la competencia.",
    "Configuración de hasta 4 campañas (Búsqueda, Performance Max, Remarketing y Marca, según la estrategia).",
    "Hasta 10 grupos de anuncios.",
    "Creación y optimización continua de anuncios.",
    "Configuración completa de conversiones y eventos.",
    "Integración con Google Analytics 4 y Google Tag Manager (si aplica).",
    "Optimización de pujas, audiencias y segmentaciones.",
    "Implementación de listas de remarketing.",
    "Optimización dos veces por semana.",
    "Pruebas A/B de anuncios.",
    "Informe detallado mensual con métricas y oportunidades de mejora.",
    "Reunión estratégica mensual (60 minutos).",
    "Soporte prioritario por WhatsApp.",
  ];

  const scaledRecommended: string[] = scaled.recommended_for || [
    "Empresas en crecimiento.",
    "E-commerce.",
    "Clínicas, constructoras y negocios con presupuestos publicitarios más altos.",
  ];

  const plansData = [
    {
      key: "basic",
      number: "4",
      numberColor: "text-white/10",
      bgColor: "bg-gradient-to-br from-[#1e23ac] via-[#15197d] to-[#0a0e36] border border-[#1e23ac]/30",
      textColor: "text-white",
      title: basic.title || "Plan Google Ads Básico",
      badge: basic.badge || "Plan Especializado",
      ideal_for_label: basic.ideal_for_label || "Ideal para:",
      ideal_for: basic.ideal_for || "Empresas que quieren comenzar a generar clientes potenciales o ventas a través de Google.",
      includes_label: basic.includes_label || "Incluye:",
      includes: basicIncludes,
      recommended_for_label: basic.recommended_for_label || "Recomendado para:",
      recommended_for: basicRecommended,
      cta: basic.cta || "Consultar precio de este plan",
    },
    {
      key: "scaled",
      number: "5",
      numberColor: "text-white/15",
      bgColor: "bg-gradient-to-br from-cyan-950 via-teal-900 to-slate-950 border border-cyan-500/30",
      textColor: "text-white",
      title: scaled.title || "Plan Google Ads Escalado",
      badge: scaled.badge || "Plan Avanzado",
      ideal_for_label: scaled.ideal_for_label || "Ideal para:",
      ideal_for: scaled.ideal_for || "Empresas que buscan aumentar su volumen de clientes y optimizar continuamente su inversión.",
      includes_label: scaled.includes_label || "Incluye:",
      includes: scaledIncludes,
      recommended_for_label: scaled.recommended_for_label || "Recomendado para:",
      recommended_for: scaledRecommended,
      cta: scaled.cta || "Consultar precio de este plan",
    },
  ];

  return (
    <section ref={sectionRef} id="google-ads" className="relative w-full py-16 md:py-24 bg-[#090c1f] text-white overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 border border-white/20 rounded-[30px] text-white/90 text-xs font-light mb-4 bg-transparent">
            <GoogleIcon className="w-4 h-4" />
            <span className="normal-case">
              Google Ads
            </span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-normal leading-[1.2] tracking-tight text-white mb-3 normal-case">
            {gapData.section_title || "Planes de Google Ads"}
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl font-light">
            {gapData.section_subtitle || "Estrategias de búsqueda y anuncios enfocados en captar clientes con alta intención de compra."}
          </p>
        </div>

        {/* 2 Clean Side-by-Side Cards */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {plansData.map((plan) => (
            <div
              key={plan.key}
              className={`relative rounded-3xl ${plan.bgColor} ${plan.textColor} p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl flex flex-col justify-between overflow-hidden`}
            >
              {/* Colored Google Logo Background with Low Opacity */}
              <div className="absolute -left-10 lg:-left-12 top-16 lg:top-20 opacity-[0.07] select-none pointer-events-none">
                <GoogleIcon className="w-[18rem] h-[18rem] lg:w-[22rem] lg:h-[22rem]" />
              </div>

              <div className="flex flex-col h-full z-10 relative pl-16 lg:pl-20">
                {/* Header: Title + Badges */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 border border-white/20 rounded-[30px] text-white/90 text-xs font-light mb-3 bg-transparent w-fit">
                    <GoogleIcon className="w-3.5 h-3.5" />
                    <span>
                      {plan.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-normal leading-tight tracking-tight text-white mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-sm font-light leading-snug mt-1 text-slate-300">
                    {plan.ideal_for}
                  </p>
                </div>

                {/* Incluye */}
                <div className="mb-6">
                  <h4 className="text-xs sm:text-sm font-light text-slate-300 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-turquesa rounded-full inline-block"></span>
                    {plan.includes_label}
                  </h4>
                  
                  <ul className="space-y-2.5">
                    {plan.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-turquesa font-bold select-none">•</span>
                        <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Consultar precio button */}
                <div className="mb-6">
                  <a
                    href="#contacto"
                    className="bg-mystic-navy text-white font-light text-[11px] xl:text-xs px-4 py-2.5 rounded-xl inline-flex items-center gap-2 w-fit hover:bg-white hover:text-black transition-all shadow-[0_0_25px_rgba(30,35,172,0.5)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 duration-300 group cursor-pointer"
                  >
                    <span>{plan.cta}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>

                {/* Recomendado para at the bottom */}
                <div className="pt-6 border-t border-white/10 mt-auto">
                  <h4 className="text-xs sm:text-sm font-light text-turquesa mb-3">
                    {plan.recommended_for_label}
                  </h4>
                  
                  <ul className="space-y-2">
                    {plan.recommended_for.map((rec, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <span className="text-turquesa select-none">•</span>
                        <span className="text-xs sm:text-sm text-slate-300 font-light">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Disclaimer Note Below */}
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center backdrop-blur-md">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
            <strong className="text-white font-semibold uppercase tracking-wider block sm:inline mr-2">
              Importante:
            </strong>
            {gapData.disclaimer || "La inversión publicitaria en Google Ads no está incluida y se paga directamente a Google. El presupuesto recomendado se define de acuerdo con los objetivos, el mercado y la competencia de cada negocio."}
          </p>
        </div>

      </div>
    </section>
  );
}



