import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import AntigravityCanvas from '../components/ui/AntigravityCanvas'
import AutoScroll from '../components/ui/AutoScroll'
import {
  IconRobot, IconSchool, IconTrophy, IconProject, IconSensor,
  IconFactory, IconCircuit, IconBrain, IconPCB, IconChip,
  IconArm, IconPlant, IconCloud, IconChart, IconNetwork, IconSearch, IconBuilding
} from '../components/ui/Icons'
import { Link } from 'react-router-dom'

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

/* ─── 3D Trophy ─── */
function FloatingTrophy() {
  const g = useRef()
  useFrame((s)=>{ if(g.current) g.current.rotation.y = s.clock.elapsedTime * 0.4 })
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={g} scale={0.85}>
        <mesh position={[0,0.3,0]}><cylinderGeometry args={[0.35,0.22,0.7,24]}/><meshStandardMaterial color="#56a22e" metalness={0.8} roughness={0.1} emissive="#56a22e" emissiveIntensity={0.2}/></mesh>
        <mesh position={[0,0.7,0]}><torusGeometry args={[0.35,0.04,12,32]}/><meshStandardMaterial color="#f5a623" metalness={0.9} roughness={0.05} emissive="#f5a623" emissiveIntensity={0.3}/></mesh>
        {[-1,1].map((side,i)=>(<mesh key={i} position={[side*0.48,0.4,0]} rotation={[0,0,side*1.2]}><torusGeometry args={[0.16,0.025,8,20,Math.PI]}/><meshStandardMaterial color="#f5a623" metalness={0.9} roughness={0.05}/></mesh>))}
        <mesh position={[0,-0.05,0]}><cylinderGeometry args={[0.1,0.1,0.35,16]}/><meshStandardMaterial color="#8A90A2" metalness={0.8} roughness={0.2}/></mesh>
        <mesh position={[0,-0.3,0]}><cylinderGeometry args={[0.32,0.38,0.12,24]}/><meshStandardMaterial color="#1e3050" metalness={0.7} roughness={0.3}/></mesh>
        {[0,1,2,3,4,5].map(i=>{ const a=(i/6)*Math.PI*2; return (<mesh key={i} position={[Math.cos(a)*0.38,0.3,Math.sin(a)*0.38]}><sphereGeometry args={[0.03,8,8]}/><meshStandardMaterial color="#f5a623" emissive="#f5a623" emissiveIntensity={1.5}/></mesh>) })}
      </group>
    </Float>
  )
}

const categories = ['All','Schools','Competitions','Projects','Corporate','IoT']

