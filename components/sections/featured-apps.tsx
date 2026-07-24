"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TiltCard } from "@/components/tilt-card";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { apps } from "@/lib/data";

function AppStoreBadge({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Download ${name} on the App Store`}
      className="inline-flex h-10 items-center gap-2 rounded-full bg-ink px-4 text-[13px] font-medium text-white shadow-[0_10px_24px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_14px_32px_rgba(37,99,235,0.25)]"
    >
      <svg aria-hidden viewBox="0 0 16 16" className="size-3.5 fill-current">
        <path d="M11.2 8.2c0-1.7 1.4-2.5 1.5-2.6-0.8-1.2-2.1-1.4-2.5-1.4-1.1-0.1-2.1 0.6-2.6 0.6s-1.4-0.6-2.3-0.6c-1.2 0-2.3 0.7-2.9 1.8-1.2 2.2-0.3 5.4 0.9 7.1 0.6 0.9 1.3 1.8 2.2 1.8 0.9 0 1.2-0.6 2.3-0.6s1.4 0.6 2.3 0.6c1 0 1.6-0.9 2.2-1.7 0.7-1 0.9-2 1-2.1-0.02-0.01-1.8-0.7-1.8-2.9zM9.4 2.9c0.5-0.6 0.8-1.4 0.7-2.2-0.7 0-1.6 0.5-2.1 1.1-0.5 0.5-0.9 1.4-0.8 2.2 0.8 0.1 1.6-0.4 2.2-1.1z" />
      </svg>
      App Store
    </a>
  );
}

export function FeaturedApps() {
  const reduced = useReducedMotion();

  return (
    <section id="apps" className="relative scroll-mt-24 py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,246,255,0.65),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[12px] font-semibold tracking-[0.22em] text-ink/40 uppercase sm:text-[13px]">
            Apps
          </p>
          <h2 className="text-balance text-[2.5rem] font-semibold tracking-[-0.05em] text-ink sm:text-5xl md:text-[3.4rem]">
            Software for the moments in between.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.7] text-ink-soft">
            Each app is intentionally small — focused on one job, done
            beautifully.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {apps.map((app, index) => (
            <ScrollReveal key={app.id} delay={index * 0.1}>
              <TiltCard
                intensity={9}
                className="gradient-border group h-full overflow-hidden rounded-[1.85rem] border border-white/80 bg-white/70 shadow-[0_22px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_36px_90px_rgba(15,23,42,0.14)]"
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${app.accent} opacity-40 transition-opacity duration-500 group-hover:opacity-80`}
                />

                {/* Floating mini screenshot */}
                <div className="relative px-5 pt-5">
                  <motion.div
                    className="relative mx-auto aspect-[9/14] w-[72%] overflow-hidden rounded-[1.35rem] border border-white/80 bg-[#0b1220] p-1.5 shadow-[0_24px_50px_rgba(15,23,42,0.22)]"
                    animate={reduced ? undefined : { y: [0, -6, 0] }}
                    transition={{
                      duration: 5.5 + index * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="relative h-full overflow-hidden rounded-[1.05rem]">
                      <Image
                        src={app.screenshot}
                        alt={`${app.name} preview`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="220px"
                        loading="lazy"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.3),transparent_35%)]"
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="relative flex flex-col p-6 pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <motion.div
                      whileHover={
                        reduced ? undefined : { y: -4, rotate: -3 }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                    >
                      <Image
                        src={app.icon}
                        alt={`${app.name} icon`}
                        width={52}
                        height={52}
                        className="rounded-[13px] shadow-[0_12px_28px_rgba(15,23,42,0.16)]"
                      />
                    </motion.div>
                    <a
                      href={app.learnMoreUrl}
                      className="inline-flex size-9 items-center justify-center rounded-full border border-slate-900/10 bg-white/80 text-ink transition-all duration-300 hover:bg-ink hover:text-white hover:shadow-[0_10px_24px_rgba(15,23,42,0.2)]"
                      aria-label={`Learn more about ${app.name}`}
                    >
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">
                    {app.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">
                    {app.description}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <AppStoreBadge href={app.appStoreUrl} name={app.name} />
                    <a
                      href={app.learnMoreUrl}
                      className="text-[14px] font-medium text-ink/65 transition-colors hover:text-ink"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
