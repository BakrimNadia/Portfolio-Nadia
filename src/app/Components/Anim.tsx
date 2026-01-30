'use client';
import * as motion from "motion/react-client";

export default function Anim() {
  const scrollToProjects = () => {
    const section = document.getElementById("Projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      animate={{
        scale: [1, 1.8, 2, 1.8, 1],
        rotate: [0, 90, 180, 270, 360],
        borderRadius: ["14%", "36%", "50%", "36%", "14%"],

        // 🎨 Dégradés beige / rosé / gris chaud (un peu plus foncés)
        background: [
          "linear-gradient(135deg, #f1ebe6, #e6d3c8)", // crème → beige rosé
          "linear-gradient(135deg, #e6d3c8, #d8c2b6)", // beige rosé → rosé poudré
          "linear-gradient(135deg, #d8c2b6, #cfc7c2)", // rosé poudré → gris beige
          "linear-gradient(135deg, #cfc7c2, #f1ebe6)", // gris beige → crème
        ],

        // ☁️ Ombres élégantes, plus profondes mais soft
        boxShadow: [
          "0 22px 55px rgba(20,20,20,0.14), inset 0 1px 0 rgba(255,255,255,0.55)",
          "0 26px 65px rgba(20,20,20,0.16), inset 0 1px 0 rgba(255,255,255,0.5)",
          "0 30px 75px rgba(20,20,20,0.18), inset 0 1px 0 rgba(255,255,255,0.45)",
          "0 22px 55px rgba(20,20,20,0.14), inset 0 1px 0 rgba(255,255,255,0.55)",
        ],
      }}
      transition={{
        duration: 6,
        ease: "easeInOut",
        times: [0, 0.3, 0.7, 1],
        repeat: Infinity,
        repeatDelay: 0.5,
      }}
      style={box}
      onMouseEnter={scrollToProjects}
    />
  );
}

/* styles */
const box = {
  width: 120,
  height: 120,
  margin: "0 auto",
  borderRadius: "20%",
};
