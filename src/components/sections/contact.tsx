"use client"

import { ArrowUpRight, Copy, Mail } from "lucide-react"
import { useState } from "react"
import { Reveal } from "@/components/ui/reveal"

const email = "benedicto.co.013@gmail.com"

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    await navigator.clipboard.writeText(email)
    setCopied(true)

    window.setTimeout(() => {
      setCopied(false)
    }, 1800)
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-5 py-24 sm:px-8 md:px-12 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.12),transparent_42%)]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">
    Contact
  </p>

  <Reveal className="font-display text-9xl font-black uppercase">
    Let&apos;s Build
    <br />
    Something
    <br />
    Great.
  </Reveal>
</Reveal>

        <Reveal
  delay={0.1}
  className="mt-14 grid gap-10 border-t border-white/10 pt-8 md:grid-cols-[1fr_auto] md:items-end"
>
          <div>
            <p className="max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
              Have a project, product or brand that needs a stronger digital
              presence? Send me a message and let&apos;s talk about how we can
              build it.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 bg-white px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition-transform duration-300 hover:-translate-y-1"
              >
                <Mail className="size-4" />
                Let&apos;s work together
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-3 border border-white/15 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                <Copy className="size-4" />
                {copied ? "Email copied" : "Copy email"}
              </button>
            </div>
          </div>

          <a
            href={`mailto:${email}`}
            className="font-display text-3xl font-bold uppercase tracking-[-0.04em] text-white/80 transition-colors hover:text-white sm:text-4xl"
          >
            {email}
          </a>
        </Reveal>
      </div>
    </section>
  )
}