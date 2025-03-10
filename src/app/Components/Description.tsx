import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const Accordion = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b bg-gradient-to-r from-pink-500 via-yellow-200 to-blue-500 bg-clip-text text-transparent">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left font-medium"
      >
        {title}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden px-4"
      >
        <p className="py-2 bg-gradient-to-r from-pink-500 via-yellow-200 to-blue-500 bg-clip-text text-transparent">{content}</p>
      </motion.div>
    </div>
  );
};

export default function Description() {
  return (
    <div className="max-w-lg mx-auto mt-10 space-y-4  text-justify">
      <Accordion title="Développement Front-End" content="Création d’interfaces modernes et performantes avec React, Next.js et Tailwind CSS, tout en optimisant le rendu, le SEO et l’accessibilité." />
      <Accordion title=" Développement Back-End" content="Conception d’API sécurisées avec Node.js et Express, gestion des bases de données relationnelles avec PostgreSQL et Sequelize, et mise en place d’authentification sécurisée." />
      <Accordion title="Tests et Qualité de Code" content="Réalisation de tests unitaires avec Mocha & Chai, validation des routes API avec Insomnia, et maintien d’un code propre grâce à ESLint et Prettier." />
      <Accordion title="Méthodologies de Travail & Collaboration" content="Utilisation des méthodes Agile (Scrum, Kanban), conception de cahier des charges, gestion du versioning avec Git & GitHub, travail seule ou en équipe / pair-programming et communication efficace via Slack, Discord" />
      <Accordion title="Conception et Modélisation" content="Analyse et structuration des bases de données avec la méthode Merise, création de diagrammes via Draw.io / looping, et élaboration de cahiers des charges précis." />
      <Accordion title="Design & Expérience Utilisateur" content="Conception de maquettes et prototypes interactifs avec Figma, création de supports visuels avec Canva, et amélioration de l’UX/UI pour une meilleure accessibilité." />
      <Accordion title="Soft Skills & Mindset" content="Autonome et flexible, je fais preuve d’une forte capacité d’analyse et de résolution de problèmes, tout en restant en veille technologique constante pour répondre efficacement aux besoins des clients." />
    </div>
  );
}
