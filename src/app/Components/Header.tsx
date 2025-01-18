"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion"; // Animation library
import { CSSProperties } from "react";

export default function Header() {
  const greetings = [
    "Bonjour",
    "Hello",
    "Guten Tag",
    "Buongiorno",
    "Hola",
    "こんにちは",
    "안녕하세요",
  ]; // Liste des salutations dans différentes langues

  return (
    <div style={styles.header}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li><a href="#hero" style={styles.navItem}>Accueil</a></li>
          <li><a href="#about" style={styles.navItem}>À propos</a></li>
          <li><a href="#projects" style={styles.navItem}>Projets</a></li>
          <li><a href="#skills" style={styles.navItem}>Compétences</a></li>
          <li><a href="#contact" style={styles.navItem}>Contact</a></li>
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
          src="./images/Nadia.JPG" // Remplacez par l'URL de votre image
          alt="Profil"
          style={styles.profileImage}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  header: {
    position: "relative",
    height: "100vh",
    backgroundImage: "url('./images/background.jpg')", // Remplacez par votre URL d'image
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
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fond semi-transparent
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
    fontFamily: "'Abril Fatface', serif",
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
};
