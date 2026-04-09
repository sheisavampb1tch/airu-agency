"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const connectLinks = [
  { label: "Email", href: "mailto:airuagency@outlook.com" },
  { label: "Telegram", href: "https://t.me/airuagency" },
  { label: "airu.agency", href: "https://airu.agency" },
]

export function Footer() {
  return (
    <footer className="py-12 md:py-20 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16 md:mb-24">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-medium text-foreground mb-4 block">
              Airu
            </Link>
            <p className="text-foreground/60 max-w-sm leading-relaxed">
              Digital partner for startups and founder-led brands. We help you go from idea to launch.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-4">
              {["Work", "Process", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-6">
              Connect
            </h4>
            <nav className="flex flex-col gap-4">
              {connectLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-border">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Airu. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            Designed with intention.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
