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

export const SITE_TITLE = `${SITE_NAME} — AI-Native Software Studio`;

export const SITE_DESCRIPTION =
  "Tiny Atlas is an independent software studio building mobile apps, AI-powered tools, productivity software, and casual games.";

export const CONTACT_EMAIL = "info@tinyatlas.online";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.tinyhabit.tracker";

export const NAV_LINKS = [
  { href: "/#products", label: "Products" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = [
  { href: "/#products", label: "Products" },
  { href: "/#about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/#contact", label: "Contact" },
] as const;
