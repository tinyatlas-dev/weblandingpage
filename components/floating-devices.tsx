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
  depth?: number;
  scale?: number;
};

function PhoneDevice({
  screenshot,
  name,
  className,
  floatDelay = 0,
  rotateY = 0,
  rotateZ = 0,
  depth = 1,
  scale = 1,
}: DeviceProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const parallax = useSpringParallax(10 * depth);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 160, damping: 18 });
  const springTiltY = useSpring(tiltY, { stiffness: 160, damping: 18 });
  const combinedRotateY = useTransform(springTiltY, (value) => rotateY + value);

  const transform = useMotionTemplate`translate3d(${parallax.x}px, ${parallax.y}px, 0) perspective(1400px) rotateX(${springTiltX}deg) rotateY(${combinedRotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(py * -6);
    tiltY.set(px * 8);
  };

  const onLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div
      className={cn("relative", className)}
      animate={reduced ? undefined : { y: [0, -12, 0] }}
      transition={{
        duration: 6.2 + floatDelay,
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
          className="absolute -inset-x-8 bottom-[-10%] h-[22%] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.28),transparent_70%)] blur-xl"
        />

        <div
          aria-hidden
          className="absolute inset-[8%] -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.25),rgba(6,182,212,0.12),transparent_70%)] blur-2xl"
        />

        <div
          className={cn(
            "relative aspect-[9/19.2] w-[min(44vw,220px)] overflow-hidden rounded-[2.05rem]",
            "border border-white/80 bg-gradient-to-br from-[#1a2234] via-[#0b1220] to-[#151b2b] p-[8px]",
            "shadow-[0_40px_90px_rgba(15,23,42,0.32),0_8px_24px_rgba(15,23,42,0.18),inset_0_1px_0_rgba(255,255,255,0.25)]",
            "sm:w-[236px] md:w-[258px] lg:rounded-[2.4rem] lg:p-[9px]"
          )}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.28),transparent_28%,transparent_72%,rgba(255,255,255,0.08))]"
          />

          <div className="relative h-full overflow-hidden rounded-[1.55rem] bg-white lg:rounded-[1.9rem]">
            <div className="absolute left-1/2 top-2.5 z-10 h-[22px] w-[88px] -translate-x-1/2 rounded-full bg-[#0b1220] shadow-[inset_0_1px_2px_rgba(255,255,255,0.12)]" />
            <Image
              src={screenshot}
              alt={name + " app screenshot"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 44vw, 258px"
              priority
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.05)_22%,transparent_42%)]"
            />
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-[10%] top-[92%] h-24 opacity-[0.22]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,23,42,0.35), transparent)",
            maskImage: "linear-gradient(to bottom, black, transparent 80%)",
            transform: "scaleY(-1)",
            filter: "blur(2px)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export function FloatingDevices() {
  const [left, center, right] = apps;

  return (
    <div className="relative mx-auto mt-14 flex h-[440px] w-full max-w-5xl items-end justify-center [perspective:1600px] sm:mt-16 sm:h-[500px] md:h-[560px]">
      <PhoneDevice
        screenshot={left.screenshot}
        name={left.name}
        className="absolute left-[2%] top-[10%] z-10 hidden sm:block md:left-[6%]"
        floatDelay={0.35}
        rotateY={28}
        rotateZ={-8}
        depth={0.65}
        scale={0.86}
      />
      <PhoneDevice
        screenshot={center.screenshot}
        name={center.name}
        className="relative z-30"
        floatDelay={0}
        rotateY={0}
        rotateZ={0}
        depth={1.15}
        scale={1}
      />
      <PhoneDevice
        screenshot={right.screenshot}
        name={right.name}
        className="absolute right-[2%] top-[16%] z-10 hidden sm:block md:right-[6%]"
        floatDelay={0.7}
        rotateY={-28}
        rotateZ={8}
        depth={0.65}
        scale={0.86}
      />
    </div>
  );
}
