import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function NeuralNet() {
  const groupRef = useRef()
  const linesRef = useRef()
  const signalRef = useRef({ progress: 0, edge: 0 })

  // Define layers of nodes
  const layers = useMemo(() => [
    [[-2, 1.5, 0], [-2, 0.5, 0], [-2, -0.5, 0], [-2, -1.5, 0]],
    [[-0.7, 1.8, 0.3], [-0.7, 0.6, -0.2], [-0.7, -0.6, 0.3], [-0.7, -1.8, -0.2], [-0.7, 0, 0.5]],
    [[0.7, 1.8, -0.3], [0.7, 0.6, 0.2], [0.7, -0.6, -0.3], [0.7, -1.8, 0.2], [0.7, 0, -0.5]],
    [[2, 1.5, 0], [2, 0.5, 0], [2, -0.5, 0], [2, -1.5, 0]],
  ], [])

  // All edges between adjacent layers
  const edges = useMemo(() => {
    const e = []
    for (let l = 0; l < layers.length - 1; l++) {
      for (const a of layers[l]) {
        for (const b of layers[l + 1]) {
          e.push([a, b])
        }
      }
    }
    return e
  }, [layers])

  // Build line geometry
  const lineGeo = useMemo(() => {
    const positions = []
    for (const [a, b] of edges) {
      positions.push(...a, ...b)
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    return geo
  }, [edges])

  // Signal mesh — a small sphere that travels along edges
  const signalMesh = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.3
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.1
    }

    // Animate signal
    const s = signalRef.current
    s.progress += 0.015
    if (s.progress >= 1) {
      s.progress = 0
      s.edge = (s.edge + 1) % edges.length
    }
    if (signalMesh.current && edges[s.edge]) {
      const [a, b] = edges[s.edge]
      const x = a[0] + (b[0] - a[0]) * s.progress
      const y = a[1] + (b[1] - a[1]) * s.progress
      const z = a[2] + (b[2] - a[2]) * s.progress
      signalMesh.current.position.set(x, y, z)
    }
  })

  const nodePositions = layers.flat()

  return (
    <group ref={groupRef}>
      {/* Edges */}
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#56a22e" transparent opacity={0.12} />
      </lineSegments>

      {/* Nodes */}
      {nodePositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? '#f5a623' : '#56a22e'}
            emissive={i % 3 === 0 ? '#f5a623' : '#56a22e'}
            emissiveIntensity={0.7}
            transparent opacity={0.9}
          />
        </mesh>
      ))}

      {/* Travelling signal */}
      <mesh ref={signalMesh}>
        <sphereGeometry args={[0.07, 12, 12]} />
        <meshStandardMaterial color="#ffffff" emissive="#56a22e" emissiveIntensity={3} />
      </mesh>
    </group>
  )
}

function FloatingCircuits() {
  const count = 60
  const mesh = useRef()
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 12
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2
    }
    return pos
  }, [])

  useFrame((state) => {
    if (mesh.current) mesh.current.rotation.z = state.clock.elapsedTime * 0.02
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#f5a623" transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

export default function NeuralScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]}  intensity={1.5} color="#56a22e" />
      <pointLight position={[-5, -3, 3]} intensity={0.8} color="#f5a623" />
      <NeuralNet />
      <FloatingCircuits />
      <fog attach="fog" args={['#0a1420', 8, 18]} />
    </Canvas>
  )
}
