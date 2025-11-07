import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { IconCloud } from "../../components/ui/icon-cloud";
import MyFile from "./MyFile";
import Description from "./Description";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
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
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section
      id="Skills"
      className="container mx-auto px-4 py-16 font-mono"
    >
      {/* Titre + sous-titre */}
      <div className="text-center mb-8">
        <h2
          className="text-4xl sm:text-5xl font-extrabold relative inline-block p-3 mb-3 gradient-text"
          onMouseEnter={scrollToSkills}
        >
          Mes compétences
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
          Un stack moderne orienté performance, expérience utilisateur
          et bonnes pratiques, pour des projets solides en production.
        </p>
      </div>

      {/* IconCloud */}
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-xl mx-auto mb-10 p-6">
        <IconCloud images={images} />
      </div>

      {/* Cartes compétences */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Frontend */}
        <NeonGradientCard className="w-full h-full items-start justify-start text-left transform transition-all duration-500 hover:scale-105">
          <h3 className="pointer-events-none z-10 bg-gradient-to-br from-[#ff2975] via-[#ff7ac4] to-[#00FFF1] bg-clip-text text-xl font-semibold tracking-tight text-transparent">
            Frontend moderne
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-gray-700 font-medium">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Next.js (App Router)</li>
            <li>HTML5 sémantique</li>
          </ul>
        </NeonGradientCard>

        {/* UI / Design system */}
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

        {/* Backend & Data */}
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

        {/* Outils & DevOps light */}
        <NeonGradientCard className="w-full h-full items-start justify-start text-left transform transition-all duration-500 hover:scale-105">
          <h3 className="pointer-events-none z-10 bg-gradient-to-br from-[#ff2975] via-[#ff7ac4] to-[#00FFF1] bg-clip-text text-xl font-semibold tracking-tight text-transparent">
            Outils & productivité
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-gray-700 font-medium">
            <li>Git & GitHub</li>
            <li>Visual Studio Code</li>
            <li>Figma</li>
            <li>Canva</li>
            <li>Monitoring qualité (SonarQube, etc.)</li>
          </ul>
        </NeonGradientCard>

        {/* Hébergement & workflow projet */}
        <NeonGradientCard className="w-full h-full items-start justify-start text-left transform transition-all duration-500 hover:scale-105">
          <h3 className="pointer-events-none z-10 bg-gradient-to-br from-[#ff2975] via-[#ff7ac4] to-[#00FFF1] bg-clip-text text-xl font-semibold tracking-tight text-transparent">
            Déploiement & workflow
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-gray-700 font-medium">
            <li>Méthodes agiles / Scrum</li>
            <li>Vercel, Render</li>
            <li>Trello, Jira</li>
            <li>CI/CD basique</li>
          </ul>
        </NeonGradientCard>

        {/* Collaboration & Modélisation */}
        <NeonGradientCard className="w-full h-full items-start justify-start text-left transform transition-all duration-500 hover:scale-105">
          <h3 className="pointer-events-none z-10 bg-gradient-to-br from-[#ff2975] via-[#ff7ac4] to-[#00FFF1] bg-clip-text text-xl font-semibold tracking-tight text-transparent">
            Collaboration & Modélisation
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-gray-700 font-medium">
            <li>Discord, Slack</li>
            <li>MCD / MLD / MPD</li>
            <li>Drawio</li>
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
      </div>

      <Description />
    </section>
  );
}
