"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, CircleDashed, Hexagon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    image: "/marquee/3.png",
    title: "Ajisito",
    footer: `"Desde que comenzamos a trabajar con Signal Marketing, nuestra comunicación dio un giro completo. Lograron transmitir el valor de nuestros productos y desarrollar una estrategia enfocada en clientes mayoristas. Hoy recibimos consultas mucho más calificadas y nuestra marca tiene una presencia mucho más profesional en el mercado B2B."`,
    bgColor: "bg-[#0a0a0a]",
    textColor: "text-white",
    invertLogo: true,
  },
  {
    id: 2,
    image: "/marquee/1.png",
    title: "Alma Beauty Spa",
    footer: `"Signal Marketing nos ayudó a llenar la agenda con pacientes realmente interesadas en nuestros tratamientos. Las campañas llegaron al público correcto y cada mes recibimos consultas constantes para nuestros servicios estéticos. Además, todo el contenido refleja la imagen profesional que queremos transmitir."`,
    bgColor: "bg-[#0a0a0a]",
    textColor: "text-white",
    invertLogo: true,
  },
  {
    id: 3,
    image: "/marquee/2.png",
    title: "Caribeños Mini Market",
    footer: `"Gracias a Signal Marketing, cada vez más personas conocen Caribeños. No solo aumentó la visibilidad de nuestro minimarket, sino también las compras a través de nuestra tienda online y los pedidos por delivery. Han logrado conectar nuestra marca con la comunidad venezolana y con nuevos clientes que hoy nos eligen."`,
    bgColor: "bg-[#0a0a0a]",
    textColor: "text-white",
    invertLogo: true,
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-[#090c1f] text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Heading */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-5xl text-white font-extralight tracking-tight mb-4">
            Resultados de <strong className="font-semibold text-turquesa">clientes</strong>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 font-light">
            Impacto real en el crecimiento, ventas y posicionamiento de las marcas que confían en nosotros.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((card, idx) => (
            <div
              key={card.id}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className={`bg-[#0e1333] border border-white/15 text-white rounded-2xl p-8 lg:p-10 flex flex-col min-h-[380px] lg:min-h-[440px] h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-turquesa/50 hover:shadow-[0_10px_30px_rgba(45,204,210,0.15)]`}
            >
              <div className="flex flex-col h-full z-10 relative">
                
                {/* Header (Logo) */}
                <div className="flex flex-row items-center justify-start h-16 lg:h-20 mb-2">
                  <img src={card.image} alt={card.title} className="h-14 lg:h-18 max-w-[200px] object-contain object-left" />
                </div>

                {/* Testimonial Quote (más arriba, light y elegante) */}
                <div className="pt-1 px-1 flex flex-col flex-grow">
                  <p className="text-xs md:text-sm text-left italic font-extralight text-slate-300/90 leading-relaxed tracking-wide">
                    "{card.footer.replace(/^"|"$/g, '')}"
                  </p>
                  
                  {/* Business Name (Sin mayúsculas forzadas) */}
                  <div className="mt-auto pt-4">
                    <p className="text-xs font-extralight tracking-wide text-slate-400">
                      — {card.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
