// src/data/projects.js
// Données projets AVEC images (cover + galerie) et slug (identifiant)
export const PROJECTS = [
  {
    slug: "Santé & télé-médécine",
    title: "vivoptim-solutions",
    desc: "Application web réaliser pour un programme de conseils nutritionnels par les diététiciens",
    tags: ["Next.js", "Headless", "Animations"],
    type: ["dev"],
    cover: "/works/cap1.png",
    gallery: [
      "/works/cap6.png","/works/cap1.png","/works/cap2.png","/works/cap3.png","/works/cap4.png","/works/Group2.png"
    ]
  },
  {
    slug: "Itech",
    title: "UX Design",
    desc: "Création d'application mobile pour transports de colis",
    tags: ["Research", "Testing", "Workshops"],
    type: ["ux"],
    cover: "/works/Group1.png",
    gallery: [
      "./works/Group2.png"
    ]
  },
  {
    slug: "design-tokens",
    title: "Applcation mobile",
    desc: "Tokens sémantiques, theming clair/sombre, handoff Figma ↔ code.",
    tags: ["Design System", "Figma", "Tokens"],
    type: ["ux","dev"],
    cover: "/works/ip1.png",
    gallery: [
      "/works/ip2.png","/works/ip3.png","/works/ip4.png","/works/ip5.png","/works/ip6.png"
    ]
  }
]
