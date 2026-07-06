import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GlobeScene from '../components/canvas/GlobeScene'
import AutoScroll from '../components/ui/AutoScroll'
import { IconSchoolBuilding, IconGraduate, IconBuilding, IconCert, IconCheck } from '../components/ui/Icons'

function PageMeta({ title, desc }) {
  useEffect(() => { document.title = title; const m = document.querySelector('meta[name="description"]'); if(m) m.setAttribute('content',desc) },[title,desc])
  return null
}

function R({ children, delay=0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if(!el) return
    const obs = new IntersectionObserver(([e]) => {
      if(e.isIntersecting){el.style.transitionDelay=`${delay}ms`;el.classList.add('visible');obs.disconnect()}
    },{threshold:0.08})
    obs.observe(el); return ()=>obs.disconnect()
  },[delay])
  return <div ref={ref} className="reveal">{children}</div>
}

const timeline = [
  { year:'2012', title:'Founded in Coimbatore', desc:'Started in a single robotics lab in Coimbatore with 12 school students and a deep passion for hands-on engineering.' },
  { year:'2015', title:'College partnerships',   desc:'Signed curriculum agreements with 3 engineering colleges in Tamil Nadu; launched embedded systems diploma.' },
  { year:'2018', title:'Corporate wing',         desc:'Opened corporate training division — first client: an automotive OEM. Expanded to serve Coimbatore industry.' },
  { year:'2021', title:'Bangalore centre',       desc:'Second facility opens; IoT-as-a-Service division launches for smart factory deployments.' },
  { year:'2024', title:'AI at the Edge',         desc:'New TinyML and computer vision curriculum — among the first in Tamil Nadu to offer edge AI training.' },
]

const team = [
  { name:'Dr. Rajesh Kumar',       role:'Founder & Director',      init:'RK', spec:'Embedded systems, 18 yrs industry, Coimbatore' },
  { name:'Meenakshi Iyer',         role:'Head of Curriculum',      init:'MI', spec:'Robotics pedagogy, ex-NIT Trichy faculty' },
  { name:'Suresh Balasubramanian', role:'IoT Solutions Lead',      init:'SB', spec:'Industrial IoT, MQTT, AWS — Tamil Nadu' },
  { name:'Divya Nair',             role:'Corporate Training Head', init:'DN', spec:'L&D, automation upskilling, Bangalore' },
]

const schoolPartners = [
  { name:'PSG Public School',      city:'Coimbatore' },
  { name:'SBOA School',            city:'Chennai' },
  { name:'Vidya Vikas Academy',    city:'Mysore' },
  { name:'Sri Vani School',        city:'Coimbatore' },
  { name:'Carmel Garden School',   city:'Bangalore' },
  { name:"St. Joseph's School",    city:'Trichy' },
  { name:'The PSBB School',        city:'Chennai' },
  { name:'Bhavans Vidya Mandir',   city:'Ernakulam' },
]

const collegePartners = [
  { name:'PSG College of Technology',  city:'Coimbatore' },
  { name:'RVR Engineering College',    city:'Guntur' },
  { name:'KPR Inst. of Engineering',   city:'Coimbatore' },
  { name:'BMS College of Engineering', city:'Bangalore' },
  { name:'Amrita School of Engg.',     city:'Coimbatore' },
  { name:'Kongu Engineering College',  city:'Erode' },
  { name:'SASTRA University',          city:'Thanjavur' },
  { name:'Vellore Inst. of Tech.',     city:'Vellore' },
]

const certificates = [
  { code:'ATL-101', name:'Robotics Fundamentals',  hrs:'40 hrs',  Icon:IconCheck },
  { code:'ATL-201', name:'IoT with ESP32',           hrs:'60 hrs',  Icon:IconCheck },
  { code:'ATL-301', name:'Embedded C & RTOS',        hrs:'80 hrs',  Icon:IconCheck },
  { code:'ATL-401', name:'PCB Design (KiCad)',        hrs:'50 hrs',  Icon:IconCheck },
  { code:'ATL-501', name:'TinyML & Edge AI',          hrs:'60 hrs',  Icon:IconCheck },
  { code:'ATL-601', name:'Industrial IoT',            hrs:'70 hrs',  Icon:IconCheck },
  { code:'ATL-102', name:'Arduino Starter',           hrs:'20 hrs',  Icon:IconCheck },
  { code:'ATL-702', name:'ROS for Beginners',         hrs:'45 hrs',  Icon:IconCheck },
]

