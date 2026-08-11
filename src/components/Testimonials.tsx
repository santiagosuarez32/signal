"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Star, ArrowUpRight, Play, Pause } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CDN_VIDEOS_BASE = "https://pub-df8536ccd11f4a75b0cd961af63c281c.r2.dev/testimonios";
const ALMA_VIDEO_URL = `${CDN_VIDEOS_BASE}/alma.mp4`;
const PAWSH_VIDEO_URL = `${CDN_VIDEOS_BASE}/pawsh.mp4`;

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  logo?: string;
  content: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: "Alma Beauty Spa",
    role: "Centro de Estética",
    logo: "/marquee/1.png",
    content:
      "Signal Marketing nos ayudó a llenar la agenda con pacientes realmente interesadas en nuestros tratamientos. Las campañas llegaron al público correcto y cada mes recibimos consultas constantes para nuestros servicios estéticos.",
  },
  {
    id: 2,
    name: "Ajisito",
    role: "Marca B2B & Distribución",
    logo: "/marquee/3.png",
    content:
      "Trabajar con Signal Marketing nos ayudó a ordenar nuestra propuesta digital B2B y mostrar nuestros productos con una imagen clara y profesional. Hoy recibimos consultas mucho más calificadas.",
  },
  {
    id: 3,
    name: "Caribeños Mini Market",
    role: "Comercio & E-Commerce",
    logo: "/marquee/2.png",
    content:
      "Gracias a las campañas de Signal Marketing, no solo aumentó la visibilidad de nuestro minimarket, sino también las compras a través de nuestra tienda online y los pedidos por delivery.",
  },
  {
    id: 4,
    name: "Dennys Garcia",
    role: "Pawsh Royal Spa",
    logo: "/marquee/4.png",
    content:
      "Trabajar con Signal Marketing nos permitió automatizar la captación de clientes y agendar reservas sin esfuerzo. El sistema que crearon es simple, rápido y funciona de manera constante todos los días.",
  },
];

export default function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeMobileSlide, setActiveMobileSlide] = useState(0);

  const totalSlides = 2;
  const totalMobileSlides = 6;

  useEffect(() => {
    if (headerRef.current && sectionRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonios"
      className="relative w-full overflow-hidden bg-[#090c1f] px-4 py-16 sm:px-6 md:py-24 text-white"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Decorative circles - right side */}
      <TestimonialsCirclesSVG />

      <div className="max-w-[1142px] mx-auto relative z-10">
        
        {/* Header */}
        <div ref={headerRef} className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-normal tracking-tight text-white md:text-5xl mb-4">
            Historias reales de <span className="font-normal text-turquesa">clientes que crecieron.</span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-slate-400 font-light md:text-lg">
            Marcas y emprendedores que potenciaron su negocio digital con Signal Marketing.
          </p>
        </div>

        {/* Desktop Carousel (3 cards per slide) */}
        <div className="mx-auto hidden w-full max-w-[980px] overflow-hidden md:block">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {/* Slide 1 */}
            <div className="w-full shrink-0">
              <div className="grid grid-cols-3 gap-5 lg:gap-6">
                <VideoCard
                  videoUrl={ALMA_VIDEO_URL}
                  title="Testimonio de Alma Beauty Spa"
                  name="Alma Beauty Spa"
                  role="Centro de Estética"
                />
                <TextCard item={TESTIMONIALS_DATA[0]} />
                <VideoCard
                  videoUrl={PAWSH_VIDEO_URL}
                  title="Testimonio de Pawsh"
                  name="Pawsh"
                  role="Pawsh Royal Spa"
                />
              </div>
            </div>

            {/* Slide 2 */}
            <div className="w-full shrink-0">
              <div className="grid grid-cols-3 gap-5 lg:gap-6">
                <TextCard item={TESTIMONIALS_DATA[1]} />
                <TextCard item={TESTIMONIALS_DATA[2]} />
                <TextCard item={TESTIMONIALS_DATA[3]} />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Controls */}
        <div className="mt-8 hidden items-center justify-center gap-4 md:flex">
          <button
            type="button"
            onClick={() => setActiveSlide((current) => (current - 1 + totalSlides) % totalSlides)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-turquesa hover:text-mystic-navy cursor-pointer"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Ir al grupo de testimonios ${index + 1}`}
                aria-current={activeSlide === index}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  activeSlide === index ? "w-8 bg-turquesa" : "w-2.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setActiveSlide((current) => (current + 1) % totalSlides)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-turquesa hover:text-mystic-navy cursor-pointer"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Carousel (1 card per slide) */}
        <div className="mx-auto w-full max-w-[310px] overflow-hidden md:hidden">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${activeMobileSlide * 100}%)` }}
          >
            <div className="w-full shrink-0">
              <VideoCard
                videoUrl={ALMA_VIDEO_URL}
                title="Testimonio de Alma Beauty Spa"
                name="Alma Beauty Spa"
                role="Centro de Estética"
              />
            </div>
            <div className="w-full shrink-0">
              <TextCard item={TESTIMONIALS_DATA[0]} />
            </div>
            <div className="w-full shrink-0">
              <VideoCard
                videoUrl={PAWSH_VIDEO_URL}
                title="Testimonio de Pawsh"
                name="Pawsh"
                role="Pawsh Royal Spa"
              />
            </div>
            <div className="w-full shrink-0">
              <TextCard item={TESTIMONIALS_DATA[1]} />
            </div>
            <div className="w-full shrink-0">
              <TextCard item={TESTIMONIALS_DATA[2]} />
            </div>
            <div className="w-full shrink-0">
              <TextCard item={TESTIMONIALS_DATA[3]} />
            </div>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setActiveMobileSlide((current) => (current - 1 + totalMobileSlides) % totalMobileSlides)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors active:bg-turquesa active:text-mystic-navy"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalMobileSlides }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveMobileSlide(index)}
                aria-label={`Ir al testimonio ${index + 1}`}
                aria-current={activeMobileSlide === index}
                className={`h-2 rounded-full transition-all ${
                  activeMobileSlide === index ? "w-6 bg-turquesa" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setActiveMobileSlide((current) => (current + 1) % totalMobileSlides)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors active:bg-turquesa active:text-mystic-navy"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-center md:mt-12">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-3 rounded-xl bg-mystic-navy px-6 py-3 text-xs md:text-sm font-light text-white shadow-[0_0_25px_rgba(30,35,172,0.5)] transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 cursor-pointer"
          >
            <span className="flex gap-1 text-amber-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-current text-amber-400" />
              ))}
            </span>
            <span>Ver cómo podemos hacer crecer tu negocio</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

