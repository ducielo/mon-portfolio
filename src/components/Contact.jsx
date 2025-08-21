// Formulaire accessible (envoi mailto par défaut)
import React from "react"

export default function Contact(){
  return (
    <section className="section" id="contact">
      <div className="container-xl">
        <h2 className="title mb-6">Contact</h2>
        <p className="muted mb-6">Un projet, une idée ou un café ? Écris‑moi 👋</p>
        <form className="card p-6 grid gap-4" action="mailto:ton.email@exemple.com" method="post" encType="text/plain">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="grid gap-1">
              <span>Nom</span>
              <input name="Nom" required className="bg-white/5 border-white/10 rounded-xl" />
            </label>
            <label className="grid gap-1">
              <span>Email</span>
              <input type="email" name="Email" required className="bg-white/5 border-white/10 rounded-xl" />
            </label>
          </div>
          <label className="grid gap-1">
            <span>Message</span>
            <textarea name="Message" rows="4" required className="bg-white/5 border-white/10 rounded-xl" />
          </label>
          <button className="btn btn-primary w-fit" type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  )
}
