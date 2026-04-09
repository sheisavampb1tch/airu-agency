"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Process } from "@/components/process"
import { Showcase } from "@/components/showcase"
import { TypographySection } from "@/components/typography-section"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Showcase />
        <Process />
        <TypographySection />
        <CTA />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
