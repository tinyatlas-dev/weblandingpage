import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-rule)]">
      <div className="page-shell grid gap-[var(--space-xl)] py-[var(--space-2xl)] sm:py-[var(--space-3xl)]">
        <p className="font-display max-w-[18ch] text-[clamp(1.75rem,5vw,3.25rem)] leading-[1.02] tracking-[-0.02em] text-[var(--color-ink)]">
          Build something they&apos;ll keep.
        </p>

        <div className="flex flex-col gap-[var(--space-lg)] border-t border-[var(--color-rule)] pt-[var(--space-lg)] sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              href="/"
              className="font-display text-[1.15rem] tracking-[-0.02em] text-[var(--color-ink)] transition-opacity duration-[var(--dur-short)] hover:opacity-80"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-2 text-[var(--text-sm)] text-[var(--color-ink-soft)]">
              © 2026 {SITE_NAME}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whitespace-nowrap text-[var(--text-sm)] font-medium text-[var(--color-ink-soft)] transition-colors duration-[var(--dur-micro)] hover:text-[var(--color-ink)]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="whitespace-nowrap text-[var(--text-sm)] font-medium text-[var(--color-ink-soft)] transition-colors duration-[var(--dur-micro)] hover:text-[var(--color-ink)]"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
