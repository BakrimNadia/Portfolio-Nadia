"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

type AccordionProps = {
  title: string;
  content: string;
};

const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-sky-300 backdrop-blur-md mb-2 overflow-hidden">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 text-left"
      >
        {/* Titre + label accordéon */}
        <div className="flex items-center gap-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-500 text-[10px] text-gray-500">
            +
          </span>
          <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-sky-400 bg-clip-text text-sm sm:text-base font-semibold text-transparent">
            {title}
          </span>
        </div>

        {/* Icône chevron animée */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-center"
        >
          <ChevronDown
            size={18}
            className="text-gray-500 drop-shadow-[0_0_6px_rgba(236,72,153,0.7)]"
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden px-4 sm:px-5 pb-3 sm:pb-4"
          >
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Description() {
  return (
    <section className="w-full mt-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
        {/* Header */}
        <div className="text-center mb-8">

          <p className="mt-2 text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto">
            Explorez chaque domaine pour découvrir comment je transforme vos besoins
            en solutions digitales claires, modernes et efficaces.
          </p>
        </div>

        {/* Layout : image + accordéon */}
        <div className="grid gap-6 lg:grid-cols-[1.1fr,1.6fr] items-start">
          {/* Image / Illustration avec effet néon */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full h-64 sm:h-72 lg:h-72 rounded-3xl my-10 overflow-hidden border border-white/8 bg-black/70 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.9)]"
          >
            <Image
              src="/images/design2.jpg" // 🔁 remplace par ton visuel (setup code / néon / laptop)
              alt="Développeuse web travaillant sur une interface moderne."
              fill
              className="object-cover opacity-90"
            />
            {/* Overlay néon */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.18),_transparent_65%)]" />
            {/* Texte overlay */}
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-[9px] sm:text-[10px] text-rose-200/90 uppercase tracking-[0.18em]">
                Front-end • Back-end • Design UX • Conception 
              </p>
              <p className="mt-1 text-[10px] sm:text-xs text-gray-200/95">
                Une approche globale : technique, esthétique & orientée résultats.
              </p>
            </div>
          </motion.div>

          {/* Accordéon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="space-y-2"
          >
            <Accordion
              title="Développement Front-End"
              content="Création d’interfaces modernes et performantes avec React, Next.js et Tailwind CSS, tout en optimisant le rendu, le SEO et l’accessibilité."
            />
            <Accordion
              title="Développement Back-End"
              content="Conception d’API sécurisées avec Node.js et Express, gestion des bases de données relationnelles avec PostgreSQL et Sequelize, et mise en place d’authentification sécurisée."
            />
            <Accordion
              title="Tests et Qualité de Code"
              content="Réalisation de tests unitaires avec Mocha & Chai, validation des routes API avec Insomnia, et maintien d’un code propre grâce à ESLint et Prettier."
            />
            <Accordion
              title="Méthodologies de Travail & Collaboration"
              content="Utilisation des méthodes Agile (Scrum, Kanban), conception de cahiers des charges, gestion du versioning avec Git & GitHub, travail seule ou en équipe / pair-programming et communication efficace via Slack, Discord."
            />
            <Accordion
              title="Conception et Modélisation"
              content="Analyse et structuration des bases de données avec la méthode Merise, création de diagrammes via Draw.io / Looping, et élaboration de cahiers des charges précis."
            />
            <Accordion
              title="Design & Expérience Utilisateur"
              content="Conception de maquettes et prototypes interactifs avec Figma, création de supports visuels avec Canva, et amélioration de l’UX/UI pour une meilleure accessibilité."
            />
            <Accordion
              title="Soft Skills & Mindset"
              content="Autonome et flexible, je fais preuve d’une forte capacité d’analyse et de résolution de problèmes, tout en restant en veille technologique constante pour répondre efficacement aux besoins des clients."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
