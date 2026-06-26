"use client"

import { motion } from "framer-motion"
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  CreditCard,
  Dumbbell,
  ShoppingBag,
  Sparkles,
} from "lucide-react"

type ProjectVisualProps = {
  title: string
}

export function ProjectVisual({ title }: ProjectVisualProps) {
  const commonClass =
    "absolute inset-0 overflow-hidden bg-[#0a0a0a] text-white"

  if (title === "INK DISTRICT") {
    return (
      <div className={commonClass}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.16),transparent_35%)]" />

        <div className="absolute left-6 top-6 text-[10px] uppercase tracking-[0.28em] text-white/50">
          Ink District / Tattoo Studio
        </div>

        <div className="absolute inset-x-6 bottom-6">
          <p className="font-display text-[clamp(4rem,10vw,8rem)] font-black uppercase leading-[0.72] tracking-[-0.08em]">
            MAKE
            <br />
            YOUR MARK
          </p>
        </div>

        <div className="absolute right-6 top-1/2 flex size-20 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
          <Sparkles className="size-7" />
        </div>
      </div>
    )
  }

  if (title === "REBIRTH") {
    return (
      <div className={commonClass}>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_45%)]" />

        <div className="absolute left-6 top-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-white/50">
          <ShoppingBag className="size-3" />
          Darkhaven / Drop Wake Wake
        </div>

        <div className="absolute inset-x-6 bottom-6">
          <p className="font-display text-[clamp(4rem,11vw,9rem)] font-black uppercase leading-[0.68] tracking-[-0.1em]">
            REBORN
            <br />
            TO RISE
          </p>
        </div>

        <div className="absolute right-[12%] top-[18%] h-44 w-32 rotate-[14deg] border border-white/20 bg-white/5 shadow-2xl backdrop-blur-md">
          <div className="flex h-full items-center justify-center">
            <span className="font-display text-4xl font-black">R</span>
          </div>
        </div>
      </div>
    )
  }

  if (title === "ASCEND") {
    return (
      <div className={commonClass}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.14),transparent_35%)]" />

        <div className="absolute left-6 top-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-white/50">
          <Activity className="size-3" />
          Ascend / Analytics
        </div>

        <div className="absolute inset-6 top-16 grid grid-cols-12 gap-3">
          <div className="col-span-8 rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/45">
                Revenue Growth
              </span>
              <ArrowUpRight className="size-4 text-white/60" />
            </div>

            <div className="flex h-24 items-end gap-2">
              {[30, 52, 38, 65, 58, 82, 74, 100].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  className="flex-1 rounded-t-sm bg-white/80"
                />
              ))}
            </div>
          </div>

          <div className="col-span-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <BarChart3 className="size-5 text-white/60" />
            <p className="mt-8 font-display text-5xl font-bold tracking-tight">
              +48%
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/45">
              This month
            </p>
          </div>

          <div className="col-span-5 rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/45">
              Active users
            </p>
            <p className="mt-6 font-display text-5xl font-bold tracking-tight">
              12.8K
            </p>
          </div>

          <div className="col-span-7 rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.18em] text-white/45">
                Conversion rate
              </span>
              <span className="text-xs text-white/70">8.4%</span>
            </div>

            <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[84%] rounded-full bg-white/80" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (title === "FORGE FITNESS") {
    return (
      <div className={commonClass}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.13),transparent_45%)]" />

        <Dumbbell className="absolute right-8 top-8 size-10 text-white/25" />

        <div className="absolute left-6 top-6 text-[10px] uppercase tracking-[0.28em] text-white/50">
          Forge Fitness / Train Different
        </div>

        <div className="absolute inset-x-6 bottom-6">
          <p className="font-display text-[clamp(4rem,10vw,8rem)] font-black uppercase leading-[0.7] tracking-[-0.08em]">
            BUILD
            <br />
            POWER
          </p>
        </div>

        <div className="absolute right-7 bottom-8 border border-white/20 px-4 py-3 text-[9px] font-medium uppercase tracking-[0.18em]">
          Start your trial
        </div>
      </div>
    )
  }

  return (
    <div className={commonClass}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="absolute left-6 top-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-white/50">
        <CreditCard className="size-3" />
        Nova Objects / Collection 01
      </div>

      <div className="absolute left-[16%] top-[18%] h-44 w-44 rounded-full border border-white/20 bg-white/[0.06] shadow-2xl" />
      <div className="absolute right-[18%] top-[30%] h-32 w-28 border border-white/20 bg-white/[0.08] shadow-2xl" />

      <div className="absolute inset-x-6 bottom-6">
        <p className="font-display text-[clamp(3.5rem,9vw,7rem)] font-black uppercase leading-[0.72] tracking-[-0.08em]">
          Objects
          <br />
          With Intent
        </p>
      </div>
    </div>
  )
}