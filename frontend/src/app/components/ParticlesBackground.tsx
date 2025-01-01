"use client";

import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 50,
          },
          color: {
            value: "#6366F1",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}
