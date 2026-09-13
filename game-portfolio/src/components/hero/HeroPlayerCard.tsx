"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PLAYER, ABOUT } from "@/data/portfolio";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const PERSONAS = [
  {
    id: "dev",
    label: "DEV MODE",
    tagline: "Shipping clean, responsive code",
    accent: "#22d3ee",
    glow: "rgba(34, 211, 238, 0.45)",
  },
  {
    id: "design",
    label: "DESIGN MODE",
    tagline: "Crafting intuitive interfaces",
    accent: "#f472b6",
    glow: "rgba(244, 114, 182, 0.45)",
  },
  {
    id: "build",
    label: "BUILD MODE",
    tagline: "Turning ideas into experiences",
    accent: "#a855f7",
    glow: "rgba(168, 85, 247, 0.45)",
  },
] as const;

export function HeroPlayerCard() {
  const reducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [personaIdx, setPersonaIdx] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const persona = PERSONAS[personaIdx];

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reducedMotion || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: y * -10, y: x * 12 });
    },
    [reducedMotion]
  );

  const handleMouseLeave = () => {
    setHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  const cyclePersona = () => {
    setPersonaIdx((i) => (i + 1) % PERSONAS.length);
  };

  return (
    <div className="player-card relative w-full max-w-md lg:max-w-lg">
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute -inset-8 rounded-full blur-3xl"
        animate={{
          background: `radial-gradient(circle, ${persona.glow} 0%, transparent 70%)`,
          opacity: hovering ? 0.9 : 0.5,
        }}
        transition={{ duration: 0.5 }}
      />

      <div
        ref={cardRef}
        className="relative perspective-[900px]"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="pixel-frame overflow-hidden rounded-2xl"
          style={{
            transformStyle: "preserve-3d",
            boxShadow: hovering
              ? `0 0 50px ${persona.glow}, 4px 4px 0 rgba(0,0,0,0.5)`
              : undefined,
          }}
          animate={
            reducedMotion
              ? {}
              : {
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                  y: hovering ? -6 : 0,
                }
          }
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
        >
          {/* Header bar — player select */}
          <div
            className="flex items-center justify-between border-b-2 border-purple-500/30 px-4 py-2"
            style={{ background: `linear-gradient(90deg, ${persona.accent}15, transparent)` }}
          >
            <span className="font-pixel text-[8px] text-neon-green sm:text-[9px]">
              ★ PLAYER 1
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={persona.id}
                className="font-pixel text-[8px] sm:text-[9px]"
                style={{ color: persona.accent }}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
              >
                {persona.label}
              </motion.span>
            </AnimatePresence>
            <span className="font-pixel text-[8px] text-yellow-300 sm:text-[9px]">
              LVL 0{PLAYER.xpLevel}
            </span>
          </div>

          {/* Portrait area */}
          <button
            type="button"
            onClick={cyclePersona}
            className="group relative block w-full cursor-pointer border-0 bg-transparent p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
            aria-label="Switch player mode — Dev, Design, or Build"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0a0a18]">
              <Image
                src="/nagham-portrait.png"
                alt={`${PLAYER.name} — ${PLAYER.title}`}
                fill
                priority
                className="object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 90vw, 420px"
              />

              {/* Soft edge vignette only — keeps face clear */}
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at center, transparent 55%, rgba(6,6,26,0.5) 100%)`,
                  opacity: hovering ? 0.85 : 0.6,
                }}
              />

              {/* Corner brackets — frame only, not on face */}
              {(["tl", "tr", "bl", "br"] as const).map((corner) => (
                <span
                  key={corner}
                  className={`pointer-events-none absolute h-5 w-5 border-2 opacity-50 transition-opacity group-hover:opacity-80 ${
                    corner === "tl"
                      ? "left-3 top-3 border-r-0 border-b-0"
                      : corner === "tr"
                        ? "right-3 top-3 border-l-0 border-b-0"
                        : corner === "bl"
                          ? "bottom-3 left-3 border-r-0 border-t-0"
                          : "bottom-3 right-3 border-l-0 border-t-0"
                  }`}
                  style={{ borderColor: persona.accent }}
                />
              ))}
            </div>
          </button>

          {/* Footer stats */}
          <div className="space-y-2 border-t-2 border-purple-500/20 bg-black/50 px-4 py-3">
            <p className="font-pixel text-[7px] text-slate-500">TAP PORTRAIT TO SWITCH MODE</p>
            <AnimatePresence mode="wait">
              <motion.p
                key={persona.tagline}
                className="font-ui text-base text-slate-200 sm:text-lg"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
              >
                {persona.tagline}
              </motion.p>
            </AnimatePresence>
            <div className="flex flex-wrap gap-2">
              {ABOUT.stats.map((stat) => (
                <span
                  key={stat.label}
                  className="rounded border border-purple-500/25 bg-purple-950/40 px-2 py-0.5 font-pixel text-[7px] text-slate-400"
                >
                  {stat.label}:{" "}
                  <span className="text-neon-green">{stat.value}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
