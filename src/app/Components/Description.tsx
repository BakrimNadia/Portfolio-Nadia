"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

type AccordionProps = {
  index: string;
  title: string;
  content: string;
};

function AccordionItem({ index, title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-black/10 bg-white/55 backdrop-blur overflow-hidden soft-shadow">
      <button
        onClick={() => setIsOpen((p) => !p)}
        className="w-full flex items-center justify-between gap-4 px-4 py-4 sm:px-5 text-left"
      >
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl border border-black/10 bg-white/70 text-[11px] font-semibold text-black/55">
            {index}
          </span>

          <div>
            <div className="text-sm sm:text-base font-extrabold text-black/80">
              {title}
            </div>
            <div className="text-xs text-black/50 mt-1">
              Cliquez pour découvrir
            </div>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          className="flex items-center justify-center"
        >
          <ChevronDown size={18} className="text-black/55" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-4">
              <div className="h-px w-full soft-divider mb-4" />
              <p className="text-xs sm:text-sm text-black/65 leading-7 text-justify">
                {content}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Description() {
  return (
    <section className="w-full mt-10">
      <div className="mx-auto max-w-7xl px-0">
        <div className="grid gap-8 lg:grid-cols-[1.05fr,1.55fr] items-start">
          {/* Image / bloc premium */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative rounded-[32px] border border-black/10 bg-white/55 backdrop-blur p-3 soft-shadow"
          >
            <div className="relative overflow-hidden rounded-[26px] h-64 sm:h-72 lg:h-[420px]">
              <Image
                src="/images/pc-2.jpg"
                alt="Illustration : design & développement."
                fill
                className="object-cover"
              />
              {/* overlay doux, pas néon */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent" />
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(255,170,200,0.22),transparent_55%)]" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] sm:text-[11px] text-black/55 uppercase tracking-[0.18em]">
                  Front • Back • UX • Conception
                </p>
                <p className="mt-1 text-xs sm:text-sm text-black/70">
                  Une approche globale : technique, esthétique & orientée résultats.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Accordéon */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="space-y-3"
          >
            <p className="text-xs sm:text-sm text-black/55 max-w-2xl">
              Explorez chaque domaine pour découvrir comment je transforme vos besoins
              en solutions digitales claires, modernes et efficaces.
            </p>

            <AccordionItem
              index="01"
              title="Développement Front-End"
              content="Création d’interfaces modernes et performantes avec React, Next.js et Tailwind CSS, tout en optimisant le rendu, le SEO et l’accessibilité."
            />
            <AccordionItem
              index="02"
              title="Développement Back-End"
              content="Conception d’API sécurisées avec Node.js et Express, gestion des bases de données relationnelles avec PostgreSQL et Sequelize, et mise en place d’authentification sécurisée."
            />
            <AccordionItem
              index="03"
              title="Tests et Qualité de Code"
              content="Validation des routes API, maintien d’un code propre (ESLint/Prettier), et bonnes pratiques pour éviter les régressions."
            />
            <AccordionItem
              index="04"
              title="Méthodologies & Collaboration"
              content="Agile (Scrum/Kanban), cahiers des charges, versioning Git/GitHub, pair-programming, et communication efficace."
            />
            <AccordionItem
              index="05"
              title="Conception & Modélisation"
              content="Analyse et structuration des bases de données (Merise), diagrammes via Draw.io/Looping, et cadrage fonctionnel clair."
            />
            <AccordionItem
              index="06"
              title="Design & Expérience Utilisateur"
              content="Maquettes et prototypes Figma, supports Canva, amélioration UX/UI pour une meilleure lisibilité, hiérarchie et accessibilité."
            />
            <AccordionItem
              index="07"
              title="Soft Skills & Mindset"
              content="Autonomie, adaptabilité, esprit d’analyse, résolution de problèmes, et veille technologique pour répondre efficacement aux besoins."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
