import { useRef, useEffect, useState } from 'react'
import NeuralScene from '../components/canvas/NeuralScene'
import { IconMapPin, IconPhone, IconMail, IconClock, IconCheck } from '../components/ui/Icons'

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

const offices = [
  { city:'Coimbatore', addr:'14/2 Gandhipuram, Near Race Course, Coimbatore — 641012, Tamil Nadu', phone:'+91 422 4567890', email:'coimbatore@atomictechlabs.in', hours:'Mon–Sat, 9am–6pm IST' },
  { city:'Bangalore',  addr:'3rd Floor, HSR Layout Sector 2, Bangalore — 560102, Karnataka',       phone:'+91 80 4567890',  email:'bangalore@atomictechlabs.in',  hours:'Mon–Sat, 9am–6pm IST' },
]

const faqs = [
  { q:'Does AtomicTechLabs offer robotics training in Coimbatore?',  a:'Yes — our main lab is based in Coimbatore. We run school robotics, college programs, and corporate IoT training from our Coimbatore centre throughout Tamil Nadu.' },
  { q:'Do I need prior experience to join a school program?',         a:'Not at all. Our school programs start from zero — no soldering, coding or electronics background required.' },
  { q:'Can you deliver training at our company premises?',            a:'Yes. We bring hardware kits, facilitators and everything needed for on-site corporate training in Coimbatore, Bangalore, Chennai or any Tamil Nadu city.' },
  { q:'What age groups do the school programs cover?',                a:'We have curriculum tracks for Grades 5–7, Grades 8–10, and Grades 11–12, each with age-appropriate hardware.' },
  { q:'How long is the embedded systems course?',                     a:'The full semester track is 30 credits (≈16 weeks). We also offer a 5-day intensive bootcamp version for short schedules.' },
]

const enquiryTypes = ['School program','College partnership','Corporate training','IoT solutions','General query']

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b py-5" style={{borderColor:'var(--border)'}} onClick={()=>setOpen(v=>!v)} data-hover>
      <div className="flex justify-between items-start gap-4 font-semibold text-sm transition-colors"
        style={{color:open?'var(--accent)':'var(--text)',cursor:'pointer'}}>
        <span>{q}</span>
        <span className="text-xl shrink-0 leading-none font-bold" style={{color:'var(--accent)'}}>{open?'−':'+'}</span>
      </div>
      {open && <p className="mt-4 text-sm leading-relaxed" style={{color:'var(--text-muted)',animation:'fadeUp 0.2s ease'}}>{a}</p>}
    </div>
  )
}

