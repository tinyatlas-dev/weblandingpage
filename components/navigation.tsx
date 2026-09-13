"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { NAV_LINKS } from "@/lib/constants";
import { cn, easeOutExpo } from "@/lib/utils";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[200] transition-[background-color,border-color,backdrop-filter] duration-[var(--dur-short)]",
        scrolled || open
          ? "border-b border-[var(--color-rule)] bg-[color-mix(in_srgb,var(--color-paper)_82%,transparent)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        className="page-shell flex items-center justify-between gap-4 py-3 sm:py-4"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="relative z-10 min-w-0 rounded-[var(--radius-md)] transition-opacity duration-[var(--dur-short)] hover:opacity-80"
        >
          <BrandLogo size={30} priority />
        </Link>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 lg:flex">
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
                      "block whitespace-nowrap rounded-[var(--radius-pill)] px-3.5 py-2 text-[13px] font-medium tracking-[0.04em] uppercase transition-colors duration-[var(--dur-micro)]",
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

          <ThemeToggle />

          <a
            href="#about"
            className="hidden h-10 items-center justify-center rounded-[var(--radius-pill)] bg-[var(--color-electric)] px-4 text-[13px] font-semibold text-[var(--color-accent-ink)] transition-[transform,opacity,box-shadow] duration-[var(--dur-micro)] hover:opacity-95 hover:shadow-[0_0_28px_var(--color-glow)] active:translate-y-px lg:inline-flex"
          >
            About us
          </a>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-[var(--color-ink)] transition-colors duration-[var(--dur-micro)] hover:bg-[var(--color-paper-3)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: easeOutExpo }}
            className="border-t border-[var(--color-rule)] bg-[var(--color-paper)] lg:hidden"
          >
            <div className="page-shell flex flex-col gap-1 py-4">
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
                href="#about"
                onClick={() => setOpen(false)}
                className="mt-2 flex h-12 items-center justify-center rounded-[var(--radius-pill)] bg-[var(--color-electric)] text-[15px] font-semibold text-[var(--color-accent-ink)]"
              >
                About us
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
