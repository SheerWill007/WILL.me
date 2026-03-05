"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [radius, setRadius] = useState(0)
  const [nextTheme, setNextTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const newTheme = isDark ? "light" : "dark"

    setCoords({ x, y })
    setRadius(maxRadius)
    setNextTheme(newTheme)
    setAnimating(true)

    // Slight delay for smooth reveal sync
    setTimeout(() => {
      setTheme(newTheme)
    }, 150)

    setTimeout(() => {
      setAnimating(false)
    }, 650)
  }

  return (
    <>
      {/* 🔥 Glass Circular Button */}
      <button
        onClick={toggleTheme}
        className="
          fixed bottom-6 right-6 z-50
          h-11 w-11
          rounded-full
          border border-border
          bg-background/70
          backdrop-blur-md
          flex items-center justify-center
          transition-all duration-300
          hover:scale-105
          active:scale-95
          shadow-lg shadow-black/10 dark:shadow-black/40
        "
      >
        {isDark ? (
          <Sun className="h-4 w-4 text-foreground" />
        ) : (
          <Moon className="h-4 w-4 text-foreground" />
        )}
      </button>

      {/* 🔥 Smooth Circular Reveal */}
      <AnimatePresence>
        {animating && (
          <motion.div
            initial={{
              clipPath: `circle(0px at ${coords.x}px ${coords.y}px)`,
            }}
            animate={{
              clipPath: `circle(${radius}px at ${coords.x}px ${coords.y}px)`,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1], // smoother cubic-bezier
            }}
            className={`fixed inset-0 z-40 pointer-events-none ${nextTheme === "dark"
                ? "bg-[hsl(222.2_84%_4.9%)]"
                : "bg-white"
              }`}
          />
        )}
      </AnimatePresence>
    </>
  )
}