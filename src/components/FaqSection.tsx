"use client";

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from "@/components/TranslationProvider";

gsap.registerPlugin(ScrollTrigger);

export default function FaqSection() {
  const { dict } = useTranslation();
  const faqs = dict.faq.items as { q: string, a: string }[];
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          }
        }
      );
    }

    faqRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            }
          }
        );
      }
    });
  }, []);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-[#090c1f] text-white">
      <div className="max-w-[800px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div ref={headerRef} className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight mb-4 text-white">
            {dict.faq.title_part1} <strong className="font-semibold text-turquesa">{dict.faq.title_bold}</strong>
          </h2>
          <p className="text-lg text-slate-300 font-light max-w-xl mx-auto">
            {dict.faq.subtitle}
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col border-t border-white/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                ref={(el) => { faqRefs.current[idx] = el; }}
                className="border-b border-white/10 group"
              >
                <button
                  onClick={() => toggleOpen(idx)}
                  className="w-full flex justify-between items-center py-6 md:py-8 text-left focus:outline-none transition-colors hover:text-turquesa"
                >
                  <span className="text-lg md:text-xl font-medium pr-8 transition-colors duration-300 text-white group-hover:text-turquesa">
                    {faq.q}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'border-turquesa bg-turquesa text-[#090c1f] rotate-45' : 'border-white/20 text-white group-hover:border-turquesa group-hover:text-turquesa'}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14"></path>
                      <path d="M5 12h14"></path>
                    </svg>
                  </div>
                </button>
                
                {/* Answer with CSS Grid animation */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed pb-6 md:pb-8 pr-12">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
