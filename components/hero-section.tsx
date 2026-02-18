"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="relative w-full px-6 lg:px-10 xl:px-20 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-4 inline-block rounded-full border border-border bg-secondary px-4 py-1.5">
            <span className="text-xs font-medium tracking-wider text-primary uppercase">
              Freelance Graphic Designer
            </span>
          </div>

          <h1
            className="glitch-text text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9] mb-6 text-foreground"
            data-text="MC. JAZIE YABUT"
          >
            MC. JAZIE
            <br />
          </h1>

          <h2
            className="glitch-text text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-muted-foreground/40 mb-8"
            data-text="PORTFOLIO"
          >
            PORTFOLIO
          </h2>

          <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10">
            Bold. Creative. Impactful Designs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_oklch(0.65_0.2_250/0.3)]"
            >
              Hire Me
            </a>
            <a
              href="#services"
              className="rounded-lg border border-border bg-secondary px-8 py-3.5 text-base font-semibold text-secondary-foreground hover:bg-secondary/80 transition-all hover:scale-105 active:scale-95"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Right illustration */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] xl:w-[540px] xl:h-[540px]">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-[60px]" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-border shadow-2xl">
              <Image
                src="/images/hero-illustration.jpg"
                alt="Creative cartoon illustration of MC. Jazie Yabut"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground tracking-wider uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 text-primary" />
      </div>
    </section>
  )
}
