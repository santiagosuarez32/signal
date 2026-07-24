"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, CircleDashed, Hexagon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    image: "/marquee/1.png",
    title: "Alma Beauty Spa",
    footer: `"Desde que rediseñamos la estrategia de e-commerce, nuestro volumen de ventas mensuales superó todas las expectativas. El enfoque en la conversión fue la pieza que nos faltaba para escalar."`,
    bgColor: "bg-[#0a0a0a]",
    textColor: "text-white",
    invertLogo: true,
  },
  {
    id: 2,
    image: "/marquee/2.png",
    title: "Caribeños",
    footer: `"Una optimización absoluta de nuestro funnel. No solo logramos atraer a miles de usuarios nuevos en un tiempo récord, sino que bajamos significativamente nuestro costo de adquisición."`,
    bgColor: "bg-[#0a0a0a]",
    textColor: "text-white",
    invertLogo: true,
  },
  {
    id: 3,
    image: "/marquee/3.png",
    title: "Ajisito",
    footer: `"Entendieron a la perfección nuestro modelo B2B. La calidad de los leads mejoró drásticamente y la nueva comunicación nos posicionó como líderes indiscutidos en nuestro sector."`,
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
              toggleActions: "play none none reverse",
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
    <section ref={containerRef} className="relative w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Heading */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-5xl text-mystic-navy font-extralight tracking-tight mb-4">
            Resultados de <strong className="font-semibold">clientes</strong>
          </h2>
          <p className="text-lg md:text-xl text-mystic-navy/70 font-light">
            Impacto real en el crecimiento, ventas y posicionamiento de las marcas que confían en nosotros.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((card, idx) => (
            <div
              key={card.id}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className={`${card.bgColor} ${card.textColor} rounded-2xl p-8 lg:p-10 flex flex-col min-h-[400px] lg:min-h-[500px] h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="flex flex-col h-full z-10 relative">
                
                {/* Header (Logo) */}
                <div className="flex flex-row items-center gap-4 -ml-2 h-20 xl:h-24">
                  <img src={card.image} alt={card.title} className={`max-h-full w-auto object-contain brightness-0 ${card.invertLogo ? 'invert' : ''}`} />
                </div>

                {/* Testimonial Quote */}
                <div className="pt-2 px-1 lg:px-2 flex flex-col flex-grow">
                  <p className="text-sm md:text-base lg:text-lg text-left italic font-extralight opacity-90 leading-relaxed">
                    "{card.footer.replace(/^"|"$/g, '')}"
                  </p>
                  
                  {/* Business Name */}
                  <div className="mt-auto pt-6">
                    <p className="text-[11px] md:text-xs font-light tracking-wide leading-tight opacity-90">
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
