export type AppItem = {
  id: string;
  name: string;
  description: string;
  icon: string;
  screenshot: string;
  accent: string;
  appStoreUrl: string;
  learnMoreUrl: string;
};

export type FeatureItem = {
  id: string;
  title: string;
  description: string;
  icon: "swift" | "android" | "design" | "performance" | "privacy";
};

export type StatItem = {
  id: string;
  value: number;
  suffix: string;
  label: string;
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
    description:
      "A calm focus timer that helps you reclaim attention without the noise.",
    icon: "/apps/northlight.svg",
    screenshot: "/screens/northlight.svg",
    accent: "from-sky-400/40 via-blue-500/20 to-transparent",
    appStoreUrl: "https://apps.apple.com",
    learnMoreUrl: "#apps",
  },
  {
    id: "harbor",
    name: "Harbor",
    description:
      "Private notes that feel as quiet as paper, with sync that stays out of the way.",
    icon: "/apps/harbor.svg",
    screenshot: "/screens/harbor.svg",
    accent: "from-violet-400/40 via-indigo-500/20 to-transparent",
    appStoreUrl: "https://apps.apple.com",
    learnMoreUrl: "#apps",
  },
  {
    id: "drift",
    name: "Drift",
    description:
      "Weather designed for glancing — clear, local, and beautifully restrained.",
    icon: "/apps/drift.svg",
    screenshot: "/screens/drift.svg",
    accent: "from-cyan-400/40 via-teal-500/20 to-transparent",
    appStoreUrl: "https://apps.apple.com",
    learnMoreUrl: "#apps",
  },
];

export const features: FeatureItem[] = [
  {
    id: "swiftui",
    title: "SwiftUI",
    description: "Native iOS experiences with fluid motion and system polish.",
    icon: "swift",
  },
  {
    id: "android",
    title: "Android",
    description: "Thoughtful Material Design with performance as a default.",
    icon: "android",
  },
  {
    id: "design",
    title: "Beautiful Design",
    description: "Every pixel considered — typography, spacing, and delight.",
    icon: "design",
  },
  {
    id: "performance",
    title: "Performance",
    description: "Instant launches. Smooth scrolling. Battery that lasts.",
    icon: "performance",
  },
  {
    id: "privacy",
    title: "Privacy First",
    description: "Your data stays yours. No tracking. No compromises.",
    icon: "privacy",
  },
];

export const stats: StatItem[] = [
  { id: "apps", value: 5, suffix: "", label: "Apps" },
  { id: "downloads", value: 100, suffix: "K+", label: "Downloads" },
  { id: "countries", value: 120, suffix: "+", label: "Countries" },
];

export const timeline: TimelineItem[] = [
  {
    id: "founded",
    year: "2022",
    title: "Tiny Atlas founded",
    description:
      "A small studio with a simple belief: software can feel calm and human.",
  },
  {
    id: "first-app",
    year: "2023",
    title: "First App",
    description:
      "Northlight shipped — our first step toward everyday delightful tools.",
  },
  {
    id: "10k",
    year: "2024",
    title: "10K Users",
    description:
      "A quiet community formed around apps that respect their time.",
  },
  {
    id: "100k",
    year: "2025",
    title: "100K Downloads",
    description:
      "Craft compounded. More people. Same attention to detail.",
  },
];
