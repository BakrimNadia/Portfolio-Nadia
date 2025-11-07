'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { NeonGradientCard } from '@/components/ui/neon-gradient-card'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phoneNumber: '',
    message: '',
  })

  const [status, setStatus] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus('Veuillez remplir tous les champs obligatoires.')
      return
    }

    setStatus('Envoi en cours...')

    try {
      const response = await fetch('/api/SendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('Message envoyé avec succès ✅')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phoneNumber: '',
          message: '',
        })
      } else {
        setStatus("Erreur lors de l’envoi du message. Veuillez réessayer.")
      }
    } catch (error) {
      console.error(error)
      setStatus('Une erreur est survenue. Vérifiez votre connexion.')
    }
  }

  return (
    <section
      id="Contact"
      className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8 font-mono"
    >
      {/* Glow background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div className="relative left-1/2 aspect-[1108/632] w-[72rem] -translate-x-1/2 bg-gradient-to-tr from-rose-500/40 via-fuchsia-500/20 to-sky-500/30 opacity-60" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-rose-600">
            développeuse web JS
          </p>
          <h2 className="mt-3 inline-block bg-gradient-to-r from-rose-400 via-fuchsia-400 to-sky-400 bg-clip-text text-4xl sm:text-5xl font-extrabold text-transparent">
            Contactez-moi
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Besoin d’un site moderne, d’une refonte, d’un espace client, d’un projet Next.js
            ou d’une landing page performante ? Envoyez-moi quelques détails, je reviens vers vous avec des solutions concrètes.
          </p>
        </div>

        {/* Layout */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr,1.9fr] items-stretch">
          {/* Left column: image + pitch */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black via-slate-900 to-fuchsia-900/40 p-[2px] shadow-[0_18px_60px_rgba(0,0,0,0.75)]">
              <div className="relative h-full w-full rounded-3xl bg-black/70 p-4 sm:p-5 flex flex-col gap-4">
                {/* Image block */}
                <div className="relative h-40 sm:h-52 w-full overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-tr from-fuchsia-500/20 via-rose-500/10 to-sky-400/10">
                  <Image
                    src="/images/contact.jpg" // 🔁 remplace par ton visuel (setup dev, code, néon)
                    alt="Interface moderne en néon pour projet web"
                    fill
                    priority
                    className="object-cover opacity-90 mix-blend-screen"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
                  <p className="absolute bottom-3 left-4 text-xs sm:text-sm text-gray-100">
                    Interfaces modernes, propres, optimisées. <span className="text-rose-400">Code clair. Design impactant.</span>
                  </p>
                </div>

                {/* Text */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    Travailler avec une développeuse qui comprend le terrain.
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Je conçois des sites et applications sur-mesure avec Next.js, React, TypeScript, Tailwind,
                    en pensant UX, performance et crédibilité de votre image.
                  </p>
                </div>

                <ul className="mt-2 space-y-1.5 text-xs text-gray-400">
                  <li>• Site vitrine moderne & responsive</li>
                  <li>• Refonte de site lent / daté</li>
                  <li>• Intégration Next.js / API / formulaires / booking</li>
                  <li>• Design cohérent avec votre identité de marque</li>
                </ul>

                <p className="pt-1 text-[10px] text-gray-500">
                  Dites-moi où vous en êtes techniquement et ce que vous voulez obtenir : je traduis ça en solution concrète.
                </p>
              </div>
            </div>
          </div>

          {/* Right column: form in neon card */}
          <NeonGradientCard
            className="mx-auto w-full max-w-xl transform transition-all duration-500 hover:scale-[1.02]"
            borderRadius={26}
            borderSize={2}
            neonColors={{
              firstColor: '#ff00aa',
              secondColor: '#00FFF1',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/30">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-xs font-semibold uppercase tracking-wide text-gray-800"
                  >
                    Prénom *
                  </label>
                  <input
                    required
                    id="first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    className="mt-2 block w-full rounded-xl bg-white/90 px-3.5 py-2 text-sm text-gray-900 shadow-sm outline-none ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-rose-400"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-xs font-semibold uppercase tracking-wide text-gray-800"
                  >
                    Nom *
                  </label>
                  <input
                    required
                    id="last-name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    className="mt-2 block w-full rounded-xl bg-white/90 px-3.5 py-2 text-sm text-gray-900 shadow-sm outline-none ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-rose-400"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-xs font-semibold uppercase tracking-wide text-gray-800"
                >
                  Entreprise / projet (optionnel)
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Nom de votre entreprise ou projet"
                  className="mt-2 block w-full rounded-xl bg-white/90 px-3.5 py-2 text-sm text-gray-900 shadow-sm outline-none ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-rose-400"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wide text-gray-800"
                >
                  Email *
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2 block w-full rounded-xl bg-white/90 px-3.5 py-2 text-sm text-gray-900 shadow-sm outline-none ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-rose-400"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="phone-number"
                  className="block text-xs font-semibold uppercase tracking-wide text-gray-800"
                >
                  Téléphone (optionnel)
                </label>
                <input
                  id="phone-number"
                  name="phoneNumber"
                  type="text"
                  placeholder="Pour un échange plus rapide"
                  className="mt-2 block w-full rounded-xl bg-white/90 px-3.5 py-2 text-sm text-gray-900 shadow-sm outline-none ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-rose-400"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wide text-gray-800"
                >
                  Votre message *
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Parlez-moi de votre activité, du type de site souhaité, des fonctionnalités, du timing, du budget estimé..."
                  className="mt-2 block w-full rounded-xl bg-white/90 px-3.5 py-2 text-sm text-gray-900 shadow-sm outline-none ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-rose-400"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center border border-sky-200 gap-2 rounded-xl bg-gradient-to-r from-rose-200 via-fuchsia-200 to-sky-200 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-gray-900 shadow-lg transition-all hover:shadow-rose-500/40 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
                >
                  Envoyer 🚀
                </button>

                {status && (
                  <p className="text-xs text-center text-gray-800">
                    {status}
                  </p>
                )}

                <p className="text-[10px] text-center text-gray-400">
                  Vos informations ne seront utilisées que pour répondre à votre demande.
                </p>
              </div>
            </form>
          </NeonGradientCard>
        </div>
      </div>
    </section>
  )
}
