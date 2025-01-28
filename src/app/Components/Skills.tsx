import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { IconCloud } from "../../components/ui/icon-cloud";

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

export function Skills() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="container mx-auto px-4 py-12">
       <h1 className="text-3xl font-bold text-gray-800 text-center">
            Mes Compétences
          </h1>
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg mx-auto p-6">
      <IconCloud images={images} />
    </div>
     {/* Section compétences */}
     <div className="flex flex-col gap-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           
            <NeonGradientCard className="max-w-sm items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
                          <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"></span>
            <ul>
              <li className="text-gray-700 font-medium">JavaScript</li>
              <li className="text-gray-700 font-medium">TypeScript</li>
              <li className="text-gray-700 font-medium">React.js</li>
              <li className="text-gray-700 font-medium">Next.js</li>
              <li className="text-gray-700 font-medium">HTML5</li>
              </ul>
              </NeonGradientCard>
              <NeonGradientCard className="max-w-sm items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
                            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"></span>
            <ul>
              <li className="text-gray-700 font-medium">CSS3</li>
              <li className="text-gray-700 font-medium">Tailwind</li>
              <li className="text-gray-700 font-medium">Next UI</li>
              <li className="text-gray-700 font-medium">Semantic UI</li>
              <li className="text-gray-700 font-medium">Bootstrap</li>
            </ul>
            </NeonGradientCard>

           <NeonGradientCard className="max-w-sm items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
                         <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"></span>
            <ul>
              <li className="text-gray-700 font-medium">Node.js</li>
              <li className="text-gray-700 font-medium">Express.js</li>
              <li className="text-gray-700 font-medium">Sequelize</li>
              <li className="text-gray-700 font-medium">PostgreSQL</li>
              <li className="text-gray-700 font-medium">Mongo DB</li>
              </ul>
              </NeonGradientCard>

              <NeonGradientCard className="max-w-sm items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
                            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"></span>
            <ul>
              <li className="text-gray-700 font-medium">GitHub</li>
              <li className="text-gray-700 font-medium">Visual Studio Code</li>
              <li className="text-gray-700 font-medium">Figma</li>
              <li className="text-gray-700 font-medium">Canva</li>
            </ul>
            </NeonGradientCard>

        <NeonGradientCard className="max-w-sm items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
                  <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"></span>
            <ul>
              <li className="text-gray-700 font-medium">Methode agile / Scrum</li>
              <li className="text-gray-700 font-medium">Vercel</li>
              <li className="text-gray-700 font-medium">Render</li>
              <li className="text-gray-700 font-medium">Trello</li>
              </ul>
              </NeonGradientCard>

        <NeonGradientCard className="max-w-sm items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
              <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"></span>
            <ul>
              <li className="text-gray-700 font-medium">Drawio</li>
              <li className="text-gray-700 font-medium">Discord</li>
              <li className="text-gray-700 font-medium">Slack</li>
              <li className="text-gray-700 font-medium">MCD/MLD/MPD</li>
            </ul>
            </NeonGradientCard> 
          </div>
        </div>
      </div>
  );
};