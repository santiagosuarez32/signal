import React from "react";

const widgets = [
  { title: "Facturación", value: "$ 894.027,00", subtitle: "Ayer" },
  { title: "Visitas únicas", value: "1.568", subtitle: "Hoy" },
  { title: "Ticket promedio", value: "$ 49.668,17", subtitle: "Esta semana" },
  { title: "Ventas", value: "18", subtitle: "Hoy" },
  { title: "Conversión", value: "3.2%", subtitle: "+0.5% vs mes anterior" },
];

export default function CtaSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12 flex justify-center">
      <div className="max-w-[960px] w-full rounded-3xl flex flex-col lg:flex-row overflow-hidden bg-mystic-navy text-white relative shadow-2xl">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-[55%] p-10 md:p-12 flex flex-col justify-center relative z-10">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 border border-white/20">
             <span className="text-xl font-medium text-white tracking-tighter">SG</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-extralight leading-[1.2] mb-5 tracking-tight">
            ¿Lista para construir el negocio que te dé libertad?
          </h2>
          
          <p className="text-base text-white/80 font-light mb-8 max-w-[400px] leading-relaxed">
            Sumate hoy y empezá a escalar tu marca, paso a paso, con un modelo probado que ya cambió la vida de cientos de personas.
          </p>
          
          <button className="bg-turquesa text-mystic-navy px-7 py-3.5 rounded-xl flex items-center gap-3 w-fit hover:brightness-110 transition-all font-semibold text-sm shadow-[0_0_20px_rgba(45,204,210,0.3)] hover:shadow-[0_0_30px_rgba(45,204,210,0.5)] hover:-translate-y-0.5 duration-300">
            Quiero empezar ahora
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Right Side: Image Marquee Vertical */}
        <div className="lg:w-[45%] h-[400px] lg:h-[500px] relative overflow-hidden bg-mystic-navy border-l border-white/10 flex justify-center items-center">
          
          <div 
            className="w-full h-full relative flex justify-center overflow-hidden" 
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', 
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' 
            }}
          >
            <div 
              className="flex flex-col h-max w-full max-w-[280px] lg:max-w-[320px] -rotate-6 scale-110"
              style={{ animation: 'marquee-vertical 25s linear infinite reverse' }}
            >
              {/* Duplicate the image to create a seamless loop */}
              <img src="/marquee-cta.png" alt="Marquee" className="w-full h-auto object-contain shrink-0 pb-8" />
              <img src="/marquee-cta.png" alt="Marquee" className="w-full h-auto object-contain shrink-0 pb-8" />
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
