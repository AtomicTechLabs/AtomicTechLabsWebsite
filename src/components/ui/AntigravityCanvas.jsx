import { useEffect, useRef, useCallback } from 'react'

const SHAPES = ['rect', 'tick', 'circle', 'diamond']

function createParticle(w, h, colors) {
  const angle = Math.random() * Math.PI * 2
  const speed = 0.2 + Math.random() * 0.45
  return {
    x: Math.random() * w, y: Math.random() * h,
    vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
    baseVx: Math.cos(angle) * speed, baseVy: Math.sin(angle) * speed,
    size: 2.5 + Math.random() * 4.5,
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.04,
    color: colors[Math.floor(Math.random() * colors.length)],
    alpha: 0.45 + Math.random() * 0.45,
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    fx: 0, fy: 0,
  }
}

function drawParticle(ctx, p) {
  ctx.save()
  ctx.translate(p.x, p.y)
  ctx.rotate(p.rotation)
  ctx.globalAlpha = p.alpha
  ctx.fillStyle = p.color
  ctx.strokeStyle = p.color
  const s = p.size
  switch (p.shape) {
    case 'rect':
      ctx.fillRect(-s * 0.5, -s * 0.15, s, s * 0.3); break
    case 'tick':
      ctx.lineWidth = Math.max(1, s * 0.25)
      ctx.lineCap = 'round'
      ctx.beginPath(); ctx.moveTo(-s*0.5,0); ctx.lineTo(s*0.5,0); ctx.stroke(); break
    case 'circle':
      ctx.beginPath(); ctx.arc(0,0,s*0.35,0,Math.PI*2); ctx.fill(); break
    case 'diamond':
      ctx.beginPath()
      ctx.moveTo(0,-s*0.5); ctx.lineTo(s*0.3,0); ctx.lineTo(0,s*0.5); ctx.lineTo(-s*0.3,0)
      ctx.closePath(); ctx.fill(); break
  }
  ctx.restore()
}

function getAccent() {
  return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#56a22e'
}

export default function AntigravityCanvas({ particleCount = 120, repelRadius = 120, lineRadius = 100 }) {
  const canvasRef  = useRef(null)
  const particles  = useRef([])
  const mouse      = useRef({ x: -9999, y: -9999 })
  const ghost      = useRef({ x: -9999, y: -9999 })
  const trail      = useRef([])
  const rafRef     = useRef(null)

  const getColors = useCallback(() => {
    const accent = getAccent()
    return [accent, '#8A90A2', '#7bc44f', '#6b8f4e', '#a0c878', '#c5c9d4']
  }, [])

  const init = useCallback(() => {
    const c = canvasRef.current; if (!c) return
    const w = c.width = c.offsetWidth
    const h = c.height = c.offsetHeight
    particles.current = Array.from({ length: particleCount }, () => createParticle(w, h, getColors()))
  }, [particleCount, getColors])

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return
    const ctx = canvas.getContext('2d')
    init()

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    window.addEventListener('mousemove', onMouseMove)

    const animate = () => {
      const w = canvas.width, h = canvas.height
      const mx = mouse.current.x, my = mouse.current.y
      const accent = getAccent()

      ghost.current.x += (mx - ghost.current.x) * 0.08
      ghost.current.y += (my - ghost.current.y) * 0.08
      trail.current.push({ x: ghost.current.x, y: ghost.current.y, t: Date.now() })
      while (trail.current.length > 18) trail.current.shift()

      ctx.clearRect(0, 0, w, h)

      // Ghost trail
      const now = Date.now()
      for (let i = 0; i < trail.current.length; i++) {
        const tp = trail.current[i]
        const age = (now - tp.t) / 600
        const prog = i / trail.current.length
        const alpha = (1 - age) * prog * 0.3
        if (alpha <= 0) continue
        const r = 5 + (1 - prog) * 12
        ctx.beginPath(); ctx.arc(tp.x, tp.y, r, 0, Math.PI * 2)
        ctx.fillStyle = accent; ctx.globalAlpha = alpha; ctx.fill(); ctx.globalAlpha = 1
      }

      // Ghost ring
      if (mx > -999) {
        ctx.beginPath(); ctx.arc(ghost.current.x, ghost.current.y, 18, 0, Math.PI * 2)
        ctx.strokeStyle = accent; ctx.lineWidth = 1; ctx.globalAlpha = 0.22; ctx.stroke()
        ctx.beginPath(); ctx.arc(ghost.current.x, ghost.current.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = accent; ctx.globalAlpha = 0.45; ctx.fill()
        ctx.globalAlpha = 1
      }

      // Update particles
      for (const p of particles.current) {
        const dx = p.x - mx, dy = p.y - my
        const dist = Math.sqrt(dx*dx + dy*dy)
        if (dist < repelRadius && dist > 0) {
          const f = ((repelRadius - dist) / repelRadius) ** 2 * 3.5
          p.fx = (dx / dist) * f; p.fy = (dy / dist) * f
        } else { p.fx *= 0.87; p.fy *= 0.87 }
        p.vx = p.baseVx + p.fx; p.vy = p.baseVy + p.fy
        p.x += p.vx; p.y += p.vy; p.rotation += p.rotSpeed
        if (p.x < -20) p.x = w + 20; if (p.x > w + 20) p.x = -20
        if (p.y < -20) p.y = h + 20; if (p.y > h + 20) p.y = -20
      }

      // Magnetic lines
      const ps = particles.current
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x, dy = ps[i].y - ps[j].y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist > lineRadius) continue
          const prox = 1 - dist / lineRadius
          const di = Math.hypot(ps[i].x - mx, ps[i].y - my)
          const dj = Math.hypot(ps[j].x - mx, ps[j].y - my)
          const boost = (di < repelRadius || dj < repelRadius) ? 1.8 : 1
          ctx.beginPath(); ctx.moveTo(ps[i].x, ps[i].y); ctx.lineTo(ps[j].x, ps[j].y)
          ctx.strokeStyle = accent; ctx.lineWidth = prox * boost * 1.2; ctx.globalAlpha = prox * boost * 0.18
          ctx.stroke(); ctx.globalAlpha = 1
        }
      }

      // Draw particles
      for (const p of particles.current) drawParticle(ctx, p)

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    const ro = new ResizeObserver(() => {
      canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; init()
    })
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMouseMove)
      ro.disconnect()
    }
  }, [init, repelRadius, lineRadius])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position:'absolute', inset:0, width:'100%', height:'100%', display:'block', pointerEvents:'none', zIndex:2 }}
    />
  )
}
