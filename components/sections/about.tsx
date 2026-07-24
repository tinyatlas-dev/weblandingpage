"use client";

import {
  Gauge,
  Palette,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TiltCard } from "@/components/tilt-card";
import { features, type FeatureItem } from "@/lib/data";

const icons = {
  swift: Sparkles,
  android: Smartphone,
  design: Palette,
  performance: Gauge,
  privacy: ShieldCheck,
} as const;

function FeatureTile({ feature }: { feature: FeatureItem }) {
  const Icon = icons[feature.icon];

  return (
    <TiltCard
      intensity={8}
      className="group h-full overflow-hidden rounded-3xl border border-white/70 bg-white/65 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_28px_70px_rgba(15,23,42,0.1)]"
    >
      <div
        aria-hidden
        className="absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 18% 0%, rgba(37,99,235,0.1), transparent 42%), radial-gradient(circle at 90% 100%, rgba(6,182,212,0.1), transparent 40%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
      />
      <div className="relative">
        <div className="mb-5 inline-flex size-11 items-center justify-center rounded-2xl bg-slate-900/[0.04] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-400 group-hover:bg-ink group-hover:text-white group-hover:shadow-[0_10px_28px_rgba(15,23,42,0.25)]">
          <Icon className="size-5" aria-hidden />
        </div>
        <h3 className="text-lg font-semibold tracking-tight text-ink">
          {feature.title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
          {feature.description}
        </p>
      </div>
    </TiltCard>
  );
}

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent"
      />
      <div className="mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-24 lg:items-start">
        <ScrollReveal className="max-w-xl lg:sticky lg:top-32">
          <p className="mb-4 text-[12px] font-semibold tracking-[0.22em] text-ink/40 uppercase sm:text-[13px]">
            About
          </p>
          <h2 className="text-balance text-[2.5rem] font-semibold tracking-[-0.05em] text-ink sm:text-5xl md:text-[3.4rem]">
            Small studio.
            <br />
            Big attention to detail.
          </h2>
          <p className="mt-7 text-[17px] leading-[1.7] text-ink-soft">
            Tiny Atlas is an independent mobile app studio focused on building
            beautiful, fast, and delightful applications. We care about the quiet
            moments — the launch that feels instant, the gesture that feels
            natural, the interface that disappears into daily life.
          </p>
          <p className="mt-4 text-[17px] leading-[1.7] text-ink-soft">
            Beautiful software. Crafted with care. Built for everyday life.
          </p>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.id}
              delay={index * 0.07}
              className={
                index === features.length - 1 ? "sm:col-span-2" : undefined
              }
            >
              <FeatureTile feature={feature} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
