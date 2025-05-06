
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Facebook, Instagram } from "lucide-react";
import { Language } from "@/lib/types";
import { toast } from "@/hooks/use-toast";

const localeContent = {
  fr: {
    title: "Contactez-nous",
    subtitle: "Nous sommes à votre écoute",
    form: {
      name: "Nom",
      namePlaceholder: "Votre nom",
      email: "Email",
      emailPlaceholder: "Votre adresse e-mail",
      subject: "Sujet",
      subjectPlaceholder: "Objet de votre message",
      message: "Message",
      messagePlaceholder: "Votre message...",
      send: "Envoyer",
      sending: "Envoi en cours...",
      success: "Votre message a été envoyé avec succès !",
      error: "Une erreur est survenue. Veuillez réessayer."
    },
    contact: {
      title: "Informations de contact",
      emailUs: "Contactez-nous par email",
      callUs: "Appelez-nous",
      followUs: "Suivez-nous",
      address: "Paris, France"
    }
  },
  en: {
    title: "Contact us",
    subtitle: "We're here to help",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "Your email address",
      subject: "Subject",
      subjectPlaceholder: "Subject of your message",
      message: "Message",
      messagePlaceholder: "Your message...",
      send: "Send",
      sending: "Sending...",
      success: "Your message has been sent successfully!",
      error: "An error occurred. Please try again."
    },
    contact: {
      title: "Contact information",
      emailUs: "Email us",
      callUs: "Call us",
      followUs: "Follow us",
      address: "Paris, France"
    }
  }
};

const Contact = () => {
  const [currentLocale, setCurrentLocale] = useState<Language>("fr");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const content = localeContent[currentLocale];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulation d'envoi de message
    setTimeout(() => {
      toast({
        title: content.form.success,
        variant: "default",
      });
      
      // Réinitialiser le formulaire
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="parfum-container">
          {/* En-tête */}
          <div className="mb-12 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-parfum-dark mb-4">
              {content.title}
            </h1>
            <p className="text-lg text-gray-600">{content.subtitle}</p>
          </div>

          {/* Section principale */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Formulaire de contact */}
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Nom */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {content.form.name} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-parfum-gold"
                      placeholder={content.form.namePlaceholder}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {content.form.email} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-parfum-gold"
                      placeholder={content.form.emailPlaceholder}
                    />
                  </div>
                </div>

                {/* Sujet */}
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {content.form.subject} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-parfum-gold"
                    placeholder={content.form.subjectPlaceholder}
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {content.form.message} *
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-parfum-gold"
                    placeholder={content.form.messagePlaceholder}
                  ></textarea>
                </div>

                {/* Bouton d'envoi */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-parfum-dark text-white hover:bg-parfum-dark/90 py-6"
                >
                  {isSubmitting ? content.form.sending : content.form.send}
                </Button>
              </form>
            </div>

            {/* Informations de contact */}
            <div className="bg-gradient-to-br from-parfum-dark to-parfum-dark/90 text-white p-8 rounded-lg shadow-md">
              <h3 className="font-playfair text-xl font-semibold mb-6">
                {content.contact.title}
              </h3>

              {/* Email */}
              <div className="mb-6">
                <div className="flex items-start mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Mail size={18} className="text-parfum-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">{content.contact.emailUs}</p>
                    <a
                      href="mailto:contact@scentofeden.com"
                      className="text-white hover:text-parfum-gold transition-colors"
                    >
                      contact@scentofeden.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Téléphone */}
              <div className="mb-6">
                <div className="flex items-start mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Phone size={18} className="text-parfum-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">{content.contact.callUs}</p>
                    <a
                      href="tel:+33123456789"
                      className="text-white hover:text-parfum-gold transition-colors"
                    >
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="mb-6">
                <p className="text-sm text-gray-300 mb-2">{content.contact.followUs}</p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-parfum-gold/30 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-parfum-gold/30 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Adresse */}
              <div className="mt-8">
                <p className="text-gray-300 italic">
                  {content.contact.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer currentLocale={currentLocale} />
    </div>
  );
};

export default Contact;
