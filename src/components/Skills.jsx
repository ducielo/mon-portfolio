// Barres de compétences accessibles + animation
import React from "react"
import { motion } from "framer-motion"

const SKILLS = [
  {cat:"Développement", items:[
    {k:"HTML / CSS/ tailwindCSS / Bootstrap / (A11Y)", v:95},
    {k:"JavaScript / TypeScript / Wordpress", v:92},
    {k:"Reactjs / Next.js / React Native / Nest / Prisma", v:90},
    {k:"Node / Express / PostgreSQL / Mysql", v:88}
  ]},
  {cat:"UX Design", items:[
    {k:"Parcours Utilisateurs / Proto-persona / Persona", v:86},
    {k:"Brainstorming / Design thinking / Design Spring", v:90},
    {k:"Design System / Prototypag", v:92},
    {k:"Tests / Accessibilité", v:93}
  ]}
]

export default function Skills(){
  return (
    <section className="section bg-white/[.02] border-y border-white/10" id="skills">
      <div className="container-xl">
        <h2 className="title mb-8">Compétences clés</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {SKILLS.map((group)=>(
            <div key={group.cat} className="card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{group.cat}</h3>
                <span className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5">Focus</span>
              </div>
              <ul className="mt-5 grid gap-4">
                {group.items.map((it)=>(
                  <li key={it.k}>
                    <div className="flex items-center justify-between text-sm">
                      <span>{it.k}</span><span className="text-base-text/70">{it.v}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                      <motion.div
                        className="h-full bg-gradient-to-r from-brand-1 to-brand-2"
                        initial={{width: 0}}
                        whileInView={{width: `${it.v}%`}}
                        transition={{duration:.6, ease:"easeOut"}}
                        viewport={{ once:true }}
                        aria-hidden="true"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
