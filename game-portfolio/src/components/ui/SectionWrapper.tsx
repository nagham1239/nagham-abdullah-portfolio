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
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0 },
    },
  };

  return (
    <motion.section
      id={id}
      className={`section-perf relative w-full px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "200px 0px" }}
      variants={variants}
    >
      <motion.div
        className="mx-auto w-full max-w-7xl"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: reduced ? 0 : 0.05 } },
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
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Render as a different element so lists stay semantic. */
  as?: "div" | "li";
}) {
  const reduced = useReducedMotion();
  const Tag = as === "li" ? motion.li : motion.div;

  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduced ? 0.01 : 0.35, delay, ease: "easeOut" },
        },
      }}
    >
      {children}
    </Tag>
  );
}
