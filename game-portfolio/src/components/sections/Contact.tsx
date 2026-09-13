"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Send, Loader2 } from "lucide-react";
import { PLAYER } from "@/data/portfolio";
import { SectionWrapper, FadeInItem } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/PixelKit";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { PixelButton } from "@/components/ui/PixelButton";

type FormStatus = "idle" | "loading" | "success" | "error";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    if (!ACCESS_KEY) {
      setErrorMsg("Contact form is not configured yet. Please email me directly.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      // Web3Forms sits behind Cloudflare, which serves a bot challenge to
      // server-to-server requests — so the submission goes straight from the
      // browser, which is Web3Forms' documented usage. The access key is a
      // public key by design and is safe to ship client-side.
      // Sent as FormData on purpose: a JSON content-type triggers a CORS
      // preflight that Web3Forms rejects, while multipart form data is a
      // "simple request" and goes straight through.
      const body = new FormData();
      body.append("access_key", ACCESS_KEY);
      body.append("name", String(payload.name));
      body.append("email", String(payload.email));
      body.append("message", String(payload.message));
      body.append("subject", `Portfolio message from ${payload.name}`);
      body.append("from_name", "Nagham Portfolio");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body,
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || !data.success) {
        setErrorMsg(data.message ?? "Failed to send message. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <>
      <SectionDivider title="Final Portal" />
      <SectionWrapper id="contact" className="pb-32">
        <SectionHeader
          eyebrow="End Game"
          title="Final Portal"
          intro="Open to frontend and full-stack roles. Messages go straight to my inbox."
          tone="purple"
        />

        <motion.div
          className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <FadeInItem>
            <motion.div
              className="pixel-frame relative overflow-hidden p-6 sm:p-8"
              whileHover={{ boxShadow: "0 0 50px rgba(168,85,247,0.25)" }}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <form onSubmit={handleSubmit} className="relative space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block font-pixel text-[8px] text-neon-cyan">
                    Player Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={status === "loading"}
                    className="w-full border-2 border-purple-500/40 bg-bg-deep/80 px-4 py-3 font-ui text-base text-slate-200 placeholder:text-slate-600 focus:border-neon-cyan focus:outline-none transition-colors disabled:opacity-60"
                    placeholder="Enter your name..."
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-pixel text-[8px] text-neon-cyan">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={status === "loading"}
                    className="w-full border-2 border-purple-500/40 bg-bg-deep/80 px-4 py-3 font-ui text-base text-slate-200 placeholder:text-slate-600 focus:border-neon-cyan focus:outline-none transition-colors disabled:opacity-60"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block font-pixel text-[8px] text-neon-cyan">
                    Mission Brief
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    disabled={status === "loading"}
                    className="w-full resize-none border-2 border-purple-500/40 bg-bg-deep/80 px-4 py-3 font-ui text-base text-slate-200 placeholder:text-slate-600 focus:border-neon-cyan focus:outline-none transition-colors disabled:opacity-60"
                    placeholder="Describe your quest..."
                  />
                </div>

                {status === "error" && (
                  <p className="font-ui text-sm text-red-400" role="alert">
                    {errorMsg}
                  </p>
                )}
                {status === "success" && (
                  <p className="font-ui text-sm text-neon-green" role="status">
                    Message sent! I&apos;ll get back to you soon.
                  </p>
                )}

                <PixelButton type="submit" variant="primary" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <Send size={14} />
                  )}
                  {status === "loading"
                    ? "Launching..."
                    : status === "success"
                      ? "Sent!"
                      : "Launch Message"}
                </PixelButton>
              </form>
            </motion.div>
          </FadeInItem>

          <FadeInItem delay={0.1}>
            <div className="flex flex-col items-center justify-center text-center">
              <motion.div
                className="relative mb-8 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(168,85,247,0.3)",
                    "0 0 80px rgba(244,114,182,0.4)",
                    "0 0 40px rgba(168,85,247,0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="relative flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52">
                  {/* Outer portal ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-neon-purple bg-gradient-to-br from-purple-900/50 to-pink-900/50" />

                  {/* Spinning energy ring */}
                  <motion.div
                    className="absolute inset-3 rounded-full border-2 border-dashed border-neon-cyan/70"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Portrait */}
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border-[3px] border-neon-pink shadow-[0_0_24px_rgba(244,114,182,0.45)] sm:h-36 sm:w-36">
                    <Image
                      src="/nagham-portrait.png"
                      alt={PLAYER.name}
                      fill
                      className="object-cover object-[center_15%]"
                      sizes="144px"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle at center, transparent 50%, rgba(6,6,26,0.35) 100%)",
                      }}
                    />
                  </div>

                  {/* Inner pulse ring */}
                  <motion.div
                    className="pointer-events-none absolute inset-6 rounded-full border border-neon-green/40"
                    animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              <h3 className="mb-2 font-pixel text-sm text-neon-pink">Continue?</h3>
              <p className="mb-8 font-ui text-base text-slate-400">
                Or start a new mission via social links
              </p>

              <div className="flex w-full max-w-xs flex-col gap-4">
                <motion.a
                  href={`mailto:${PLAYER.email}`}
                  className="flex items-center justify-center gap-3 border-2 border-pink-400/40 bg-pink-500/10 px-6 py-3 font-ui text-base text-pink-300 transition-all hover:border-pink-400 hover:bg-pink-500/20"
                  whileHover={{ x: 4 }}
                >
                  <Mail size={18} />
                  {PLAYER.email}
                </motion.a>
                <motion.a
                  href={PLAYER.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 border-2 border-cyan-400/40 bg-cyan-500/10 px-6 py-3 font-ui text-base text-neon-cyan transition-all hover:border-cyan-400 hover:bg-cyan-500/20"
                  whileHover={{ x: 4 }}
                >
                  <span aria-hidden="true">in</span>
                  LinkedIn
                </motion.a>
                <motion.a
                  href={PLAYER.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 border-2 border-purple-400/40 bg-purple-500/10 px-6 py-3 font-ui text-base text-purple-300 transition-all hover:border-purple-400 hover:bg-purple-500/20"
                  whileHover={{ x: 4 }}
                >
                  <span aria-hidden="true">⌥</span>
                  GitHub
                </motion.a>
              </div>
            </div>
          </FadeInItem>
        </motion.div>

        <FadeInItem className="mt-16 text-center">
          <motion.p
            className="font-pixel text-[8px] text-slate-600"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            © 2026 {PLAYER.name} — GAME OVER? NEVER.
          </motion.p>
        </FadeInItem>
      </SectionWrapper>
    </>
  );
}
