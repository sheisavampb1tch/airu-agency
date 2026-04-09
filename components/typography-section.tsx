"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const statements = [
  "We build products that convert.",
  "Design with intention.",
  "Launch with confidence.",
]

export function TypographySection() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-48 md:py-64 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {statements.map((statement, index) => (
          <StatementLine key={index} text={statement} index={index} />
        ))}
      </div>
    </section>
  )
}

function StatementLine({
  text,
  index,
}: {
  text: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })

  return (
    <div ref={ref} className="relative overflow-hidden py-4 md:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: index * 0.2 }}
      >
        <motion.h2
          className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-medium tracking-tight text-foreground whitespace-nowrap"
          initial={{ y: 100 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: index * 0.1 }}
        >
          {text}
        </motion.h2>
      </motion.div>
    </div>
  )
}