function PartnerCard({ name, city, type }) {
  const Icon = type === 'college' ? IconGraduate : IconSchoolBuilding
  return (
    <div className="shrink-0 flex items-center gap-3 rounded-xl px-5 py-4 mx-2 min-w-[200px]"
      style={{background:'var(--card-bg)',border:'1px solid var(--border)',boxShadow:'var(--shadow-sm)'}}>
      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
        style={{background:'var(--accent-bg)'}}>
        <Icon size={20} color="var(--accent)"/>
      </div>
      <div>
        <div className="font-display font-semibold text-sm leading-tight" style={{color:'var(--text)'}}>{name}</div>
        <div className="t-mono text-xs mt-0.5" style={{color:'var(--text-muted)'}}>{city}</div>
      </div>
    </div>
  )
}

function CertCard({ code, name, hrs }) {
  return (
    <div className="shrink-0 rounded-xl px-5 py-4 mx-2 min-w-[210px] flex items-center gap-3"
      style={{background:'var(--card-bg)',border:'1px solid var(--border-strong)',boxShadow:'var(--shadow-sm)'}}>
      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
        style={{background:'var(--accent-bg)'}}>
        <IconCert size={20} color="var(--accent)"/>
      </div>
      <div>
        <div className="t-mono text-xs mb-0.5" style={{color:'var(--accent)'}}>{code}</div>
        <div className="font-display font-semibold text-sm leading-tight" style={{color:'var(--text)'}}>{name}</div>
        <div className="t-mono text-xs mt-0.5" style={{color:'var(--text-muted)'}}>{hrs}</div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <main style={{paddingTop:'var(--nav-h)'}}>
      <PageMeta
        title="About AtomicTechLabs — Robotics Training Institute Founded in Coimbatore"
        desc="Learn about AtomicTechLabs, Coimbatore's premier robotics and IoT training institute. Founded in 2012, we've trained 500+ students across Tamil Nadu in robotics, embedded systems and IoT."
      />

      {/* ── HERO ── */}
      <section className="canvas-section min-h-[62vh] flex items-center py-20">
        <div className="canvas-fill opacity-55"><GlobeScene/></div>
        <div className="canvas-content max-w-[1280px] mx-auto px-6 w-full">
          <R>
            <span className="section-label" style={{color:'#7bc44f'}}>Our story</span>
            <h1 className="t-h1 mb-5 text-white">Building India's robotics talent,<br/><span style={{color:'#7bc44f'}}>one lab at a time</span></h1>
            <p className="text-lg max-w-[540px] leading-relaxed" style={{color:'rgba(255,255,255,0.72)'}}>
              Founded in 2012, AtomicTechLabs started with a single robotics lab in Coimbatore. Today we train 500+ students a year across schools, colleges and Fortune 500 corporate teams throughout Tamil Nadu.
            </p>
          </R>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-24" style={{background:'var(--surface-1)'}}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { Icon:IconCheck, title:'Our mission', text:'Bridge the gap between theoretical engineering education and real-world hardware skills through structured, hands-on learning right here in Coimbatore.' },
              { Icon:IconCheck, title:'Our vision',  text:'Every engineering graduate in Tamil Nadu should be able to pick up a microcontroller and build something useful within hours, not months.' },
              { Icon:IconCheck, title:'Our method',  text:'Project-first learning. Every concept is introduced through a build challenge. Theory follows practice — always.' },
            ].map((m,i)=>(
              <R key={m.title} delay={i*100}>
                <div className="atl-card h-full">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:'var(--accent-bg)'}}>
                    <m.Icon size={22} color="var(--accent)"/>
                  </div>
                  <h3 className="t-h3 mb-3" style={{color:'var(--text)'}}>{m.title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'var(--text-muted)'}}>{m.text}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHOOL PARTNERS SCROLL ── */}
      <section className="py-20 overflow-hidden border-y" style={{background:'var(--surface-2)',borderColor:'var(--border)'}}>
        <div className="max-w-[1280px] mx-auto px-6 mb-8">
          <R>
            <span className="section-label">School network</span>
            <h2 className="t-h2" style={{color:'var(--text)'}}>Our partner schools</h2>
          </R>
        </div>
        <AutoScroll speed="normal">
          {schoolPartners.map((p,i)=><PartnerCard key={i} {...p} type="school"/>)}
        </AutoScroll>
        <div className="mt-3">
          <AutoScroll speed="slow" reverse>
            {schoolPartners.slice().reverse().map((p,i)=><PartnerCard key={i} {...p} type="school"/>)}
          </AutoScroll>
        </div>
      </section>

      {/* ── COLLEGE PARTNERS SCROLL ── */}
      <section className="py-20 overflow-hidden border-b" style={{background:'var(--card-bg)',borderColor:'var(--border)'}}>
        <div className="max-w-[1280px] mx-auto px-6 mb-8">
          <R>
            <span className="section-label">College network</span>
            <h2 className="t-h2" style={{color:'var(--text)'}}>Engineering college tie-ups in Tamil Nadu</h2>
            <p className="t-body mt-2 max-w-[500px]">Curriculum partnerships with top engineering colleges across Coimbatore, Erode, Trichy and beyond.</p>
          </R>
        </div>
        <AutoScroll speed="normal" reverse>
          {collegePartners.map((p,i)=><PartnerCard key={i} {...p} type="college"/>)}
        </AutoScroll>
      </section>

      {/* ── CERTIFICATES SCROLL ── */}
      <section className="py-20 overflow-hidden border-b" style={{background:'var(--surface-2)',borderColor:'var(--border)'}}>
        <div className="max-w-[1280px] mx-auto px-6 mb-8">
          <R>
            <span className="section-label" style={{color:'var(--amber)'}}>Certifications</span>
            <h2 className="t-h2" style={{color:'var(--text)'}}>Certificates we award</h2>
            <p className="t-body mt-2 max-w-[500px]">Industry-recognised certificates on completion — accepted by engineering colleges and companies across Tamil Nadu.</p>
          </R>
        </div>
        <AutoScroll speed="fast">
          {certificates.map((c,i)=><CertCard key={i} {...c}/>)}
        </AutoScroll>
        <div className="mt-3">
          <AutoScroll speed="normal" reverse>
            {certificates.slice().reverse().map((c,i)=><CertCard key={i} {...c}/>)}
          </AutoScroll>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 border-b" style={{background:'var(--surface-1)',borderColor:'var(--border)'}}>
        <div className="max-w-[1280px] mx-auto px-6">
          <R>
            <span className="section-label" style={{color:'var(--amber)'}}>12 years in Coimbatore</span>
            <h2 className="t-h1 mb-14" style={{color:'var(--text)'}}>Our journey</h2>
          </R>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block" style={{background:'var(--border)'}}/>
            {timeline.map((item,i)=>(
              <R key={item.year} delay={i*90}>
                <div className={`relative flex mb-10 items-start gap-8 ${i%2===0?'md:flex-row md:pr-[calc(50%+40px)] md:justify-end':'md:flex-row-reverse md:pl-[calc(50%+40px)]'}`}>
                  <div className="t-mono text-xs pt-4 shrink-0 font-bold" style={{color:'var(--accent)'}}>{item.year}</div>
                  <div className="hidden md:block absolute left-1/2 top-4 w-3 h-3 rounded-full -translate-x-1/2 z-10"
                    style={{background:'var(--accent)',border:'2px solid var(--surface-1)',boxShadow:'0 0 12px var(--accent-glow)'}}/>
                  <div className="atl-card max-w-sm">
                    <h3 className="t-h3 mb-2" style={{color:'var(--text)'}}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{color:'var(--text-muted)'}}>{item.desc}</p>
                  </div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24" style={{background:'var(--surface-2)'}}>
        <div className="max-w-[1280px] mx-auto px-6">
          <R>
            <span className="section-label">The people</span>
            <h2 className="t-h1 mb-12" style={{color:'var(--text)'}}>Who builds this</h2>
          </R>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m,i)=>(
              <R key={m.name} delay={i*80}>
                <div className="atl-card text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold font-mono text-white mx-auto"
                    style={{background:'linear-gradient(135deg,var(--accent-dark),var(--accent))',border:'2px solid var(--border-strong)'}}>
                    {m.init}
                  </div>
                  <h3 className="t-h3 text-base mt-4 mb-1" style={{color:'var(--text)'}}>{m.name}</h3>
                  <div className="t-mono mb-2" style={{color:'var(--accent)',fontSize:'0.68rem'}}>{m.role}</div>
                  <p className="text-xs leading-relaxed" style={{color:'var(--text-muted)'}}>{m.spec}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 text-center border-t" style={{background:'var(--card-bg)',borderColor:'var(--border)'}}>
        <div className="max-w-[1280px] mx-auto px-6">
          <R>
            <h2 className="t-h1 mb-4" style={{color:'var(--text)'}}>Want to work with us?</h2>
            <p className="t-body mb-10">We're always looking for passionate educators and engineers across Tamil Nadu.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact"  className="btn btn-primary" data-hover>Get in touch</Link>
              <Link to="/services" className="btn btn-outline" data-hover>See our programs</Link>
            </div>
          </R>
        </div>
      </section>
    </main>
  )
}
