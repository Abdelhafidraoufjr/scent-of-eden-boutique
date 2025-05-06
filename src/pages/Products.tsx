
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter, Search, X } from "lucide-react";
import { Product, OlfactoryFamily, VolumeType, Language } from "@/lib/types";

// Données de démonstration pour les produits
const productsData: Product[] = [
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
  },
  {
    id: "4",
    name: "Océan Azur",
    brand: "Parfums Marins",
    olfactoryFamily: "Frais",
    description: "Une fragrance fraîche évoquant la brise marine et les agrumes.",
    price: {
      fullSize: 150,
      decant5ml: 20,
      decant10ml: 35,
    },
    volume: {
      fullSize: "100ml",
      hasDecant5ml: true,
      hasDecant10ml: true,
    },
    images: ["https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"],
    inStock: false,
  },
  {
    id: "5",
    name: "Velours Noir",
    brand: "Maison Elegante",
    olfactoryFamily: "Oriental",
    description: "Un parfum intense et séduisant à base de vanille noire et d'épices exotiques.",
    price: {
      fullSize: 230,
      decant5ml: 30,
      decant10ml: 55,
    },
    volume: {
      fullSize: "90ml",
      hasDecant5ml: true,
      hasDecant10ml: true,
    },
    images: ["https://images.unsplash.com/photo-1588405748880-c31be35d5c30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"],
    inStock: true,
  },
  {
    id: "6",
    name: "Lavande Provençale",
    brand: "Eden Parfums",
    olfactoryFamily: "Aromatique",
    description: "Une fragrance apaisante inspirée des champs de lavande de Provence.",
    price: {
      fullSize: 165,
      decant5ml: 22,
      decant10ml: 40,
    },
    volume: {
      fullSize: "75ml",
      hasDecant5ml: true,
      hasDecant10ml: true,
    },
    images: ["https://images.unsplash.com/photo-1518892096458-a169843245c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"],
    inStock: true,
  },
];

const brands = Array.from(new Set(productsData.map(p => p.brand)));
const olfactoryFamilies = Array.from(new Set(productsData.map(p => p.olfactoryFamily)));

const localeContent = {
  fr: {
    title: "Nos Parfums",
    search: "Rechercher...",
    filters: "Filtres",
    brand: "Marque",
    olfactoryFamily: "Famille olfactive",
    volume: "Volume",
    fullSize: "Flacon complet",
    decant5ml: "Décant 5ml",
    decant10ml: "Décant 10ml",
    availability: "Disponibilité",
    inStock: "En stock",
    applyFilters: "Appliquer",
    clearFilters: "Effacer les filtres",
    noProducts: "Aucun produit ne correspond à votre recherche",
    showingProducts: "Affichage de {count} parfums",
  },
  en: {
    title: "Our Fragrances",
    search: "Search...",
    filters: "Filters",
    brand: "Brand",
    olfactoryFamily: "Olfactory family",
    volume: "Volume",
    fullSize: "Full size",
    decant5ml: "5ml decant",
    decant10ml: "10ml decant",
    availability: "Availability",
    inStock: "In stock",
    applyFilters: "Apply",
    clearFilters: "Clear filters",
    noProducts: "No products match your search",
    showingProducts: "Showing {count} fragrances",
  },
};

