/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: { bg:"#0B0F1A", card:"#11182A", text:"#E6EEF9", mut:"#A7B3C7" },
        brand: { 1:"#22E3A4", 2:"#7C8BFF" }
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,.35)" }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
