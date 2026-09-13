"use client";

import { motion } from "framer-motion";
import { PLAYER } from "@/data/portfolio";
import { PixelButton } from "@/components/ui/PixelButton";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { HeroPlayerCard } from "@/components/hero/HeroPlayerCard";
import { PixelChip } from "@/components/ui/PixelKit";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    /* Height adapts to the viewport instead of forcing 100vh: on short
       laptop screens the hero shrinks to fit rather than clipping, and
       it never grows taller than the screen minus the fixed HUD. */
    <section
      id="hero"
      className="hero-fit relative flex w-full items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-14">
        <motion.div
          className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="mb-2 font-pixel text-[9px] tracking-widest text-neon-green sm:text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            2026 · NEW GAME+
          </motion.p>

          <motion.div
            className="pixel-frame animate-pulse-glow mb-4 w-full max-w-lg rounded-2xl px-5 py-4 sm:px-8 sm:py-6"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-glow-pink font-pixel text-[clamp(1.45rem,5vw,3rem)] leading-tight text-neon-pink">
              PORTFOLIO
            </h1>
          </motion.div>

          <motion.h2
            className="text-glow-cyan mb-2.5 font-pixel text-[clamp(0.72rem,1.7vw,1.05rem)] leading-relaxed text-neon-cyan"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {PLAYER.name}
          </motion.h2>

          <motion.p
            className="mb-3.5 max-w-md font-ui text-[clamp(1rem,2vw,1.375rem)] leading-snug text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {PLAYER.title}
          </motion.p>

          {/* class roster — the professional positioning, in HUD form */}
          <motion.ul
            className="mb-5 flex flex-wrap justify-center gap-1.5 sm:gap-2 lg:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            {PLAYER.classes.map((role) => (
              <li key={role}>
                <PixelChip>{role}</PixelChip>
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="mb-5 w-full max-w-sm space-y-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <ProgressBar value={PLAYER.health} label="HP" variant="health" />
            <ProgressBar value={PLAYER.xpPercent} label="XP" variant="xp" />
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <PixelButton onClick={scrollToAbout}>▶ Press Start</PixelButton>
            <PixelButton
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              variant="secondary"
            >
              Missions
            </PixelButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 flex flex-col items-center lg:order-2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p
            className="mb-3 hidden font-pixel text-[8px] text-neon-cyan sm:block sm:text-[9px]"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ◆ PLAYER SELECT ◆
          </motion.p>
          <HeroPlayerCard />
          <p className="mt-3 hidden max-w-xs text-center font-ui text-xs text-slate-500 sm:block">
            Tap your portrait to switch Dev, Design &amp; Build modes
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-pixel text-[8px] text-slate-500">▼ SCROLL ▼</span>
      </motion.div>
    </section>
  );
}
