
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AboutPreview from "@/components/home/AboutPreview";
import { Language } from "@/lib/types";

const Index = () => {
  const [currentLocale, setCurrentLocale] = useState<Language>("fr");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero currentLocale={currentLocale} />
        <FeaturedProducts currentLocale={currentLocale} />
        <AboutPreview currentLocale={currentLocale} />
      </main>
      <Footer currentLocale={currentLocale} />
    </div>
  );
};

export default Index;
