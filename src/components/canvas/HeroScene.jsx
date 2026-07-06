import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

const C_GREEN  = '#56a22e'
const C_GREY   = '#8A90A2'
const C_AMBER  = '#f5a623'
const C_DARK   = '#1a2a3a'
const C_METAL  = '#1e3050'

function RobotArm({ scrollY = 0 }) {
  const group = useRef()
  const arm1  = useRef()
  const arm2  = useRef()
  const arm3  = useRef()
  const claw1 = useRef()
  const claw2 = useRef()
  const board = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const s = scrollY * 0.003
    if (group.current) group.current.rotation.y = Math.sin(t * 0.3) * 0.2 + s
    if (arm1.current)  arm1.current.rotation.z  = Math.sin(t * 0.5) * 0.15 - 0.3 + s * 0.5
    if (arm2.current)  arm2.current.rotation.z  = Math.sin(t * 0.4 + 1) * 0.2 + 0.5 - s * 0.3
    if (arm3.current)  arm3.current.rotation.z  = Math.sin(t * 0.6 + 2) * 0.1 - 0.2
    if (claw1.current) claw1.current.rotation.z = Math.sin(t * 1.2) * 0.15 - 0.2
    if (claw2.current) claw2.current.rotation.z = -Math.sin(t * 1.2) * 0.15 + 0.2
    if (board.current) board.current.position.y = Math.sin(t * 0.8) * 0.05
  })

  return (
    <group ref={group} position={[0, -1.2, 0]}>
      <mesh position={[0,0,0]} castShadow>
        <cylinderGeometry args={[0.7,0.9,0.25,32]}/>
        <meshStandardMaterial color={C_METAL} metalness={0.9} roughness={0.1}/>
      </mesh>
      <mesh position={[0,0.15,0]}>
        <cylinderGeometry args={[0.45,0.55,0.2,32]}/>
        <meshStandardMaterial color={C_GREEN} metalness={0.8} roughness={0.1} emissive={C_GREEN} emissiveIntensity={0.2}/>
      </mesh>
      <group position={[0,0.35,0]} ref={arm1}>
        <mesh><sphereGeometry args={[0.3,32,32]}/><meshStandardMaterial color={C_METAL} metalness={0.9} roughness={0.1}/></mesh>
        <mesh position={[0,0.5,0]} castShadow>
          <boxGeometry args={[0.18,0.9,0.18]}/>
          <meshStandardMaterial color={C_DARK} metalness={0.8} roughness={0.2}/>
        </mesh>
        <group position={[0,0.95,0]} ref={arm2}>
          <mesh><sphereGeometry args={[0.22,32,32]}/><meshStandardMaterial color={C_AMBER} metalness={0.8} roughness={0.1} emissive={C_AMBER} emissiveIntensity={0.15}/></mesh>
          <mesh position={[0.3,0.3,0]} rotation={[0,0,-0.5]} castShadow>
            <boxGeometry args={[0.14,0.75,0.14]}/>
            <meshStandardMaterial color={C_DARK} metalness={0.8} roughness={0.2}/>
          </mesh>
          <group position={[0.55,0.55,0]} ref={arm3}>
            <mesh><sphereGeometry args={[0.16,32,32]}/><meshStandardMaterial color={C_GREEN} metalness={0.8} roughness={0.1} emissive={C_GREEN} emissiveIntensity={0.2}/></mesh>
            <group ref={claw1} position={[0.08,0.22,0.1]}>
              <mesh><boxGeometry args={[0.06,0.28,0.06]}/><meshStandardMaterial color={C_METAL} metalness={0.9} roughness={0.05}/></mesh>
            </group>
            <group ref={claw2} position={[0.08,0.22,-0.1]}>
              <mesh><boxGeometry args={[0.06,0.28,0.06]}/><meshStandardMaterial color={C_METAL} metalness={0.9} roughness={0.05}/></mesh>
            </group>
            <group ref={board} position={[0.1,0.42,0]}>
              <mesh castShadow><boxGeometry args={[0.35,0.05,0.25]}/><meshStandardMaterial color="#0f3a1e" metalness={0.3} roughness={0.7}/></mesh>
              {[[0.05,0.04,0.03],[-0.05,0.04,-0.06],[0.1,0.04,-0.05]].map((p,i)=>(
                <mesh key={i} position={p}>
                  <boxGeometry args={[0.07,0.03,0.07]}/>
                  <meshStandardMaterial color={i%2===0?C_GREEN:C_AMBER} metalness={0.5} roughness={0.3} emissive={i%2===0?C_GREEN:C_AMBER} emissiveIntensity={0.4}/>
                </mesh>
              ))}
            </group>
          </group>
        </group>
      </group>
      {[0, Math.PI*0.5, Math.PI, Math.PI*1.5].map((angle,i)=>(
        <mesh key={i} position={[Math.cos(angle)*0.65,0.1,Math.sin(angle)*0.65]}>
          <sphereGeometry args={[0.04,16,16]}/>
          <meshStandardMaterial color={i%2===0?C_GREEN:C_AMBER} emissive={i%2===0?C_GREEN:C_AMBER} emissiveIntensity={1}/>
        </mesh>
      ))}
    </group>
  )
}

