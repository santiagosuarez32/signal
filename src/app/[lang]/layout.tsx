import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import "../globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { TranslationProvider } from "@/components/TranslationProvider";
import { getDictionary } from "@/dictionaries";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const title = dict.metadata?.title || 'Signal Marketing | Agencia de Marketing Digital y Publicidad';
  const description = dict.metadata?.description || 'Signal Marketing (signalmarketing.site) - Agencia experta en marketing digital, publicidad en Google Ads y Meta Ads, y estrategias de crecimiento.';
  const keywords = dict.metadata?.keywords || 'Signal Marketing, Signal Marketing Digital, signalmarketing.site, agencia de marketing digital, google ads, meta ads';

  return {
    metadataBase: new URL('https://signalmarketing.site'),
    title,
    description,
    keywords,
    applicationName: 'Signal Marketing',
    referrer: 'origin-when-cross-origin',
    authors: [{ name: 'Signal Marketing', url: 'https://signalmarketing.site' }],
    creator: 'Signal Marketing',
    publisher: 'Signal Marketing',
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'es': '/es',
        'en': '/en',
        'x-default': '/es',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://signalmarketing.site/${lang}`,
      siteName: 'Signal Marketing',
      locale: lang === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://signalmarketing.site/logo/logo-blanco.png',
          width: 1200,
          height: 630,
          alt: 'Signal Marketing - Agencia de Marketing Digital',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://signalmarketing.site/logo/logo-blanco.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://signalmarketing.site/#organization",
        "name": "Signal Marketing",
        "alternateName": ["Signal", "Signal Marketing Digital", "Signal Agencia de Marketing"],
        "url": "https://signalmarketing.site",
        "logo": "https://signalmarketing.site/logo/logo-blanco.png",
        "image": "https://signalmarketing.site/logo/logo-blanco.png",
        "description": "Signal Marketing es una agencia especializada en marketing digital, publicidad online (Google Ads, Meta Ads), SEO y estrategias de rendimiento para marcas líderes.",
        "priceRange": "$$$",
        "knowsAbout": [
          "Digital Marketing",
          "Google Ads",
          "Meta Ads",
          "SEO",
          "Performance Marketing",
          "Social Media Management",
          "B2B Marketing"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "url": "https://signalmarketing.site/#contacto"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://signalmarketing.site/#website",
        "url": "https://signalmarketing.site",
        "name": "Signal Marketing",
        "alternateName": "Signal Marketing Digital",
        "publisher": {
          "@id": "https://signalmarketing.site/#organization"
        },
        "inLanguage": ["es-ES", "en-US"]
      }
    ]
  };

  return (
    <html
      lang={lang}
      className={`${poppins.variable} ${manrope.variable} h-full antialiased bg-[#090c1f] text-slate-100 selection:bg-turquesa/30 selection:text-turquesa`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#090c1f]">
        <TranslationProvider dict={dict} lang={lang}>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
            <WhatsAppButton />
          </SmoothScroll>
        </TranslationProvider>
      </body>
    </html>
  );
}

