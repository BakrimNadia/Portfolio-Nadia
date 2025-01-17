"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function HomePage() {
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

        {/* Présentation statique */}
        <h2 style={styles.name}>Je m'appelle <span style={styles.highlight}>Nadia</span></h2>
        <h3 style={styles.title}>
          Développeuse Web <span style={styles.highlight}>Full Stack</span>
        </h3>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    overflow: "hidden",
    fontFamily: "'Poppins', sans-serif",
  },
  textWrapper: {
    textAlign: "center",
  },
  greeting: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "1rem",
  },
  name: {
    fontSize: "2.5rem",
    fontWeight: "500",
    color: "#34495e",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "400",
    color: "#7f8c8d",
    marginTop: "1rem",
  },
  highlight: {
    color: "#e74c3c",
    fontWeight: "bold",
  },
};
