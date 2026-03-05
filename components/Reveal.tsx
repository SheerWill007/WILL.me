"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  delay?: number
}

export default function Reveal({ children, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 1, 0.32, 1], // premium cubic-bezier
      }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  )
}