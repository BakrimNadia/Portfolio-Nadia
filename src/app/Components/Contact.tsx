"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Mail, Phone, Building2, User } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.08 * i, ease: "easeOut" },
  }),
};

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phoneNumber: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      setStatus("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setStatus("Envoi en cours...");

    try {
      const response = await fetch("/api/SendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message envoyé avec succès ✅");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        setStatus("Erreur lors de l’envoi du message. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Une erreur est survenue. Vérifiez votre connexion.");
    }
  };

  return (
    <section
      id="Contact"
      className="relative overflow-hidden section-cream px-6 py-20 sm:py-24 lg:py-28"
    >
      {/* Grain léger comme les autres sections */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-4 py-2 soft-shadow"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/5">
              <Sparkles className="h-3.5 w-3.5 text-black/60" />
            </span>
            <span className="text-xs font-medium text-black/70">
              Contact — parlons de votre projet
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mt-5 font-display text-[40px] leading-[0.98] sm:text-[54px] lg:text-[64px] text-black"
          >
            Contactez-<span className="italic">moi</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mt-4 mx-auto max-w-2xl text-sm sm:text-base text-black/65 leading-7"
          >
            Besoin d’un site moderne, d’une refonte, d’un espace client ou d’un
            projet Next.js ? Envoyez-moi quelques détails : je reviens vers vous
            avec des solutions claires et concrètes.
          </motion.p>
        </div>

        {/* Layout */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr,1.55fr] items-stretch">
          {/* Left: pitch / image */}
          <motion.aside
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[32px] border border-black/10 bg-white/55 backdrop-blur p-6 sm:p-7 soft-shadow"
          >
            <div className="relative overflow-hidden rounded-[26px] h-52 sm:h-64">
              <Image
                src="/images/contact.jpg"
                alt="Illustration contact"
                fill
                priority
                className="object-cover"
              />
              {/* Overlay doux (pas néon) */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/10 to-transparent" />
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(255,170,200,0.22),transparent_55%)]" />

              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] sm:text-[11px] text-black/55 uppercase tracking-[0.18em]">
                  UI propre · perf · SEO
                </p>
                <p className="mt-1 text-xs sm:text-sm text-black/75">
                  Design élégant, code clair, et une approche orientée résultats.
                </p>
              </div>
            </div>

            <h3 className="mt-6 font-sans text-lg sm:text-xl font-extrabold text-black/85">
              Travailler avec une développeuse qui comprend le terrain.
            </h3>

            <p className="mt-3 text-sm text-black/65 leading-7">
              Je conçois des sites et applications sur-mesure avec Next.js, React,
              TypeScript et Tailwind — en pensant UX, performance et crédibilité
              de votre image.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Site vitrine moderne & responsive",
                "Refonte d’un site lent / daté",
                "Intégration Next.js / API / formulaires",
                "Design cohérent avec votre identité",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3"
                >
                  <div className="text-sm font-semibold text-black/70">{t}</div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[11px] text-black/45">
              Dites-moi votre objectif + vos contraintes : je traduis ça en solution
              concrète.
            </p>
          </motion.aside>

          {/* Right: form */}
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[32px] border border-black/10 bg-white/55 backdrop-blur p-6 sm:p-7 soft-shadow"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* row 1 */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  label="Prénom *"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  icon={User}
                  required
                />
                <Field
                  label="Nom *"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  icon={User}
                  required
                />
              </div>

              <Field
                label="Entreprise / projet (optionnel)"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nom de votre entreprise ou projet"
                icon={Building2}
              />

              <Field
                label="Email *"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                icon={Mail}
                required
              />

              <Field
                label="Téléphone (optionnel)"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Pour un échange plus rapide"
                icon={Phone}
              />

              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
                  Votre message *
                </label>

                <div className="mt-2 rounded-2xl border border-black/10 bg-white/70 focus-within:bg-white transition">
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Parlez-moi de votre activité, du type de site souhaité, des fonctionnalités, du timing, du budget estimé..."
                    className="w-full bg-transparent px-4 py-3 text-sm text-black/80 placeholder:text-black/35 outline-none"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
                >
                  Envoyer 🚀
                </motion.button>

                {status && (
                  <p className="text-xs text-center text-black/65">{status}</p>
                )}

                <p className="text-[10px] text-center text-black/45">
                  Vos informations ne seront utilisées que pour répondre à votre demande.
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bas */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <div className="h-px w-44 soft-divider" />
          <p className="text-xs sm:text-sm text-black/55 text-center max-w-2xl">
            Réponse rapide, communication claire, et une solution alignée à vos objectifs.
          </p>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  icon: Icon,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  icon: React.ComponentType<{ className: string }>;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
        {label}
      </label>

      <div className="mt-2 flex items-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 focus-within:bg-white transition">
        <Icon className="h-4 w-4 text-black/45" />
        <input
          required={required}
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-black/80 placeholder:text-black/35 outline-none"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
