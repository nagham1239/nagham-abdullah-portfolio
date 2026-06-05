"use client";

import { motion } from "framer-motion";
import { Lock, Star } from "lucide-react";
import { EXPERIENCE } from "@/data/portfolio";
import { SectionWrapper, FadeInItem } from "@/components/ui/SectionWrapper";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ProgressBar } from "@/components/ui/ProgressBar";

export function Experience() {
  const maxXp = EXPERIENCE[EXPERIENCE.length - 1].xp;

  return (
    <>
      <SectionDivider title="Level Progression" />
      <SectionWrapper id="experience">
        <FadeInItem>
          <motion.div className="mb-4 font-pixel text-xs sm:text-sm text-neon-green">World Map</motion.div>
          <h2 className="mb-3 font-ui text-2xl sm:text-3xl md:text-4xl text-slate-200">
            Level Progression
          </h2>
          <p className="mb-10 max-w-2xl font-ui text-base sm:text-lg text-slate-400">
            The path from HTML basics to leading frontend teams — each stage unlocked with experience.
          </p>
        </FadeInItem>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-green via-neon-cyan to-neon-purple hidden sm:block" />

          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {EXPERIENCE.map((node, i) => (
              <FadeInItem key={node.level} delay={i * 0.1}>
                <motion.div
                  className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8"
                  whileInView={{ x: [20, 0], opacity: [0, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <motion.div
                    className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border-2 font-pixel text-xs ${
                      node.unlocked
                        ? "border-neon-green bg-green-950 text-neon-green shadow-[0_0_20px_rgba(74,222,128,0.4)]"
                        : "border-slate-600 bg-slate-900 text-slate-600"
                    }`}
                    whileHover={node.unlocked ? { scale: 1.1, rotate: 5 } : {}}
                  >
                    {node.unlocked ? (
                      <Star className="h-5 w-5 fill-neon-green text-neon-green" />
                    ) : (
                      <Lock className="h-5 w-5" />
                    )}
                  </motion.div>

                  <motion.div
                    className={`pixel-frame flex-1 p-5 sm:p-6 ${
                      node.unlocked ? "" : "opacity-50"
                    }`}
                    whileHover={node.unlocked ? { x: 8, boxShadow: "0 0 30px rgba(34,211,238,0.15)" } : {}}
                  >
                    <motion.div className="mb-1 flex flex-wrap items-center gap-3">
                      <span className="font-pixel text-[8px] text-neon-cyan">
                        LVL {String(node.level).padStart(2, "0")}
                      </span>
                      {node.unlocked && (
                        <span className="font-ui text-xs text-neon-green">UNLOCKED</span>
                      )}
                    </motion.div>
                    <h3 className="mb-2 font-ui text-lg sm:text-xl text-white">{node.title}</h3>
                    <p className="mb-4 font-ui text-sm sm:text-base text-slate-400">
                      {node.description}
                    </p>
                    <ProgressBar
                      value={node.xp}
                      max={maxXp}
                      label={`${node.xp} XP`}
                      variant="xp"
                    />
                  </motion.div>
                </motion.div>
              </FadeInItem>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
