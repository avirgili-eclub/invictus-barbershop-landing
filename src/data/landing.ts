export type Service = {
  name: string;
  description: string;
  duration: string;
  price: string;
};

export type Professional = {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
};

export type Review = {
  author: string;
  quote: string;
};

export const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#profesionales", label: "Profesionales" },
  { href: "#agenda", label: "Agenda" },
  { href: "#academia", label: "Academia" },
  { href: "#resenas", label: "Resenas" },
  { href: "#ubicacion", label: "Ubicacion" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const services: Service[] = [
  {
    name: "Corte clasico",
    description: "Tecnicas tradicionales con acabados modernos y precisos.",
    duration: "45 min",
    price: "Gs. 110.000",
  },
  {
    name: "Fade / degradado",
    description: "Transiciones perfectas de sombras, desde el cero absoluto.",
    duration: "60 min",
    price: "Gs. 130.000",
  },
  {
    name: "Recorte de barba",
    description: "Perfilado con navaja y ritual de toalla caliente.",
    duration: "30 min",
    price: "Gs. 80.000",
  },
  {
    name: "Lavado capilar",
    description: "Masaje relajante y productos de alta gama.",
    duration: "20 min",
    price: "Gs. 50.000",
  },
  {
    name: "Tinte / color",
    description: "Camuflaje de canas o cambios radicales de tono.",
    duration: "90 min",
    price: "Gs. 180.000",
  },
  {
    name: "Corte con tijera",
    description: "Trabajo artesanal para melenas con movimiento natural.",
    duration: "50 min",
    price: "Gs. 140.000",
  },
];

export const professionals: Professional[] = [
  {
    id: "fabian",
    name: "Fabian Reijhall",
    specialty: "Precision cuts y direccion creativa",
    bio: "Fundador de Invictus. Lidera la experiencia premium y supervision tecnica.",
    image: "/images/Fabian.png",
  },
  {
    id: "oliver",
    name: "Oliver Portillo",
    specialty: "Fade, barba, colorista y acabado editorial",
    bio: "Especialista en degradados de alto contraste, coloracion masculina y perfilado de barba.",
    image: "/images/OliverPortillo.png",
  },
  {
    id: "cess",
    name: "Cess Rodas",
    specialty: "Scissor work y estilo contemporaneo",
    bio: "Enfoque en texturas, volumen y armonia para imagen masculina actual.",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
  },
];

export const reviews: Review[] = [
  {
    author: "Nicolas M.",
    quote: "Excelente servicio, ambiente comodo y atencion personalizada de principio a fin.",
  },
  {
    author: "Gabriel R.",
    quote: "Se nota la calidad en cada detalle. Muy buen nivel de profesionales.",
  },
  {
    author: "Matias B.",
    quote: "Para mi, una de las mejores barberias de Asuncion. Experiencia premium real.",
  },
];

export const academyHighlights = [
  "Nivel basico a avanzado",
  "Practica real con mentorias",
  "Tecnicas clasicas y modernas",
  "Desarrollo de estilo propio",
];
