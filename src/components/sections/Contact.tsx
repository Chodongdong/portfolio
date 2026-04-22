"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GitFork, Mail } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "cdhppph@gmail.com",
    href: "mailto:cdhppph@gmail.com",
  },
  {
    icon: GitFork,
    label: "GitHub",
    value: "github.com/Chodongdong",
    href: "https://github.com/Chodongdong",
  },
];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono text-[var(--accent)] tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-4xl font-bold">연락하기</h2>
          <p className="text-[var(--muted)] mt-3">
            함께 만들고 싶은 것이 있다면 편하게 연락 주세요.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 rounded-2xl p-5 transition-colors"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="p-2.5 rounded-xl"
                  style={{ background: "var(--accent-glow)" }}
                >
                  <Icon size={18} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p className="text-xs text-[var(--muted)] mb-0.5">{link.label}</p>
                  <p className="text-sm font-medium">{link.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-5xl mx-auto mt-24 pt-8 text-center"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p className="text-xs text-[var(--muted)]">
          © 2025 조동현. Built with Next.js & Framer Motion.
        </p>
      </motion.div>
    </section>
  );
}
