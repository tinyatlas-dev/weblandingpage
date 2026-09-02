"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { timeline } from "@/lib/data";
import { cn } from "@/lib/utils";

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
      className="section-pad relative"
      aria-labelledby="timeline-heading"
    >
      <div className="page-shell grid gap-[var(--space-2xl)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-[var(--space-xl)] lg:gap-[var(--space-3xl)]">
        <ScrollReveal className="max-w-md md:sticky md:top-28 md:self-start lg:top-32">
          <h2
            id="timeline-heading"
            className="text-balance text-[length:var(--text-display-s)] leading-[1.05] text-[var(--color-ink)]"
          >
            A quiet path, carefully drawn.
          </h2>
        </ScrollReveal>

        <div ref={ref} className="relative min-w-0 pl-8 sm:pl-10">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[11px] w-px bg-[var(--color-rule)]"
          />
          <motion.div
            aria-hidden
            className="absolute top-2 left-[11px] w-px origin-top bg-[var(--color-accent)]"
            style={{ height: reduced ? "100%" : height }}
          />

          <ol className="space-y-12">
            {timeline.map((item, index) => (
              <li key={item.id} className="relative">
                <ScrollReveal delay={index * 0.05}>
                  <div className={cn("min-w-0")}>
                    <p className="text-[11px] font-medium tracking-[0.14em] text-[var(--color-accent)] uppercase">
                      {item.year}
                    </p>
                    <h3 className="font-display mt-2 text-[1.5rem] tracking-[-0.02em] text-[var(--color-ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[42ch] text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
                <span
                  aria-hidden
                  className="absolute top-2 left-[-1.55rem] flex size-3.5 items-center justify-center rounded-full border-2 border-[var(--color-paper)] bg-[var(--color-ink)] sm:left-[-1.7rem]"
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
