"use client";

import { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type PointerGlow = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  background: ReturnType<typeof useMotionTemplate>;
  onMove: (event: React.MouseEvent<HTMLElement>) => void;
  onLeave: () => void;
};

export function usePointerGlow(size = 420): PointerGlow {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 160, damping: 28, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 160, damping: 28, mass: 0.35 });
  const springOpacity = useSpring(opacity, {
    stiffness: 180,
    damping: 26,
  });

  useEffect(() => {
    if (reduced) opacity.set(0);
  }, [opacity, reduced]);

  const background = useMotionTemplate`radial-gradient(${size}px circle at ${springX}px ${springY}px, rgba(37,99,235,0.14), rgba(124,58,237,0.08) 32%, transparent 62%)`;

  const onMove = (event: React.MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
    opacity.set(1);
  };

  const onLeave = () => {
    opacity.set(0);
  };

  return {
    x: springX,
    y: springY,
    opacity: springOpacity,
    background,
    onMove,
    onLeave,
  };
}
