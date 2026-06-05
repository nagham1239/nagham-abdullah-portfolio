"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export function SoundToggle() {
  const [muted, setMuted] = useState(true);

  return (
    <motion.button
      type="button"
      onClick={() => setMuted((m) => !m)}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center glass-hud rounded-lg text-neon-cyan transition-colors hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={muted ? "Unmute sound effects" : "Mute sound effects"}
      title={muted ? "Sound: Off" : "Sound: On"}
    >
      {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
    </motion.button>
  );
}
