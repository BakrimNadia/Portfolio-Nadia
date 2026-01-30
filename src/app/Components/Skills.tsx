"use client";

import { motion } from "framer-motion";
import MyFile from "./MyFile";
import Description from "./Description";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiGithub,
  SiVercel,
  SiFigma,
  SiCanva,
  SiJira,
} from "react-icons/si";
import { Sparkles } from "lucide-react";

const techIconComponents = [
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiGithub,
  SiVercel,
  SiFigma,
  SiCanva,
  SiJira,
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.08 * i, ease: "easeOut" },
  }),
};

const scrollToSkills = () => {
  document.getElementById("Skills")?.scrollIntoView({ behavior: "smooth" });
};

const scrollToKnowledge = () => {
  document.getElementById("Knowledge")?.scrollIntoView({ behavior: "smooth" });
};

function Marquee() {
  return (
    <div className="relative mt-10">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px soft-divider -translate-y-1/2" />
      <div className="overflow-hidden py-5">
        <motion.div
          className="flex gap-10 whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 26, ease: "linear", repeat: Infinity }}
        >
          {[...techIconComponents, ...techIconComponents].map((Icon, i) => (
            <div key={i} className="flex items-center justify-center">
              <Icon className="h-8 w-8 sm:h-9 sm:w-9 text-black/60 hover:text-black/80 transition" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: { label: string; level: number; tags?: string[] }[];
}) {
  return (
    <div className="relative">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-sans text-lg font-extrabold text-black/85">
          {title}
        </h3>
        <span className="text-xs text-black/45">focus</span>
      </div>

      <div className="mt-4 space-y-4">
        {items.map((it) => (
          <div key={it.label} className="group">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm font-semibold text-black/70 group-hover:text-black transition">
                {it.label}
              </div>
              <div className="text-xs text-black/40">{it.level}%</div>
            </div>

            <div className="mt-2 h-2 w-full rounded-full bg-black/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${it.level}%` }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-black/55 via-black/45 to-black/30"
              />
            </div>

            {it.tags?.length ? (
              <div className="mt-2 flex flex-wrap gap-2">
                {it.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[11px] text-black/55"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="Skills"
      className="relative overflow-hidden section-cream px-6 py-20 sm:py-24 lg:py-28"
    >
      {/* grain léger (même vibe que About) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Header section */}
        <div className="text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-4 py-2 soft-shadow"
            onMouseEnter={scrollToSkills}
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/5">
              <Sparkles className="h-3.5 w-3.5 text-black/60" />
            </span>
            <span className="text-xs font-medium text-black/70">
              Compétences — stack & outils
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mt-5 font-display text-[40px] leading-[0.98] sm:text-[54px] lg:text-[64px] text-black"
          >
            Mes <span className="italic">compétences</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mt-4 mx-auto max-w-2xl text-sm sm:text-base text-black/65 leading-7"
          >
            Un stack orienté performance, UX et maintenabilité pour livrer des
            projets fiables, modernes et prêts pour la production.
          </motion.p>
        </div>

        {/* Marquee icons */}
        <Marquee />

        {/* Layout pro : colonnes + focus */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left: skill groups */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-8"
          >
            <div className="rounded-[32px] border border-black/10 bg-white/55 backdrop-blur p-7 sm:p-8 soft-shadow">
              <div className="grid gap-10 md:grid-cols-2">
                <SkillGroup
                  title="Frontend"
                  items={[
                    { label: "React", level: 88, tags: ["components", "state", "hooks"] },
                    { label: "Next.js (App Router)", level: 84, tags: ["routing", "SEO", "perf"] },
                    { label: "TypeScript", level: 80, tags: ["types", "DX", "refactor"] },
                    { label: "HTML sémantique", level: 82, tags: ["accessibilité", "structure"] },
                  ]}
                />

                <SkillGroup
                  title="UI & Design system"
                  items={[
                    { label: "Tailwind CSS", level: 86, tags: ["responsive", "tokens", "animations"] },
                    { label: "UI libraries", level: 74, tags: ["NextUI", "Headless UI"] },
                    { label: "Figma", level: 72, tags: ["maquettes", "prototypes"] },
                    { label: "Micro-interactions", level: 78, tags: ["Framer Motion"] },
                  ]}
                />

                <SkillGroup
                  title="Backend & Data"
                  items={[
                    { label: "Node.js / Express", level: 76, tags: ["API REST", "auth"] },
                    { label: "PostgreSQL", level: 70, tags: ["schéma", "requêtes"] },
                    { label: "ORM", level: 68, tags: ["Sequelize", "Prisma"] },
                    { label: "MongoDB", level: 58, tags: ["documents", "basics"] },
                  ]}
                />

                <SkillGroup
                  title="Workflow & delivery"
                  items={[
                    { label: "Git / GitHub", level: 78, tags: ["branches", "PR"] },
                    { label: "Vercel", level: 82, tags: ["deploy", "env"] },
                    { label: "Jira / Agile", level: 66, tags: ["Scrum", "Kanban"] },
                    { label: "Qualité", level: 62, tags: ["ESLint", "Prettier"] },
                  ]}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: “Snapshot” / focus panel (pas une card néon, un panneau premium) */}
          <motion.aside
            variants={fadeUp}
            custom={4}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-4"
          >
            <div className="rounded-[32px] border border-black/10 bg-white/55 backdrop-blur p-7 sm:p-8 soft-shadow">
              <h3 className="font-sans text-lg font-extrabold text-black/85">
                En pratique
              </h3>
              <p className="mt-3 text-sm text-black/65 leading-7">
                Je combine <span className="font-semibold text-black/80">design</span> et{" "}
                <span className="font-semibold text-black/80">développement</span> pour
                livrer des interfaces élégantes, rapides et claires.
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3">
                  <div className="text-xs font-semibold text-black/65 uppercase tracking-[0.16em]">
                    points forts
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["UI clean", "SEO", "Responsive", "Animations", "DX"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[11px] text-black/55"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3">
                  <div className="text-xs font-semibold text-black/65 uppercase tracking-[0.16em]">
                    outils
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["VS Code", "Figma", "GitHub", "Vercel", "Jira"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[11px] text-black/55"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-7 h-px w-full soft-divider" />

              <div className="mt-6">
                <MyFile />
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Savoir-faire */}
        <div className="mt-14 text-center">
          <motion.h2
            id="Knowledge"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="font-display text-[34px] sm:text-[44px] lg:text-[52px] text-black"
            onMouseEnter={scrollToKnowledge}
          >
            Mon <span className="italic">savoir-faire</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-3 mx-auto max-w-2xl text-sm sm:text-base text-black/65 leading-7"
          >
            Soft skills & hard skills : une approche globale, orientée clarté,
            qualité et résultat.
          </motion.p>
        </div>

        <Description />
      </div>
    </section>
  );
}
