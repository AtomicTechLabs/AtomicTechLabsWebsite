import { useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Canvas, useFrame } from '@react-three/fiber'

const posts = {
  'intro-to-rtos': {
    category:'Embedded', color:'#56a22e',
    title:'Why your next project needs an RTOS — and how to start',
    author:'Dr. Rajesh Kumar', date:'May 2025', readTime:'8 min',
    tags:['FreeRTOS','ARM','C'],
    content:[
      { type:'lead', text:"Bare-metal C is fine — until it isn't. The moment your project has two things happening simultaneously, you need a scheduling strategy. An RTOS gives you that, plus abstractions that make concurrent embedded code readable and testable." },
      { type:'h2',   text:'The mental model: tasks, not loops' },
      { type:'p',    text:'In bare-metal code, you have one loop. Everything lives in it, or in interrupt handlers. An RTOS lets you write multiple independent loops — called tasks — and the scheduler decides who runs when.' },
      { type:'code', lang:'c', text:`void vSensorTask(void *pvParameters) {
    TickType_t xLastWakeTime = xTaskGetTickCount();
    for (;;) {
        float temp = readTemperature();
        xQueueSend(xTempQueue, &temp, 0);
        vTaskDelayUntil(&xLastWakeTime, pdMS_TO_TICKS(100));
    }
}

void vDisplayTask(void *pvParameters) {
    float received;
    for (;;) {
        if (xQueueReceive(xTempQueue, &received, portMAX_DELAY)) {
            displayUpdate(received);
        }
    }
}` },
      { type:'h2',     text:'Queues: the right way to share data' },
      { type:'p',      text:'Global variables shared between tasks are a race condition waiting to happen. FreeRTOS queues are thread-safe by design — they handle the critical sections so you don\'t have to.' },
      { type:'callout',icon:'lightning', text:'Rule of thumb: if two tasks touch the same memory, use a queue or a mutex. Never a raw global.' },
      { type:'h2',     text:'Stack sizing: the gotcha nobody warns you about' },
      { type:'p',      text:'Every task gets its own stack. Too small and you get silent corruption. Too large and you waste RAM. Use uxTaskGetStackHighWaterMark() during development to find real usage, then add 25% headroom.' },
    ]
  },
  'esp32-mqtt': {
    category:'IoT', color:'#f5a623',
    title:'Connecting ESP32 to AWS IoT Core in under 30 minutes',
    author:'Suresh Balasubramanian', date:'Apr 2025', readTime:'12 min',
    tags:['ESP32','MQTT','AWS'],
    content:[
      { type:'lead', text:'AWS IoT Core is powerful and cheap at small scale. This guide gives you the shortest path from a blank ESP32 to a working MQTT connection — certificates and all.' },
      { type:'h2',   text:'Step 1: Create a Thing in AWS IoT Core' },
      { type:'p',    text:'In the AWS console navigate to IoT Core → Manage → Things → Create. Download all three certificate files: the device certificate, private key, and the Amazon root CA.' },
      { type:'code', lang:'cpp', text:`#include <WiFiClientSecure.h>
#include <PubSubClient.h>

const char* aws_endpoint = "xxxx.iot.ap-south-1.amazonaws.com";
const int   aws_port = 8883;

WiFiClientSecure wifiClient;
PubSubClient     mqttClient(wifiClient);

void connectMQTT() {
    wifiClient.setCACert(AWS_CERT_CA);
    wifiClient.setCertificate(AWS_CERT_CRT);
    wifiClient.setPrivateKey(AWS_CERT_PRIVATE);
    mqttClient.setServer(aws_endpoint, aws_port);
    while (!mqttClient.connected()) {
        if (mqttClient.connect("ESP32-AtomicLabs")) {
            mqttClient.subscribe("atomiclab/commands");
        }
    }
}` },
      { type:'callout', icon:'sensor', text:'Store your certificates as string literals in a separate secrets.h file. Never commit that file to git.' },
    ]
  },
}

