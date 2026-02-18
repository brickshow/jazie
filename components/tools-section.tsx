"use client"

const tools = [
  {
    name: "Adobe Illustrator",
    abbr: "Ai",
    color: "oklch(0.7 0.18 50)",
    description: "Vector design & illustration",
  },
  {
    name: "Adobe Photoshop",
    abbr: "Ps",
    color: "oklch(0.6 0.2 250)",
    description: "Photo editing & compositing",
  },
  {
    name: "CapCut",
    abbr: "Cc",
    color: "oklch(0.8 0 0)",
    description: "Video editing & motion",
  },
  {
    name: "Canva",
    abbr: "Cv",
    color: "oklch(0.65 0.18 180)",
    description: "Quick designs & templates",
  },
]

export function ToolsSection() {
  return (
    <section id="tools" className="relative py-28 lg:py-36">
      {/* Torn divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="w-full px-6 lg:px-10 xl:px-20">
        <div className="mb-4">
          <span className="text-xs font-medium tracking-[0.3em] text-primary uppercase">
            My toolkit
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-16">
          APPS I <span className="text-primary">USED</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group relative rounded-xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_oklch(0.65_0.2_250/0.15)] cursor-default"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/5 transition-colors" />

              <div className="relative">
                <div
                  className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl text-3xl font-bold transition-transform group-hover:scale-110 duration-300"
                  style={{
                    backgroundColor: `color-mix(in oklch, ${tool.color} 15%, transparent)`,
                    color: tool.color,
                  }}
                >
                  {tool.abbr}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
