"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true })

  const highlightWords = ["clarity", "taste", "conversion"]

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-24 md:pt-32"
    >
      <motion.div className="relative max-w-6xl mx-auto">
        <div className="overflow-hidden mb-8">
          <motion.p
            initial={{ y: 100 }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
            className="text-sm md:text-base tracking-widest uppercase text-muted-foreground"
          >
            Digital Partner for Startups
          </motion.p>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 200 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight leading-[1.1] text-foreground text-balance"
            >
              Your idea deserves
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 200 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight leading-[1.1] text-foreground text-balance"
            >
              more than a template.
            </motion.h1>
          </div>
        </div>

        <div className="mt-12 md:mt-16 max-w-2xl">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.6 }}
              className="text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed"
            >
              Airu takes startups from concept to launch with{" "}
              {highlightWords.map((word, i) => (
                <motion.span
                  key={word}
                  className="highlight-word font-medium text-foreground"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                >
                  {word}
                  {i < highlightWords.length - 1 && ", "}
                </motion.span>
              ))}
              .
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 md:mt-20"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-4 text-foreground"
          >
            <span className="text-sm tracking-widest uppercase">Explore Work</span>
            <motion.span
              className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500"
              whileHover={{ scale: 1.1 }}
            >
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-6 md:left-12 lg:left-20"
      >
        <p className="text-xs tracking-widest text-muted-foreground uppercase">
          Scroll to explore
        </p>
      </motion.div>
    </section>
  )
}
