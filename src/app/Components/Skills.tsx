"use client";

import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { motion } from "framer-motion";
import MyFile from "./MyFile";
import Description from "./Description";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiGithub,
  SiVercel,
  SiFigma,
  SiCanva,
  SiJira,
} from "react-icons/si";

const techIconComponents = [
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiGithub,
  SiVercel,
  SiFigma,
  SiCanva,
  SiJira,
];


const scrollToSkills = () => {
  const section = document.getElementById("Skills");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToKnowledge = () => {
  const section = document.getElementById("Knowledge");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export function Skills() {
  return (
    <section
      id="Skills"
      className="relative container mx-auto px-4 py-16 font-mono"
    >
      {/* Titre + sous-titre */}
      <div className="text-center mb-8">
        <h2
          className="text-4xl sm:text-5xl font-extrabold relative inline-block p-3 mb-2 gradient-text"
          onMouseEnter={scrollToSkills}
        >
          Mes compétences
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
          Un stack orienté performance, UX et maintenabilité pour livrer des
          projets fiables, modernes et prêts pour la production.
        </p>
      </div>

{/* Ruban animé avec icônes uniquement */}
<div className="relative mb-10">
  {/* halo doux */}
  <div className="pointer-events-none absolute -inset-x-10 top-3 h-16 bg-gradient-to-r from-transparent via-pink-400/10 to-transparent blur-2xl" />

  <div className="overflow-hidden py-4">
    <motion.div
      className="flex gap-8 whitespace-nowrap items-center"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {[...techIconComponents, ...techIconComponents].map((Icon, index) => (
        <div
          key={index}
          className="flex items-center justify-center"
        >
          <Icon
            className="h-8 w-8 sm:h-10 sm:w-10 text-pink-400 opacity-85 hover:opacity-100 transition-transform duration-300 hover:scale-125 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
          />
        </div>
      ))}
    </motion.div>
  </div>
</div>




      {/* Cartes compétences */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <NeonGradientCard className="w-full h-full items-start justify-start text-left transform transition-all duration-500 hover:scale-105">
          <h3 className="pointer-events-none z-10 bg-gradient-to-br from-[#ff2975] via-[#ff7ac4] to-[#00FFF1] bg-clip-text text-xl font-semibold tracking-tight text-transparent">
            Frontend 
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-gray-700 font-medium">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Next.js (App Router)</li>
            <li>HTML5 sémantique</li>
          </ul>
        </NeonGradientCard>

        <NeonGradientCard className="w-full h-full items-start justify-start text-left transform transition-all duration-500 hover:scale-105">
          <h3 className="pointer-events-none z-10 bg-gradient-to-br from-[#ff2975] via-[#ff7ac4] to-[#00FFF1] bg-clip-text text-xl font-semibold tracking-tight text-transparent">
            UI & Design system
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-gray-700 font-medium">
            <li>CSS3 / Responsive</li>
            <li>Tailwind CSS</li>
            <li>NextUI / UI libraries</li>
            <li>Bootstrap, Semantic UI</li>
            <li>Composants réutilisables & animations</li>
          </ul>
        </NeonGradientCard>

        <NeonGradientCard className="w-full h-full items-start justify-start text-left transform transition-all duration-500 hover:scale-105">
          <h3 className="pointer-events-none z-10 bg-gradient-to-br from-[#ff2975] via-[#ff7ac4] to-[#00FFF1] bg-clip-text text-xl font-semibold tracking-tight text-transparent">
            Backend & Base de données
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-gray-700 font-medium">
            <li>Node.js / Express.js</li>
            <li>API REST</li>
            <li>Sequelize / Prisma</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </NeonGradientCard>

        <NeonGradientCard className="w-full h-full items-start justify-start text-left transform transition-all duration-500 hover:scale-105">
          <h3 className="pointer-events-none z-10 bg-gradient-to-br from-[#ff2975] via-[#ff7ac4] to-[#00FFF1] bg-clip-text text-xl font-semibold tracking-tight text-transparent">
            Outils & productivité
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-gray-700 font-medium">
            <li>Git & GitHub</li>
            <li>Visual Studio Code</li>
            <li>Figma</li>
            <li>Canva</li>
            <li>SonarQube & qualité</li>
          </ul>
        </NeonGradientCard>

        <NeonGradientCard className="w-full h-full items-start justify-start text-left transform transition-all duration-500 hover:scale-105">
          <h3 className="pointer-events-none z-10 bg-gradient-to-br from-[#ff2975] via-[#ff7ac4] to-[#00FFF1] bg-clip-text text-xl font-semibold tracking-tight text-transparent">
            Déploiement & workflow
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-gray-700 font-medium">
            <li>Méthodes Agiles / Scrum</li>
            <li>Vercel, Render</li>
            <li>Trello, Jira</li>
            <li>CI/CD basique</li>
          </ul>
        </NeonGradientCard>

        <NeonGradientCard className="w-full h-full items-start justify-start text-left transform transition-all duration-500 hover:scale-105">
          <h3 className="pointer-events-none z-10 bg-gradient-to-br from-[#ff2975] via-[#ff7ac4] to-[#00FFF1] bg-clip-text text-xl font-semibold tracking-tight text-transparent">
            Collaboration & Modélisation
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-gray-700 font-medium">
            <li>Discord, Slack</li>
            <li>MCD / MLD / MPD</li>
            <li>Draw.io</li>
            <li>Communication claire client / équipe</li>
          </ul>
        </NeonGradientCard>
      </div>

      {/* CV + savoir-faire */}
      <div className="flex flex-col gap-6 text-center mt-10">
        <MyFile />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="Knowledge"
          className="mt-12 text-4xl sm:text-5xl font-extrabold relative inline-block p-3 mb-6 gradient-text"
          onMouseEnter={scrollToKnowledge}
        >
          Mon savoir-faire
        </h2>
                  <div className="inline-flex items-center gap-2 rounded-full border border-rose-300 px-4 py-1 shadow-[0_0_18px_rgba(244,63,94,0.35)]">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
            <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-rose-300">
              Soft skills & Hard skills
            </span>
          </div>
      </div>

      <Description />
    </section>
  );
}
