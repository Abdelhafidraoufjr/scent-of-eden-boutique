
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail } from "lucide-react";

const localeContent = {
  fr: {
    newsletter: "S'inscrire à notre newsletter",
    emailPlaceholder: "Votre adresse e-mail",
    subscribe: "S'abonner",
    navigation: "Navigation",
    home: "Accueil",
    products: "Nos parfums",
    about: "À propos",
    contact: "Contact",
    legal: "Mentions légales",
    copyright: "© 2025 Scent of Eden. Tous droits réservés.",
  },
  en: {
    newsletter: "Subscribe to our newsletter",
    emailPlaceholder: "Your email address",
    subscribe: "Subscribe",
    navigation: "Navigation",
    home: "Home",
    products: "Our fragrances",
    about: "About",
    contact: "Contact",
    legal: "Legal",
    copyright: "© 2025 Scent of Eden. All rights reserved.",
  },
};

interface FooterProps {
  currentLocale: "fr" | "en";
}

const Footer = ({ currentLocale = "fr" }: FooterProps) => {
  const content = localeContent[currentLocale];

  return (
    <footer className="bg-parfum-dark text-cream py-12 mt-24">
      <div className="parfum-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-xl font-semibold text-parfum-gold mb-4">
              Scent of Eden
            </h3>
            <p className="text-gray-300 mb-4">
              {currentLocale === "fr"
                ? "Découvrez notre sélection exquise de parfums rares et de décants."
                : "Discover our exquisite selection of rare perfumes and decants."}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-parfum-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-parfum-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contact@scentofeden.com"
                className="text-gray-300 hover:text-parfum-gold transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-playfair text-xl font-semibold text-parfum-gold mb-4">
              {content.navigation}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-parfum-gold transition-colors"
                >
                  {content.home}
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-parfum-gold transition-colors"
                >
                  {content.products}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-parfum-gold transition-colors"
                >
                  {content.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-parfum-gold transition-colors"
                >
                  {content.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="font-playfair text-xl font-semibold text-parfum-gold mb-4">
              {content.newsletter}
            </h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder={content.emailPlaceholder}
                className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-parfum-gold flex-grow"
              />
              <button className="px-4 py-2 bg-parfum-gold text-parfum-dark font-medium rounded-md hover:bg-opacity-90 transition-colors">
                {content.subscribe}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {content.copyright}
          </p>
          <Link
            to="/legal"
            className="text-gray-400 text-sm hover:text-parfum-gold transition-colors"
          >
            {content.legal}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
