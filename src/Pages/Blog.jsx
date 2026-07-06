import { IconSearch } from '../components/ui/Icons'
import { useSEO } from '../hooks/useSEO'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function PageMeta() {
  useEffect(() => {
    document.title = 'Robotics & IoT Blog — Engineering Guides | AtomicTechLabs Coimbatore'
    const m = document.querySelector('meta[name="description"]')
    if (m) m.setAttribute('content', 'Read practical robotics and IoT engineering guides from AtomicTechLabs instructors in Coimbatore, Tamil Nadu. FreeRTOS, ESP32, MQTT, TinyML and more.')
  }, [])
  return null
}

const posts = [
  { slug:'intro-to-rtos',     category:'Embedded', title:'Why your next project needs an RTOS — and how to start', excerpt:"FreeRTOS can feel daunting if you've only written bare-metal C. Here's the mental model that makes it click.", author:'Dr. Rajesh Kumar',        date:'May 2025', readTime:'8 min',  tags:['FreeRTOS','ARM','C'],            featured:true },
  { slug:'esp32-mqtt',        category:'IoT',      title:'Connecting ESP32 to AWS IoT Core in under 30 minutes',   excerpt:'TLS, certificates and MQTT topics — a step-by-step walkthrough that actually works the first time.',      author:'Suresh Balasubramanian', date:'Apr 2025', readTime:'12 min', tags:['ESP32','MQTT','AWS'] },
  { slug:'tinyml-keyword',    category:'AI',       title:'Keyword spotting on a microcontroller — from training to deployment', excerpt:'Using Edge Impulse to train a yes/no classifier and run it on Arduino Nano 33 BLE Sense.', author:'Meenakshi Iyer',         date:'Mar 2025', readTime:'10 min', tags:['TinyML','Edge Impulse','Arduino'] },
  { slug:'can-bus',           category:'Embedded', title:'CAN bus for non-automotive engineers: a practical intro', excerpt:"CAN isn't just for cars. Here's how to use it for reliable multi-node communication in embedded projects.", author:'Dr. Rajesh Kumar',        date:'Feb 2025', readTime:'9 min',  tags:['CAN bus','STM32','Protocols'] },
  { slug:'pcb-kicad',         category:'Hardware', title:'Your first custom PCB in KiCad 8 — a complete walkthrough', excerpt:'Schematic capture → layout → DRC → Gerbers. How to avoid the common first-time mistakes.', author:'Divya Nair',             date:'Jan 2025', readTime:'14 min', tags:['KiCad','PCB','Hardware'] },
  { slug:'school-tips',       category:'Education',title:'Five things we learned teaching robotics to 1,000 school kids', excerpt:'Age-appropriate kits matter less than you think. What actually drives engagement at every level.', author:'Meenakshi Iyer',         date:'Dec 2024', readTime:'6 min',  tags:['Education','Pedagogy','School'] },
]

const categories = ['All','Embedded','IoT','AI','Hardware','Education']
const catColor = { Embedded:'var(--accent)', IoT:'var(--amber)', AI:'var(--amber)', Hardware:'var(--accent)', Education:'var(--accent)' }

function R({ children, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.transitionDelay=`${delay}ms`; el.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [delay])
  return <div ref={ref} className="reveal">{children}</div>
}