const allItems = [
  // Schools
  { id:'s1', Icon:IconSchool,   title:'PSG Public School Robotics Lab',      cat:'Schools',      desc:'Fully equipped robotics lab with 30 student kits — Coimbatore.' },
  { id:'s2', Icon:IconRobot,    title:'Carmel Garden – Circuit Workshop',     cat:'Schools',      desc:'Hands-on soldering session, Grade 9 students, Bangalore.' },
  { id:'s3', Icon:IconRobot,    title:'SBOA Line-Follower Demo Day',          cat:'Schools',      desc:'Students presenting their final line-follower robots, Chennai.' },
  { id:'s4', Icon:IconSensor,   title:'Sri Vani – Sensor Integration Class',  cat:'Schools',      desc:'Ultrasonic & IR sensor class, 24 students, Coimbatore.' },
  { id:'s5', Icon:IconChip,     title:'Bhavans – Arduino Bootcamp',           cat:'Schools',      desc:'2-day Arduino workshop, 48 participants, Ernakulam.' },
  { id:'s6', Icon:IconRobot,    title:'Vidya Vikas – Robotics Exhibition',    cat:'Schools',      desc:'Annual showcase with 15 student-built robots, Mysore.' },
  // Competitions
  { id:'c1', Icon:IconTrophy,   title:'South Zone Robotics Championship',     cat:'Competitions', desc:'1st place – Line Follower category, 2023.' },
  { id:'c2', Icon:IconTrophy,   title:'TechFest IIT Bombay – ATL Team',       cat:'Competitions', desc:'National runners-up in autonomous navigation.' },
  { id:'c3', Icon:IconTrophy,   title:'Smart India Hackathon 2023',           cat:'Competitions', desc:'ATL students won in the IoT problem statement.' },
  { id:'c4', Icon:IconArm,      title:'Robocon 2024 – Regional Qualifier',    cat:'Competitions', desc:'PSG College team qualified for national rounds, Coimbatore.' },
  { id:'c5', Icon:IconTrophy,   title:'IEEE Robotics Challenge – Bangalore',  cat:'Competitions', desc:'2nd place in maze-solving competition.' },
  { id:'c6', Icon:IconTrophy,   title:'Coimbatore Tech Olympiad',             cat:'Competitions', desc:'3 gold medals in robotics categories.' },
  // Projects
  { id:'p1', Icon:IconPlant,    title:'Smart Irrigation Controller',          cat:'Projects',     desc:'ESP32 + soil moisture sensors, auto-waters 4 zones.' },
  { id:'p2', Icon:IconRobot,    title:'Autonomous Obstacle-Avoider Bot',      cat:'Projects',     desc:'STM32-based bot with ultrasonic array and ROS.' },
  { id:'p3', Icon:IconCircuit,  title:'Air Quality Monitor — Custom PCB',     cat:'Projects',     desc:'KiCad PCB, MQ sensors + OLED display.' },
  { id:'p4', Icon:IconArm,      title:'3-DOF Robotic Arm (3D printed)',       cat:'Projects',     desc:'Servo-driven arm controlled via MIT App Inventor.' },
  { id:'p5', Icon:IconCloud,    title:'Cold-Chain IoT Dashboard',             cat:'Projects',     desc:'Real-time temperature monitoring for pharma client, Coimbatore.' },
  { id:'p6', Icon:IconNetwork,  title:'Smart Classroom Automation',           cat:'Projects',     desc:'Node-RED + MQTT: auto fan, light, attendance system.' },
  { id:'p7', Icon:IconRobot,    title:'Fire-Fighting Robot',                  cat:'Projects',     desc:'Flame sensor + water pump, autonomous navigation.' },
  { id:'p8', Icon:IconChart,    title:'Predictive Maintenance System',        cat:'Projects',     desc:'Vibration FFT on edge device, anomaly detection.' },
  // Corporate
  { id:'co1',Icon:IconBuilding, title:'Bosch India – IoT Workshop',           cat:'Corporate',    desc:'2-day intensive for 40 engineers, Bangalore.' },
  { id:'co2',Icon:IconFactory,  title:'Robert Bosch – Firmware Bootcamp',     cat:'Corporate',    desc:'FreeRTOS & CAN bus training, team of 18.' },
  { id:'co3',Icon:IconFactory,  title:'Lucas TVS – Embedded Upskilling',      cat:'Corporate',    desc:'Custom STM32 curriculum for manufacturing team, Coimbatore.' },
  { id:'co4',Icon:IconSensor,   title:'KONE Elevators – IoT Integration',     cat:'Corporate',    desc:'Predictive maintenance IoT pilot training.' },
  // IoT
  { id:'i1', Icon:IconFactory,  title:'Smart Factory Floor Deployment',       cat:'IoT',          desc:'16-node MQTT network monitoring CNC machines.' },
  { id:'i2', Icon:IconCloud,    title:'AWS IoT Core Integration Lab',         cat:'IoT',          desc:'ESP32 + certificate provisioning + dashboards.' },
  { id:'i3', Icon:IconNetwork,  title:'Node-RED Dashboard Workshop',          cat:'IoT',          desc:'Visual flow programming for real-time data.' },
  { id:'i4', Icon:IconChip,     title:'OTA Firmware Update Demo',             cat:'IoT',          desc:'Secure OTA via AWS using FreeRTOS.' },
]

