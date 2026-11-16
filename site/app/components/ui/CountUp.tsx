import { useEffect, useRef, useState } from 'react'

/**
 * Number that counts up once when scrolled into view.
 * Server HTML (and no-JS / reduced-motion visitors) always get the final value.
 */
export function CountUp({ value, format, suffix = '', duration = 1400 }: { value: number; format: (n: number) => string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState(value)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    let raf = 0
    setShown(0)
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration)
        setShown(Math.round(value * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [value, duration])
  return (
    <>
      <span className="sr-only">{format(value)}{suffix}</span>
      <span ref={ref} aria-hidden>{format(shown)}{suffix}</span>
    </>
  )
}
