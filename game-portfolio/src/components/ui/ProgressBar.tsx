"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: "health" | "xp";
  label?: string;
  showValue?: boolean;
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  variant = "health",
  label,
  showValue = true,
  className = "",
}: ProgressBarProps) {
  const pct = Math.min(100, Math.round((value / max) * 100));

  return (
    <motion.div
      className={`w-full ${className}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {(label || showValue) && (
        <motion.div
          className="mb-1.5 flex items-center justify-between font-ui text-sm text-slate-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {label && <span>{label}</span>}
          {showValue && <span className="text-neon-cyan">{pct}%</span>}
        </motion.div>
      )}
      <div className="game-bar-track h-3 w-full overflow-hidden rounded-sm sm:h-4">
        <motion.div
          className={`h-full rounded-sm ${variant === "health" ? "game-bar-fill" : "game-bar-fill-xp"}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}
