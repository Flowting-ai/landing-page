'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { getSvgPath } from 'figma-squircle'

export function useSquircle(cornerRadius: number, smoothing = 0.6, strokeWidth = 0) {
  const ref = useRef<HTMLButtonElement>(null)
  const [clipPath, setClipPath] = useState('')
  const [strokeClipPath, setStrokeClipPath] = useState('')

  const compute = useCallback(() => {
    const el = ref.current
    if (!el) return
    // Use offsetWidth/offsetHeight (layout box) rather than
    // getBoundingClientRect (which includes ancestor transforms). When this
    // element mounts inside a parent that's animating `transform: scale(...)`
    // — e.g. PinboardExpanded inside Pinboard's compact↔expanded zoom swap —
    // getBoundingClientRect returns the *scaled* rect, the squircle gets
    // baked at that wrong size, and ResizeObserver never fires to correct
    // it (transforms don't change the layout box). offsetWidth/Height are
    // transform-independent.
    const width  = el.offsetWidth
    const height = el.offsetHeight
    if (!width || !height) return

    const d = getSvgPath({ width, height, cornerRadius, cornerSmoothing: smoothing })
    setClipPath(`path("${d}")`)

    if (strokeWidth > 0) {
      const s = strokeWidth
      const sd = getSvgPath({
        width: width + s * 2,
        height: height + s * 2,
        cornerRadius: cornerRadius + s,
        cornerSmoothing: smoothing,
      })
      setStrokeClipPath(`path("${sd}")`)
    }
  }, [cornerRadius, smoothing, strokeWidth])

  useEffect(() => {
    compute()
    const ro = new ResizeObserver(compute)
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [compute])

  return { ref, clipPath, strokeClipPath }
}