const catGroups = {
  Schools:      allItems.filter(i=>i.cat==='Schools'),
  Competitions: allItems.filter(i=>i.cat==='Competitions'),
  Projects:     allItems.filter(i=>i.cat==='Projects'),
  Corporate:    allItems.filter(i=>i.cat==='Corporate'),
  IoT:          allItems.filter(i=>i.cat==='IoT'),
}

function ScrollCard({ item }) {
  return (
    <div className="shrink-0 w-52 mx-2 rounded-xl overflow-hidden"
      style={{border:'1px solid var(--border)',background:'var(--card-bg)',boxShadow:'var(--shadow-sm)'}}>
      <div className="h-28 flex items-center justify-center" style={{background:'var(--accent-bg)'}}>
        <item.Icon size={44} color="var(--accent)"/>
      </div>
      <div className="p-3">
        <div className="font-display font-semibold text-xs leading-tight mb-1 line-clamp-2" style={{color:'var(--text)'}}>{item.title}</div>
        <div className="t-mono text-xs" style={{color:'var(--text-muted)'}}>{item.cat}</div>
      </div>
    </div>
  )
}

function GridCard({ item, onClick }) {
  return (
    <div onClick={()=>onClick(item)} className="atl-card p-0 overflow-hidden group flex flex-col" style={{cursor:'pointer'}} data-hover>
      <div className="h-40 flex items-center justify-center relative overflow-hidden" style={{background:'var(--accent-bg)'}}>
        <item.Icon size={52} color="var(--accent)" className="transition-transform duration-300 group-hover:scale-110"/>
        <div className="absolute top-3 right-3">
          <span className="t-mono text-xs px-2.5 py-1 rounded-full font-medium"
            style={{background:'var(--card-bg)',color:'var(--accent)',border:'1px solid var(--border-strong)'}}>
            {item.cat}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-sm leading-snug mb-2" style={{color:'var(--text)'}}>{item.title}</h3>
        <p className="text-xs leading-relaxed flex-1 mb-3" style={{color:'var(--text-muted)'}}>{item.desc}</p>
        <div className="text-xs font-medium" style={{color:'var(--accent)'}}>View details →</div>
      </div>
    </div>
  )
}

