"use client"

import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, X } from "lucide-react"
import type { Project } from "@/data/projects"
import { Reveal } from "@/components/ui/reveal"

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
useEffect(() => {
  if (!project) return

  const html = document.documentElement
  const body = document.body
  const scrollY = window.scrollY

  const previousHtmlOverflow = html.style.overflow
  const previousBodyOverflow = body.style.overflow
  const previousBodyPosition = body.style.position
  const previousBodyTop = body.style.top
  const previousBodyWidth = body.style.width

  html.style.overflow = "hidden"
  body.style.overflow = "hidden"
  body.style.position = "fixed"
  body.style.top = `-${scrollY}px`
  body.style.width = "100%"

  return () => {
    html.style.overflow = previousHtmlOverflow
    body.style.overflow = previousBodyOverflow
    body.style.position = previousBodyPosition
    body.style.top = previousBodyTop
    body.style.width = previousBodyWidth

    requestAnimationFrame(() => {
      window.scrollTo({
        top: scrollY,
        left: 0,
        behavior: "instant",
      })
    })
  }
}, [project])
  
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/75 p-3 backdrop-blur-md sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          onWheel={(event) => event.stopPropagation()}
          onTouchMove={(event) => event.stopPropagation()}
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto border border-white/10 bg-[#0a0a0a] shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center border border-white/15 bg-black/40 text-white transition-colors hover:bg-white hover:text-black"
            >
              <X className="size-4" />
            </button>

            <div className="relative aspect-[16/8] overflow-hidden border-b border-white/10">
  <Image
    src={project.image}
    alt={`${project.title} website preview`}
    fill
    sizes="(max-width: 768px) 100vw, 1024px"
    className="object-cover object-top"
    priority
  />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

              <div className="absolute inset-x-5 bottom-5 sm:inset-x-8 sm:bottom-7">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.24em] text-white/55">
                  {project.number} · {project.category}
                </p>

                <Reveal className="font-display text-6xl font-black uppercase">
                  {project.title}
                </Reveal>
              </div>
            </div>

            <div className="grid gap-10 p-5 sm:p-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:p-10">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
                  Project Overview
                </p>

                <p className="mt-5 text-base leading-relaxed text-white/70">
                  {project.description}
                </p>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
                    Tech Stack
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.16em] text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
  href="/contact"
  onClick={onClose}
  className="mt-8 inline-flex items-center gap-3 border border-white/20 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black"
>
                  Build something similar
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>

              <div className="space-y-8">
                <CaseItem label="Problem" content={project.problem} />
                <CaseItem label="Solution" content={project.solution} />
                <CaseItem label="Impact" content={project.impact} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function CaseItem({ label, content }: { label: string; content: string }) {
  return (
    <article className="border-t border-white/10 pt-5">
      <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
        {label}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
        {content}
      </p>
    </article>
  )
}