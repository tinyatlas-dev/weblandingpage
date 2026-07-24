"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { timeline } from "@/lib/data";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.35"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    restDelta: 0.001,
  });
  const height = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="relative py-28 sm:py-36"
      aria-labelledby="timeline-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[12px] font-semibold tracking-[0.22em] text-ink/40 uppercase sm:text-[13px]">
            Journey
          </p>
          <h2
            id="timeline-heading"
            className="text-balance text-[2.5rem] font-semibold tracking-[-0.05em] text-ink sm:text-5xl md:text-[3.4rem]"
          >
            A quiet path, carefully drawn.
          </h2>
        </ScrollReveal>

        <div ref={ref} className="relative mx-auto mt-20 max-w-2xl">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[11px] w-px bg-slate-200/90 sm:left-1/2 sm:-translate-x-px"
          />
          <motion.div
            aria-hidden
            className="absolute top-2 left-[11px] w-px origin-top bg-gradient-to-b from-atlas-blue via-atlas-purple to-atlas-cyan shadow-[0_0_12px_rgba(37,99,235,0.45)] sm:left-1/2 sm:-translate-x-px"
            style={{ height: reduced ? "100%" : height }}
          />

          <ol className="space-y-14">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <li key={item.id} className="relative">
                  <ScrollReveal delay={index * 0.06}>
                    <div
                      className={`grid items-start gap-6 sm:grid-cols-2 ${
                        isLeft ? "" : "sm:[&>*:first-child]:order-2"
                      }`}
                    >
                      <div
                        className={`rounded-3xl border border-transparent bg-transparent p-0 pl-10 transition-all duration-500 hover:border-white/70 hover:bg-white/60 hover:p-5 hover:pl-5 hover:shadow-[0_18px_50px_rgba(15,23,42,0.06)] hover:backdrop-blur-xl sm:pl-0 ${
                          isLeft ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                        }`}
                      >
                        <p className="text-[12px] font-semibold tracking-[0.16em] text-atlas-blue uppercase">
                          {item.year}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                          {item.description}
                        </p>
                      </div>
                      <div className="hidden sm:block" />
                    </div>
                  </ScrollReveal>
                  <span
                    aria-hidden
                    className="absolute top-2 left-1.5 flex size-4 items-center justify-center rounded-full border-[3px] border-white bg-ink shadow-[0_0_0_1px_rgba(15,23,42,0.08),0_0_18px_rgba(37,99,235,0.35)] sm:left-1/2 sm:-translate-x-1/2"
                  >
                    <span className="size-1 rounded-full bg-white/90" />
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
