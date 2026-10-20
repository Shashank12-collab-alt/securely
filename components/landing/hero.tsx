"use client"

import { CrowdCanvas } from "@/components/ui/skiper-ui/skiper39"

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[var(--cream)]"
    >
      <div className="relative z-20 mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 pb-[38vh] pt-24 text-center sm:pt-28">
        <h1 className="max-w-[16ch] text-balance font-[family-name:var(--font-serif)] text-[clamp(2.4rem,5.5vw,4rem)] font-normal leading-[1.08] tracking-[-0.03em] text-[var(--ink)]">
          For the ones you walk beside.
        </h1>

        <p className="mt-5 max-w-[28em] text-pretty text-[1.05rem] leading-relaxed text-[var(--muted)]">
          Ordinary days get full. We keep the dose locked, timed, and confirmed —
          so care can stay quiet, and sure.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#products"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--accent)] px-7 text-[0.9375rem] font-medium text-white transition hover:-translate-y-px hover:bg-[#1842b5]"
          >
            See Mini &amp; Dose
          </a>
          <a
            href="#mission"
            className="inline-flex h-12 items-center justify-center rounded-full px-7 text-[0.9375rem] font-medium text-[var(--ink)] shadow-[inset_0_0_0_1px_var(--line)] transition hover:-translate-y-px hover:shadow-[inset_0_0_0_1px_var(--ink)]"
          >
            Our promise
          </a>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[min(58vh,560px)] w-full"
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-[var(--cream)] via-[color-mix(in_srgb,var(--cream)_70%,transparent)] to-transparent" />
        <CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} />
      </div>
    </section>
  )
}
