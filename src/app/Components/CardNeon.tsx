import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
 
export function CardNeon() {
  return (
    <NeonGradientCard className="max-w-sm items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
      <p className="text-lg leading-relaxed text-justify">
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
    

  );
}