'use client';
import * as motion from "motion/react-client";

export default function Anim() {

  const scrollToProjects = () => {
    const section = document.getElementById("Projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      animate={{
        scale: [1, 1.8, 2, 1.8, 1],
        rotate: [0, 90, 180, 270, 360],
        borderRadius: ["10%", "35%", "50%", "35%", "10%"],
        background: [
          "linear-gradient(135deg, #fb7185, #ec4899)", // rose → fuchsia
          "linear-gradient(135deg, #ec4899, #38bdf8)", // fuchsia → sky
          "linear-gradient(135deg, #38bdf8, #fb7185)", // sky → rose
          "linear-gradient(135deg, #fb7185, #ec4899)", // cycle back
        ],
        boxShadow: [
          "0 0 25px rgba(251,113,133,0.6), 0 0 60px rgba(236,72,153,0.3)",
          "0 0 35px rgba(236,72,153,0.6), 0 0 70px rgba(56,189,248,0.3)",
          "0 0 40px rgba(56,189,248,0.7), 0 0 80px rgba(251,113,133,0.3)",
          "0 0 25px rgba(251,113,133,0.6), 0 0 60px rgba(236,72,153,0.3)",
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

/**
 * ==============   Styles   ================
 */

const box = {
  width: 120,
  height: 120,
  borderRadius: "20%",
  margin: "0 auto",
};
