export interface Service {
  id: string;
  code: string; // spec-sheet style code, e.g. "01 / INT"
  title: string;
  description: string;
  points: string[];
  image?: string;
}

export interface Project {
  name: string;
  location: string;
  value: string;
  scope: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CarouselSlide {
  id: string;
  title: string;
  description: string;
  image: string;
}
