import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import HeroScene from '../components/canvas/HeroScene'
import ConveyorScene from '../components/canvas/ConveyorScene'
import GlobeScene from '../components/canvas/GlobeScene'
import AntigravityCanvas from '../components/ui/AntigravityCanvas'
import {
  IconRobot, IconGraduate, IconBuilding, IconWifi,
  IconChip, IconBrain, IconCheck, IconArrow, IconStar
} from '../components/ui/Icons'

/* ─── SEO helper – updates <title> per page ─── */
function PageMeta({ title, desc }) {
  useEffect(() => {
    document.title = title
    const m = document.querySelector('meta[name="description"]')
    if (m) m.setAttribute('content', desc)
  }, [title, desc])
  return null
}

const stats = [
  { value:500, suffix:'+', label:'Students trained' },
  { value:40,  suffix:'+', label:'Partner schools' },
  { value:12,  suffix:'',  label:'Years experience' },
  { value:98,  suffix:'%', label:'Placement rate' },
]

const programs = [
  { Icon:IconRobot,    title:'School Robotics',    age:'Age 10–18',   desc:'Hands-on robot building, coding and electronics for school students across Coimbatore and Tamil Nadu.', link:'/services/school'    },
  { Icon:IconGraduate, title:'College Programs',   age:'UG / PG',     desc:'Industry-grade project labs in embedded systems and IoT for engineering colleges.',                       link:'/services/college'   },
  { Icon:IconBuilding, title:'Corporate Training', age:'Teams',       desc:'Custom automation and IoT upskilling for engineering teams in Coimbatore and Bangalore.',                link:'/services/corporate' },
  { Icon:IconWifi,     title:'IoT Solutions',      age:'All levels',  desc:'Full-stack IoT from sensor to cloud, deployed in real facilities across Tamil Nadu.',                    link:'/services/iot'       },
  { Icon:IconChip,     title:'Embedded Systems',   age:'Intermediate',desc:'Firmware development, RTOS and hardware design courses — from Coimbatore labs.',                        link:'/services/embedded'  },
  { Icon:IconBrain,    title:'AI at the Edge',     age:'Advanced',    desc:'Deploy ML models on microcontrollers and Raspberry Pi with our TinyML program.',                        link:'/services/ai'        },
]

const testimonials = [
  { name:'Priya Sharma',          role:'B.Tech ECE, PSG College of Technology, Coimbatore', text:'The embedded systems course completely changed how I approach hardware. Placed in a firmware role before graduation.', init:'PS' },
  { name:'Arjun Menon',           role:'Class 11, Coimbatore',                               text:'Built my first line-following robot in week 2. Best decision my parents made — world-class labs right here in Coimbatore.', init:'AM' },
  { name:'Kavitha Rajan',         role:'IoT Lead, Bosch India',                              text:"Sent our whole team for the IoT workshop. The most practical training we've ever had. Highly recommended.", init:'KR' },
]

function StatCounter({ value, suffix, label }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let s = 0
        const step = () => { s += Math.ceil(value/55); if(s>=value){setN(value);return}; setN(s); requestAnimationFrame(step) }
        requestAnimationFrame(step); obs.disconnect()
      }
    }, { threshold:0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [value])
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl font-bold" style={{color:'var(--accent)'}}>{n}{suffix}</div>
      <div className="text-sm mt-2" style={{color:'var(--text-muted)'}}>{label}</div>
      <div className="w-8 h-0.5 mx-auto mt-3 rounded" style={{background:'var(--accent)',opacity:0.4}}/>
    </div>
  )
}

