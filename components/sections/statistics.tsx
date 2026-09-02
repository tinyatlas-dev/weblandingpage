"use client";

import { AnimatedCounter } from "@/components/animated-counter";
import { ScrollReveal } from "@/components/scroll-reveal";
import { stats } from "@/lib/data";

export function Statistics() {
  return (
    <section className="section-pad relative" aria-label="Studio statistics">
      <div className="page-shell">
        <ScrollReveal>
          <div className="grid gap-10 border-y border-[var(--color-rule)] py-10 md:grid-cols-3 md:gap-6 md:py-16 sm:py-12">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`min-w-0 text-left ${
                  index > 0
                    ? "border-t border-[var(--color-rule)] pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-6 lg:pl-8"
                    : ""
                }`}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-display block text-[clamp(2.25rem,4vw+1rem,4rem)] leading-none tracking-[-0.03em] text-[var(--color-ink)] tabular-nums"
                />
                <p className="mt-3 text-[15px] font-medium text-[var(--color-ink-soft)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
