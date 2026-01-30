"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

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
    <section className="relative min-h-screen overflow-hidden portfolio-hero">
      {/* grain */}
      <div className="grain-overlay" />

      {/* Navbar */}
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-14 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-7">
            {/* badge dispo */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-2 soft-ring"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-500" />
              </span>
              <span className="text-xs font-medium text-black/80">
                Disponible pour de nouvelles opportunités
              </span>
            </motion.div>

            {/* “Hey, there” style */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-display text-[44px] leading-[0.95] sm:text-[64px] lg:text-[82px] text-black"
            >
              <span className="italic">Hey,</span>{" "}
              <span className="opacity-90">there</span>
            </motion.h1>

            {/* Typewriter multi langues */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-4 text-base sm:text-lg text-black/70"
            >
              <span className="font-semibold text-black/85">
                <Typewriter
                  words={greetings}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
              <span className="ml-2">— je suis</span>
            </motion.div>

            {/* identité */}
            <motion.h2
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-3 font-sans hero-name text-2xl sm:text-3xl lg:text-4xl text-black"
            >
              Nadia{" "}
              <span className="font-semibold text-black/60">
                Bakrim Di Rosso
              </span>
            </motion.h2>

            {/* rôle */}
            <motion.p
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-4 max-w-xl text-sm sm:text-base text-black/70"
            >
              Développeuse Web{" "}
              <span className="font-semibold text-black">
                Full Stack JavaScript
              </span>{" "}
              — React / Next.js.  
              <span className="block mt-1">
                Entre deux métiers : je développe tout en gardant mon poste de
                chauffeur de bus.
              </span>
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-7 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#Projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-medium soft-ring hover:opacity-90 transition"
              >
                Voir mes projets <ArrowDownRight size={18} />
              </a>

              <a
                href="#Contact"
                className="inline-flex items-center justify-center rounded-full bg-white/70 backdrop-blur px-6 py-3 text-sm font-medium text-black/80 soft-ring hover:bg-white/90 transition"
              >
                Me contacter
              </a>
            </motion.div>

            {/* stamp style (comme “I AM MADISON” / “DIGITAL PRODUCT DESIGNER”) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="mt-10 flex items-end justify-between gap-8"
            >
              <div className="leading-none">
                <div className="text-[44px] sm:text-[56px] lg:text-[70px] font-black text-black tracking-tight">
                  I AM
                </div>
                <div className="text-[44px] sm:text-[56px] lg:text-[70px] font-black text-black tracking-tight -mt-2">
                  NADIA
                </div>
              </div>

              <div className="text-right">
                <div className="hero-stamp text-[18px] sm:text-[22px] font-black text-black leading-tight">
                  FULL STACK
                  <br />
                  DEVELOPER
                </div>
                <div className="mt-2 text-xs text-black/55 max-w-[220px] ml-auto">
                  Next.js · React · Node · UI design · performance
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto w-[260px] sm:w-[320px] lg:w-[420px] floaty"
            >
              {/* glow */}
              <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-tr from-rose-200/60 via-white/20 to-amber-200/50 blur-2xl" />

              {/* card */}
              <div className="relative rounded-[40px] bg-white/60 backdrop-blur-md p-3 soft-ring">
                <div className="relative overflow-hidden rounded-[34px]">
                  <Image
                    src="/images/Nadia.JPG"
                    alt="Photo de Nadia"
                    width={700}
                    height={900}
                    className="h-[340px] sm:h-[420px] lg:h-[520px] w-full object-cover"
                    priority
                  />
                </div>

                {/* mini infos */}
                <div className="mt-3 flex items-center justify-between px-2 pb-1">
                  <div className="text-xs text-black/60">
                    Basée en France · Remote friendly
                  </div>
                  <div className="text-xs font-semibold text-black/80">
                    Next.js · React
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#About"
          className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-2 text-xs font-medium text-black/70 soft-ring hover:bg-white/90 transition"
        >
          Découvrir <span className="text-base">↓</span>
        </Link>
      </motion.div>
    </section>
  );
}