const Products = () => {
  const [currentLocale, setCurrentLocale] = useState<Language>("fr");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedFamilies, setSelectedFamilies] = useState<OlfactoryFamily[]>([]);
  const [selectedVolumes, setSelectedVolumes] = useState<VolumeType[]>([]);
  const [onlyInStock, setOnlyInStock] = useState(false);

  const content = localeContent[currentLocale];

  // Filtrer les produits en fonction des critères sélectionnés
  const filteredProducts = productsData.filter((product) => {
    // Recherche textuelle
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.brand.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.olfactoryFamily.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Filtrage par marque
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }

    // Filtrage par famille olfactive
    if (selectedFamilies.length > 0 && !selectedFamilies.includes(product.olfactoryFamily as OlfactoryFamily)) {
      return false;
    }

    // Filtrage par volume
    if (selectedVolumes.length > 0) {
      if (
        (selectedVolumes.includes("fullSize") && !product.volume.fullSize) ||
        (selectedVolumes.includes("decant5ml") && !product.volume.hasDecant5ml) ||
        (selectedVolumes.includes("decant10ml") && !product.volume.hasDecant10ml)
      ) {
        return false;
      }
    }

    // Filtrage par disponibilité
    if (onlyInStock && !product.inStock) {
      return false;
    }

    return true;
  });

  // Gestion des sélections de filtres
  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const toggleFamily = (family: OlfactoryFamily) => {
    if (selectedFamilies.includes(family)) {
      setSelectedFamilies(selectedFamilies.filter((f) => f !== family));
    } else {
      setSelectedFamilies([...selectedFamilies, family]);
    }
  };

  const toggleVolume = (volume: VolumeType) => {
    if (selectedVolumes.includes(volume)) {
      setSelectedVolumes(selectedVolumes.filter((v) => v !== volume));
    } else {
      setSelectedVolumes([...selectedVolumes, volume]);
    }
  };

  // Réinitialiser tous les filtres
  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedFamilies([]);
    setSelectedVolumes([]);
    setOnlyInStock(false);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="parfum-container">
          {/* En-tête */}
          <div className="mb-10">
            <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-parfum-dark mb-4">
              {content.title}
            </h1>
          </div>

          {/* Barre de recherche et filtres */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="relative w-full md:max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={content.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-parfum-gold"
              />
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <Button
                variant="outline"
                className="flex items-center gap-2 border-gray-300 hover:bg-gray-100"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter size={18} />
                {content.filters}
              </Button>
              
              {(selectedBrands.length > 0 ||
                selectedFamilies.length > 0 ||
                selectedVolumes.length > 0 ||
                onlyInStock) && (
                <Button
                  variant="ghost"
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  onClick={clearAllFilters}
                >
                  <X size={18} className="mr-1" />
                  {content.clearFilters}
                </Button>
              )}
            </div>
          </div>

          {/* Panneau de filtres */}
          {isFilterOpen && (
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Marques */}
              <div>
                <h3 className="font-medium text-lg mb-3">{content.brand}</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`brand-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="mr-2 h-4 w-4 rounded border-gray-300 text-parfum-gold focus:ring-parfum-gold"
                      />
                      <label htmlFor={`brand-${brand}`} className="text-sm">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Familles olfactives */}
              <div>
                <h3 className="font-medium text-lg mb-3">{content.olfactoryFamily}</h3>
                <div className="space-y-2">
                  {olfactoryFamilies.map((family) => (
                    <div key={family} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`family-${family}`}
                        checked={selectedFamilies.includes(family as OlfactoryFamily)}
                        onChange={() => toggleFamily(family as OlfactoryFamily)}
                        className="mr-2 h-4 w-4 rounded border-gray-300 text-parfum-gold focus:ring-parfum-gold"
                      />
                      <label htmlFor={`family-${family}`} className="text-sm">
                        {family}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Volumes */}
              <div>
                <h3 className="font-medium text-lg mb-3">{content.volume}</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="volume-fullSize"
                      checked={selectedVolumes.includes("fullSize")}
                      onChange={() => toggleVolume("fullSize")}
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-parfum-gold focus:ring-parfum-gold"
                    />
                    <label htmlFor="volume-fullSize" className="text-sm">
                      {content.fullSize}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="volume-decant5ml"
                      checked={selectedVolumes.includes("decant5ml")}
                      onChange={() => toggleVolume("decant5ml")}
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-parfum-gold focus:ring-parfum-gold"
                    />
                    <label htmlFor="volume-decant5ml" className="text-sm">
                      {content.decant5ml}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="volume-decant10ml"
                      checked={selectedVolumes.includes("decant10ml")}
                      onChange={() => toggleVolume("decant10ml")}
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-parfum-gold focus:ring-parfum-gold"
                    />
                    <label htmlFor="volume-decant10ml" className="text-sm">
                      {content.decant10ml}
                    </label>
                  </div>
                </div>
              </div>

              {/* Disponibilité */}
              <div>
                <h3 className="font-medium text-lg mb-3">{content.availability}</h3>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="inStock"
                    checked={onlyInStock}
                    onChange={() => setOnlyInStock(!onlyInStock)}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-parfum-gold focus:ring-parfum-gold"
                  />
                  <label htmlFor="inStock" className="text-sm">
                    {content.inStock}
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Compteur de résultats */}
          <p className="text-sm text-gray-500 mb-6">
            {content.showingProducts.replace("{count}", filteredProducts.length.toString())}
          </p>

          {/* Liste des produits */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  currentLocale={currentLocale}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500">{content.noProducts}</p>
            </div>
          )}
        </div>
      </main>
      <Footer currentLocale={currentLocale} />
    </div>
  );
};

export default Products;
