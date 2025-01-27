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
     <Header />
     <About />
     <Skills />
     <Projects />
     <Contact />
     <Footer />
    </div>
  );
}

