"use client"

import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const stats = [
  { value: "01", label: "Premium visual direction" },
  { value: "02", label: "Conversion-first structure" },
  { value: "03", label: "Fast modern development" },
]

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/10 bg-[#050505] px-5 py-24 sm:px-8 md:px-12 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
        <Reveal>
  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">
    About Benedicto
  </p>

  <Reveal className="font-display text-6xl font-black uppercase">
    Design
    <br />
    That
    <br />
    Performs
  </Reveal>
</Reveal>

        <Reveal delay={0.1}>
          <p className="max-w-2xl text-2xl leading-[1.25] tracking-[-0.03em] text-white/85 sm:text-3xl">
            I build modern, fast and conversion-driven websites that help
            businesses look sharper, communicate value clearly and turn
            visitors into customers.
          </p>

          <p className="mt-7 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
            Every project combines strong visual direction, intentional user
            experience and clean frontend development. The goal is not just a
            beautiful website — it is a digital presence that supports growth.
          </p>

          <a
            href="#contact"
            className="group mt-9 inline-flex items-center gap-3 border-b border-white/30 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white"
          >
            Let&apos;s work together
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <div className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.value} className="bg-[#050505] p-5">
                <span className="font-display text-4xl font-bold tracking-[-0.04em] text-white">
                  {stat.value}
                </span>

                <p className="mt-7 text-[10px] font-medium uppercase leading-relaxed tracking-[0.16em] text-white/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}