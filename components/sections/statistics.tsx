"use client";

import { AnimatedCounter } from "@/components/animated-counter";
import { ScrollReveal } from "@/components/scroll-reveal";
import { stats } from "@/lib/data";

export function Statistics() {
  return (
    <section className="relative py-28 sm:py-32" aria-label="Studio statistics">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/65 px-8 py-16 shadow-[0_28px_80px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:grid sm:grid-cols-3 sm:gap-6 sm:px-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.08),transparent_50%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
            />

            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`relative py-6 text-center sm:py-0 ${
                  index > 0
                    ? "border-t border-slate-900/5 sm:border-t-0 sm:border-l sm:border-slate-900/5"
                    : ""
                }`}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="block bg-[linear-gradient(180deg,#0b1220_20%,#334155)] bg-clip-text text-5xl font-semibold tracking-[-0.05em] text-transparent sm:text-6xl md:text-[4rem]"
                />
                <p className="mt-3 text-[15px] font-medium tracking-wide text-ink-soft">
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
