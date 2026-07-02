"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import Image from "next/image"

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Work", href: "#projects", id: "projects" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-5 py-5 sm:px-8 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
  href="#top"
  onClick={closeMenu}
  aria-label="Back to top"
  className="relative z-50 flex h-8 w-20 items-center"
>
  <Image
    src="/brand/benedicto-angel.png"
    alt="Benedicto"
    width={290}
    height={100}
    priority
    className="h-auto w-full object-contain object-left"
  />
</a>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((link) => {
              const isActive = activeSection === link.id

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative py-2 text-[10px] font-medium uppercase tracking-[0.18em] transition-colors ${
                    isActive ? "text-white" : "text-white/45 hover:text-white"
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <motion.span
                      layoutId="active-nav-link"
                      className="absolute inset-x-0 -bottom-0.5 h-px bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          <a
            href="/contact"
            className="hidden items-center gap-2 border border-white/20 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black md:inline-flex"
          >
            Start a project
            <ArrowUpRight className="size-3" />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center border border-white/15 text-white md:hidden"
          >
            {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black px-5 pb-8 pt-24 sm:px-8"
          >
            <nav className="flex flex-col">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.08 + index * 0.06,
                    duration: 0.35,
                  }}
                  onClick={closeMenu}
                  className="border-b border-white/10 py-5 font-display text-5xl font-black uppercase leading-none tracking-[-0.06em]"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <a
              href="/contact"
              onClick={closeMenu}
              className="mt-10 inline-flex w-fit items-center gap-3 bg-white px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-black"
            >
              Start a project
              <ArrowUpRight className="size-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
