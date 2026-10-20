import Image from "next/image"
import { Hero } from "@/components/landing/hero"
import { MiniGallery } from "@/components/landing/mini-gallery"
import { SiteHeader } from "@/components/landing/site-header"

export function LandingPage() {
  const year = new Date().getFullYear()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-[var(--ink)] focus:px-3.5 focus:py-2.5 focus:text-[var(--cream)]"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />

        <section
          id="mission"
          className="flex min-h-[88vh] scroll-mt-24 flex-col items-center justify-center px-[clamp(20px,5vw,72px)] py-[clamp(80px,14vh,160px)] text-center"
          aria-labelledby="mission-title"
        >
          <h2
            id="mission-title"
            className="max-w-[14em] font-[family-name:var(--font-serif)] text-[clamp(2.6rem,5.5vw,4.6rem)] font-normal leading-[1.08] tracking-[-0.025em] text-[var(--ink)]"
          >
            Understand the dose.
            <br />
            Own the day.
          </h2>
          <p className="mt-7 max-w-[34em] text-[1.0625rem] leading-relaxed text-[var(--muted)]">
            People miss a dose because the day is already full. Securely keeps
            the lock, the hour, and the confirmation — so care does not have to
            raise its voice. Built for the person in the room, and the person
            managing from somewhere else.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#mini"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--ink)] px-7 text-[0.9375rem] font-medium text-[var(--cream)] transition hover:bg-[var(--ink-soft)]"
            >
              Mini
            </a>
            <a
              href="#dose"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--ink)] px-7 text-[0.9375rem] font-medium text-[var(--cream)] transition hover:bg-[var(--ink-soft)]"
            >
              Dose
            </a>
          </div>
        </section>

        <section id="products" className="scroll-mt-24 border-t border-[var(--line)]">
          <article
            id="mini"
            className="mx-auto grid max-w-[calc(1180px+clamp(20px,5vw,72px)*2)] scroll-mt-24 grid-cols-1 items-center gap-[clamp(32px,5vw,80px)] px-[clamp(20px,5vw,72px)] py-[clamp(72px,12vh,140px)] lg:grid-cols-[minmax(260px,0.9fr)_minmax(300px,1.1fr)]"
          >
            <div>
              <p className="mb-3 text-[0.8125rem] uppercase tracking-[0.08em] text-[var(--faint)]">
                01 — Pocket
              </p>
              <h2 className="font-[family-name:var(--font-serif)] text-[clamp(3.2rem,6vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
                Mini
              </h2>
              <p className="mt-5 max-w-[32em] text-[1.05rem] text-[var(--muted)]">
                A brushed steel case for the pills you carry. Four wells for
                morning, midday, evening, and night — closed with a lock you can
                feel. For the people who are always moving.
              </p>
              <ul className="mt-7 list-none p-0">
                {[
                  "Day-part compartments, labeled",
                  "Brushed stainless, pocket scale",
                  "Built to travel with the regimen",
                ].map((item) => (
                  <li
                    key={item}
                    className="border-t border-[var(--line)] py-3.5 text-[0.975rem] text-[var(--ink-soft)] last:border-b"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <MiniGallery />
          </article>

          <article
            id="dose"
            className="mx-auto grid max-w-[calc(1180px+clamp(20px,5vw,72px)*2)] scroll-mt-24 grid-cols-1 items-center gap-[clamp(32px,5vw,80px)] px-[clamp(20px,5vw,72px)] py-[clamp(72px,12vh,140px)] lg:grid-cols-[minmax(300px,1.1fr)_minmax(260px,0.9fr)]"
          >
            <div className="overflow-hidden rounded-3xl bg-[#2a2e34] lg:order-1">
              <Image
                src="/images/dose.png"
                alt="Securely Dose wall cabinet with numbered day wells and next-dose display"
                width={1400}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="lg:order-2">
              <p className="mb-3 text-[0.8125rem] uppercase tracking-[0.08em] text-[var(--faint)]">
                02 — Home
              </p>
              <h2 className="font-[family-name:var(--font-serif)] text-[clamp(3.2rem,6vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
                Dose
              </h2>
              <p className="mt-5 max-w-[32em] text-[1.05rem] text-[var(--muted)]">
                The cabinet on the wall. Thirty days of medicine behind a
                biometric lock, with the next dose named on the glass. For the
                home that should not have to ask twice.
              </p>
              <ul className="mt-7 list-none p-0">
                {[
                  "Wall-mounted, one clear purpose",
                  "Fingerprint unlock, schedule on device",
                  "A record of every dose taken",
                ].map((item) => (
                  <li
                    key={item}
                    className="border-t border-[var(--line)] py-3.5 text-[0.975rem] text-[var(--ink-soft)] last:border-b"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        <section
          id="why"
          className="scroll-mt-24 border-t border-[var(--line)] bg-[var(--cream-deep)] px-[clamp(20px,5vw,72px)] py-[clamp(80px,14vh,160px)]"
          aria-labelledby="why-title"
        >
          <div className="mx-auto mb-[72px] max-w-[640px] text-center">
            <p className="mb-3 text-[0.8125rem] uppercase tracking-[0.08em] text-[var(--faint)]">
              Why Securely
            </p>
            <h2
              id="why-title"
              className="font-[family-name:var(--font-serif)] text-[clamp(2.4rem,4.8vw,3.8rem)] font-normal leading-[1.08] tracking-[-0.025em] text-[var(--ink)]"
            >
              Care that does not depend on memory.
            </h2>
            <p className="mt-5 text-[1.05rem] text-[var(--muted)]">
              The bottle on the counter is a question. Securely turns that
              question into a lock, an hour, and a fact you can trust — for
              everyone walking through the day.
            </p>
          </div>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-[clamp(24px,3vw,40px)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                title: "Lock",
                body: "Medicine stays out of reach of children and guests. Shut, intentional, built for one job.",
              },
              {
                n: "02",
                title: "Remind",
                body: "The right pill. The right amount. The hour it is due — on the device and in the home.",
              },
              {
                n: "03",
                title: "Confirm",
                body: "Every dose taken leaves a record. The evening does not have to begin with a guess.",
              },
              {
                n: "04",
                title: "Share",
                body: "The people who manage care can know, without calling twice or reconstructing the day from memory.",
              },
            ].map((item) => (
              <article key={item.n} className="border-t border-[var(--line)] pt-6">
                <span className="mb-7 block text-[0.8125rem] tracking-[0.1em] text-[var(--faint)]">
                  {item.n}
                </span>
                <h3 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,2.8vw,2.6rem)] font-normal leading-none tracking-[-0.02em] text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--muted)]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="cta"
          className="flex scroll-mt-24 flex-col items-center bg-[var(--ink)] px-[clamp(20px,5vw,72px)] py-[clamp(96px,16vh,180px)] text-center text-[var(--cream)]"
          aria-labelledby="cta-title"
        >
          <h2
            id="cta-title"
            className="font-[family-name:var(--font-serif)] text-[clamp(2.6rem,5vw,4rem)] font-normal leading-[1.08] tracking-[-0.025em]"
          >
            A quieter standard of care.
          </h2>
          <p className="mt-4 max-w-[28em] text-[1.05rem] text-[rgba(245,241,234,0.68)]">
            Mini for what travels. Dose for what stays home. Both keep the same
            promise — for the person taking the dose, and the person who loves
            them.
          </p>
          <a
            href="mailto:hello@securely.com"
            className="mt-9 inline-flex h-12 items-center justify-center rounded-full bg-[var(--accent)] px-7 text-[0.9375rem] font-medium text-white transition hover:bg-[#1842b5]"
          >
            Request early access
          </a>
        </section>
      </main>

      <footer className="grid grid-cols-1 items-end gap-6 bg-[var(--ink)] px-[clamp(20px,5vw,72px)] py-9 text-sm text-[var(--cream)] md:grid-cols-[1fr_auto_1fr]">
        <div>
          <p className="font-[family-name:var(--font-serif)] text-[1.75rem] leading-none tracking-[-0.02em]">
            securely
          </p>
          <p className="mt-1.5 text-[rgba(245,241,234,0.55)]">Medicine, kept.</p>
        </div>
        <nav
          className="flex flex-wrap gap-[18px] md:justify-center"
          aria-label="Footer"
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
          <a href="mailto:hello@securely.com" className="transition hover:opacity-55">
            Contact
          </a>
        </nav>
        <div className="md:justify-self-end md:text-right">
          <p className="text-[rgba(245,241,234,0.45)]">&copy; {year} Securely</p>
          <p className="mt-1 text-[0.7rem] text-[rgba(245,241,234,0.35)]">
            Crowd by{" "}
            <a
              href="https://www.openpeeps.com/"
              className="underline-offset-2 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Open Peeps
            </a>
            {" · "}
            <a
              href="https://skiper-ui.com/v1/skiper39"
              className="underline-offset-2 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Skiper UI
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}
