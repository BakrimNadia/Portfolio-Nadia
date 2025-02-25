"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { ArrowDown } from "react-feather";
import Image from "next/image";
import Navbar from "./Navbar";

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
    <div className="relative h-screen bg-cover bg-center text-white header-bg">
      <Navbar />
      {/* Contenu principal */}
      <div className="flex flex-col md:flex-row justify-between items-center h-full px-8 md:px-16">
        {/* Texte d'accueil */}
        <div className="text-left md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <Typewriter
              words={greetings}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-2"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Je m&apos;appelle <span className="text-primary font-bold">Nadia</span>
          </motion.h2>

          <motion.h3
            className="text-xl md:text-2xl font-medium mt-2"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Développeuse Web <span className="text-primary font-bold">Full Stack</span>
          </motion.h3>
        </div>

        {/* Image du profil */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/Nadia.JPG"
            alt="Profil"
            width={300}
            height={300}
            className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-lg"
          />
        </motion.div>
      </div>

      {/* Flèche pour descendre */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#About">
          <ArrowDown color="#9d3c7d" size={60} />
        </a>
      </motion.div>
    </div>
  );
}
