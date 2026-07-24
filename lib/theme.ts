export const THEME_STORAGE_KEY = "tiny-atlas-theme";

export type ThemeMode = "light" | "dark";

export function getSystemTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export function readStoredTheme(): ThemeMode | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (value === "light" || value === "dark") return value;
  } catch {
    /* private mode / blocked storage */
  }
  return null;
}

export function resolveTheme(): ThemeMode {
  return readStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme: ThemeMode, options?: { animate?: boolean }) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  const animate = options?.animate ?? false;

  if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    root.classList.add("theme-animating");
    window.setTimeout(() => {
      root.classList.remove("theme-animating");
    }, 480);
  }

  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
  root.classList.toggle("dark", theme === "dark");

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    const color =
      getComputedStyle(root).getPropertyValue("--theme-color-meta").trim() ||
      (theme === "dark" ? "#0a101c" : "#f4f7fb");
    meta.setAttribute("content", color);
  }
}

export function persistTheme(theme: ThemeMode) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
}

/** Inline bootstrap — keep in sync with applyTheme. Runs before paint. */
export const themeInitScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var s=localStorage.getItem(k);var t=(s==="light"||s==="dark")?s:(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");var r=document.documentElement;r.setAttribute("data-theme",t);r.style.colorScheme=t;if(t==="dark")r.classList.add("dark");else r.classList.remove("dark");}catch(e){var r=document.documentElement;r.setAttribute("data-theme","dark");r.style.colorScheme="dark";r.classList.add("dark");}})();`;
