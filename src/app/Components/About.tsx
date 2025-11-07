"use client";

import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import {
  Camera,
  ClipboardPenLine,
  Globe,
  LaptopMinimalCheck,
  MessageCircle,
  Smile,
} from "lucide-react";
import React from "react";

const scrollToAbout = () => {
  const section = document.getElementById("About");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function About() {
  return (
    <section
      id="About"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 sm:py-24 lg:py-28 font-mono overflow-hidden"
    >
      {/* Glow arrière-plan */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl opacity-70"
      >
        <div className="relative left-1/2 aspect-[1108/632] w-[72rem] -translate-x-1/2 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.28),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_65%)]" />
      </div>

      {/* Badge + titre principal */}
      <div className="text-center mb-4" onMouseEnter={scrollToAbout}>
        <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/40  px-4 py-1 shadow-[0_0_18px_rgba(244,63,94,0.35)]">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-[10px] tracking-[0.22em] uppercase text-rose-300">
            Développeuse Web • Full Stack JavaScript
          </span>
        </div>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-3 bg-gradient-to-r from-rose-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
        Portfolio
      </h1>

      <h2 className="mb-10 text-xl sm:text-2xl font-semibold text-rose-400">
        À propos de moi
      </h2>

      {/* Conteneur des cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl w-full mb-6">
        {/* Carte 1 */}
        <div className="flex justify-center mx-2">
          <NeonGradientCard className="w-full h-full items-stretch justify-start text-left transform transition-all duration-500 hover:scale-[1.02]">
            <div className="flex flex-col gap-4">
              {/* En-tête icône + titre */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl border border-rose-400/40 shadow-[0_0_18px_rgba(244,63,94,0.5)]">
                  <MessageCircle
                    size={30}
                    className="text-pink-500 drop-shadow-[0_0_10px_rgb(255,105,180)]"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#ff2975] via-[#ff7ac4] to-[#00FFF1] bg-clip-text text-transparent text-center">
                  Parcours, management & relation humaine
                </h3>
              </div>

              {/* Texte conservé */}
              <p className="text-sm sm:text-base text-gray-900 leading-relaxed text-justify">
                Issue d’un cursus universitaire Licence en AES (Administration
                Économique et Sociale) spécialisée en management, j’ai commencé ma
                carrière professionnelle dans des secteurs aussi dynamiques que la
                grande distribution et le transport. Ces expériences m’ont permis de
                développer des compétences en gestion, en organisation, et en
                relation client, tout en cultivant une rigueur et une capacité
                d’adaptation précieuses.
              </p>

              {/* Icône + bloc suivant */}
              <div className="flex flex-col items-center gap-3 mt-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-rose-400/30 shadow-[0_0_12px_rgba(244,63,94,0.38)]">
                  <Globe
                    size={26}
                    className="text-pink-500 drop-shadow-[0_0_10px_rgb(255,105,180)]"
                  />
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-900 leading-relaxed text-justify">
                Cependant, ma passion pour les nouvelles technologies et le
                développement web a toujours été un moteur dans ma vie. Curieuse et
                créative de nature, j’ai décidé de suivre ma vocation en me
                reconvertissant dans le domaine du développement web.
              </p>

              <div className="flex flex-col items-center gap-3 mt-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-rose-400/30 shadow-[0_0_12px_rgba(244,63,94,0.38)]">
                  <ClipboardPenLine
                    size={26}
                    className="text-pink-500 drop-shadow-[0_0_10px_rgb(255,105,180)]"
                  />
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-900 leading-relaxed text-justify">
                Pour concrétiser ce projet, j’ai intégré l’école O’clock où j’ai
                suivi une formation intensive de développeur web Full Stack
                JavaScript. Cette expérience immersive m’a permis d’acquérir des
                bases solides en programmation, de maîtriser les technologies
                front-end et back-end, et de mener à bien des projets concrets dans
                un environnement collaboratif.
              </p>
            </div>
          </NeonGradientCard>
        </div>

        {/* Carte 2 */}
        <div className="flex justify-center mx-2">
          <NeonGradientCard className="w-full h-full items-stretch justify-start text-left transform transition-all duration-500 hover:scale-[1.02]">
            <div className="flex flex-col gap-4">
              {/* En-tête icône + titre */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl border border-rose-400/40 shadow-[0_0_18px_rgba(244,63,94,0.5)]">
                  <LaptopMinimalCheck
                    size={30}
                    className="text-pink-500 drop-shadow-[0_0_10px_rgb(255,105,180)]"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#ff2975] via-[#ff7ac4] to-[#00FFF1] bg-clip-text text-transparent text-center">
                  Autodidacte, créativité & vision globale
                </h3>
              </div>

              {/* Texte conservé */}
              <p className="text-sm sm:text-base text-gray-900 leading-relaxed text-justify">
                En parallèle de cette formation, je me suis également investie en
                autodidacte pour approfondir mes connaissances. Je me suis formée à
                des frameworks modernes, à des outils de design comme Figma et
                Canva, et j’ai exploré des méthodologies et pratiques qui enrichissent
                mes compétences en conception et développement de projets web.
              </p>

              <div className="flex flex-col items-center gap-3 mt-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-rose-400/30 shadow-[0_0_12px_rgba(244,63,94,0.38)]">
                  <Camera
                    size={26}
                    className="text-pink-500 drop-shadow-[0_0_10px_rgb(255,105,180)]"
                  />
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-900 leading-relaxed text-justify">
                Enfin, au-delà de mon attrait pour le code, je suis passionnée par la
                photographie, un domaine qui stimule ma créativité et me pousse à
                toujours chercher à capturer des instants uniques, que ce soit dans
                la nature ou dans la vie quotidienne.
              </p>

              <div className="flex flex-col items-center gap-3 mt-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-rose-400/30 shadow-[0_0_12px_rgba(244,63,94,0.38)]">
                  <Smile
                    size={26}
                    className="text-pink-500 drop-shadow-[0_0_10px_rgb(255,105,180)]"
                  />
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-900 leading-relaxed text-justify">
                Aujourd’hui, je suis pleinement épanouie dans ce nouveau chapitre de
                ma vie professionnelle et prête à relever des défis en tant que
                développeuse web Full Stack. Mon objectif est de créer des solutions
                innovantes, fonctionnelles et esthétiques tout en continuant d’apprendre
                et d’évoluer dans ce domaine passionnant.
              </p>
            </div>
          </NeonGradientCard>
        </div>
      </div>

      {/* Ligne décorative + micro phrase */}
      <div className="mt-4 flex flex-col items-center gap-2">
        <div className="h-px w-40 bg-gradient-to-r from-transparent via-rose-500/70 to-transparent" />
        <p className="text-[10px] sm:text-xs text-gray-400 text-center">
          Une approche humaine + un stack moderne : la combinaison idéale pour vos projets web.
        </p>
      </div>
    </section>
  );
}
