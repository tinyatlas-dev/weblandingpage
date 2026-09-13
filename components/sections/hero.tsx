"use client";

import { motion, type Variants } from "framer-motion";
import { BrandOrbit } from "@/components/brand-orbit";
import { HeroAtmosphere } from "@/components/mesh-gradient";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { SITE_NAME } from "@/lib/constants";
import { easeOutExpo } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-16">
      <HeroAtmosphere />

      <div className="page-shell relative grid items-center gap-10 sm:gap-[var(--space-xl)] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-[var(--space-xl)] md:min-h-[calc(100svh-7.5rem)] lg:gap-[var(--space-2xl)]">
        <motion.div
          className="relative z-10 flex w-full max-w-xl flex-col items-start text-left"
          variants={container}
          initial={reduced ? "visible" : "hidden"}
          animate="visible"
        >
          <motion.p
            variants={item}
            className="mb-4 text-[clamp(1.35rem,2.4vw+0.55rem,2.15rem)] font-semibold leading-none tracking-[-0.04em] text-[var(--color-ink)] sm:mb-5"
          >
            {SITE_NAME}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance text-[length:var(--text-display)] font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--color-ink)] sm:leading-[1.02]"
          >
            Apps for the quiet hours.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-[34ch] text-pretty text-[length:var(--text-lg)] leading-[1.65] text-[var(--color-ink-soft)] sm:mt-6"
          >
            An independent studio crafting calm, fast mobile software for
            everyday life.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 lg:w-auto lg:flex-row lg:items-center"
          >
            <a
              href="#about"
              className="inline-flex h-12 w-full items-center justify-center rounded-[var(--radius-pill)] bg-[var(--color-electric)] px-6 text-[15px] font-semibold whitespace-nowrap text-[var(--color-accent-ink)] shadow-[0_0_0_0_transparent] transition-[transform,opacity,box-shadow] duration-[var(--dur-micro)] hover:opacity-95 hover:shadow-[0_0_36px_var(--color-glow)] active:translate-y-px lg:w-auto lg:min-w-[10.5rem]"
            >
              About us
            </a>
            <a
              href="#support"
              className="inline-flex h-12 w-full items-center justify-center rounded-[var(--radius-pill)] border border-[var(--color-glass-border)] bg-transparent px-6 text-[15px] font-medium whitespace-nowrap text-[var(--color-ink)] transition-[transform,background-color,border-color] duration-[var(--dur-short)] hover:border-[var(--color-violet)] hover:bg-[var(--color-paper-3)] active:translate-y-px lg:w-auto lg:min-w-[10.5rem]"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative min-w-0 w-full"
          initial={reduced ? false : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.55,
            delay: reduced ? 0 : 0.2,
            ease: easeOutExpo,
          }}
        >
          <BrandOrbit />
        </motion.div>
      </div>
    </section>
  );
}
