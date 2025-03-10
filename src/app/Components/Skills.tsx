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
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div id="Skills" className="container mx-auto px-4 py-12 font-mono">
       <h2 className="text-5xl font-extrabold text-center relative p-3 mb-4 gradient-text"
          onMouseEnter={scrollToSkills}>
          Mes compétences
      </h2>
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg mx-auto p-6">
      <IconCloud images={images} />
    </div>
     {/* Section compétences */}
     <div className="flex flex-col gap-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           
            <NeonGradientCard className="max-w-sm items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
              <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"></span>
            <ul>
              <li className="text-white font-medium">JavaScript</li>
              <li className="text-white font-medium">TypeScript</li>
              <li className="text-white font-medium">React.js</li>
              <li className="text-white font-medium">Next.js</li>
              <li className="text-white font-medium">HTML5</li>
              </ul>
              </NeonGradientCard>
              <NeonGradientCard className="max-w-sm items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
                <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"></span>
            <ul>
              <li className="text-white font-medium">CSS3</li>
              <li className="text-white font-medium">Tailwind</li>
              <li className="text-white font-medium">Next UI</li>
              <li className="text-white font-medium">Semantic UI</li>
              <li className="text-white font-medium">Bootstrap</li>
            </ul>
            </NeonGradientCard>

           <NeonGradientCard className="max-w-sm items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
                <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"></span>
            <ul>
              <li className="text-white font-medium">Node.js</li>
              <li className="text-white font-medium">Express.js</li>
              <li className="text-white font-medium">Sequelize</li>
              <li className="text-white font-medium">PostgreSQL</li>
              <li className="text-white font-medium">Mongo DB</li>
              </ul>
              </NeonGradientCard>

              <NeonGradientCard className="max-w-sm items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
                <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"></span>
            <ul>
              <li className="text-white font-medium">GitHub</li>
              <li className="text-white font-medium">Visual Studio Code</li>
              <li className="text-white font-medium">Figma</li>
              <li className="text-white font-medium">Canva</li>
            </ul>
            </NeonGradientCard>

        <NeonGradientCard className="max-w-sm items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
                <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"></span>
            <ul>
              <li className="text-white font-medium">Methode agile / Scrum</li>
              <li className="text-white font-medium">Vercel</li>
              <li className="text-white font-medium">Render</li>
              <li className="text-white font-medium">Trello</li>
              </ul>
              </NeonGradientCard>

        <NeonGradientCard className="max-w-sm items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
              <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"></span>
            <ul>
              <li className="text-white font-medium">Drawio</li>
              <li className="text-white font-medium">Discord</li>
              <li className="text-white font-medium">Slack</li>
              <li className="text-white font-medium">MCD/MLD/MPD</li>
            </ul>
            </NeonGradientCard> 
          </div>
        </div>
        <div className="flex flex-col gap-6 text-center mt-8">
        <MyFile/>
        </div>
        <div className="mx-auto max-w-2xl text-center">
      <h2 id="Knowledge" className="mt-10 text-5xl font-extrabold text-center relative inline-block p-3 mb-10 gradient-text"
          onMouseEnter={scrollToKnowledge}>
          Mon savoir-faire
      </h2>
      </div>
        <Description  />
      </div>
  );
};