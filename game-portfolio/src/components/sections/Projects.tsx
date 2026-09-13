"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Hammer, Swords } from "lucide-react";
import { DESIGN_WORK, PROJECTS, type DesignProject, type Project } from "@/data/portfolio";
import { SectionWrapper, FadeInItem } from "@/components/ui/SectionWrapper";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { PixelButton } from "@/components/ui/PixelButton";
import {
  PixelBadge,
  PixelChipRow,
  QuestList,
  SectionHeader,
  SubHeader,
} from "@/components/ui/PixelKit";

/* ------------------------------- mission card ------------------------------- */

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isBuilding = project.status === "building";

  return (
    <FadeInItem delay={index * 0.08}>
      <motion.article
        className="pixel-frame group flex h-full flex-col overflow-hidden"
        whileHover={{ boxShadow: "0 0 40px rgba(168,85,247,0.22)" }}
      >
        <button
          type="button"
          className="w-full text-left"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label={`${project.title} — ${expanded ? "hide" : "show"} mission details`}
        >
          {/* ------------------- arcade screen: real screenshot ------------------- */}
          <div className="relative h-40 overflow-hidden sm:h-48 xl:h-52">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              priority={index === 0}
            />

            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-55 transition-opacity duration-500 group-hover:opacity-20`}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06061a] via-[#06061a]/15 to-transparent" />
            <div className="scanlines pointer-events-none absolute inset-0" aria-hidden />

            <div className="absolute left-3 top-3 flex flex-wrap items-center gap-1.5">
              <PixelBadge tone="purple" hud>
                Mission {String(index + 1).padStart(2, "0")}
              </PixelBadge>
              <PixelBadge tone={isBuilding ? "yellow" : "green"} hud dot>
                {project.statusLabel}
              </PixelBadge>
            </div>

            {/* open/close affordance */}
            <span
              className={`absolute right-3 top-3 flex h-7 w-7 items-center justify-center border-2 transition-all duration-300 ${
                expanded
                  ? "rotate-180 border-neon-pink bg-pink-950/80 text-neon-pink"
                  : "border-cyan-300/60 bg-purple-950/80 text-neon-cyan group-hover:border-neon-cyan"
              }`}
              aria-hidden
            >
              <ChevronDown size={15} />
            </span>

            {project.mobileImage && (
              <div className="float-soft absolute -bottom-3 right-3 hidden w-[52px] overflow-hidden rounded-[6px] border-2 border-purple-300/50 bg-[#0d0d2b] shadow-[0_0_16px_rgba(168,85,247,0.4)] sm:block">
                <div className="relative aspect-[9/17]">
                  <Image
                    src={project.mobileImage}
                    alt=""
                    fill
                    sizes="52px"
                    className="object-cover object-top"
                    aria-hidden
                  />
                </div>
              </div>
            )}

            {project.logo && (
              <Image
                src={project.logo}
                alt=""
                width={26}
                height={26}
                className="absolute bottom-3 left-3 h-6 w-6 object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.9)]"
                aria-hidden
              />
            )}
          </div>

          {/* ------------------------------ card body ------------------------------ */}
          <div className="p-5 sm:p-6">
            <div className="mb-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-pixel text-[11px] leading-relaxed text-neon-pink transition-all group-hover:text-glow-pink sm:text-sm">
                {project.title}
              </h3>
              <span className="font-ui text-xs text-slate-500">{project.year}</span>
            </div>

            <p className="font-ui text-sm text-neon-cyan sm:text-base">{project.tagline}</p>
            <p className="mt-1 font-ui text-sm text-slate-400">
              <span className="text-slate-500">Role:</span> {project.role}
            </p>

            <PixelChipRow items={project.stack} className="mt-3.5" />
          </div>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t-2 border-purple-500/25 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                <p className="mb-4 font-ui text-sm leading-relaxed text-slate-300 sm:text-base">
                  {project.description}
                </p>

                <h4 className="mb-2 font-pixel text-[8px] text-neon-green">What I Built</h4>
                <QuestList items={project.features} className="mb-5" />

                <div className="mb-5 border-2 border-pink-400/30 bg-pink-500/5 p-4">
                  <div className="mb-1.5 flex items-center gap-2 font-pixel text-[8px] text-neon-pink">
                    <Swords size={13} />
                    BOSS CHALLENGE
                  </div>
                  <p className="font-ui text-sm leading-relaxed text-slate-300">
                    {project.bossChallenge}
                  </p>
                </div>

                {project.demoUrl ? (
                  <PixelButton href={project.demoUrl} variant="primary" className="w-full">
                    <ExternalLink size={14} />
                    {project.demoLabel ?? "Visit Website"}
                  </PixelButton>
                ) : (
                  <div className="flex items-center justify-center gap-2.5 border-2 border-dashed border-yellow-400/50 bg-yellow-500/5 px-4 py-3.5">
                    <Hammer size={14} className="shrink-0 text-yellow-300" aria-hidden />
                    <span className="font-pixel text-[8px] leading-relaxed text-yellow-300">
                      COMING SOON · BUILDING
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>
    </FadeInItem>
  );
}

/* -------------------------------- design card ------------------------------- */

function DesignCard({ design, index }: { design: DesignProject; index: number }) {
  return (
    <FadeInItem delay={index * 0.08}>
      <motion.article
        className="pixel-frame group flex h-full flex-col overflow-hidden"
        whileHover={{ y: -4, boxShadow: "0 0 34px rgba(34,211,238,0.22)" }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
      >
        {/* real Figma canvas preview */}
        <div className="relative h-48 overflow-hidden border-b-2 border-purple-500/25 bg-[#e9e9e9] sm:h-56">
          <Image
            src={design.image}
            alt={design.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06061a]/75 via-transparent to-transparent" />
          <div className="scanlines pointer-events-none absolute inset-0 opacity-50" aria-hidden />

          <div className="absolute left-3 top-3">
            <PixelBadge tone="cyan" hud>
              UI/UX · Figma
            </PixelBadge>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h4 className="font-pixel text-[11px] leading-relaxed text-neon-cyan sm:text-xs">
            {design.title}
          </h4>
          <p className="mt-2 font-ui text-sm text-slate-300 sm:text-base">{design.tagline}</p>
          <p className="mt-2 font-ui text-sm leading-relaxed text-slate-400">
            {design.description}
          </p>

          <QuestList items={design.deliverables} tone="cyan" className="mt-4" />

          <PixelChipRow items={design.tools} tone="purple" className="mt-4" />

          <PixelButton
            href={design.figmaUrl}
            variant="secondary"
            className="mt-5 w-full sm:w-auto"
          >
            <ExternalLink size={14} />
            View in Figma
          </PixelButton>
        </div>
      </motion.article>
    </FadeInItem>
  );
}

/* ---------------------------------------------------------------------------- */

export function Projects() {
  return (
    <>
      <SectionDivider title="Missions / Quests" />
      <SectionWrapper id="projects">
        <SectionHeader
          eyebrow="Quest Log"
          title="Active Missions"
          intro="Real products in production. Tap a panel for what I built and the live link."
          tone="pink"
        />

        <motion.div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* ------------------------------ design work ----------------------------- */}
        <SubHeader
          title="Side Quests · Design"
          intro="UI/UX work designed in Figma — product design, not development."
          tone="cyan"
          className="mt-16 sm:mt-20"
        />

        <motion.div className="mt-7 grid grid-cols-1 items-start gap-5 lg:grid-cols-2 lg:gap-6">
          {DESIGN_WORK.map((design, i) => (
            <DesignCard key={design.id} design={design} index={i} />
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}
