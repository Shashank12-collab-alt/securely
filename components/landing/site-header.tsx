"use client"

import { useEffect, useState } from "react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 flex h-[72px] items-center justify-between px-[clamp(20px,5vw,72px)] transition ${
        scrolled
          ? "bg-[color-mix(in_srgb,var(--cream)_92%,transparent)] shadow-[0_1px_0_var(--line)] backdrop-blur-[14px]"
          : "bg-[color-mix(in_srgb,var(--cream)_82%,transparent)] backdrop-blur-[14px]"
      }`}
    >
      <a
        href="#top"
        className="font-[family-name:var(--font-serif)] text-[1.55rem] leading-none tracking-[-0.02em] text-[var(--ink)]"
        aria-label="Securely, home"
      >
        securely
      </a>
      <nav
        className="hidden gap-[clamp(18px,2.4vw,36px)] text-sm tracking-[0.01em] md:flex"
        aria-label="Primary"
      >
        <a href="#products" className="transition hover:opacity-55">
          Products
        </a>
        <a href="#why" className="transition hover:opacity-55">
          Why Securely
        </a>
        <a href="#cta" className="transition hover:opacity-55">
          Get started
        </a>
      </nav>
    </header>
  )
}
