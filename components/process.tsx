"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your vision, market, and goals. Understanding the why behind your product shapes everything we build together.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We craft a clear roadmap that aligns design, development, and launch. Every decision is intentional, every step purposeful.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create interfaces that convert. Clean, intuitive, and conversion-focused design that makes your product feel premium.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We ship with precision. From final polish to deployment, we ensure your product launches with confidence and clarity.",
  },
]

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-widest uppercase text-muted-foreground mb-4"
          >
            How We Work
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
              className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-foreground"
            >
              A calm process
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-muted-foreground"
            >
              with clear momentum.
            </motion.h2>
          </div>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block">
            <motion.div
              className="w-full bg-foreground origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            />
          </div>

          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => (
              <ProcessStep key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessStep({
  step,
  index,
}: {
  step: (typeof steps)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="md:pl-24 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.77, 0, 0.175, 1] }}
    >
      {/* Step indicator */}
      <motion.div
        className="hidden md:flex absolute left-0 top-2 w-16 h-16 items-center justify-center"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      >
        <div className="w-4 h-4 rounded-full bg-foreground" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <span className="text-sm tracking-widest text-muted-foreground mb-4 block">
            {step.number}
          </span>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            {step.title}
          </h3>
        </div>
        <div className="flex items-center">
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
