"use client";

import Anim from "./Anim";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";

const callouts = [
  {
    name: "Jshabitat",
    description:
      "Projet Freelance - Front : React.js, Next.js, Tailwind CSS • Back : Node.js - PostgreSQL • Déploiement : Vercel - Render • Méthode : Scrum.",
    imageSrc: "/images/jshabitat.png",
    imageAlt: "Site Pour agence immobilière.",
    href: "https://www.jshabitat.com/",
  },
  {
    name: "Aldex",
    description:
      "Projet Freelance - Front : React.js, Next.js, Tailwind CSS • Back : Node.js • Déploiement : Vercel • Méthode : Scrum.",
    imageSrc: "/images/aldex.png",
    imageAlt: "Site Pour Diagnostic immobilier.",
    href: "https://aldex-eight.vercel.app/",
  },
  {
    name: "Acsy",
    description:
      "Projet Freelance - Front : React.js, Next.js, Tailwind CSS • Back : Node.js • Déploiement : Vercel • Méthode : Scrum.",
    imageSrc: "/images/acsy1.png",
    imageAlt: "Site Pour bureau d'études diagnostiques.",
    href: "https://www.acsy.fr/",
  },
  {
    name: "Eden plomberie",
    description:
      "Projet Freelance - Front : React.js, Next.js,Tailwind CSS • Back : Node.js • Déploiement : Vercel • Méthode : Scrum.",
    imageSrc: "/images/plomberie.png",
    imageAlt: "Site pour une entreprise de plomberie.",
    href: "https://www.eden-plomberie.fr/",
  },
  {
    name: "Ecoptimhome",
    description:
      "Projet Freelance - Front : React.js, Next.js, Tailwind CSS • Back : Node.js • Déploiement : Vercel • Méthode : Scrum.",
    imageSrc: "/images/ecoptimhome.png",
    imageAlt: "Site pour une entreprise de diagnostic immobilier.",
    href: "https://www.ecoptimhome.fr/",
  },
  {
    name: "Comparatif IA",
    description:
      "Projet personel. Front : React.js, Next.js, Tailwind CSS • Back : Node.js • Déploiement : Vercel • Méthode : Scrum.",
    imageSrc: "/images/comparatif.png",
    imageAlt: "Site comparatif des différentes IA actuelles.",
    href: "https://comparatifia.vercel.app/",
  },
   {
    name: "Organo-gold",
    description:
      "Site vitrine pour services de conciergerie . Next.js • Tailwind CSS • Déploiement : Vercel.",
    imageSrc: "/images/organo.png",
    imageAlt: "Site vitrine conciergerie.",
    href: "https://organo-gold-nu.vercel.app/",
  },
  {
    name: "Gazette des collègues",
    description:
      "Projet Full Stack solo. Next.js, Tailwind, NextUI • Node.js, Express.js • PostgreSQL • Déploiement : Vercel - Render.",
    imageSrc: "/images/gazette2.png",
    imageAlt: "Site full stack gazette d'entreprise.",
    href: "https://gazette-des-collegues.vercel.app/",
  },
  {
    name: "Sissi Pro Services",
    description:
      "Site vitrine pour services Nettoyage et Assistance administrative. Next.js • Tailwind CSS • Déploiement : Vercel.",
    imageSrc: "/images/sissi.png",
    imageAlt: "Site vitrine nettoyage et assistance administrative.",
    href: "https://sissiproservices.fr/",
  },
  {
    name: "Su Sushi",
    description:
      "Site vitrine de restaurant. Next.js • Tailwind CSS • Déploiement : Vercel.",
    imageSrc: "/images/su-sushi.png",
    imageAlt: "Site vitrine de restaurant sushi.",
    href: "https://su-sushi-bakrim-nadias-projects.vercel.app/",
  },
  {
    name: "Dress-shop",
    description:
      "Mock e-commerce mode femme. Next.js • Tailwind CSS • Déploiement : Vercel.",
    imageSrc: "/images/dressing.png",
    imageAlt: "Site démonstratif type e-commerce.",
    href: "https://dressing-shop-one.vercel.app/",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.08 * i, ease: "easeOut" },
  }),
};

