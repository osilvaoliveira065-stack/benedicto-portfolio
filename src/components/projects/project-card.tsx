"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import type { Project } from "@/data/projects"
import { Reveal } from "@/components/ui/reveal"

type ProjectCardProps = {
  project: Project
  index: number
  onClick: (project: Project) => void
}

export function ProjectCard({
  project,
  index,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group overflow-hidden border border-white/10 bg-[#080808]"
    >
      <button
        type="button"
        onClick={() => onClick(project)}
        className="block w-full text-left"
        aria-label={`Open ${project.title} case study`}
      >
        <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-white/[0.03]">
          <Image
            src={project.image}
            alt={`${project.title} website preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />

          <div className="absolute left-4 top-4 text-[9px] font-medium uppercase tracking-[0.18em] text-white/60">
            {project.number} · {project.category}
          </div>

          <div className="absolute right-4 top-4 flex size-8 items-center justify-center border border-white/20 bg-black/30 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
            <ArrowUpRight className="size-4" />
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <Reveal className="font-display text-4xl font-black uppercase">
            {project.title}
          </Reveal>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-white/10 px-2 py-1 text-[8px] font-medium uppercase tracking-[0.14em] text-white/45"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </button>
    </motion.article>
  )
}