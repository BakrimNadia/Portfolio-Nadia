"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Camera,
  ClipboardPenLine,
  Globe,
  LaptopMinimalCheck,
  MessageCircle,
  Smile,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.08 * i, ease: "easeOut" },
  }),
};

function Pill({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/55 backdrop-blur px-4 py-3 soft-card">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white/70">
          <Icon className="h-4 w-4 text-black/70" />
        </span>
        <div>
          <div className="text-sm font-semibold text-black/80">{title}</div>
          <div className="text-xs leading-5 text-black/60">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  paragraphs,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  paragraphs: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="h-full rounded-[28px] border border-black/10 bg-white/55 backdrop-blur p-6 sm:p-7 soft-card"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white/70">
          <Icon className="h-5 w-5 text-black/70" />
        </span>
        <h3 className="font-sans text-lg sm:text-xl font-semibold text-black/85">
          {title}
        </h3>
      </div>

      <div className="mt-5 space-y-4 text-sm sm:text-[15px] leading-7 text-black/65">
        {paragraphs.map((p, idx) => (
          <p key={idx} className="text-justify">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/65">
          UI sensible
        </span>
        <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/65">
          Code propre
        </span>
        <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/65">
          Collaboration
        </span>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="About"
      className="relative overflow-hidden section-cream px-6 py-20 sm:py-24 lg:py-28"
    >
      {/* Grain léger (optionnel) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Header de section */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-4 py-2 soft-card"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/5">
                <Sparkles className="h-3.5 w-3.5 text-black/60" />
              </span>
              <span className="text-xs font-medium text-black/70">
                À propos — parcours, valeurs & style de travail
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="mt-5 font-display text-[38px] leading-[0.98] sm:text-[52px] lg:text-[60px] text-black"
            >
              Une approche <span className="italic">humaine</span> + un{" "}
              <span className="opacity-90">stack moderne</span>.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="mt-4 max-w-2xl text-sm sm:text-base text-black/65 leading-7"
            >
              J’aime créer des interfaces claires, élégantes et efficaces. Mon
              parcours m’a apporté rigueur, organisation et sens du service — et
              aujourd’hui je mets tout ça au service du web.
            </motion.p>

            {/* Mini-cards “highlights” */}
            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              <Pill
                icon={MessageCircle}
                title="Relation & communication"
                desc="Clarté, écoute, pédagogie — travail fluide avec clients/équipe."
              />
              <Pill
                icon={LaptopMinimalCheck}
                title="Build moderne"
                desc="Next.js / React, composants réutilisables, perf et SEO."
              />
              <Pill
                icon={Globe}
                title="Vision produit"
                desc="Je pense UI/UX + objectifs métier, pas juste du code."
              />
              <Pill
                icon={Camera}
                title="Créativité"
                desc="Sens du cadrage, détail, cohérence visuelle."
              />
            </motion.div>
          </div>

           {/* Image / illustration animée */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-[430px]"
            >
              {/* glow doux */}
              <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-tr from-rose-200/50 via-white/20 to-amber-200/45 blur-2xl" />

              {/* card image */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-[34px] border border-black/10 bg-white/55 backdrop-blur p-3 soft-card"
              >
                <div className="relative overflow-hidden rounded-[28px]">
                  <Image
                    src="/images/pc-about.jpg"
                    alt="Illustration section À propos"
                    width={900}
                    height={900}
                    className="h-[320px] sm:h-[380px] w-full opacity-80 object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* 2 grandes cards (contenu existant, modernisé) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <InfoCard
              icon={ClipboardPenLine}
              title="Parcours, management & relation humaine"
              paragraphs={[
                "Issue d’un cursus universitaire Licence en AES (Administration Économique et Sociale) spécialisée en management, j’ai commencé ma carrière professionnelle dans des secteurs aussi dynamiques que la grande distribution et le transport. Ces expériences m’ont permis de développer des compétences en gestion, en organisation, et en relation client, tout en cultivant une rigueur et une capacité d’adaptation précieuses.",
                "Cependant, ma passion pour les nouvelles technologies et le développement web a toujours été un moteur dans ma vie. Curieuse et créative de nature, j’ai décidé de suivre ma vocation en me reconvertissant dans le domaine du développement web.",
                "Pour concrétiser ce projet, j’ai intégré l’école O’clock où j’ai suivi une formation intensive de développeur web Full Stack JavaScript. Cette expérience immersive m’a permis d’acquérir des bases solides en programmation, de maîtriser les technologies front-end et back-end, et de mener à bien des projets concrets dans un environnement collaboratif.",
              ]}
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            <InfoCard
              icon={Smile}
              title="Autodidacte, créativité & vision globale"
              paragraphs={[
                "En parallèle de cette formation, je me suis également investie en autodidacte pour approfondir mes connaissances. Je me suis formée à des frameworks modernes, à des outils de design comme Figma et Canva, et j’ai exploré des méthodologies et pratiques qui enrichissent mes compétences en conception et développement de projets web.",
                "Enfin, au-delà de mon attrait pour le code, je suis passionnée par la photographie, un domaine qui stimule ma créativité et me pousse à toujours chercher à capturer des instants uniques, que ce soit dans la nature ou dans la vie quotidienne.",
                "Aujourd’hui, je suis pleinement épanouie dans ce nouveau chapitre de ma vie professionnelle et prête à relever des défis en tant que développeuse web Full Stack. Mon objectif est de créer des solutions innovantes, fonctionnelles et esthétiques tout en continuant d’apprendre et d’évoluer dans ce domaine passionnant.",
              ]}
            />
          </motion.div>
        </div>

        {/* Micro phrase de fin (sobre, pas néon) */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="h-px w-44 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
          <p className="text-xs sm:text-sm text-black/55 text-center max-w-2xl">
            Une approche humaine + un stack moderne : la combinaison idéale pour
            vos projets web.
          </p>
        </div>
      </div>
    </section>
  );
}
