"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { features } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-pad relative scroll-mt-28">
      <div className="page-shell grid items-start gap-[var(--space-2xl)] lg:grid-cols-2 lg:gap-[var(--space-3xl)]">
        <ScrollReveal className="max-w-xl lg:sticky lg:top-32">
          <h2 className="text-balance text-[length:var(--text-display-s)] leading-[1.05] text-[var(--color-ink)]">
            Small studio.
            <br />
            Exacting craft.
          </h2>
          <p className="mt-7 max-w-[42ch] text-[length:var(--text-lg)] leading-[1.7] text-[var(--color-ink-soft)]">
            Tiny Atlas builds beautiful, fast, delightful mobile applications.
            We care about the quiet moments — the launch that feels instant, the
            gesture that feels natural, the interface that disappears into daily
            life.
          </p>
          <p className="mt-4 max-w-[42ch] text-[length:var(--text-lg)] leading-[1.7] text-[var(--color-ink-soft)]">
            Beautiful software. Crafted with care. Built for everyday life.
          </p>
        </ScrollReveal>

        <div className="min-w-0">
          <ul className="divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.id} delay={index * 0.05}>
                <li className="grid gap-2 py-6 sm:grid-cols-[minmax(0,9rem)_minmax(0,1fr)] sm:gap-8 sm:py-7">
                  <h3 className="font-display text-[1.25rem] tracking-[-0.02em] text-[var(--color-ink)]">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                    {feature.description}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
