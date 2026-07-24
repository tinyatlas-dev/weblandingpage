"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
  once?: boolean;
};

const reveal: Variants = {
  hidden: (custom: { y: number; blur: boolean; reduced: boolean }) =>
    custom.reduced
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : {
          opacity: 0,
          y: custom.y,
          filter: custom.blur ? "blur(10px)" : "blur(0px)",
        },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 90, damping: 20, mass: 0.8 },
  },
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 28,
  blur = true,
  once = true,
}: ScrollRevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      custom={{ y, blur, reduced }}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
      transition={{ delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}
