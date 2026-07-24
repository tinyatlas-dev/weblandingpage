"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MagneticButton } from "@/components/magnetic-button";
import { useActiveSection } from "@/hooks/use-active-section";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn, easeOutExpo } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow,padding] duration-500",
        scrolled || open
          ? "border-b border-white/50 bg-white/65 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-ink"
        >
          <span
            aria-hidden
            className="relative flex size-7 items-center justify-center overflow-hidden rounded-[9px] bg-ink shadow-[0_8px_20px_rgba(15,23,42,0.25)] transition-transform duration-500 group-hover:scale-105"
          >
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(125,211,252,0.95),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(167,139,250,0.8),transparent_50%)]" />
            <span className="relative size-1.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
          </span>
          {SITE_NAME}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
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
                    "group relative px-3.5 py-2 text-[14px] font-medium transition-colors",
                    isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-ink transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <MagneticButton
            href="#apps"
            className="bg-ink px-5 py-2.5 text-white shadow-[0_12px_32px_rgba(15,23,42,0.2)] hover:bg-slate-800"
            strength={0.28}
          >
            Explore Apps
          </MagneticButton>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-slate-900/5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: easeOutExpo }}
            className="border-t border-slate-900/5 bg-white/92 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-3 py-3 text-[15px] font-medium text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#apps"
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center justify-center rounded-full bg-ink text-[15px] font-medium text-white"
                >
                  Explore Apps
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
