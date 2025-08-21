// NavBar : logo, liens, CTA, toggle thème
import React from "react"

export default function NavBar({ theme, onToggleTheme }){
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-base-bg/70 border-b border-white/10">
      <div className="container-xl h-14 flex items-center justify-between">
        {/* Logo compact */}
        <a href="#" className="text-lg font-extrabold tracking-tight">
          <span className="bg-gradient-to-tr from-brand-1 to-brand-2 bg-clip-text text-transparent">
            Cedric Obiang 
          </span>
        </a>

        {/* Menu principal */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-white/90">Mobile : 06 41 54 41 18</a>
          <a href="#projects" className="hover:text-white/90">Projets</a>
          <a href="#skills" className="hover:text-white/90">Compétences</a>
          <a href="#process" className="hover:text-white/90">Méthode</a>
          <a href="#about" className="hover:text-white/90">À propos</a>
          <a href="#contact" className="btn btn-primary">Contact</a>
          {/* Toggle thème */}
          <button onClick={onToggleTheme} className="btn btn-ghost" aria-label="Basculer le thème">
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </nav>

        {/* Menu mobile minimal (ancre vers sections) */}
        <a href="#contact" className="md:hidden btn btn-primary">Contact</a>
      </div>
    </header>
  )
}
