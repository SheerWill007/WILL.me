"use client"

import { useEffect, useRef, useState } from "react"

interface TypewriterProps {
  words: string[]
  prefix?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDelay?: number
}

export default function Typewriter({
  words,
  prefix = "",
  typingSpeed = 100,
  deletingSpeed = 45,
  pauseDelay = 1200
}: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true
  }, [])

  useEffect(() => {
    if (!mounted.current) return

    if (!Array.isArray(words) || words.length === 0) {
      return
    }

    const currentWord = words[index % words.length]

    if (typeof currentWord !== 'string') {
      return
    }

    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, pauseDelay)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1))
        }, deletingSpeed)
      } else {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, index, words, typingSpeed, deletingSpeed, pauseDelay])

  return (
    <span className="inline-flex items-center">
      {prefix}
      <span className="relative">
        {text}
        <span className="ml-1 h-[1em] w-[2px] bg-current animate-pulse inline-block align-middle" />
      </span>
    </span>
  )
}