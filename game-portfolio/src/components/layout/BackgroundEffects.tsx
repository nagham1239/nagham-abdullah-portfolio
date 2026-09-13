"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

/* ------------------------------------------------------------------ *
 * Fixed starfield behind the whole page.
 *
 * Performance: every moving part here is a pure CSS transform/opacity
 * keyframe on the compositor — no JS animation frames, no scroll
 * listeners, no filters. That matters because this layer is
 * position:fixed and would otherwise repaint on every scroll tick.
 * Counts scale down on small screens via CSS, and everything stops
 * under prefers-reduced-motion.
 * ------------------------------------------------------------------ */

const STAR_COUNT = 18;
const PARTICLE_COUNT = 8;

const stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 23) % 100}%`,
  fontSize: `${8 + (i % 4) * 4}px`,
  duration: `${3 + (i % 5) * 0.6}s`,
  delay: `${(i % 7) * 0.45}s`,
}));

const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  left: `${(i * 41) % 100}%`,
  top: `${(i * 29) % 100}%`,
  delay: `${i * 0.5}s`,
}));

export function BackgroundEffects() {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className="pointer-events-none fixed inset-0 -z-10 bg-bg-deep" />;
  }

  return (
    <div className="bg-layer pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg-deep">
      <div className="bg-nebula absolute inset-0" />

      {stars.map((s) => (
        <span
          key={s.id}
          className="star-dot absolute text-yellow-300"
          style={{
            left: s.left,
            top: s.top,
            fontSize: s.fontSize,
            animationDuration: s.duration,
            animationDelay: s.delay,
          }}
        >
          ✦
        </span>
      ))}

      <Cloud className="left-[5%] top-[15%]" delay="0s" />
      <Cloud className="right-[10%] top-[35%]" delay="-4s" />
      <Cloud className="left-[60%] top-[70%] hidden sm:block" delay="-8s" />

      {particles.map((p) => (
        <span
          key={p.id}
          className="particle-dot absolute hidden h-1 w-1 rounded-full bg-cyan-400/60 sm:block"
          style={{ left: p.left, top: p.top, animationDelay: p.delay }}
        />
      ))}
    </div>
  );
}

function Cloud({ className, delay }: { className: string; delay: string }) {
  return (
    <div
      className={`cloud-drift absolute opacity-30 ${className}`}
      style={{ animationDelay: delay }}
    >
      <svg viewBox="0 0 80 40" className="h-8 w-16 fill-purple-400/40 sm:h-10 sm:w-20">
        <rect x="10" y="20" width="10" height="10" />
        <rect x="20" y="15" width="10" height="10" />
        <rect x="30" y="10" width="20" height="10" />
        <rect x="50" y="15" width="10" height="10" />
        <rect x="60" y="20" width="10" height="10" />
        <rect x="20" y="25" width="40" height="10" />
      </svg>
    </div>
  );
}
