"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { product } from "@/lib/data";

export function Products() {
  return (
    <section
      id="products"
      className="section-pad relative scroll-mt-28"
      aria-labelledby="products-heading"
    >
      <div className="page-shell grid items-start gap-[var(--space-2xl)] md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-[var(--space-xl)] lg:gap-[var(--space-3xl)]">
        <ScrollReveal className="max-w-md md:sticky md:top-28 md:self-start lg:top-32">
          <h2
            id="products-heading"
            className="text-balance text-[length:var(--text-display-s)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--color-ink)]"
          >
            First product shipped.
          </h2>
          <p className="mt-5 max-w-[36ch] text-[length:var(--text-lg)] leading-[1.7] text-[var(--color-ink-soft)]">
            Tiny Habit Tracker Offline is public on Google Play. It is the
            studio&apos;s first release.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <article className="glass-surface relative overflow-hidden rounded-[var(--radius-lg)] p-6 sm:p-8 lg:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-16 size-64 rounded-full bg-[radial-gradient(circle,var(--color-glow),transparent_68%)] blur-2xl"
            />
            <div className="relative min-w-0">
              <p className="text-[11px] font-medium tracking-[0.14em] text-[var(--color-accent)] uppercase">
                {product.status}
              </p>
              <h3 className="mt-3 text-balance text-[clamp(1.45rem,1rem+1.4vw,2rem)] font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                {product.name}
              </h3>
              <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                {product.description}
              </p>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-[var(--radius-pill)] bg-[var(--color-electric)] px-6 text-[15px] font-semibold whitespace-nowrap text-[var(--color-accent-ink)] transition-[transform,opacity,box-shadow] duration-[var(--dur-micro)] hover:opacity-95 hover:shadow-[0_0_36px_var(--color-glow)] active:translate-y-px sm:w-auto"
              >
                {product.cta}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
