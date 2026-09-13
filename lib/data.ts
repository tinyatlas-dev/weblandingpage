export type AppItem = {
  id: string;
  name: string;
  screenshot: string;
};

export type FeatureItem = {
  id: string;
  title: string;
  description: string;
  icon: "swift" | "android" | "design" | "performance" | "privacy";
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

export const timeline: TimelineItem[] = [
  {
    id: "founded",
    year: "2026",
    title: "Tiny Atlas founded",
    description:
      "A new studio with a simple belief: software can feel calm and human.",
  },
  {
    id: "building",
    year: "Now",
    title: "Building in public",
    description:
      "Sketching the first products — small tools made with care, not haste.",
  },
  {
    id: "next",
    year: "Next",
    title: "First release ahead",
    description:
      "We're just getting started. The first app is on the way.",
  },
];