const scrollToProjects = () => {
  document.getElementById("Projects")?.scrollIntoView({ behavior: "smooth" });
};

function getTags(desc: string) {
  const d = desc.toLowerCase();
  const tags: string[] = [];

  if (d.includes("freelance")) tags.push("Freelance");
  if (d.includes("personel") || d.includes("personnel")) tags.push("Perso");
  if (d.includes("full stack")) tags.push("Full Stack");
  if (d.includes("wordpress")) tags.push("WordPress");
  if (d.includes("next.js")) tags.push("Next.js");
  if (d.includes("node.js")) tags.push("Node.js");

  // limiter à 3 pour garder clean
  return Array.from(new Set(tags)).slice(0, 3);
}

function ProjectCard({
  name,
  description,
  imageSrc,
  imageAlt,
  href,
  index,
}: {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  index: number;
}) {
  const tags = getTags(description);

  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative overflow-hidden rounded-[32px] border border-black/10 bg-white/55 backdrop-blur soft-shadow"
    >
      {/* glow doux au hover */}
      <div className="pointer-events-none absolute -inset-24 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute left-1/2 top-0 h-48 w-72 -translate-x-1/2 rounded-full bg-rose-200/35 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-44 w-64 rounded-full bg-amber-200/25 blur-3xl" />
      </div>

      {/* image */}
      <div className="relative p-3">
        <div className="relative h-44 w-full overflow-hidden rounded-[26px]">
    <Image
      src={imageSrc}
      alt={imageAlt}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      className="object-cover transition duration-700 group-hover:scale-[1.04]"
      loading="lazy"
    />

    {/* overlay soft */}
    <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/5 to-transparent opacity-70" />
  </div>
      </div>

      {/* contenu */}
      <div className="px-6 pb-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-sans text-lg sm:text-xl font-extrabold text-black/85">
            {name}
          </h3>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black/70 hover:text-black hover:bg-white transition"
            aria-label={`Ouvrir ${name}`}
          >
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* tags */}
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[11px] text-black/55"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <p className="mt-4 text-[12px] sm:text-sm text-black/65 leading-6">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs text-black/45">
            UI propre · perf · SEO
          </span>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-xs font-semibold text-white hover:opacity-90 transition"
          >
            Voir le site
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="Projects"
      className="relative overflow-hidden section-cream px-6 py-20 sm:py-24 lg:py-28"
    >
      {/* grain léger */}
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
            onMouseEnter={scrollToProjects}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-4 py-2 soft-shadow"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/5">
              <Sparkles className="h-3.5 w-3.5 text-black/60" />
            </span>
            <span className="text-xs font-medium text-black/70">
              Projets — sélection clients & perso
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
            Mes <span className="italic">projets</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mt-4 mx-auto max-w-2xl text-sm sm:text-base text-black/65 leading-7"
          >
            Une sélection de projets Full Stack & Front-end qui illustrent ma maîtrise
            de Next.js, Node.js, Tailwind et des enjeux réels clients.
          </motion.p>
        </div>

        {/* Anim (encadré soft) */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative mx-auto mt-10 mb-12 max-w-xl rounded-[32px] border border-black/10 bg-white/55 backdrop-blur p-4 soft-shadow"
        >
          <div className="relative overflow-hidden rounded-[26px]">
            <Anim />
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {callouts.map((c, idx) => (
            <ProjectCard key={c.name} {...c} index={idx} />
          ))}
        </div>

        {/* Bas */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <div className="h-px w-44 soft-divider" />
          <p className="text-xs sm:text-sm text-black/55 text-center max-w-2xl">
            Chaque interface est pensée pour être rapide, claire, maintenable et
            alignée avec les objectifs métier.
          </p>
        </div>
      </div>
    </section>
  );
}
