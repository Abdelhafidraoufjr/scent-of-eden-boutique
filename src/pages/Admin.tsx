
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Key } from "lucide-react";
import { toast } from "sonner";
import { Language } from "@/lib/types";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentLocale, setCurrentLocale] = useState<Language>("fr");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Ceci est une authentification simplifiée, à remplacer par une authentification sécurisée
    if (username === "admin" && password === "parfum123") {
      setIsAuthenticated(true);
      toast.success(
        currentLocale === "fr" 
          ? "Connexion réussie" 
          : "Login successful"
      );
    } else {
      toast.error(
        currentLocale === "fr" 
          ? "Identifiants incorrects" 
          : "Invalid credentials"
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-parfum-cream to-white">
      <Navbar />
      <main className="flex-grow parfum-container py-16 relative overflow-hidden">
        <div className="absolute w-72 h-72 bg-parfum-gold/20 rounded-full blur-3xl -right-20 -top-20 z-0"></div>
        <div className="absolute w-96 h-96 bg-parfum-gold/10 rounded-full blur-3xl -left-20 bottom-20 z-0"></div>
        
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-parfum-gold/30 relative z-10">
            <div className="flex justify-center mb-6">
              <Shield className="h-12 w-12 text-parfum-gold" />
            </div>
            <h1 className="text-3xl font-serif text-center mb-6">
              {currentLocale === "fr" ? "Administration" : "Admin Panel"}
            </h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="block mb-2 text-sm">
                  {currentLocale === "fr" ? "Nom d'utilisateur" : "Username"}
                </label>
                <Input 
                  id="username"
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                  className="border-parfum-gold/30 focus:border-parfum-gold"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm">
                  {currentLocale === "fr" ? "Mot de passe" : "Password"}
                </label>
                <Input 
                  id="password"
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-parfum-gold/30 focus:border-parfum-gold"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-parfum-gold hover:bg-parfum-gold/80 text-white"
              >
                <Key className="mr-2 h-4 w-4" />
                {currentLocale === "fr" ? "Se connecter" : "Login"}
              </Button>
            </form>
          </div>
        ) : (
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-parfum-gold/30 relative z-10">
            <h1 className="text-3xl font-serif mb-6">
              {currentLocale === "fr" ? "Tableau de bord" : "Dashboard"}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/60 rounded-lg shadow border border-parfum-gold/20">
                <h2 className="text-xl font-medium mb-4">
                  {currentLocale === "fr" ? "Gestion des produits" : "Product Management"}
                </h2>
                <Button className="bg-parfum-gold hover:bg-parfum-gold/80 text-white">
                  {currentLocale === "fr" ? "Ajouter un produit" : "Add Product"}
                </Button>
              </div>
              <div className="p-6 bg-white/60 rounded-lg shadow border border-parfum-gold/20">
                <h2 className="text-xl font-medium mb-4">
                  {currentLocale === "fr" ? "Commandes" : "Orders"}
                </h2>
                <p className="text-gray-600">
                  {currentLocale === "fr" 
                    ? "Aucune commande en attente" 
                    : "No pending orders"}
                </p>
              </div>
              <div className="p-6 bg-white/60 rounded-lg shadow border border-parfum-gold/20">
                <h2 className="text-xl font-medium mb-4">
                  {currentLocale === "fr" ? "Inventaire" : "Inventory"}
                </h2>
                <Button variant="outline" className="border-parfum-gold text-parfum-dark">
                  {currentLocale === "fr" ? "Gérer le stock" : "Manage Inventory"}
                </Button>
              </div>
              <div className="p-6 bg-white/60 rounded-lg shadow border border-parfum-gold/20">
                <h2 className="text-xl font-medium mb-4">
                  {currentLocale === "fr" ? "Statistiques" : "Statistics"}
                </h2>
                <p className="text-gray-600">
                  {currentLocale === "fr" 
                    ? "Visualisez les performances de votre boutique" 
                    : "View store performance"}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Button 
                variant="outline" 
                className="border-parfum-gold text-parfum-dark"
                onClick={() => setIsAuthenticated(false)}
              >
                {currentLocale === "fr" ? "Se déconnecter" : "Logout"}
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer currentLocale={currentLocale} />
    </div>
  );
};

export default Admin;
