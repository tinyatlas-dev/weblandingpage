"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { studioFacts } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-pad relative scroll-mt-28">
      <div className="page-shell grid items-start gap-[var(--space-2xl)] md:grid-cols-2 md:gap-[var(--space-xl)] lg:gap-[var(--space-3xl)]">
        <ScrollReveal className="max-w-xl md:sticky md:top-28 lg:top-32">
          <h2 className="text-balance text-[length:var(--text-display-s)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--color-ink)]">
            Small studio.
            <br />
            Exacting craft.
          </h2>
          <p className="mt-7 max-w-[46ch] text-[length:var(--text-lg)] leading-[1.7] text-[var(--color-ink-soft)]">
            Tiny Atlas is an independent software studio founded in 2026.
          </p>
          <p className="mt-4 max-w-[46ch] text-[length:var(--text-lg)] leading-[1.7] text-[var(--color-ink-soft)]">
            We build mobile apps, AI-powered tools, productivity software, and
            casual games. Our approach is simple: start with a small idea, build
            it carefully, learn from users, and iterate.
          </p>
        </ScrollReveal>

        <div className="min-w-0">
          <ul className="divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]">
            {studioFacts.map((fact, index) => (
              <ScrollReveal key={fact.id} delay={index * 0.05}>
                <li className="grid gap-2 py-6 sm:grid-cols-[minmax(0,9rem)_minmax(0,1fr)] sm:items-baseline sm:gap-8 sm:py-7">
                  <h3 className="text-[1.2rem] font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                    {fact.label}
                  </h3>
                  {fact.href ? (
                    <a
                      href={fact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] leading-relaxed text-[var(--color-ink-soft)] underline decoration-[var(--color-rule)] underline-offset-4 transition-colors duration-[var(--dur-micro)] hover:text-[var(--color-electric)] hover:decoration-[var(--color-electric)]"
                    >
                      {fact.value}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <p className="text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                      {fact.value}
                    </p>
                  )}
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
