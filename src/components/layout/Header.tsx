"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.85]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        backgroundColor: `rgba(10, 10, 15, ${bgOpacity.get()})`,
        backdropFilter: "blur(12px)",
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: `rgba(39, 39, 42, ${borderOpacity.get()})`,
      }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-semibold text-sm tracking-wide">
          조동현
        </Link>
        <nav className="flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
