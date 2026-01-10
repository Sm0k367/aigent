"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Float } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useChat } from "ai/react";
import * as THREE from "three";

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

      <AgentOrb position={[-3, 1, -2]} />
      <AgentOrb position={[3, -1, -3]} />
      <AgentOrb position={[0, 2, -1]} />
      <AgentOrb position={[-2, -2, -4]} />
      <AgentOrb position={[2, 0, -5]} />
    </>
  );
}

export default function Home() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
  } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "init",
        role: "assistant",
        content: "AIGENT online. Sovereign intelligence awaits your command.",
      },
    ],
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const hasChatStarted = messages.length > 1;

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

      {/* Welcome overlay — fades when chat active */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-1000 ${
          hasChatStarted ? "opacity-0" : "opacity-100"
        }`}
      >
        <h1 className="text-7xl md:text-9xl font-bold text-epic-gold tracking-wider mb-8 animate-pulse-slow">
          AIGENT
        </h1>
        <p className="text-2xl md:text-4xl text-epic-gold opacity-80">
          Sovereign Intelligence Awakens
        </p>
      </div>

      {/* Chat interface overlay */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none pb-8">
        <div className="pointer-events-auto w-full max-w-3xl px-4">
          <div className="bg-void-deep/90 backdrop-blur-lg rounded-xl shadow-2xl border border-epic-gold/30 overflow-hidden">
            <div className="max-h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-md px-5 py-3 rounded-2xl shadow-md ${
                      msg.role === "user"
                        ? "bg-epic-gold text-void-black font-semibold"
                        : "bg-void-black/80 text-epic-gold border border-epic-gold/20"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-void-black/80 text-epic-gold border border-epic-gold/20 px-5 py-3 rounded-2xl">
                    Manifesting...
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex gap-2 p-4 border-t border-epic-gold/20"
            >
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Command the agents..."
                disabled={isLoading}
                className="flex-1 bg-void-black/60 text-epic-gold placeholder-epic-gold/60 border border-epic-gold/40 rounded-xl px-5 py-3 focus:outline-none focus:border-epic-gold-glow disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-epic-gold text-void-black px-8 py-3 rounded-xl font-bold hover:bg-epic-gold-glow transition disabled:opacity-50"
              >
                {isLoading ? "..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
