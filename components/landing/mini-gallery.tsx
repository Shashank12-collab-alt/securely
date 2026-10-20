"use client"

import { useState } from "react"
import Image from "next/image"

const views = [
  {
    src: "/images/mini-front.png",
    label: "Front",
    alt: "Securely Mini closed, with mint tablets beside it",
  },
  {
    src: "/images/mini-side.png",
    label: "Side",
    alt: "Securely Mini side profile, standing upright",
  },
  {
    src: "/images/mini-open.png",
    label: "Open",
    alt: "Securely Mini open, showing morning through night compartments",
  },
] as const

export function MiniGallery() {
  const [index, setIndex] = useState(0)

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-[var(--cream-deep)]">
        {views.map((view, i) => (
          <div
            key={view.src}
            className={`absolute inset-0 flex items-center justify-center p-[14%] transition-opacity duration-450 ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={view.src}
              alt={view.alt}
              width={900}
              height={900}
              sizes="(max-width: 980px) 65vw, 26vw"
              className="h-auto w-full max-w-[320px] object-contain"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      <div
        className="mt-[18px] flex gap-2"
        role="tablist"
        aria-label="Mini product views"
      >
        {views.map((view, i) => (
          <button
            key={view.label}
            type="button"
            role="tab"
            aria-selected={i === index}
            onClick={() => setIndex(i)}
            className={`h-10 rounded-full px-[18px] text-[0.8125rem] tracking-[0.02em] transition ${
              i === index
                ? "bg-[var(--ink)] text-[var(--cream)]"
                : "border border-[var(--line)] text-[var(--muted)]"
            }`}
          >
            {view.label}
          </button>
        ))}
      </div>
    </div>
  )
}
