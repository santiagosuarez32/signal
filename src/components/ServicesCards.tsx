import React from 'react';

const cardsData = [
  {
    id: 1,
    number: "1",
    title: "Signal Silver",
    subtext: "Para negocios que quieren comenzar a usar publicidad digital de forma estructurada.",
    pills: [
      "Análisis inicial del negocio",
      "Diseño de la arquitectura de campañas",
      "Configuración de plataformas publicitarias",
      "Configuración del seguimiento",
      "Producción de 3 creativos iniciales",
      "Lanzamiento de campañas"
    ],
    footer: "Este plan construye la base de tu sistema de adquisición de clientes. Al finalizar podés gestionar las campañas internamente o escalar al siguiente nivel.",
    bgColor: "bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400",
    numberColor: "text-white",
    textColor: "text-mystic-navy",
    pillColor: "bg-white text-mystic-navy"
  },
  {
    id: 2,
    number: "2",
    title: "Signal Bronze",
    subtext: "Para negocios que ya invierten en publicidad y quieren mejorar su rendimiento.",
    pills: [
      "Optimización continua de campañas",
      "Análisis de métricas de rendimiento",
      "Ajustes de presupuesto",
      "Rotación de creativos",
      "Mejoras en la estructura de campañas",
      "Reportes de rendimiento periódicos"
    ],
    footer: "El objetivo es mejorar la eficiencia y estabilidad de tus campañas. Tomamos decisiones en base a datos reales para maximizar tu inversión.",
    bgColor: "bg-gradient-to-br from-amber-500 via-[#cd7f32] to-amber-700",
    numberColor: "text-white/30",
    textColor: "text-white",
    pillColor: "bg-white/20 text-white"
  },
  {
    id: 3,
    number: "3",
    title: "Signal Gold",
    subtext: "Para negocios que buscan crecimiento agresivo con enfoque de performance marketing.",
    pills: [
      "Análisis completo del embudo",
      "Testing de campañas y creativos",
      "Testing de nuevos públicos",
      "Nuevos creativos mensuales",
      "Expansión de audiencias",
      "Optimización avanzada",
      "Estrategia de escalado"
    ],
    footer: "El objetivo es convertir la publicidad en un canal escalable. La publicidad se convierte en el motor real de crecimiento de tu negocio.",
    bgColor: "bg-gradient-to-br from-yellow-300 via-[#e8b923] to-yellow-600",
    numberColor: "text-white/40",
    textColor: "text-mystic-navy",
    pillColor: "bg-white/60 text-mystic-navy"
  }
];

export default function ServicesCards() {
  return (
    <section className="relative z-10 w-full py-24 bg-white text-mystic-navy">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Intro text */}
        <div className="max-w-4xl mb-16">
          <p className="text-2xl md:text-3xl text-mystic-navy leading-tight font-light">
            Planes diseñados para cada etapa de tu crecimiento. Construimos <strong className="font-extrabold">sistemas de adquisición de clientes</strong> que escalan contigo.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {cardsData.map((card) => (
            <div 
              key={card.id} 
              className={`${card.bgColor} ${card.textColor} rounded-2xl p-8 lg:p-10 flex flex-col h-full shadow-xl relative overflow-hidden`}
            >
              {/* Cut-off Number Background */}
              <div className={`absolute -left-2 lg:-left-4 top-0 lg:top-4 text-[12rem] lg:text-[14rem] font-bold leading-none tracking-tighter ${card.numberColor} select-none`}>
                {card.number}
              </div>

              <div className="flex flex-col h-full z-10 relative pl-16 lg:pl-20">
                
                {/* Title Row */}
                <div className="mb-6">
                  <h3 className="text-2xl font-medium tracking-wide mb-2 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm font-medium leading-snug mt-2 opacity-90">
                    {card.subtext}
                  </p>
                </div>

                {/* Pills */}
                <div className="flex flex-col gap-2 mb-8">
                  {card.pills.map((pill, idx) => (
                    <div 
                      key={idx} 
                      className={`${card.pillColor} rounded-full px-4 py-1.5 text-xs font-semibold shadow-sm w-fit`}
                    >
                      {pill}
                    </div>
                  ))}
                </div>

                {/* Footer text */}
                <div className="mt-auto pt-6 border-t border-current/10">
                  <p className="text-sm italic font-light opacity-90 leading-snug">
                    {card.footer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