function FloatingParticles() {
  const mesh = useRef()
  const positions = useMemo(() => {
    const pos = new Float32Array(80*3)
    for (let i=0;i<80;i++){
      pos[i*3]  =(Math.random()-0.5)*10
      pos[i*3+1]=(Math.random()-0.5)*8
      pos[i*3+2]=(Math.random()-0.5)*6
    }
    return pos
  },[])
  useFrame((s)=>{ if(mesh.current){mesh.current.rotation.y=s.clock.elapsedTime*0.03;mesh.current.rotation.x=s.clock.elapsedTime*0.015} })
  return (
    <points ref={mesh}>
      <bufferGeometry><bufferAttribute attach="attributes-position" array={positions} count={80} itemSize={3}/></bufferGeometry>
      <pointsMaterial size={0.03} color={C_GREEN} transparent opacity={0.6} sizeAttenuation/>
    </points>
  )
}

function OrbitRings() {
  const r1=useRef(), r2=useRef()
  useFrame((s)=>{ if(r1.current)r1.current.rotation.y=s.clock.elapsedTime*0.4; if(r2.current)r2.current.rotation.x=s.clock.elapsedTime*0.3 })
  return (<>
    <mesh ref={r1}><torusGeometry args={[2.2,0.008,8,120]}/><meshStandardMaterial color={C_GREEN} emissive={C_GREEN} emissiveIntensity={0.5} transparent opacity={0.3}/></mesh>
    <mesh ref={r2} rotation={[Math.PI/3,0,0]}><torusGeometry args={[2.8,0.005,8,120]}/><meshStandardMaterial color={C_AMBER} emissive={C_AMBER} emissiveIntensity={0.5} transparent opacity={0.2}/></mesh>
  </>)
}

function GridFloor() {
  return (
    <mesh rotation={[-Math.PI/2,0,0]} position={[0,-2,0]}>
      <planeGeometry args={[20,20,30,30]}/>
      <meshStandardMaterial color="#001a08" wireframe transparent opacity={0.25}/>
    </mesh>
  )
}

export default function HeroScene({ scrollY=0 }) {
  return (
    <Canvas camera={{position:[4,2,4],fov:45}} shadows gl={{antialias:true,alpha:true}} style={{background:'transparent'}}>
      <ambientLight intensity={0.2}/>
      <spotLight position={[5,8,5]}  intensity={2}   color={C_GREEN} castShadow angle={0.4} penumbra={0.5}/>
      <spotLight position={[-5,4,-3]} intensity={1}  color={C_AMBER}/>
      <pointLight position={[0,0.5,0]} intensity={1} color={C_GREEN} distance={4}/>
      <RobotArm scrollY={scrollY}/>
      <FloatingParticles/>
      <OrbitRings/>
      <GridFloor/>
      <fog attach="fog" args={['#060e18',8,20]}/>
    </Canvas>
  )
}
