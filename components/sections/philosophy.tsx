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
    [0, 1, 1, 0.4]
  );
  const y = useTransform(scrollYProgress, [0.08, 0.38], [40, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-[var(--color-rule)] bg-[var(--color-paper-2)] py-[var(--space-3xl)] sm:py-[var(--space-4xl)]"
      aria-labelledby="philosophy-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-[70%] w-[55%] rounded-full bg-[radial-gradient(circle,var(--color-glow),transparent_68%)] blur-3xl"
      />
      <div className="noise-overlay absolute inset-0 mix-blend-soft-light" />

      <motion.div
        style={reduced ? undefined : { opacity, y }}
        className="page-shell relative grid gap-[var(--space-xl)] md:grid-cols-[1.1fr_0.9fr] md:items-end"
      >
        <div className="min-w-0">
          <h2 id="philosophy-heading" className="sr-only">
            Simple. Fast. Thoughtful.
          </h2>
          <div className="flex flex-col gap-1">
            {words.map((word, index) => (
              <motion.span
                key={word}
                initial={reduced ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{
                  duration: 0.5,
                  delay: reduced ? 0 : index * 0.1,
                  ease: easeOutExpo,
                }}
                className="font-display block text-[clamp(2.25rem,6vw+0.75rem,6rem)] leading-[0.94] tracking-[-0.03em] text-[var(--color-ink)]"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, delay: reduced ? 0 : 0.28 }}
          className="max-w-[36ch] text-[length:var(--text-lg)] leading-[1.7] text-[var(--color-ink-soft)] md:justify-self-end md:pb-3"
        >
          The best apps get out of the way. Clarity over clutter. Speed over
          spectacle. Care in every interaction.
        </motion.p>
      </motion.div>
    </section>
  );
}
