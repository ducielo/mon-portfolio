/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ⬇️ variables CSS avec support de /<alpha> (ex: bg-base-bg/70)
        base: {
          bg:   'rgb(var(--base-bg) / <alpha-value>)',
          card: 'rgb(var(--base-card) / <alpha-value>)',
          text: 'rgb(var(--base-text) / <alpha-value>)',
          mut:  'rgb(var(--base-mut) / <alpha-value>)',
        },
        // Tu gardes tes couleurs brand (inchangé)
        brand: { 1:"#22E3A4", 2:"#7C8BFF" }
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,.35)" }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
