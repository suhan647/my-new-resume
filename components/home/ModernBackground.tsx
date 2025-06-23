"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function ModernBackground() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 2000], [0, -200])
  const y2 = useTransform(scrollY, [0, 2000], [0, -400])

  return (
    <div className="fixed inset-0 z-0">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

      {/* Animated gradient overlays */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.1),transparent_50%)]"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.08),transparent_50%)]"
        style={{ y: y2 }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Floating colorful particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${
            i % 4 === 0
              ? "bg-indigo-500"
              : i % 4 === 1
                ? "bg-purple-500"
                : i % 4 === 2
                  ? "bg-pink-500"
                  : "bg-emerald-500"
          } opacity-40`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -80],
            opacity: [0.4, 0, 0.4],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 8 + 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
} 