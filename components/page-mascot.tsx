"use client";

import { Mascot } from "page-mascot";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const SIZE = 120;
const MARGIN = 12;
const DRAG_THRESHOLD = 8;
const STORAGE_KEY = "tiny-atlas:mascot-pos";

type Pos = { x: number; y: number };

function defaultPos(): Pos {
  return {
    x: window.innerWidth - SIZE - MARGIN,
    y: window.innerHeight - SIZE - MARGIN,
  };
}

function clamp(pos: Pos): Pos {
  const maxX = Math.max(MARGIN, window.innerWidth - SIZE - MARGIN);
  const maxY = Math.max(MARGIN, window.innerHeight - SIZE - MARGIN);
  return {
    x: Math.min(maxX, Math.max(MARGIN, pos.x)),
    y: Math.min(maxY, Math.max(MARGIN, pos.y)),
  };
}

export function PageMascot() {
  const [pos, setPos] = useState<Pos | null>(null);
  const [dragging, setDragging] = useState(false);
  const posRef = useRef<Pos | null>(null);
  const suppressClick = useRef(false);

  useEffect(() => {
    posRef.current = pos;
  }, [pos]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Pos;
        if (typeof parsed.x === "number" && typeof parsed.y === "number") {
          setPos(clamp(parsed));
          return;
        }
      }
    } catch {
      // ignore bad storage
    }
    setPos(defaultPos());
  }, []);

  useEffect(() => {
    const onResize = () => setPos((current) => (current ? clamp(current) : current));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!pos) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(pos));
    } catch {
      // ignore quota / private mode
    }
  }, [pos]);

  if (!pos) return null;

  return (
    <div
      className={cn(
        "fixed z-40 select-none",
        dragging ? "cursor-grabbing" : "cursor-grab",
      )}
      style={{ left: pos.x, top: pos.y, width: SIZE, height: SIZE }}
      title="Drag to move · click to boop"
      onPointerDown={(event) => {
        if (event.button !== 0) return;

        const origin = posRef.current ?? pos;
        const startX = event.clientX;
        const startY = event.clientY;
        let moved = false;

        const onMove = (moveEvent: PointerEvent) => {
          const dx = moveEvent.clientX - startX;
          const dy = moveEvent.clientY - startY;
          if (!moved && Math.hypot(dx, dy) < DRAG_THRESHOLD) return;

          moved = true;
          suppressClick.current = true;
          setDragging(true);
          setPos(clamp({ x: origin.x + dx, y: origin.y + dy }));
        };

        const onUp = () => {
          window.removeEventListener("pointermove", onMove);
          window.removeEventListener("pointerup", onUp);
          window.removeEventListener("pointercancel", onUp);
          setDragging(false);

          // Keep suppress through the trailing click after a drag.
          if (moved) {
            window.setTimeout(() => {
              suppressClick.current = false;
            }, 0);
          }
        };

        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerup", onUp);
        window.addEventListener("pointercancel", onUp);
      }}
      onClickCapture={(event) => {
        if (!suppressClick.current) return;
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      <Mascot
        directions="/mascots/otter-directions.webp"
        reactions="/mascots/otter-reactions.webp"
        size={SIZE}
        label="otter"
        className="drop-shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
      />
    </div>
  );
}