function HelixScene({ color='#56a22e' }) {
  const group = useRef()
  useFrame((s) => { if(group.current) group.current.rotation.y = s.clock.elapsedTime * 0.4 })
  const pts = []
  for(let i=0;i<40;i++){
    const t=(i/40)*Math.PI*4
    pts.push({x:Math.cos(t)*0.8, y:i*0.12-2.4, z:Math.sin(t)*0.8})
    pts.push({x:Math.cos(t+Math.PI)*0.8, y:i*0.12-2.4, z:Math.sin(t+Math.PI)*0.8})
  }
  return (
    <group ref={group}>
      {pts.map((p,i)=>(
        <mesh key={i} position={[p.x,p.y,p.z]}>
          <sphereGeometry args={[0.04,8,8]}/>
          <meshStandardMaterial color={i%4<2?color:'#f5a623'} emissive={i%4<2?color:'#f5a623'} emissiveIntensity={0.8}/>
        </mesh>
      ))}
      {Array.from({length:20}).map((_,i)=>{
        const t=(i/20)*Math.PI*4
        return(
          <mesh key={`b${i}`} position={[0,i*0.24-2.4,0]} rotation={[0,t,0]}>
            <boxGeometry args={[1.6,0.02,0.02]}/>
            <meshStandardMaterial color={color} transparent opacity={0.3}/>
          </mesh>
        )
      })}
    </group>
  )
}

function R({ children, delay=0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if(!el) return
    const obs = new IntersectionObserver(([e])=>{
      if(e.isIntersecting){el.style.transitionDelay=`${delay}ms`;el.classList.add('visible');obs.disconnect()}
    },{threshold:0.1})
    obs.observe(el); return ()=>obs.disconnect()
  },[delay])
  return <div ref={ref} className="reveal">{children}</div>
}

