"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function Star({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute text-yellow-300"
      style={style}
      animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
      transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
    >
      ✦
    </motion.div>
  );
}

function Cloud({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute opacity-30 ${className}`}
      animate={{ x: [0, 20, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 80 40" className="h-8 w-16 sm:h-10 sm:w-20 fill-purple-400/40">
        <rect x="10" y="20" width="10" height="10" />
        <rect x="20" y="15" width="10" height="10" />
        <rect x="30" y="10" width="20" height="10" />
        <rect x="50" y="15" width="10" height="10" />
        <rect x="60" y="20" width="10" height="10" />
        <rect x="20" y="25" width="40" height="10" />
      </svg>
    </motion.div>
  );
}

function Particle({ delay }: { delay: number }) {
  return (
    <motion.div
      className="absolute h-1 w-1 rounded-full bg-cyan-400/60"
      style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
      animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

export function BackgroundEffects() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || reduced) return <motion.div className="pointer-events-none fixed inset-0 -z-10 bg-bg-deep" />;

  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${(i * 37) % 100}%`,
    top: `${(i * 23) % 100}%`,
    fontSize: `${8 + (i % 4) * 4}px`,
    animationDelay: `${(i % 5) * 0.6}s`,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg-deep">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(168,85,247,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(244,114,182,0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(34,211,238,0.05) 0%, transparent 60%)",
        }}
      />
      {stars.map((s) => (
        <Star key={s.id} style={{ left: s.left, top: s.top, fontSize: s.fontSize }} />
      ))}
      <Cloud className="left-[5%] top-[15%]" />
      <Cloud className="right-[10%] top-[35%]" />
      <Cloud className="left-[60%] top-[70%]" />
      {Array.from({ length: 12 }, (_, i) => (
        <Particle key={i} delay={i * 0.5} />
      ))}
    </div>
  );
}
