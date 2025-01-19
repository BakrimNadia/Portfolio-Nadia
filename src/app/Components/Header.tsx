"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion"; 
import { CSSProperties } from "react";
import { ArrowDown } from 'react-feather';

export default function Header() {
  const greetings = [
    "Bonjour",
    "Hello",
    "Guten Tag",
    "Buongiorno",
    "Hola",
    "こんにちは",
    "안녕하세요",
    "مرحبًا",
  ]; 

  return (
    <div style={styles.header}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li><a href="#hero" style={styles.navItem}>ACCUEIL</a></li>
          <li><a href="#About" style={styles.navItem}>À PROPOS</a></li>
          <li><a href="#Projets" style={styles.navItem}>PROJETS</a></li>
          <li><a href="#skills" style={styles.navItem}>COMPETENCES</a></li>
          <li><a href="#contact" style={styles.navItem}>CONTACT</a></li>
        </ul>
      </nav>

      {/* Content */}
      <div style={styles.container}>
        <div style={styles.textWrapper}>
          {/* Animation du texte multilingue */}
          <h1 style={styles.greeting}>
            <Typewriter
              words={greetings}
              loop={true} // Boucle infinie
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>

          {/* Phrases animées */}
          <motion.h2
            style={styles.name}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Je m&apos;appelle <span style={styles.highlight}>Nadia</span>
          </motion.h2>
          <motion.h3
            style={styles.title}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Développeuse Web <span style={styles.highlight}>Full Stack</span>
          </motion.h3>
        </div>

        {/* Image arrondie */}
        <motion.img
          src="./images/Nadia.JPG" 
          alt="Profil"
          style={styles.profileImage}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      
      {/* Flèche pour descendre */} 
      <a href="#About" style={{position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)"}}>
      <ArrowDown color="#9d3c7d" size={60} />
      </a>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  header: {
    position: "relative",
    height: "100vh",
    backgroundImage: "url('./images/PC-back.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "'Poppins', sans-serif",
    color: "#fff",
  },
  nav: {
    position: "absolute",
    top: 0,
    width: "100%",
    padding: "1rem",
    zIndex: 10,
  },
  navList: {
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 1rem",
    textDecoration: "none",
    color: "#fff",
    fontSize: "1.2rem",
   // fontFamily: "'Abril Fatface', serif",
    transition: "color 0.3s",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    padding: "0 5%",
  },
  textWrapper: {
    textAlign: "left",
  },
  greeting: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  name: {
    fontSize: "2.5rem",
    fontWeight: "500",
    marginBottom: "0.5rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "400",
    marginTop: "1rem",
  },
  highlight: {
    color: "#9d3c7d",
    fontWeight: "bold",
  },
  profileImage: {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },


  /* RESPONSIVE DESIGN */
  "@media (max-width: 1200px)": {
    /* Grand écran */
    greeting: {
      fontSize: "2.5rem",
    },
    name: {
      fontSize: "2rem",
    },
    title: {
      fontSize: "1.5rem",
    },
    profileImage: {
      width: "250px",
      height: "250px",
    },
  },
  "@media (max-width: 768px)": {
    /* Tablette */
    container: {
      flexDirection: "column",
      textAlign: "center",
    },
    textWrapper: {
      marginBottom: "2rem",
    },
    navItem: {
      fontSize: "1rem",
      margin: "0 0.5rem",
    },
    greeting: {
      fontSize: "2rem",
    },
    name: {
      fontSize: "1.8rem",
    },
    title: {
      fontSize: "1.2rem",
    },
    profileImage: {
      width: "200px",
      height: "200px",
    },
  },
  "@media (max-width: 480px)": {
    /* Mobile */
    nav: {
      padding: "0.5rem",
    },
    navList: {
      flexDirection: "column",
    },
    navItem: {
      margin: "0.5rem 0",
      fontSize: "0.9rem",
    },
    greeting: {
      fontSize: "1.5rem",
    },
    name: {
      fontSize: "1.5rem",
    },
    title: {
      fontSize: "1rem",
    },
    profileImage: {
      width: "150px",
      height: "150px",
    },
  },
};

