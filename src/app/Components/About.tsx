"use client";

import React from "react";

export default function About() {
  return (
    <div
      id="About"
      className="relative flex flex-col items-center justify-start min-h-screen bg-cover bg-center p-4"
      style={{
        backgroundImage: "url('/images/grey-04.jpg')", 
      }}
    >
      {/* Titre principal */}
      <h1 className="text-4xl font-bold mb-8 text-center text-rose-500 text-opacity-80 px-6 py-3">
      Bienvenue sur mon Portfolio
      </h1>
      <h2 className="mb-10 text-2xl font-bold text-gray-900">À propos de moi</h2>

      {/* Contenu des cadres */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        {/* Premier cadre */}
        <div
          className="mx-2 bg-white bg-opacity-80 rounded-xl shadow-lg p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <p className="text-lg leading-relaxed text-justify">
            Issue d’un cursus universitaire Licence en AES (Administration Économique et Sociale) spécialisée en management, j’ai commencé ma carrière professionnelle dans des secteurs aussi dynamiques que la grande distribution et le transport. Ces expériences m’ont permis de développer des compétences en gestion, en organisation, et en relation client, tout en cultivant une rigueur et une capacité d’adaptation précieuses.
            <br />
            <br />
            Cependant, ma passion pour les nouvelles technologies et le développement web a toujours été un moteur dans ma vie. Curieuse et créative de nature, j’ai décidé de suivre ma vocation en me reconvertissant dans le domaine du développement web. 
            <br />
            <br />
            Pour concrétiser ce projet, j’ai intégré l’école O’clock où j’ai suivi une formation intensive de développeur web Full Stack JavaScript. Cette expérience immersive m’a permis d’acquérir des bases solides en programmation, de maîtriser les technologies front-end et back-end, et de mener à bien des projets concrets dans un environnement collaboratif.
          </p>
        </div>

        {/* Deuxième cadre */}
        <div
          className="mx-2 bg-white bg-opacity-80 rounded-xl shadow-lg p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <p className="text-lg leading-relaxed text-justify">
            En parallèle de cette formation, je me suis également investie en autodidacte pour approfondir mes connaissances. Je me suis formée à des frameworks modernes, à des outils de design comme Figma et Canva, et j’ai exploré des méthodologies et pratiques qui enrichissent mes compétences en conception et développement de projets web.
            <br />
            <br />
            Enfin, au-delà de mon attrait pour le code, je suis passionnée par la photographie, un domaine qui stimule ma créativité et me pousse à toujours chercher à capturer des instants uniques, que ce soit dans la nature ou dans la vie quotidienne.
            <br />
            <br />
            Aujourd’hui, je suis pleinement épanouie dans ce nouveau chapitre de ma vie professionnelle et prête à relever des défis en tant que développeuse web Full Stack. Mon objectif est de créer des solutions innovantes, fonctionnelles et esthétiques tout en continuant d’apprendre et d’évoluer dans ce domaine passionnant.
          </p>
        </div>
      </div>
    </div>
  );
}
