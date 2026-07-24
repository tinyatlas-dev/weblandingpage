"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn, easeOutExpo } from "@/lib/utils";

function SunGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <circle cx="12" cy="12" r="4.25" fill="currentColor" />
      <g
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.92"
      >
        <path d="M12 3.25v1.6" />
        <path d="M12 19.15v1.6" />
        <path d="M3.25 12h1.6" />
        <path d="M19.15 12h1.6" />
        <path d="M5.76 5.76l1.13 1.13" />
        <path d="M17.11 17.11l1.13 1.13" />
        <path d="M5.76 18.24l1.13-1.13" />
        <path d="M17.11 6.89l1.13-1.13" />
      </g>
    </svg>
  );
}

function MoonGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M15.1 3.4a8.6 8.6 0 1 0 5.5 15.1A7.15 7.15 0 0 1 15.1 3.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme, ready } = useTheme();
  const reduced = useReducedMotion();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={!ready}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      title={isDark ? "Light mode" : "Dark mode"}
      className={cn(
        "theme-toggle group relative inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full",
        "border border-[var(--color-glass-border)] bg-[var(--color-glass)]",
        "text-[var(--color-ink)] shadow-[var(--shadow-toggle)]",
        "transition-[transform,background-color,border-color,box-shadow,color] duration-[var(--dur-short)] ease-[var(--ease-out)]",
        "hover:bg-[var(--color-paper-3)] hover:shadow-[0_0_28px_var(--color-glow)]",
        "active:scale-[0.92]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]",
        "disabled:cursor-wait disabled:opacity-60",
        className
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-[3px] rounded-full bg-[radial-gradient(circle_at_30%_25%,var(--color-glow),transparent_62%)] opacity-0 transition-opacity duration-[var(--dur-short)] group-hover:opacity-100"
      />

      <span className="relative grid size-5 place-items-center">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="moon"
              className="absolute inset-0 grid place-items-center text-[var(--color-toggle-moon)]"
              initial={
                reduced
                  ? { opacity: 0 }
                  : { opacity: 0, rotate: -48, scale: 0.55, y: 4 }
              }
              animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
              exit={
                reduced
                  ? { opacity: 0 }
                  : { opacity: 0, rotate: 36, scale: 0.55, y: -4 }
              }
              transition={{ duration: reduced ? 0.12 : 0.38, ease: easeOutExpo }}
            >
              <MoonGlyph className="size-[1.15rem]" />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              className="absolute inset-0 grid place-items-center text-[var(--color-toggle-sun)]"
              initial={
                reduced
                  ? { opacity: 0 }
                  : { opacity: 0, rotate: 48, scale: 0.55, y: 4 }
              }
              animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
              exit={
                reduced
                  ? { opacity: 0 }
                  : { opacity: 0, rotate: -36, scale: 0.55, y: -4 }
              }
              transition={{ duration: reduced ? 0.12 : 0.38, ease: easeOutExpo }}
            >
              <SunGlyph className="size-[1.15rem]" />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </button>
  );
}
