"use client"

import { Mail, MessageCircle, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  const hireMeGmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=jazie.yabut3000@gmail.com&su=Hire%20Me"
  const sendMessageGmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=jazie.yabut3000@gmail.com&su=New%20Message"

  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="w-full px-6 lg:px-10 xl:px-20">
        <div className="relative rounded-2xl border border-border bg-card p-12 lg:p-20 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
          </div>

          <div className="relative">
            <span className="text-xs font-medium tracking-[0.3em] text-primary uppercase mb-4 block">
              Start a project
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
              {"Let's Work"}
              <br />
              <span className="text-primary">Together</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
              {"Have a project in mind? Let's collaborate and create something bold, creative, and unforgettable."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={hireMeGmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_oklch(0.65_0.2_250/0.3)]"
              >
                <Mail className="h-4 w-4" />
                Hire Me
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={sendMessageGmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-8 py-3.5 text-base font-semibold text-secondary-foreground hover:bg-secondary/80 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                Send a Message
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://web.facebook.com/profile.php?id=100083122938301&_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.behance.net/jazieyabut30"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                Behance
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
