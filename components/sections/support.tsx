"use client";

import { Mail } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/magnetic-button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CONTACT_EMAIL } from "@/lib/constants";

export function Support() {
  return (
    <section id="support" className="relative scroll-mt-24 py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,246,255,0.8),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/60 px-8 py-14 shadow-[0_28px_80px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_50%),radial-gradient(circle_at_bottom,rgba(6,182,212,0.08),transparent_45%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
            />

            <div className="relative">
              <p className="mb-4 text-[12px] font-semibold tracking-[0.22em] text-ink/40 uppercase sm:text-[13px]">
                Support
              </p>
              <h2 className="text-balance text-[2.5rem] font-semibold tracking-[-0.05em] text-ink sm:text-5xl">
                Need help?
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[17px] leading-[1.7] text-ink-soft">
                We read every message. Reach out anytime — we&apos;re here to
                help.
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-9 inline-flex items-center gap-2.5 text-xl font-semibold tracking-tight text-ink transition-all duration-300 hover:gap-3.5 hover:text-atlas-blue sm:text-2xl"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-ink/[0.04] text-ink">
                  <Mail className="size-5" aria-hidden />
                </span>
                {CONTACT_EMAIL}
              </a>

              <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/privacy"
                  className="inline-flex min-w-[160px] items-center justify-center rounded-full border border-slate-900/8 bg-white/75 px-6 py-3 text-[15px] font-medium text-ink shadow-[0_8px_24px_rgba(15,23,42,0.04)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_32px_rgba(15,23,42,0.08)]"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="inline-flex min-w-[160px] items-center justify-center rounded-full border border-slate-900/8 bg-white/75 px-6 py-3 text-[15px] font-medium text-ink shadow-[0_8px_24px_rgba(15,23,42,0.04)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_32px_rgba(15,23,42,0.08)]"
                >
                  Terms of Service
                </Link>
                <MagneticButton
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="min-w-[160px] bg-ink text-white shadow-[0_16px_40px_rgba(15,23,42,0.18)] hover:bg-slate-800"
                >
                  Contact Support
                </MagneticButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
