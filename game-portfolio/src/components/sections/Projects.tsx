"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Swords } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { SectionWrapper, FadeInItem } from "@/components/ui/SectionWrapper";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { PixelButton } from "@/components/ui/PixelButton";

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <FadeInItem delay={index * 0.08}>
      <motion.article
        className="pixel-frame group overflow-hidden"
        layout
        whileHover={{ boxShadow: "0 0 40px rgba(168,85,247,0.2)" }}
      >
        <button
          type="button"
          className="w-full text-left"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <div className={`relative h-40 sm:h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-pixel text-sm sm:text-base text-white/80 drop-shadow-lg">
                MISSION {String(index + 1).padStart(2, "0")}
              </span>
            </motion.div>
            <div className="absolute top-3 left-3 font-pixel text-[8px] bg-purple-950/80 border border-purple-400/50 px-2 py-1 text-neon-green">
              {expanded ? "ACTIVE" : "AVAILABLE"}
            </div>
            <motion.div
              className="absolute top-3 right-3 text-slate-300"
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </div>

          <div className="p-5 sm:p-6">
            <h3 className="mb-2 font-pixel text-xs sm:text-sm text-neon-pink group-hover:text-glow-pink transition-all">
              {project.title}
            </h3>
            <p className="mb-4 font-ui text-sm sm:text-base text-slate-400 line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-cyan-400/30 bg-cyan-500/10 px-2 py-0.5 font-ui text-xs text-neon-cyan"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-purple-500/20 px-5 pb-5 sm:px-6 sm:pb-6">
                <p className="mb-4 font-ui text-sm sm:text-base text-slate-300">
                  {project.description}
                </p>

                <h4 className="mb-2 font-pixel text-[8px] text-neon-green">Key Features</h4>
                <ul className="mb-5 space-y-1">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 font-ui text-sm text-slate-400">
                      <span className="text-neon-green mt-0.5">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.div
                  className="mb-5 border-2 border-pink-400/30 bg-pink-500/5 p-4"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.div className="mb-2 flex items-center gap-2 font-pixel text-[8px] text-pink-400">
                    <Swords size={14} />
                    BOSS CHALLENGE
                  </motion.div>
                  <p className="font-ui text-sm text-slate-300">{project.bossChallenge}</p>
                </motion.div>

                <div className="flex flex-wrap gap-3">
                  {project.demoUrl && (
                    <PixelButton href={project.demoUrl} variant="primary">
                      <ExternalLink size={14} />
                      Live Demo
                    </PixelButton>
                  )}
                  {project.githubUrl && (
                    <PixelButton href={project.githubUrl} variant="secondary">
                      ⌥ GitHub
                    </PixelButton>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>
    </FadeInItem>
  );
}

export function Projects() {
  return (
    <>
      <SectionDivider title="Missions / Quests" />
      <SectionWrapper id="projects">
        <FadeInItem>
          <motion.div className="mb-4 font-pixel text-xs sm:text-sm text-neon-pink">Quest Log</motion.div>
          <h2 className="mb-3 font-ui text-2xl sm:text-3xl md:text-4xl text-slate-200">
            Active Missions
          </h2>
          <p className="mb-10 max-w-2xl font-ui text-base sm:text-lg text-slate-400">
            Tap a mission panel to reveal details, boss challenges, and deployment links.
          </p>
        </FadeInItem>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}