function Lightbox({ item, onClose }) {
  useEffect(() => {
    const fn = (e)=>{ if(e.key==='Escape') onClose() }
    document.addEventListener('keydown', fn)
    return ()=>document.removeEventListener('keydown', fn)
  },[onClose])
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      style={{background:'rgba(0,0,0,0.6)',backdropFilter:'blur(8px)'}} onClick={onClose}>
      <div className="relative max-w-lg w-full rounded-2xl overflow-hidden"
        style={{background:'var(--card-bg)',border:'1px solid var(--border-strong)',boxShadow:'var(--shadow-lg)',animation:'fadeUp 0.25s ease'}}
        onClick={e=>e.stopPropagation()}>
        <div className="h-52 flex items-center justify-center" style={{background:'var(--accent-bg)'}}>
          <item.Icon size={80} color="var(--accent)"/>
        </div>
        <div className="p-8">
          <div className="t-mono text-xs mb-2" style={{color:'var(--accent)'}}>{item.cat}</div>
          <h2 className="t-h2 mb-3" style={{color:'var(--text)'}}>{item.title}</h2>
          <p className="t-body">{item.desc}</p>
          <button onClick={onClose} className="btn btn-outline mt-6 text-sm" style={{padding:'10px 24px'}} data-hover>Close</button>
        </div>
        <button onClick={onClose} data-hover
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
          style={{background:'var(--surface-3)',color:'var(--text)'}}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [cat,      setCat]     = useState('All')
  const [search,   setSearch]  = useState('')
  const [lightbox, setLightbox]= useState(null)

  const filtered = allItems.filter(item=>{
    const mc = cat==='All' || item.cat===cat
    const ms = item.title.toLowerCase().includes(search.toLowerCase()) || item.desc.toLowerCase().includes(search.toLowerCase())
    return mc && ms
  })

  const catCounts = categories.reduce((acc,c)=>({ ...acc, [c]: c==='All'?allItems.length:allItems.filter(i=>i.cat===c).length }),{})

  return (
    <main style={{paddingTop:'var(--nav-h)'}}>
      <PageMeta
        title="Gallery — Student Projects, Competitions & School Labs | AtomicTechLabs Coimbatore"
        desc="Browse AtomicTechLabs' gallery of student robotics projects, competition wins, school lab setups and IoT deployments from Coimbatore and across Tamil Nadu."
      />

      {/* ── Hero ── */}
      <section className="canvas-section min-h-[56vh] flex items-center py-20">
        <AntigravityCanvas particleCount={100} repelRadius={110} lineRadius={90}/>
        <div className="canvas-fill">
          <Canvas camera={{position:[0,0,5],fov:50}} gl={{antialias:true,alpha:true}} style={{background:'transparent'}}>
            <ambientLight intensity={0.3}/>
            <spotLight position={[5,6,4]} intensity={2.5} color="#56a22e" angle={0.5} penumbra={0.5}/>
            <pointLight position={[-4,2,2]} intensity={1} color="#f5a623"/>
            <FloatingTrophy/>
          </Canvas>
        </div>
        <div className="canvas-content max-w-[1280px] mx-auto px-6 w-full">
          <R>
            <span className="section-label" style={{color:'#7bc44f'}}>Our work</span>
            <h1 className="t-h1 mb-4 text-white">Gallery of<br/><span style={{color:'#7bc44f'}}>student projects</span></h1>
            <p className="text-lg max-w-[480px] leading-relaxed mb-8" style={{color:'rgba(255,255,255,0.72)'}}>
              Schools, competitions, student projects, corporate training sessions and IoT deployments from our Coimbatore labs — all in one place.
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map(c=>(
                <button key={c} onClick={()=>setCat(c)} data-hover
                  className="t-mono text-xs px-4 py-2 rounded-full transition-all duration-200"
                  style={{background:cat===c?'#56a22e':'rgba(255,255,255,0.1)',color:cat===c?'#fff':'rgba(255,255,255,0.75)',border:`1px solid ${cat===c?'#56a22e':'rgba(255,255,255,0.2)'}`}}>
                  {c} ({catCounts[c]})
                </button>
              ))}
            </div>
          </R>
        </div>
      </section>

      {/* ── Global auto-scroll ── */}
      <section className="py-12 overflow-hidden border-y" style={{background:'var(--surface-2)',borderColor:'var(--border)'}}>
        <div className="max-w-[1280px] mx-auto px-6 mb-5">
          <div className="t-mono text-xs" style={{color:'var(--accent)'}}>ALL PROJECTS — AUTO SCROLL</div>
        </div>
        <AutoScroll speed="normal">{allItems.map(item=><ScrollCard key={item.id} item={item}/>)}</AutoScroll>
        <div className="mt-3"><AutoScroll speed="slow" reverse>{allItems.slice().reverse().map(item=><ScrollCard key={item.id} item={item}/>)}</AutoScroll></div>
      </section>

      {/* ── Per-category scroll strips ── */}
      {Object.entries(catGroups).map(([catName,items],si)=>(
        <section key={catName} className="py-14 overflow-hidden border-b" style={{background:si%2===0?'var(--surface-1)':'var(--card-bg)',borderColor:'var(--border)'}}>
          <div className="max-w-[1280px] mx-auto px-6 mb-6 flex items-center justify-between flex-wrap gap-3">
            <div>
              <span className="section-label">{catName}</span>
              <h2 className="t-h2" style={{color:'var(--text)'}}>
                {catName==='Schools'?'School programs':catName==='Competitions'?'Competition wins':catName==='Projects'?'Student projects':catName==='Corporate'?'Corporate sessions':'IoT deployments'}
              </h2>
            </div>
            <button onClick={()=>setCat(catName)} className="btn btn-outline text-sm" style={{padding:'8px 20px'}} data-hover>View all</button>
          </div>
          <AutoScroll speed={si%2===0?'normal':'slow'} reverse={si%2!==0}>{items.map(item=><ScrollCard key={item.id} item={item}/>)}</AutoScroll>
        </section>
      ))}

      {/* ── Main grid ── */}
      <section className="py-24" style={{background:'var(--surface-1)'}}>
        <div className="max-w-[1280px] mx-auto px-6">
          <R>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between mb-10">
              <div>
                <h2 className="t-h2" style={{color:'var(--text)'}}>Browse all work</h2>
                <p className="text-sm mt-1" style={{color:'var(--text-muted)'}}>{filtered.length} items{cat!=='All'?` in ${cat}`:''}</p>
              </div>
              <div className="relative">
                <IconSearch size={16} color="var(--text-muted)" className="absolute left-3 top-1/2 -translate-y-1/2"/>
                <input type="text" placeholder="Search projects…" value={search} onChange={e=>setSearch(e.target.value)}
                  className="rounded-xl pl-9 pr-4 py-3 text-sm outline-none w-full sm:w-72 transition-all"
                  style={{background:'var(--card-bg)',border:'1px solid var(--border)',color:'var(--text)',fontFamily:'inherit'}}
                  onFocus={e=>{e.target.style.borderColor='var(--accent)';e.target.style.boxShadow='0 0 0 3px var(--accent-glow)'}}
                  onBlur={e=>{e.target.style.borderColor='var(--border)';e.target.style.boxShadow='none'}}/>
              </div>
            </div>
          </R>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(c=>(
              <button key={c} onClick={()=>setCat(c)} data-hover
                className="t-mono text-xs px-4 py-2 rounded-full border transition-all duration-200"
                style={{background:cat===c?'var(--accent)':'transparent',color:cat===c?'#fff':'var(--text-muted)',borderColor:cat===c?'var(--accent)':'var(--border)'}}>
                {c} ({catCounts[c]})
              </button>
            ))}
          </div>

          {filtered.length>0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((item,i)=>(<R key={item.id} delay={i*35}><GridCard item={item} onClick={setLightbox}/></R>))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background:'var(--surface-2)'}}>
                <IconSearch size={28} color="var(--text-muted)"/>
              </div>
              <p className="t-body">No results for "<strong>{search}</strong>"</p>
              <button onClick={()=>{setSearch('');setCat('All')}} className="btn btn-outline mt-6 text-sm" style={{padding:'10px 24px'}} data-hover>Clear filters</button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="canvas-section py-24 border-t" style={{borderColor:'var(--border)'}}>
        <AntigravityCanvas particleCount={60} repelRadius={80} lineRadius={70}/>
        <div className="canvas-content text-center max-w-[1280px] mx-auto px-6">
          <R>
            <h2 className="t-h1 mb-4 text-white">Want your project <span style={{color:'#7bc44f'}}>featured here?</span></h2>
            <p className="text-lg mb-10 max-w-[440px] mx-auto leading-relaxed" style={{color:'rgba(255,255,255,0.72)'}}>Share your AtomicTechLabs project and inspire the next batch of engineers from Coimbatore.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="mailto:hello@atomictechlabs.in" className="btn btn-primary" data-hover>Submit your project</a>
              <Link to="/contact" className="btn btn-outline" style={{color:'#7bc44f',borderColor:'#7bc44f'}} data-hover>Contact us</Link>
            </div>
          </R>
        </div>
      </section>

      {lightbox && <Lightbox item={lightbox} onClose={()=>setLightbox(null)}/>}
    </main>
  )
}
