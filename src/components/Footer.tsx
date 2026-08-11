"use client";
import React, { useRef, useEffect, useState } from 'react';
import PhoneCountrySelect from '@/components/PhoneCountrySelect';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useTranslation } from "@/components/TranslationProvider";

export default function Footer() {
  const { dict, lang } = useTranslation();
  const footerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [country, setCountry] = useState("ar");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (footerRef.current) {
      const elements = footerRef.current.querySelectorAll('.footer-anim');

      gsap.fromTo(elements,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 75%",
          }
        }
      );
    }

    if (lineRef.current) {
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "center" });
      gsap.to(lineRef.current, {
        scaleX: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 95%",
        }
      });
    }
  }, []);

  return (
    <footer id="contacto" ref={footerRef} className="bg-black w-full flex flex-col items-center justify-between min-h-[100vh] relative pt-16 lg:pt-24 pb-8 px-6 lg:px-20 xl:px-24 z-20 text-white border-t border-white/25">

      {/* Main Content */}
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-16 mb-auto flex-grow pb-12">

        {/* Left: Text & Form */}
        <div className="flex flex-col items-start gap-4 lg:w-[46%] w-full">
          <div className="footer-anim inline-block px-3 py-2 border border-white/40 rounded-[30px] text-white/90 text-[14px] font-light backdrop-blur-sm">
            {dict.footer.badge}
          </div>
          <h1 className="footer-anim text-3xl md:text-5xl font-normal text-white tracking-tight leading-[1.15] mt-1">
            {dict.footer.title}
          </h1>
          <p className="footer-anim text-base md:text-lg font-light text-slate-400 leading-relaxed max-w-lg mb-2">
            {dict.footer.subtext}
          </p>

          {/* Form */}
          <form className="footer-anim w-full flex flex-col gap-4 mt-2" onSubmit={(e) => { e.preventDefault(); alert(dict.footer.form.success); }}>
            <div className="flex flex-col xl:flex-row gap-4">
              <input type="text" name="nombre" placeholder={dict.footer.form.name} required minLength={3} className="w-full bg-transparent border border-white/40 rounded-xl px-4 py-3 text-sm text-white placeholder:font-light placeholder:text-white/40 focus:outline-none focus:border-turquesa focus:ring-1 focus:ring-turquesa transition-all" />
              <input type="text" name="empresa" placeholder={dict.footer.form.company} required minLength={2} className="w-full bg-transparent border border-white/40 rounded-xl px-4 py-3 text-sm text-white placeholder:font-light placeholder:text-white/40 focus:outline-none focus:border-turquesa focus:ring-1 focus:ring-turquesa transition-all" />
            </div>
            <PhoneCountrySelect country={country} setCountry={setCountry} />
            <textarea name="mensaje" placeholder={dict.footer.form.message} required minLength={10} rows={3} className="w-full bg-transparent border border-white/40 rounded-xl px-4 py-3 text-sm text-white placeholder:font-light placeholder:text-white/40 focus:outline-none focus:border-turquesa focus:ring-1 focus:ring-turquesa transition-all resize-none"></textarea>
            <input type="text" name="web" placeholder={dict.footer.form.web} className="w-full bg-transparent border border-white/40 rounded-xl px-4 py-3 text-sm text-white placeholder:font-light placeholder:text-white/40 focus:outline-none focus:border-turquesa focus:ring-1 focus:ring-turquesa transition-all" />

            <button type="submit" className="bg-mystic-navy text-white font-light rounded-xl px-6 py-3 mt-2 hover:bg-white hover:text-black transition-all w-fit flex items-center gap-2 text-xs md:text-sm shadow-[0_0_25px_rgba(30,35,172,0.5)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 duration-300">
              {dict.footer.form.button}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </form>
        </div>

        {/* Right: Calendly */}
        <div className="footer-anim w-full lg:w-[54%] relative h-[620px] lg:h-[660px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0e1333]">
          <iframe
            src="https://calendly.com/admisignalmkt/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0e1333&text_color=ffffff&primary_color=2dccd2&locale=es"
            width="100%"
            height="100%"
            frameBorder="0"
            className="absolute inset-0 w-full h-full"
            style={{ overflow: 'hidden' }}
          ></iframe>
        </div>

      </div>

      {/* Bottom Bar Divider Line */}
      <div className="w-full max-w-[1400px] relative h-[1px]">
        <div ref={lineRef} className="absolute top-0 left-0 w-full h-[1px] bg-white/30" />
      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-[1400px] flex flex-row flex-wrap justify-center sm:justify-between items-center gap-x-8 gap-y-4 text-xs sm:text-sm font-light text-slate-400 footer-anim pt-8 pb-4 text-center sm:text-left">
        <p>{dict.footer.copyright.charAt(0).toUpperCase() + dict.footer.copyright.slice(1).toLowerCase()} {new Date().getFullYear()}</p>
        <p>
          Desarrollado por{" "}
          <a href="https://codew.com.ar" target="_blank" rel="noopener noreferrer" className="hover:text-turquesa transition-colors underline decoration-white/20">
            Codew
          </a>
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-10">
          <a href={`/${lang}/politica-de-privacidad`} className="hover:text-turquesa transition-colors">
            {lang === "es" ? "Política de privacidad" : "Privacy Policy"}
          </a>
          <a href="https://www.instagram.com/signalmarketing_/" target="_blank" rel="noopener noreferrer" className="hover:text-turquesa transition-colors">Instagram</a>
        </div>
      </div>

    </footer>
  );
}
