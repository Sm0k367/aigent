"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Float } from "@react-three/drei";
import { useRef } from "react";

function AgentOrb({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFD700"
          emissiveIntensity={5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 10]} intensity={2} color="#FFD700" />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {/* Initial agent orbs — representing the "army" awakening */}
      <AgentOrb position={[-3, 1, -2]} />
      <AgentOrb position={[3, -1, -3]} />
      <AgentOrb position={[0, 2, -1]} />
      <AgentOrb position={[-2, -2, -4]} />
      <AgentOrb position={[2, 0, -5]} />
    </>
  );
}

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Scene />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={20}
        />
      </Canvas>

      {/* Overlay welcome text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-7xl md:text-9xl font-bold text-epic-gold tracking-wider mb-8 animate-pulse">
          AIGENT
        </h1>
        <p className="text-2xl md:text-4xl text-epic-gold opacity-80">
          Sovereign Intelligence Awakens
        </p>
      </div>
    </main>
  );
}
