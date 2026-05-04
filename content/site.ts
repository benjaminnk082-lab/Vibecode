export type Project = {
  slug: string;
  name: string;
  year: string;
  category: string;
  description: string;
};

export const site = {
  brand: "Nordrise",
  tagline: "Nettsider som løfter bedriften din.",
  location: "Skien, Telemark",
  manifest: [
    "Vi tror på færre, bedre nettsider. Bygget av mennesker — ikke av maler.",
    "Vi er Martin og Benjamin. To gutter fra Skien. Vi bygger nettsider fordi vi ikke tåler middelmådighet — og fordi lokale bedrifter fortjener bedre enn en 9 900-mal de deler med 400 andre.",
  ],
  cta: {
    label: "Book gratis møte",
    href: "mailto:benjamin@nordrisenettsider.no",
  },
  contact: {
    emails: [
      "benjamin@nordrisenettsider.no",
      "martin@nordrisenettsider.no",
    ],
    socials: [
      { label: "Instagram", href: "https://instagram.com/nordrisenettsider" },
      { label: "LinkedIn", href: "https://linkedin.com/company/nordrisenettsider" },
      { label: "Facebook", href: "https://facebook.com/nordrisenettsider" },
    ],
  },
} as const;

export const projects: Project[] = [
  {
    slug: "maltid",
    name: "Måltid",
    year: "2025",
    category: "Restaurant",
    description: "En meny som selger mellom linjene.",
  },
  {
    slug: "studio-ravn",
    name: "Studio Ravn",
    year: "2025",
    category: "Frisørsalong",
    description: "Booking som føles som å reservere et bord.",
  },
  {
    slug: "nord-bygg",
    name: "Nord Bygg",
    year: "2025",
    category: "Håndverker",
    description: "Prosjekter som står for seg selv.",
  },
];
