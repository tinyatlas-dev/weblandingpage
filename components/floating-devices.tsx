"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useSpringParallax } from "@/hooks/use-mouse-parallax";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { apps } from "@/lib/data";
import { cn } from "@/lib/utils";

type DeviceProps = {
  screenshot: string;
  name: string;
  className?: string;
  floatDelay?: number;
  rotateY?: number;
  rotateZ?: number;
  rotateX?: number;
  depth?: number;
  scale?: number;
  priority?: boolean;
};

function PhoneDevice({
  screenshot,
  name,
  className,
  floatDelay = 0,
  rotateY = 0,
  rotateZ = 0,
  rotateX = 0,
  depth = 1,
  scale = 1,
  priority = false,
}: DeviceProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const parallax = useSpringParallax(12 * depth);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 160, damping: 18 });
  const springTiltY = useSpring(tiltY, { stiffness: 160, damping: 18 });
  const combinedRotateX = useTransform(
    springTiltX,
    (value) => rotateX + value
  );
  const combinedRotateY = useTransform(
    springTiltY,
    (value) => rotateY + value
  );

  const transform = useMotionTemplate`translate3d(${parallax.x}px, ${parallax.y}px, 0) perspective(1600px) rotateX(${combinedRotateX}deg) rotateY(${combinedRotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(py * -7);
    tiltY.set(px * 9);
  };

  const onLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div
      className={cn("relative", className)}
      animate={reduced ? undefined : { y: [0, -14, 0] }}
      transition={{
        duration: 6.4 + floatDelay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: floatDelay,
      }}
    >
      <motion.div
        ref={ref}
        className="relative [transform-style:preserve-3d]"
        style={{ transform }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div
          aria-hidden
          className="absolute -inset-x-10 bottom-[-12%] h-[24%] rounded-[100%] bg-[radial-gradient(ellipse_at_center,oklch(0%_0_0/0.45),transparent_70%)] blur-xl"
        />

        <div
          aria-hidden
          className="absolute inset-[6%] -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_30%,var(--color-glow),transparent_70%)] blur-2xl"
        />

        <div
          className={cn(
            "relative aspect-[9/19.2] w-[min(42vw,210px)] overflow-hidden rounded-[2.05rem]",
            "border border-[var(--color-glass-border)] bg-[linear-gradient(160deg,var(--color-paper-3),var(--color-paper))] p-[7px]",
            "shadow-[0_40px_90px_oklch(0%_0_0/0.55),0_8px_24px_oklch(0%_0_0/0.35),inset_0_1px_0_var(--color-glass-border)]",
            "sm:w-[230px] md:w-[248px] lg:rounded-[2.35rem] lg:p-[8px]"
          )}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,oklch(94%_0.01_250/0.22),transparent_30%,transparent_70%,oklch(94%_0.01_250/0.06))]"
          />

          <div className="relative h-full overflow-hidden rounded-[1.55rem] bg-[var(--color-paper-2)] lg:rounded-[1.85rem]">
            <div className="absolute left-1/2 top-2.5 z-10 h-[22px] w-[88px] -translate-x-1/2 rounded-full bg-[var(--color-paper)] shadow-[inset_0_1px_2px_var(--color-glass-border)]" />
            <Image
              src={screenshot}
              alt={`${name} app screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 42vw, 248px"
              priority={priority}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,oklch(94%_0.01_250/0.18)_0%,oklch(94%_0.01_250/0.04)_22%,transparent_42%)]"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FloatingDevices({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [left, center, right] = apps;

  return (
    <div
      className={cn(
        "relative mx-auto flex w-full max-w-xl items-end justify-center [perspective:1800px]",
        compact
          ? "h-[380px] sm:h-[440px] md:h-[500px]"
          : "mt-10 h-[420px] sm:mt-12 sm:h-[500px] md:h-[560px]"
      )}
    >
      <PhoneDevice
        screenshot={left.screenshot}
        name={left.name}
        className="absolute left-[-4%] top-[8%] z-10 hidden sm:block md:left-[-2%]"
        floatDelay={0.35}
        rotateY={32}
        rotateX={6}
        rotateZ={-10}
        depth={0.7}
        scale={0.82}
      />
      <PhoneDevice
        screenshot={center.screenshot}
        name={center.name}
        className="relative z-30"
        floatDelay={0}
        rotateY={-6}
        rotateX={4}
        rotateZ={0}
        depth={1.2}
        scale={1}
        priority
      />
      <PhoneDevice
        screenshot={right.screenshot}
        name={right.name}
        className="absolute right-[-4%] top-[14%] z-20 hidden sm:block md:right-[-2%]"
        floatDelay={0.7}
        rotateY={-34}
        rotateX={8}
        rotateZ={10}
        depth={0.75}
        scale={0.84}
      />
    </div>
  );
}
