
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Language } from "@/lib/types";

interface LocaleSelectorProps {
  currentLocale: Language;
  onLocaleChange: (locale: Language) => void;
}

const LocaleSelector = ({ currentLocale, onLocaleChange }: LocaleSelectorProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-white/90 backdrop-blur-sm border-parfum-gold hover:bg-parfum-gold/10 hover:border-parfum-gold shadow-md rounded-full w-12 h-12"
        >
          <Globe size={20} className="text-parfum-dark" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-white/95 backdrop-blur-sm border border-parfum-gold/30 rounded-lg shadow-lg"
      >
        <DropdownMenuItem
          className={`cursor-pointer px-4 py-2 ${
            currentLocale === "fr" ? "font-semibold bg-parfum-gold/10" : ""
          }`}
          onClick={() => onLocaleChange("fr")}
        >
          Français 🇫🇷
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`cursor-pointer px-4 py-2 ${
            currentLocale === "en" ? "font-semibold bg-parfum-gold/10" : ""
          }`}
          onClick={() => onLocaleChange("en")}
        >
          English 🇬🇧
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer px-4 py-2"
          asChild
        >
          <Link to="/admin" className="flex items-center w-full">
            <Shield size={16} className="mr-2" />
            {currentLocale === "fr" ? "Administration" : "Admin"}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocaleSelector;
