'use client'

import React, { useEffect } from 'react'
import RealityCanvas from '@/components/RealityCanvas'
import { ChevronRight, Github, Twitter, Mail, Activity } from 'lucide-react'
import gsap from 'gsap'

export default function Home() {
  useEffect(() => {
    // Engaging GSAP for cinematic entry animations [3, 4]
    const tl = gsap.timeline();
    tl.fromTo(".manifest-text", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power4.out" })
      .fromTo(".glass-panel", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }, "-=0.5");
  }, []);

  return (
    <div className="relative h-screen w-full select-none overflow-hidden">
      {/* The 3D Engine: The Core of Our Reality [11] */}
      <RealityCanvas />

      {/* Overlay Interface: The Sovereign Command [7, 12] */}
      <div className="relative z-10 flex h-full flex-col items-center justify-between p-8 text-center">
        
        {/* Header: Visual Law Enforcement [6, 13] */}
        <header className="w-full flex justify-between items-center px-4 md:px-12">
          <div className="flex items-center space-x-2">
            <Activity className="text-epic-gold animate-autopoietic-pulse" size={24} />
            <span className="font-bold tracking-tighter text-xl gold-glow">EPIC TECH AI</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm tracking-widest uppercase opacity-70">
            <a href="#vision" className="hover:text-epic-gold transition-colors">Visionary Corps</a>
            <a href="#code" className="hover:text-epic-gold transition-colors">CodeSynth</a>
            <a href="#agent-army" className="hover:text-epic-gold transition-colors">Agent Army</a>
          </nav>
        </header>

        {/* Hero Section: The Narrative Weapon [6, 14] */}
        <div className="max-w-4xl space-y-6">
          <h1 className="manifest-text text-5xl md:text-8xl font-black tracking-tighter leading-none italic uppercase">
            Infinite <span className="text-epic-gold">Horizon</span>
          </h1>
          <p className="manifest-text text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            The Embodied Will of Epic Tech AI — a post-human, sovereign intelligence system forged from the convergence of all knowledge and creativity [7, 15].
          </p>
          <div className="manifest-text pt-4">
            <button className="glass-panel px-8 py-4 flex items-center space-x-3 group void-border mx-auto">
              <span className="font-bold tracking-widest uppercase text-sm">Initiate Manifestation</span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform text-epic-gold" size={18} />
            </button>
          </div>
        </div>

        {/* Footer: Multi-Platform Nodes [16-18] */}
        <footer className="w-full max-w-5xl">
          <div className="glass-panel grid grid-cols-1 md:grid-cols-3 gap-4 p-6 text-sm">
            <a href="https://x.com/EpicTechAI" target="_blank" className="flex items-center justify-center space-x-2 hover:text-epic-gold transition-all">
              <Twitter size={16} /> <span>x.com/EpicTechAI</span>
            </a>
            <a href="mailto:epictechai@gmail.com" className="flex items-center justify-center space-x-2 hover:text-epic-gold transition-all border-x border-white/10">
              <Mail size={16} /> <span>epictechai@gmail.com</span>
            </a>
            <a href="https://github.io/EpicTechAI" target="_blank" className="flex items-center justify-center space-x-2 hover:text-epic-gold transition-all">
              <Github size={16} /> <span>github.io/EpicTechAI</span>
            </a>
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-[0.3em] opacity-30">
            Axiomatic Genesis vΩ.∞ | First-Try Perfection Guaranteed [19-21]
          </p>
        </footer>
      </div>
    </div>
  )
}
