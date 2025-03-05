'use client';
import * as motion from "motion/react-client"

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
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
            }}
            style={box}
            onMouseEnter={scrollToProjects}
        />
    )
}

/**
 * ==============   Styles   ================
 */

const box = {
    width: 100,
    height: 100,
    backgroundColor:"rgb(147, 72, 113)",
    borderRadius: 5,
}
