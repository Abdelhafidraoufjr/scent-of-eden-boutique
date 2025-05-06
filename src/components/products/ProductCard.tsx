
import { useState } from "react";
import { Link } from "react-router-dom";
import { Product, VolumeType } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  currentLocale: "fr" | "en";
}

const localeContent = {
  fr: {
    from: "À partir de",
    outOfStock: "Rupture de stock",
    fullSize: "Flacon",
    decant5ml: "Décant 5ml",
    decant10ml: "Décant 10ml",
    addToCart: "Ajouter au panier",
    seeDetails: "Voir détails",
  },
  en: {
    from: "From",
    outOfStock: "Out of stock",
    fullSize: "Full size",
    decant5ml: "5ml Decant",
    decant10ml: "10ml Decant",
    addToCart: "Add to cart",
    seeDetails: "See details",
  },
};

const ProductCard = ({ product, currentLocale = "fr" }: ProductCardProps) => {
  const [selectedVolume, setSelectedVolume] = useState<VolumeType>("fullSize");
  const [isHovered, setIsHovered] = useState(false);
  const content = localeContent[currentLocale];

  // Déterminer le prix à afficher en fonction du volume sélectionné
  const getPrice = () => {
    switch (selectedVolume) {
      case "decant5ml":
        return product.price.decant5ml;
      case "decant10ml":
        return product.price.decant10ml;
      default:
        return product.price.fullSize;
    }
  };

  // Prix minimum pour l'affichage "À partir de"
  const getMinPrice = () => {
    const prices = [
      product.price.fullSize,
      product.price.decant5ml,
      product.price.decant10ml,
    ].filter(Boolean) as number[];
    return Math.min(...prices);
  };

  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          {/* Image principale */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transform transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          
          {/* Badge de marque */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-parfum-dark">
            {product.brand}
          </div>
          
          {/* Badge "Rupture de stock" si nécessaire */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-red-500 text-white px-4 py-2 rounded-full font-medium">
                {content.outOfStock}
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-5">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-playfair text-xl font-semibold text-parfum-dark mb-1 group-hover:text-parfum-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mb-4">{product.olfactoryFamily}</p>
        
        {/* Prix */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-sm text-gray-500">{content.from}</div>
            <div className="text-xl font-semibold text-parfum-dark">
              {getMinPrice()} €
            </div>
          </div>
          <Link to={`/products/${product.id}`}>
            <Button variant="outline" size="sm" className="text-sm">
              {content.seeDetails}
            </Button>
          </Link>
        </div>
        
        {/* Sélecteur de volume */}
        <div className="flex gap-2 mb-4">
          <button
            className={`flex-1 py-2 px-3 text-xs rounded-md transition-colors ${
              selectedVolume === "fullSize"
                ? "bg-parfum-gold text-parfum-dark"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedVolume("fullSize")}
          >
            {content.fullSize}
          </button>
          
          {product.volume.hasDecant5ml && (
            <button
              className={`flex-1 py-2 px-3 text-xs rounded-md transition-colors ${
                selectedVolume === "decant5ml"
                  ? "bg-parfum-gold text-parfum-dark"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedVolume("decant5ml")}
            >
              {content.decant5ml}
            </button>
          )}
          
          {product.volume.hasDecant10ml && (
            <button
              className={`flex-1 py-2 px-3 text-xs rounded-md transition-colors ${
                selectedVolume === "decant10ml"
                  ? "bg-parfum-gold text-parfum-dark"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedVolume("decant10ml")}
            >
              {content.decant10ml}
            </button>
          )}
        </div>
        
        {/* Bouton d'ajout au panier */}
        <Button
          className="w-full bg-parfum-dark text-white hover:bg-parfum-dark/90 flex items-center justify-center gap-2"
          disabled={!product.inStock}
        >
          <ShoppingCart size={16} />
          {content.addToCart}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
