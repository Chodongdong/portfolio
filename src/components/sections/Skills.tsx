"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "State & Data",
    skills: ["Zustand", "date-fns", "Framer Motion"],
  },
  {
    category: "Infra & Auth",
    skills: ["Vercel", "httpOnly Cookie", "OAuth 2.0", "BFF Pattern"],
  },
  {
    category: "Testing & Tools",
    skills: ["Storybook", "Vitest", "Playwright", "ESLint"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono text-[var(--accent)] tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="text-4xl font-bold">기술 스택</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1, ease: "easeOut" as const }}
              className="rounded-2xl p-5"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <p
                className="text-xs font-mono font-semibold mb-4 tracking-wide"
                style={{ color: "var(--accent)" }}
              >
                {group.category}
              </p>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-[var(--muted)] flex items-center gap-2"
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ background: "var(--accent)" }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
