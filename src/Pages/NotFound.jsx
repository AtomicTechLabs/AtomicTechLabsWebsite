import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

function BrokenRobot() {
  const body=useRef(), lEye=useRef(), rEye=useRef(), arm=useRef()
  useFrame((s)=>{
    const t=s.clock.elapsedTime
    if(body.current){body.current.rotation.z=Math.sin(t*0.7)*0.08;body.current.position.y=Math.sin(t*0.5)*0.1-0.2}
    if(lEye.current)lEye.current.material.emissiveIntensity=0.2+Math.sin(t*3)*0.15
    if(rEye.current)rEye.current.material.emissiveIntensity=Math.abs(Math.sin(t*0.8))*1.5
    if(arm.current)arm.current.rotation.z=-0.6+Math.sin(t*1.2)*0.3
  })
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={body} scale={1.1}>
        <mesh position={[0,0,0]}><boxGeometry args={[0.8,1,0.5]}/><meshStandardMaterial color="#1a2a3a" metalness={0.8} roughness={0.2}/></mesh>
        <mesh position={[0.05,0.1,0.26]}><planeGeometry args={[0.3,0.6]}/><meshStandardMaterial color="#f5a623" emissive="#f5a623" emissiveIntensity={0.4} transparent opacity={0.6}/></mesh>
        <mesh position={[0,0.72,0]}><boxGeometry args={[0.65,0.55,0.5]}/><meshStandardMaterial color="#1e3360" metalness={0.9} roughness={0.1}/></mesh>
        <mesh position={[0.2,1.08,0]} rotation={[0,0,0.6]}><cylinderGeometry args={[0.02,0.02,0.3,8]}/><meshStandardMaterial color="#888" metalness={0.9}/></mesh>
        <mesh position={[0.34,1.22,0]}><sphereGeometry args={[0.05,16,16]}/><meshStandardMaterial color="#f5a623" emissive="#f5a623" emissiveIntensity={1.5}/></mesh>
        <mesh ref={lEye} position={[-0.17,0.75,0.26]}><boxGeometry args={[0.14,0.1,0.02]}/><meshStandardMaterial color="#56a22e" emissive="#56a22e" emissiveIntensity={0.2}/></mesh>
        <mesh ref={rEye} position={[0.17,0.75,0.26]}><boxGeometry args={[0.14,0.1,0.02]}/><meshStandardMaterial color="#f5a623" emissive="#f5a623" emissiveIntensity={1.5}/></mesh>
        <mesh position={[0.17,0.75,0.28]} rotation={[0,0,0.785]}><boxGeometry args={[0.15,0.02,0.01]}/><meshStandardMaterial color="#ff3333" emissive="#ff3333" emissiveIntensity={1}/></mesh>
        <mesh position={[0.17,0.75,0.28]} rotation={[0,0,-0.785]}><boxGeometry args={[0.15,0.02,0.01]}/><meshStandardMaterial color="#ff3333" emissive="#ff3333" emissiveIntensity={1}/></mesh>
        <mesh position={[-0.55,0.1,0]}><boxGeometry args={[0.22,0.7,0.22]}/><meshStandardMaterial color="#1e3360" metalness={0.8}/></mesh>
        <group ref={arm} position={[0.55,0.2,0]}>
          <mesh position={[0,-0.2,0]}><boxGeometry args={[0.22,0.7,0.22]}/><meshStandardMaterial color="#1e3360" metalness={0.8}/></mesh>
        </group>
        {[-0.22,0.22].map((x,i)=>(
          <mesh key={i} position={[x,-0.7,0]} rotation={[0,0,i===1?0.1:-0.05]}>
            <boxGeometry args={[0.28,0.55,0.28]}/><meshStandardMaterial color="#1a2a3a" metalness={0.8}/>
          </mesh>
        ))}
        {[-0.22,0.22].map((x,i)=>(
          <mesh key={i} position={[x+(i===1?0.04:-0.02),-1.05,0.06]}>
            <boxGeometry args={[0.34,0.16,0.42]}/><meshStandardMaterial color="#1e3360" metalness={0.7}/>
          </mesh>
        ))}
      </group>
    </Float>
  )
}

export default function NotFound() {
  const pts = new Float32Array(180*3)
  for(let i=0;i<180;i++){pts[i*3]=(Math.random()-0.5)*10;pts[i*3+1]=(Math.random()-0.5)*8;pts[i*3+2]=(Math.random()-0.5)*4-2}
  return (
    <main className="canvas-section relative min-h-[calc(100vh-var(--nav-h))] flex items-center justify-center text-center overflow-hidden"
      style={{ paddingTop:'var(--nav-h)' }}>
      <div className="canvas-fill">
        <Canvas camera={{position:[0,0,5],fov:50}} gl={{antialias:true,alpha:true}} style={{background:'transparent'}}>
          <ambientLight intensity={0.2}/>
          <spotLight position={[4,6,4]} intensity={2} color="#56a22e" angle={0.5} penumbra={0.6}/>
          <pointLight position={[-4,2,2]} intensity={1} color="#f5a623"/>
          <BrokenRobot/>
          <points>
            <bufferGeometry>
              <bufferAttribute attach="attributes-position" array={pts} count={180} itemSize={3}/>
            </bufferGeometry>
            <pointsMaterial size={0.03} color="#f5a623" transparent opacity={0.3} sizeAttenuation/>
          </points>
          <fog attach="fog" args={['#0a1420',8,16]}/>
        </Canvas>
      </div>
      <div className="canvas-content relative z-10 px-6 py-20">
        <div className="t-mono text-xs px-5 py-2 rounded-full inline-block mb-6"
          style={{ background:'var(--surface-3)', border:'1px solid var(--border)', color:'var(--text-muted)' }}>
          <span style={{ color:'var(--accent)' }}>ERROR</span> 404
        </div>
        <h1 className="t-h1 mb-4">Robot lost in space</h1>
        <p className="t-body mb-10 max-w-[380px] mx-auto">
          Looks like this page short-circuited. Our maintenance bot is on it.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/"        className="btn btn-primary">← Back to home</Link>
          <Link to="/contact" className="btn btn-outline">Contact support</Link>
        </div>
        <div className="flex items-center gap-5 justify-center mt-10 flex-wrap">
          <span className="t-mono text-xs" style={{ color:'var(--text-muted)' }}>Quick links:</span>
          {[['Services','/services'],['About','/about'],['Gallery','/gallery'],['Blog','/blog']].map(([l,p])=>(
            <Link key={p} to={p} className="t-mono text-xs underline underline-offset-2 transition-colors hover:text-[var(--accent)]"
              style={{ color:'var(--text-muted)' }}>{l}</Link>
          ))}
        </div>
      </div>
    </main>
  )
}
