"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const projectImages = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
]

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const visibleImages = showAll ? projectImages : projectImages.slice(0, 6)

  return (
    <section id="projects" className="relative py-20 lg:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="w-full px-6 lg:px-10 xl:px-20">
        <div className="mb-10 text-left">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            MY <span className="text-primary">PROJECTS</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground">
            Selected works from branding, posters, and digital design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {visibleImages.map((imageSrc, index) => (
            <button
              key={imageSrc}
              type="button"
              onClick={() => setSelectedImage(imageSrc)}
              className="group relative overflow-hidden rounded-xl border border-border bg-card aspect-[4/3]"
              aria-label={`Open project image ${index + 1}`}
            >
              <Image
                src={imageSrc}
                alt={`Project image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </button>
          ))}
        </div>

        {!showAll && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              Show All
            </button>
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 p-4 sm:p-6 md:p-10 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
            aria-label="Close image"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative w-full max-w-5xl aspect-[4/3]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Selected project image"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  )
}
