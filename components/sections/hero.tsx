"use client";

import { motion, type Variants } from "framer-motion";
import { MagneticButton } from "@/components/magnetic-button";
import { FloatingDevices } from "@/components/floating-devices";
import { HeroAtmosphere } from "@/components/mesh-gradient";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { SITE_NAME } from "@/lib/constants";
import { easeOutExpo } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(14px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pt-28 sm:pt-32">
      <HeroAtmosphere />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
          variants={container}
          initial={reduced ? "visible" : "hidden"}
          animate="visible"
        >
          <motion.p
            variants={item}
            className="mb-6 text-[12px] font-semibold tracking-[0.28em] text-ink/50 uppercase sm:mb-7 sm:text-[13px]"
          >
            {SITE_NAME}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance text-[2.85rem] leading-[1.02] font-semibold tracking-[-0.055em] text-ink sm:text-[4rem] md:text-[4.75rem] lg:text-[5.25rem]"
          >
            Building delightful mobile apps.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-[34rem] text-pretty text-[17px] leading-[1.65] text-ink-soft sm:mt-7 sm:text-lg"
          >
            Crafted with simplicity. Designed for everyday life.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-3 sm:mt-11 sm:flex-row sm:gap-4"
          >
            <MagneticButton
              href="#apps"
              className="min-w-[168px] bg-ink text-white shadow-[0_18px_48px_rgba(15,23,42,0.24)] hover:bg-slate-800"
            >
              Explore Apps
            </MagneticButton>
            <MagneticButton
              href="#support"
              className="min-w-[168px] border border-white/70 bg-white/50 text-ink shadow-[0_8px_32px_rgba(15,23,42,0.06)] backdrop-blur-xl hover:bg-white/80"
              strength={0.22}
              glow={false}
            >
              Contact
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={
            reduced ? false : { opacity: 0, y: 48, filter: "blur(16px)" }
          }
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1.1,
            delay: reduced ? 0 : 0.5,
            ease: easeOutExpo,
          }}
        >
          <FloatingDevices />
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"
      />
    </section>
  );
}
