import { PLAY_STORE_URL } from "@/lib/constants";

export type AppItem = {
  id: string;
  name: string;
  screenshot: string;
};

export type StudioFact = {
  id: string;
  label: string;
  value: string;
  href?: string;
};

export type ProductItem = {
  id: string;
  name: string;
  description: string;
  status: string;
  cta: string;
  href: string;
};

export type TimelineItem = {
  id: string;
  year: string;
  title: string;
  description: string;
};

export const apps: AppItem[] = [
  {
    id: "northlight",
    name: "Northlight",
    screenshot: "/screens/northlight.svg",
  },
  {
    id: "harbor",
    name: "Harbor",
    screenshot: "/screens/harbor.svg",
  },
  {
    id: "drift",
    name: "Drift",
    screenshot: "/screens/drift.svg",
  },
];

export const product: ProductItem = {
  id: "tiny-habit-tracker",
  name: "Tiny Habit Tracker Offline",
  description:
    "A simple, private habit tracker designed for everyday consistency.",
  status: "Available on Google Play",
  cta: "View on Google Play",
  href: PLAY_STORE_URL,
};

export const studioFacts: StudioFact[] = [
  { id: "founded", label: "Founded", value: "2026" },
  { id: "studio", label: "Studio", value: "Independent" },
  {
    id: "product",
    label: "First product",
    value: "Tiny Habit Tracker Offline",
  },
  {
    id: "store",
    label: "Available",
    value: "Google Play",
    href: PLAY_STORE_URL,
  },
];

export const aiPractices = [
  "Product and market research",
  "Competitor analysis",
  "User review and feedback analysis",
  "Product ideation",
  "Software development with Claude Code",
  "ASO and marketing",
  "Product and growth analysis",
  "AI agent workflows",
] as const;

export const timeline: TimelineItem[] = [
  {
    id: "founded",
    year: "2026",
    title: "Tiny Atlas founded",
    description:
      "Independent software studio focused on useful, focused digital products.",
  },
  {
    id: "shipped",
    year: "Now",
    title: "First product shipped",
    description:
      "Tiny Habit Tracker Offline is now available on Google Play.",
  },
  {
    id: "next",
    year: "Next",
    title: "Building the next products",
    description:
      "Expanding our portfolio of mobile apps, AI-powered tools, and casual games.",
  },
];
