"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ACHIEVEMENTS } from "@/data/portfolio";
import { SectionWrapper, FadeInItem } from "@/components/ui/SectionWrapper";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function Achievements() {
  const [popup, setPopup] = useState<string | null>(null);

  return (
    <>
      <SectionDivider title="Achievements Unlocked" />
      <SectionWrapper id="achievements">
        <FadeInItem>
          <motion.div className="mb-4 font-pixel text-xs sm:text-sm text-yellow-300">Trophy Room</motion.div>
          <h2 className="mb-3 font-ui text-2xl sm:text-3xl md:text-4xl text-slate-200">
            Achievements Unlocked
          </h2>
          <p className="mb-10 max-w-2xl font-ui text-base sm:text-lg text-slate-400">
            Badges earned through battles with bugs, deadlines, and design challenges.
          </p>
        </FadeInItem>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {ACHIEVEMENTS.map((achievement, i) => (
            <FadeInItem key={achievement.id} delay={i * 0.06}>
              <motion.button
                type="button"
                className={`pixel-frame w-full p-5 sm:p-6 text-left transition-all ${
                  achievement.unlocked
                    ? "hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]"
                    : "opacity-40 grayscale"
                }`}
                whileHover={achievement.unlocked ? { y: -4, scale: 1.02 } : {}}
                whileTap={achievement.unlocked ? { scale: 0.98 } : {}}
                onClick={() => achievement.unlocked && setPopup(achievement.id)}
              >
                <motion.div
                  className="mb-3 text-3xl sm:text-4xl"
                  animate={achievement.unlocked ? { rotate: [0, 5, -5, 0] } : {}}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                >
                  {achievement.icon}
                </motion.div>
                <h3 className="mb-2 font-pixel text-[9px] sm:text-[10px] text-yellow-300">
                  {achievement.title}
                </h3>
                <p className="font-ui text-sm text-slate-400">{achievement.description}</p>
                {achievement.unlocked && (
                  <motion.div className="mt-3 font-pixel text-[7px] text-neon-green">★ UNLOCKED ★</motion.div>
                )}
              </motion.button>
            </FadeInItem>
          ))}
        </motion.div>

        <AnimatePresence>
          {popup && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPopup(null)}
            >
              {(() => {
                const a = ACHIEVEMENTS.find((x) => x.id === popup);
                if (!a) return null;
                return (
                  <motion.div
                    className="pixel-frame max-w-sm p-8 text-center"
                    initial={{ scale: 0.5, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.5, y: 50 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <motion.div
                      className="mb-4 text-5xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      {a.icon}
                    </motion.div>
                    <div className="mb-2 font-pixel text-xs text-yellow-300">ACHIEVEMENT UNLOCKED!</div>
                    <h3 className="mb-3 font-ui text-xl text-neon-pink">{a.title}</h3>
                    <p className="mb-6 font-ui text-sm text-slate-300">{a.description}</p>
                    <motion.button
                      type="button"
                      className="pixel-btn px-6 py-3 font-pixel text-[10px]"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setPopup(null)}
                    >
                      Continue
                    </motion.button>
                  </motion.div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </SectionWrapper>
    </>
  );
}
