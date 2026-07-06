import { Link } from 'react-router-dom'
import { IconMapPin, IconPhone, IconMail, IconClock } from '../ui/Icons'

const footerLinks = {
  Programs: [
    ['School Robotics',    '/services/school'],
    ['College Programs',   '/services/college'],
    ['Corporate Training', '/services/corporate'],
    ['IoT Solutions',      '/services/iot'],
    ['Embedded Systems',   '/services/embedded'],
    ['AI & ML',            '/services/ai'],
  ],
  Company: [
    ['About Us',  '/about'],
    ['Gallery',   '/gallery'],
    ['Blog',      '/blog'],
    ['Contact',   '/contact'],
    ['Careers',   '#'],
  ],
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background:'var(--surface-2)', borderTop:'1px solid var(--border)' }}>

      {/* Decorative circuit lines */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ opacity:0.15 }}>
        <svg width="100%" height="100%" viewBox="0 0 1200 160" preserveAspectRatio="xMidYMid slice">
          <path d="M0 80 H180 L200 60 H380 L400 80 H600 L620 100 H800 L820 80 H1200"
            stroke="var(--accent)" strokeWidth="1" fill="none" strokeDasharray="5 5"/>
          {[180,380,600,820,1020].map((x,i) => (
            <circle key={i} cx={x} cy={80} r="3.5" fill="var(--accent)"/>
          ))}
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-14 pb-14 border-b mb-10"
          style={{ borderColor:'var(--border)' }}>

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-5" data-hover>
              <img src="/logo.png" alt="AtomicTechLabs" style={{ height:'48px', width:'auto', objectFit:'contain' }}/>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-[230px]" style={{ color:'var(--text-muted)' }}>
              Building the next generation of robotics and IoT engineers across schools, colleges, and corporations in Tamil Nadu.
            </p>
            {/* Social */}
            <div className="flex flex-wrap gap-2">
              {[
                { label:'LinkedIn',  href:'#' },
                { label:'Twitter',   href:'#' },
                { label:'YouTube',   href:'#' },
                { label:'Instagram', href:'#' },
              ].map(s => (
                <a key={s.label} href={s.href}
                  className="font-mono text-xs px-3 py-1.5 rounded-full transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  style={{ border:'1px solid var(--border)', color:'var(--text-muted)', background:'var(--card-bg)' }}
                  data-hover>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <div className="font-mono text-xs uppercase tracking-widest mb-5" style={{ color:'var(--accent)' }}>
                  {section}
                </div>
                {links.map(([label, path]) => (
                  <Link key={path} to={path}
                    className="block text-sm mb-2.5 transition-colors hover:text-[var(--accent)]"
                    style={{ color:'var(--text-muted)' }} data-hover>
                    {label}
                  </Link>
                ))}
              </div>
            ))}

            {/* Contact */}
            <div>
              <div className="font-mono text-xs uppercase tracking-widest mb-5" style={{ color:'var(--accent)' }}>
                Contact
              </div>
              <div className="space-y-3">
                {[
                  { Icon:IconMapPin, text:'Coimbatore, Tamil Nadu' },
                  { Icon:IconMapPin, text:'Bangalore, Karnataka'   },
                  { Icon:IconPhone,  text:'+91 422 456 7890'       },
                  { Icon:IconMail,   text:'hello@atomictechlabs.in'},
                  { Icon:IconClock,  text:'Mon–Sat, 9am–6pm IST'  },
                ].map(({ Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Icon size={14} color="var(--accent)" className="shrink-0 mt-0.5"/>
                    <span className="text-sm" style={{ color:'var(--text-muted)' }}>{text}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 mt-3">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background:'var(--accent)', boxShadow:'0 0 6px var(--accent-glow)' }}/>
                  <span className="text-xs" style={{ color:'var(--accent)' }}>Accepting enrollments</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-mono text-xs" style={{ color:'var(--text-faint)' }}>
            © {new Date().getFullYear()} AtomicTechLabs, Coimbatore. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="font-mono text-xs" style={{ color:'var(--text-faint)' }}>React + Three.js + Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
