
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocaleSelector from "../ui/LocaleSelector";

const localeContent = {
  fr: {
    home: "Accueil",
    products: "Parfums",
    about: "À propos",
    contact: "Contact",
    search: "Rechercher...",
  },
  en: {
    home: "Home",
    products: "Fragrances",
    about: "About",
    contact: "Contact",
    search: "Search...",
  },
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<"fr" | "en">("fr");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLocaleChange = (locale: "fr" | "en") => {
    setCurrentLocale(locale);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="parfum-container">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <span className="font-playfair text-2xl font-semibold text-parfum-dark">
              Scent of Eden
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="font-montserrat text-parfum-dark hover:text-parfum-accent transition-colors"
            >
              {localeContent[currentLocale].home}
            </Link>
            <Link
              to="/products"
              className="font-montserrat text-parfum-dark hover:text-parfum-accent transition-colors"
            >
              {localeContent[currentLocale].products}
            </Link>
            <Link
              to="/about"
              className="font-montserrat text-parfum-dark hover:text-parfum-accent transition-colors"
            >
              {localeContent[currentLocale].about}
            </Link>
            <Link
              to="/contact"
              className="font-montserrat text-parfum-dark hover:text-parfum-accent transition-colors"
            >
              {localeContent[currentLocale].contact}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <LocaleSelector 
              currentLocale={currentLocale}
              onLocaleChange={handleLocaleChange}
            />
            <Button variant="ghost" size="icon" className="text-parfum-dark">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-parfum-dark">
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 bg-parfum-accent text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-parfum-dark"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </Button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="font-playfair text-2xl font-semibold text-parfum-dark">
              Scent of Eden
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} className="text-parfum-dark" />
            </Button>
          </div>

          <nav className="flex flex-col space-y-6">
            <Link
              to="/"
              className="font-montserrat text-xl text-parfum-dark hover:text-parfum-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {localeContent[currentLocale].home}
            </Link>
            <Link
              to="/products"
              className="font-montserrat text-xl text-parfum-dark hover:text-parfum-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {localeContent[currentLocale].products}
            </Link>
            <Link
              to="/about"
              className="font-montserrat text-xl text-parfum-dark hover:text-parfum-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {localeContent[currentLocale].about}
            </Link>
            <Link
              to="/contact"
              className="font-montserrat text-xl text-parfum-dark hover:text-parfum-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {localeContent[currentLocale].contact}
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <LocaleSelector 
                currentLocale={currentLocale}
                onLocaleChange={handleLocaleChange}
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
