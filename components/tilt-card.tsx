"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  intensity?: number;
  glow?: boolean;
};

export function TiltCard({
  children,
  className,
  style,
  intensity = 10,
  glow = true,
}: TiltCardProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowOpacity = useMotionValue(0);

  const springRotateX = useSpring(rotateX, {
    stiffness: 220,
    damping: 20,
    mass: 0.35,
  });
  const springRotateY = useSpring(rotateY, {
    stiffness: 220,
    damping: 20,
    mass: 0.35,
  });
  const springGlowX = useSpring(glowX, { stiffness: 180, damping: 24 });
  const springGlowY = useSpring(glowY, { stiffness: 180, damping: 24 });
  const springGlowOpacity = useSpring(glowOpacity, {
    stiffness: 200,
    damping: 28,
  });

  const transform = useMotionTemplate`perspective(1100px) rotateX(${springRotateX}deg) rotateY(${springRotateY}deg)`;
  const glowBackground = useMotionTemplate`radial-gradient(420px circle at ${springGlowX}% ${springGlowY}%, rgba(37,99,235,0.16), rgba(6,182,212,0.08) 35%, transparent 60%)`;

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * intensity);
    rotateY.set((px - 0.5) * intensity);
    glowX.set(px * 100);
    glowY.set(py * 100);
    glowOpacity.set(1);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ ...style, transform, transformStyle: "preserve-3d" }}
      className={cn("relative will-change-transform", className)}
    >
      {glow ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-multiply"
          style={{ background: glowBackground, opacity: springGlowOpacity }}
        />
      ) : null}
      <div style={{ transform: "translateZ(18px)" }} className="relative h-full">
        {children}
      </div>
    </motion.div>
  );
}
