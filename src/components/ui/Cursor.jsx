import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const [hovered,  setHovered]  = useState(false)
  const [clicking, setClicking] = useState(false)
  const pos  = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const raf  = useRef(null)

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`
      }
    }
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px,${ring.current.y}px) translate(-50%,-50%)`
      }
      raf.current = requestAnimationFrame(animate)
    }
    const onEnter = (e) => {
      if (e.target.matches('a,button,[data-hover],input,textarea,select,label,[role="button"]')) setHovered(true)
    }
    const onLeave = () => setHovered(false)

    document.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout',  onLeave)
    document.addEventListener('mousedown', () => setClicking(true))
    document.addEventListener('mouseup',   () => setClicking(false))
    raf.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout',  onLeave)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className={`cursor-dot ${clicking ? 'clicking' : ''}`}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className={`cursor-ring ${hovered ? 'hovered' : ''} ${clicking ? 'clicking' : ''}`}
      >
        <svg viewBox="0 0 40 40" fill="none">
          <circle
            cx="20" cy="20" r="17"
            stroke={hovered ? 'var(--accent-dark)' : 'var(--accent)'}
            strokeWidth="1.2"
            strokeDasharray={hovered ? '6 3' : '3 4'}
          />
        </svg>
      </div>
    </>
  )
}
