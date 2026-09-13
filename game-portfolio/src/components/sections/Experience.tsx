"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { EDUCATION, EXPERIENCE, type ExperienceNode } from "@/data/portfolio";
import { SectionWrapper, FadeInItem } from "@/components/ui/SectionWrapper";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ProgressBar } from "@/components/ui/ProgressBar";
import {
  PixelBadge,
  PixelChipRow,
  QuestList,
  SectionHeader,
  SubHeader,
} from "@/components/ui/PixelKit";

export function Experience() {
  const maxXp = EXPERIENCE[EXPERIENCE.length - 1].xp;
  // Highest level first: the strongest role is the first thing scanned,
  // and it starts expanded so its detail needs no click.
  const levels = [...EXPERIENCE].reverse();
  const [openLevel, setOpenLevel] = useState<number | null>(
    EXPERIENCE.find((n) => n.current)?.level ?? null
  );

  return (
    <>
      <SectionDivider title="Level Progression" />
      <SectionWrapper id="experience">
        <SectionHeader
          eyebrow="World Map"
          title="Level Progression"
          intro="From teaching kids to code, to leading the frontend team on a live platform."
          tone="green"
        />

        <div className="relative">
          {/* the spine */}
          <div
            className="absolute bottom-2 left-[22px] top-2 hidden w-0.5 bg-gradient-to-b from-neon-pink via-neon-cyan to-neon-green opacity-50 sm:block"
            aria-hidden
          />

          <ol className="space-y-4 sm:space-y-5">
            {levels.map((node, i) => (
              <FadeInItem as="li" key={node.level} delay={i * 0.08}>
                <LevelSlot
                  node={node}
                  maxXp={maxXp}
                  isOpen={openLevel === node.level}
                  onToggle={() =>
                    setOpenLevel(openLevel === node.level ? null : node.level)
                  }
                />
              </FadeInItem>
            ))}
          </ol>
        </div>

        {/* -------------------------------- education ------------------------------- */}
        <SubHeader title="Training Grounds" tone="cyan" className="mt-14 sm:mt-16" />

        <motion.div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {EDUCATION.map((e, i) => (
            <FadeInItem key={e.school} delay={i * 0.06}>
              <motion.div
                className="pixel-frame h-full p-5"
                whileHover={{ y: -4, boxShadow: "0 0 28px rgba(168,85,247,0.2)" }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
              >
                <h4 className="font-ui text-lg text-white sm:text-xl">{e.school}</h4>
                <p className="mt-1.5 font-ui text-sm leading-relaxed text-slate-400">
                  {e.detail}
                </p>
                <p className="mt-2.5 font-ui text-sm text-neon-green">{e.period}</p>
              </motion.div>
            </FadeInItem>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}

/* ---------------------------------------------------------------------------- *
 * A level slot. Closed it is one compact row: node, company, role, dates,
 * stack and XP. Open it reveals the quest log. The arcade "select" cue —
 * a blinking ▶ marker plus an [ OPEN ] / [ CLOSE ] key — makes the
 * interaction obviously clickable without a generic chevron.
 * ---------------------------------------------------------------------------- */

function LevelSlot({
  node,
  maxXp,
  isOpen,
  onToggle,
}: {
  node: ExperienceNode;
  maxXp: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `level-panel-${node.level}`;
  const accent = node.current ? "pink" : "green";

  return (
    <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
      {/* level node on the spine */}
      <motion.div
        className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center border-2 ${
          node.current
            ? "border-neon-pink bg-pink-950 shadow-[0_0_22px_rgba(244,114,182,0.45)]"
            : "border-neon-green bg-green-950 shadow-[0_0_18px_rgba(74,222,128,0.35)]"
        }`}
        animate={isOpen ? { scale: 1.06 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 340, damping: 20 }}
        aria-hidden
      >
        <Star
          className={`h-4 w-4 ${
            node.current
              ? "fill-neon-pink text-neon-pink"
              : "fill-neon-green text-neon-green"
          }`}
        />
      </motion.div>

      <motion.div
        className={`pixel-frame flex-1 overflow-hidden transition-colors duration-300 ${
          isOpen ? "border-neon-cyan" : ""
        }`}
        animate={
          isOpen
            ? { boxShadow: "0 0 32px rgba(34,211,238,0.22)" }
            : { boxShadow: "0 0 30px rgba(168,85,247,0.15)" }
        }
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="slot-trigger group w-full cursor-pointer p-4 text-left sm:p-5"
        >
          {/* header row */}
          <div className="mb-2.5 flex flex-wrap items-center gap-1.5 sm:gap-2">
            <PixelBadge tone="cyan" hud>
              LVL {String(node.level).padStart(2, "0")}
            </PixelBadge>
            <PixelBadge tone="purple">{node.kind}</PixelBadge>
            {node.current && (
              <PixelBadge tone="pink" hud dot>
                Most recent
              </PixelBadge>
            )}

            {/* arcade select key */}
            <span
              className={`ml-auto flex shrink-0 items-center gap-1.5 border-2 px-2 py-1 font-pixel text-[7px] uppercase transition-all duration-300 ${
                isOpen
                  ? "border-neon-pink bg-pink-500/15 text-neon-pink"
                  : "border-cyan-400/50 bg-cyan-500/10 text-neon-cyan group-hover:border-neon-cyan group-hover:bg-cyan-500/20"
              }`}
              aria-hidden
            >
              <span className={isOpen ? "" : "blink-cue"}>{isOpen ? "▼" : "▶"}</span>
              {isOpen ? "Close" : "Open"}
            </span>
          </div>

          {/* identity */}
          <h3
            className={`font-ui text-lg leading-tight transition-colors sm:text-xl ${
              node.current ? "text-neon-pink" : "text-white"
            } group-hover:text-neon-cyan`}
          >
            {node.company}
          </h3>
          <p
            className={`mt-0.5 font-ui text-base sm:text-lg ${
              accent === "pink" ? "text-pink-200" : "text-neon-green"
            }`}
          >
            {node.role}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-0.5 font-ui text-sm text-slate-500">
            <span>{node.period}</span>
            <span className="hidden h-3 w-px bg-slate-700 sm:inline-block" aria-hidden />
            <span>{node.location}</span>
          </div>

          <p className="mt-2.5 font-ui text-sm leading-relaxed text-slate-400 sm:text-base">
            {node.description}
          </p>

          <PixelChipRow items={node.stack} className="mt-3.5" />

          <ProgressBar
            value={node.xp}
            max={maxXp}
            label={`${node.xp} XP`}
            variant="xp"
            className="mt-4"
          />
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t-2 border-cyan-400/25 bg-cyan-500/[0.03] px-4 pb-5 pt-4 sm:px-5">
                <h4 className="mb-2.5 font-pixel text-[8px] text-neon-green">Quest Log</h4>
                <QuestList items={node.highlights} />

                {node.link && (
                  <a
                    href={node.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 border-2 border-cyan-400/40 bg-cyan-500/10 px-3 py-1.5 font-ui text-sm text-neon-cyan transition-all duration-200 hover:-translate-y-px hover:border-neon-cyan hover:bg-cyan-500/20"
                  >
                    <ExternalLink size={13} />
                    {node.link.label}
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
