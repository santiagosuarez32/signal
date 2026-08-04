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
  return {
    metadataBase: new URL('https://signalmarketing.site'),
    title: dict.metadata.title,
    description: dict.metadata.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'es': '/es',
        'en': '/en',
      },
    },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: `https://signalmarketing.site/${lang}`,
      siteName: 'Signal',
      locale: lang,
      type: 'website',
    }
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

  return (
    <html
      lang={lang}
      className={`${poppins.variable} ${manrope.variable} h-full antialiased bg-[#090c1f] text-slate-100 selection:bg-turquesa/30 selection:text-turquesa`}
    >
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
