import { useRef, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CircuitScene from '../components/canvas/CircuitScene'
import ConveyorScene from '../components/canvas/ConveyorScene'
import { IconRobot,IconGraduate,IconBuilding,IconWifi,IconChip,IconBrain,IconCheck,IconArrow } from '../components/ui/Icons'

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

const allServices = [
  { slug:'school',    Icon:IconRobot,    title:'School Robotics',     sub:'Grade 5–12',         tagline:'First contact with hardware — done right.',           desc:'Age-appropriate kits and guided challenges introduce students to electronics, mechanical assembly, and programming. No experience needed. Available at our Coimbatore and partner school labs.',                                              highlights:['Arduino & Scratch coding','Mechanical kit assembly','Inter-school competitions in Tamil Nadu','1-day to 12-week workshops'], curriculum:['Week 1–2: Electronics basics, LEDs, resistors','Week 3–4: Sensors (IR, ultrasonic, colour)','Week 5–6: Motors & servo control','Week 7–8: Line-follower build','Week 9–10: Obstacle avoider','Week 11–12: Final project + demo day'] },
  { slug:'college',   Icon:IconGraduate, title:'College Programs',    sub:'UG & PG Engineering', tagline:'Close the gap between classroom and factory floor.',    desc:'Semester electives, project labs and certification courses with practical embedded systems and IoT depth. Delivered at our Coimbatore lab or partner engineering college campuses.',                                                        highlights:['30-credit semester courses','Live project on client hardware','Industry mentor connect','IEEE paper support'], curriculum:['Module 1: Microcontroller deep-dive (STM32, ESP32)','Module 2: RTOS fundamentals','Module 3: Communication protocols (UART, SPI, I2C, CAN)','Module 4: IoT stack (MQTT, Node-RED, cloud)','Module 5: Capstone project'] },
  { slug:'corporate', Icon:IconBuilding, title:'Corporate Training',  sub:'Engineering teams',   tagline:'Upskill your team without stopping the line.',          desc:'Custom programs on-site or remote for manufacturing, automotive and electronics companies in Coimbatore and Bangalore. From 1-day bootcamps to 12-week transformation tracks.',                                                               highlights:['On-site delivery in Coimbatore & Bangalore','Custom hardware kits','Post-training support portal','ROI assessment included'], curriculum:['Day 1: IoT fundamentals & landscape overview','Day 2: Hands-on sensor integration','Day 3: Cloud connectivity + dashboards','Day 4: Security & OTA updates','Day 5: Implementation planning'] },
  { slug:'iot',       Icon:IconWifi,     title:'IoT Solutions',       sub:'Device to cloud',     tagline:'Training that ships product.',                          desc:'Full IoT systems for smart factories, cold chains, building automation and energy monitoring across Tamil Nadu. Training and deployment handled by one team.',                                                                                  highlights:['Edge + cloud architecture','Custom firmware development','Predictive maintenance systems','Real-time dashboards'], curriculum:['Phase 1: Requirements & sensor selection','Phase 2: Firmware & connectivity','Phase 3: Cloud backend','Phase 4: Dashboard & alerting','Phase 5: Deployment & handover'] },
  { slug:'embedded',  Icon:IconChip,     title:'Embedded Systems',    sub:'Firmware & hardware', tagline:'The closest you can get to the metal.',                  desc:'Deep-dive courses in bare-metal C, RTOS, hardware bring-up, PCB design and DSP — for production-grade firmware engineers. Coimbatore-based lab with real hardware.',                                                                        highlights:['Bare-metal ARM Cortex-M','FreeRTOS & Zephyr','PCB design (KiCad)','CAN bus & automotive protocols'], curriculum:['Level 1: C refresher, GPIO, interrupts','Level 2: Timers, DMA, ADC/DAC','Level 3: RTOS tasks, semaphores, queues','Level 4: Communication peripherals','Level 5: PCB design & bring-up'] },
  { slug:'ai',        Icon:IconBrain,    title:'AI at the Edge',      sub:'TinyML & edge',       tagline:'Intelligence without the cloud.',                       desc:'Train, quantise and deploy ML models on Arduino Nano 33 BLE, Raspberry Pi and NVIDIA Jetson. Among the first TinyML programs available in Tamil Nadu.',                                                                                       highlights:['TensorFlow Lite & Edge Impulse','Computer vision on Pi camera','Keyword spotting demo','Anomaly detection for machines'], curriculum:['Module 1: ML crash course for engineers','Module 2: Data collection from sensors','Module 3: Model training & quantisation','Module 4: Deployment & inference','Module 5: Real-world project'] },
]

export default function Services() {
  const { slug } = useParams()
  const [active, setActive] = useState(slug || null)
  const selected = allServices.find(s => s.slug === active)

  return (
    <main style={{paddingTop:'var(--nav-h)'}}>
      <PageMeta
        title="Robotics & IoT Training Programs — AtomicTechLabs Coimbatore"
        desc="Explore AtomicTechLabs programs: School Robotics, College Embedded Systems, Corporate IoT Training, PCB Design and TinyML — all delivered from Coimbatore, Tamil Nadu."
      />

      {/* ── Hero ── */}
      <section className="canvas-section min-h-[58vh] flex items-center py-20">
        <div className="canvas-fill opacity-55"><CircuitScene/></div>
        <div className="canvas-content max-w-[1280px] mx-auto px-6 w-full">
          <R>
            <span className="section-label" style={{color:'#7bc44f'}}>What we offer</span>
            <h1 className="t-h1 mb-4 text-white">Programs for every<br/><span style={{color:'#7bc44f'}}>stage of learning</span></h1>
            <p className="text-lg max-w-[520px] leading-relaxed" style={{color:'rgba(255,255,255,0.72)'}}>
              Six interconnected tracks — from school-age explorers to senior firmware engineers. All built around physical hardware at our Coimbatore labs.
            </p>
          </R>
        </div>
      </section>

      {/* ── Cards ── */}
      <section className="py-24" style={{background:'var(--surface-1)'}}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {allServices.map((s,i)=>(
              <R key={s.slug} delay={i*60}>
                <div
                  className="atl-card flex flex-col h-full group"
                  style={{
                    borderColor: active===s.slug ? 'var(--accent)' : undefined,
                    boxShadow:   active===s.slug ? '0 0 0 2px var(--accent-glow), var(--shadow)' : undefined,
                    cursor: 'pointer',
                  }}
                  onClick={()=>setActive(active===s.slug?null:s.slug)}
                  data-hover
                >
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{background:'var(--accent-bg)',border:'1px solid var(--border-strong)'}}>
                      <s.Icon size={24} color="var(--accent)"/>
                    </div>
                    <span className="t-mono text-xs px-2.5 py-1 rounded-full" style={{background:'var(--surface-3)',color:'var(--text-muted)'}}>{s.sub}</span>
                  </div>
                  <h3 className="t-h3 mb-2" style={{color:'var(--text)'}}>{s.title}</h3>
                  <p className="text-sm flex-1 mb-5 leading-relaxed" style={{color:'var(--text-muted)'}}>{s.tagline}</p>
                  <div className="flex items-center gap-1.5 t-mono text-xs font-medium" style={{color:'var(--accent)'}}>
                    {active===s.slug ? '— Close details' : '+ View details'}
                  </div>
                </div>
              </R>
            ))}
          </div>

          {/* Expanded panel */}
          {selected && (
            <div className="rounded-2xl p-10 mt-2" style={{background:'var(--card-bg)',border:'2px solid var(--border-strong)',boxShadow:'var(--shadow-lg)',animation:'fadeUp 0.3s ease'}}>
              <div className="flex gap-5 items-start pb-8 mb-8 border-b flex-wrap" style={{borderColor:'var(--border)'}}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{background:'var(--accent-bg)',border:'1px solid var(--border-strong)'}}>
                  <selected.Icon size={32} color="var(--accent)"/>
                </div>
                <div>
                  <h2 className="t-h1 mb-2" style={{color:'var(--text)'}}>{selected.title}</h2>
                  <p className="t-body max-w-[620px]">{selected.desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <span className="section-label">What's included</span>
                  <ul className="mt-2 space-y-1">
                    {selected.highlights.map(h=>(
                      <li key={h} className="flex gap-3 py-2.5 border-b text-sm items-center" style={{borderColor:'var(--border)',color:'var(--text)'}}>
                        <IconCheck size={14} color="var(--accent)"/> {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="section-label" style={{color:'var(--amber)'}}>Curriculum overview</span>
                  <ul className="mt-2 space-y-1">
                    {selected.curriculum.map((c,i)=>(
                      <li key={i} className="flex gap-4 py-2.5 border-b text-sm items-start" style={{borderColor:'var(--border)',color:'var(--text)'}}>
                        <span className="t-mono text-xs shrink-0 pt-0.5 font-bold" style={{color:'var(--accent)'}}>{String(i+1).padStart(2,'0')}</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-4 flex-wrap mt-8">
                <Link to="/contact" className="btn btn-primary" data-hover>Enrol in {selected.title}</Link>
                <button onClick={()=>setActive(null)} className="btn btn-outline" data-hover>Close</button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Conveyor CTA ── */}
      <section className="canvas-section py-24 min-h-[280px] flex items-center border-t" style={{borderColor:'var(--border)'}}>
        <div className="canvas-fill opacity-45"><ConveyorScene/></div>
        <div className="canvas-content max-w-[1280px] mx-auto px-6 text-center w-full">
          <R>
            <h2 className="t-h1 mb-4 text-white">Can't decide? <span style={{color:'#7bc44f'}}>We'll help.</span></h2>
            <p className="text-lg mb-8 max-w-[440px] mx-auto leading-relaxed" style={{color:'rgba(255,255,255,0.72)'}}>Talk to an advisor in Coimbatore and we'll match you to the right track.</p>
            <Link to="/contact" className="btn btn-primary" data-hover>Book a free consultation</Link>
          </R>
        </div>
      </section>
    </main>
  )
}
