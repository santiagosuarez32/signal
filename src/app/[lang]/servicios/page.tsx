import React from "react";
import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import ServicesCards from "@/components/ServicesCards";
import GoogleAdsPlans from "@/components/GoogleAdsPlans";
import ComplementaryServices from "@/components/ComplementaryServices";
import PlansTable from "@/components/PlansTable";
import FaqSection from "@/components/FaqSection";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const title = dict.services_metadata?.title || 'Servicios y Planes | Signal Marketing';
  const description = dict.services_metadata?.description || 'Descubre todos los servicios de Signal Marketing: Planes de Google Ads, sistemas de adquisición de clientes, redes sociales y marketing B2B.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/servicios`,
      languages: {
        'es': '/es/servicios',
        'en': '/en/servicios',
        'x-default': '/es/servicios',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://signalmarketing.site/${lang}/servicios`,
      siteName: 'Signal Marketing',
      locale: lang === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
  };
}

export default function ServicesPage() {
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen bg-[#090c1f] text-white pt-24 md:pt-28">
      <div id="planes" className="w-full">
        <ServicesCards />
        <GoogleAdsPlans />
        <ComplementaryServices />
        <PlansTable />
      </div>

      {/* FAQ Section */}
      <FaqSection />
    </main>
  );
}


