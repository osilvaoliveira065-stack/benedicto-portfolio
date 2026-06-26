"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  y?: number
  once?: boolean
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  y = 18,
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.18 }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}