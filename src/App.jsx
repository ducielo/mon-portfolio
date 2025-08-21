import React, { useEffect, useState } from "react"
import NavBar from "./components/NavBar.jsx"
import Hero from "./components/Hero.jsx"
import Projects from "./components/Projects.jsx"
import Skills from "./components/Skills.jsx"
import Process from "./components/Process.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"

export default function App(){
  const [theme, setTheme] = useState(()=>localStorage.getItem("theme")||"dark")
  useEffect(()=>{
    const html=document.documentElement
    theme==="dark"?html.classList.add("dark"):html.classList.remove("dark")
    localStorage.setItem("theme",theme)
  },[theme])

  return (
    <div className="min-h-screen bg-[radial-gradient(80rem_40rem_at_20%_-10%,rgba(124,139,255,0.15),transparent),radial-gradient(80rem_40rem_at_80%_110%,rgba(34,227,164,0.12),transparent)]">
      <NavBar theme={theme} onToggleTheme={()=>setTheme(t=>t==="dark"?"light":"dark")} />
      <main>
        <Hero/>
        <Projects/>
        <Skills/>
        <Process/>
        <About/>
        <Contact/>
      </main>
      <footer className="mt-16 border-t border-white/10">
        <div className="container-xl py-8 flex items-center justify-between text-sm text-base-text/80">
          <span>© {new Date().getFullYear()} — UX Designer - WEB MASTER - DEVELOPPEUR FULL STACK </span>
          <span>bokaprod20162017@gmail.com - poen-vision@outlook.com</span>
        </div>
      </footer>
    </div>
  )
}
