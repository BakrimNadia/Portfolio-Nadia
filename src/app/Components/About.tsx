"use client"

import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import React from "react";


export default function About() {
  return (
    <div
      id="About"
      className="relative flex flex-col items-center justify-start min-h-screen bg-cover bg-center p-4 font-mono">
      {/* Titre principal */}
      <h1 className="text-5xl font-extrabold text-center relative inline-block p-3 mb-4 gradient-text">
          Mon Portfolio
      </h1>
      <h2 className="mb-10 text-2xl font-bold text-white animate-bounce text-rose-500">À propos de moi</h2>

      {/* Contenu des cadres */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full mb-5">
        {/* Premier cadre */}
        <div
          className="p-8 "
        >
            <NeonGradientCard className="max-w-sm items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
              <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">              
              <p className="text-lg font-mono font-medium leading-relaxed text-justify">
                    Issue d’un cursus universitaire Licence en AES (Administration Économique et Sociale) spécialisée en management, j’ai commencé ma carrière professionnelle dans des secteurs aussi dynamiques que la grande distribution et le transport. Ces expériences m’ont permis de développer des compétences en gestion, en organisation, et en relation client, tout en cultivant une rigueur et une capacité d’adaptation précieuses.
                    <br />
                    <br />
                    Cependant, ma passion pour les nouvelles technologies et le développement web a toujours été un moteur dans ma vie. Curieuse et créative de nature, j’ai décidé de suivre ma vocation en me reconvertissant dans le domaine du développement web. 
                    <br />
                    <br />
                    Pour concrétiser ce projet, j’ai intégré l’école O’clock où j’ai suivi une formation intensive de développeur web Full Stack JavaScript. Cette expérience immersive m’a permis d’acquérir des bases solides en programmation, de maîtriser les technologies front-end et back-end, et de mener à bien des projets concrets dans un environnement collaboratif.
                  </p>
              </span>
            </NeonGradientCard>
        </div>

        {/* Deuxième cadre */}
        <div
          className="p-8"
        >

<NeonGradientCard className="max-w-sm items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
      <p className="text-lg font-mono font-medium leading-relaxed text-justify">
            En parallèle de cette formation, je me suis également investie en autodidacte pour approfondir mes connaissances. Je me suis formée à des frameworks modernes, à des outils de design comme Figma et Canva, et j’ai exploré des méthodologies et pratiques qui enrichissent mes compétences en conception et développement de projets web.
            <br />
            <br />
            Enfin, au-delà de mon attrait pour le code, je suis passionnée par la photographie, un domaine qui stimule ma créativité et me pousse à toujours chercher à capturer des instants uniques, que ce soit dans la nature ou dans la vie quotidienne.
            <br />
            <br />
            Aujourd’hui, je suis pleinement épanouie dans ce nouveau chapitre de ma vie professionnelle et prête à relever des défis en tant que développeuse web Full Stack. Mon objectif est de créer des solutions innovantes, fonctionnelles et esthétiques tout en continuant d’apprendre et d’évoluer dans ce domaine passionnant.
          </p>
      </span>
    </NeonGradientCard>
        </div>
      </div>
    </div>
  );
}
