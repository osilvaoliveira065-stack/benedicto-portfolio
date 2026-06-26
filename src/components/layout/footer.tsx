import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const links = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#050505] px-5 pb-6 pt-10 sm:px-8 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
           <a
             href="#top"
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

            <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/40">
              Frontend Developer · Web Designer
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-white"
              >
                {link.label}
                <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-[9px] font-medium uppercase tracking-[0.16em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Benedicto. All rights reserved.</p>
          <p>Built with Next.js · Tailwind CSS · Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}