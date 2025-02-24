'use client';

const callouts = [
    {
      name: 'Fur-ever-home',
      description: 'Projet Full Stack en équipe - rôle scrum master - technologies utilisées : Front-end : React.js Next.js Next UI - Back-end : Node.js Express.js - Base de données : PostgreSQL - Déploiement : Vercel - Gestion de projet : Trello - Communication : Discord - Méthode agile : Scrum',
      imageSrc: '/images/fureverhome.png',
      imageAlt: 'Site Full stack pour gestion de refuge animalier.',
      href: 'https://projet-fur-ever-home-front.vercel.app/',
    },
    {
      name: 'Gazette des collègues',
      description: 'Projet Full Stack réalisé seule - technologies utilisées : Front-end : React.js Next.js - Tailwind Next Ui - Back-end : Node.js Express.js - Base de données : PostgreSQL - Déploiement : Vercel',
      imageSrc: '/images/gazette.png',
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
  
  export default function Projects() {
    return (
      <div
      id="Projets">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-4xl font-bold text-center text-blue-600 text-opacity-80">Mes projets</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="w-full rounded-lg mt-2 object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square transition-transform duration-300 hover:scale-110"
                  />
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  