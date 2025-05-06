
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  currentLocale: "fr" | "en";
}

const localeContent = {
  fr: {
    title: "L'art du parfum",
    subtitle: "Des fragrances exquises pour éveiller vos sens",
    description:
      "Découvrez notre collection de parfums de luxe et décants soigneusement sélectionnés pour vous offrir une expérience olfactive unique.",
    cta: "Explorer nos parfums",
  },
  en: {
    title: "The Art of Fragrance",
    subtitle: "Exquisite scents to awaken your senses",
    description:
      "Discover our collection of luxury perfumes and carefully selected decants to offer you a unique olfactory experience.",
    cta: "Explore our fragrances",
  },
};

const Hero = ({ currentLocale = "fr" }: HeroProps) => {
  const content = localeContent[currentLocale];

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1615383930924-a7e90fd550b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-parfum-dark/60"></div>
      </div>

      {/* Content */}
      <div className="parfum-container relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="font-playfair text-5xl md:text-7xl font-semibold mb-4 animate-fade-up">
            {content.title}
          </h1>
          <h2 className="font-montserrat text-xl md:text-2xl text-parfum-gold mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {content.subtitle}
          </h2>
          <p className="text-lg opacity-90 mb-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {content.description}
          </p>
          <Link to="/products">
            <Button
              className="bg-parfum-gold text-parfum-dark hover:bg-parfum-gold/90 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 animate-fade-up" 
              style={{ animationDelay: "0.6s" }}
            >
              {content.cta}
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
