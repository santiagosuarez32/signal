"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesCards from "@/components/ServicesCards";
import PlansTable from "@/components/PlansTable";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import { useTranslation } from "@/components/TranslationProvider";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { dict } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Hero Animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.2 }
    )
      .fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      );

    // Hero Scroll Animation (Text parallax/fade)
    gsap.to(textContainerRef.current, {
      scale: 0.9,
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Cards Scroll Animation
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen">
      {/* Hero Section */}
      <div className="w-full">
        <section
          ref={heroRef}
          className="relative w-full flex flex-col justify-center min-h-screen overflow-hidden origin-top"
        >
          {/* Background */}
          <div className="fixed inset-0 w-full h-screen z-0 pointer-events-none overflow-hidden bg-[#090c1f]">
            <video 
              src="https://pub-7dcc71e466f849e5959259c33a6847ec.r2.dev/7706630-uhd_4096_2160_25fps.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
            />
            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-[#090c1f]/60" />
          </div>

          <div ref={textContainerRef} className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-start justify-center pt-32 pb-20 px-8 md:px-16 lg:px-24 h-[100vh]">
            <div className="max-w-4xl flex flex-col items-start text-left">
              <div ref={ctaRef} className="inline-block px-5 py-2 border border-white/40 rounded-[30px] text-white/90 text-[14px] font-light mb-6 backdrop-blur-sm">
                {dict.hero.badge}
              </div>
              
              <h1
                ref={titleRef}
                className="text-3xl md:text-5xl lg:text-[4.15rem] font-extralight text-white leading-[1.15] tracking-tight mb-6"
              >
                {dict.hero.title1} <br className="hidden md:block" />
                {dict.hero.title2}
              </h1>

              <p
                ref={textRef}
                className="max-w-[36rem] text-base md:text-lg text-white/80 font-extralight leading-relaxed"
              >
                {dict.hero.subtitle1} <br className="hidden md:block" />{dict.hero.subtitle2}
              </p>
            </div>
          </div>
      </section>
      </div>

      <div className="relative z-10 w-full bg-[#090c1f] text-white">
      
      {/* Method & Experience Section */}
      <section className="relative z-10 w-full text-white bg-[#090c1f]">
        <div
          style={{ paddingTop: 80, paddingBottom: 60, maxWidth: 1000, marginInline: "auto" }}
          className="px-8 md:px-16 lg:px-24"
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-block",
              border: "1px solid var(--color-turquesa)",
              borderRadius: 20,
              padding: "8px 20px",
              fontSize: 14,
              fontWeight: 400,
              marginBottom: 32,
              color: "var(--color-turquesa)",
              backgroundColor: "rgba(45, 204, 210, 0.08)",
            }}
          >
            {dict.experience.badge}
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl text-white leading-tight font-light mb-7">
            {dict.experience.heading_part1} <strong className="font-extrabold text-turquesa">{dict.experience.heading_bold}</strong> {dict.experience.heading_part2}
          </h2>

          {/* Subtext */}
          <p
            style={{
              fontSize: "clamp(1.05rem, 0.95rem + 0.5vw, 1.25rem)",
              fontWeight: 300,
              lineHeight: 1.6,
              maxWidth: 640,
              color: "#cbd5e1",
              marginBottom: 60,
            }}
          >
            {dict.experience.subtext}
          </p>
        </div>

        {/* Marquee Logos */}
        <div className="px-4 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          <div className="relative">
            {/* Fade left */}
            <div className="absolute left-0 top-0 w-10 md:w-24 h-full bg-gradient-to-r from-[#090c1f] via-[#090c1f]/80 to-transparent z-10 pointer-events-none" />
            {/* Fade right */}
            <div className="absolute right-0 top-0 w-10 md:w-24 h-full bg-gradient-to-l from-[#090c1f] via-[#090c1f]/80 to-transparent z-10 pointer-events-none" />

            <div className="border-y border-white/15 overflow-hidden h-[90px] md:h-[140px] flex items-center">
              {/* Outer wrapper */}
              <div className="w-full overflow-hidden">
                <div
                  style={{
                    display: "inline-flex",
                    whiteSpace: "nowrap",
                    willChange: "transform",
                    animation: "marquee-logos 30s linear infinite",
                    alignItems: "center",
                  }}
                >
                  {[...Array(4)].map((_, rep) => (
                    <div key={rep} className="inline-flex items-center gap-6 md:gap-12 pr-6 md:pr-12">
                      <img src="/marquee/1.png" alt="Brand 1" className="h-16 w-16 md:h-28 md:w-28 object-contain shrink-0" />
                      <img src="/marquee/2.png" alt="Brand 2" className="h-16 w-16 md:h-28 md:w-28 object-contain shrink-0" />
                      <img src="/marquee/3.png" alt="Brand 3" className="h-16 w-16 md:h-28 md:w-28 object-contain shrink-0" />
                      <img src="/marquee/4.png" alt="Brand 4" className="h-16 w-16 md:h-28 md:w-28 object-contain shrink-0" />
                      <img src="/marquee/5.png" alt="Brand 5" className="h-16 w-16 md:h-28 md:w-28 object-contain shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* About Section */}
      <section className="relative z-10 w-full bg-[#090c1f] pt-16 pb-8 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            
            {/* Image Column */}
            <div className="w-full lg:w-[45%] relative shrink-0">
              <div className="w-full aspect-[4/5] bg-[#0e1333] rounded-2xl overflow-hidden relative shadow-2xl border border-white/10">
                <img 
                  src="/about.jpg" 
                  alt="Portrait"
                  className="w-full h-full object-cover object-top opacity-90"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-[55%] flex flex-col justify-start pt-8 lg:pt-0 relative">
              
              {/* Overlapping Heading */}
              <div className="mb-10 lg:absolute lg:top-10 lg:left-[-140px] z-10">
                <p className="text-xl md:text-2xl text-turquesa font-semibold tracking-widest text-right pr-2">{dict.about.greeting}</p>
                <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-thin text-white tracking-tight leading-none whitespace-nowrap drop-shadow-lg">
                  {dict.about.title}
                </h2>
              </div>

              <div className="lg:mt-48 space-y-8 text-lg md:text-[1.1rem] text-slate-300 leading-relaxed font-light">
                <p className="text-2xl md:text-3xl text-white leading-tight">
                  {dict.about.p1_part1} <strong className="font-extrabold text-turquesa">{dict.about.p1_bold}</strong> {dict.about.p1_part2} <strong className="font-extrabold text-white">{dict.about.p1_bold2}</strong>
                </p>
                
                <p>
                  {dict.about.p2_part1} <strong className="font-semibold text-white">{dict.about.p2_bold}</strong> {dict.about.p2_part2} <strong className="font-semibold text-white">{dict.about.p2_bold2}</strong>
                </p>

                <p>
                  {dict.about.p3_part1} <strong className="font-semibold text-white">{dict.about.p3_bold}</strong> {dict.about.p3_part2} <strong className="font-semibold text-white">{dict.about.p3_bold2}</strong>{dict.about.p3_part3} <strong className="font-semibold text-white">{dict.about.p3_bold3}</strong>
                </p>
                
                <div className="flex flex-col items-start gap-2 pt-2 font-bold text-white text-lg">
                  <span className="bg-turquesa text-mystic-navy px-4 py-1.5 rounded-md inline-block shadow-md">{dict.about.pill1}</span>
                  <span className="bg-mystic-navy text-white border border-white/20 px-4 py-1.5 rounded-md inline-block shadow-md">{dict.about.pill2}</span>
                </div>
              </div>

            </div>
            
          </div>
        </div>
      </section>

      <ServicesCards />
      <PlansTable />

      <Testimonials />

      {/* Instagram Feed Section */}
      <section className="relative z-10 w-full py-12 bg-[#090c1f]">
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <div className="elfsight-app-38ccda90-6f49-45d9-a689-3b90377b8a85" data-elfsight-app-lazy></div>
      </section>
      <FaqSection />
      <CtaSection />

      </div>
    </main>
  );
}
