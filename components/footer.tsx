import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-900/[0.06] bg-[linear-gradient(180deg,#ffffff,rgba(248,250,252,0.9))]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <Link
            href="/"
            className="text-[15px] font-semibold tracking-tight text-ink transition-colors hover:text-atlas-blue"
          >
            {SITE_NAME}
          </Link>
          <p className="mt-2 text-sm text-ink-soft">© 2026 {SITE_NAME}</p>
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
                    className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
