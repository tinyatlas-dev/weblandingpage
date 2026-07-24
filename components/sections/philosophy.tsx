"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { easeOutExpo } from "@/lib/utils";

const words = ["Simple.", "Fast.", "Thoughtful."];

export function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0.08, 0.32, 0.72, 0.95],
    [0, 1, 1, 0.35]
  );
  const y = useTransform(scrollYProgress, [0.08, 0.38], [64, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.96, 1]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const glowYAlt = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#060910] py-32 text-white sm:py-40"
      aria-labelledby="philosophy-heading"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.28),transparent_68%)] blur-3xl"
        style={{ y: reduced ? 0 : glowY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-[65%] w-[65%] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.2),transparent_68%)] blur-3xl"
        style={{ y: reduced ? 0 : glowYAlt }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12),transparent_55%)]"
      />
      <div className="noise-overlay absolute inset-0 opacity-[0.09]" />

      <motion.div
        style={reduced ? undefined : { opacity, y, scale }}
        className="relative mx-auto max-w-5xl px-5 text-center sm:px-8"
      >
        <p className="mb-10 text-[12px] font-semibold tracking-[0.24em] text-white/35 uppercase sm:text-[13px]">
          Philosophy
        </p>
        <h2 id="philosophy-heading" className="sr-only">
          Simple. Fast. Thoughtful.
        </h2>
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          {words.map((word, index) => (
            <motion.span
              key={word}
              initial={
                reduced ? false : { opacity: 0, y: 40, filter: "blur(14px)" }
              }
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{
                duration: 0.85,
                delay: reduced ? 0 : index * 0.14,
                ease: easeOutExpo,
              }}
              className="block bg-[linear-gradient(180deg,#ffffff_30%,rgba(255,255,255,0.72))] bg-clip-text text-[clamp(3rem,10vw,7rem)] leading-[0.92] font-semibold tracking-[-0.055em] text-transparent"
            >
              {word}
            </motion.span>
          ))}
        </div>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.75, delay: reduced ? 0 : 0.4 }}
          className="mx-auto mt-12 max-w-xl text-[17px] leading-[1.7] text-white/50"
        >
          We believe the best apps get out of the way. Clarity over clutter.
          Speed over spectacle. Care in every interaction.
        </motion.p>
      </motion.div>
    </section>
  );
}
