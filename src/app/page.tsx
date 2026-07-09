"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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
          {/* Background Video */}
          <div className="fixed inset-0 w-full h-screen z-0 pointer-events-none overflow-hidden bg-black">
            <video 
              src="https://pub-7dcc71e466f849e5959259c33a6847ec.r2.dev/7706630-uhd_4096_2160_25fps.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div ref={textContainerRef} className="relative z-10 w-full max-w-[70rem] mx-auto flex flex-col items-start justify-center pt-32 pb-20 px-8 md:px-16 lg:px-24 h-[100vh]">
            <div className="max-w-4xl flex flex-col items-start text-left">
              <div ref={ctaRef} className="inline-block px-5 py-2 border border-white/40 rounded-[30px] text-white/90 text-[14px] font-light mb-6 backdrop-blur-sm">
                Una agencia de publicidad
              </div>
              
              <h1
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-[4.5rem] font-light text-white leading-[1.15] tracking-tight mb-6"
              >
                Branding y contenidos <br className="hidden md:block" />
                para nuevos medios.
              </h1>

              <p
                ref={textRef}
                className="max-w-[36rem] text-lg md:text-xl text-white/80 font-light leading-relaxed"
              >
                Resolvemos problemas de comunicación complejos con <br className="hidden md:block" />herramientas creativas y tecnológicas.
              </p>
            </div>
          </div>
      </section>
      </div>

      <div className="relative z-10 w-full bg-white">
      
      {/* Method & Experience Section */}
      <section
        style={{
          fontFamily: "var(--font-manrope), sans-serif",
          fontWeight: 200,
        }}
        className="relative z-10 w-full text-[#3c3c3b]"
      >
        <div
          style={{ paddingTop: 80, paddingBottom: 60, maxWidth: 1400, marginInline: "auto" }}
          className="px-8 md:px-16 lg:px-32 xl:px-40"
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-block",
              border: "1px solid #706f6f",
              borderRadius: 20,
              padding: "8px 20px",
              fontSize: 14,
              fontWeight: 200,
              marginBottom: 32,
              color: "#3c3c3b",
            }}
          >
            Método y experiencia
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: "clamp(2.2rem, 1.8rem + 2vw, 3.5rem)",
              fontWeight: 200,
              lineHeight: 1.08,
              marginBottom: 28,
              color: "#1a1a1a",
            }}
          >
            Nos enfocamos en audiencias diversas para enriquecer la conversación.
          </h2>

          {/* Subtext */}
          <p
            style={{
              fontSize: "clamp(1.05rem, 0.95rem + 0.5vw, 1.25rem)",
              fontWeight: 300,
              lineHeight: 1.6,
              maxWidth: 640,
              color: "#706f6f",
              marginBottom: 60,
            }}
          >
            Trabajamos junto a cada marca para alcanzar públicos específicos con producciones de alto valor emocional que generan acción.
          </p>
        </div>

        {/* Marquee Logos */}
        <div className="px-8 md:px-16 lg:px-32 xl:px-40" style={{ maxWidth: 1400, marginInline: "auto" }}>
          <div
            style={{
              borderTop: "1px solid #e5e5e5",
              borderBottom: "1px solid #e5e5e5",
              overflow: "hidden",
              position: "relative",
              height: 96,
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Fade left */}
            <div style={{
              position: "absolute", left: 0, top: 0, width: 80, height: "100%",
              background: "linear-gradient(to right, #fff 40%, rgba(255,255,255,0) 100%)",
              zIndex: 9, pointerEvents: "none",
            }} />
            {/* Fade right */}
            <div style={{
              position: "absolute", right: 0, top: 0, width: 80, height: "100%",
              background: "linear-gradient(to left, #fff 40%, rgba(255,255,255,0) 100%)",
              zIndex: 9, pointerEvents: "none",
            }} />

            {/* Outer wrapper */}
            <div style={{ width: "100%", overflow: "hidden" }}>
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
                  <div key={rep} style={{ display: "inline-flex", alignItems: "center", gap: 80, paddingRight: 80 }}>
                    <span style={{ fontSize: 22, fontWeight: 700, color: "#3c3c3b", letterSpacing: "-0.02em", textTransform: "uppercase" }}>Royal Padel</span>
                    <span style={{ fontSize: 22, fontWeight: 900, fontStyle: "italic", color: "#3c3c3b", letterSpacing: "-0.01em" }}>SUBWAY</span>
                    <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.15em", color: "#3c3c3b" }}>AXEL</span>
                    <span style={{ fontSize: 15, fontWeight: 700, color: "#3c3c3b", border: "2.5px solid #3c3c3b", borderRadius: "50%", width: 54, height: 54, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, letterSpacing: "0em" }}>BMW</span>
                    <span style={{ fontSize: 22, fontWeight: 700, color: "#3c3c3b", letterSpacing: "-0.02em" }}>EPSON</span>
                    <span style={{ fontSize: 12, color: "#c0c0c0", flexShrink: 0 }}>◆</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Trabajo, sudor y algunas lágrimas Section */}
      <section className="presentation-step3-section relative z-10 w-full">
        <div className="step3-content">
          <div className="step3-text-wrapper">
            <h6 className="step3-badge reveal visible">Trabajo, sudor y algunas lágrimas</h6>
            <h2 className="step3-heading reveal visible">Estrategia <br />y efectividad.</h2>
            <h4 className="step3-subheading reveal visible">20 años de experiencia <br /> y más de 60 premios internacionales.</h4>
            <div className="reveal visible flex items-center gap-4 mt-2">
              <svg width="220" height="40" viewBox="0 0 220 40" fill="none" className="text-slate-800">
                <path d="M10 5 L10 35 L20 30 L30 35 L30 5 Z" fill="currentColor" opacity="0.1"/>
                <path d="M10 5 L10 35 L20 30 L30 35 L30 5 Z" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="20" cy="18" r="4" fill="currentColor"/>
                <text x="45" y="24" fontFamily="var(--font-manrope)" fontSize="12" fontWeight="700" fill="currentColor">60+ AWARDS</text>
              </svg>
            </div>
          </div>
          
          <div className="step3-proyects">
            {/* Proyect 1 - Audi */}
            <div className="step3-proyect step3-proyect-1 enter">
              <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=600" alt="Audi Campaign" />
            </div>
            {/* Proyect 2 - Axel */}
            <div className="step3-proyect step3-proyect-2 enter">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" alt="Axel Campaign" />
            </div>
            {/* Proyect 3 - Natalio 1 */}
            <div className="step3-proyect step3-proyect-3 enter">
              <img src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=600" alt="Natalio 1 Campaign" />
            </div>
            {/* Proyect 4 - Natalio 2 */}
            <div className="step3-proyect step3-proyect-4 enter">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" alt="Natalio 2 Campaign" />
            </div>
            {/* Proyect 5 - Paladini */}
            <div className="step3-proyect step3-proyect-5 enter">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600" alt="Paladini Campaign" />
            </div>
            {/* Proyect 6 - Represa */}
            <div className="step3-proyect step3-proyect-6 enter">
              <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600" alt="Represa Campaign" />
            </div>
          </div>
        </div>

        <div className="step3-marquee reveal">
          <div className="step3-marquee-track">
            <p className="step3-marquee-content">
              <span> BRANDING Y ESTRATEGIA </span>
              <span> - </span>
              <span> CREACIÓN DE CONTENIDOS </span>
              <span> - </span>
              <span>PRODUCCIÓN AUDIOVISUAL </span>
              <span> - </span>
              <span> MEDIOS Y CAMPAÑAS</span>
              <span> - </span>
              <span> DESARROLLOS A ESCALA</span>
              <span> - </span>
              <span> BRANDING Y ESTRATEGIA </span>
              <span> - </span>
              <span> CREACIÓN DE CONTENIDOS </span>
              <span> - </span>
              <span>PRODUCCIÓN AUDIOVISUAL </span>
              <span> - </span>
              <span> MEDIOS Y CAMPAÑAS</span>
              <span> - </span>
              <span> DESARROLLOS A ESCALA</span>
              <span> - </span>
              <span> BRANDING Y ESTRATEGIA </span>
              <span> - </span>
              <span> CREACIÓN DE CONTENIDOS </span>
              <span> - </span>
              <span>PRODUCCIÓN AUDIOVISUAL </span>
              <span> - </span>
              <span> MEDIOS Y CAMPAÑAS</span>
              <span> - </span>
              <span> DESARROLLOS A ESCALA</span>
              <span> - </span>
              <span> BRANDING Y ESTRATEGIA </span>
              <span> - </span>
              <span> CREACIÓN DE CONTENIDOS </span>
              <span> - </span>
              <span>PRODUCCIÓN AUDIOVISUAL </span>
              <span> - </span>
              <span> MEDIOS Y CAMPAÑAS</span>
              <span> - </span>
              <span> DESARROLLOS A ESCALA</span>
              <span> - </span>
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}

      <section className="relative z-10 w-full px-6 py-24 max-w-6xl mx-auto text-slate-900">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          
          {/* Image Column */}
          <div className="w-full lg:w-[45%] relative shrink-0">
            <div className="w-full aspect-[4/5] bg-[#EBEBEB] rounded overflow-hidden relative shadow-lg">
              <img 
                src="/about.jpg" 
                alt="Portrait"
                className="w-full h-full object-cover object-top mix-blend-multiply opacity-90"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-[55%] flex flex-col justify-start pt-8 lg:pt-0 relative">
            
            {/* Overlapping Heading */}
            <div className="mb-10 lg:absolute lg:top-10 lg:left-[-140px] z-10">
              <p className="text-xl md:text-2xl text-slate-500 font-light tracking-widest text-right pr-2">¡HEY!</p>
              <h2 className="text-6xl md:text-7xl lg:text-[7rem] font-thin text-slate-800 tracking-tight leading-none">
                SOY VILMA.
              </h2>
            </div>

            <div className="lg:mt-48 space-y-8 text-lg md:text-[1.1rem] text-slate-600 leading-relaxed font-light">
              <p className="text-2xl md:text-3xl text-slate-900 leading-tight">
                Divulgadora de <strong className="font-extrabold">liderazgo con inteligencia artificial, marketing y negocios.</strong> Y ahora, si me permites, <strong className="font-extrabold">tu nueva mentora..</strong>
              </p>
              
              <p>
                Es probable que hayas escuchado de mi o hayas consumido alguno de mis contenidos. Cada año, <strong className="font-semibold text-slate-900">mi marketing genera entre 400 y 500 millones de impresiones.</strong> Pero sin importar cómo llegaste aquí, <strong className="font-semibold text-slate-900">gracias por estar.</strong>
              </p>

              <p>
                Hoy más que nunca, en una era marcada por la inteligencia artificial, <strong className="font-semibold text-slate-900">se necesitan líderes como tú</strong> que combinan <strong className="font-semibold text-slate-900">humanidad con estrategia</strong>, e <strong className="font-semibold text-slate-900">IA con intención y propósito.</strong>
              </p>
              
              <div className="flex flex-col items-start gap-2 pt-2 font-bold text-slate-900 text-lg">
                <span className="bg-[#5FF971] px-3 py-1 inline-block">No sólo encontrarás el "qué"</span>
                <span className="bg-[#00FFE0] px-3 py-1 inline-block">También aprenderás el "cómo"</span>
              </div>
            </div>

          </div>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 w-full px-6 py-32 max-w-6xl mx-auto text-slate-900">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Tecnología de Punta
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            La combinación perfecta para el máximo rendimiento y estética.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Next.js",
              desc: "El framework de React para producción con SSR y optimización al extremo.",
              color: "from-zinc-400 to-zinc-600",
            },
            {
              title: "GSAP & Lenis",
              desc: "Animaciones de nivel profesional y un scroll tan suave como la seda.",
              color: "from-emerald-400 to-teal-600",
            },
            {
              title: "Tailwind CSS",
              desc: "Estilos consistentes, diseño responsivo y modo oscuro integrado nativamente.",
              color: "from-cyan-400 to-blue-600",
            },
          ].map((feature, i) => (
            <div
              key={i}
              ref={addToCardsRef}
              className="group relative p-[1px] rounded-3xl bg-transparent overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl" />
              <div className="relative h-full p-8 rounded-[23px] bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform duration-500 group-hover:-translate-y-1">
                <div
                  className={`w-12 h-12 mb-6 rounded-xl bg-gradient-to-br ${feature.color} opacity-20`}
                />
                <h3 className="text-2xl font-medium mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacer to demonstrate scroll */}
      <div className="h-[20vh]" />
      </div>
    </main>
  );
}
