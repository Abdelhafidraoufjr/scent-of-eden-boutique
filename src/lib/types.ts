
export interface Product {
  id: string;
  name: string;
  brand: string;
  olfactoryFamily: string;
  description: string;
  price: {
    fullSize: number;
    decant5ml?: number;
    decant10ml?: number;
  };
  volume: {
    fullSize: string;
    hasDecant5ml: boolean;
    hasDecant10ml: boolean;
  };
  images: string[];
  inStock: boolean;
  isFeatured?: boolean;
}

export type VolumeType = "fullSize" | "decant5ml" | "decant10ml";

export type OlfactoryFamily =
  | "Floral"
  | "Oriental"
  | "Boisé"
  | "Frais"
  | "Chypré"
  | "Aromatique"
  | "Fougère"
  | "Gourmand";

export type Language = "fr" | "en";

export interface LocaleContent {
  fr: { [key: string]: string };
  en: { [key: string]: string };
}
