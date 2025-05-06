
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
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
        <Button variant="ghost" size="icon" className="text-parfum-dark">
          <Globe size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-sm">
        <DropdownMenuItem
          className={`cursor-pointer ${
            currentLocale === "fr" ? "font-semibold bg-muted" : ""
          }`}
          onClick={() => onLocaleChange("fr")}
        >
          Français 🇫🇷
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`cursor-pointer ${
            currentLocale === "en" ? "font-semibold bg-muted" : ""
          }`}
          onClick={() => onLocaleChange("en")}
        >
          English 🇬🇧
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocaleSelector;
