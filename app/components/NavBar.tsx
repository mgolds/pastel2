"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 right-6 z-50"
    >
      <div className="flex items-center gap-1 bg-gray-900/80 backdrop-blur-md rounded-full px-4 py-2 shadow-sm border border-gray-800/50">
        {navItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-full"
              onMouseEnter={() => setHoveredLink(item.href)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {hoveredLink === item.href && (
                <motion.div
                  layoutId="navHover"
                  className="absolute inset-0 bg-gray-800 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}
