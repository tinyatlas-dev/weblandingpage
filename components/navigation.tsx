"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn, easeOutExpo } from "@/lib/utils";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[200] flex justify-center px-[var(--page-gutter)] pt-[var(--space-md)]">
      <nav
        className={cn(
          "pointer-events-auto glass-surface inline-flex max-w-[min(46rem,100%)] items-center gap-2 rounded-[var(--radius-pill)] px-2 py-2 shadow-[var(--shadow-nav)] sm:gap-3 sm:px-3",
          open &&
            "max-md:w-full max-md:flex-col max-md:items-stretch max-md:rounded-[1.5rem] max-md:p-3"
        )}
        aria-label="Primary"
      >
        <div className="flex w-full items-center justify-between gap-3 md:w-auto md:justify-start">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2.5 rounded-[var(--radius-pill)] px-2 py-1.5 text-[14px] font-medium tracking-tight text-[var(--color-ink)] transition-opacity duration-[var(--dur-short)] hover:opacity-80"
          >
            <span
              aria-hidden
              className="relative flex size-7 items-center justify-center overflow-hidden rounded-[9px] bg-[var(--color-paper-3)] shadow-[0_0_24px_var(--color-glow)]"
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,var(--color-accent),transparent_58%)] opacity-80" />
              <span className="relative size-1.5 rounded-full bg-[var(--color-ink)]" />
            </span>
            <span className="font-display text-[1.05rem] tracking-[-0.02em]">
              {SITE_NAME}
            </span>
          </Link>

          <div className="flex items-center gap-1.5 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full text-[var(--color-ink)] transition-colors duration-[var(--dur-micro)] hover:bg-[var(--color-paper-3)]"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <ul className="hidden items-center gap-0.5 md:flex">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.startsWith("#")
              ? link.href.slice(1)
              : "";
            const isActive = sectionId !== "" && active === sectionId;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block whitespace-nowrap rounded-[var(--radius-pill)] px-3.5 py-2 text-[13px] font-medium transition-colors duration-[var(--dur-micro)]",
                    isActive
                      ? "bg-[var(--color-paper-3)] text-[var(--color-ink)]"
                      : "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a
            href="#apps"
            className="inline-flex h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-[var(--radius-pill)] bg-[var(--color-ink)] px-4 text-[13px] font-medium text-[var(--color-paper)] transition-[transform,opacity] duration-[var(--dur-micro)] hover:opacity-90 active:translate-y-px"
          >
            Explore apps
          </a>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: easeOutExpo }}
              className="flex w-full flex-col gap-1 md:hidden"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-[var(--radius-md)] px-3 py-3 text-[15px] font-medium text-[var(--color-ink)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#apps"
                onClick={() => setOpen(false)}
                className="mt-1 flex h-12 items-center justify-center rounded-[var(--radius-pill)] bg-[var(--color-ink)] text-[15px] font-medium text-[var(--color-paper)]"
              >
                Explore apps
              </a>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}
