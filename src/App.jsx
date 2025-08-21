import React, { useEffect, useState, useCallback } from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Process from "./components/Process.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

// ✅ Récupère le thème depuis localStorage OU la préférence système
const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch (_) {
    /* ignore */
  }
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  // ✅ Applique la classe .dark sur <html> + persiste
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") html.classList.add("dark");
    else html.classList.remove("dark");
    try {
      localStorage.setItem("theme", theme);
    } catch (_) {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  return (
    <div
      className={
        // ✅ Tu gardes ton fond en dégradé
        "min-h-screen bg-[radial-gradient(80rem_40rem_at_20%_-10%,rgba(124,139,255,0.15),transparent),radial-gradient(80rem_40rem_at_80%_110%,rgba(34,227,164,0.12),transparent)] " +
        // ✅ Ajout recommandé pour que la couleur du texte suive ton token
        "text-base-text"
      }
    >
      <NavBar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Process />
        <About />
        <Contact />
      </main>

      <footer className="mt-16 border-t border-white/10">
        <div className="container-xl py-8 flex items-center justify-between text-sm text-base-text/80">
          <span>
            © {new Date().getFullYear()} — UX Designer - WEB MASTER - DEVELOPPEUR
            FULL STACK
          </span>
          <span>bokaprod20162017@gmail.com - poen-vision@outlook.com</span>
        </div>
      </footer>
    </div>
  );
}
