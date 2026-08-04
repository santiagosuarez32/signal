"use client";
import React, { useRef, useEffect, useState } from 'react';
import PhoneCountrySelect from '@/components/PhoneCountrySelect';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useTranslation } from "@/components/TranslationProvider";

export default function Footer() {
  const { dict } = useTranslation();
  const footerRef = useRef<HTMLElement>(null);
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
  }, []);

  return (
    <footer id="contacto" ref={footerRef} className="bg-black w-full flex flex-col items-center justify-between min-h-[100vh] relative pt-16 lg:pt-24 pb-8 px-6 lg:px-20 xl:px-24 z-20 text-white border-t border-white/10">
      
      {/* Main Content */}
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-16 mb-auto flex-grow pb-12">
        
        {/* Left: Text & Form */}
        <div className="flex flex-col items-start gap-4 lg:w-[46%] w-full">
          <div className="footer-anim border border-turquesa/40 bg-turquesa/10 rounded-[30px] px-6 py-2 text-sm text-turquesa font-medium tracking-wide">
            {dict.footer.badge}
          </div>
          <h1 className="footer-anim text-5xl md:text-[4rem] lg:text-[4.5rem] font-light text-white tracking-tight leading-none mt-1">
            {dict.footer.title}
          </h1>
          <p className="footer-anim text-base font-light text-slate-300 leading-relaxed max-w-lg mb-2">
            {dict.footer.subtext}
          </p>

          {/* Form */}
          <form className="footer-anim w-full flex flex-col gap-4 mt-2" onSubmit={(e) => { e.preventDefault(); alert(dict.footer.form.success); }}>
            <div className="flex flex-col xl:flex-row gap-4">
              <input type="text" name="nombre" placeholder={dict.footer.form.name} required minLength={3} className="w-full bg-[#0e1333]/90 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-turquesa focus:ring-1 focus:ring-turquesa transition-all" />
              <input type="text" name="empresa" placeholder={dict.footer.form.company} required minLength={2} className="w-full bg-[#0e1333]/90 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-turquesa focus:ring-1 focus:ring-turquesa transition-all" />
            </div>
            <PhoneCountrySelect country={country} setCountry={setCountry} />
            <textarea name="mensaje" placeholder={dict.footer.form.message} required minLength={10} rows={3} className="w-full bg-[#0e1333]/90 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-turquesa focus:ring-1 focus:ring-turquesa transition-all resize-none"></textarea>
            <input type="text" name="web" placeholder={dict.footer.form.web} className="w-full bg-[#0e1333]/90 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-turquesa focus:ring-1 focus:ring-turquesa transition-all" />
            
            <button type="submit" className="bg-turquesa text-mystic-navy font-bold rounded-xl px-6 py-4 mt-2 hover:bg-white transition-colors w-fit flex items-center gap-2 text-sm shadow-[0_0_20px_rgba(45,204,210,0.3)]">
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

      {/* Bottom Bar */}
      <div className="w-full max-w-[1400px] border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-medium text-slate-400 uppercase tracking-[0.15em] footer-anim">
        <p>{dict.footer.copyright} {new Date().getFullYear()}</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-turquesa transition-colors">Instagram</a>
          <a href="#" className="hover:text-turquesa transition-colors">LinkedIn</a>
        </div>
      </div>
      
    </footer>
  );
}
