"use client";

import { motion } from "framer-motion";

interface PixelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function PixelButton({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: PixelButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-pixel transition-all duration-200";

  const variants = {
    primary: "pixel-btn",
    secondary:
      "border-3 border-neon-cyan bg-cyan-950/60 text-neon-cyan shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_30px_rgba(34,211,238,0.45)] hover:-translate-y-0.5 active:translate-y-0.5",
    ghost:
      "border-2 border-pink-400/50 bg-pink-500/10 text-pink-300 hover:bg-pink-500/20 hover:border-pink-400 hover:-translate-y-0.5",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.a href={href} className={cls} {...motionProps} target="_blank" rel="noopener noreferrer">
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${cls} disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0`}
      {...(disabled ? {} : motionProps)}
    >
      {children}
    </motion.button>
  );
}
