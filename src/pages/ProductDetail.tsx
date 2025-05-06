
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ChevronRight, Minus, Plus } from "lucide-react";
import { Product, VolumeType, Language } from "@/lib/types";

// Données de démonstration pour les produits
const productsData: Product[] = [
  {
    id: "1",
    name: "Rose des Vents",
    brand: "Maison Elegante",
    olfactoryFamily: "Floral",
    description: "Une fragrance élégante avec des notes de rose, de jasmin et de bois de santal. Créée pour évoquer les jardins fleuris de la côte méditerranéenne, Rose des Vents combine la délicatesse des pétales de rose fraîchement cueillis avec la profondeur subtile du bois de santal. Des touches de jasmin apportent une luminosité unique, tandis que des notes d'agrumes en tête offrent une fraîcheur inattendue. Parfait pour les journées ensoleillées comme pour les soirées raffinées.",
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
    images: [
      "https://images.unsplash.com/photo-1592945403539-9070bca1b92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1601295452898-78a8dd904ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    ],
    inStock: true,
  },
];

const localeContent = {
  fr: {
    home: "Accueil",
    products: "Parfums",
    addToCart: "Ajouter au panier",
    brand: "Marque",
    olfactoryFamily: "Famille olfactive",
    volume: "Volume",
    quantity: "Quantité",
    productDetails: "Description du produit",
    outOfStock: "Rupture de stock",
    fullSize: "Flacon complet",
    decant5ml: "Décant 5ml",
    decant10ml: "Décant 10ml",
  },
  en: {
    home: "Home",
    products: "Fragrances",
    addToCart: "Add to cart",
    brand: "Brand",
    olfactoryFamily: "Olfactory family",
    volume: "Volume",
    quantity: "Quantity",
    productDetails: "Product details",
    outOfStock: "Out of stock",
    fullSize: "Full size",
    decant5ml: "5ml decant",
    decant10ml: "10ml decant",
  },
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [currentLocale, setCurrentLocale] = useState<Language>("fr");
  const [selectedVolume, setSelectedVolume] = useState<VolumeType>("fullSize");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const content = localeContent[currentLocale];

  // Rechercher le produit par ID
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="parfum-container">
            <p className="text-center text-lg">Produit non trouvé</p>
          </div>
        </main>
        <Footer currentLocale={currentLocale} />
      </div>
    );
  }

  // Déterminer le prix en fonction du volume sélectionné
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

  // Déterminer le texte du volume à afficher
  const getVolumeText = () => {
    switch (selectedVolume) {
      case "decant5ml":
        return "5ml";
      case "decant10ml":
        return "10ml";
      default:
        return product.volume.fullSize;
    }
  };

  // Gestion de la quantité
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="parfum-container">
          {/* Fil d'Ariane */}
          <div className="flex items-center text-sm mb-10 text-gray-500">
            <Link to="/" className="hover:text-parfum-dark">
              {content.home}
            </Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/products" className="hover:text-parfum-dark">
              {content.products}
            </Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-parfum-dark font-medium">{product.name}</span>
          </div>

          {/* Contenu du produit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Galerie d'images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Miniatures */}
              {product.images.length > 1 && (
                <div className="flex gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className={`w-20 h-20 rounded-md overflow-hidden ${
                        selectedImage === index
                          ? "ring-2 ring-parfum-gold"
                          : "ring-1 ring-gray-200"
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - vue ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Détails du produit */}
            <div>
              <h1 className="font-playfair text-3xl md:text-4xl font-semibold text-parfum-dark mb-2">
                {product.name}
              </h1>
              <p className="text-xl font-semibold text-parfum-dark mb-6">
                {getPrice()} €
              </p>

              {/* Infos produit */}
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{content.brand}</p>
                  <p className="font-medium">{product.brand}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    {content.olfactoryFamily}
                  </p>
                  <p className="font-medium">{product.olfactoryFamily}</p>
                </div>

                {/* Sélection de volume */}
                <div>
                  <p className="text-sm text-gray-500 mb-2">
                    {content.volume}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      className={`px-4 py-2 rounded-md transition-colors ${
                        selectedVolume === "fullSize"
                          ? "bg-parfum-gold text-parfum-dark"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                      onClick={() => setSelectedVolume("fullSize")}
                    >
                      {content.fullSize} ({product.volume.fullSize})
                    </button>
                    
                    {product.volume.hasDecant5ml && (
                      <button
                        className={`px-4 py-2 rounded-md transition-colors ${
                          selectedVolume === "decant5ml"
                            ? "bg-parfum-gold text-parfum-dark"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        onClick={() => setSelectedVolume("decant5ml")}
                      >
                        {content.decant5ml}
                      </button>
                    )}
                    
                    {product.volume.hasDecant10ml && (
                      <button
                        className={`px-4 py-2 rounded-md transition-colors ${
                          selectedVolume === "decant10ml"
                            ? "bg-parfum-gold text-parfum-dark"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        onClick={() => setSelectedVolume("decant10ml")}
                      >
                        {content.decant10ml}
                      </button>
                    )}
                  </div>
                </div>

                {/* Sélection de quantité */}
                <div>
                  <p className="text-sm text-gray-500 mb-2">
                    {content.quantity}
                  </p>
                  <div className="flex items-center border border-gray-300 rounded-md w-32">
                    <button
                      className="flex-1 py-2 text-gray-500 hover:text-parfum-dark"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                    >
                      <Minus size={16} className="mx-auto" />
                    </button>
                    <div className="flex-1 text-center font-medium">
                      {quantity}
                    </div>
                    <button
                      className="flex-1 py-2 text-gray-500 hover:text-parfum-dark"
                      onClick={incrementQuantity}
                    >
                      <Plus size={16} className="mx-auto" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bouton d'achat */}
              <Button
                className="w-full bg-parfum-dark text-white hover:bg-parfum-dark/90 py-6"
                disabled={!product.inStock}
              >
                <ShoppingCart size={20} className="mr-2" />
                {product.inStock ? content.addToCart : content.outOfStock}
              </Button>
            </div>
          </div>

          {/* Description complète */}
          <div className="mt-16">
            <h2 className="font-playfair text-2xl font-semibold mb-6 text-parfum-dark">
              {content.productDetails}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer currentLocale={currentLocale} />
    </div>
  );
};

export default ProductDetail;
