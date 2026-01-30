"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Fond beige rosé + glow */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-b from-[#fbf7f2] via-[#f6e7df] to-[#f1dfd4]" />
        <div className="absolute -top-24 left-[-120px] h-[420px] w-[420px] rounded-full bg-rose-300/30 blur-3xl" />
        <div className="absolute -top-24 right-[-140px] h-[420px] w-[420px] rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-[-140px] left-1/2 h-[420px] w-[520px] -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />

        {/* Grain léger */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        {/* Card */}
        <div className="rounded-[32px] border border-black/10 bg-white/55 backdrop-blur-xl shadow-[0_18px_60px_rgba(20,20,20,0.10)]">
          <div className="p-8 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-12">
              {/* Brand */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3">
                  <span className="font-display italic text-xl text-black/90">
                    Nadia.
                  </span>
                  <span className="text-xs rounded-full border border-black/10 bg-white/70 px-3 py-1 text-black/70">
                    Next.js · React · Full Stack JS
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-black/65 max-w-md">
                  Je conçois des expériences web modernes, performantes et
                  centrées utilisateur — avec un code clair, maintenable et une
                  vraie sensibilité UI.
                </p>

                {/* Contact quick */}
                <div className="mt-6 space-y-3">
                  <a
                    href="mailto:nadiabakrim06@gmail.com"
                    className="group inline-flex items-center gap-3 text-sm text-black/70 hover:text-black transition"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 group-hover:bg-white transition">
                      <FaEnvelope size={14} />
                    </span>
                    nadiabakrim06@gmail.com
                  </a>

                  <div className="inline-flex items-center gap-3 text-sm text-black/65">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70">
                      <FaGlobe size={14} />
                    </span>
                    Basée en France · Remote friendly
                  </div>
                </div>

                {/* Social */}
                <div className="mt-7 flex items-center gap-2">
                  <SocialIcon
                    href="https://www.linkedin.com/in/nadia-d-405849b9/"
                    label="LinkedIn"
                  >
                    <FaLinkedin />
                  </SocialIcon>
                  <SocialIcon
                    href="https://github.com/BakrimNadia"
                    label="GitHub"
                  >
                    <FaGithub />
                  </SocialIcon>
                </div>
              </div>

              {/* Navigation */}
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-black/50">
                  Navigation
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <FooterLink href="#About">À propos</FooterLink>
                  <FooterLink href="#Skills">Compétences</FooterLink>
                  <FooterLink href="#Projects">Projets</FooterLink>
                  <FooterLink href="#Knowledge">Savoir-faire</FooterLink>
                  <FooterLink href="#Contact">Contact</FooterLink>
                </div>
              </div>

              {/* CTA */}
              <div className="lg:col-span-3">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-black/50">
                  Collaboration
                </p>

                <p className="mt-5 text-sm text-black/65 leading-6">
                  Tu as un projet web ou une opportunité ? On en parle et je te
                  propose une solution claire, design et efficace.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="#Projects"
                    className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(20,20,20,0.18)] hover:opacity-90 transition"
                  >
                    Voir mes projets
                  </a>
                  <a
                    href="#Contact"
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-black/80 hover:bg-white transition"
                  >
                    Travaillons ensemble
                  </a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-10 h-px w-full bg-black/10" />

            {/* Bottom bar */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs text-black/55">
                © {year}{" "}
                <strong className="font-semibold text-black/80">
                  Bakrim Di Rosso Nadia
                </strong>{" "}
                — Tous droits réservés
              </span>

              <div className="flex items-center gap-3 text-xs text-black/55">
                <a
                  className="hover:text-black transition"
                  href="#Projects"
                >
                  Projets
                </a>
                <span className="opacity-40">•</span>
                <a
                  className="hover:text-black transition"
                  href="#Contact"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** --- petits composants --- **/

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group rounded-2xl border border-black/10 bg-white/55 px-4 py-3 text-sm text-black/70 backdrop-blur hover:bg-white/80 hover:text-black transition"
    >
      <span className="inline-flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70 group-hover:bg-black/60 transition" />
        {children}
      </span>
    </a>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/65 text-black/70 shadow-sm hover:bg-white hover:text-black transition hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}
