/**
 * AutoScroll – infinite horizontal marquee
 * Duplicates children so the strip loops seamlessly.
 * Props:
 *   speed  – "slow" | "normal" | "fast"  (default: "normal")
 *   reverse – boolean
 *   gap    – tailwind gap class e.g. "gap-4" (default "gap-4")
 */
export default function AutoScroll({ children, speed = 'normal', reverse = false, gap = 'gap-4', className = '' }) {
  const dur = speed === 'slow' ? '40s' : speed === 'fast' ? '18s' : '28s'
  return (
    <div className={`scroll-strip-outer ${className}`}>
      <div
        className={`scroll-strip-inner ${gap}`}
        style={{
          animationDuration: dur,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {/* Duplicate so strip loops seamlessly */}
        {children}
        {children}
      </div>
    </div>
  )
}
