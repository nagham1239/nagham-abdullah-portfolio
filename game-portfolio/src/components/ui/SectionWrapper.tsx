"use client";

import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  const reduced = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0.01 : 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.section
      id={id}
      className={`relative w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      <motion.div
        className="mx-auto w-full max-w-7xl"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: reduced ? 0 : 0.1 } },
        }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}

export function FadeInItem({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduced ? 0.01 : 0.5, delay, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
