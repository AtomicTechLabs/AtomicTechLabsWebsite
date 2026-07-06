import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconChevron } from '../ui/Icons'

const services = [
  { label:'School Robotics',       desc:'Grade 6–12 hands-on programs',      path:'/services/school',    color:'#56a22e' },
  { label:'College Programs',      desc:'Project-based engineering courses',  path:'/services/college',   color:'#56a22e' },
  { label:'Corporate Training',    desc:'IoT & automation upskilling',        path:'/services/corporate', color:'#3d7520' },
  { label:'IoT Solutions',         desc:'End-to-end device deployment',       path:'/services/iot',       color:'#3d7520' },
  { label:'Embedded Systems',      desc:'Firmware & hardware design',         path:'/services/embedded',  color:'#e8850a' },
  { label:'AI & Machine Learning', desc:'Applied ML for edge devices',        path:'/services/ai',        color:'#e8850a' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [dropOpen,  setDropOpen]  = useState(false)
  const location = useLocation()
  const dropRef  = useRef(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false); setDropOpen(false) }, [location])

  useEffect(() => {
    const fn = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false) }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  const isActive = (path) => path === '/'
    ? location.pathname === '/'
    : location.pathname.startsWith(path)

  const linkBase = 'font-display text-sm font-medium px-3.5 py-2 rounded-lg transition-all duration-200'
  const linkCls  = (path) =>
    `${linkBase} ${isActive(path)
      ? 'text-[var(--accent)] bg-[var(--accent-bg)]'
      : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)]'}`

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: 'var(--nav-h)',
        background: scrolled ? 'var(--nav-bg)' : 'rgba(255,255,255,0.98)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid rgba(86,162,46,0.10)',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between gap-8">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center shrink-0" data-hover>
          <img
            src="/logo.png"
            alt="AtomicTechLabs — Do, Learn, Develop"
            style={{ height:'44px', width:'auto', objectFit:'contain' }}
          />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          <Link to="/"       className={linkCls('/')}       data-hover>Home</Link>
          <Link to="/about"  className={linkCls('/about')}  data-hover>About</Link>

          {/* Services dropdown */}
          <div className="relative" ref={dropRef}>
            <button
              onClick={() => setDropOpen(v => !v)}
              className={`${linkBase} flex items-center gap-1.5
                ${isActive('/services') ? 'text-[var(--accent)] bg-[var(--accent-bg)]' : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)]'}`}
              data-hover
            >
              Services
              <IconChevron
                size={12}
                color="currentColor"
                className={`transition-transform duration-300 ${dropOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {dropOpen && (
              <div
                className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 rounded-2xl overflow-hidden z-50 w-[520px]"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--border)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(86,162,46,0.08)',
                  animation: 'fadeUp 0.18s ease',
                }}
              >
                <div className="grid grid-cols-2 gap-px p-2" style={{ background:'var(--surface-2)' }}>
                  {services.map(s => (
                    <Link
                      key={s.path} to={s.path}
                      className="flex items-start gap-3 px-4 py-3 rounded-xl transition-colors bg-white hover:bg-[var(--accent-bg)]"
                      data-hover
                    >
                      <span className="w-2 h-2 rounded-full shrink-0 mt-2" style={{ background: s.color }}/>
                      <div>
                        <div className="font-display font-semibold text-sm mb-0.5" style={{ color:'var(--text)' }}>
                          {s.label}
                        </div>
                        <div className="text-xs leading-relaxed" style={{ color:'var(--text-muted)' }}>
                          {s.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="px-5 py-3 flex items-center justify-between" style={{ borderTop:'1px solid var(--border)', background:'var(--surface-1)' }}>
                  <span className="text-xs" style={{ color:'var(--text-muted)' }}>6 programs available</span>
                  <Link to="/services" className="font-mono text-xs font-medium" style={{ color:'var(--accent)' }} data-hover>
                    View all →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/gallery" className={linkCls('/gallery')} data-hover>Gallery</Link>
          <Link to="/blog"    className={linkCls('/blog')}    data-hover>Blog</Link>
          <Link to="/contact" className={linkCls('/contact')} data-hover>Contact</Link>
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link to="/contact" className="btn btn-primary text-sm" style={{ padding:'9px 22px' }} data-hover>
            Get Started
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg"
          aria-label="Toggle menu"
          data-hover
          style={{ background: menuOpen ? 'var(--accent-bg)' : 'transparent' }}
        >
          {menuOpen ? (
            // X icon
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M18 6 6 18M6 6l12 12" stroke="var(--text)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            // Hamburger
            <>
              <span className="block h-px w-6" style={{ background:'var(--text)' }}/>
              <span className="block h-px w-4" style={{ background:'var(--text)' }}/>
              <span className="block h-px w-6" style={{ background:'var(--text)' }}/>
            </>
          )}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="lg:hidden px-5 py-4 flex flex-col gap-1 border-t"
          style={{ background:'#FFFFFF', borderColor:'var(--border)', boxShadow:'0 8px 24px rgba(0,0,0,0.08)' }}>
          {[['/', 'Home'],['/about','About'],['/services','Services'],['/gallery','Gallery'],['/blog','Blog'],['/contact','Contact']].map(([path, label]) => (
            <Link key={path} to={path}
              className="px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={{ color: isActive(path) ? 'var(--accent)' : 'var(--text-muted)', background: isActive(path) ? 'var(--accent-bg)' : 'transparent' }}
              data-hover
            >
              {label}
            </Link>
          ))}
          <div className="pt-3 border-t mt-2" style={{ borderColor:'var(--border)' }}>
            <Link to="/contact" className="btn btn-primary w-full justify-center text-sm" style={{ padding:'11px' }} data-hover>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
