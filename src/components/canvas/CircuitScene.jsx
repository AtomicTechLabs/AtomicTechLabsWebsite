import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function CircuitBoard({ position = [0,0,0], rotation = [0,0,0] }) {
  const group = useRef()
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.3 + rotation[1]
      group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.2
    }
  })

  const traces = useMemo(() => {
    const lines = []
    for (let i = 0; i < 8; i++) {
      lines.push({
        x: -0.4 + i * 0.12,
        y: -0.3,
        l: 0.2 + Math.random() * 0.4
      })
    }
    return lines
  }, [])

  return (
    <group ref={group} position={position}>
      {/* Board */}
      <mesh castShadow>
        <boxGeometry args={[1.2, 0.06, 0.9]} />
        <meshStandardMaterial color="#0d3320" metalness={0.3} roughness={0.8} />
      </mesh>

      {/* Main IC chip */}
      <mesh position={[0, 0.06, 0]}>
        <boxGeometry args={[0.3, 0.04, 0.3]} />
        <meshStandardMaterial color="#111" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.09, 0]}>
        <boxGeometry args={[0.22, 0.02, 0.22]} />
        <meshStandardMaterial color="#56a22e" emissive="#56a22e" emissiveIntensity={0.6} />
      </mesh>

      {/* Small components */}
      {[[-0.35, 0.06, 0.25], [0.35, 0.06, 0.25], [-0.35, 0.06, -0.2], [0.35, 0.06, -0.2]].map((p, i) => (
        <mesh key={i} position={p}>
          <boxGeometry args={[0.1, 0.04, 0.06]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#f5a623' : '#56a22e'}
            emissive={i % 2 === 0 ? '#f5a623' : '#56a22e'}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {/* LED indicator */}
      <mesh position={[0.45, 0.07, 0.35]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#56a22e" emissive="#56a22e" emissiveIntensity={2} />
      </mesh>

      {/* Traces (wires) as thin boxes */}
      {traces.map((t, i) => (
        <mesh key={i} position={[t.x, 0.04, t.y]}>
          <boxGeometry args={[0.01, 0.005, t.l]} />
          <meshStandardMaterial color="#56a22e" emissive="#56a22e" emissiveIntensity={0.3} transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  )
}

export default function CircuitScene() {
  return (
    <Canvas
      camera={{ position: [0, 3, 5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <spotLight position={[5, 8, 5]} intensity={2} color="#56a22e" angle={0.4} penumbra={0.8} />
      <pointLight position={[-3, 2, 0]} intensity={1} color="#f5a623" />

      <CircuitBoard position={[-1.5, 0, 0]} rotation={[0, 0.5, 0]} />
      <CircuitBoard position={[1.5, 0.5, -0.5]} rotation={[0, -0.3, 0]} />
      <CircuitBoard position={[0, -0.5, 1]} rotation={[0, 0.8, 0]} />

      <fog attach="fog" args={['#0a1420', 6, 14]} />
    </Canvas>
  )
}
