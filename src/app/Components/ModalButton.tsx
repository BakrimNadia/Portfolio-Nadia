"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const callouts = [
  {
    name: "Fur-ever-home",
    description:
      "Projet Full Stack en équipe - rôle scrum master - technologies utilisées : Front-end : React.js Next.js Next UI - Back-end : Node.js Express.js - Base de données : PostgreSQL - Déploiement : Vercel - Gestion de projet : Trello - Communication : Discord - Méthode agile : Scrum",
    href: "https://projet-fur-ever-home-front.vercel.app/",
  },
  {
    name: "Gazette des collègues",
    description:
      "Projet Full Stack réalisé seule - technologies utilisées : Front-end : React.js Next.js - Tailwind Next Ui - Back-end : Node.js Express.js - Base de données : PostgreSQL - Déploiement : Vercel",
    href: "https://gazette-des-collegues.vercel.app/",
  },
  {
    name: "Nadia beauty",
    description:
      "Projet Front-end réalisé seule - technologies utilisées : React.js Next.js- Tailwind CSS - Déploiement : Vercel",
    href: "https://nadiabeauty.vercel.app/",
  },
  {
    name: "Su Sushi",
    description:
      "Projet Front-end réalisé seule - technologies utilisées : React.js Next.js- Tailwind CSS - Déploiement : Vercel",
    href: "https://su-sushi-bakrim-nadias-projects.vercel.app/",
  },
  {
    name: "Dress-shop",
    description:
      "Projet Front-end réalisé seule - technologies utilisées : React.js Next.js- Tailwind CSS - Déploiement : Vercel",
    href: "https://dressing-shop-one.vercel.app/",
  },
];

export default function ModalButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Bouton pour ouvrir la modale */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
      >
        Ouvrir la modale
      </button>

      {/* Modale avec animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton de fermeture */}
              <button
                title="Fermer la modale"
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </button>

              <h2 className="text-lg font-semibold text-gray-800">
                Mes Projets
              </h2>
              <p className="text-gray-600 mt-2">
                Voici quelques projets que j&apos;ai réalisés :
              </p>

              {/* Liste des projets */}
              <ul className="mt-4 space-y-4">
                {callouts.map((callout) => (
                  <li key={callout.name} className="border-b pb-2">
                    <a
                      href={callout.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline font-medium"
                    >
                      {callout.name}
                    </a>
                    <p className="text-gray-600 text-sm">{callout.description}</p>
                  </li>
                ))}
              </ul>

              {/* Bouton d'action */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
