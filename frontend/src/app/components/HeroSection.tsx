"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const textLines = ["Turning ideas into reality.", "Coding with passion."];

const fadeUpVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.4 + i * 0.2 },
  }),
};

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.8 },
  },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center relative">
      <ParticlesBackground />

      <motion.div
        style={{ opacity: backgroundOpacity }}
        className="relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I’m Andika, a passionate Software Engineer.
        </motion.h1>

        <motion.p className="text-lg text-gray-300 mb-8">
          {textLines.map((line, index) => (
            <motion.span
              key={index}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </motion.p>

        <motion.a
          style={{ opacity: buttonOpacity }}
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          href="#about"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Explore My Work
        </motion.a>
      </motion.div>
    </section>
  );
}
