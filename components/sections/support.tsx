"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CONTACT_EMAIL } from "@/lib/constants";

export function Support() {
  return (
    <section id="support" className="section-pad relative scroll-mt-28">
      <div className="page-shell">
        <ScrollReveal>
          <div className="grid items-end gap-[var(--space-xl)] border-t border-[var(--color-rule)] pt-[var(--space-2xl)] md:grid-cols-[1.1fr_0.9fr] md:gap-[var(--space-xl)] lg:gap-[var(--space-3xl)]">
            <div className="min-w-0">
              <h2 className="text-balance text-[length:var(--text-display-s)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--color-ink)]">
                Need a hand?
              </h2>
              <p className="mt-5 max-w-[36ch] text-[length:var(--text-lg)] leading-[1.7] text-[var(--color-ink-soft)]">
                We read every message. Reach out anytime — we&apos;re here to
                help.
              </p>
            </div>

            <div className="min-w-0">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block break-all text-[clamp(1.15rem,2.2vw+0.4rem,1.75rem)] font-semibold tracking-[-0.03em] text-[var(--color-ink)] underline decoration-[var(--color-rule)] underline-offset-4 transition-colors duration-[var(--dur-micro)] hover:text-[var(--color-electric)] hover:decoration-[var(--color-electric)]"
              >
                {CONTACT_EMAIL}
              </a>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <Link
                  href="/privacy"
                  className="glass-surface inline-flex h-11 w-full items-center justify-center whitespace-nowrap rounded-[var(--radius-pill)] px-5 text-[14px] font-medium text-[var(--color-ink)] transition-colors duration-[var(--dur-short)] hover:bg-[var(--color-paper-3)] sm:w-auto"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="glass-surface inline-flex h-11 w-full items-center justify-center whitespace-nowrap rounded-[var(--radius-pill)] px-5 text-[14px] font-medium text-[var(--color-ink)] transition-colors duration-[var(--dur-short)] hover:bg-[var(--color-paper-3)] sm:w-auto"
                >
                  Terms of Service
                </Link>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex h-11 w-full items-center justify-center whitespace-nowrap rounded-[var(--radius-pill)] bg-[var(--color-electric)] px-5 text-[14px] font-semibold text-[var(--color-accent-ink)] transition-[transform,opacity,box-shadow] duration-[var(--dur-micro)] hover:opacity-95 hover:shadow-[0_0_28px_var(--color-glow)] active:translate-y-px sm:w-auto"
                >
                  Contact support
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
