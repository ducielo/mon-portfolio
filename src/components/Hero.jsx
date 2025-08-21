// Hero : promesse claire + KPIs + CTA, avec animation Framer Motion
import React from "react"
import { motion } from "framer-motion"                // Import animations

export default function Hero(){
  return (
    <section className="section">
      <div className="container-xl grid md:grid-cols-2 gap-10 items-center">
        {/* Bloc texte animé */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}             // État initial
          whileInView={{ opacity: 1, y: 0 }}          // État visible
          transition={{ duration: 0.6, ease: "easeOut" }} // Timing
          viewport={{ once: true }}                   // Une seule fois
          className="space-y-6"
        >
          <span className="inline-block rounded-full border border-white/10 px-3 py-1 text-base-text/80">
            Double compétence
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Développeur <span className="text-brand-2">Full-Stack.</span>{" "}
            UX Designer
            <span className="bg-gradient-to-tr from-brand-1 to-brand-2 bg-clip-text text-transparent"></span>
          </h1>
          <p className="muted max-w-prose">
            Je transforme des insights utilisateurs en interfaces accessibles, élégantes et performantes.
            Mon stack va de la recherche UX au back-end scalable en passant par un front ergonomique.
          </p>
          <div className="flex gap-3">
            <a href="#projects" className="btn btn-primary">Voir mes projets</a>
            <a href="#contact" className="btn btn-ghost">Me contacter</a>
          </div>

          {/* KPIs */}
          <ul className="grid grid-cols-3 gap-4 pt-2">
            {[
              {k: "2+", l: "années exp."},
              {k: "30+", l: "projets"},
              // {k: "120k+", l: "utilisateurs"}
            ].map((s,i)=>(
              <li key={i} className="card p-4 text-center">
                <div className="text-2xl font-extrabold">{s.k}</div>
                <div className="text-xs text-base-text/70">{s.l}</div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Visuel animé (Image à la place du SVG) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="card p-6 flex items-center justify-center"
          aria-hidden="true"
        >
        <motion.img
        src={`${import.meta.env.BASE_URL}works/header.png`}
        alt="Illustration développeur full-stack"
        className="w-80 h-auto rounded-xl shadow-lg object-cover mx-auto" 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      />
        </motion.div>
      </div>
    </section>
  )
}
