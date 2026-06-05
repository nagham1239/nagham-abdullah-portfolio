"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { NAV_LINKS, PLAYER } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ProgressBar } from "@/components/ui/ProgressBar";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
  <header className="fixed top-0 left-0 right-0 z-50">
    <div className="glass-hud border-b-2 border-purple-500/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 font-pixel text-[8px] sm:text-[10px] text-neon-cyan hover:text-neon-green transition-colors"
        >
          <span className="text-neon-green">▶</span>
          {PLAYER.name.split(" ")[0]}
        </button>

        <motion.div
          className="hidden items-center gap-1 font-ui text-sm text-neon-cyan md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span>XP:</span>
          <span className="text-neon-green">{PLAYER.xpLabel}</span>
        </motion.div>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <motion.button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className={`relative px-3 py-2 font-ui text-base transition-colors ${
                activeId === link.id
                  ? "text-neon-green"
                  : "text-slate-400 hover:text-neon-pink"
              }`}
              whileHover={{ y: -2 }}
            >
              {link.label}
              {activeId === link.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-1/2 h-0.5 w-4/5 -translate-x-1/2 bg-neon-green shadow-[0_0_8px_rgba(74,222,128,0.8)]"
                />
              )}
            </motion.button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Heart className="h-4 w-4 fill-pink-400 text-pink-400" />
          <motion.div className="w-24 sm:w-32">
            <ProgressBar value={PLAYER.health} variant="health" showValue={false} />
          </motion.div>
          <span className="font-pixel text-[8px] text-pink-300">P1</span>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-neon-cyan lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

    <AnimatePresence>
      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="glass-hud border-b-2 border-purple-500/30 lg:hidden overflow-hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.id}
                type="button"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-3 text-left font-ui text-lg ${
                  activeId === link.id ? "text-neon-green" : "text-slate-300"
                }`}
              >
                {activeId === link.id && "▸ "}
                {link.label}
              </motion.button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  </header>
  );
}
