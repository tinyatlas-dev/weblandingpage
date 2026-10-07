"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { aiPractices } from "@/lib/data";

export function Building() {
  return (
    <section
      id="building"
      className="section-pad relative scroll-mt-28"
      aria-labelledby="building-heading"
    >
      <div className="page-shell grid items-start gap-[var(--space-2xl)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-[var(--space-xl)] lg:gap-[var(--space-3xl)]">
        <ScrollReveal className="max-w-md md:sticky md:top-28 md:self-start lg:top-32">
          <h2
            id="building-heading"
            className="text-balance text-[length:var(--text-display-s)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--color-ink)]"
          >
            Building with AI
          </h2>
          <p className="mt-5 max-w-[40ch] text-[length:var(--text-lg)] leading-[1.7] text-[var(--color-ink-soft)]">
            Claude and AI-assisted workflows are part of how Tiny Atlas
            researches, builds, and grows products.
          </p>
          <p className="mt-4 max-w-[40ch] text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
            These are current development practices. The studio still designs,
            decides, and ships each product.
          </p>
        </ScrollReveal>

        <ul className="grid border-t border-[var(--color-rule)] sm:grid-cols-2 sm:gap-x-10">
          {aiPractices.map((practice, index) => (
            <ScrollReveal key={practice} delay={index * 0.04} className="h-full">
              <li className="flex h-full items-center border-b border-[var(--color-rule)] py-5 text-[15px] font-medium tracking-[-0.02em] text-[var(--color-ink)]">
                {practice}
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