function VideoCard({
  videoUrl,
  title,
  name,
  role,
}: {
  videoUrl: string;
  title: string;
  name: string;
  role: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.setAttribute("playsinline", "true");
      video.setAttribute("webkit-playsinline", "true");
      video.setAttribute("x5-playsinline", "true");
      video.setAttribute("controlsList", "nofullscreen nodownload noremoteplayback");
      (video as any).playsInline = true;
      (video as any).webkitPlaysInline = true;
    }
  }, [videoUrl]);

  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setIsLoading(false);
      } else {
        setIsLoading(true);
        if (videoRef.current.readyState === 0) {
          videoRef.current.load();
        }
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setIsLoading(false);
            })
            .catch((err) => {
              console.warn("Video play error:", err);
              setIsPlaying(false);
              setIsLoading(false);
            });
        }
      }
    }
  };

  const videoSrcWithFragment = `${videoUrl}#t=0.001`;

  return (
    <div className="relative min-h-[400px] aspect-[9/16] overflow-hidden rounded-[24px] border border-white/15 bg-[#0e1333] shadow-2xl">
      <video
        ref={videoRef}
        loop
        playsInline
        controlsList="nofullscreen nodownload noremoteplayback"
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-100"
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => {
          setIsPlaying(true);
          setIsLoading(false);
        }}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={videoSrcWithFragment} type="video/mp4" />
        <source src={videoSrcWithFragment} type="video/quicktime" />
        <source src={videoUrl} type="video/mp4" />
        <source src={videoUrl} type="video/quicktime" />
        Tu navegador no soporta la reproducción de video.
      </video>

      <button
        type="button"
        onClick={togglePlayback}
        className="group absolute inset-0 z-20 flex items-center justify-center cursor-pointer"
        aria-label={`${isPlaying ? "Pausar" : "Reproducir"} ${title}`}
      >
        <span
          className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white bg-white/20 backdrop-blur-md shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-white/35 ${
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          {isLoading ? (
            <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          ) : isPlaying ? (
            <Pause className="h-5 w-5 fill-white text-white" />
          ) : (
            <Play className="h-5 w-5 fill-white text-white translate-x-[1px]" />
          )}
        </span>
      </button>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#090c1f] via-[#090c1f]/60 to-transparent p-6 pt-24">
        <h3 className="text-base font-light text-white">{name}</h3>
        <p className="mt-1 text-[13px] text-slate-300 font-light">{role}</p>
      </div>
    </div>
  );
}

function TextCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex min-h-[400px] aspect-[9/16] flex-col overflow-hidden rounded-[24px] border border-white/15 bg-[#0e1333]/90 p-6 text-white shadow-2xl backdrop-blur-xl md:p-7 transition-all duration-300 hover:border-turquesa/40">
      <div className="flex h-full flex-col justify-between">
        <div className="flex h-20 items-center justify-center">
          {item.logo && (
            <div className="relative h-20 w-48 opacity-90">
              <img
                src={item.logo}
                alt={item.name}
                className="h-full w-full object-contain filter brightness-110"
              />
            </div>
          )}
        </div>

        <div className="flex flex-1 items-center py-4">
          <p className="text-[13px] sm:text-[14px] leading-[1.5] text-slate-300 font-light italic text-center">
            “{item.content}”
          </p>
        </div>

        <div className="border-t border-white/10 pt-5 text-center mt-auto">
          <h3 className="truncate text-sm font-light leading-tight text-slate-200">{item.name}</h3>
          <p className="mt-1 truncate text-[11px] text-turquesa font-light">{item.role}</p>
        </div>
      </div>
    </article>
  );
}

function TestimonialsCirclesSVG() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const circles = svgRef.current.querySelectorAll("circle");

    circles.forEach((circle) => {
      const length = circle.getTotalLength();
      gsap.set(circle, { strokeDasharray: length, strokeDashoffset: length });
    });

    gsap.to(Array.from(circles), {
      strokeDashoffset: 0,
      duration: 2.4,
      ease: "power2.inOut",
      stagger: 0.4,
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Large circle - right edge */}
      <circle
        cx="105%"
        cy="50%"
        r="280"
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
      />
      {/* Medium circle */}
      <circle
        cx="88%"
        cy="55%"
        r="190"
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="1"
      />
      {/* Small circle */}
      <circle
        cx="74%"
        cy="62%"
        r="110"
        fill="none"
        stroke="rgba(255,255,255,0.09)"
        strokeWidth="1"
      />
    </svg>
  );
}
