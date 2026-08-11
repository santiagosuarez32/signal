"use client";

import React from 'react';
import { Check, X } from 'lucide-react';
import { useTranslation } from "@/components/TranslationProvider";

export default function PlansTable() {
  const { dict } = useTranslation();
  const pt = dict.plans_table || {};
  const featureNames = pt.features || [];

  const features = [
    { name: featureNames[0] || "Diagnóstico del negocio", silver: true, bronze: true, gold: true },
    { name: featureNames[1] || "Diseño de estrategia publicitaria", silver: true, bronze: true, gold: true },
    { name: featureNames[2] || "Seteo inicial de campañas", silver: true, bronze: true, gold: true },
    { name: featureNames[3] || "Configuración de seguimiento", silver: true, bronze: true, gold: true },
    { name: featureNames[4] || "Creación de creativos iniciales", silver: pt.val_up_to_3 || "Hasta 3", bronze: true, gold: true },
    { name: featureNames[5] || "Gestión continua de campañas", silver: false, bronze: true, gold: true },
    { name: featureNames[6] || "Optimización de campañas", silver: false, bronze: true, gold: true },
    { name: featureNames[7] || "Rotación de anuncios", silver: false, bronze: true, gold: true },
    { name: featureNames[8] || "Testing de nuevos anuncios", silver: false, bronze: pt.val_limited || "Limitado", gold: pt.val_continuous || "Continuo" },
    { name: featureNames[9] || "Expansión de audiencias", silver: false, bronze: pt.val_limited || "Limitado", gold: true },
    { name: featureNames[10] || "Estrategia de escalado", silver: false, bronze: pt.val_limited || "Limitado", gold: true },
    { name: featureNames[11] || "Análisis avanzado de datos", silver: false, bronze: pt.val_basic || "Básico", gold: pt.val_advanced || "Avanzado" },
    { name: featureNames[12] || "Optimización del embudo de ventas", silver: false, bronze: pt.val_basic || "Básico", gold: true },
  ];

  const renderValue = (value: string | boolean) => {
    if (value === true) return <Check className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-turquesa mx-auto" strokeWidth={3} />;
    if (value === false) return <X className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-slate-500/50 mx-auto" strokeWidth={3} />;
    return <span className="text-[9px] sm:text-xs md:text-sm font-light text-slate-300 leading-none">{value}</span>;
  };

  return (
    <section className="relative w-full py-12 md:py-24 bg-[#090c1f] text-white">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6 lg:px-12">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-normal leading-[1.2] tracking-tight text-white mb-3 normal-case">
            {pt.title || "Planes"}
          </h2>
        </div>

        {/* Table Container - Fits 100% width on mobile */}
        <div className="w-full">
          
          {/* Header */}
          <div className="grid grid-cols-4 bg-mystic-navy/40 border border-white/15 text-white rounded-xl sm:rounded-2xl py-2.5 sm:py-4 px-2 sm:px-4 md:px-8 mb-2 sm:mb-4 items-center shadow-lg">
            <div className="col-span-1 font-light text-[9px] sm:text-xs md:text-base text-slate-300 normal-case">
              {pt.col_features || "Características"}
            </div>
            <div className="col-span-1 text-center font-light text-[9px] sm:text-xs md:text-base tracking-normal text-slate-200">
              <span className="hidden sm:inline">Signal </span>Silver
            </div>
            <div className="col-span-1 text-center font-light text-[9px] sm:text-xs md:text-base tracking-normal text-amber-500">
              <span className="hidden sm:inline">Signal </span>Bronze
            </div>
            <div className="col-span-1 text-center font-light text-[9px] sm:text-xs md:text-base tracking-normal text-yellow-500">
              <span className="hidden sm:inline">Signal </span>Gold
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-1.5 sm:gap-2">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-4 items-center py-2 sm:py-3.5 px-2 sm:px-4 md:px-8 border-b border-white/10 bg-black/40 rounded-lg sm:rounded-xl hover:bg-[#0e1333]/40 transition-colors"
              >
                <div className="col-span-1 font-light text-slate-300 text-[9px] sm:text-xs md:text-base leading-tight pr-1 sm:pr-4">
                  {feature.name}
                </div>
                <div className="col-span-1 text-center">
                  {renderValue(feature.silver)}
                </div>
                <div className="col-span-1 text-center">
                  {renderValue(feature.bronze)}
                </div>
                <div className="col-span-1 text-center">
                  {renderValue(feature.gold)}
                </div>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="grid grid-cols-4 items-center py-4 px-2 sm:px-4 md:px-8 border border-white/15 bg-black/60 rounded-xl mt-4 shadow-lg">
            <div className="col-span-1 font-light text-[9px] sm:text-xs md:text-sm text-slate-400 normal-case">
              {dict.plans?.cta_price_short || "Consultar precio"}
            </div>
            <div className="col-span-1 text-center px-1">
              <a
                href="#contacto"
                className="bg-mystic-navy text-white font-light px-2 py-1.5 sm:px-4 sm:py-2 rounded-xl inline-flex items-center justify-center shadow-[0_0_15px_rgba(30,35,172,0.4)] hover:bg-white hover:text-black transition-all text-[9px] sm:text-xs md:text-sm cursor-pointer border border-white/10"
              >
                <span>{dict.plans?.cta_price_short || "Consultar precio"}</span>
              </a>
            </div>
            <div className="col-span-1 text-center px-1">
              <a
                href="#contacto"
                className="bg-mystic-navy text-white font-light px-2 py-1.5 sm:px-4 sm:py-2 rounded-xl inline-flex items-center justify-center shadow-[0_0_15px_rgba(30,35,172,0.4)] hover:bg-white hover:text-black transition-all text-[9px] sm:text-xs md:text-sm cursor-pointer border border-white/10"
              >
                <span>{dict.plans?.cta_price_short || "Consultar precio"}</span>
              </a>
            </div>
            <div className="col-span-1 text-center px-1">
              <a
                href="#contacto"
                className="bg-mystic-navy text-white font-light px-2 py-1.5 sm:px-4 sm:py-2 rounded-xl inline-flex items-center justify-center shadow-[0_0_15px_rgba(30,35,172,0.4)] hover:bg-white hover:text-black transition-all text-[9px] sm:text-xs md:text-sm cursor-pointer border border-white/10"
              >
                <span>{dict.plans?.cta_price_short || "Consultar precio"}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
