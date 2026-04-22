"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden">
      {/* background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="max-w-5xl mx-auto w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-sm font-mono text-[var(--accent)] mb-4 tracking-widest uppercase"
        >
          Frontend Engineer
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
        >
          조동현
          <br />
          <span className="text-[var(--muted)]">Interaction</span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Engineer.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg text-[var(--muted)] max-w-xl leading-relaxed mb-10"
        >
          움직임과 반응성으로 사용자 경험을 설계합니다.
          <br />
          인증 흐름부터 캘린더 직접 구현까지, 경계를 직접 그립니다.
        </motion.p>

        <motion.div variants={item} className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg text-sm font-medium border transition-all duration-200 hover:bg-white/5"
            style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
          >
            연락하기
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowDown size={20} className="text-[var(--muted)]" />
      </motion.div>
    </section>
  );
}
