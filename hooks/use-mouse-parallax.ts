"use client";

import {
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Parallax = { x: number; y: number };

/**
 * Smooth spring-based mouse parallax. Uses rAF-throttled updates for 60fps.
 */
export function useMouseParallax(strength = 12) {
  const reduced = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 90, damping: 22, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 90, damping: 22, mass: 0.4 });
  const [offset, setOffset] = useState<Parallax>({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) {
      rawX.set(0);
      rawY.set(0);
      setOffset({ x: 0, y: 0 });
      return;
    }

    let frame = 0;
    let latestX = 0;
    let latestY = 0;
    let pending = false;

    const flush = () => {
      pending = false;
      rawX.set(latestX);
      rawY.set(latestY);
    };

    const onMove = (event: MouseEvent) => {
      latestX = (event.clientX / window.innerWidth - 0.5) * strength;
      latestY = (event.clientY / window.innerHeight - 0.5) * strength;
      if (!pending) {
        pending = true;
        frame = requestAnimationFrame(flush);
      }
    };

    const unsubX = x.on("change", (value) =>
      setOffset((prev) => ({ ...prev, x: value }))
    );
    const unsubY = y.on("change", (value) =>
      setOffset((prev) => ({ ...prev, y: value }))
    );

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      unsubX();
      unsubY();
    };
  }, [rawX, rawY, reduced, strength, x, y]);

  return offset;
}

export function useSpringParallax(strength = 12) {
  const reduced = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 80, damping: 20, mass: 0.45 });
  const y = useSpring(rawY, { stiffness: 80, damping: 20, mass: 0.45 });
  const transform = useMotionTemplate`translate3d(${x}px, ${y}px, 0)`;
  const rotateX = useTransform(y, [-strength, strength], [4, -4]);
  const rotateY = useTransform(x, [-strength, strength], [-4, 4]);

  useEffect(() => {
    if (reduced) {
      rawX.set(0);
      rawY.set(0);
      return;
    }

    let frame = 0;
    let latestX = 0;
    let latestY = 0;
    let pending = false;

    const flush = () => {
      pending = false;
      rawX.set(latestX);
      rawY.set(latestY);
    };

    const onMove = (event: MouseEvent) => {
      latestX = (event.clientX / window.innerWidth - 0.5) * strength;
      latestY = (event.clientY / window.innerHeight - 0.5) * strength;
      if (!pending) {
        pending = true;
        frame = requestAnimationFrame(flush);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, [rawX, rawY, reduced, strength]);

  return { x, y, transform, rotateX, rotateY };
}
