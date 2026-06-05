"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  title: string;
}

export function SectionDivider({ title }: SectionDividerProps) {
  const repeated = `${title} ★ `.repeat(8);

  return (
    <motion.div
      className="relative my-4 w-full overflow-hidden border-y-4 border-neon-purple bg-gradient-to-r from-purple-950 via-purple-900/80 to-purple-950 py-3"
      initial={{ opacity: 0, scaleX: 0.8 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className="flex whitespace-nowrap">
        <motion.div className="animate-marquee flex font-pixel text-[10px] sm:text-xs text-yellow-300 tracking-widest">
          <span className="px-4">{repeated}</span>
          <span className="px-4" aria-hidden="true">
            {repeated}
          </span>
        </motion.div>
      </motion.div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="bg-purple-950/90 px-4 py-1 font-pixel text-[10px] sm:text-xs text-yellow-300 border-2 border-yellow-400/50 shadow-[0_0_20px_rgba(250,204,21,0.3)]">
          {title}
        </span>
      </div>
    </motion.div>
  );
}
