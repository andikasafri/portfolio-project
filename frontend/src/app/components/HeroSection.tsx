"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center relative">
      {/* Particle Animation */}
      <ParticlesBackground />

      {/* Hero Content */}
      <motion.div
        style={{ opacity: backgroundOpacity }}
        className="relative z-10"
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I’m Andika, a passionate Software Engineer.
        </motion.h1>

        {/* Short Description */}
        <motion.p className="text-lg text-gray-300 mb-8">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Building scalable solutions.
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Turning ideas into reality.
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Coding with passion.
          </motion.span>
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          style={{ opacity: buttonOpacity }}
          href="#about"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
        >
          Explore My Work
        </motion.a>
      </motion.div>
    </section>
  );
}
