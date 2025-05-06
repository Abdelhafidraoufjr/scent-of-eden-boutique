
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Language } from "@/lib/types";

const localeContent = {
  fr: {
    title: "À propos de Scent of Eden",
    subtitle: "Notre passion pour la parfumerie",
    story: {
      title: "Notre histoire",
      content: [
        "Fondée en 2020, Scent of Eden est née d'une passion profonde pour l'art de la parfumerie. Tout a commencé lorsque notre fondatrice, après des années de collection de parfums rares et d'exploration des maisons de parfum à travers le monde, a décidé de partager sa passion avec d'autres amateurs.",
        "Ce qui était au départ une simple boutique en ligne proposant des décants de parfums de niche est rapidement devenu une référence pour les passionnés en quête d'expériences olfactives uniques et inaccessibles.",
        "Aujourd'hui, Scent of Eden continue de grandir, guidée par la même philosophie : rendre accessible l'art de la haute parfumerie et permettre à chacun de découvrir des créations exceptionnelles sans avoir à investir dans un flacon complet."
      ]
    },
    mission: {
      title: "Notre mission",
      content: [
        "Chez Scent of Eden, nous croyons que chaque parfum raconte une histoire unique et que tout le monde devrait pouvoir explorer le vaste monde de la parfumerie sans contrainte.",
        "Notre mission est de démocratiser l'accès aux parfums de créateurs et de niche grâce à notre système de décants soigneusement préparés. Nous sélectionnons rigoureusement chaque fragrance pour vous offrir une collection diversifiée qui représente le meilleur de l'art parfumeur contemporain.",
        "Nous nous engageons également à fournir un service personnalisé, en partageant notre expertise et en guidant nos clients dans leur voyage olfactif."
      ]
    },
    values: {
      title: "Nos valeurs",
      authenticity: {
        title: "Authenticité",
        content: "Nous garantissons l'authenticité de tous nos parfums, achetés directement auprès des marques ou de distributeurs officiels."
      },
      quality: {
        title: "Qualité",
        content: "Nos décants sont préparés avec le plus grand soin dans un environnement contrôlé pour préserver l'intégrité de chaque fragrance."
      },
      passion: {
        title: "Passion",
        content: "Notre équipe est composée de véritables passionnés, toujours à la recherche des créations les plus innovantes et captivantes."
      },
      sustainability: {
        title: "Durabilité",
        content: "Nous nous efforçons de réduire notre impact environnemental en utilisant des emballages recyclables et en minimisant les déchets."
      }
    }
  },
  en: {
    title: "About Scent of Eden",
    subtitle: "Our passion for perfumery",
    story: {
      title: "Our story",
      content: [
        "Founded in 2020, Scent of Eden was born from a deep passion for the art of perfumery. It all began when our founder, after years of collecting rare fragrances and exploring perfume houses around the world, decided to share her passion with other enthusiasts.",
        "What started as a simple online boutique offering decants of niche perfumes quickly became a reference for passionate individuals seeking unique and inaccessible olfactory experiences.",
        "Today, Scent of Eden continues to grow, guided by the same philosophy: making the art of high perfumery accessible and allowing everyone to discover exceptional creations without having to invest in a full bottle."
      ]
    },
    mission: {
      title: "Our mission",
      content: [
        "At Scent of Eden, we believe that every fragrance tells a unique story and that everyone should be able to explore the vast world of perfumery without constraint.",
        "Our mission is to democratize access to designer and niche perfumes through our carefully prepared decant system. We rigorously select each fragrance to offer you a diverse collection that represents the best of contemporary perfumery art.",
        "We are also committed to providing personalized service, sharing our expertise and guiding our customers on their olfactory journey."
      ]
    },
    values: {
      title: "Our values",
      authenticity: {
        title: "Authenticity",
        content: "We guarantee the authenticity of all our perfumes, purchased directly from brands or official distributors."
      },
      quality: {
        title: "Quality",
        content: "Our decants are prepared with the utmost care in a controlled environment to preserve the integrity of each fragrance."
      },
      passion: {
        title: "Passion",
        content: "Our team consists of true enthusiasts, always looking for the most innovative and captivating creations."
      },
      sustainability: {
        title: "Sustainability",
        content: "We strive to reduce our environmental impact by using recyclable packaging and minimizing waste."
      }
    }
  }
};

const About = () => {
  const [currentLocale, setCurrentLocale] = useState<Language>("fr");
  const content = localeContent[currentLocale];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero section */}
        <div className="relative bg-parfum-dark text-white py-20 mb-16">
          <div className="parfum-container relative z-10">
            <div className="max-w-2xl">
              <h1 className="font-playfair text-4xl md:text-5xl font-semibold mb-4">
                {content.title}
              </h1>
              <p className="text-xl text-parfum-gold">
                {content.subtitle}
              </p>
            </div>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-parfum-dark via-parfum-dark/90 to-transparent"></div>
          {/* Background image */}
          <div
            className="absolute inset-0 opacity-30 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
            }}
          ></div>
        </div>

        {/* Notre histoire */}
        <div className="parfum-container mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl font-semibold mb-6 text-parfum-dark">
                {content.story.title}
              </h2>
              <div className="space-y-4">
                {content.story.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1616093052326-e184b8fac61c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                  alt="Collection de parfums"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-parfum-gold/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Notre mission */}
        <div className="bg-gray-50 py-20 mb-20">
          <div className="parfum-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="aspect-[3/4] rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1595425544372-48d12c8d060c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                    alt="Préparation de décants"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-parfum-gold/30 rounded-full blur-xl"></div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-playfair text-3xl font-semibold mb-6 text-parfum-dark">
                  {content.mission.title}
                </h2>
                <div className="space-y-4">
                  {content.mission.content.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nos valeurs */}
        <div className="parfum-container mb-20">
          <h2 className="font-playfair text-3xl font-semibold mb-12 text-parfum-dark text-center">
            {content.values.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Authenticité */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-6 rounded-full bg-parfum-gold/20 flex items-center justify-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-parfum-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4 text-center text-parfum-dark">
                {content.values.authenticity.title}
              </h3>
              <p className="text-gray-600 text-center">
                {content.values.authenticity.content}
              </p>
            </div>

            {/* Qualité */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-6 rounded-full bg-parfum-gold/20 flex items-center justify-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-parfum-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4 text-center text-parfum-dark">
                {content.values.quality.title}
              </h3>
              <p className="text-gray-600 text-center">
                {content.values.quality.content}
              </p>
            </div>

            {/* Passion */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-6 rounded-full bg-parfum-gold/20 flex items-center justify-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-parfum-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4 text-center text-parfum-dark">
                {content.values.passion.title}
              </h3>
              <p className="text-gray-600 text-center">
                {content.values.passion.content}
              </p>
            </div>

            {/* Durabilité */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-6 rounded-full bg-parfum-gold/20 flex items-center justify-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-parfum-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                  />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4 text-center text-parfum-dark">
                {content.values.sustainability.title}
              </h3>
              <p className="text-gray-600 text-center">
                {content.values.sustainability.content}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer currentLocale={currentLocale} />
    </div>
  );
};

export default About;
