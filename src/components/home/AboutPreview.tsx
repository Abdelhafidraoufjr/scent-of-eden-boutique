
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface AboutPreviewProps {
  currentLocale: "fr" | "en";
}

const localeContent = {
  fr: {
    title: "Notre passion pour les parfums",
    description:
      "Fondée par des passionnés de parfumerie, Scent of Eden est née d'une passion pour les fragrances d'exception et le désir de les rendre accessibles à tous les amateurs, qu'ils soient novices ou connaisseurs.",
    learnMore: "En savoir plus",
  },
  en: {
    title: "Our Passion for Fragrances",
    description:
      "Founded by fragrance enthusiasts, Scent of Eden was born from a passion for exceptional fragrances and the desire to make them accessible to all enthusiasts, whether novice or connoisseur.",
    learnMore: "Learn more",
  },
};

const AboutPreview = ({ currentLocale = "fr" }: AboutPreviewProps) => {
  const content = localeContent[currentLocale];

  return (
    <section className="py-24 overflow-hidden">
      <div className="parfum-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Parfumerie artisanale"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-2/3 aspect-square rounded-lg overflow-hidden border-4 border-background shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1608571423539-e951b9b3871e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Flacons de parfum"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-parfum-gold/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 right-1/3 w-32 h-32 bg-parfum-gold/20 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold mb-6 text-parfum-dark">
              {content.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {content.description}
            </p>
            <Link to="/about">
              <Button
                className="bg-parfum-dark text-white hover:bg-parfum-dark/90 px-8 py-6 text-lg"
              >
                {content.learnMore}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
