"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function CTA() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-muted-foreground mb-8"
        >
          Start a Project
        </motion.p>

        <div className="overflow-hidden mb-8">
          <motion.h2
            initial={{ y: 200 }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground"
          >
            Ready to launch?
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-foreground/70 mb-12 max-w-xl mx-auto"
        >
          {
            "Let's turn your idea into a product that stands out. We're ready when you are."
          }
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="mailto:airuagency@outlook.com"
            className="group inline-flex items-center gap-6"
          >
            <motion.span
              className="px-8 py-4 bg-foreground text-background text-sm tracking-widest uppercase transition-all duration-500 group-hover:px-12"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.span>
            <motion.span
              className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500"
              whileHover={{ scale: 1.1, rotate: 45 }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
