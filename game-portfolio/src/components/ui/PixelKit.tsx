"use client";

/* ------------------------------------------------------------------ *
 * Pixel UI kit — the small, reusable pieces every section is built
 * from, so badges, chips, headers and panels stay identical across the
 * whole cartridge. All styling is the existing neon/pixel language.
 * ------------------------------------------------------------------ */

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { FadeInItem } from "./SectionWrapper";

/* --------------------------------- tones --------------------------------- */

export type PixelTone = "cyan" | "pink" | "green" | "purple" | "yellow" | "slate";

const TONE: Record<
  PixelTone,
  { text: string; border: string; bg: string; glow: string; dot: string }
> = {
  cyan: {
    text: "text-neon-cyan",
    border: "border-cyan-400/40",
    bg: "bg-cyan-500/10",
    glow: "shadow-[0_0_18px_rgba(34,211,238,0.28)]",
    dot: "bg-neon-cyan",
  },
  pink: {
    text: "text-neon-pink",
    border: "border-pink-400/45",
    bg: "bg-pink-500/10",
    glow: "shadow-[0_0_18px_rgba(244,114,182,0.3)]",
    dot: "bg-neon-pink",
  },
  green: {
    text: "text-neon-green",
    border: "border-green-400/45",
    bg: "bg-green-500/10",
    glow: "shadow-[0_0_18px_rgba(74,222,128,0.3)]",
    dot: "bg-neon-green",
  },
  purple: {
    text: "text-purple-300",
    border: "border-purple-400/40",
    bg: "bg-purple-500/10",
    glow: "shadow-[0_0_18px_rgba(168,85,247,0.3)]",
    dot: "bg-purple-400",
  },
  yellow: {
    text: "text-yellow-300",
    border: "border-yellow-400/45",
    bg: "bg-yellow-500/10",
    glow: "shadow-[0_0_18px_rgba(250,204,21,0.3)]",
    dot: "bg-yellow-300",
  },
  slate: {
    text: "text-slate-300",
    border: "border-slate-500/40",
    bg: "bg-slate-500/10",
    glow: "",
    dot: "bg-slate-400",
  },
};

/* --------------------------------- badge --------------------------------- */

interface PixelBadgeProps {
  children: ReactNode;
  tone?: PixelTone;
  /** Pixel font + uppercase — for HUD labels like MISSION 01 / LIVE. */
  hud?: boolean;
  /** Small pulsing status light. */
  dot?: boolean;
  className?: string;
}

/** A hard-edged status badge. The HUD variant is the arcade overlay style. */
export function PixelBadge({
  children,
  tone = "cyan",
  hud = false,
  dot = false,
  className = "",
}: PixelBadgeProps) {
  const t = TONE[tone];
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2 py-0.5 leading-none ${t.border} ${t.bg} ${t.text} ${
        hud
          ? `font-pixel text-[8px] uppercase tracking-wider py-1 ${t.glow}`
          : "font-ui text-xs"
      } ${className}`}
    >
      {dot && (
        <span className={`h-1.5 w-1.5 shrink-0 animate-pulse ${t.dot}`} aria-hidden />
      )}
      {children}
    </span>
  );
}

/* ---------------------------------- chip --------------------------------- */

/** A tech chip. Lifts a pixel on hover so a chip row feels tactile. */
export function PixelChip({
  children,
  tone = "cyan",
  className = "",
}: {
  children: ReactNode;
  tone?: PixelTone;
  className?: string;
}) {
  const t = TONE[tone];
  return (
    <span
      className={`inline-flex border ${t.border} ${t.bg} ${t.text} px-2 py-0.5 font-ui text-xs leading-relaxed transition-all duration-200 hover:-translate-y-px hover:brightness-125 ${className}`}
    >
      {children}
    </span>
  );
}

/** Chip row with a shared label, so stacks line up the same everywhere. */
export function PixelChipRow({
  items,
  tone = "cyan",
  className = "",
}: {
  items: readonly string[];
  tone?: PixelTone;
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap gap-1.5 sm:gap-2 ${className}`}>
      {items.map((item) => (
        <li key={item}>
          <PixelChip tone={tone}>{item}</PixelChip>
        </li>
      ))}
    </ul>
  );
}

/* --------------------------------- header -------------------------------- */

interface SectionHeaderProps {
  /** Small pixel eyebrow, e.g. "Quest Log". */
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  tone?: PixelTone;
  className?: string;
}

/** The one heading block every section uses — same rhythm, same spacing. */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  tone = "cyan",
  className = "",
}: SectionHeaderProps) {
  const t = TONE[tone];
  return (
    <FadeInItem className={`mb-9 sm:mb-11 ${className}`}>
      <div className={`mb-3 flex items-center gap-2.5 font-pixel text-[10px] sm:text-xs ${t.text}`}>
        <span className={`h-2 w-2 shrink-0 ${t.dot} ${t.glow}`} aria-hidden />
        {eyebrow}
      </div>
      <h2 className="font-ui text-[clamp(1.6rem,4vw,2.4rem)] leading-tight text-slate-100">
        {title}
      </h2>
      {intro && (
        <p className="mt-2.5 max-w-2xl font-ui text-[clamp(0.95rem,1.6vw,1.125rem)] leading-relaxed text-slate-400">
          {intro}
        </p>
      )}
      <span
        className={`mt-4 block h-0.5 w-16 ${t.dot} opacity-60`}
        aria-hidden
      />
    </FadeInItem>
  );
}

/** Secondary heading inside a section (e.g. "Side Quests"). */
export function SubHeader({
  title,
  intro,
  tone = "green",
  className = "",
}: {
  title: string;
  intro?: ReactNode;
  tone?: PixelTone;
  className?: string;
}) {
  const t = TONE[tone];
  return (
    <FadeInItem className={className}>
      <h3 className={`flex items-center gap-2.5 font-pixel text-[10px] sm:text-xs ${t.text}`}>
        <span className={`h-2 w-2 shrink-0 ${t.dot}`} aria-hidden />
        {title}
      </h3>
      {intro && (
        <p className="mt-2 max-w-2xl font-ui text-base text-slate-400 sm:text-lg">{intro}</p>
      )}
    </FadeInItem>
  );
}

/* ---------------------------------- card --------------------------------- */

/** A pixel-framed panel with the standard hover lift + glow. */
export function PixelCard({
  children,
  className = "",
  glow = "rgba(168,85,247,0.22)",
  lift = true,
}: {
  children: ReactNode;
  className?: string;
  glow?: string;
  lift?: boolean;
}) {
  return (
    <motion.div
      className={`pixel-frame ${className}`}
      whileHover={
        lift ? { y: -4, boxShadow: `0 0 34px ${glow}` } : { boxShadow: `0 0 34px ${glow}` }
      }
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------- bullets -------------------------------- */

/** The shared "▸" bullet list used in quest logs and feature lists. */
export function QuestList({
  items,
  tone = "green",
  className = "",
}: {
  items: readonly string[];
  tone?: PixelTone;
  className?: string;
}) {
  const t = TONE[tone];
  return (
    <ul className={`space-y-1.5 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 font-ui text-sm leading-relaxed text-slate-400 sm:text-base"
        >
          <span className={`mt-px shrink-0 ${t.text}`} aria-hidden>
            ▸
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
