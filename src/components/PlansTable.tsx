import React from 'react';
import { Check, X } from 'lucide-react';

const features = [
  { name: "Diagnóstico del negocio", silver: true, bronze: true, gold: true },
  { name: "Diseño de estrategia publicitaria", silver: true, bronze: true, gold: true },
  { name: "Seteo inicial de campañas", silver: true, bronze: true, gold: true },
  { name: "Configuración de seguimiento", silver: true, bronze: true, gold: true },
  { name: "Creación de creativos iniciales", silver: "Hasta 3", bronze: true, gold: true },
  { name: "Gestión continua de campañas", silver: false, bronze: true, gold: true },
  { name: "Optimización de campañas", silver: false, bronze: true, gold: true },
  { name: "Rotación de anuncios", silver: false, bronze: true, gold: true },
  { name: "Testing de nuevos anuncios", silver: false, bronze: "Limitado", gold: "Continuo" },
  { name: "Expansión de audiencias", silver: false, bronze: "Limitado", gold: true },
  { name: "Estrategia de escalado", silver: false, bronze: "Limitado", gold: true },
  { name: "Análisis avanzado de datos", silver: false, bronze: "Básico", gold: "Avanzado" },
  { name: "Optimización del embudo de ventas", silver: false, bronze: "Básico", gold: true },
];

export default function PlansTable() {
  const renderValue = (value: string | boolean) => {
    if (value === true) return <Check className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-turquesa mx-auto" strokeWidth={3} />;
    if (value === false) return <X className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-slate-500/50 mx-auto" strokeWidth={3} />;
    return <span className="text-[9px] sm:text-xs md:text-base font-semibold text-white leading-none">{value}</span>;
  };

  return (
    <section className="relative w-full py-12 md:py-24 bg-[#090c1f] text-white">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6 lg:px-12">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-12">
          <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter text-center md:text-left">
            PLANES
          </h2>
        </div>

        {/* Table Container - Fits 100% width on mobile */}
        <div className="w-full">
          
          {/* Header */}
          <div className="grid grid-cols-4 bg-[#1e23ac] border border-white/15 text-white rounded-xl sm:rounded-2xl py-2.5 sm:py-4 px-2 sm:px-4 md:px-8 mb-2 sm:mb-4 items-center shadow-lg">
            <div className="col-span-1 font-bold text-[9px] sm:text-xs md:text-xl uppercase tracking-tight sm:tracking-wider">
              CARACTERÍSTICAS
            </div>
            <div className="col-span-1 text-center font-bold text-[9px] sm:text-xs md:text-xl tracking-tight sm:tracking-wider bg-clip-text text-transparent bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400">
              <span className="hidden sm:inline">Signal </span>Silver
            </div>
            <div className="col-span-1 text-center font-bold text-[9px] sm:text-xs md:text-xl tracking-tight sm:tracking-wider bg-clip-text text-transparent bg-gradient-to-br from-amber-500 via-[#cd7f32] to-amber-700">
              <span className="hidden sm:inline">Signal </span>Bronze
            </div>
            <div className="col-span-1 text-center font-bold text-[9px] sm:text-xs md:text-xl tracking-tight sm:tracking-wider bg-clip-text text-transparent bg-gradient-to-br from-yellow-300 via-[#e8b923] to-yellow-600">
              <span className="hidden sm:inline">Signal </span>Gold
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-1.5 sm:gap-2">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-4 items-center py-2 sm:py-3.5 px-2 sm:px-4 md:px-8 border-b border-white/10 bg-[#0e1333]/60 rounded-lg sm:rounded-xl hover:bg-[#0e1333] transition-colors"
              >
                <div className="col-span-1 font-medium text-slate-200 text-[9px] sm:text-xs md:text-base leading-tight pr-1 sm:pr-4">
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

        </div>

      </div>
    </section>
  );
}
