'use client'

import { NeonGradientCard } from '@/components/ui/neon-gradient-card'
import React, { useState } from 'react'

export default function Contact() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phoneNumber: '',
    message: ''
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus('Veuillez remplir tous les champs obligatoires.');
      return;
    }
  
    setStatus('Envoi en cours...');

    const response = await fetch('/api/SendMail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Message envoyé avec succès !');
      setFormData({ firstName: '', lastName: '', email: '', company: '', phoneNumber: '', message: '' });
    } else {
      setStatus('Erreur lors de l\'envoi du message.');
    }
  };

  const scrollToContact = () => {
    const section = document.getElementById("Contact");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div id="Contact" className="isolate px-6 py-24 sm:py-32 lg:px-8 font-mono">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
      </div>
      <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-5xl font-extrabold text-center relative inline-block p-3 mb-10 gradient-text"
        onMouseEnter={scrollToContact}>
          Contactez-moi
      </h2>
      </div>
              <NeonGradientCard className="max-w-sm max-w-xl mx-auto items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
      <form onSubmit={handleSubmit} action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
              Nom
            </label>
            <div className="mt-2.5">
              <input
                required
                id="first-name"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-xl bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-rose-400"
                value={formData.firstName} 
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">
              Prénom
            </label>
            <div className="mt-2.5">
              <input
                required
                id="last-name"
                name="lastName"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-xl bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-rose-400"
                value={formData.lastName} 
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-white">
              Entreprise
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-xl bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-rose-400"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                required
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-xl bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-rose-400"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white">
              Téléphone
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-xl bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-rose-400">
                <input
                  id="phone-number"
                  name="phoneNumber"
                  type="text"
                  placeholder=""
                  className="block min-w-0 grow rounded-xl py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                required
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-xl bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-rose-400"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-xl bg-gradient-to-b from-rose-400 to-blue-500 tex-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
          >
            Envoyer
          </button>
          {status && <p>{status}</p>}
        </div>
      </form>
      </NeonGradientCard>
    </div>
  )
}
