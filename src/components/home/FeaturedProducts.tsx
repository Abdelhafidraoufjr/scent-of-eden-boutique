
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "../products/ProductCard";
import { Product } from "@/lib/types";

interface FeaturedProductsProps {
  currentLocale: "fr" | "en";
}

const localeContent = {
  fr: {
    title: "Nos parfums d'exception",
    description:
      "Découvrez notre sélection de parfums de créateurs et de décants rares.",
    viewAll: "Voir tous les parfums",
  },
  en: {
    title: "Our Exceptional Fragrances",
    description:
      "Discover our selection of designer perfumes and rare decants.",
    viewAll: "View all fragrances",
  },
};

// Données de démonstration pour les produits mis en avant
const featuredProductsData: Product[] = [
  {
    id: "1",
    name: "Rose des Vents",
    brand: "Maison Elegante",
    olfactoryFamily: "Floral",
    description: "Une fragrance élégante avec des notes de rose, de jasmin et de bois de santal.",
    price: {
      fullSize: 190,
      decant5ml: 25,
      decant10ml: 45,
    },
    volume: {
      fullSize: "100ml",
      hasDecant5ml: true,
      hasDecant10ml: true,
    },
    images: ["https://images.unsplash.com/photo-1592945403539-9070bca1b92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"],
    inStock: true,
    isFeatured: true,
  },
  {
    id: "2",
    name: "Bois d'Épices",
    brand: "Parfums Luxueux",
    olfactoryFamily: "Boisé",
    description: "Un parfum chaleureux aux notes de cannelle, de cèdre et de vanille.",
    price: {
      fullSize: 220,
      decant5ml: 30,
      decant10ml: 55,
    },
    volume: {
      fullSize: "75ml",
      hasDecant5ml: true,
      hasDecant10ml: true,
    },
    images: ["https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"],
    inStock: true,
    isFeatured: true,
  },
  {
    id: "3",
    name: "Ambre Soyeux",
    brand: "Eden Parfums",
    olfactoryFamily: "Oriental",
    description: "Une création envoûtante mêlant ambre, musc et patchouli.",
    price: {
      fullSize: 175,
      decant5ml: 25,
      decant10ml: 45,
    },
    volume: {
      fullSize: "50ml",
      hasDecant5ml: true,
      hasDecant10ml: true,
    },
    images: ["https://images.unsplash.com/photo-1590736969955-71cc94cffc9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"],
    inStock: true,
    isFeatured: true,
  },
];

const FeaturedProducts = ({ currentLocale = "fr" }: FeaturedProductsProps) => {
  const content = localeContent[currentLocale];

  return (
    <section className="py-20 bg-gradient-to-b from-parfum-cream/50 to-transparent">
      <div className="parfum-container">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold mb-4 text-parfum-dark">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600">{content.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProductsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              currentLocale={currentLocale}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button
              variant="outline"
              className="border-parfum-gold text-parfum-dark hover:bg-parfum-gold/10 hover:text-parfum-dark px-8 py-6 text-lg"
            >
              {content.viewAll}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
