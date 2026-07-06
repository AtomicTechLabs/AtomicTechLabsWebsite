import { useEffect, useRef } from 'react'

export default function PageTransition({ children }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.animation = 'none'
    void el.offsetWidth
    el.style.animation = 'fadeUp 0.45s ease both'
    window.scrollTo(0, 0)
  }, [children])
  return <div ref={ref}>{children}</div>
}
