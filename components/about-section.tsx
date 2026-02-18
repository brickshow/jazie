"use client"

import { useRef } from "react"
import { Palette, Sparkles, Eye } from "lucide-react"

const highlights = [
  { icon: Palette, label: "3+ Years", desc: "Design Experience" },
  { icon: Sparkles, label: "Self-Taught", desc: "Passionate Learner" },
  { icon: Eye, label: "Unique", desc: "Creative Vision" },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="about" ref={sectionRef} className="relative py-28 lg:py-36">
      <div className="w-full px-6 lg:px-10 xl:px-20">
        {/* Section label */}
        <div className="mb-4">
          <span className="text-xs font-medium tracking-[0.3em] text-primary uppercase">
            Get to know me
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-16">
          ABOUT <span className="text-primary">ME</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Stats column */}
          <div className="flex flex-col gap-6 lg:w-1/3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-[0_0_20px_oklch(0.65_0.2_250/0.1)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Text column */}
          <div className="lg:w-2/3">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              {"I'm a self-taught freelance graphic designer with almost three years of experience. My focus is on creating unique and impactful designs, including logos, shirt designs, vectorizing, posters, and other graphic arts projects."}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              {"I'm passionate about bringing creative ideas to life and committed to delivering work that stands out. If you're looking for bold and eye-catching designs, I'm here to help make your vision a reality."}
            </p>
            <div className="h-px w-full bg-border" />
            <div className="mt-8 flex flex-wrap gap-3">
              {["Logos", "Shirts", "Vectors", "Posters", "Banners", "Mockups"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
