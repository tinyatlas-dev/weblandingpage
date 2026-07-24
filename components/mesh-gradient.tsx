"use client";

import { motion } from "framer-motion";
import { usePointerGlow } from "@/hooks/use-pointer-glow";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function MeshGradient() {
  const reduced = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#fbfcfe]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,246,255,0.9),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(245,243,255,0.7),transparent_50%)]" />

      <motion.div
        className="absolute -left-[18%] top-[-12%] h-[58vmax] w-[58vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.28),transparent_68%)] blur-[80px]"
        animate={
          reduced
            ? undefined
            : {
                x: [0, 50, -28, 0],
                y: [0, 36, 12, 0],
                scale: [1, 1.1, 0.94, 1],
              }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -right-[12%] top-[2%] h-[52vmax] w-[52vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.22),transparent_68%)] blur-[90px]"
        animate={
          reduced
            ? undefined
            : {
                x: [0, -42, 18, 0],
                y: [0, 52, -14, 0],
                scale: [1, 0.92, 1.08, 1],
              }
        }
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-22%] left-[18%] h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.24),transparent_68%)] blur-[85px]"
        animate={
          reduced
            ? undefined
            : {
                x: [0, 32, -36, 0],
                y: [0, -42, 24, 0],
                scale: [1, 1.12, 0.95, 1],
              }
        }
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-[42%] top-[18%] h-[22vmax] w-[22vmax] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.7),transparent_70%)] blur-2xl"
        animate={
          reduced
            ? undefined
            : { opacity: [0.35, 0.7, 0.4, 0.35], scale: [1, 1.15, 1] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="noise-overlay absolute inset-0 opacity-[0.04] mix-blend-multiply" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.45),transparent_30%,transparent_68%,rgba(255,255,255,0.92))]" />
    </div>
  );
}

export function HeroAtmosphere() {
  const reduced = useReducedMotion();
  const glow = usePointerGlow(640);

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
        "left-[8%] top-[22%] size-16 rounded-[1.35rem] sm:size-20 md:left-[12%]",
      delay: 0,
      rotate: 18,
    },
    {
      className:
        "right-[10%] top-[28%] size-12 rounded-full sm:size-14 md:right-[14%]",
      delay: 1.2,
      rotate: -12,
    },
    {
      className:
        "left-[18%] bottom-[28%] hidden size-10 rounded-2xl sm:block md:left-[22%]",
      delay: 0.6,
      rotate: 8,
    },
    {
      className:
        "right-[16%] bottom-[32%] hidden size-8 rounded-full md:block",
      delay: 1.8,
      rotate: 20,
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
                  y: [0, -14, 0],
                  x: [0, index % 2 === 0 ? 8 : -8, 0],
                  rotate: [shape.rotate, shape.rotate + 6, shape.rotate],
                }
          }
          transition={{
            duration: 9 + index * 1.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
