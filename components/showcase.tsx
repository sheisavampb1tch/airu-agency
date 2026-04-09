"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const projects = [
  {
    title: "Nexus",
    category: "Brand Identity & Web",
    description: "A fintech platform reimagining how startups manage their finances.",
    year: "2025",
    color: "#c9c0b8",
  },
  {
    title: "Forma",
    category: "Product Design",
    description: "Design system and product overhaul for a B2B SaaS company.",
    year: "2025",
    color: "#d4ccc4",
  },
  {
    title: "Pulse",
    category: "Web Development",
    description: "High-performance e-commerce experience for a luxury brand.",
    year: "2024",
    color: "#bfb5ab",
  },
]

export function Showcase() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-20 bg-card"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm tracking-widest uppercase text-muted-foreground mb-4"
            >
              Selected Work
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
                className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-foreground"
              >
                Featured projects
              </motion.h2>
            </div>
          </div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Start a Project →
          </motion.a>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
        isEven ? "" : "md:grid-flow-dense"
      }`}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
    >
      <div className={isEven ? "" : "md:col-start-2"}>
        <motion.div
          className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{ backgroundColor: project.color }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl md:text-8xl font-medium text-foreground/10">
                {project.title[0]}
              </span>
            </div>
          </motion.div>
          <div
            className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500"
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <span className="px-6 py-3 bg-foreground text-background text-sm tracking-widest uppercase">
              View Project
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={`space-y-6 ${isEven ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}`}
      >
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{project.category}</span>
          <span className="w-8 h-px bg-muted-foreground" />
          <span>{project.year}</span>
        </div>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
          {project.title}
        </h3>
        <p className="text-lg text-foreground/70 leading-relaxed max-w-md">
          {project.description}
        </p>
      </motion.div>
    </motion.div>
  )
}
