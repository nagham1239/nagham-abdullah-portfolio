"use client";

import { motion } from "framer-motion";
import { PLAYER } from "@/data/portfolio";
import { PixelButton } from "@/components/ui/PixelButton";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { HeroPlayerCard } from "@/components/hero/HeroPlayerCard";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <motion.div
          className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="mb-2 font-pixel text-[10px] sm:text-xs text-neon-green tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            2026 · NEW GAME+
          </motion.p>

          <motion.div
            className="pixel-frame mb-6 w-full max-w-lg rounded-2xl p-6 sm:p-8 animate-pulse-glow"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-neon-pink text-glow-pink leading-relaxed">
              PORTFOLIO
            </h1>
          </motion.div>

          <motion.h2
            className="mb-3 font-pixel text-sm sm:text-base md:text-lg text-neon-cyan text-glow-cyan"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {PLAYER.name}
          </motion.h2>

          <motion.p
            className="mb-8 max-w-md font-ui text-lg sm:text-xl md:text-2xl text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {PLAYER.title}
          </motion.p>

          <motion.div
            className="mb-8 w-full max-w-sm space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <ProgressBar value={PLAYER.health} label="HP" variant="health" />
            <ProgressBar value={PLAYER.xpLevel * 25} label="XP" variant="xp" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <PixelButton onClick={scrollToAbout}>▶ Press Start</PixelButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 flex flex-col items-center lg:order-2"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p
            className="mb-4 font-pixel text-[8px] text-neon-cyan sm:text-[9px]"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ◆ PLAYER SELECT ◆
          </motion.p>
          <HeroPlayerCard />
          <p className="mt-4 max-w-xs text-center font-ui text-xs text-slate-500">
            Hover to explore · Tap your portrait to switch Dev, Design & Build modes
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-pixel text-[8px] text-slate-500">▼ SCROLL ▼</span>
      </motion.div>
    </section>
  );
}
