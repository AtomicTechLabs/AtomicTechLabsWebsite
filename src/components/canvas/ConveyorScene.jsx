import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text3D, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ConveyorBelt() {
  const belt = useRef()
  useFrame((state) => {
    if (belt.current) {
      belt.current.children.forEach(child => {
        if (child.userData.isBelt) {
          child.position.x -= 0.01
          if (child.position.x < -6) child.position.x = 6
        }
      })
    }
  })
  return (
    <group ref={belt}>
      {Array.from({length: 20}).map((_, i) => (
        <mesh key={i} position={[-6 + i*0.7, -1.5, 0]} userData={{isBelt: true}}>
          <boxGeometry args={[0.6, 0.12, 2]} />
          <meshStandardMaterial color="#1a2636" metalness={0.8} roughness={0.3} />
        </mesh>
      ))}
    </group>
  )
}

function Chip({ position, color = '#56a22e', scale = 1 }) {
  const mesh = useRef()
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.x -= 0.008
      if (mesh.current.position.x < -5) mesh.current.position.x = 5
      mesh.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })
  return (
    <group ref={mesh} position={position} scale={scale}>
      <mesh position={[0, -1.3, 0]}>
        <boxGeometry args={[0.5, 0.1, 0.4]} />
        <meshStandardMaterial color="#0f3a1e" metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh position={[0, -1.22, 0]}>
        <boxGeometry args={[0.25, 0.06, 0.25]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.3} emissive={color} emissiveIntensity={0.5} />
      </mesh>
      {[[-0.3,0],[0.3,0],[0,-0.25],[0,0.25]].map(([x,z],i) => (
        <mesh key={i} position={[x,-1.27,z]}>
          <cylinderGeometry args={[0.02,0.02,0.08,8]} />
          <meshStandardMaterial color="#888" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}
    </group>
  )
}

function Sensor({ position }) {
  const mesh = useRef()
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.x -= 0.008
      if (mesh.current.position.x < -5) mesh.current.position.x = 5
    }
  })
  return (
    <group ref={mesh} position={position}>
      <mesh position={[0, -1.3, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.3, 16]} />
        <meshStandardMaterial color="#1a2a4a" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -1.1, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 16]} />
        <meshStandardMaterial color="#f5a623" emissive="#f5a623" emissiveIntensity={0.8} />
      </mesh>
    </group>
  )
}

function MiniRobot({ position }) {
  const mesh = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (mesh.current) {
      mesh.current.position.x -= 0.006
      if (mesh.current.position.x < -5) mesh.current.position.x = 5
      mesh.current.children[1].rotation.z = Math.sin(t * 2) * 0.3
      mesh.current.children[2].rotation.z = -Math.sin(t * 2) * 0.3
    }
  })
  return (
    <group ref={mesh} position={position} scale={0.7}>
      {/* Body */}
      <mesh position={[0, -1.0, 0]}>
        <boxGeometry args={[0.4, 0.5, 0.3]} />
        <meshStandardMaterial color="#1a2636" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Left arm */}
      <mesh position={[-0.28, -1.05, 0]}>
        <boxGeometry args={[0.1, 0.35, 0.1]} />
        <meshStandardMaterial color="#56a22e" metalness={0.7} roughness={0.2} emissive="#56a22e" emissiveIntensity={0.2} />
      </mesh>
      {/* Right arm */}
      <mesh position={[0.28, -1.05, 0]}>
        <boxGeometry args={[0.1, 0.35, 0.1]} />
        <meshStandardMaterial color="#56a22e" metalness={0.7} roughness={0.2} emissive="#56a22e" emissiveIntensity={0.2} />
      </mesh>
      {/* Head */}
      <mesh position={[0, -0.68, 0]}>
        <boxGeometry args={[0.32, 0.28, 0.28]} />
        <meshStandardMaterial color="#1e3360" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.08, -0.65, 0.15]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#56a22e" emissive="#56a22e" emissiveIntensity={2} />
      </mesh>
      <mesh position={[0.08, -0.65, 0.15]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#56a22e" emissive="#56a22e" emissiveIntensity={2} />
      </mesh>
    </group>
  )
}

export default function ConveyorScene() {
  return (
    <Canvas
      camera={{ position: [0, 2, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <spotLight position={[0, 6, 4]} intensity={2} color="#56a22e" angle={0.5} penumbra={0.5} />
      <spotLight position={[-4, 4, 0]} intensity={1} color="#f5a623" />

      <ConveyorBelt />
      <Chip position={[-3, 0, 0]} color="#56a22e" />
      <Chip position={[0, 0, 0]} color="#f5a623" scale={0.8} />
      <Chip position={[3, 0, 0]} color="#56a22e" scale={1.2} />
      <Sensor position={[-1.5, 0, 0]} />
      <MiniRobot position={[1.5, 0, 0]} />

      <fog attach="fog" args={['#0a1420', 6, 15]} />
    </Canvas>
  )
}
