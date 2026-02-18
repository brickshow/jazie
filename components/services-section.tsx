"use client"

import {
  Brush,
  Hexagon,
  Pen,
  Pencil,
  Flag,
  Image as ImageIcon,
  FileText,
  Monitor,
  Layers,
} from "lucide-react"

const services = [
  {
    icon: Brush,
    title: "Graphic Art",
    description: "Custom and unique artwork tailored to your creative vision",
  },
  {
    icon: Hexagon,
    title: "Logo Design",
    description: "Professional brand identity logos that make a lasting impression",
  },
  {
    icon: Pen,
    title: "Vectorizing",
    description: "High-quality vector conversion for crisp, scalable graphics",
  },
  {
    icon: Pencil,
    title: "Sketching",
    description: "Hand-drawn creative illustrations with a personal touch",
  },
  {
    icon: Flag,
    title: "Banners",
    description: "Eye-catching event and social media banners that convert",
  },
  {
    icon: ImageIcon,
    title: "Posters",
    description: "Creative promotional posters that grab attention instantly",
  },
  {
    icon: FileText,
    title: "Pubmats",
    description: "Publication materials for announcements and events",
  },
  {
    icon: Monitor,
    title: "Mockups",
    description: "Realistic design mockups to visualize the final product",
  },
  {
    icon: Layers,
    title: "And More",
    description: "Anything related to graphics — just tell me your idea",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-28 lg:py-36">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="w-full px-6 lg:px-10 xl:px-20">
        <div className="mb-4">
          <span className="text-xs font-medium tracking-[0.3em] text-primary uppercase">
            What I offer
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
          MY <span className="text-primary">SERVICES</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16 leading-relaxed">
          From brand identity to creative artwork, I provide a full range of graphic design services to bring your ideas to life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_oklch(0.65_0.2_250/0.1)]"
            >
              {/* Blue accent line on top */}
              <div className="absolute top-0 left-8 right-8 h-px bg-border group-hover:bg-primary transition-colors duration-300" />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-5 w-5" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
