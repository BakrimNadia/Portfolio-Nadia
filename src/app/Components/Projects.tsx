"use client";

import Anim from "./Anim";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

const callouts = [

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
    name: "Gazette des collègues",
    description:
      "Projet Full Stack solo. Next.js, Tailwind, NextUI • Node.js, Express.js • PostgreSQL • Déploiement : Vercel.",
    imageSrc: "/images/gazette2.png",
    imageAlt: "Site full stack gazette d'entreprise.",
    href: "https://gazette-des-collegues.vercel.app/",
  },
  {
    name: "Nadia Beauty",
    description:
      "Site vitrine moderne pour institut de beauté. Next.js • Tailwind CSS • Déploiement : Vercel.",
    imageSrc: "/images/beauty2.png",
    imageAlt: "Site vitrine institut de beauté.",
    href: "https://nadiabeauty.vercel.app/",
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
  {
    name: "My-meteo",
    description:
      "App météo par ville. Next.js • Tailwind CSS • Déploiement : Vercel.",
    imageSrc: "/images/meteo.png",
    imageAlt: "Site d'affichage météorologique.",
    href: "https://my-meteo-fawn.vercel.app/",
  },
  {
    name: "Organogold",
    description:
      "Projet Freelance - Front : WordPress - Elementor • Déploiement : Wordpress • Méthode : Scrum.",
    imageSrc: "/images/organogold.png",
    imageAlt: "Site pour une entreprise de conciergerie.",
    href: "https://www.organo-gold.fr/",
  },
  {
    name: "Fur-ever-home",
    description:
      "Projet Full Stack en équipe - rôle Scrum Master. Front : React.js, Next.js, NextUI • Back : Node.js, Express.js • DB : PostgreSQL • Déploiement : Vercel • Méthode : Scrum.",
    imageSrc: "/images/fureverhome.png",
    imageAlt: "Site Full Stack pour gestion de refuge animalier.",
    href: "https://projet-fur-ever-home-front.vercel.app/",
  },
];

const scrollToProjects = () => {
  const section = document.getElementById("Projects");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Projects() {
  return (
    <section
      id="Projects"
      className="relative w-full py-20 sm:py-24 lg:py-28 font-mono overflow-hidden"
    >
      {/* Glow background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl opacity-60"
      >
        <div className="relative left-1/2 aspect-[1108/632] w-[72rem] -translate-x-1/2 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.25),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_65%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-100">
        {/* Header */}
        <div className="text-center">
          <h2
            className="text-4xl sm:text-5xl font-extrabold relative inline-block p-3 gradient-text"
            onMouseEnter={scrollToProjects}
          >
            Mes Projets
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Une sélection de projets Full Stack & Front-end qui illustrent ma maîtrise
            de Next.js, Node.js, Tailwind et des enjeux réels clients.
          </p>
        </div>

        {/* Animation */}
        <div className="relative flex max-w-lg items-center justify-center overflow-hidden rounded-2xl mx-auto mt-8 mb-10">
          <Anim />
        </div>

        {/* Grid projets */}
        <div className="mx-auto max-w-6xl">
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {callouts.map((callout) => (
              <NeonGradientCard
                key={callout.name}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-black/90 backdrop-blur-md border border-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.85)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]"
                borderRadius={26}
                borderSize={2}
                neonColors={{
                  firstColor: "#ff00aa",
                  secondColor: "#00FFF1",
                }}
              >
                {/* Image + overlay */}
                <div className="relative w-full overflow-hidden rounded-2xl mb-4">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="absolute bottom-3 left-3 text-[10px] px-2 py-1 rounded-full bg-black/70 border border-rose-200/30 text-rose-100">
                    Next.js • Tailwind • Prod-ready
                  </div>
                </div>

                {/* Titre */}
                <h3 className="px-2 text-lg sm:text-xl font-semibold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent text-center">
                  {callout.name}
                </h3>

                {/* Description */}
                <p className="mt-2 px-4 pb-3 text-[11px] sm:text-xs text-gray-300 text-center leading-relaxed">
                  {callout.description}
                </p>

                {/* Boutons */}
                <div className="mt-auto flex items-center justify-center gap-3 pb-4 pt-1">
                  <a
                    href={callout.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 text-[11px] sm:text-xs font-semibold text-slate-800 rounded-xl border border-sky-200 bg-gradient-to-r from-rose-200 via-fuchsia-200 to-sky-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Voir le site
                  </a>
                </div>
              </NeonGradientCard>
            ))}
          </div>
        </div>

        {/* Bas de section */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="h-px w-40 bg-gradient-to-r from-transparent via-rose-500/80 to-transparent" />
          <p className="text-[10px] sm:text-xs text-gray-500 text-center">
            Chaque interface est pensée
            pour être rapide, claire, maintenable et alignée avec les objectifs métier.
          </p>
        </div>
      </div>
    </section>
  );
}