export default function Blog() {
  useSEO({
    title: 'Robotics & Embedded Systems Blog — AtomicTechLabs Coimbatore',
    description: 'Practical guides, project walkthroughs and engineering deep-dives from the AtomicTechLabs lab in Coimbatore, Tamil Nadu.',
    canonical: 'https://www.atomictechlabs.in/blog'
  })


  const [cat, setCat] = useState('All')
  const featured   = posts.find(p => p.featured)
  const filtered   = posts.filter(p => (cat==='All' || p.category===cat))

  return (
    <main style={{ paddingTop:'var(--nav-h)' }}>

      {/* Hero */}
      <section className="py-24 border-b" style={{ background:'var(--surface-1)', borderColor:'var(--border)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <R>
            <span className="section-label">From the lab</span>
            <h1 className="t-h1 mb-4">Engineering deep-dives<br/>and build journals</h1>
            <p className="t-body text-lg max-w-[500px]">
              Practical guides, project walkthroughs, and hard-won lessons from our instructors and students. No fluff — all hands.
            </p>
          </R>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="py-16" style={{ background:'var(--surface-2)' }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <R>
              <Link to={`/blog/${featured.slug}`} className="atl-card block relative overflow-hidden group" data-hover>
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background:'radial-gradient(ellipse at 80% 50%,var(--accent-bg),transparent 60%)' }}/>
                <div className="relative z-10 max-w-[680px]">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="t-mono text-xs uppercase tracking-wider" style={{ color:'var(--accent)' }}>{featured.category}</span>
                    <span className="t-mono text-xs" style={{ color:'var(--text-muted)' }}>{featured.date} · {featured.readTime} read</span>
                    <span className="t-mono text-xs px-2 py-0.5 rounded-full"
                      style={{ background:'var(--accent)', color:'#fff' }}>Featured</span>
                  </div>
                  <h2 className="t-h1 mb-3 text-3xl group-hover:text-[var(--accent)] transition-colors">{featured.title}</h2>
                  <p className="t-body mb-6 max-w-[520px]">{featured.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full text-xs font-bold font-mono flex items-center justify-center text-white"
                      style={{ background:'linear-gradient(135deg,var(--accent),var(--amber))' }}>
                      {featured.author.split(' ').map(w=>w[0]).join('').slice(0,2)}
                    </div>
                    <span className="text-sm" style={{ color:'var(--text-muted)' }}>{featured.author}</span>
                  </div>
                  <div className="mt-6 btn btn-primary inline-flex text-sm" style={{ padding:'10px 24px' }}>Read article →</div>
                </div>
              </Link>
            </R>
          </div>
        </section>
      )}

      {/* Filter + grid */}
      <section className="py-20" style={{ background:'var(--surface-1)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(c => (
              <button key={c}
                onClick={() => setCat(c)}
                className="t-mono text-xs px-5 py-2 rounded-full border transition-all duration-200"
                style={{
                  background:  cat===c ? 'var(--accent)' : 'var(--surface-2)',
                  color:       cat===c ? '#fff'          : 'var(--text-muted)',
                  borderColor: cat===c ? 'var(--accent)' : 'var(--border)',
                }}>
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.filter(p => !p.featured || cat !== 'All').map((post, i) => (
              <R key={post.slug} delay={i * 70}>
                <Link to={`/blog/${post.slug}`} className="atl-card flex flex-col h-full group" data-hover>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="t-mono text-xs uppercase tracking-wider" style={{ color: catColor[post.category] || 'var(--accent)' }}>
                      {post.category}
                    </span>
                    <span className="t-mono text-xs" style={{ color:'var(--text-muted)' }}>{post.readTime}</span>
                  </div>
                  <h3 className="font-display font-semibold text-base leading-snug mb-2 flex-1 group-hover:text-[var(--accent)] transition-colors"
                    style={{ color:'var(--text)' }}>
                    {post.title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color:'var(--text-muted)' }}>{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map(t => (
                      <span key={t} className="text-xs px-2.5 py-0.5 rounded-full"
                        style={{ background:'var(--surface-3)', border:'1px solid var(--border)', color:'var(--text-muted)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2.5 pt-4 border-t mt-auto" style={{ borderColor:'var(--border)' }}>
                    <div className="w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center text-white shrink-0"
                      style={{ background:'linear-gradient(135deg,var(--accent),var(--amber))' }}>
                      {post.author.split(' ').map(w=>w[0]).join('').slice(0,2)}
                    </div>
                    <span className="text-xs" style={{ color:'var(--text-muted)' }}>{post.author} · {post.date}</span>
                  </div>
                </Link>
              </R>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-4"><rect x="6" y="14" width="36" height="26" rx="3" stroke="var(--text-faint)" strokeWidth="2"/><path d="M6 22l18 10 18-10" stroke="var(--text-faint)" strokeWidth="2"/><path d="M20 8h8" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round"/><circle cx="32" cy="10" r="5" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="2"/><path d="M32 8v2.5l1.5 1.5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <p className="t-body">No posts in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-24 border-t text-center" style={{ background:'var(--surface-2)', borderColor:'var(--border)' }}>
        <div className="max-w-[560px] mx-auto px-6">
          <R>
            <span className="section-label inline-block" style={{ color:'var(--amber)' }}>Stay sharp</span>
            <h2 className="t-h2 mb-3">New posts every two weeks</h2>
            <p className="t-body mb-8">No marketing. Just the latest embedded systems and IoT guides.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <input type="email" placeholder="your@email.com"
                className="flex-1 max-w-[280px] rounded-lg px-5 py-3 text-sm outline-none transition-all"
                style={{ background:'var(--input-bg)', border:'1px solid var(--border)', color:'var(--text)', fontFamily:'inherit' }}
                onFocus={e=>e.target.style.borderColor='var(--accent)'}
                onBlur={e=>e.target.style.borderColor='var(--border)'}/>
              <button className="btn btn-primary text-sm" style={{ padding:'12px 28px' }}>Subscribe</button>
            </div>
          </R>
        </div>
      </section>

    </main>
  )
}
