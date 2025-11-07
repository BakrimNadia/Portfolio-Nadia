"use client";

import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import { Skills } from "./Components/Skills";
import Footer from "./Components/Footer";

export default function HomePage() {
  return (
    <div>
            {/* Glow background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div className="relative left-1/2 aspect-[1108/632] w-[72rem] -translate-x-1/2 bg-gradient-to-tr from-rose-500/40 via-fuchsia-500/20 to-sky-500/30 opacity-60" />
      </div>
     <Header />
     <About />
     <Skills />
     <Projects />
     <Contact />
     <Footer />
    </div>
  );
}

