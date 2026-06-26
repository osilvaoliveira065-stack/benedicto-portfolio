"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { projects, type Project } from "@/data/projects"
import { ProjectCard } from "@/components/projects/project-card"
import { ProjectModal } from "@/components/projects/project-modal"
import { Reveal } from "@/components/ui/reveal"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      className="relative border-t border-white/10 bg-[#050505] px-5 py-24 sm:px-8 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex flex-col gap-6 border-b border-white/10 pb-8 md:mb-20 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">
              Selected Work · 2026
            </p>

            <Reveal className="font-display text-5xl font-black uppercase">
  Helping businesses stand out online.
</Reveal>
          </div>

          <Reveal delay={0.08} className="text-sm text-white/55">
  I build modern, fast and conversion-focused websites.
</Reveal>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}