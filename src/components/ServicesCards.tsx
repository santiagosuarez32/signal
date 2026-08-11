"use client";

import React from 'react';
import { useTranslation } from "@/components/TranslationProvider";

export default function ServicesCards() {
  const { dict } = useTranslation();
  
  const cardsData = [
    {
      id: 1,
      number: "1",
      title: dict.plans.signal_silver.title,
      subtext: dict.plans.signal_silver.subtext,
      pills: dict.plans.signal_silver.pills,
      footer: dict.plans.signal_silver.footer,
      bgColor: "bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 border border-slate-600/50",
      numberColor: "text-white/20",
      textColor: "text-white",
      pillColor: "bg-slate-700/80 text-white border border-slate-500/40"
    },
    {
      id: 2,
      number: "2",
      title: dict.plans.signal_bronze.title,
      subtext: dict.plans.signal_bronze.subtext,
      pills: dict.plans.signal_bronze.pills,
      footer: dict.plans.signal_bronze.footer,
      bgColor: "bg-gradient-to-br from-amber-500 via-[#cd7f32] to-amber-700",
      numberColor: "text-white/30",
      textColor: "text-white",
      pillColor: "bg-white/20 text-white"
    },
    {
      id: 3,
      number: "3",
      title: dict.plans.signal_gold.title,
      subtext: dict.plans.signal_gold.subtext,
      pills: dict.plans.signal_gold.pills,
      footer: dict.plans.signal_gold.footer,
      bgColor: "bg-gradient-to-br from-yellow-300 via-[#e8b923] to-yellow-600",
      numberColor: "text-white/40",
      textColor: "text-mystic-navy",
      pillColor: "bg-white/60 text-mystic-navy"
    }
  ];

  return (
    <section className="relative z-10 w-full pt-12 md:pt-16 pb-16 bg-[#090c1f] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Intro text */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-2xl md:text-4xl font-normal leading-[1.2] tracking-tight text-white">
            {dict.services.intro_part1} <span className="font-normal text-turquesa">{dict.services.intro_bold}</span> {dict.services.intro_part2}
          </h2>
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
                <div className="flex flex-col gap-2 mb-6">
                  {card.pills.map((pill: string, idx: number) => (
                    <div 
                      key={idx} 
                      className="border border-current/30 rounded-[30px] px-3 py-1.5 text-xs font-light backdrop-blur-sm w-fit bg-current/5"
                    >
                      {pill}
                    </div>
                  ))}
                </div>

                {/* Consultar precio button */}
                <div className="mb-6">
                  <a
                    href="#contacto"
                    className="bg-mystic-navy text-white font-light text-[11px] xl:text-xs px-4 py-2.5 rounded-xl inline-flex items-center gap-2 w-fit hover:bg-white hover:text-black transition-all shadow-[0_0_25px_rgba(30,35,172,0.5)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 duration-300 group cursor-pointer"
                  >
                    <span>{dict.plans?.cta_price || "Consultar precio de este plan"}</span>
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
