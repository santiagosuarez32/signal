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
    if (value === true) return <Check className="w-6 h-6 text-turquesa mx-auto" strokeWidth={3} />;
    if (value === false) return <X className="w-6 h-6 text-mystic-navy/50 mx-auto" strokeWidth={3} />;
    return <span className="text-sm md:text-base font-semibold text-mystic-navy">{value}</span>;
  };

  return (
    <section className="relative w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-5xl md:text-7xl font-black text-mystic-navy uppercase tracking-tighter">
            PLANES
          </h2>
          {/* Decorative burst/logo could go here, omitting for simplicity */}
          <div className="text-4xl md:text-6xl font-black text-turquesa tracking-tighter lowercase italic">
            signal
          </div>
        </div>

        {/* Table Container */}
        <div className="w-full overflow-x-auto pb-4">
          <div className="min-w-[800px] w-full">
            
            {/* Header */}
            <div className="grid grid-cols-4 bg-mystic-navy text-white rounded-full py-4 px-8 mb-4 items-center">
              <div className="col-span-1 font-bold text-lg md:text-xl uppercase tracking-wider">
                CARACTERÍSTICAS
              </div>
              <div className="col-span-1 text-center font-medium text-lg md:text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400">
                Signal Silver
              </div>
              <div className="col-span-1 text-center font-medium text-lg md:text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-br from-amber-500 via-[#cd7f32] to-amber-700">
                Signal Bronze
              </div>
              <div className="col-span-1 text-center font-medium text-lg md:text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-br from-yellow-300 via-[#e8b923] to-yellow-600">
                Signal Gold
              </div>
            </div>

            {/* Rows */}
            <div className="flex flex-col gap-2">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="grid grid-cols-4 items-center py-4 px-8 border-b border-mystic-navy/10 hover:bg-white/50 transition-colors"
                >
                  <div className="col-span-1 font-medium text-mystic-navy text-sm md:text-base pr-4">
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

      </div>
    </section>
  );
}
