"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { easeOutExpo } from "@/lib/utils";

const orbits = [
  { label: "Apps", top: "10%", left: "58%" },
  { label: "Craft", top: "36%", left: "86%" },
  { label: "Privacy", top: "74%", left: "68%" },
  { label: "Speed", top: "66%", left: "6%" },
] as const;

export function BrandOrbit() {
  const reduced = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <div
        aria-hidden
        className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle,var(--color-glow),transparent_68%)] blur-2xl"
      />
      <div
        aria-hidden
        className="absolute inset-[16%] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-violet)_42%,transparent),transparent_72%)] blur-3xl"
      />

      <svg
        aria-hidden
        viewBox="0 0 400 400"
        className="absolute inset-0 size-full overflow-visible"
      >
        <defs>
          <linearGradient id="orbitStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-electric)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--color-violet)" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        {[0, 1, 2].map((ring) => (
          <motion.ellipse
            key={ring}
            cx="200"
            cy="200"
            rx={118 + ring * 34}
            ry={52 + ring * 16}
            fill="none"
            stroke="url(#orbitStroke)"
            strokeWidth="1.25"
            transform={`rotate(${-18 + ring * 22} 200 200)`}
            initial={false}
            animate={
              reduced
                ? undefined
                : { rotate: ring % 2 === 0 ? 360 : -360 }
            }
            style={{ transformOrigin: "200px 200px" }}
            transition={{
              duration: 42 + ring * 14,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>

      {orbits.map((orbit, index) => (
        <motion.span
          key={orbit.label}
          className="absolute rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass)] px-3 py-1 text-[11px] font-medium tracking-[0.08em] text-[var(--color-ink-soft)] uppercase backdrop-blur-md"
          style={{ top: orbit.top, left: orbit.left }}
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: reduced ? 0 : 0.35 + index * 0.08,
            duration: 0.45,
            ease: easeOutExpo,
          }}
        >
          {orbit.label}
        </motion.span>
      ))}

      <motion.div
        className="absolute inset-[20%] grid place-items-center"
        initial={reduced ? false : { opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
      >
        <motion.div
          animate={reduced ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative size-full max-h-[22rem] max-w-[22rem]"
        >
          <Image
            src="/brand/mark-lg.png"
            alt="Tiny Atlas mark"
            fill
            priority
            sizes="(max-width: 768px) 70vw, 28rem"
            className="object-contain drop-shadow-[0_30px_80px_color-mix(in_srgb,var(--color-electric)_35%,transparent)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
