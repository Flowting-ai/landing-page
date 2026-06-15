'use client'

import { useState, useRef, useEffect } from 'react'

/**
 * RAF-based typewriter effect.
 * Reveals ~6% of remaining chars per 16ms frame — fast near the start,
 * decelerating gracefully as it catches up to the latest token.
 * Properly cancels the RAF loop when text is fully revealed or `enabled` turns false.
 *
 * Pass enabled=false to snap immediately to the full text.
 */
export function useStreamingTypewriter(fullText: string, enabled: boolean): string {
  const [revealedLen, setRevealedLen] = useState(enabled ? 0 : fullText.length)
  const rafRef      = useRef<number | null>(null)
  const lastTickRef = useRef(0)
  const enabledRef  = useRef(enabled)

  useEffect(() => {
    enabledRef.current = enabled
    if (!enabled) {
      setRevealedLen(fullText.length)
      if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null }
    }
  }, [enabled, fullText.length])

  useEffect(() => {
    if (!enabled) return
    const TICK_MS = 16

    const animate = (ts: number) => {
      if (!enabledRef.current) return
      if (ts - lastTickRef.current >= TICK_MS) {
        lastTickRef.current = ts
        setRevealedLen(prev => {
          if (prev >= fullText.length) return prev
          const step = Math.max(1, Math.ceil((fullText.length - prev) * 0.06))
          return Math.min(prev + step, fullText.length)
        })
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => { if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null } }
  }, [fullText, enabled])

  if (!enabled) return fullText
  return fullText.slice(0, revealedLen)
}
