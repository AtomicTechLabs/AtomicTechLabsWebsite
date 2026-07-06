import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light/dark mode"
      data-hover
      className="relative flex items-center rounded-full transition-all duration-300 cursor-none"
      style={{
        width: '58px', height: '30px',
        background: isDark ? 'var(--surface-3)' : 'var(--surface-3)',
        border: '1px solid var(--border)',
        padding: '3px',
      }}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Track thumb */}
      <span
        className="absolute top-[3px] w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          left: isDark ? '3px' : 'calc(100% - 27px)',
          background: 'var(--accent)',
          boxShadow: '0 0 8px var(--accent-glow)',
        }}
      >
        {isDark
          ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
          : <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="2"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M17.66 6.34l-1.41 1.41M6.34 17.66l-1.41 1.41" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
        }
      </span>
    </button>
  )
}
