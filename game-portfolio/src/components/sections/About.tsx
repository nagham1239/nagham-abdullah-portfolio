"use client";

import { motion } from "framer-motion";
import { ABOUT, PLAYER } from "@/data/portfolio";
import { SectionWrapper, FadeInItem } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/PixelKit";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { PixelConsole } from "@/components/ui/PixelArt";

export function About() {
  return (
    <>
      <SectionDivider title="About Me" />
      <SectionWrapper id="about">
        <SectionHeader
          eyebrow="Player Profile"
          title="Meet the player"
          intro={PLAYER.name}
          tone="pink"
        />

        <motion.div
          className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <FadeInItem className="flex justify-center">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <PixelConsole className="h-48 w-56 sm:h-56 sm:w-72 md:h-64 md:w-80 drop-shadow-[0_0_40px_rgba(236,72,153,0.3)]" />
              <motion.div
                className="absolute -right-4 -top-4 font-pixel text-[8px] text-yellow-300 bg-purple-950 border-2 border-yellow-400/50 px-2 py-1"
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ONLINE
              </motion.div>
            </motion.div>
          </FadeInItem>

          <div className="space-y-6">
            <FadeInItem>
              <motion.div
                className="pixel-frame p-5 sm:p-6"
                whileHover={{ boxShadow: "0 0 40px rgba(244,114,182,0.2)" }}
              >
                <h4 className="mb-3 font-pixel text-[10px] sm:text-xs text-neon-pink">Hello!!</h4>
                <p className="mb-4 font-ui text-base sm:text-lg text-slate-300 leading-relaxed">
                  {ABOUT.intro}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {ABOUT.stats.map((stat) => (
                    <div key={stat.label} className="border border-pink-400/20 bg-pink-500/5 p-3">
                      <div className="font-pixel text-[8px] text-pink-400/70">{stat.label}</div>
                      <motion.div
                        className="font-ui text-sm sm:text-base text-neon-cyan"
                        whileHover={{ x: 4 }}
                      >
                        {stat.value}
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </FadeInItem>

            <FadeInItem delay={0.1}>
              <motion.div
                className="pixel-frame border-neon-cyan/50 p-5 sm:p-6"
                whileHover={{ borderColor: "rgba(34,211,238,0.6)" }}
              >
                <h4 className="mb-3 font-pixel text-[10px] sm:text-xs text-neon-cyan">Current Mission</h4>
                <p className="font-ui text-base sm:text-lg text-slate-300">{ABOUT.mission}</p>
              </motion.div>
            </FadeInItem>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {ABOUT.focus.map((item, i) => (
            <FadeInItem key={item} delay={i * 0.05}>
              <motion.div
                className="pixel-frame p-4 text-center"
                whileHover={{ y: -4, boxShadow: "0 0 30px rgba(168,85,247,0.25)" }}
              >
                <div className="mb-2 text-2xl">
                  {["⚔️", "🎨", "📐", "✨"][i]}
                </div>
                <div className="font-ui text-sm sm:text-base text-neon-green">{item}</div>
              </motion.div>
            </FadeInItem>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}
