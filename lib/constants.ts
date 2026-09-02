const DEFAULT_SITE_URL = "https://tinyatlas.app";

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;

  try {
    const url = new URL(raw);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return DEFAULT_SITE_URL;
    }
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const SITE_URL = resolveSiteUrl();

export const SITE_NAME = "Tiny Atlas";

export const SITE_DESCRIPTION =
  "Independent mobile app studio crafting beautiful, fast, and delightful applications for everyday life.";

export const CONTACT_EMAIL = "tinyatlas.apps@gmail.com";

export const NAV_LINKS = [
  { href: "#apps", label: "Apps" },
  { href: "#about", label: "About" },
  { href: "#support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
] as const;

export const FOOTER_LINKS = [
  { href: "#apps", label: "Apps" },
  { href: "/privacy", label: "Privacy" },
  { href: "#support", label: "Support" },
  {
    href: "https://github.com/tinyatlas",
    label: "GitHub",
    external: true,
  },
] as const;