export default function Contact() {
  const [form, setForm]    = useState({name:'',email:'',phone:'',type:'',message:''})
  const [sent, setSent]    = useState(false)
  const [loading,setLoading]=useState(false)
  const [focused,setFocused]=useState('')

  const handle = e => setForm(f=>({...f,[e.target.name]:e.target.value}))
  const submit = e => { e.preventDefault(); setLoading(true); setTimeout(()=>{setSent(true);setLoading(false)},1800) }

  const fieldStyle = (f) => ({
    background:'var(--input-bg)', color:'var(--text)',
    border:`1px solid ${focused===f?'var(--accent)':'var(--border)'}`,
    boxShadow:focused===f?'0 0 0 3px var(--accent-glow)':'none',
    fontFamily:'inherit', outline:'none',
    transition:'all 0.2s', borderRadius:'10px',
    padding:'13px 15px', fontSize:'0.92rem', width:'100%',
  })

  return (
    <main style={{paddingTop:'var(--nav-h)'}}>
      <PageMeta
        title="Contact AtomicTechLabs — Robotics Training Coimbatore | Enquire Now"
        desc="Contact AtomicTechLabs in Coimbatore, Tamil Nadu for robotics training enquiries, school program bookings, college partnerships and corporate IoT training. Call or email today."
      />

      {/* ── Hero ── */}
      <section className="canvas-section min-h-[62vh] flex items-center py-20 border-b" style={{borderColor:'rgba(255,255,255,0.08)'}}>
        <div className="canvas-fill opacity-45"><NeuralScene/></div>
        <div className="canvas-content max-w-[1280px] mx-auto px-6 w-full">
          <R>
            <span className="section-label" style={{color:'#7bc44f'}}>Get in touch</span>
            <h1 className="t-h1 mb-4 text-white">Let's build<br/><span style={{color:'#7bc44f'}}>something real</span></h1>
            <p className="text-lg max-w-[460px] leading-relaxed mb-10" style={{color:'rgba(255,255,255,0.72)'}}>
              Whether you're a Coimbatore school looking to start a robotics club, an engineering college wanting a curriculum partner, or a corporate team ready to upskill — we're ready.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                {Icon:IconPhone,  label:'Call us',  val:'+91 422 456 7890'},
                {Icon:IconMail,   label:'Email us', val:'hello@atomictechlabs.in'},
                {Icon:IconMapPin, label:'Visit us', val:'Coimbatore · Bangalore'},
              ].map(l=>(
                <div key={l.label} className="flex items-center gap-3 rounded-xl px-5 py-3"
                  style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)'}}>
                  <l.Icon size={18} color="#7bc44f"/>
                  <div>
                    <div className="t-mono text-xs opacity-60 uppercase tracking-widest text-white">{l.label}</div>
                    <div className="text-sm font-medium text-white">{l.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </R>
        </div>
      </section>

      {/* ── Form + Offices ── */}
      <section className="py-24" style={{background:'var(--surface-1)'}}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">

            {/* Form */}
            <R>
              <div className="rounded-2xl p-10" style={{background:'var(--card-bg)',border:'1px solid var(--border)',boxShadow:'var(--shadow)'}}>
                <div className="t-mono text-xs mb-2" style={{color:'var(--accent)'}}>SEND A MESSAGE</div>
                <h2 className="t-h2 mb-8" style={{color:'var(--text)'}}>Drop us a note</h2>
                {sent ? (
                  <div className="flex flex-col items-center text-center py-10">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{background:'var(--accent-bg)',border:'2px solid var(--accent)'}}>
                      <IconCheck size={28} color="var(--accent)"/>
                    </div>
                    <h3 className="t-h3 mb-2" style={{color:'var(--text)'}}>Message sent!</h3>
                    <p className="t-body mb-6">We'll get back to you within one business day.</p>
                    <button onClick={()=>setSent(false)} className="btn btn-outline text-sm" style={{padding:'10px 24px'}} data-hover>Send another</button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="t-mono text-xs uppercase tracking-wider" style={{color:focused==='name'?'var(--accent)':'var(--text-muted)'}}>Your name *</label>
                        <input name="name" value={form.name} onChange={handle} required placeholder="Priya Sharma"
                          style={fieldStyle('name')} onFocus={()=>setFocused('name')} onBlur={()=>setFocused('')}/>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="t-mono text-xs uppercase tracking-wider" style={{color:focused==='email'?'var(--accent)':'var(--text-muted)'}}>Email *</label>
                        <input name="email" type="email" value={form.email} onChange={handle} required placeholder="priya@school.edu.in"
                          style={fieldStyle('email')} onFocus={()=>setFocused('email')} onBlur={()=>setFocused('')}/>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="t-mono text-xs uppercase tracking-wider" style={{color:focused==='phone'?'var(--accent)':'var(--text-muted)'}}>Phone</label>
                        <input name="phone" value={form.phone} onChange={handle} placeholder="+91 98765 43210"
                          style={fieldStyle('phone')} onFocus={()=>setFocused('phone')} onBlur={()=>setFocused('')}/>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="t-mono text-xs uppercase tracking-wider" style={{color:focused==='type'?'var(--accent)':'var(--text-muted)'}}>Enquiry type *</label>
                        <select name="type" value={form.type} onChange={handle} required
                          style={fieldStyle('type')} onFocus={()=>setFocused('type')} onBlur={()=>setFocused('')}>
                          <option value="">Select a program</option>
                          {enquiryTypes.map(t=><option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="t-mono text-xs uppercase tracking-wider" style={{color:focused==='message'?'var(--accent)':'var(--text-muted)'}}>Message *</label>
                      <textarea name="message" value={form.message} onChange={handle} required rows={5}
                        placeholder="Tell us about your school / college / team in Coimbatore or Tamil Nadu…"
                        style={{...fieldStyle('message'),resize:'vertical',minHeight:'130px'}}
                        onFocus={()=>setFocused('message')} onBlur={()=>setFocused('')}/>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={loading} style={{minWidth:'180px'}} data-hover>
                      {loading ? (
                        <span className="flex items-center gap-2">
                          {[0,1,2].map(i=><span key={i} className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" style={{animationDelay:`${i*0.15}s`}}/>)}
                          Sending…
                        </span>
                      ) : 'Send message →'}
                    </button>
                  </form>
                )}
              </div>
            </R>

            {/* Offices */}
            <div className="flex flex-col gap-4">
              {offices.map((o,i)=>(
                <R key={o.city} delay={i*110}>
                  <div className="atl-card">
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b" style={{borderColor:'var(--border)'}}>
                      <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{background:'var(--accent)',boxShadow:'0 0 10px var(--accent-glow)',animation:'glowPulse 2s ease infinite'}}/>
                      <h3 className="t-h3 text-base" style={{color:'var(--text)'}}>{o.city}</h3>
                    </div>
                    {[
                      {Icon:IconMapPin, val:o.addr},
                      {Icon:IconPhone,  val:o.phone},
                      {Icon:IconMail,   val:o.email},
                      {Icon:IconClock,  val:o.hours},
                    ].map(({Icon,val})=>(
                      <div key={val} className="flex gap-3 mb-3 items-start text-sm">
                        <Icon size={16} color="var(--accent)" className="shrink-0 mt-0.5"/>
                        <span style={{color:'var(--text-muted)'}}>{val}</span>
                      </div>
                    ))}
                  </div>
                </R>
              ))}
              <R delay={240}>
                <div className="flex items-center gap-4 rounded-xl p-5" style={{background:'var(--accent-bg)',border:'1px solid var(--border-strong)'}}>
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{background:'var(--accent)',boxShadow:'0 0 10px var(--accent-glow)'}}/>
                  <div>
                    <div className="font-semibold text-sm mb-0.5" style={{color:'var(--text)'}}>Responds within 24 hours</div>
                    <div className="text-xs" style={{color:'var(--text-muted)'}}>Mon–Sat, our Coimbatore team is active.</div>
                  </div>
                </div>
              </R>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 border-t" style={{background:'var(--surface-2)',borderColor:'var(--border)'}}>
        <div className="max-w-[800px] mx-auto px-6">
          <R>
            <span className="section-label" style={{color:'var(--amber)'}}>Common questions</span>
            <h2 className="t-h1 mb-12" style={{color:'var(--text)'}}>Before you reach out</h2>
          </R>
          {faqs.map((f,i)=><R key={i} delay={i*55}><FAQItem q={f.q} a={f.a}/></R>)}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-14 border-t" style={{background:'var(--card-bg)',borderColor:'var(--border)'}}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{n:'500+',l:'Students trained'},{n:'40+',l:'Partner schools'},{n:'8',l:'Corporate clients'},{n:'<24h',l:'Response time'}].map(p=>(
              <div key={p.l}>
                <div className="font-display text-3xl font-bold mb-1" style={{color:'var(--accent)'}}>{p.n}</div>
                <div className="text-sm" style={{color:'var(--text-muted)'}}>{p.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
