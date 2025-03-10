'use client';

import Anim from "./Anim";

const callouts = [
    {
      name: 'Fur-ever-home',
      description: 'Projet Full Stack en équipe - rôle scrum master - technologies utilisées : Front-end : React.js Next.js Next UI - Back-end : Node.js Express.js - Base de données : PostgreSQL - Déploiement : Vercel - Méthode agile : Scrum',
      imageSrc: '/images/fureverhome.png',
      imageAlt: 'Site Full stack pour gestion de refuge animalier.',
      href: 'https://projet-fur-ever-home-front.vercel.app/',
    },
    {
      name: 'Gazette des collègues',
      description: 'Projet Full Stack réalisé seule - technologies utilisées : Front-end : React.js Next.js - Tailwind Next Ui - Back-end : Node.js Express.js - Base de données : PostgreSQL - Déploiement : Vercel',
      imageSrc: '/images/gazette1.png',
      imageAlt: 'Site full stack gazette d entreprise.',
      href: 'https://gazette-des-collegues.vercel.app/',
    },
    {
      name: 'Nadia beauty',
      description: 'Projet Front-end réalisé seule - technologies utilisées : React.js Next.js- Tailwind CSS - Déploiement : Vercel',
      imageSrc: '/images/beauty1.png',
      imageAlt: 'Site vitrine institut de beauté.',
      href: 'https://nadiabeauty.vercel.app/',
    },
    {
      name: 'Su Sushi',
      description: 'Projet Front-end réalisé seule - technologies utilisées : React.js Next.js- Tailwind CSS - Déploiement : Vercel',
      imageSrc: '/images/su-sushi.png',
      imageAlt: 'Site vitrine de restaurant sushi.',
      href: 'https://su-sushi-bakrim-nadias-projects.vercel.app/',
    },
    {
      name: 'Dress-shop',
      description: 'Projet Front-end réalisé seule - technologies utilisées : React.js Next.js- Tailwind CSS - Déploiement : Vercel',
      imageSrc: '/images/dressing.png',
      imageAlt: 'Site demonstratif type e-commerce mode femme.',
      href: 'https://dressing-shop-one.vercel.app/',
    },
  ]

  const scrollToProjects = () => {
    const section = document.getElementById("Projects");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  export default function Projects() {
    return (
      <div
      id="Projects">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-100 font-mono">
          <h2 className="text-5xl font-extrabold text-center relative p-3 mb-4 gradient-text"
            onMouseEnter={scrollToProjects}>
          Mes Projets
          </h2>
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg mx-auto p-6">
          <Anim />
          </div>
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          
            <div className="mt-3 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="w-full rounded-xl mt-4 object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square transition-transform duration-300 hover:scale-110 drop-shadow-[0_0_10px_rgba(0,0,255,0.7)]"
                  />
                  <h3 className="mt-6 text-sm text-white">
                      <span className="absolute inset-0 text-xl " />
                      {callout.name}
                  </h3>
                  <p className="mb-10 text-base font-semibold text-gray-100">{callout.description}</p>
                  <button>
                    <a href={callout.href} 
                    className="px-2 pt-3 mt-3 mx-2 mb-3 item-center bg-gradient-to-b from-rose-400 to-blue-500 rounded-xl text-black hover:bg-white hover:text-gray-100 font-bold py-2 px-4 rounded-lg">
                      Voir le site 
                    </a>
                  </button>
                  <button>
                    <a href={callout.href}
                     className="px-2 pt-3 mt-3 mx-2 mb-3 bg-gradient-to-b from-rose-400 to-blue-500 rounded-xl text-black hover:bg-white hover:text-gray-100 font-bold py-2 px-4 rounded-lg">
                      github
                    </a>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  