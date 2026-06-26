import { ArrowDownRight, Mail } from "lucide-react"
import { Projects } from "@/components/sections/projects"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { LogoIntro } from "@/components/hero/logo-intro"
import  SmoothScroll  from "@/components/layout/smooth-scroll"
import Link from "next/link"

const email = "benedicto.co.013@gmail.com"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <SmoothScroll />
      <Navbar />

      <section
        id="top"
        className="relative min-h-[100svh] bg-black px-5 pb-6 pt-24 sm:px-8 md:px-12"
      >
        <div className="relative mx-auto flex min-h-[calc(100svh-120px)] w-full max-w-7xl flex-col items-center justify-center">
          <LogoIntro />
  <div className="pointer-events-none">
     
  </div>

  <div className="-mt-3 flex flex-col items-center text-center sm:-mt-6">
    <p className="max-w-md text-xs leading-relaxed text-white/55 sm:text-sm">
      I build modern, fast and conversion-focused websites for brands
      and businesses.
    </p>

    <div className="mt-6 flex flex-wrap justify-center gap-3">
      <a
        href="#projects"
        className="group inline-flex items-center gap-3 bg-white px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition-transform duration-300 hover:-translate-y-1"
      >
        View Projects
        <ArrowDownRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
      </a>

      <Link
        href={`mailto:${email}`} 
        className="inline-flex items-center gap-3 border border-white/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-white/50 hover:bg-white/5"
      >
        <Mail className="size-4" />
        Contact Me
      </Link>

       <a
    href="#services"
    className="group inline-flex items-center gap-3 border border-white/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-white/50 hover:bg-white/5"
  >
    Services & Pricing
    <ArrowDownRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
  </a>
    </div>
  </div>
</div>
        <div className="relative flex items-end justify-between text-[9px] uppercase tracking-[0.18em] text-white/35">
          <span className="hidden sm:block">Available for selected projects</span>

          <a
            href="#projects"
            className="ml-auto flex items-center gap-2 transition-colors hover:text-white"
          >
            Scroll to explore
            <ArrowDownRight className="size-3" />
          </a>
        </div>
      </section>

      <Projects />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}