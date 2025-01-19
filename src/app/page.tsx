"use client";

import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

export default function HomePage() {
  return (
    <div>
     <Header />
     <About />
      <Projects />
     <Contact />
    </div>
  );
}

