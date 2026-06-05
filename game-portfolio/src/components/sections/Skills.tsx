"use client";

import { motion } from "framer-motion";
import { SKILLS, RARITY_STYLES } from "@/data/portfolio";
import { SectionWrapper, FadeInItem } from "@/components/ui/SectionWrapper";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ProgressBar } from "@/components/ui/ProgressBar";

export function Skills() {
  return (
    <>
      <SectionDivider title="Weapons / Inventory" />
      <SectionWrapper id="skills">
        <FadeInItem>
          <motion.div className="mb-4 font-pixel text-xs sm:text-sm text-neon-cyan">Inventory</motion.div>
          <h2 className="mb-3 font-ui text-2xl sm:text-3xl md:text-4xl text-slate-200">
            Weapons Mastery
          </h2>
          <p className="mb-10 max-w-2xl font-ui text-base sm:text-lg text-slate-400">
            Skills collected on the journey — each with its own rarity and power level.
          </p>
        </FadeInItem>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {SKILLS.map((skill, i) => {
            const style = RARITY_STYLES[skill.rarity];
            return (
              <FadeInItem key={skill.name} delay={i * 0.04}>
                <motion.div
                  className={`pixel-frame group relative overflow-hidden bg-gradient-to-br ${style.bg} ${style.border} border-2 ${style.glow} p-4 sm:p-5`}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <div className="mb-3 flex items-start justify-between">
                    <motion.span
                      className="text-2xl sm:text-3xl"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      {skill.icon}
                    </motion.span>
                    <span
                      className={`font-pixel text-[7px] sm:text-[8px] px-2 py-0.5 border ${style.border} text-slate-300`}
                    >
                      {style.label}
                    </span>
                  </div>
                  <h3 className="mb-3 font-ui text-lg sm:text-xl text-white group-hover:text-neon-green transition-colors">
                    {skill.name}
                  </h3>
                  <ProgressBar value={skill.level} label="LVL" variant="xp" />
                  <motion.div
                    className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/5"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </FadeInItem>
            );
          })}
        </motion.div>

        <FadeInItem className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {(["common", "rare", "epic", "legendary"] as const).map((r) => (
              <div key={r} className="flex items-center gap-2">
                <div className={`h-3 w-3 border-2 ${RARITY_STYLES[r].border}`} />
                <span className="font-ui text-sm text-slate-400">{RARITY_STYLES[r].label}</span>
              </div>
            ))}
          </div>
        </FadeInItem>
      </SectionWrapper>
    </>
  );
}
