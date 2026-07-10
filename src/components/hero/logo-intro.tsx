"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"

export function LogoIntro() {
  return (
    <Section>
      <div className="pointer-events-none relative mx-auto flex min-h-[420px] w-full max-w-6xl items-center justify-center overflow-visible sm:min-h-[560px]">
        {/* Luz — sempre atrás */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.45, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.55, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 z-0 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[110px] sm:h-[360px] sm:w-[360px]"
      />

      {/* Wordmark */}
      <motion.div
        initial={{
          opacity: 0,
          x: -140,
          scale: 0.92,
          filter: "blur(14px)",
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.15,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.15,
        }}
        className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2"
      >
        <Image
          src="/brand/benedicto-wordmark.png"
          alt="Benedicto"
          width={1800}
          height={700}
          priority
          className="h-auto w-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.16)]"
        />
      </motion.div>

      {/* Angel */}
      <motion.div
        initial={{
          opacity: 0,
          y: 170,
          scale: 0.72,
          rotate: -5,
          filter: "blur(16px)",
        }}
        animate={{
          opacity: 1,
          y: 18,
          scale: 1,
          rotate: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.25,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.72,
        }}
        className="absolute bottom-0 left-1/2 z-20 w-[54%] min-w-[250px] max-w-[520px] -translate-x-1/2"
      >
        <Image
          src="/brand/benedicto-angel.png"
          alt=""
          width={800}
          height={800}
          priority
          className="h-auto w-full scale-110 object-contain drop-shadow-[0_0_32px_rgba(255,255,255,0.18)]"
        />
      </motion.div>
    </div>
    </Section>
  )
}
