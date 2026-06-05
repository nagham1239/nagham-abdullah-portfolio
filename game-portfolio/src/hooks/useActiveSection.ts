"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/portfolio";

export function useActiveSection() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return activeId;
}
