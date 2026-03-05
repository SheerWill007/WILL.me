"use client"

import { useState } from "react"
import { Github, Mail, ExternalLink } from "lucide-react"

export default function Footer() {

  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect()

    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <footer
      onMouseMove={handleMouseMove}
      className="relative mt-40 h-[560px] w-full overflow-hidden flex items-end justify-center"
    >

      {/* Smooth page fade */}
      <div className="
        pointer-events-none absolute top-0 left-0 w-full h-[180px] z-30
        bg-gradient-to-b
        from-white via-white/60 to-transparent
        dark:from-black dark:via-black/60 dark:to-transparent
      "/>

      {/* DARK MODE BACKGROUND */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background: `
            linear-gradient(
              to bottom,
              #000000 0%,
              #05070f 25%,
              #0b0f2a 45%,
              #1a1c4a 65%,
              #2f3f7a 85%,
              #4f6dd8 100%
            )
          `
        }}
      />

      {/* LIGHT MODE BACKGROUND */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background: `
            linear-gradient(
              to bottom,
              #ffffff 0%,
              #ffffff 35%,
              #e6e9ff 65%,
              #cfd6ff 85%,
              #b9c3ff 100%
            )
          `
        }}
      />

      {/* ATMOSPHERIC GLOW */}
      <div
        className="
          absolute bottom-[-220px] left-1/2 -translate-x-1/2
          w-[1500px] h-[900px]
          rounded-full
          blur-[180px]
          opacity-70
          bg-[#4c6fff]
          dark:bg-[#3b4cff]
        "
      />

      {/* CURSOR SPOTLIGHT */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-[420px]"
        style={{
          background: `radial-gradient(
            600px circle at ${mouse.x}px ${mouse.y}px,
            rgba(120,120,255,0.25),
            transparent 60%
          )`
        }}
      />

      {/* WILL SVG */}
      <svg
        viewBox="0 0 1200 400"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="willGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B3BAD1" />
            <stop offset="100%" stopColor="#B2B7CD" />
          </linearGradient>
        </defs>

        <text
          x="50%"
          y="320"
          textAnchor="middle"
          style={{
            fontFamily: "Amiri",
            fontSize: "340px",
            fontStyle: "italic",
            letterSpacing: "10px",
            fill: "url(#willGradient)",
            opacity: 0.55,
            filter: "drop-shadow(0px 10px 50px rgba(80,100,255,0.35))"
          }}
        >
          WILL.
        </text>
      </svg>


      {/* COPYRIGHT */}
      <div className="
        absolute bottom-12 left-1/2 -translate-x-1/2 text-xs
        text-black/60
        dark:text-white/50
      ">
        © {new Date().getFullYear()} William Law II
      </div>

    </footer>
  )
}