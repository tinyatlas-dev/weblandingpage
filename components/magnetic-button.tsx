"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  className?: string;
  strength?: number;
  glow?: boolean;
};

export function MagneticButton({
  children,
  className,
  strength = 0.35,
  glow = true,
  ...props
}: MagneticButtonProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const rippleX = useMotionValue(50);
  const rippleY = useMotionValue(50);
  const rippleOpacity = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.35 });
  const springScale = useSpring(scale, { stiffness: 320, damping: 20 });
  const springRippleOpacity = useSpring(rippleOpacity, {
    stiffness: 200,
    damping: 24,
  });

  const transform = useMotionTemplate`translate3d(${springX}px, ${springY}px, 0) scale(${springScale})`;
  const rippleBackground = useMotionTemplate`radial-gradient(140px circle at ${rippleX}% ${rippleY}%, rgba(255,255,255,0.28), transparent 55%)`;

  const onMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * strength);
    y.set(offsetY * strength);
    scale.set(1.035);
    rippleX.set(((event.clientX - rect.left) / rect.width) * 100);
    rippleY.set(((event.clientY - rect.top) / rect.height) * 100);
    rippleOpacity.set(1);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
    rippleOpacity.set(0);
  };

  return (
    <motion.a
      ref={ref}
      style={{ transform }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      className={cn(
        "group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-[15px] font-medium transition-shadow duration-500",
        glow &&
          "shadow-[0_10px_30px_rgba(15,23,42,0.12)] hover:shadow-[0_18px_44px_rgba(37,99,235,0.22)]",
        className
      )}
      {...props}
    >
      {glow ? (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            opacity: springRippleOpacity,
            background: rippleBackground,
          }}
        />
      ) : null}
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
