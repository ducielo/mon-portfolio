// src/components/Projects.jsx
// Cartes avec image cliquable, filtres et lightbox
import React, { useMemo, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PROJECTS } from "../data/projects"
import Lightbox from "./Lightbox"

const FILTERS = [
  {key:"all", label:"Tous"},
  {key:"dev", label:"Dev"},
  {key:"ux",  label:"UX"}
]

export default function Projects(){
  // Filtre actif
  const [active, setActive] = useState("all")
  const list = useMemo(
    ()=> PROJECTS.filter(p => active==="all" || p.type.includes(active)),
    [active]
  )

  // État lightbox
  const [isOpen, setIsOpen] = useState(false)
  const [images, setImages] = useState([])    // tableau d'URLs d'images
  const [index, setIndex]   = useState(0)     // index de l'image courante

  // Ouvre la lightbox avec une galerie et un index de départ
  const openLightbox  = useCallback((arr, start=0)=>{ setImages(arr); setIndex(start); setIsOpen(true) },[])
  const closeLightbox = useCallback(()=> setIsOpen(false),[])
  const prevImage     = useCallback(()=> setIndex(i => (i - 1 + images.length) % images.length),[images.length])
  const nextImage     = useCallback(()=> setIndex(i => (i + 1) % images.length),[images.length])

  return (
    <section className="section" id="projects">
      <div className="container-xl">
        {/* Titre + filtres */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="title">Projets sélectionnés</h2>
          <div className="flex gap-2">
            {FILTERS.map(f=>(
              <button
                key={f.key}
                onClick={()=>setActive(f.key)}
                className={`btn ${active===f.key ? 'btn-ghost ring-2 ring-brand-2/60' : 'btn-ghost'}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des projets */}
        <motion.ul layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {list.map((p,i)=>(
              <motion.li
                key={p.slug}
                initial={{opacity:0,y:10}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0,scale:.95}}
                transition={{duration:.3, delay:i*0.05}}
                className="card overflow-hidden"
              >
                {/* Media cliquable : ouvre la lightbox sur la galerie du projet */}
                <button
                  className="block w-full aspect-video bg-black/20"
                  onClick={()=>openLightbox(p.gallery, 0)}
                  aria-label={`Voir images du projet ${p.title}`}
                >
                  <img
                    src={p.cover}
                    alt={`Couverture ${p.title}`}
                    className="w-full h-full object-cover hover:opacity-95 transition"
                    loading="lazy"
                  />
                </button>

                {/* Corps de la carte */}
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="muted">{p.desc}</p>
                  <ul className="flex flex-wrap gap-2 pt-1">
                    {p.tags.map(t=>(
                      <li key={t} className="px-2 py-1 text-xs rounded-full border border-white/10 bg-white/5">{t}</li>
                    ))}
                  </ul>

                  {/* Bouton galerie (utile si on veut un 2e point d'entrée) */}
                  {p.gallery?.length > 1 && (
                    <button className="btn btn-ghost mt-2" onClick={()=>openLightbox(p.gallery, 0)}>
                      Voir {p.gallery.length} image(s)
                    </button>
                  )}
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      {/* Lightbox globale */}
      <Lightbox
        isOpen={isOpen}
        images={images}
        index={index}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </section>
  )
}
