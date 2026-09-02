"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { apps } from "@/lib/data";
import { cn } from "@/lib/utils";

function AppStoreBadge({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Download ${name} on the App Store`}
      className="inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-[var(--radius-pill)] bg-[var(--color-ink)] px-4 text-[13px] font-medium text-[var(--color-paper)] transition-[transform,opacity] duration-[var(--dur-micro)] hover:opacity-90 active:translate-y-px"
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
    <section id="apps" className="section-pad relative scroll-mt-28">
      <div className="page-shell">
        <ScrollReveal className="max-w-2xl">
          <h2 className="text-balance text-[length:var(--text-display-s)] leading-[1.05] text-[var(--color-ink)]">
            Software for the moments in between.
          </h2>
          <p className="mt-5 max-w-[40ch] text-[length:var(--text-lg)] leading-[1.7] text-[var(--color-ink-soft)]">
            Each app is intentionally small — focused on one job, done
            beautifully.
          </p>
        </ScrollReveal>

        <div className="mt-[var(--space-2xl)] grid gap-[var(--space-3xl)]">
          {apps.map((app, index) => {
            const reverse = index % 2 === 1;

            return (
              <ScrollReveal key={app.id} delay={index * 0.06}>
                <article
                  className={cn(
                    "grid items-center gap-[var(--space-xl)] md:grid-cols-2 md:gap-[var(--space-xl)] lg:gap-[var(--space-2xl)]",
                    reverse && "md:[&>*:first-child]:order-2"
                  )}
                >
                  <div className="relative min-w-0">
                    <div
                      aria-hidden
                      className="absolute inset-[12%] -z-10 rounded-full bg-[radial-gradient(circle,var(--color-glow),transparent_70%)] blur-2xl"
                    />
                    <motion.div
                      className="relative mx-auto aspect-[9/16] w-[min(70%,14.5rem)] overflow-hidden rounded-[1.75rem] border border-[var(--color-glass-border)] bg-[var(--color-paper-2)] p-1.5 shadow-[var(--shadow-card)] sm:w-[min(55%,16rem)]"
                      animate={reduced ? undefined : { y: [0, -8, 0] }}
                      transition={{
                        duration: 5.8 + index * 0.35,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="relative h-full overflow-hidden rounded-[1.35rem]">
                        <Image
                          src={app.screenshot}
                          alt={`${app.name} preview`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 70vw, 256px"
                          loading="lazy"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Image
                        src={app.icon}
                        alt=""
                        width={52}
                        height={52}
                        className="size-11 shrink-0 rounded-[13px] shadow-[var(--shadow-icon)] sm:size-[52px]"
                      />
                      <div className="min-w-0">
                        <h3 className="font-display text-[clamp(1.5rem,1.1rem+2vw,2rem)] leading-none tracking-[-0.02em] text-[var(--color-ink)]">
                          {app.name}
                        </h3>
                        <p className="mt-3 max-w-[36ch] text-[15px] leading-relaxed text-[var(--color-ink-soft)] sm:mt-4">
                          {app.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
                      <AppStoreBadge href={app.appStoreUrl} name={app.name} />
                      <a
                        href={app.learnMoreUrl}
                        className="inline-flex min-h-11 items-center gap-1.5 text-[14px] font-medium text-[var(--color-ink-soft)] transition-colors duration-[var(--dur-micro)] hover:text-[var(--color-ink)]"
                      >
                        Learn more
                        <ArrowUpRight className="size-4" aria-hidden />
                      </a>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
