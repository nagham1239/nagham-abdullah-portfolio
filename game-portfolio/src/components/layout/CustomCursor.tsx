"use client";

import { useEffect, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Fine pointers only — never on touch devices. */
function useFinePointer() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(pointer: fine)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(pointer: fine)").matches,
    () => false
  );
}

/**
 * Pixel cursor. Position is held in motion values rather than state, so
 * pointer movement writes straight to the compositor and never triggers
 * a React re-render — which is what kept it from competing with scroll.
 */
export function CustomCursor() {
  const enabled = useFinePointer();
  const reduced = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const scale = useMotionValue(1);

  const ringX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;

    let frame = 0;
    let nextX = 0;
    let nextY = 0;

    const flush = () => {
      frame = 0;
      x.set(nextX - 8);
      y.set(nextY - 8);
    };

    const move = (e: MouseEvent) => {
      nextX = e.clientX;
      nextY = e.clientY;
      // Coalesce to one write per animation frame.
      if (!frame) frame = requestAnimationFrame(flush);
    };
    const down = () => scale.set(0.8);
    const up = () => scale.set(1);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down, { passive: true });
    window.addEventListener("mouseup", up, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [enabled, x, y, scale]);

  if (!enabled || reduced) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-4 w-4 border-2 border-neon-green bg-neon-green/20 shadow-[0_0_10px_rgba(74,222,128,0.6)] md:block"
        style={{ x, y, scale }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-10 w-10 rounded-full border border-pink-400/40 md:block"
        style={{ x: ringX, y: ringY, translateX: -12, translateY: -12 }}
        aria-hidden
      />
    </>
  );
}
