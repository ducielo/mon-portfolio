// Point d'entrée React
import React from "react"                              // Importe React
import { createRoot } from "react-dom/client"          // API root moderne
import App from "./App.jsx"                            // Composant principal
import "./styles.css"                                  // Styles Tailwind

createRoot(document.getElementById("root"))            // Monte React dans #root
  .render(<App />)                                     // Rendu de l'app
