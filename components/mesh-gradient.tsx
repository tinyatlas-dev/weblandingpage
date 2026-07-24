"use client";

import { motion } from "framer-motion";
import { usePointerGlow } from "@/hooks/use-pointer-glow";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function MeshGradient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--color-paper)]" />

      <div
        className="absolute -left-[20%] top-[-10%] h-[55vmax] w-[55vmax] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at center, var(--color-glow), transparent 68%)",
        }}
      />
      <div
        className="absolute -right-[15%] top-[8%] h-[48vmax] w-[48vmax] rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle at center, var(--color-bloom-mid), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-25%] left-[30%] h-[42vmax] w-[42vmax] rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle at center, var(--color-bloom-low), transparent 70%)",
        }}
      />

      <div className="noise-overlay absolute inset-0 mix-blend-soft-light" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,var(--color-paper)_100%)]" />
    </div>
  );
}

export function HeroAtmosphere() {
  const reduced = useReducedMotion();
  const glow = usePointerGlow(560);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseMove={glow.onMove}
      onMouseLeave={glow.onLeave}
    >
      <MeshGradient />
      {!reduced ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          style={{ background: glow.background, opacity: glow.opacity }}
        />
      ) : null}
      <FloatingGeometry />
    </div>
  );
}

function FloatingGeometry() {
  const reduced = useReducedMotion();

  const shapes = [
    {
      className:
        "left-[6%] top-[18%] size-14 rounded-[1.25rem] sm:size-16 md:left-[4%]",
      delay: 0,
      rotate: 16,
    },
    {
      className:
        "right-[8%] top-[22%] size-11 rounded-full sm:size-12 md:right-[6%]",
      delay: 1.1,
      rotate: -10,
    },
    {
      className:
        "left-[12%] bottom-[18%] hidden size-9 rounded-2xl sm:block",
      delay: 0.5,
      rotate: 8,
    },
  ] as const;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute glass-orb ${shape.className}`}
          style={{ rotate: shape.rotate }}
          animate={
            reduced
              ? undefined
              : {
                  y: [0, -12, 0],
                  x: [0, index % 2 === 0 ? 6 : -6, 0],
                  rotate: [shape.rotate, shape.rotate + 5, shape.rotate],
                }
          }
          transition={{
            duration: 10 + index * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
