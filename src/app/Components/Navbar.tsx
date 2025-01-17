import React from 'react';

function Navbar() {
  return (
    <div>
        
    <nav className="navbar">
      <ul>
        <li><a href="#hero">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#skills">Compétences</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;