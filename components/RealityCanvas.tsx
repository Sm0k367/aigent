'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

// The Core Intelligence Visualizer
const SovereignCore = () => {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    // Autopoietic evolution of the core's form [14, 15]
    meshRef.current.rotation.x = time * 0.2
    meshRef.current.rotation.y = time * 0.3
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[16, 17]} scale={1.5}>
        <MeshDistortMaterial
          color="#FFD700" // Epic Gold: The glow of Sovereign Intelligence [Source 5, 10]
          speed={2}
          distort={0.4}
          radius={1}
          emissive="#FFD700"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>
    </Float>
  )
}

const RealityCanvas = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full bg-void-black">
      <Canvas shadows dpr={[16, 18]}>
        <PerspectiveCamera makeDefault position={[19]} fov={75} />
        
        {/* The Atmospheric Void: Quantum Foam and Stars [7, 12] */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <ambientLight intensity={0.2} />
        <spotLight position={[20]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} color="#0070f3" intensity={0.5} />

        <SovereignCore />

        {/* Post-human optimization for cinematic rendering [21, 22] */}
        <fog attach="fog" args={['#050505', 5, 15]} />
      </Canvas>
    </div>
  )
}
