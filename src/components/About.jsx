// Carte profil + points forts
import React from "react"

export default function About() {
  return (
    <section className="section bg-white/[.02] border-y border-white/10" id="about">
      <div className="container-xl grid lg:grid-cols-[1.2fr_.8fr] gap-8">
        {/* Texte */}
        <div className="space-y-4">
          <h2 className="title">À propos</h2>
          <p className="muted max-w-prose">
            Je combine <b>pensée produit</b> et <b>exécution technique</b>. J’adore transformer des insights en solutions
            scalables, mesurables et belles. Mon credo : accessibilité, performance et design system.
          </p>
          <ul className="grid gap-2">
            <li>✔️ Collaboration produit/design/dev</li>
            <li>✔️ Accessibilité et inclusivité</li>
            <li>✔️ Culture data‑driven</li>
          </ul>
        </div>

        {/* Carte profil */}
        <div className="card p-6 grid grid-cols-[100px_1fr] gap-4 items-center">
          <div className="w-[100px] h-[100px]">
            {/* Photo personnalisée */}
            <img
              src="cv/image_profil.jpeg"
              alt="Photo de Cedric Obiang"
              className="w-full h-full rounded-full object-cover border border-white/10"
            />
          </div>
          <div>
            <h3 className="font-bold">Cedric Obiang</h3>
            <p className="text-sm text-base-text/80">Développeur Full-Stack × UX Designer</p>
            <a className="btn btn-ghost mt-2" href={`${import.meta.env.BASE_URL}cv/cd_dev_ux.pdf`}  download>
              📄 Télécharger le CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