function Block({ block }) {
  switch(block.type) {
    case 'lead':
      return <p className="text-lg leading-relaxed mb-10 pl-5"
        style={{ color:'var(--text)', borderLeft:'3px solid var(--accent)' }}>{block.text}</p>
    case 'h2':
      return <h2 className="t-h2 mb-5 mt-12" style={{ color:'var(--text)' }}>{block.text}</h2>
    case 'p':
      return <p className="mb-6 leading-relaxed" style={{ color:'var(--text-muted)' }}>{block.text}</p>
    case 'code':
      return (
        <div className="rounded-xl overflow-hidden my-8" style={{ background:'var(--surface-2)', border:'1px solid var(--border)' }}>
          <div className="flex justify-between items-center px-5 py-3 border-b" style={{ borderColor:'var(--border)', background:'var(--accent-bg)' }}>
            <span className="t-mono text-xs" style={{ color:'var(--accent)' }}>{block.lang}</span>
            <div className="flex gap-1.5">
              {['#ff5f57','#febc2e','#28c840'].map(c=><span key={c} className="w-2.5 h-2.5 rounded-full" style={{background:c}}/>)}
            </div>
          </div>
          <pre className="p-6 overflow-x-auto font-mono text-sm leading-relaxed" style={{ color:'var(--text)' }}>
            <code>{block.text}</code>
          </pre>
        </div>
      )
    case 'callout':
      return (
        <div className="flex gap-4 items-start rounded-xl p-5 my-8"
          style={{ background:'var(--accent-bg)', border:'1px solid var(--border-accent)' }}>
          <span className="text-2xl shrink-0">{block.icon==='lightning' ? <IconLightning size={20} color='var(--accent)'/> : block.icon==='sensor' ? <IconSensor size={20} color='var(--accent)'/> : <IconCheck size={20} color='var(--accent)'/>}</span>
          <p className="text-sm leading-relaxed" style={{ color:'var(--text)' }}>{block.text}</p>
        </div>
      )
    default: return null
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts[slug]

  useEffect(() => {
    if (post) {
      document.title = post.title + ' | AtomicTechLabs Coimbatore'
      const m = document.querySelector('meta[name="description"]')
      if (m) m.setAttribute('content', post.content[0]?.text?.slice(0,160) || '')
    }
  }, [post])

  if (!post) return (
    <main style={{ paddingTop:'var(--nav-h)', minHeight:'60vh', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div className="text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background:"var(--surface-2)"}}><IconSearch size={28} color="var(--text-muted)"/></div>
        <h2 className="t-h2 mb-4">Post not found</h2>
        <Link to="/blog" className="btn btn-outline">← Back to blog</Link>
      </div>
    </main>
  )

  return (
    <main style={{ paddingTop:'var(--nav-h)' }}>
      {/* Hero */}
      <section className="canvas-section min-h-[56vh] flex items-center py-20 border-b" style={{ borderColor:'var(--border)' }}>
        <div className="canvas-fill opacity-55">
          <Canvas camera={{position:[0,0,5],fov:45}} gl={{antialias:true,alpha:true}} style={{background:'transparent'}}>
            <ambientLight intensity={0.3}/>
            <pointLight position={[3,3,3]} intensity={2} color={post.color}/>
            <HelixScene color={post.color}/>
          </Canvas>
        </div>
        <div className="canvas-content max-w-[1200px] mx-auto px-6 max-w-[680px]">
          <Link to="/blog" className="t-mono text-xs flex items-center gap-2 mb-6 transition-colors hover:text-[var(--accent)]"
            style={{ color:'var(--text-muted)' }}>← All articles</Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="t-mono text-xs uppercase tracking-wider" style={{ color:post.color }}>{post.category}</span>
            <span className="t-mono text-xs" style={{ color:'var(--text-muted)' }}>{post.date} · {post.readTime} read</span>
          </div>
          <h1 className="t-h1 mb-7 text-3xl">{post.title}</h1>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{ background:'linear-gradient(135deg,var(--accent),var(--amber))' }}>
              {post.author.split(' ').map(w=>w[0]).join('').slice(0,2)}
            </div>
            <div>
              <div className="font-semibold text-sm">{post.author}</div>
              <div className="t-mono text-xs" style={{ color:'var(--text-muted)' }}>AtomicTechLabs</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(t=>(
              <span key={t} className="text-xs px-3 py-1 rounded-full"
                style={{ background:'var(--surface-3)', border:'1px solid var(--border)', color:'var(--text-muted)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20" style={{ background:'var(--surface-1)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-start">
            <article className="max-w-[680px]">
              {post.content.map((block, i) => (
                <R key={i} delay={i*40}><Block block={block}/></R>
              ))}
            </article>
            <aside className="hidden lg:block sticky top-[calc(var(--nav-h)+24px)]">
              <div className="atl-card mb-4">
                <div className="t-mono text-xs mb-3" style={{ color:'var(--accent)' }}>ABOUT THE AUTHOR</div>
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold text-white mx-auto mb-3"
                  style={{ background:'linear-gradient(135deg,var(--accent),var(--amber))' }}>
                  {post.author.split(' ').map(w=>w[0]).join('').slice(0,2)}
                </div>
                <div className="text-center font-semibold text-sm mb-2">{post.author}</div>
                <p className="text-xs text-center" style={{ color:'var(--text-muted)' }}>Instructor at AtomicTechLabs. 18+ years embedded systems experience.</p>
              </div>
              <div className="atl-card">
                <div className="t-mono text-xs mb-4" style={{ color:'var(--amber)' }}>RELATED PROGRAMS</div>
                {[['Embedded Systems Course','/services/embedded'],['IoT Bootcamp','/services/iot']].map(([l,p])=>(
                  <Link key={p} to={p} className="flex items-center gap-2 py-2.5 border-b text-sm transition-colors hover:text-[var(--accent)]"
                    style={{ borderColor:'var(--border)', color:'var(--text)' }}>
                    <span style={{ color:'var(--accent)' }}>→</span> {l}
                  </Link>
                ))}
                <Link to="/contact" className="btn btn-primary w-full justify-center mt-4 text-sm" style={{ padding:'10px' }}>Enrol now</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-20 border-t text-center" style={{ background:'var(--surface-2)', borderColor:'var(--border)' }}>
        <Link to="/blog" className="btn btn-outline">← Back to all articles</Link>
      </section>
    </main>
  )
}
