// src/data/projects.js
// Données projets AVEC images (cover + galerie) et slug (identifiant)

const base = import.meta.env.BASE_URL;

export const PROJECTS = [
  {
    slug: "Santé & télé-médécine",
    title: "vivoptim-solutions",
    desc: "Application web réalisée pour un programme de conseils nutritionnels par les diététiciens",
    tags: ["Next.js", "Headless", "Animations"],
    type: ["dev"],
    cover: `${base}works/cap1.png`,
    gallery: [
      `${base}works/cap6.png`,
      `${base}works/cap1.png`,
      `${base}works/cap2.png`,
      `${base}works/cap3.png`,
      `${base}works/cap4.png`,
      `${base}works/Group2.png`
    ]
  },
  {
    slug: "Itech",
    title: "UX Design",
    desc: "Création d'application mobile pour transport de colis",
    tags: ["Research", "Testing", "Workshops"],
    type: ["ux"],
    cover: `${base}works/Group1.png`,
    gallery: [
      `${base}works/Group2.png`
    ]
  },
  {
    slug: "design-tokens",
    title: "Application mobile",
    desc: "Tokens sémantiques, theming clair/sombre, handoff Figma ↔ code.",
    tags: ["Design System", "Figma", "Tokens"],
    type: ["ux","dev"],
    cover: `${base}works/ip1.png`,
    gallery: [
      `${base}works/ip2.png`,
      `${base}works/ip3.png`,
      `${base}works/ip4.png`,
      `${base}works/ip5.png`,
      `${base}works/ip6.png`
    ]
  }
]
