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
      bgColor: "bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400",
      numberColor: "text-white",
      textColor: "text-mystic-navy",
      pillColor: "bg-white text-mystic-navy"
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
    <section className="relative z-10 w-full py-24 bg-white text-mystic-navy">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Intro text */}
        <div className="max-w-4xl mb-16">
          <p className="text-2xl md:text-3xl text-mystic-navy leading-tight font-light">
            {dict.services.intro_part1} <strong className="font-extrabold">{dict.services.intro_bold}</strong> {dict.services.intro_part2}
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
                  {card.pills.map((pill: string, idx: number) => (
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
