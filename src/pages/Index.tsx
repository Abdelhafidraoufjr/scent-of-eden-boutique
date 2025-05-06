
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AboutPreview from "@/components/home/AboutPreview";
import { Language } from "@/lib/types";
import LocaleSelector from "@/components/ui/LocaleSelector";

const Index = () => {
  const [currentLocale, setCurrentLocale] = useState<Language>("fr");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-parfum-cream to-white">
      <Navbar />
      <main className="flex-grow">
        <Hero currentLocale={currentLocale} />
        <FeaturedProducts currentLocale={currentLocale} />
        <div className="parfum-container py-16 relative overflow-hidden">
          <div className="absolute w-72 h-72 bg-parfum-gold/20 rounded-full blur-3xl -right-20 -top-20 z-0"></div>
          <div className="absolute w-96 h-96 bg-parfum-gold/10 rounded-full blur-3xl -left-20 bottom-20 z-0"></div>
          <AboutPreview currentLocale={currentLocale} />
        </div>
      </main>
      <div className="fixed bottom-6 right-6 z-40">
        <LocaleSelector 
          currentLocale={currentLocale} 
          onLocaleChange={setCurrentLocale}
        />
      </div>
      <Footer currentLocale={currentLocale} />
    </div>
  );
};

export default Index;
