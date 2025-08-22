// Lightbox.jsx — modal plein écran pour afficher un tableau d'images
import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Lightbox({ isOpen, images, index, onClose, onPrev, onNext }){
  // Clavier: ESC (fermer), ← (préc), → (suiv)
  useEffect(()=>{
    if(!isOpen) return
    const onKey = (e)=>{
      if(e.key === "Escape") onClose()
      if(e.key === "ArrowLeft") onPrev()
      if(e.key === "ArrowRight") onNext()
    }
    window.addEventListener("keydown", onKey)
    return ()=> window.removeEventListener("keydown", onKey)
  },[isOpen, onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur flex items-center justify-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          aria-modal="true" role="dialog"
        >
          <button className="absolute top-4 right-4 btn btn-ghost text-white" onClick={onClose} aria-label="Fermer">✕</button>
          <button className="absolute left-4 btn btn-ghost text-white" onClick={onPrev} aria-label="Précédente">←</button>
          <button className="absolute right-14 btn btn-ghost text-white" onClick={onNext} aria-label="Suivante">→</button>

          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Image ${index+1}`}
            className="max-h-[85vh] max-w-[90vw] rounded-xl border border-white/10 shadow-soft object-contain"
            initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .98 }}
            transition={{ duration: .25 }}
          />
          <div className="absolute bottom-4 text-sm text-white/80">{index+1} / {images.length}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
