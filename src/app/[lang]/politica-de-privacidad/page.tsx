import { getDictionary } from "@/dictionaries";
import Link from "next/link";

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const pp = dict.privacy_policy || {};
  const sections = pp.sections || [];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#090c1f] text-white">
      <div className="max-w-[800px] mx-auto px-6 sm:px-8">
        
        {/* Back to home */}
        <Link 
          href={`/${lang}`}
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-turquesa transition-colors mb-8 group"
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="transition-transform group-hover:-translate-x-1"
          >
            <path d="M19 12H5"></path>
            <path d="m12 19-7-7 7-7"></path>
          </svg>
          <span>{pp.back_to_home || "Volver al inicio"}</span>
        </Link>

        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <h1 className="text-3xl md:text-5xl font-normal leading-[1.2] tracking-tight text-white mb-4">
            {pp.title || "Política de Privacidad"}
          </h1>
          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            {pp.subtitle || "Información sobre cómo tratamos y protegemos tus datos personales en nuestros formularios y plataformas."}
          </p>
        </div>

        {/* Intro */}
        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8">
          {pp.intro}
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section: any, idx: number) => (
            <div key={idx} className="space-y-2">
              <h2 className="text-lg sm:text-xl font-normal text-white">
                {section.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
