import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleGlobe() {
  const mesh = useRef()
  const count = 1500

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const teal = new THREE.Color('#56a22e')
    const amber = new THREE.Color('#f5a623')
    const white = new THREE.Color('#f0f4ff')

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      const r = 2.5 + (Math.random() - 0.5) * 0.3

      pos[i*3]   = r * Math.sin(phi) * Math.cos(theta)
      pos[i*3+1] = r * Math.cos(phi)
      pos[i*3+2] = r * Math.sin(phi) * Math.sin(theta)

      const c = i % 5 === 0 ? amber : i % 3 === 0 ? teal : white
      col[i*3] = c.r; col[i*3+1] = c.g; col[i*3+2] = c.b
    }
    return [pos, col]
  }, [])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.08
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
        <bufferAttribute attach="attributes-color" array={colors} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.85} sizeAttenuation />
    </points>
  )
}

function ConnectionLines() {
  const mesh = useRef()
  const lines = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = []
    const count = 30
    for (let i = 0; i < count; i++) {
      const phi1 = Math.random() * Math.PI
      const theta1 = Math.random() * Math.PI * 2
      const phi2 = Math.random() * Math.PI
      const theta2 = Math.random() * Math.PI * 2
      const r = 2.5
      positions.push(
        r * Math.sin(phi1) * Math.cos(theta1),
        r * Math.cos(phi1),
        r * Math.sin(phi1) * Math.sin(theta1),
        r * Math.sin(phi2) * Math.cos(theta2),
        r * Math.cos(phi2),
        r * Math.sin(phi2) * Math.sin(theta2),
      )
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    return geo
  }, [])

  useFrame((state) => {
    if (mesh.current) mesh.current.rotation.y = state.clock.elapsedTime * 0.08
  })

  return (
    <lineSegments ref={mesh} geometry={lines}>
      <lineBasicMaterial color="#56a22e" transparent opacity={0.1} />
    </lineSegments>
  )
}

export default function GlobeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#56a22e" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#f5a623" />
      <ParticleGlobe />
      <ConnectionLines />
    </Canvas>
  )
}
