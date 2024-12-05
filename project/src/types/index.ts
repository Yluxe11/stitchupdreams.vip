export interface Category {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface Feature {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
}

export interface Filters {
  categories: string[];
  sizes: string[];
  priceRange: [number, number];
}