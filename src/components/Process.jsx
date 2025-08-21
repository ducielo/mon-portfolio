const STEPS = [
  {n:1,t:"Découvrir",d:"Interviews, données, objectifs business."},
  {n:2,t:"Définir",d:"Personas, parcours, cadrage & KPIs."},
  {n:3,t:"Designer",d:"Wireframes → prototypes haut‑fidélité."},
  {n:4,t:"Développer",d:"Composants réutilisables, tests, perf."},
  {n:5,t:"Mesurer",d:"Tests utilisateurs, analytics, itérations."}
]

export default function Process(){
  return (
    <section className="section" id="process">
      <div className="container-xl">
        <h2 className="title mb-8">Méthode orientée impact</h2>
        <ol className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {STEPS.map(s=>(
            <li key={s.n} className="card p-6 grid grid-cols-[auto,1fr] gap-4 items-start">
              <span className="w-10 h-10 grid place-content-center rounded-xl bg-gradient-to-tr from-brand-1 to-brand-2 text-black font-bold">{s.n}</span>
              <div>
                <h3 className="font-bold">{s.t}</h3>
                <p className="muted">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
