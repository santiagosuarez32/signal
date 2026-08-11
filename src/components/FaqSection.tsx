"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "@/components/TranslationProvider";

gsap.registerPlugin(ScrollTrigger);

interface FAQItemProps {
  faq: { q: string; a: string };
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ faq, isOpen, onClick }: FAQItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!iconRef.current || !contentRef.current) return;

    gsap.to(iconRef.current, {
      rotate: isOpen ? 45 : 0,
      backgroundColor: isOpen ? "rgba(45,204,210,0.15)" : "rgba(255,255,255,0)",
      duration: 0.4,
      ease: "power2.out",
    });

    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (isOpen) {
        gsap.set(contentRef.current, { height: "auto", opacity: 1, marginTop: 12 });
      } else {
        gsap.set(contentRef.current, { height: 0, opacity: 0, marginTop: 0 });
      }
      return;
    }

    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        marginTop: 12,
        duration: 0.45,
        ease: "power3.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        marginTop: 0,
        duration: 0.35,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <div
      className={`overflow-hidden rounded-2xl border px-5 py-4 transition-colors duration-300 md:px-6 ${
        isOpen
          ? "border-white/15 bg-white/5"
          : "border-white/8 bg-white/[0.02] hover:bg-white/[0.04]"
      }`}
    >
      <button
        onClick={onClick}
        type="button"
        className="w-full flex justify-between items-center text-left focus:outline-none group cursor-pointer"
      >
        <h3 className="pr-8 text-[15px] font-light leading-snug tracking-tight text-white/85 transition-colors group-hover:text-white md:text-[16px]">
          {faq.q}
        </h3>
        <div
          ref={iconRef}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors"
        >
          <Plus strokeWidth={1.5} className="h-4 w-4" />
        </div>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0, marginTop: 0 }}
      >
        <div className="max-w-3xl pr-4 text-[13px] leading-relaxed text-slate-400 md:pr-12 md:text-[14px] font-light whitespace-pre-line">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const { dict } = useTranslation();
  const faqs = dict.faq.items as { q: string; a: string }[];

  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;
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
        },
      }
    );
  }, []);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  const toggleShowAll = () => {
    if (showAll) {
      if (openIdx !== null && openIdx >= 5) setOpenIdx(null);
      setShowAll(false);
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setShowAll(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative w-full overflow-hidden bg-[#090c1f] px-6 py-20 text-white md:py-28 lg:px-24"
    >
      <div className="w-full max-w-[800px] mx-auto">

        {/* Header */}
        <div ref={headerRef} className="mb-10 text-left md:mb-12">
          <h2 className="text-3xl md:text-5xl font-normal leading-[1.15] tracking-tight text-white mb-4">
            {dict.faq.title_part1}{" "}
            <span className="text-turquesa font-normal">{dict.faq.title_bold}</span>
          </h2>
          <p className="max-w-xl text-base md:text-lg leading-relaxed text-slate-400 font-light">
            {dict.faq.subtitle}
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-2.5">
          {visibleFaqs.map((faq, idx) => (
            <FAQItem
              key={faq.q}
              faq={faq}
              isOpen={openIdx === idx}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            />
          ))}
        </div>

        {/* Toggle button */}
        {faqs.length > 5 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={toggleShowAll}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/[0.03] text-white/70 text-sm font-light hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              <span>
                {showAll
                  ? "Ver menos preguntas"
                  : `Ver todas las preguntas (${faqs.length})`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
              ) : (
                <ChevronDown className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
