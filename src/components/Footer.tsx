"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  
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
    <footer ref={footerRef} className="bg-black w-full flex flex-col items-center justify-between h-[100vh] relative overflow-hidden pt-10 lg:pt-16 pb-6 px-6 lg:px-12 z-20">
      
      {/* Main Content */}
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-auto flex-grow">
        
        {/* Left: Text */}
        <div className="flex flex-col items-start gap-5 lg:w-[45%]">
          <div className="footer-anim border border-white/30 rounded-[30px] px-6 py-2 text-sm text-white/80 font-light tracking-wide">
            Contacto
          </div>
          <h1 className="footer-anim text-6xl md:text-[5.5rem] lg:text-[7rem] font-light text-white tracking-tight leading-none mt-2">
            Hablemos.
          </h1>
          <p className="footer-anim text-lg md:text-xl font-light text-white/60 leading-relaxed max-w-lg mt-2">
            Para coordinar una reunión y descubrir cómo podemos escalar tu negocio, agendá un horario en nuestro calendario.
          </p>
        </div>

        {/* Right: Calendly */}
        <div className="footer-anim w-full lg:w-[55%] relative h-[650px] lg:h-[760px]">
          <iframe
            src="https://calendly.com/admisignalmkt/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=2dccd2&locale=es"
            width="100%"
            height="100%"
            frameBorder="0"
            className="absolute inset-0 w-full h-full"
            style={{ overflow: 'hidden' }}
          ></iframe>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-[1400px] border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-light text-white/60 uppercase tracking-[0.15em] footer-anim">
        <p>SIGNAL {new Date().getFullYear()}</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
      
    </footer>
  );
}