function R({ children, delay=0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if(!el) return
    const obs = new IntersectionObserver(([e]) => {
      if(e.isIntersecting){el.style.transitionDelay=`${delay}ms`;el.classList.add('visible');obs.disconnect()}
    },{threshold:0.1})
    obs.observe(el); return ()=>obs.disconnect()
  },[delay])
  return <div ref={ref} className="reveal">{children}</div>
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const fn = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', fn, { passive:true })
    return () => window.removeEventListener('scroll', fn)
  },[])

  return (
    <main>
      <PageMeta
        title="AtomicTechLabs — Robotics & IoT Training Institute in Coimbatore, Tamil Nadu"
        desc="AtomicTechLabs offers hands-on Robotics, IoT, Embedded Systems and AI training for school students, engineering colleges and corporates in Coimbatore, Tamil Nadu."
      />

      {/* ── HERO ── */}
      <section className="canvas-section min-h-screen flex items-center" style={{paddingTop:'var(--nav-h)'}}>
        <AntigravityCanvas particleCount={130} repelRadius={130} lineRadius={110}/>
        <div className="canvas-fill opacity-55"><HeroScene scrollY={scrollY}/></div>
        <div className="canvas-content max-w-[1280px] mx-auto px-6 py-24 w-full">
          <div className="max-w-[660px]">
            <div className="flex items-center gap-2.5 mb-6 t-mono" style={{color:'#7bc44f'}}>
              <span className="w-1.5 h-1.5 rounded-full" style={{background:'#7bc44f',boxShadow:'0 0 8px rgba(123,196,79,0.8)'}}/>
              Robotics &amp; IoT Training Institute — Coimbatore, Tamil Nadu
            </div>
            <h1 className="t-hero mb-6 text-white">
              We build the<br/>
              <span style={{color:'#7bc44f'}}>engineers</span><br/>
              of tomorrow
            </h1>
            <p className="text-lg mb-10 max-w-[500px] leading-relaxed" style={{color:'rgba(255,255,255,0.72)'}}>
              Hands-on Robotics, IoT, Embedded Systems and AI training for school students, colleges and corporates — right here in Coimbatore.
            </p>
            <div className="flex gap-4 flex-wrap mb-12">
              <Link to="/services" className="btn btn-primary" data-hover>Explore programs</Link>
              <Link to="/contact"  className="btn btn-outline" data-hover style={{color:'#7bc44f',borderColor:'#7bc44f'}}>Book a demo</Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Arduino','Raspberry Pi','ROS','ESP32','TensorFlow Lite','MQTT','STM32','FreeRTOS'].map(t=>(
                <span key={t} className="tech-chip">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float">
          <div className="w-5 h-8 rounded-full border flex justify-center pt-1.5" style={{borderColor:'rgba(255,255,255,0.4)'}}>
            <div className="w-0.5 h-1.5 rounded-full bg-white" style={{animation:'scrollBounce 2s ease infinite'}}/>
          </div>
          <span className="t-mono text-xs text-white/50">scroll</span>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 border-y" style={{background:'var(--card-bg)',borderColor:'var(--border)'}}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map(s=><StatCounter key={s.label} {...s}/>)}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="py-28" style={{background:'var(--surface-1)'}}>
        <div className="max-w-[1280px] mx-auto px-6">
          <R>
            <span className="section-label">What we teach</span>
            <h2 className="t-h1 mb-3" style={{color:'var(--text)'}}>Programs for every level</h2>
            <p className="t-body text-lg mb-14 max-w-[560px]">
              From a curious 10-year-old in Coimbatore building their first robot to a corporate team deploying industrial IoT — we have a track for you.
            </p>
          </R>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((p,i)=>(
              <R key={p.title} delay={i*70}>
                <Link to={p.link} className="atl-card flex flex-col group h-full" data-hover>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                    style={{background:'var(--accent-bg)',border:'1px solid var(--border-strong)'}}>
                    <p.Icon size={26} color="var(--accent)"/>
                  </div>
                  <div className="t-mono mb-2" style={{color:'var(--amber)',fontSize:'0.65rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>{p.age}</div>
                  <h3 className="t-h3 mb-2" style={{color:'var(--text)'}}>{p.title}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{color:'var(--text-muted)'}}>{p.desc}</p>
                  <div className="flex items-center gap-1.5 text-sm font-medium transition-all group-hover:gap-3" style={{color:'var(--accent)'}}>
                    Learn more <IconArrow size={14} color="var(--accent)"/>
                  </div>
                </Link>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONVEYOR ── */}
      <section className="canvas-section py-28 min-h-[560px] flex items-center">
        <div className="canvas-fill opacity-55"><ConveyorScene/></div>
        <div className="canvas-content max-w-[1280px] mx-auto px-6 w-full">
          <R>
            <span className="section-label" style={{color:'var(--amber)'}}>How it works</span>
            <h2 className="t-h1 mb-4 text-white">Learning by building</h2>
            <p className="text-lg mb-10 max-w-[480px] leading-relaxed" style={{color:'rgba(255,255,255,0.72)'}}>
              Every program at our Coimbatore labs follows a hands-on assembly model. Students wire, code, solder and debug real hardware from day one.
            </p>
          </R>
          <div className="flex flex-col gap-4 max-w-[460px]">
            {[
              {n:'01',title:'Components',desc:'Understand sensors, actuators and microcontrollers'},
              {n:'02',title:'Assembly',  desc:'Wire circuits and build mechanical structures'},
              {n:'03',title:'Code',      desc:'Program in C, Python or block-based environments'},
              {n:'04',title:'Deploy',    desc:'Test in real-world scenarios and iterate'},
            ].map((s,i)=>(
              <R key={s.n} delay={i*90}>
                <div className="flex items-start gap-5 rounded-xl p-5 transition-colors"
                  style={{background:'rgba(13,30,13,0.7)',backdropFilter:'blur(10px)',border:'1px solid rgba(255,255,255,0.1)'}}>
                  <span className="t-mono pt-0.5 shrink-0 font-bold" style={{color:'#7bc44f'}}>{s.n}</span>
                  <div>
                    <div className="font-display font-semibold mb-1 text-white">{s.title}</div>
                    <div className="text-sm leading-relaxed" style={{color:'rgba(255,255,255,0.65)'}}>{s.desc}</div>
                  </div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBE / REACH ── */}
      <section className="canvas-section py-28 min-h-[520px] flex items-center">
        <div className="canvas-fill"><GlobeScene/></div>
        <div className="canvas-content max-w-[1280px] mx-auto px-6 w-full">
          <R>
            <span className="section-label" style={{color:'#7bc44f'}}>Our reach</span>
            <h2 className="t-h1 mb-4 text-white">Training centres in<br/><span style={{color:'#7bc44f'}}>two cities</span></h2>
            <p className="text-lg mb-6 max-w-[440px] leading-relaxed" style={{color:'rgba(255,255,255,0.72)'}}>
              Based in Coimbatore and Bangalore, we've partnered with 40+ schools, 12 engineering colleges, and 8 corporations across Tamil Nadu.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {['Coimbatore','Bangalore','Chennai','Hyderabad (online)'].map(c=>(
                <span key={c} className="tech-chip">{c}</span>
              ))}
            </div>
            <Link to="/about" className="btn btn-outline inline-flex" style={{color:'#7bc44f',borderColor:'#7bc44f'}} data-hover>About us →</Link>
          </R>
        </div>
      </section>

      {/* ── GALLERY TEASER ── */}
      <section className="py-24 border-t text-center" style={{background:'var(--surface-2)',borderColor:'var(--border)'}}>
        <div className="max-w-[1280px] mx-auto px-6">
          <R>
            <span className="section-label inline-block">Real projects from our Coimbatore labs</span>
            <h2 className="t-h1 mb-4" style={{color:'var(--text)'}}>See what our <span style={{color:'var(--accent)'}}>students build</span></h2>
            <p className="t-body text-lg mb-10 max-w-[460px] mx-auto">
              Robots, IoT dashboards, custom PCBs, smart school systems — browse the gallery of work from our labs.
            </p>
            <Link to="/gallery" className="btn btn-primary" data-hover>View gallery →</Link>
          </R>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28" style={{background:'var(--card-bg)'}}>
        <div className="max-w-[1280px] mx-auto px-6">
          <R>
            <span className="section-label" style={{color:'var(--amber)'}}>What people say</span>
            <h2 className="t-h1 mb-12" style={{color:'var(--text)'}}>Results that speak</h2>
          </R>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t,i)=>(
              <R key={t.name} delay={i*100}>
                <div className="atl-card flex flex-col h-full">
                  <div className="flex gap-0.5 mb-4">
                    {[1,2,3,4,5].map(s=>(
                      <IconStar key={s} size={14} color="var(--amber)"/>
                    ))}
                  </div>
                  <p className="flex-1 mb-6 leading-relaxed text-sm" style={{color:'var(--text)'}}>{t.text}</p>
                  <div className="flex items-center gap-3 pt-4 border-t" style={{borderColor:'var(--border)'}}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold font-mono text-white shrink-0"
                      style={{background:'linear-gradient(135deg,var(--accent),var(--amber))'}}>{t.init}</div>
                    <div>
                      <div className="font-semibold text-sm" style={{color:'var(--text)'}}>{t.name}</div>
                      <div className="text-xs" style={{color:'var(--text-muted)'}}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 relative overflow-hidden border-t" style={{background:'var(--surface-1)',borderColor:'var(--border)'}}>
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
            <path d="M0 200 H200 L240 160 H400 L440 200 H600 L640 240 H800 L840 200 H1000 L1040 160 H1200"
              stroke="var(--accent)" strokeWidth="1" fill="none"/>
            {[200,400,600,800,1000].map(x=>(
              <circle key={x} cx={x} cy={200} r="4" fill="var(--accent)" opacity="0.5"/>
            ))}
          </svg>
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <R>
            <h2 className="t-h1 mb-4" style={{color:'var(--text)'}}>Ready to build the <span style={{color:'var(--accent)'}}>future?</span></h2>
            <p className="t-body text-lg max-w-[460px] mx-auto mb-10">
              Join 500+ students and professionals who've levelled up with AtomicTechLabs in Coimbatore.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact" className="btn btn-primary" data-hover>Start your journey</Link>
              <Link to="/blog"    className="btn btn-outline" data-hover>Read our blog</Link>
            </div>
          </R>
        </div>
      </section>
    </main>
  )
}
