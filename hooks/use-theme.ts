"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import {
  applyTheme,
  persistTheme,
  readStoredTheme,
  resolveTheme,
  type ThemeMode,
} from "@/lib/theme";

function subscribe(onStoreChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === "tiny-atlas-theme") onStoreChange();
  };
  const onCustom = () => onStoreChange();
  const media = window.matchMedia("(prefers-color-scheme: light)");
  const onSystem = () => {
    if (!readStoredTheme()) onStoreChange();
  };

  window.addEventListener("storage", onStorage);
  window.addEventListener("tiny-atlas-theme-change", onCustom);
  media.addEventListener("change", onSystem);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("tiny-atlas-theme-change", onCustom);
    media.removeEventListener("change", onSystem);
  };
}

function getSnapshot(): ThemeMode {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  return resolveTheme();
}

function getServerSnapshot(): ThemeMode {
  return "dark";
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    applyTheme(resolveTheme(), { animate: false });
    setReady(true);

    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onSystem = () => {
      if (readStoredTheme()) return;
      applyTheme(resolveTheme(), { animate: true });
      window.dispatchEvent(new Event("tiny-atlas-theme-change"));
    };
    media.addEventListener("change", onSystem);
    return () => media.removeEventListener("change", onSystem);
  }, []);

  const setTheme = useCallback((next: ThemeMode) => {
    applyTheme(next, { animate: true });
    persistTheme(next);
    window.dispatchEvent(new Event("tiny-atlas-theme-change"));
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  return { theme, setTheme, toggleTheme, ready };
}
